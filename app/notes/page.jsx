"use client"

// import { createClient } from '../../utils/supabase/server'; // @는 app폴더 밖을 의미
import { createClient } from '@/utils/supabase/client'; // @는 app폴더 밖을 의미
import { useState, useEffect } from 'react';
import './style/style.css';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [addTitle, setAddTitle] = useState("");

  const supabase = createClient();

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      const { data: notes, error } = await supabase.from("notes").select();
      if (error) {
        console.error("Error fetching notes:", error);
      } else {
        setNotes(notes);
      }
    };

    fetchNotes();
  }, []);

  // Update note title
  const handleUpdate = async (id) => {
    const { data, error } = await supabase
      .from("notes")
      .update({ title: newTitle })
      .eq("id", id);

    if (error) {
      console.error("Error updating note:", error);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, title: newTitle } : note
        )
      );
      setUpdateNoteId(null);
      setNewTitle("");
    }
  };

  // Delete note
  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("notes")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting note:", error);
    } else {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  };

  // Add new note
  const handleAdd = async () => {
    const { data, error } = await supabase
      .from("notes")
      .insert([{ title: addTitle }])
      .select();

    if (error) {
      console.error("Error adding note:", error);
    } else {
      setNotes((prevNotes) => [...prevNotes, ...data]);
      setAddTitle("");
    }
  };

  return (
    <div id='note'>
      <h1 className='font-bold'>My Notes</h1>
      <div className='flex mb-3 '>
        <input
          className='border'
          type="text"
          value={addTitle}
          onChange={(e) => setAddTitle(e.target.value)}
          placeholder="Add a new note"
        />
        <button className='Write' onClick={handleAdd}>Add</button>
      </div>
      <hr />
      {notes.map((note, idx) => (
        <div key={note.id} className='flex'>
          <p>{idx + 1})</p>
          {updateNoteId === note.id ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="New title"
              />
              <button onClick={() => handleUpdate(note.id)}>Update</button>
            </>
          ) : (
            <>
              <p>{note.title}</p>
              <button className='Edit' onClick={() => setUpdateNoteId(note.id)}>Edit</button>
              <button className='Delete' onClick={() => handleDelete(note.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

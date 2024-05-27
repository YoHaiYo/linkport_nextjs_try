"use client"

import { createClient } from '@/utils/supabase/client'; // @는 app폴더 밖을 의미
import { useState, useEffect } from 'react';
import './style/style.css';

const tablename = "notes" // 여기서 supabase 테이블명 일괄조절하기

const supabase = createClient();

export default function Notes({ userid }) {
  const [notes, setNotes] = useState([]);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [addTitle, setAddTitle] = useState("");

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      const { data: notes, error } = await supabase
        .from(tablename)
        .select()
        .eq("userid", userid);  // Fetch notes for the logged-in user

      if (error) {
        console.error("Error fetching notes:", error);
      } else {
        setNotes(notes);
      }
    };

    fetchNotes();
  }, [userid]);  // Depend on userid to refetch when it changes

  // Update note title
  const handleUpdate = async (id) => {
    const { error } = await supabase
      .from(tablename)
      .update({ title: newTitle })
      .eq("id", id)
      .eq("userid", userid);  // Ensure only the user's note is updated

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
      .from(tablename)
      .delete()
      .eq("id", id)
      .eq("userid", userid);  // Ensure only the user's note is deleted

    if (error) {
      console.error("Error deleting note:", error);
    } else {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  };

  // Add new note
  const handleAdd = async () => {
    const { data, error } = await supabase
      .from(tablename)
      .insert([{ title: addTitle, userid }])  // Add userid to the new note
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
      {/* <h1 className='font-bold' style={{ color: "blue" }}>userID : {userid}</h1> */}
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
      {notes.map((note, idx) => (
        <div key={note.id} className='flex justify-between'>
          <p>{idx + 1}){note.title}</p>
          {/* <p>{note.title}</p> */}
          {updateNoteId === note.id ? (
            <>
              <div className='flex'>
                <input
                  className='border'
                  style={{ width: 100 }}
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="New title"
                />
                <button className='Update' onClick={() => handleUpdate(note.id)}>Update</button>
              </div>
            </>
          ) : (
            <>
              <div className='flex'>
                <button className='Edit' onClick={() => setUpdateNoteId(note.id)}>Edit</button>
                <button className='Delete' onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

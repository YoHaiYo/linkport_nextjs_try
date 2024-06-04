"use client"

import { createClient } from '@/utils/supabase/client'; // @는 app폴더 밖을 의미
import { useState, useEffect } from 'react';
import './style/style.css';

const tablename = "notes" // 여기서 supabase 테이블명 일괄조절하기

const supabase = createClient();

export default function Notes({ userid, useremail }) {
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
      .insert([{ title: addTitle, userid, useremail }])  // Add userid to the new note
      .select();

    if (error) {
      console.error("Error adding note:", error);
    } else {
      setNotes((prevNotes) => [...prevNotes, ...data]);
      setAddTitle("");
    }
  };

  // Edit 누르기전
  const EditBeforeNote = ({ idx, note, setUpdateNoteId, setNewTitle, handleDelete }) => {
    return (
      <>
        <div className='flex-column'>
          <div>{note.title}</div>
          <div>{note.url}</div>
          <div>{note.desc}</div>
        </div>
        <div className='absolute bottom-100 right-0'>
          <button className='edit px-2 mx-1' onClick={() => {
            setUpdateNoteId(note.id);
            setNewTitle(note.title);
          }}>Edit</button>
          <button className='delete px-2 mx-1' onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      </>
    );
  };
  // Edit 누른후
  const EditAfterNote = ({ idx, note, newTitle, setNewTitle, handleUpdate, handleDelete }) => {
    return (
      <>
        <input
          className='border'
          style={{ width: 200 }}
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder={note.title}
        />
        <button className='update' onClick={() => handleUpdate(note.id)}>Update</button>
        <button className='delete px-2 mx-1' onClick={() => handleDelete(note.id)}>Delete</button>
      </>
    );
  };


  return (
    <div id='note'>
      {/* <h1 className='font-bold' style={{ color: "blue" }}>useremail : {useremail}</h1> */}
      <h1 className='font-bold mb-2'>My Notes</h1>
      <div className='flex mb-5'>
        <input
          className='border'
          type="text"
          value={addTitle}
          onChange={(e) => setAddTitle(e.target.value)}
          placeholder="Add a new note"
        />
        <button className='write px-2' onClick={handleAdd}>Add</button>
      </div>
      {/* 카드 부분 */}
      {notes.map((note, idx) => (
        <>
          <p>{idx + 1})</p>
          <article key={note.id} className='relative mb-2'>
            <div className='flex justify-between border p-2'>
              {updateNoteId === note.id ? (
                <EditAfterNote
                  idx={idx}
                  note={note}
                  newTitle={newTitle}
                  setNewTitle={setNewTitle}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ) : (
                <EditBeforeNote
                  idx={idx}
                  note={note}
                  setUpdateNoteId={setUpdateNoteId}
                  setNewTitle={setNewTitle}
                  handleDelete={handleDelete}
                />
              )}
            </div>
          </article>
        </>
      ))}
    </div>
  );
}

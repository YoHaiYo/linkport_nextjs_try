"use client"

import { createClient } from '@/utils/supabase/client'; // @는 app폴더 밖을 의미
import { useState, useEffect } from 'react';
import './style/style.css';

const tablename = "notes"; // 여기서 supabase 테이블명 일괄조절하기

const supabase = createClient();

export default function Notes({ userid, useremail }) {
  const [notes, setNotes] = useState([]);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addUrl, setAddUrl] = useState("");
  const [addDesc, setAddDesc] = useState("");

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

  // Update note title, url, and desc
  const handleUpdate = async (id) => {
    const { error } = await supabase
      .from(tablename)
      .update({ title: newTitle, url: newUrl, desc: newDesc })
      .eq("id", id)
      .eq("userid", userid);  // Ensure only the user's note is updated

    if (error) {
      console.error("Error updating note:", error);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, title: newTitle, url: newUrl, desc: newDesc } : note
        )
      );
      setUpdateNoteId(null);
      setNewTitle("");
      setNewUrl("");
      setNewDesc("");
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
      .insert([{ title: addTitle, url: addUrl, desc: addDesc, userid, useremail }])  // Add userid to the new note
      .select();

    if (error) {
      console.error("Error adding note:", error);
    } else {
      setNotes((prevNotes) => [...prevNotes, ...data]);
      setAddTitle("");
      setAddUrl("");
      setAddDesc("");
    }
  };

  // Edit 누르기전
  const EditBeforeNote = ({ note, setUpdateNoteId, setNewTitle, setNewUrl, setNewDesc, handleDelete }) => {
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
            setNewUrl(note.url);
            setNewDesc(note.desc);
          }}>Edit</button>
          <button className='delete px-2 mx-1' onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      </>
    );
  };

  // Edit 누른후
  const EditAfterNote = ({ note, newTitle, setNewTitle, newUrl, setNewUrl, newDesc, setNewDesc, handleUpdate, handleDelete }) => {
    return (
      <>
        <input
          id={`edit-title-${note.id}`}
          name="title"
          className='border'
          style={{ width: 200 }}
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          id={`edit-url-${note.id}`}
          name="url"
          className='border'
          style={{ width: 200 }}
          type="text"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="URL"
        />
        <input
          id={`edit-desc-${note.id}`}
          name="desc"
          className='border'
          style={{ width: 200 }}
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Description"
        />
        <button className='update' onClick={() => handleUpdate(note.id)}>Update</button>
        <button className='delete px-2 mx-1' onClick={() => handleDelete(note.id)}>Delete</button>
      </>
    );
  };

  return (
    <div id='note'>
      <h1 className='font-bold mb-2'>{useremail}'s Notes</h1>
      <div className='flex mb-5'>
        <input
          id="add-title"
          name="title"
          className='border'
          type="text"
          value={addTitle}
          onChange={(e) => setAddTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          id="add-url"
          name="url"
          className='border'
          type="text"
          value={addUrl}
          onChange={(e) => setAddUrl(e.target.value)}
          placeholder="URL"
        />
        <input
          id="add-desc"
          name="desc"
          className='border'
          type="text"
          value={addDesc}
          onChange={(e) => setAddDesc(e.target.value)}
          placeholder="Description"
        />
        <button className='write px-2' onClick={handleAdd}>Add</button>
      </div>
      {/* 카드 부분 */}
      {notes.map((note, idx) => (
        <div key={note.id}>
          <p>{idx + 1})</p>
          <article className='relative mb-2'>
            <div className='flex justify-between border p-2'>
              {updateNoteId === note.id ? (
                <EditAfterNote
                  note={note}
                  newTitle={newTitle}
                  setNewTitle={setNewTitle}
                  newUrl={newUrl}
                  setNewUrl={setNewUrl}
                  newDesc={newDesc}
                  setNewDesc={setNewDesc}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ) : (
                <EditBeforeNote
                  note={note}
                  setUpdateNoteId={setUpdateNoteId}
                  setNewTitle={setNewTitle}
                  setNewUrl={setNewUrl}
                  setNewDesc={setNewDesc}
                  handleDelete={handleDelete}
                />
              )}
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

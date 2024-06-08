// pages/notes.js
"use client"

import { createClient } from '@/utils/supabase/client'; // @는 app폴더 밖을 의미
import { useState, useEffect } from 'react';
import Link from "next/link";
import './style/style.css';

const tablename = "notes"; // 여기서 supabase 테이블명 일괄조절하기

const supabase = createClient();

const EditBeforeNote = ({ note, setUpdateNoteId, setNewTitle, setNewUrl, setNewDesc, handleDelete }) => (
  <>
    {/* buttons */}
    <div className="flex justify-end text-gray-100">
      <button className="edit bg-green-500 px-2 mx-1 rounded-md" onClick={() => {
        setUpdateNoteId(note.id);
        setNewTitle(note.title);
        setNewUrl(note.url);
        setNewDesc(note.desc);
      }}>Edit</button>
      <button className="delete bg-red-500 px-2 mx-1 rounded-md" onClick={() => handleDelete(note.id)}>Delete</button>
      <a className="delete bg-blue-500 px-2 mx-1 rounded-md" href={`http://${note.url}`} target='_blank'>Go</a>
    </div>
    {/* contents */}
    <h3 className="font-bold text-gray-600">title : {note.title}</h3>
    <p className="mt-3 text-gray-600">url : {note.url}</p>
    <p className="mt-3 text-gray-600">desc : {note.desc}</p>
  </>
);

const EditAfterNote = ({ note, newTitle, setNewTitle, newUrl, setNewUrl, newDesc, setNewDesc, handleUpdate, handleDelete }) => (
  <>
    {/* buttons */}
    <div className="flex justify-end text-gray-100">
      <button button className="update bg-green-500 rounded-md" onClick={() => handleUpdate(note.id)}>Update</button>
      <button className="delete bg-red-500 px-2 mx-1 rounded-md" onClick={() => handleDelete(note.id)}>Delete</button>
      <a className="delete bg-blue-500 px-2 mx-1 rounded-md" href={`http://${note.url}`} target='_blank'>Go</a>
    </div>
    {/* contents */}
    <input
      id={`edit-title-${note.id}`}
      name="title"
      className="border text-gray-600"
      style={{ width: "auto" }}
      type="text"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      placeholder="Title"
    />
    <input
      id={`edit-url-${note.id}`}
      name="url"
      className="mt-3 border text-gray-600"
      style={{ width: 200 }}
      type="text"
      value={newUrl}
      onChange={(e) => setNewUrl(e.target.value)}
      placeholder="URL"
    />
    <input
      id={`edit-desc-${note.id}`}
      name="desc"
      className="mt-3 border text-gray-600"
      style={{ width: 200 }}
      type="text"
      value={newDesc}
      onChange={(e) => setNewDesc(e.target.value)}
      placeholder="Description"
    />
  </>
);

const Card = ({ note, updateNoteId, setUpdateNoteId, setNewTitle, setNewUrl, setNewDesc, handleDelete, handleUpdate, newTitle, newUrl, newDesc }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-1">
        <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
      </div>
      <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full p-3">
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
    </div>
  );
};

export default function Notes({ userid, useremail }) {
  const [notes, setNotes] = useState([]);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addUrl, setAddUrl] = useState("");
  const [addDesc, setAddDesc] = useState("");

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

  return (
    <section
      className="py-12 bg-gray-900xx text-gray-600 sm:py-12 lg:py-16"
      style={{
        backgroundImage: 'url("/svg/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl xl:text-4xl mb-6">
            {useremail}'s Notes
          </h2>
          <p className="mb-4 text-gray-900">
            Please add url to make a card!
          </p>
        </div>
        <div className="flex mb-5 p-3 justify-center">
          <input
            id="add-title"
            name="title"
            className="border border-gray-400 text-gray-600"
            type="text"
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            id="add-url"
            name="url"
            className="border border-gray-400 text-gray-600"
            type="text"
            value={addUrl}
            onChange={(e) => setAddUrl(e.target.value)}
            placeholder="URL"
          />
          <input
            id="add-desc"
            name="desc"
            className="border border-gray-400 text-gray-600"
            type="text"
            value={addDesc}
            onChange={(e) => setAddDesc(e.target.value)}
            placeholder="Description"
          />
          <button className="write bg-violet-500 text-gray-100 px-2" onClick={handleAdd}>Add</button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:mt-12 lg:mt-20 sm:text-left">
          {notes.map((note) => (
            <Card
              key={note.id}
              note={note}
              updateNoteId={updateNoteId}
              setUpdateNoteId={setUpdateNoteId}
              setNewTitle={setNewTitle}
              setNewUrl={setNewUrl}
              setNewDesc={setNewDesc}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              newTitle={newTitle}
              newUrl={newUrl}
              newDesc={newDesc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

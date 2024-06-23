// pages/notes.js
"use client"

import { createClient } from '@/utils/supabase/client'; // @는 app폴더 밖을 의미
import { useState, useEffect } from 'react';
import Link from "next/link";
import './style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDeleteLeft, faEdit, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { colors } from '@/utils/theme/colors';

const tablename = "notes"; // 여기서 supabase 테이블명 일괄조절하기

const supabase = createClient();

const EditBeforeNote = ({ note, setUpdateNoteId, setNewTitle, setNewUrl, setNewDesc, handleDelete }) => (
  <>
    {/* buttons */}
    <div className="flex justify-between text-gray-100">
      {/* 즐겨찾기 */}
      <FontAwesomeIcon
        className='cursor-pointer text-gray-300 hover:text-blue-500'
        icon={faStar}
      />
      {/* 타이틀 */}
      <h3 className="font-bold text-gray-600">{note.title ? note.title : "Edit title !"}</h3>
      {/* 수정 */}
      <FontAwesomeIcon
        className='cursor-pointer text-gray-300 hover:text-violet-500'
        icon={faEdit} onClick={() => {
          setUpdateNoteId(note.id);
          setNewTitle(note.title);
          setNewUrl(note.url);
          setNewDesc(note.desc);
        }}
      />
      {/* <button className="delete bg-red-500 px-2 mx-1 rounded-md" onClick={() => handleDelete(note.id)}>Delete</button> */}
      {/* <a className="delete bg-blue-500 px-2 mx-1 rounded-md" href={`http://${note.url}`} target='_blank'>Go</a> */}
    </div>
    {/* contents */}

    <a href={`${note.url}`} target='_blank'>

      <p className="mt-3 text-gray-600">{note.url ? note.url : "URL must needed !"}</p>
      <p className="mt-3 text-gray-600">{note.desc ? note.desc : "Edit description !"}</p>
    </a>
  </>
);

const EditAfterNote = ({ note, newTitle, setNewTitle, newUrl, setNewUrl, newDesc, setNewDesc, handleUpdate, handleDelete }) => (
  <>
    {/* buttons */}
    <div className="flex justify-end text-gray-100">
      {/* 삭제 */}
      <FontAwesomeIcon className='cursor-pointer mr-3 my-1 text-gray-300 hover:text-red-400'
        icon={faTrash} onClick={() => handleDelete(note.id)}
      />
      {/* 업데이트 */}
      <FontAwesomeIcon className='cursor-pointer my-1 text-gray-300 hover:text-green-400'
        icon={faCheck} onClick={() => handleUpdate(note.id)}
      />
      {/* <button button className="update bg-green-500 rounded-md" onClick={() => handleUpdate(note.id)}>Update</button>
      <button className="delete bg-red-500 px-2 mx-1 rounded-md" onClick={() => handleDelete(note.id)}>Delete</button> */}
      {/* <a className="delete bg-blue-500 px-2 mx-1 rounded-md" href={`http://${note.url}`} target='_blank'>Go</a> */}
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
      <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full p-3"
      >
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
        {/* add-bar */}
        <div className="flex mb-1 p-3 justify-center">
          {/* <input
            id="add-title"
            name="title"
            className="border border-gray-400 text-gray-600"
            type="text"
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
            placeholder="Title"
          /> */}
          <input
            id="add-url"
            name="url"
            className="w-full md:w-1/2 rounded-tl rounded-bl p-1 border border-gray-400 text-gray-600"
            type="text"
            value={addUrl}
            onChange={(e) => setAddUrl(e.target.value)}
            placeholder="Add your multiple URLs at once!"
          />
          {/* <input
            id="add-desc"
            name="desc"
            className="border border-gray-400 text-gray-600"
            type="text"
            value={addDesc}
            onChange={(e) => setAddDesc(e.target.value)}
            placeholder="Description"
          /> */}
          <button className="write rounded-tr rounded-br bg-violet-500 text-gray-100 px-2" onClick={handleAdd}>Add</button>
        </div>
        {/* /add-bar */}

        {/* filter-bar */}
        <div className="flex mb-1 p-3 justify-end">
          <div className="w-64 h-11 relative">
            <div className="w-64 h-11 left-0 top-0 absolute rounded-[10px] border-2 border-violet-500" />
            <div className="w-[30px] h-[33px] left-[63px] top-[6px] absolute" />
            <div className="w-[60px] h-[15px] left-[155px] top-[15px] absolute justify-center items-center gap-1 inline-flex">
              <div className="text-center text-gray-900 text-xs font-normal font-['Inter']">Popular</div>
              <div className="w-3.5 h-3.5 pl-[1.18px] pr-[1.19px] pt-[2.93px] pb-[4.38px] origin-top-left rotate-180 justify-center items-center flex" />
            </div>
            <div className="w-8 h-[15px] left-[112px] top-[15px] absolute justify-center items-center gap-1 inline-flex">
              <div className="text-center text-gray-900 text-xs font-normal font-['Inter']">All</div>
              <div className="w-3.5 h-3.5 pl-[1.18px] pr-[1.19px] pt-[2.93px] pb-[4.38px] origin-top-left rotate-180 justify-center items-center flex" />
            </div>
            <div className="w-4 h-4 left-[242px] top-[14px] absolute origin-top-left rotate-180 justify-center items-center inline-flex" />
            <div className="w-[72.50px] h-4 left-[24px] top-[14px] absolute justify-center items-center gap-[9px] inline-flex">
              <div className="w-4 h-4 relative">
                <div className="w-[7px] h-1 left-0 top-0 absolute bg-violet-500" />
                <div className="w-[7px] h-1 left-0 top-[6px] absolute bg-violet-500" />
                <div className="w-[7px] h-1 left-0 top-[12px] absolute bg-violet-500" />
                <div className="w-[7px] h-1 left-[9px] top-0 absolute bg-violet-500" />
                <div className="w-[7px] h-1 left-[9px] top-[6px] absolute bg-violet-500" />
                <div className="w-[7px] h-1 left-[9px] top-[12px] absolute bg-violet-500" />
              </div>
            </div>
          </div>
        </div>
        {/* /filter-bar */}

        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:text-left">
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

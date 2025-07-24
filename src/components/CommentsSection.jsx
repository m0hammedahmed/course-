import React, { useState } from "react";
import "../css/CommentsSection.css";
import QuizQuestion from "./QuizQuestion"; // Import QuizQuestion component if needed
const initialComments = [
  {
    id: 1,
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Student Name Goes Here",
    date: "Oct 15, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Student Name Goes Here",
    date: "Oct 19, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function CommentsSection() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (!newComment.trim()) return;
    const newEntry = {
      id: comments.length + 1,
      name: "New Student",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      text: newComment,
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    };
    setComments([...comments, newEntry]);
    setNewComment("");
  };

  return (
    <>
    <div className="comments-container">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.avatar} alt="avatar" className="avatar" />
          <div className="comment-body">
            <h4>{comment.name}</h4>
            <p className="date">{comment.date}</p>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}

      <div className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment"
        />
        <button onClick={handleSubmit}>Submit Review ➜</button>
      </div>
    </div>
    

    </>

  );
}

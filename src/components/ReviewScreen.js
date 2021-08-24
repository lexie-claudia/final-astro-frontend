import React, { useState } from "react";
import Form from "./ReviewScreen/Form";
import "../App.css";
import ReviewList from "./ReviewScreen/ReviewList";
import {uuid} from 'uuidv4'

function ReviewScreen() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ university: "", review: "", id: uuid() });
  const [editing, setEditing] = useState(false);

  return (
    <div className="app">
      <h1>Internship Reviews</h1>
      <Form
        editing={editing}
        form={form}
        reviews={reviews}
        setEditing={setEditing}
        setForm={setForm}
        setReviews={setReviews}
      />
      <ReviewList
        reviews={reviews}
        setForm={setForm}
        setEditing={setEditing}
        setReviews={setReviews}
      />
    </div>
  );
}

export default ReviewScreen;
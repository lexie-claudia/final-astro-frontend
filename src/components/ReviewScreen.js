import React, { useState } from "react";
import Footer from './Footer';
import Form from "./ReviewScreen/Form";
import "../App.css";
import ReviewList from "./ReviewScreen/ReviewList";
import RegistarionFormnavBar from './RegistrationScreenComponents/RegistrationFormNavBar';

import {uuid} from 'uuidv4'

function ReviewScreen() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ university: "", review: "", id: uuid() });
  const [editing, setEditing] = useState(false);

  return (
   <div>
    <div><RegistarionFormnavBar logo="Review Page"/></div>
      <div className="app">
      <h1>INTERNSHIP REVIEWS</h1>
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
    <Footer/>
    </div>
  );
}

export default ReviewScreen;
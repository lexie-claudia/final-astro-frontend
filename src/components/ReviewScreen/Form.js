import React from "react";
import { uuid } from "uuidv4";

export const Form = ({
  editing,
  form,
  reviews,
  setEditing,
  setForm,
  setReviews,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // set Form = form['restaurant] = stuff I typed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ restaurant: "", review: "", id: uuid() });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditing(false);
    const updatedReviews = reviews.map((review) =>
      review.id === form.id ? form : review
    );
    setReviews(updatedReviews);
    setForm({ restaurant: "", review: "", id: uuid() });
  };

  return (
    <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
      <h2>Leave a Review</h2>
      <label htmlFor="restaurant">Your University Name</label>
      <input
        type="text"
        placeholder="University name"
        id="restaurant"
        name="restaurant"
        autoComplete="off"
        value={form.restaurant}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="company">Company your Interned at</label>
      <input
        type="text"
        placeholder="Company name"
        id="company"
        name="company"
        autoComplete="off"
        value={form.company}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="review">Review</label>
      <textarea
        value={form.review}
        placeholder="What do you think?"
        id="review"
        name="review"
        onChange={handleChange}
      />
      <button type="submit">{editing ? "Update" : "Submit"}</button>
    </form>
  );
};


export default Form;

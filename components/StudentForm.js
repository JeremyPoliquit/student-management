"use client";
import React from "react";
import useForm from "../hooks/useForm";

const StudentForm = ({ onSubmit, initialData = {} }) => {
  const { formData, handleChange, resetForm } = useForm({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    contact_number: "",
    ...initialData,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Contact Number:
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            className="grow"
          />
        </label>

        <button type="submit" className="btn btn-success btn-sm w-full text-white">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;

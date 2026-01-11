"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import styles from "./BookingForm.module.css";

export const BookingForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email (e.g. user@mail.com)", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#e44848",
          color: "#fff",
          borderRadius: "12px",
        },
      });
      return;
    }

    toast.success("Booking successfully sent!", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#101828",
        color: "#fff",
        borderRadius: "12px",
      },
    });

    setName("");
    setEmail("");
    setStartDate(null);
    setComment("");
  };

  return (
    <div className={styles.formCard}>
      <Toaster />
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name*"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email*"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className={styles.dateWrapper}>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            placeholderText="Booking date*"
            className={styles.input}
            dateFormat="dd.MM.yyyy"
            required
            minDate={new Date()}
            calendarStartDay={1}
          />
        </div>

        <textarea
          placeholder="Comment"
          className={styles.textarea}
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit" className={styles.sendBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

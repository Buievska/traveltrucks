"use client";
import styles from "./BookingForm.module.css";

export const BookingForm = () => {
  return (
    <div className={styles.formCard}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name*"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email*"
          className={styles.input}
          required
        />
        <input type="date" className={styles.input} required />
        <textarea
          placeholder="Comment"
          className={styles.textarea}
          rows={4}
        ></textarea>

        <button type="submit" className={styles.sendBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

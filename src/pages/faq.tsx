import React, { useState } from "react";
import Question from "../components/Question";
import styles from "../styles/faq.module.css";

const FAQ = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
  };
  return (
    <main>
      <header className={styles.hero}>
        <h1>F.A.Q.</h1>
      </header>
      <div className={styles.wrapper}>
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <div className={styles.formContainer}>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            setForm({ name: "", email: "", question: "" });
          }}
        >
          <h2>Have a Question to Ask?</h2>
          <span>Write us an email and we&apos;ll get back to you ASAP</span>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="question">Your Question</label>
            <textarea
              id="question"
              value={form.question}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
};

export default FAQ;

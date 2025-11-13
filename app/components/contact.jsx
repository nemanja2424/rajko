'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setSending(false);

    if (res.ok) {
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Send us a Message</h3>

      <label>
        Full Name
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          placeholder="Tell us about your travel requirements..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className={`${styles.button1} ${styles.forPC}`}
      >
        {sending ? 'Sending...' : sent ? 'Sent!' : 'Book now'}
      </a>
    </form>
  );
}

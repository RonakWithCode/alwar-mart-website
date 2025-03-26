// pages/account-delete.jsx
"use client";
import { addDeletionRequest } from '@/service/firebase';
import React, { useState } from 'react';
// import { addDeletionRequest } from '@setv'; // adjust path as needed
// addDeletionRequest
export default function AccountDelete() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the user has agreed to the terms
    if (!agreed) {
      setMessage("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    setMessage('');

    const requestData = {
      firstName,
      lastName,
      phone,
      email,
      agreed,
      // Optional note for additional context
      note: "By deleting your account, all your data will be permanently removed within 15 days."
    };

    try {
      await addDeletionRequest(requestData);
      setMessage("Your account deletion request has been submitted. All your data will be removed within 15 days.");
      // Optionally clear the form
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setAgreed(false);
    } catch (error) {
      console.error("Error submitting deletion request:", error);
      setMessage("There was an error submitting your request. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="account-delete-container" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>Account Deletion Request</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="firstName">First Name:</label><br />
          <input 
            type="text" 
            id="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="lastName">Last Name:</label><br />
          <input 
            type="text" 
            id="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone">Phone Number:</label><br />
          <input 
            type="tel" 
            id="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label><br />
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div className="terms" style={{ marginBottom: "15px" }}>
          <p style={{ fontSize: "14px" }}>
            By deleting your account, you acknowledge that all your data will be permanently removed within <strong>15 days</strong>. We may contact you on your provided phone number if necessary. 
            For any queries or requirements to email us, please use: <a href="mailto:alwar.mart.in@gmail.com">alwar.mart.in@gmail.com</a>.
          </p>
          <label style={{ fontSize: "14px" }}>
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)}
              required 
              style={{ marginRight: "5px" }}
            />
            I agree to the above terms and conditions.
          </label>
        </div>
        <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
          {loading ? "Submitting..." : "Submit Deletion Request"}
        </button>
      </form>
      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}

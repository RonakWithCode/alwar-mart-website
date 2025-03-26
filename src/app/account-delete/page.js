// pages/account-delete.jsx
"use client";
import { addDeletionRequest } from '@/service/firebase';
import React, { useState } from 'react';

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
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">Account Deletion Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm mb-2">
            By deleting your account, you acknowledge that all your data will be permanently removed within <strong>15 days</strong>. We may contact you on your provided phone number if necessary. 
            For any queries or requirements to email us, please use: <a href="mailto:alwar.mart.in@gmail.com" className="text-blue-600">alwar.mart.in@gmail.com</a>.
          </p>
          <label className="text-sm flex items-center">
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)}
              required 
              className="mr-2"
            />
            I agree to the above terms and conditions.
          </label>
        </div>
        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          {loading ? "Submitting..." : "Submit Deletion Request"}
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

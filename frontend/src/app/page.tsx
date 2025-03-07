"use client";

import React, { useState } from "react";
import {
  GetEligibilityRequest,
  GetEligibilityResponse,
} from "./types/GetEligibility";
import { createGetEligibilityRequest } from "./lib/createGetEligibilityRequest";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    healthPlan: "",
  });
  const [eligibilityResult, setEligibilityResult] =
    useState<GetEligibilityResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setEligibilityResult(null);

    try {
      const eligibilityRequest: GetEligibilityRequest =
        createGetEligibilityRequest(formData);
      const res = await fetch("http://localhost:3000/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eligibilityRequest),
      });
      const data = await res.json();
      setEligibilityResult(data);
    } catch (error) {
      console.error("Error checking eligibility:", error);
      setEligibilityResult({
        eligible: false,
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Check Your Insurance Coverage</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Health Plan</label>
          <input
            type="text"
            name="healthPlan"
            value={formData.healthPlan}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Checking..." : "Check Eligibility"}
        </button>
      </form>

      {eligibilityResult && (
        <div className="mt-6 bg-white p-4 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold">Result</h2>
          <p className="mt-2">
            <strong>Status:</strong>{" "}
            {eligibilityResult.eligible ? "Approved ✅" : "Not Eligible ❌"}
          </p>
          <p>
            <strong>Message:</strong> {eligibilityResult.message}
          </p>
        </div>
      )}
    </div>
  );
}

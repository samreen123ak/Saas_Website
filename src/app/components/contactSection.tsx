"use client";

import React, { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits)";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  // helper to build classes with error state
  const inputClass = (hasError?: boolean) =>
    `w-full border rounded-lg px-4 py-2 focus:outline-none ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div
      className="flex justify-center items-center py-5 px-6"
      data-aos="fade-up"
    >
      <div className="w-full max-w-6xl bg-gradient-to-b from-blue-200 to-blue-50 rounded shadow-lg p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 ">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to hear from you! Reach out to us through the
              following options.
            </p>

            <div className="mb-6">
              <p className="text-gray-700 font-semibold"> Email:</p>
              <p className="text-gray-600">support@example.com</p>
              <p className="text-gray-700 font-semibold mt-3"> Phone:</p>
              <p className="text-gray-600">02036333784</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Customer Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Assistance with your account, orders, or services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Feedback</h3>
                <p className="text-gray-600 text-sm">
                  Share your thoughts and suggestions with us.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Media Inquiry</h3>
                <p className="text-gray-600 text-sm">
                  For press or collaboration opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded shadow p-6 m-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we&apos;ll get back to you soon.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass(!!errors.firstName)}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass(!!errors.lastName)}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass(!!errors.email)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass(!!errors.phone)}
                  aria-invalid={!!errors.phone}
                  inputMode="tel"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass(!!errors.message)}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg font-semibold cursor-pointer transition"
              >
                Submit
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              By contacting us, you agree to our{" "}
              <span className="text-primary underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-primary underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Loader Component
const Loader = () => (
  <span className="inline-flex items-center">
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    Sending your request...
  </span>
);

export default function Get() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    message: "",
    isSuccess: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!email || !emailRegex.test(email)) {
      setError("Invalid Email");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("https://ultronai.me/api/send-email", {
        email,
      });
      if (response.data.success) {
        setPopupContent({
          title: "Email sent",
          message: "Your email has been successfully sent.",
          isSuccess: true,
        });
        setPopupOpen(true);
        setEmail("");
        setTimeout(() => setPopupOpen(false), 2100);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setPopupContent({
        title: "Error",
        message: error.message || "There was an error sending the email.",
        isSuccess: false,
      });
      setPopupOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="xl:p-16 lg:p-12 md:p-8 px-12 sm:flex justify-evenly sm:w-full w-fit sm:mx-0 mx-auto mt-20">
      {/* Contact Information */}
      <div className="sm:text-start text-center">
        <h3 className="font-bold s-head -ml-1 la">
          Get In <span className="text-lb">Touch</span>
        </h3>
        <p className="max-w-[320px] mt-4 sm-text">
          We are looking to partner with Gaming, Metaverse and Animations
          Studios.
        </p>
      </div>

      {/* Email Input and Submit Button */}
      <div className="sm:mt-0 mt-8 max-w-[320px] w-full">
        <motion.div animate={error ? "shake" : ""} variants={shakeAnimation}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className={`bg-transparent border-2 border-slate-400 outline-none rounded-lg p-4 w-full ${
              error ? "border-red-600" : ""
            }`}
          />
        </motion.div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button
          onClick={handleSubmit}
          className={`mt-4 p-4 rounded-xl bg-gray-900 text-white w-full ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
          style={{
            boxShadow: "inset cyan 0px 0px 30px -12px",
          }}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Submit"}
        </button>
      </div>

      {/* Popup Dialog */}
      <Dialog
        className="relative z-10"
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-slate-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div className="">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  {popupContent.isSuccess ? (
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-white"
                  >
                    {popupContent.title}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-white">{popupContent.message}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className=" w-full aspect-square h-[30px] inline-flex items-center justify-center font-semibold text-slate-300 shadow-sm"
                  onClick={() => setPopupOpen(false)}
                >
                  <span className="border border-slate-500 px-4 py-1.5 rounded-lg text-sm">Close</span>
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

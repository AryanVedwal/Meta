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

export default function Get() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    message: "",
    isSuccess: true,
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async () => {
    if (!email || !emailRegex.test(email)) {
      setError("Invalid Email");
      return;
    }

    try {
      const response = await axios.post("https://ultronai.me/api/send-email", {
        email,
      });
      // const response = await axios.post(
      //   "https://your-server-url.com/send-email",
      //   {
      //     to: "aryanvedwal01@gmail.com",
      //     subject: "Email from your website",
      //     message: email,
      //   }
      // );
      if (response.data.success) {
        setPopupContent({
          title: "Email sent",
          message: "Your email has been successfully sent.",
          isSuccess: true,
        });
        setPopupOpen(true);
        // setTimeout(() => setPopupOpen(false), 3000);
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
    }
  };

  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="xl:p-16 lg:p-12 md:p-8 p-4 sm:flex justify-evenly sm:w-full w-fit sm:mx-0 mx-auto mt-20">
      <div className="sm:text-start text-center">
        <h3 className="font-bold s-head -ml-1 la">
          Get In <span className="text-lb">Touch</span>
        </h3>
        <p className="max-w-[320px] mt-4 sm-text">
          We are looking to partner with Gaming, Metaverse and Animations
          Studios.
        </p>
      </div>
      <div className="sm:mt-0 mt-8 max-w-[320px] w-full">
        <motion.div animate={error ? "shake" : ""} variants={shakeAnimation}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className={`bg-transparent border-2 outline-none rounded-lg p-4 w-full ${
              error ? "border-red-600" : ""
            }`}
          />
        </motion.div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button
          onClick={handleSubmit}
          className="mt-4 p-4 rounded-xl bg-zinc-900 text-white w-full"
          style={{
            boxShadow: "inset 0px 0px 3.5px 3.5px #66C4D950  "
          }}
        >
          Submit
        </button>
      </div>

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
                    <p className="text-sm text-white">
                      {popupContent.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute z-50 top-1 right-1 ">
                <button
                  type="button"
                  className="aspect-square h-[30px] inline-flex items-center justify-center rounded-full text-sm font-semibold text-slate-300 shadow-sm"
                  onClick={() => setPopupOpen(false)}
                >
                  x
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { InfoIconBold } from "../Icons";

const ContactFrom = () => {
  const [wordCount, setWordCount] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);
  const wordCountSpanRef = useRef<HTMLSpanElement | null>(null);

  const handleSubmit = () => {
    setShowConfirmation(true); // Show the confirmation modal
  };

  const handleConfirm = () => {
    if (formRef.current) {
      formRef.current.reset(); // Reset the form
      setShowConfirmation(false); // Hide the confirmation modal
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Hide the confirmation modal
  };

  useEffect(() => {
    if (messageInputRef.current && wordCountSpanRef.current) {
      const messageInput = messageInputRef.current;
      const wordCountSpan = wordCountSpanRef.current;

      if (wordCountSpan) {
        const maxWords = 100;

        const updateWordCount = () => {
          const words = messageInput.value.trim().split(/\s+/);
          const currentWordCount = words.length;

          if (currentWordCount > maxWords) {
            messageInput.value = words.slice(0, maxWords).join(" ");
          } else {
            setWordCount(currentWordCount);
          }
        };

        messageInput.addEventListener("input", updateWordCount);

        // Cleanup event listener
        return () => {
          messageInput.removeEventListener("input", updateWordCount);
        };
      }
    }
  }, []);

  return (
    <>
      <form
        ref={formRef}
        className="form rounded-lg flex flex-col"
        action="https://fabform.io/f/5LgZRCD"
        method="post"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-sm  mx-4">
          {" "}
          Your Name
        </label>
        <input
          type="text"
          maxLength={20}
          className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name="name"
          required
        />
        <label htmlFor="email" className="text-sm mx-4 mt-4">
          Email
        </label>
        <input
          type="email"
          className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name="email"
          required
        />
        <label htmlFor="message" className="text-sm mx-4 mt-4">
          Message
        </label>
        <textarea
          rows={4}
          maxLength={900}
          className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name="message"
          required
        ></textarea>
        <span>{wordCount} words/250 words</span>
        <button
          type="submit"
          className="rounded-md  mt-8 py-2 mx-4 text-xs font-bold"
        >
          Send Message
        </button>
      </form>

      {/* Confirmation modal */}
      {showConfirmation && (
        <div className="actionBox fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <InfoIconBold />
            <p className="text-lg">
              Please finalize the action on the newly opened page to complete
              the process of sending messages.
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleConfirm}
                className="mx-2 px-4 py-2 rounded-md"
              >
                OK
              </button>
              <button
                onClick={handleCancel}
                className="btnStyle2 mx-2 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFrom;

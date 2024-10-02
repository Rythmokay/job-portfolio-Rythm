"use client"; // Ensure this is at the top for using client-side hooks like useState

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rythm.gfg@gmail.com">
          rythm.gfg@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* The form to handle sending email */}
      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          e.preventDefault(); // Prevent default form submission

          const formData = new FormData(e.currentTarget); // Collect form data

          // Prepare form data to be sent
          const senderEmail = formData.get("senderEmail") as string; // Cast to string
          const message = formData.get("message") as string; // Cast to string

          try {
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                access_key: "884ca0d2-8d31-4b89-9bf7-a679cdc419e1",
                name: "Contact Form Submission",
                email: senderEmail,
                message: message,
              }),
            });

            const result = await response.json(); // Get JSON response from API

            if (!result.success) {
              toast.error(""); // Show error message if email fails to send
              return;
            }

            toast.success("Email sent successfully!"); // Show success message

            // Reset the form fields after successful submission
            e.currentTarget.reset(); // Resets the form fields
          } catch (error) {
            console.warn(""); // Handle potential errors
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={false} />
      </form>
    </motion.section>
  );
}

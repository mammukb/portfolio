"use client";


// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { message } from "antd";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  // Function to display success message
  const showSuccessMessage = () => {
    messageApi.success({
      content: "Message has been sent! Wait for the reply 😊",
      duration: 3, // Duration in seconds
      key: key,
    });
  };

  // Function to display error message
  const showErrorMessage = () => {
    messageApi.error({
      content: "Oops! Something went wrong. Please try again later.",
      duration: 3, // Duration in seconds
      key: key,
    });
  };

  const [state, handleSubmit] = useForm("xjvngypq");

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    if (result instanceof Error) {
      showErrorMessage();
    } else {
      showSuccessMessage();
    }
  };

  return (
    <div className=" text-green-900  rounded-lg lg:mx-96 lg:self-center flex lg:flex-row justify-around flex-col gap-3 m-14 mt-0 mx-5 p-3">
      <div>
        <h1 className="font-bold  lg:text-6xl text-3xl   mb-5">
          Let&apos;s Connect
        </h1>
          <p className=" mx-auto lg:text-3xl ">Passionate about turning ideas into reality? Contact me to explore creative tech collaborations!</p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 align-middle items-center"
      >
        <input
          required
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Enter Full Name"
          className="p-3 lg:w-80 lg:text-2xl w-60 rounded-lg border-2 border-green-900"
        />
        <ValidationError prefix="FullName" field="fullname" errors={state.errors} />
        <input
          required
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          className="p-3 lg:w-80 lg:text-2xl w-60 rounded-lg border-2 border-green-900"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          required
          id="message"
          name="message"
          placeholder="Enter Message"
          className="p-3 lg:w-80 lg:text-2xl h-24 w-60 rounded-lg border-2 border-green-900"

        
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="border-1 bg-green-900 p-2 px-6 text-white text-lg rounded-lg font-bold "
        >
          Send
        </button>
      </form>
      {contextHolder}
    </div>
  );
}

export default Contact;


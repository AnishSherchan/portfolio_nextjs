"use client";
import React from "react";
import CardContainer from "../CardContainer";
import { ValidationError, useForm } from "@formspree/react";
import { toast } from "react-toastify";

const Form = () => {
  const [state, handleSubmit] = useForm("mbjnwbyw");
  if (state.succeeded) {
    toast("Message has been sent! We'll respond soon.");
  }
  return (
    <CardContainer className="bg-dark_secondary_background flex flex-col gap-[20px] py-[21px] px-[28px] cursor-default">
      <h3 className=" text-white font-semibold text-xl">
        Talk with me for development work.
      </h3>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-[20px] w-full"
      >
        <div className=" w-full flex flex-col">
          <label className=" text-white text-base" htmlFor="name">
            Name
          </label>
          <input
            className=" rounded-[10px] bg-dark_primary_background border-2 border-dark_stroke text-white px-[9px] py-[5px] mt-1"
            id="name"
            type="name"
            name="name"
            required
            placeholder="Name"
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>
        <div className=" w-full flex flex-col">
          <label htmlFor="email" className=" text-white text-base">
            Email / Company email
          </label>
          <input
            id="email"
            placeholder="abc@gmail.com"
            type="email"
            name="email"
            className=" rounded-[10px] bg-dark_primary_background border-2 border-dark_stroke text-white px-[9px] py-[5px] mt-1"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className=" w-full flex flex-col">
          <label htmlFor="message" className=" text-white text-base">
            Message
          </label>
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            required
            className=" rounded-[10px] bg-dark_primary_background border-2 border-dark_stroke text-white px-[9px] py-[5px] mt-1 resize-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex w-full justify-end mt-4">
          <button
            className="bg-dark_active_link cursor-pointer hover:bg-[#0062d1] rounded-[10px] text-white px-[25px] py-[10px] text-base"
            type="submit"
            disabled={state.submitting}
          >
            Send message
          </button>
        </div>
      </form>
    </CardContainer>
  );
};

export default Form;

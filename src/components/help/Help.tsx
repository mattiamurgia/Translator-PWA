import React, { FormEvent, useContext } from "react";
import "./Help.css";
import { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ThemeContext } from "../../App";
import { NavbarCustom as Navbar } from "./../navbar/Navbar";

export type Params = {
  user_name: string;
  user_email: string;
  message: string;
};

export const Help = (): JSX.Element => {
  const theme = useContext(ThemeContext);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      const templateParams: Params = {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value,
      };

      const result: EmailJSResponseStatus = await emailjs.send(
        "name-service",
        "name-template",
        templateParams,
        "APIKEY..."
      );

      if (result.status === 200) {
        form.current.reset();
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* //Form */}
      <div
        className={`px-3 py-3 my-5 text-center col-5 main-module form-style-${theme}`}
      >
        <div className="me-5 col-6">
          <form ref={form} onSubmit={sendEmail} method="POST">
            {/* Name */}
            <label className="form-label fw-bold">
              Inserisci il tuo Nome e Cognome
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Mario Rossi"
              name="user_name"
            />

            {/* Email */}
            <label className="form-label fw-bold mt-3">
              Inserisci la tua email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="mariorossi@gmail.com"
              name="user_email"
            />

            {/* Problema */}
            <label className="form-label fw-bold mt-3">
              Descrivimi il problema
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Descrizione"
              name="message"
              rows={6}
            ></textarea>

            {/* Button */}
            <input
              type="submit"
              value="Send"
              className="mt-4 btn btn-primary btn-lg px-4 gap-3 fw-bold btn-outline-dark"
              style={{ backgroundColor: "#ffffff", color: "#39ca45" }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

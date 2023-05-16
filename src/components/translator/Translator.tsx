import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Translator.css";
import { NavbarCustom as Navbar } from "./../navbar/Navbar";


const authKey = "AUTHKEY";

export const Translator = (): JSX.Element => {
  const [languageCode, setLanguageCode] = useState("");
  const [languageName, setLanguageName] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [contentOutput, setContentOutput] = useState("");
  const [fromLanguage, setFromLanguage] = useState("");

  const getTranslation = (e: any) => {
    // Resetta le funzionalità di base del form
    e.preventDefault();

    // URl chiamata API con i dati delle variabili di stato e KEY
    const deeplUrl = `https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${contentInput}&source_lang=${fromLanguage}&target_lang=${languageCode}`;

    // Avvia chiamata API
    axios
      .get(deeplUrl)
      .then((response) => setContentOutput(response.data.translations[0].text))
      .catch((error) => console.log("error :", error.response));
    console.log(languageName);
  };

  return (
    <>
      <Navbar />
      <main className="col-6 mt-3 mb-2">
        {/* Funzione per inviare i dati */}
        <form onSubmit={getTranslation} className="text-area-input">
          <section>
            <select
              className="btn bg-light mb-2 col-4 border-dark"
              onChange={(e) => {
                // Settaggio variabili di stato Input per scegliere la lingua nell'URL "from"
                setFromLanguage(e.target.value);
                setLanguageName(e.target.selectedOptions[0].text);
                setContentOutput("");
              }}
            >
              {/* Option Input */}
              <option value="EN">English</option>
              <option value="ES">Spanish</option>
              <option value="FR">French</option>
              <option value="IT">Italiano</option>
            </select>

            <textarea
              id="input-text"
              cols={35}
              rows={7}
              placeholder="Testo da tradurre"
              required
              value={contentInput}
              onChange={(e) => setContentInput(e.target.value)}
            ></textarea>

            <div className="btn-group button-group mt-2">
              {/* Set Input e Output */}
              <button
                className="btn clear-button bg-gradient bg-danger fw-bold border-dark"
                onClick={() => {
                  setContentInput("");
                  setContentOutput("");
                }}
              >
                Cancella
              </button>
              {/* Traduci */}
              <button
                disabled={!languageCode ? true : false}
                className="btn bg-info border-dark clear fw-bold"
              >
                Traduci
              </button>
            </div>
          </section>
          <div className="select-prova">
            <select
              className="btn bg-light col-4 mb-2 select-prova border-dark"
              onChange={(e) => {
                //Settaggio della variabile per il testo da tradurre fine URL
                setLanguageCode(e.target.value);
                setLanguageName(e.target.selectedOptions[0].text);
                setContentOutput("");
              }}
            >
              <option value="EN">English</option>
              <option value="ES">Spanish</option>
              <option value="FR">French</option>
              <option value="IT">Italiano</option>
            </select>
          </div>
        </form>

        {/* Output */}
        <div className="output-textarea">
          <textarea
            id="output-text"
            cols={35}
            rows={7}
            placeholder="Traduzione"
            value={contentOutput}
            readOnly
          >
            {" "}
            {contentOutput}
          </textarea>
        </div>
      </main>
    </>
  );
};

import styles from "../modules/Shorten.module.scss";
import axios from "axios";
import React, { useState } from "react";

const Shorten = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [shortenedLink, setShortenedLink] = useState("");

  const handleShorten = async () => {
    try {
      const accessToken = "1861d44162b7379830ca9f78a0dad5091d99fa4d";
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { id: res_url } = response.data;
      setShortenedLink(res_url);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["shorten-container"]}>
          <input
            type="text"
            placeholder="Paste your link here..."
            value={inputValue}
            className={styles["input"]}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleShorten} className={styles["shorten-button"]}>
            Shorten link
          </button>
          {shortenedLink && (
            <div className={styles["result-container"]}>
              <div className={styles["link"]}>
                <p>{inputValue}</p>
                <p>{shortenedLink}</p>
              </div>
              <button onClick={handleCopy} className={styles["copy-button"]}>
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shorten;

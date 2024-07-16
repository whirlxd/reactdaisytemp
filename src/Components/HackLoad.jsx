import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";
import axios from "axios";

const HackerLoadingScreen = () => {
  const [Ip, setIp] = React.useState();
  const [done, setDone] = React.useState(false);
  const [found, setFound] = React.useState(false);
  const [data, setData] = React.useState("");
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setData(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const [text] = useTypewriter({
    words: [
      "Welcome to the Dark Web...",
      "Hacking your data...",
      "Installing malware...",
      "Cracking your passwords...",
      "Logging In...",
    ],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 80,
    delaySpeed: 500,
    onLoopDone: (stuff) => {
      setIp(true), console.log("First Loop Done" + stuff);
    },
  });
  const [itext] = useTypewriter({
    words: ["> Sucessfully Found IP."],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 1000,
    onLoopDone: () => {
      setDone(true), console.log("Second Loop Done");
    },
  });
  const [dtext] = useTypewriter({
    words: ["> Finding IP...", "> IP Found : " + data],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
    onLoopDone: () => {
      setFound(true), console.log("Third Loop Done");
    },
  });
  const [ftext] = useTypewriter({
    words: ["Requesting Access...", "Access Approved!"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-primary ">{text}</h1>
            {Ip ? <p className="py-6">{itext}</p> : null}
            {done ? <p className="py-6">{dtext}</p> : null}
            {found ? <p className="py-6">{ftext}</p> : null}

            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackerLoadingScreen;

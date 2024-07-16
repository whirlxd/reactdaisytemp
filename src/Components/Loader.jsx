import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./roa.css";

function Loader() {
  // Include navigate in the dependency array

  return (
    <div className="hero custom-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <section className="star-wars">
            {/* Your animation content */}
            <div className="crawl">
              <div className="title">
                <p className="bold">Cyber Security</p>
                <h1 className="italic">A Rabbit Hole</h1>
              </div>

              <p className="text-center text-balance ">
                In the cosmic battlefield of cybersecurity, we wield the mighty
                lightsabers of HTTPS authentication strategies, fending off
                cyber threats with precision. Beware the dark side of XXE
                attacks, where XML itself becomes a weapon.{" "}
              </p>
              <p className="text-center text-balance">
                et, in our quest for digital safety, we find solace in the
                ancient wisdom of defense in depth—layering our shields against
                the inevitable onslaught.
              </p>
              <p className="text-center text-balance">
                And as we gaze towards the horizon, we glimpse the future, where
                quantum encryption and advanced threat detection systems shine
                like the twin suns of Tatooine, guiding us towards a brighter,
                safer digital galaxy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Loader;

import React from "react";
import ReactCurvedText from "react-curved-text";
import { motion } from "framer-motion";
import clsx from "clsx";
function hero() {
  return (
    // <div className="hero custom-h-screen bg-base-200">
    //   <div className="hero-content text-center">
    //     <div className="max-w-md">
    //       {/* <img
    //         src="https://images-ext-2.discordapp.net/external/36yZWYi2nwViarEt73V-9kTCR2HhrtEnsH2CSjZswas/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/600325534332747792/95df1defc794b77ae7a47324f1187564.webp?width=703&height=703"
    //         className=" h-52 w-52 mx-auto"
    //         alt="protection-logo"
    //       /> */}

    //       <h1 className="text-5xl font-bold">CyberSec</h1>
    //       {/* <ReactCurvedText
    //         width={370}
    //         height={300}
    //         cx={190}
    //         cy={120}
    //         rx={100}
    //         ry={100}
    //         startOffset={50}
    //         reversed={false}
    //         text="react-curved-text"
    //         textProps={{ style: { fontSize: 24 } }}
    //         textPathProps={null}
    //         tspanProps={null}
    //         ellipseProps={null}
    //         svgProps={null}
    //       /> */}
    //       <p className="py-6">
    //         Protection is a bot that will protect your server by stopping
    //         suspicious activity taken by your trusted ones!
    //       </p>

    //       {/* <a
    //         href="https://top.gg/bot/750253000638857216/invite"
    //         target="_blank"
    //         className="btn btn-primary mr-4"
    //       >
    //         Invite
    //       </a>

    //       <a
    //         href="https://top.gg/bot/750253000638857216/vote"
    //         target="_blank"
    //         className="btn btn-primary"
    //       >
    //         Vote
    //       </a> */}
    //       <br></br>
    //     </div>
    //   </div>
    // </div>
    // HeroPage.jsx

    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent"></div>
      <div className="relative z-10">
        <motion.div
          className={clsx("absolute inset-0", "animate-brightness")}
          style={{ scale }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,154.7C384,170,480,176,576,160C672,144,768,128,864,138.7C960,149,1056,203,1152,218.7C1248,235,1344,231,1392,224L1440,208L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </motion.div>
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to Our Site
          </h1>
          <p className="text-xl text-white">
            Discover amazing products and services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default hero;
//  <div class="rating">
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//               checked
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//           </div>

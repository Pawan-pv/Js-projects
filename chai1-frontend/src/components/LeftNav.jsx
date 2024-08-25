/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from "framer-motion"
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md"
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { RiPlayList2Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { IoDownloadOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function LeftNav({ setIsHide , isHide}) {
  return (
    <div>
         <motion.div
                animate={{ x:5 }}
                initial={false}
                className={`h-lvh mt-[-81px] space-y-4 
            pl-5 max-w-[155px] border p-3 ml-[-21px]
              fixed  z-30 ${isHide} bg-red-500 `}>
                {/* Todo: Add the map--- */}
                <div className="p-1 min-w-32  flex mt-2">
                    <span className="p-3" onClick={() => setIsHide("hidden")}>
                        <GiHamburgerMenu style={{ color: "white", fontSize: "1.1rem" }} />
                        </span>
                    <span><img className="h-12 w-22 pb-1" src="/youtublogo.webp" alt="logo" /></span>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <IoHomeOutline
                        style={{
                            color: "white",
                            fontSize: "1.2rem"
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <SiYoutubeshorts
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Shorts</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <MdOutlineSubscriptions
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Subscription</h3>
                </div>
                <hr></hr>
                <div className="pl-3 h-[28px]  flex justify-between bg-gray-500 rounded-2xl">
                    <span className=""><h3>you</h3></span>
                    <span className="mt-[5px]"><MdArrowRight />
                    </span>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <GrChannel
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <MdHistory
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <RiPlayList2Line
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <IoVideocamOutline
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <MdOutlineWatchLater
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <BiLike
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
                <div className="flex justify-evenly font-semibold">
                    <IoDownloadOutline
                        style={{
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                    />
                    <h3>Home</h3>
                </div>
            </motion.div>
    </div>
  )
}

export default LeftNav
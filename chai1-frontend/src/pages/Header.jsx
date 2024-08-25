import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { RiVideoUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { useState } from "react";
import LeftNav from "../components/LeftNav";
import RightProfileMenu from "../components/RightProfileMenu";

function Header() {
    const [isHide, setIsHide] = useState("hidden");
    const [isProfileHide, setIsProfileHide] = useState(true);

    const props = {
        setIsHide,
        isHide
    };

    return (
        <>
            <header className="p-1 overflow-hidden">
                <div className="flex justify-between">
                    <div className="p-1 min-w-32 flex mt-2">
                        <span className="p-3" onClick={() => setIsHide("")}>
                            <GiHamburgerMenu style={{ color: "white", fontSize: "1.1rem" }} />
                        </span>
                        <span>
                            <img className="h-12 w-22 pb-1" src="/youtublogo.webp.webp." alt="logo" />
                        </span>
                    </div>

                    <div className="flex grow justify-center ml-4">
                        <div className="w-full max-w-[600px] pt-[8px] m-2">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    className="text-white p-1 rounded-xl w-full border bg-gray-700 outline-none pr-10"
                                />
                                <span className="absolute right-12 text-gray-500">
                                    <CiSearch style={{ color: "white", fontSize: "1.2rem" }} />
                                </span>
                                <span className="ml-2 border rounded-full p-[4px]">
                                    <IoMicOutline
                                        style={{ color: "white", fontSize: "1.2rem" }}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end min-w-32 overflow-hidden relative m-2">
                        <span className="text-black p-1 m-1 flex items-center justify-center">
                            <RiVideoUploadLine style={{ color: "white", fontSize: "1.2rem" }} />
                        </span>
                        <span className="text-black p-1 m-1 flex items-center justify-center">
                            <CiBellOn style={{ color: "white", fontSize: "1.2rem" }} />
                        </span>
                        <span
                            onClick={() => setIsProfileHide(!isProfileHide)}
                            className="text-black p-1 m-1 flex items-center hover:border justify-center"
                        >
                            <CgProfile style={{ color: "white", fontSize: "1.2rem" }} />
                        </span>
                    </div>

                    {/* right profile menu */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: isProfileHide ? 0 : 1, scale: isProfileHide ? 0.5 : 1 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-gray-700 flex justify-center absolute top-[52px] z-50 min-w-44 border min-h-[500px] right-8 rounded-lg ${
                            isProfileHide ? "hidden" : ""
                        }`}
                    >
                        <RightProfileMenu />
                    </motion.div>
                </div>
            </header>
            <LeftNav {...props} />
        </>
    );
}

export default Header;

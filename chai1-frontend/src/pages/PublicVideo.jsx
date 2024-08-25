import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { IoCloudDownload } from "react-icons/io5";
function publicVideo() {
    return (
        <div className='flex h-lvh  '>
            {/* left home components  */}
            <div className="bg-red-600 border mb-12 space-y-8 min-w-12 text-yellow p-1 ml-3">
                <div className="flex text-center justify-center flex-col border p-1 m-1">
                    <span className="flex justify-center">
                        <IoHomeOutline />
                    </span>
                    <span className="text-sm font-thin">Home</span>
                </div>
                <div className="flex text-center justify-center flex-col border p-1 m-1">
                    <span className="flex justify-center">
                        <SiYoutubeshorts />
                    </span>
                    <span className="text-sm font-thin">Shorts</span>
                </div>
                <div className="flex text-center justify-center flex-col border p-1 m-1">
                    <span className="flex justify-center">
                        <MdSubscriptions />
                    </span>
                    <span className="text-sm font-thin">Subscription</span>
                </div>
                <div className="flex text-center justify-center flex-col border p-1 m-1">
                    <span className="flex justify-center">
                        <RiVideoLine />
                    </span>
                    <span className="text-sm font-thin">You</span>
                </div>
                <div className="flex text-center justify-center flex-col border p-1 m-1">
                    <span className="flex justify-center">
                        <IoCloudDownload />
                    </span>
                    <span className="text-sm font-thin">Download</span>
                </div>

            </div>
            {/* right main components  */}
            <div className="border bg-yellow-600 m-2 p-8">
                jnsdnsnd
            </div>

        </div>
    )
}

export default publicVideo
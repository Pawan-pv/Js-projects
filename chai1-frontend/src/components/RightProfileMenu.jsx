import React from 'react'

function RightProfileMenu() {
  return (
    <div className='bg-orange-600 w-40 text-xs space-y-2 flex flex-col border p-1 '>
        
        <div className="flex ">
           <div className='mr-[6px]'> <h2>profile</h2></div>
           <div className="flex flex-col space-y-2">
             <h2>profileName / channelName</h2>
             <span className=' bg-pink-600'><h3>prfile link</h3></span>
           </div>
        </div>

        
    </div>
    
  )
}

export default RightProfileMenu
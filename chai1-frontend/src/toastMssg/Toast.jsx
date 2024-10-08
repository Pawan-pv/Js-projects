import { useEffect } from "react"



const Toast = ({meassge, type, onClose}) =>{

    useEffect(()=>{
        const timer = setTimeout(()=>{
            onClose()
        }, 5000)
        return () =>{
            clearTimeout(timer)
        }
    },[onClose])

    const toastStyle = type === "SUCCESS" 
    ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md"
    : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md"

  return (
    <div>
        <div className={toastStyle}>
            <div className="flex justify-center items-center">
                <span className="text-lg font-semibold">
                    {meassge}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Toast
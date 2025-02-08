import React from "react"

interface ButtonProps{
    text:string
}

const ButtonSizes: React.FC<ButtonProps> = ({ text}) => {
  return (
    <button className="border px-2 py-1 h-[35px] w-[35px] hover:bg-[#B88E2F] hover:text-white ">{text}</button>
  )
}

export default ButtonSizes
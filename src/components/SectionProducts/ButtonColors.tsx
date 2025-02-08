import React from "react"

interface ButtonProps{
    color:string
}

const ButtonColors: React.FC<ButtonProps> = ({color}) => {
  return (
    <button className={`w-6 h-6 bg-${color} rounded-full`}></button>
  )
}

export default ButtonColors
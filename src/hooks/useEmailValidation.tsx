import { useState } from "react";

export const useEmailValidation = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
    setMessage("");
  };

  const handleSubscribe = () => {
    if (isValid) {
      setMessage("Subscribe done ✅");
    } else {
      setMessage("Invalid email ❌");
    }
  };

  return { email, isValid, message, validateEmail, handleSubscribe };
};

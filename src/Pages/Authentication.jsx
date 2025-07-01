import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/register";

const AuthPage = () => {
  const [authStep, setAuthStep] = useState("login");

  const renderComponent = () => {
    switch (authStep) {
      case "login":
        return <Login onSwitch={setAuthStep} />;
      case "register":
        return <Register onSwitch={setAuthStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={authStep}
          initial={{ scale: 1.05, filter: "blur(8px)" }}
          animate={{
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.5 },
          }}
          exit={{
            scale: 1.05,
            filter: "blur(8px)",
            transition: { duration: 0.3 },
          }}
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AuthPage;

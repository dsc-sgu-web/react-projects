import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {count}
    </button>
  );
};

export default Button;

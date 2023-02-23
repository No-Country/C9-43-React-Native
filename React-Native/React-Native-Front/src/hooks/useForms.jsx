import React, { useState } from "react";

export const useForms = (initialObj = {}) => {
  const [forms, setForms] = useState(initialObj);
  const changed = (target) => {
    const { name, value } = target;
    console.log(target.nativeEvent);
    setForms({
        ...forms,
        [name]: value,
      });
  };
  return {
    forms,
    changed,
  };
};

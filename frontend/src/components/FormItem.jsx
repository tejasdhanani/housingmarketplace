import React from "react";

function FormItem({ htmlFor, name, placeholder, type, value, onChange }) {
  return (
    <>
      <label htmlFor={htmlFor}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={htmlFor}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FormItem;

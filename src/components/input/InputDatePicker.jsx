import { DatePicker, Input } from "antd";
import React from "react";

export default function InputDatePicker({
  label,
  name,
  onChange,
  value,
  disabled,
  readOnly,
  size,
  labelStyle,
  err,
}) {
  return (
    <>
      <div className="label" style={{ ...labelStyle }}>
        {label}
      </div>
      <DatePicker
        size={size}
        readOnly={readOnly}
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
        className={err && "inputErr"}
        style={{ width: "100%" }}
      />
    </>
  );
}
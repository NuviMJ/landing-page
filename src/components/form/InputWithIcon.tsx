import React, { InputHTMLAttributes } from "react";
import { InputProps } from "./Input";

export type InputWithIconProps = InputProps & {
  icon: any;
  right?: boolean;
};

const InputWithIcon = ({
  label,
  className,
  error,
  icon,
  right,
  ...props
}: InputWithIconProps) => {
  return (
    <div className="">
      {label && (
        <label className=" flex py-2 font-light gap-2 w-full">{label} </label>
      )}
      <div
        className={`relative [&>*:first-child]: [&>*:first-child]:rounded [&>*:first-child]:top-0 [&>*:first-child]:w-10 [&>*:first-child]:h-full [&>*:first-child]:absolute ${
          right ? `[&>*:first-child]:right-0` : `[&>*:first-child]:left-0 `
        }`}
      >
        {icon}
        <input
          className={`bg-warm w-full border-gray-400 border leading-5 p-2 rounded focus-visible:outline-blackBlue ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default InputWithIcon;

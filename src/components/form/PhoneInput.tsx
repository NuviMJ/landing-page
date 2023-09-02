import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneNumberInputProps {
  phone: string;
  handlePhoneChange: (value: string) => void;
}

const PhoneNumberInput = ({
  phone,
  handlePhoneChange,
}: PhoneNumberInputProps) => {
  return (
    <div className="flex-1 relative">
      <label className=" flex py-2 font-light gap-2 w-full">Phone number</label>
      <PhoneInput
        className="gap-3"
        international
        defaultCountry="FR"
        value={phone}
        onChange={handlePhoneChange}
        numberInputProps={{
          className:
            "border-gray-400 border leading-5 p-2 rounded focus-visible:outline-blackBlue",
        }}
        countrySelectProps={{
          className:
            "border-gray-400 border leading-5 p-2 rounded focus-visible:outline-blackBlue",
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;

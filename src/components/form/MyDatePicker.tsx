import React from "react";
import DatePicker from "../DatePicker";
import { CalendarThree } from "@icon-park/react";

type Props = {
  label?: string;
  value?: string;
  error?: string;
  onChange?: (date: string) => void;
};

const MyDatePicker = ({ label, value, error, onChange }: Props) => {
  return (
    <DatePicker onChange={onChange} className="flex-1 flex flex-col w-full">
      <div className="">
        {label && (
          <label className=" flex py-2 font-light gap-2 w-full">{label} </label>
        )}
        <div className="flex flex-col justify-center w-full bg-white ">
          <div className="cursor-pointer w-full h-[36px] flex flex-row outline outline-blue-600 items-center justify-between gap-2 px-2 pl-3 rounded-[5px]">
            <p className="font-lexend font-normal text-black text-sm">
              {value}
            </p>
            <CalendarThree className="h-[20px] text-black" />
          </div>
          {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
        </div>
      </div>
    </DatePicker>
  );
};

export default MyDatePicker;

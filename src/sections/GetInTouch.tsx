import React, { useState } from "react";
// @ts-ignore
import Img from "../assets/img/get-in-touch.png";
import Input from "../components/form/Input";
import SelectBox from "../components/form/SelectBox";
import DatePicker from "../components/DatePicker";
import MyDatePicker from "../components/form/MyDatePicker";
import Textarea from "../components/form/Textarea";

const GetInTouch = () => {
  const [date, setDate] = useState("");
  return (
    <div className="section bg-warm">
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="lg:w-2/5">
          <div className="">
            <p className="red-heading">Get in touch</p>
            <h2 className="mt-3 mb-10">
              I would like to discuss a workshop need:
            </h2>
          </div>
          <img className="w-full object-contain" src={Img} />
        </div>
        <div className="p-5 flex flex-col gap-5 w-full">
          <Input label="Location" />
          <div className="flex gap-5 flex-col md:flex-row">
            <SelectBox
              className="flex-1"
              options={[{ label: "100+", value: "100+" }]}
              label="How many people"
            />
            <MyDatePicker
              value={date}
              onChange={(date) => setDate(date)}
              label="Date"
            />
          </div>
          <Textarea label="Objective" />
          <Input label="Lenght" type="number" />
          <Textarea label="Context" />
          <div className="flex gap-5 flex-col md:flex-row">
            <Input type="number" label="Budjet" />
            <Input label="Email" type="email" />
          </div>

          <button className="dashboard-button bg-black rounded-full mr-auto mt-5">
            Get free quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

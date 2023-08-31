import React, { SelectHTMLAttributes } from "react";
import "./DropDown.scss";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  placeHolder: string;
  name: string;
  icon: any;
}

const DropDown = ({ placeHolder, name, icon, ...props }: Props) => {
  return (
    <div className="DropDown-container">
      <select
        {...props}
        className="DropDown-field"
        placeholder={placeHolder}
        name={name}
      >
        {/*<option value="">None</option>*/}
        <option value="dateDesc">Newest to oldest</option>
        <option value="dateAsc">Oldest to Newest</option>
      </select>

      {/*<img src={icon} />*/}
    </div>
  );
};

export default DropDown;

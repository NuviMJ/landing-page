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
        <option value="dateDesc">Du plus récent au plus ancien</option>
        <option value="dateAsc">Du plus ancien au plus récent</option>
      </select>

      {/*<img src={icon} />*/}
    </div>
  );
};

export default DropDown;
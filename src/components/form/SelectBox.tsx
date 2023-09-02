import Select, { GroupBase, OptionsOrGroups, Props } from "react-select";
import React from "react";

// export interface SelectBoxProps extends Props {
//     options: OptionsOrGroups<any, GroupBase<any>>;
//     className?: string
//     labelKey?: string;
//     valueKey?: string;
//     label?: string;
//     error?: string;
// }

export type SelectBoxProps = Props & {
  options: OptionsOrGroups<any, GroupBase<any>>;
  className?: string;
  labelKey?: string;
  valueKey?: string;
  label?: string | null;
  error?: string;
};

const SelectBox = ({
  isClearable = true,
  options,
  label,
  className,
  error,
  labelKey = "label",
  valueKey = "value",
  ...selectProps
}: SelectBoxProps) => {
  return (
    <div className="flex-1">
      {label && (
        <label className=" flex py-2 font-light gap-2 w-full">{label} </label>
      )}
      <Select
        {...selectProps}
        getOptionLabel={(option: any) => option[labelKey]}
        getOptionValue={(option: any) => option[valueKey]}
        className={className}
        options={options}
        isClearable={isClearable}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </div>
  );
};

export default SelectBox;

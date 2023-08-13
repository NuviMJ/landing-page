import React from "react";

interface Props {
  title: string;
  list: {
    icon: any;
    header: string;
  }[];
}

const InsideTemplate = (prop: Props) => {
  return (
    <div className="px-8 lg:px-24 py-16 bg-[#F2EBE1]">
      <div>
        <h2>{prop.title}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {prop.list.map(({ icon, header }) => (
            <li className="flex gap-2 items-center  py-2">
              {icon}
              <p className="m-0">
                <b>{header}</b>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default InsideTemplate;

import React, { LegacyRef, createRef, useMemo } from "react";

import { Whisper } from "rsuite";
import dayjs from "dayjs";
import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";

import "react-day-picker/dist/style.css";

type Props = {
  onChange?: (date: string) => void;
  children: React.ReactElement;
  className?: string;
};

const DatePicker: React.FC<Props> = ({ onChange, children, className }) => {
  const [selected, setSelected] = React.useState<Date>();

  React.useEffect(() => {
    onChange && onChange(selected ? dayjs(selected).format("YYYY-MM-DD") : "");
  }, [selected]);

  return (
    <Wrapper
      picker={
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          styles={{
            root: {
              padding: "10px",
              backgroundColor: "#ffffff",
              position: "absolute",
              right: 0,
              borderRadius: "8px",
              margin: 0,
              marginTop: "4px",
              border: "1px solid #eee",
            },

            day: {
              color: "#575757",
              cursor: "pointer",
            },
            caption: { color: "#FD0054", fontSize: "12px" },
          }}
          modifiersStyles={{
            selected: {
              backgroundColor: `#FD00541a`,
              color: "#FD0054",
            },
          }}
        />
      }
      className={className}
    >
      {children}
    </Wrapper>
  );
};

type WrapperProps = {
  picker?: React.ReactNode;
  children: React.ReactElement;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, picker, className }) => {
  const containerRef = useMemo(
    () => createRef<HTMLDivElement | undefined>(),
    []
  );
  return (
    <div
      className={twMerge("relative", className)}
      ref={containerRef as LegacyRef<HTMLDivElement>}
    >
      <Whisper
        trigger="click"
        placement={"bottomEnd"}
        container={(() => containerRef.current) as () => HTMLElement}
        speaker={<div className="z-10">{picker}</div>}
      >
        {children}
      </Whisper>
    </div>
  );
};

export default DatePicker;

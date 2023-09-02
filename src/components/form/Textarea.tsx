import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useRef,
} from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};
const Textarea = ({ className, label, error, ...props }: TextareaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleRowCount = () => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };
  return (
    <div className="">
      {label && (
        <label className=" flex py-2 font-light gap-2 w-full">{label} </label>
      )}
      <textarea
        onInput={handleRowCount}
        ref={textAreaRef}
        className={`w-full border-gray-400 border leading-5 p-2 rounded focus-visible:outline-blackBlue ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </div>
  );
};

export default Textarea;

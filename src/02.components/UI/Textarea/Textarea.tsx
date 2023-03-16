import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { clsx } from "clsx";

interface TextareaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea: FC<TextareaProps> = (props) => {
  const { className, children, onBlur, onChange, ...rest } = props;
  function setInputHeight(element: React.ChangeEvent<HTMLTextAreaElement>) {
    element.target.style.height = "16px";
    element.target.style.height = `${element.target.scrollHeight}px`;
  }

  function removeSpaces(element: React.FocusEvent<HTMLTextAreaElement>) {
    element.target.value = element.target.value.trim();
    setInputHeight(element);
  }

  function handleOnBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    removeSpaces(e);
    onBlur && onBlur(e);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputHeight(e);
    onChange && onChange(e);
  }

  return (
    <textarea
      {...rest}
      onBlur={(e) => handleOnBlur(e)}
      onChange={(e) => handleOnChange(e)}
      className={clsx(
        className,
        "resize-none w-full h-[16px] focus:outline-none"
      )}
    />
  );
};

export default Textarea;

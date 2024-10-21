import { MouseEventHandler } from "react";
import "./Select.scss";

type OptionType = { value: string; label: string };

type OptionProps = {
  option: OptionType;
  onClick: (value: OptionType["value"]) => void;
};
const Option = (props: OptionProps) => {
  const {
    option: { value, label },
    onClick,
  } = props;

  const handleClick =
    (clickedValue: OptionType["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li className="option" value={value} onClick={handleClick(value)}>
      {label}
    </li>
  );
};

export default Option;

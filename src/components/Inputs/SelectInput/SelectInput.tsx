import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import {
  LucideChevronDown,
  LucideChevronUp,
  LucideX,
} from "../../../assets/icons";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import styles from "./SelectInput.module.css";

// declare props types
type ISelectInputProps = {
  options: string[];
  setSelection: Dispatch<SetStateAction<string>>;
  defaultValue: string;
  onSelection?: () => void;
};

const SelectInput = ({
  options,
  setSelection,
  defaultValue,
  onSelection,
}: ISelectInputProps) => {
  const { formDispatch } = useFormContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>("");
  const [filteredList, setFilteredList] = useState<string[]>(options);
  const [selected, setSelected] = useState<string>(defaultValue || "");
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const toggleInputFocus = () => {
    if (inputFocused) {
      setInputFocused(false);
      return inputRef?.current?.blur();
    }
    setInputFocused(true);
    return inputRef?.current?.focus();
  };

  const handleSelection = (selectedOption: string) => {
    formDispatch({
      type: "CLEAR_ERRORS",
    });
    setSelected(selectedOption);
    setInputFocused(false);

    if (onSelection) {
      onSelection();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.trim());
    setSelected("");
  };

  const handleClearSelection = () => {
    setSearch("");
    setSelected("");
  };

  useEffect(() => {
    if (search.trim().length > 0) {
      setFilteredList(() =>
        options.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredList(options);
    }
  }, [options, search]);

  useEffect(() => {
    setSelection(selected);
  }, [selected, setSelection]);

  return (
    <div className={classNames(styles.select_container)}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type or select an option"
        onChange={handleChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={selected || search}
        className={classNames(styles.select_input)}
      />

      <ul className={classNames(styles.select_dropdown)}>
        {filteredList?.map((industry) => (
          <li
            key={industry}
            onMouseDown={() => {
              handleSelection(industry);
            }}
            className={classNames(styles.select_dropdown_item, {
              [styles.select_dropdown_item_selected]: selected === industry,
            })}
          >
            {industry}
          </li>
        ))}
      </ul>

      {selected || search ? (
        <button
          className={classNames("btn", "btn-ghost", styles.select_button_icon)}
          onClick={handleClearSelection}
        >
          <LucideX />
        </button>
      ) : inputFocused ? (
        <button
          className={classNames("btn", "btn-ghost", styles.select_button_icon)}
          onClick={toggleInputFocus}
        >
          <LucideChevronUp />
        </button>
      ) : (
        <button
          className={classNames("btn", "btn-ghost", styles.select_button_icon)}
          onClick={toggleInputFocus}
        >
          <LucideChevronDown />
        </button>
      )}
    </div>
  );
};

export default SelectInput;

// TODO @thesudeshdas => Show both the fetch of industries and the localData. Why? It is highly unlikely that we will have new industries coming up. Seeing that the current list contains only 149 items, it is better to store in the FE rather than fetching via an API which will be expensive

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { industries } from "../../../data/industries.data";
import {
  LucideChevronDown,
  LucideChevronUp,
  LucideX,
} from "../../../assets/icons";
import useFormContext from "../../../contexts/FormContext/formContext.hook";
import styles from "./SelectInput.module.css";
import classNames from "classnames";

// declare props types
const SelectInput = () => {
  const { formDispatch } = useFormContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>("");
  const [filteredList, setFilteredList] = useState<string[]>(industries);
  const [selected, setSelected] = useState<string>("");
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
      payload: {},
    });
    setInputFocused(false);
    setSelected(selectedOption);
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
        industries.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredList(industries);
    }
  }, [search]);

  useEffect(() => {
    formDispatch({
      type: "FILL_INDUSTRY",
      payload: { formData: { industry: selected } },
    });
  }, [formDispatch, selected]);

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
            onMouseDown={() => {
              handleSelection(industry);
            }}
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

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";

import { LucideCheck } from "../../../assets/icons";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import styles from "./ListInput.module.css";

// declare props types
type IListInputProps = {
  maxSelections?: number;
  multiSelection?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelection: Dispatch<SetStateAction<any>>;
  options: string[];
  defaultValue?: string[];
  onSelection?: () => void;
};

const ListInput = ({
  setSelection,
  maxSelections,
  multiSelection = false,
  options,
  defaultValue,
  onSelection,
}: IListInputProps) => {
  const { formDispatch } = useFormContext();

  const [selected, setSelected] = useState<string[]>(defaultValue || []);

  const handleSelection = (selectedOption: string) => {
    formDispatch({
      type: "CLEAR_ERRORS",
    });

    setSelected((prevSelected) => {
      if (!multiSelection) {
        if (prevSelected[0] === selectedOption) {
          return [""];
        } else {
          return [selectedOption];
        }
      } else {
        if (prevSelected?.includes(selectedOption)) {
          return prevSelected.filter((option) => option !== selectedOption);
        } else if (maxSelections && maxSelections > prevSelected?.length) {
          return [...prevSelected, selectedOption];
        }
        return prevSelected;
      }
    });

    if (onSelection) {
      if (multiSelection && selected?.length === maxSelections) {
        onSelection();
      }

      if (selected[0] !== selectedOption) {
        onSelection();
      }
    }
  };

  useEffect(() => {
    if (!multiSelection && selected?.length > 0) {
      setSelection(selected[0]);
    } else if (selected.length > 0) {
      setSelection(selected);
    }
  }, [multiSelection, selected, setSelection]);

  return (
    <div className={classNames(styles.list_dropdown_container)}>
      {maxSelections && (
        <label
          className={classNames({
            [styles.label_hidden]: selected?.length === maxSelections,
          })}
        >
          Choose{" "}
          {selected?.length === 0
            ? maxSelections
            : `${maxSelections - selected?.length} more`}
        </label>
      )}

      <ul className={classNames(styles.list_dropdown)}>
        {options?.map((role, index) => (
          <li
            key={role}
            className={classNames(
              styles.list_dropdown_item,
              {
                [styles.list_dropdown_item_selected]: selected?.includes(role),
              },
              {
                [styles.list_dropdown_item_inactive]:
                  selected?.length === maxSelections &&
                  !selected?.includes(role),
              }
            )}
            onClick={() => handleSelection(role)}
          >
            <span>{String.fromCodePoint(index + 65)}</span>

            {role}

            {selected?.includes(role) && <LucideCheck />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInput;

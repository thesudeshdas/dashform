import styles from "./ListInput.module.css";
import classNames from "classnames";
import { LucideCheck } from "../../../assets/icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// declare props types
type IListInputProps = {
  multiSelection?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelection: Dispatch<SetStateAction<any>>;
  options: string[];
};

const ListInput = ({
  setSelection,
  multiSelection = false,
  options,
}: IListInputProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelection = (selectedOption: string) => {
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
        } else {
          return [...prevSelected, selectedOption];
        }
      }
    });
  };

  useEffect(() => {
    if (!multiSelection && selected?.length > 0) {
      setSelection(selected[0]);
    } else if (selected.length > 0) {
      setSelection(selected);
    }
  }, [multiSelection, selected, setSelection]);

  return (
    <ul className={styles.list_dropdown}>
      {options?.map((role, index) => (
        <li
          key={role}
          className={classNames(styles.list_dropdown_item, {
            [styles.list_dropdown_item_selected]: selected?.includes(role),
          })}
          onClick={() => handleSelection(role)}
        >
          <span>{String.fromCodePoint(index + 65)}</span>

          {role}

          {selected?.includes(role) && <LucideCheck />}
        </li>
      ))}
    </ul>
  );
};

export default ListInput;

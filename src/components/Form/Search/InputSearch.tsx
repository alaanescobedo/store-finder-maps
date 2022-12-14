import { useState } from "react";
import { InputSearchProps } from "../../../types";
import styles from "./InputSearch.module.css";

// TODO: Separate form control from input
export const InputSearch = ({ onChange }: InputSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={{ position: "relative" }}>
        <div className={styles.icon_container}>
          <svg
            aria-hidden="true"
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={styles.input_search}
          placeholder="Search store..."
          required
          value={searchValue || ""}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default InputSearch;

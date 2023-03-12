"use client";
import { Search } from "../types/search";
import { ChangeEvent } from "react";

export const SearchInput = ({ handleSearch }: Search) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    handleSearch(e.target.value);
  }

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search for repo..."
        onChange={handleChange}
      />
    </>
  );
};

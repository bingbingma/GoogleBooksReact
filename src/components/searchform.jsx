import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const SearchForm = () => {
  return (
    <section>
      <form>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="Becoming, Three Body Problem, etc.,"
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;

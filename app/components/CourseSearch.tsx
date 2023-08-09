"use client";
import React, { FC, FormEvent, useState } from "react";
import { Course } from "../types";

interface CourseSearchProps {
  getSearchResults: (results: Course[]) => void;
}

const CourseSearch: FC<CourseSearchProps> = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`api/courses/search?query=${query}`);
    const courses = await response.json();

    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;

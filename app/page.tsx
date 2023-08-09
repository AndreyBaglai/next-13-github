"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import LoadingPage from "./loading";

import Courses from "./components/Courses";

import { Course } from "./types";

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("api/courses");
      const courses = await response.json();
      setCourses(courses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Some title</h1>
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;

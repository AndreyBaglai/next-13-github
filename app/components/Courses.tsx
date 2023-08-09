import React, { FC } from "react";
import Link from "next/link";

import { Course } from "../types";

interface CoursesProps {
  courses: Course[];
}

const Courses: FC<CoursesProps> = ({ courses }) => {
  return (
    <div className="courses">
      {courses.map((course: Course) => (
        <div className="card" key={course.id}>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;

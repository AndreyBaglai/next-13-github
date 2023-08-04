import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page Title",
};

const AboutPage = () => {
  return (
    <div>
      <h1>About title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        saepe tempore eum debitis aliquam a voluptatum ratione quos blanditiis
        totam nulla dolorum autem provident cumque obcaecati, quaerat
        voluptates! Alias quae explicabo cupiditate odio ut debitis deserunt
        ratione ipsam, earum, esse, molestiae exercitationem natus obcaecati
        neque odit distinctio sequi fugiat animi?
      </p>
    </div>
  );
};

export default AboutPage;

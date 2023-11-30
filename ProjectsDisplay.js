import React, { useState } from "react";
import { originalList } from "./ProjectsList";
// import "./CourseDisplay.css";

export const CoursesDisplay = () => {
  const [details, setDetails] = useState({
    category: "",
    description: "",
  });

  // const [selectedCourse, setSelectedCourse] = useState(null);

  // function handleClick(course) {
  //   setDetails({
  //     category: course.category,
  //     description: course.description,
  //   });
  //   setSelectedCourse(course);
  // }

  return (
    <div className="container-fluid row bg-dark-subtle text-black p-4">
      <h2 className="text-center text-dark">Project Titles</h2>
      <hr />
      <div className="col-7">
        <ul>
          {originalList.map((course) => (
            <li
              key={course.name}
              // onClick={() => handleClick(course)}
              className="list-unstyled "
            >
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-5">{/* Empty div for spacing */}</div>
    </div>
  );
};

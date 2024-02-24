// AllCourses.js
import React from "react";
import Card from "./Card";

function AllCourses({ courses }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {courses.map((course) => (
          <div key={course.head} className="col-md-4 mb-3">
            <Card
              title={course.head}
              description={course.content}
              imageUrl={course.image}
              date={course.date}
              month={course.month}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;

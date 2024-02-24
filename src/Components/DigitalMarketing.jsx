// DigitalMarketing.js
import React from "react";
import Card from "./Card";

function DigitalMarketing({ courses }) {
  const filteredCourses = courses.filter(
    (course) => course.head === "Digital Marketing"
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredCourses.map((course) => (
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

export default DigitalMarketing;

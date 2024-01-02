import Course from "./course";

function CourseList({ courses }) {
  return (
    <>
      <div className="row">
        {courses.map((course) => (
          <div className="col-3" key={course.id}>
            <Course {...course} />
          </div>
        ))}
      </div>
    </>
  );
}
export default CourseList;

import { StudentContext } from "./StudentContext";
import { useContext } from "react";

const StudentList = () => {
  const students = useContext(StudentContext);

  return (
    <div>
      StudentList:{" "}
      <ul>
        {students.map((s) => {
          return (
            <li key={s.id}>
              Name: {s.name}, Age: {s.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;

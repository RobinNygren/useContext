import { TeacherContext } from "./TeacherContext";
import { useContext } from "react";

const TeacherList = () => {
  const teachers = useContext(TeacherContext);

  return (
    <div>
      TeacherList: {""}
      <ul>
        {teachers.map((t) => {
          return (
            <li key={t.id}>
              Name: {t.name}, Age: {t.age}, Class: {t.class}, Competence:{" "}
              {t.competence}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;

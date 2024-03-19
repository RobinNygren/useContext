import { initialStudents } from "./StudentContext";
import { initialTeachers } from "./TeacherContext";
import { Student } from "./StudentContext";
import { Teacher } from "./TeacherContext";
import { createContext } from "react";

type Global = {
  students: Student[];
  teachers: Teacher[];
};

export const GlobalState: Global = {
  students: initialStudents,
  teachers: initialTeachers,
};

export const GlobalStateContext = createContext([] as Global[]);

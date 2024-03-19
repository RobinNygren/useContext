import { createContext } from "react";
import uuid from "react-uuid";

export type Teacher = {
  id: string;
  name: string;
  age: number;
  class: string;
  competence: string[];
};

export const initialTeachers: Teacher[] = [
  {
    id: uuid(),
    name: "Anders",
    age: 37,
    class: "Math",
    competence: ["Director of Mensa"],
  },
  {
    id: uuid(),
    name: "Filip",
    age: 19,
    class: "Programming",
    competence: ["Senior expert developer"],
  },
  {
    id: uuid(),
    name: "Mikaela",
    age: 28,
    class: "Swedish",
    competence: ["German ", "English ", "Spanish"],
  },
];

export const TeacherContext = createContext([] as Teacher[]);

// contexten som lagrar alla studenter (namn)
import { createContext } from "react";
import uuid from "react-uuid";

export type Student = {
  id: string;
  name: string;
  age: number;
};

export const initialStudents: Student[] = [
  {
    id: uuid(),
    name: "Arnold",
    age: 78,
  },
  {
    id: uuid(),
    name: "Jens",
    age: 42,
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 25,
  },
];

export const StudentContext = createContext([] as Student[]);

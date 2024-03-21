import "./App.css";
import { StudentContext } from "./StudentContext";
import StudentList from "./StudentList";
import { initialStudents } from "./StudentContext";
import { TeacherContext, initialTeachers } from "./TeacherContext";
import TeacherList from "./TeacherList";
import { GlobalStateContext } from "./GlobalStateContext";
import GlobalList from "./GlobalList";
import { GlobalState } from "./GlobalStateContext";
import SearchTeacher from "./SearchTeacher";
import Vehicles from "./Vehicles";

function App() {
  return (
    <>
      <StudentContext.Provider value={initialStudents}>
        <h1>Student Context</h1>
        <StudentList />
      </StudentContext.Provider>
      <TeacherContext.Provider value={initialTeachers}>
        <h1>Teacher Context</h1>
        <TeacherList />
      </TeacherContext.Provider>
      <GlobalStateContext.Provider value={[GlobalState]}>
        <h1>Global Context</h1>
        <GlobalList />
      </GlobalStateContext.Provider>
      <SearchTeacher />
      <Vehicles />
    </>
  );
}

export default App;

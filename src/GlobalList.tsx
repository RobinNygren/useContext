import { GlobalStateContext } from "./GlobalStateContext";
import { useContext } from "react";

const GlobalList = () => {
  const global = useContext(GlobalStateContext);

  return (
    <div>
      GlobalList: {""}
      <ul>
        {global.map((g) => {
          return (
            <>
              {g.students.map((s) => (
                <li>Students name: {s.name}</li>
              ))}
              {g.teachers.map((t) => (
                <li>Teachers name: {t.name}</li>
              ))}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default GlobalList;

import { useState, useRef } from "react";
import { Teacher } from "./TeacherContext";
import { initialTeachers } from "./TeacherContext";

const SearchTeacher = () => {
  const [searchResults, setSearchResults] = useState<Teacher[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      const searchTeachers = inputRef.current.value;
      const results = initialTeachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTeachers.toLowerCase())
      );
      setSearchResults(results);
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      Search Teacher: <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((teacher, index) => (
          <li key={index}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTeacher;

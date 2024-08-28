import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="w-[900px] mx-auto mt-[40px]">
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="h-[400px]"
        />
      </div>

      <div className="mt-[40px]">
        <h1>Output</h1>
        <div>{value}</div>
      </div>
    </div>
  );
}

export default App;

import React, { useMemo, useState } from 'react'
import "./Memo.css"

function Memo() {
  const [value, setValue] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);

 // const prime = useMemo(() => {})

  return (
    <>
      <h1>Memo Hook</h1>
      <div
        className="container"
        style={darkTheme ? { backgroundColor: "lightgray" } : { backgroundColor: "white" }}
      >
        <input
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
        <h2>{value}</h2>
        <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
      </div>
    </>
  );
}

export default Memo;

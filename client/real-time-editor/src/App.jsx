import socket from "./socket";
import { useEffect, useState } from "react";
function App() {
  const [code, setCode] = useState();
  useEffect(() => {
    socket.on("codeChange", (data) => {
      setCode(data); // set the code to the value received from the server
    });

    return () => {
      // socket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    socket.emit("codeChange", e.target.value); // emit the code to the server
    setCode(e.target.value);
  };

  return (
    <textarea
      value={code}
      onChange={handleChange}
      cols="30"
      rows="10"
    ></textarea>
  );
}

export default App;

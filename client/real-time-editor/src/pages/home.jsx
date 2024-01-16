import socket from "../socket";
import { useEffect, useState } from "react";
const Home = () => {
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
    <div className="container ">
      <div className="m-4 border-4 border-blue-950 w-3/4 p-2">
        <textarea
          className="form-control w-full"
          id="code-editor"
          value={code}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;

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
    <>
      <button className="">Join</button>
      <button>Create</button>
    </>
  );
};

export default Home;

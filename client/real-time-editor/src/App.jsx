import { io } from "socket.io-client";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const socket = io('http://localhost:3000');
    console.log('Message from server:');
    // Listen for a custom event from the server
    socket.on('message', (data) => {
      
    });

    // Emit a custom event to the server
    socket.emit('client-message', 'Hello from the client!');
    

    return () => {
      console.log("dis")
      socket.disconnect();
    };
  }, []);

  

  return <>
    <textarea id="document"></textarea>
    
  </>;
}

export default App;

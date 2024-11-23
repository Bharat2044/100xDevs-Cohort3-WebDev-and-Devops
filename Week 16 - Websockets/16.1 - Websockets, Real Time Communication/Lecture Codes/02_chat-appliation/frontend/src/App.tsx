import { useEffect, useRef, useState } from 'react'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    
    //@ts-ignore
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App;
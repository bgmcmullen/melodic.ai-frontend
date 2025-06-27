import './App.css';
import { useState, useEffect, useRef } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_WS || '';

function App() {
  const socketRef = useRef<WebSocket | null>(null);
  const [file, setFile] = useState<ArrayBuffer | null>(null);
  const [wsReady, setWsReady] = useState(false);

  // Load file on mount
  useEffect(() => {
    const getFile = async () => {
      const res = await fetch('/audio_file.wav');
      const arrayBuffer = await res.arrayBuffer();
      setFile(arrayBuffer);
    };
    getFile();
  }, []);

  // Setup WebSocket
  useEffect(() => {
    const socket = new WebSocket(`${BACKEND_URL}/ws/pitch`);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('✅ WebSocket connected');
      setWsReady(true); // mark as ready
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('📨 Message from server:', data);
    };

    socket.onerror = (err) => {
      console.error('❌ WebSocket error:', err);
    };

    socket.onclose = () => {
      console.log('❎ WebSocket closed');
      setWsReady(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  let count = 0;
  useEffect(() => {
    if (file && wsReady && socketRef.current?.readyState === WebSocket.OPEN) {
      const sendChunk = () => {
        if(count > 10) return;
        if(socketRef.current) {
          socketRef.current.send(file);
        }
        count++;
        setTimeout(sendChunk, 2000);
      }
      sendChunk();
    }
  }, [file, wsReady]);

  return <div>Hello World</div>;
}

export default App;

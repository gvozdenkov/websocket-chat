import { Websocket } from '../components/websocket';
import { socket, WebSocketProvider } from '../contexts/websocket-context';

function App() {
  return (
    <WebSocketProvider value={socket}>
      <Websocket />
    </WebSocketProvider>
  );
}

export default App;

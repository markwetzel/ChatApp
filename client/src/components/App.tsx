import { ChatProvider } from "../context/ChatContext";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

type Props = {};

const App = (props: Props) => {
  return <ChatProvider>
    <ChatWindow />
    <ChatInput />
  </ChatProvider>;
};

export default App;

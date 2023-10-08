import ChatHome from "./components/pages/chats/ChatHome";
import Home from "./components/pages/home/Home";
import Landing from "./components/pages/landing/Landing";
import WalletConnect from "./components/pages/walletconnected/walletconnected";

export const routes = [
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/chats",
    component: <ChatHome />,
  },
  {
    path: "/landing",
    component: <Landing />,
  },
  {
    path: "/walletconnected",
    component: <WalletConnect />,
  },
];

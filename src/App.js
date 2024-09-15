import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login_page/login_page";
import ChatPage from "./components/pages/chat_page/chat_page";
import FileManageFile from "./components/pages/file_manage_page/file_manage_page";
function App() {
  return (
    <Router>
      <div className="app__container">
        <div className="app__main">
          <Routes>
            <Route path="login" Component={LoginPage} />
            <Route path="chat" Component={ChatPage} />
            <Route path="file" Component={FileManageFile} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

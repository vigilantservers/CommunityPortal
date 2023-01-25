import React, { useState } from "react";
import { Footer, Header } from "./components";
import { HomePage, UsersPage, Err404Page } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage, LogoutPage, RegisterPage } from "./features/users/pages/";
import { ForumsPage, TopicPage } from "./features/forums/pages/";
import { ForumContext } from "./context/";

import "./App.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const value = {
    authenticated,
    user,
    setAuthenticated,
    setUser,
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ForumContext.Provider value={{ value }}>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forums" element={<ForumsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<Err404Page />} />
            <Route path="/forum/topics/:id" component={TopicPage}/>
          </Routes>
          <Footer />
        </ForumContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

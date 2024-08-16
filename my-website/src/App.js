import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";
import "./App.css";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Content style={{ padding: "0 50px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/swapi" element={<Swapi />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
};

export default App;

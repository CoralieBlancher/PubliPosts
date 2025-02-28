import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Provider } from "react-redux";

import { store } from "./store";
import Home from "./page/Home/index.page.jsx";
import PostDetail from "./page/PostDetail/index.page.jsx";
import AddPost from "./page/AddPost/index.page.jsx";
import Nav from "./component/Nav";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/add-post" element={<AddPost />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;


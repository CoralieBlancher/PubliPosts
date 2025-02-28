import React from "react";

import PostList from "../../component/PostList";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Bienvenue sur la plateforme</h1>
            <PostList />
        </div>
    );
};

export default Home;
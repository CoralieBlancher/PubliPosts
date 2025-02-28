import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

// Récupérer tous les posts
export const fetchPostsAPI = async () => {
    const response = await axios.get(`${apiUrl}/posts`);
    return response.data;
};

// Ajouter un post
export const addPostAPI = async (postData) => {
    const response = await axios.post(`${apiUrl}/posts`, {
        ...postData,
        userId: 1,
    });
    return response.data;
};

// Récupérer les commentaires d'un post
export const fetchCommentsAPI = async (postId) => {
    const response = await axios.get(`${apiUrl}/comments?postId=${postId}`);
    return response.data;
};

// Ajouter un commentaire
export const addCommentAPI = async (commentData) => {
    const response = await axios.post(`${apiUrl}/comments`, commentData);
    return response.data;
};

// Récupérer tous les utilisateurs
export const fetchUsersAPI = async () => {
    const response = await axios.get(`${apiUrl}/users`);
    return response.data;
};

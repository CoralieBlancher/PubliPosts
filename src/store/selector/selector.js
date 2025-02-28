// Sélectionner tous les posts
export const selectAllPosts = (state) => state.posts.posts;

// Sélectionner un post par ID
export const selectPostById = (postId) => (state) =>
    state.posts.posts.find((post) => post.id === postId);

// Sélectionner le statut de chargement des posts
export const selectPostsStatus = (state) => state.posts.status;

// Sélectionner l'erreur des posts
export const selectPostsError = (state) => state.posts.error;

// Sélectionner les commentaires d'un post spécifique
export const selectCommentsByPostId = (postId) => (state) =>
    state.comments.comments[postId] || [];

// Sélectionner le statut de chargement des commentaires
export const selectCommentsStatus = (state) => state.comments.status;

// Sélectionner l'erreur des commentaires
export const selectCommentsError = (state) => state.comments.error;

// Sélectionner tous les utilisateurs
export const selectAllUsers = (state) => state.users.users;

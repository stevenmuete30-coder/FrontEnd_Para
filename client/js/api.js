const API_URL = 'http://localhost:3000/api';

export const api = {
    async registro(datos) {
        const response = await fetch(`${API_URL}/auth/registro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async login(datos) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async obtenerUsuarios() {
        const response = await fetch(`${API_URL}/auth/usuarios`);
        return response.json();
    },

    async obtenerPosts(limite = 50, pagina = 1) {
        const response = await fetch(`${API_URL}/posts?limite=${limite}&pagina=${pagina}`);
        return response.json();
    },

    async obtenerPost(id) {
        const response = await fetch(`${API_URL}/posts/${id}`);
        return response.json();
    },

    async crearPost(datos) {
        const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async actualizarPost(id, datos) {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async eliminarPost(id) {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    },

    async obtenerPostsPorUsuario(usuarioId) {
        const response = await fetch(`${API_URL}/posts/usuario/${usuarioId}`);
        return response.json();
    },

    async obtenerCategorias() {
        const response = await fetch(`${API_URL}/categorias`);
        return response.json();
    },

    async crearCategoria(datos) {
        const response = await fetch(`${API_URL}/categorias`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async obtenerEtiquetas() {
        const response = await fetch(`${API_URL}/etiquetas`);
        return response.json();
    },

    async crearEtiqueta(datos) {
        const response = await fetch(`${API_URL}/etiquetas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async obtenerComentariosPorPost(postId) {
        const response = await fetch(`${API_URL}/comentarios/post/${postId}`);
        return response.json();
    },

    async crearComentario(datos) {
        const response = await fetch(`${API_URL}/comentarios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        return response.json();
    },

    async eliminarComentario(id) {
        const response = await fetch(`${API_URL}/comentarios/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    }
};
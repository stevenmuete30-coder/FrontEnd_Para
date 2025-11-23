import { api } from './api.js';

async function cargarPostsInicio() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    try {
        const posts = await api.obtenerPosts(6, 1);
        
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p style="color: white;">No hay posts disponibles.</p>';
            return;
        }

        postsContainer.innerHTML = posts.map(post => `
            <div class="post-card">
                <h4>${post.titulo}</h4>
                <div class="post-meta">
                    <span>${post.autor || 'Anónimo'}</span>
                    <span>${new Date(post.fecha_publicacion).toLocaleDateString('es-ES')}</span>
                    ${post.categoria ? `<span> ${post.categoria}</span>` : ''}
                </div>
                <p class="post-excerpt">${post.contenido.substring(0, 150)}...</p>
                <a href="pages/post-detail.html?id=${post.id}" class="btn">Leer más →</a>
            </div>
        `).join('');
    } catch (error) {
        postsContainer.innerHTML = '<p style="color: white;">Error al cargar los posts.</p>';
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarPostsInicio();
});
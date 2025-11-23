export const auth = {
    guardarToken(token) {
        localStorage.setItem('token', token);
    },

    obtenerToken() {
        return localStorage.getItem('token');
    },

    guardarUsuario(usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    },

    obtenerUsuario() {
        const usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario) : null;
    },

    estaAutenticado() {
        return !!this.obtenerToken();
    },

    cerrarSesion() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        window.location.href = '/index.html';
    },

    verificarAutenticacion() {
        if (!this.estaAutenticado()) {
            window.location.href = '/pages/login.html';
            return false;
        }
        return true;
    }
};
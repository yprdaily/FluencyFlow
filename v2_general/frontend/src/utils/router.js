/**
 * SPA Router - Simple hash-based routing
 */
export class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    add(path, handler) {
        this.routes[path] = handler;
        return this;
    }

    navigate(path) {
        window.location.hash = path;
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const [path, ...params] = hash.split('/').filter(Boolean);
        const route = '/' + (path || '');

        if (this.routes[route]) {
            this.currentRoute = route;
            this.routes[route](params);
        } else if (this.routes['/']) {
            this.currentRoute = '/';
            this.routes['/'](params);
        }
    }

    start() {
        this.handleRoute();
    }
}

import Vue from 'vue';
import App from './App.vue';
import About from './About.vue';
import NotFound from './NotFound';

// for offline only onepage apps

const routes = {
    '/': App,
    '/about': About
};

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h) { return h(this.ViewComponent) }
});
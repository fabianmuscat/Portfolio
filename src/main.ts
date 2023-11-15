import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import './style.css';

import About from './components/pages/About.vue';
import Experience from './components/pages/Experience.vue';
import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue';

const app = createApp(App);
const routes = [
	// main routes
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/experience', component: Experience },
	{ path: '/projects', component: Projects },

	// redirects
	{ path: '/home', redirect: '/home' },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

app.use(router);
app.mount('#portfolio');

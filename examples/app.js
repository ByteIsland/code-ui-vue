import Vue from 'vue'
import VueRouter from 'vue-router';
import CodeUI from '../src/index.js';
import App from './app.vue';

// 全局注册
Vue.use(VueRouter)
Vue.use(CodeUI) 

/* debug */
Vue.config.debug = true

const router = new VueRouter({
	mode: 'history',
	routes: []
})

const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');
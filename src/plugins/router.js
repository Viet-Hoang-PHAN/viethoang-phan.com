import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from "../views/Welcome";
import Resume from "../views/Resume";
import Contact from "../views/Contact";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Welcome,
            meta: { transitionName: 'effect'}
        },
        {
            path: '/mon-cv',
            component: Resume,
            meta: { transitionName: 'fade'}
        },
        {
            path: '/contact',
            component: Contact,
            meta: { transitionName: 'fade'}
        }
    ]
})
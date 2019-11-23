import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from "../views/Welcome";
import Resume from "../views/Resume";
import Contact from "../views/Contact";
import ErrorView from "../views/Error";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Welcome,
            meta: { transitionName: 'fade'}
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
        },
        {
            path: '*',
            component: ErrorView,
        }
    ]
})
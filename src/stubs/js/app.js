/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')
import 'es6-promise/auto'
import LoginForm from './components/shared/LoginForm.vue'
import RegisterForm from './components/shared/RegisterForm.vue'

import Vue from 'vue'
Vue.use(Buefy, {
    defaultIconPack: 'fas'
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('login-form', LoginForm)
Vue.component('register-form', RegisterForm)

const app = new Vue({
    el: '#app',

    data() {
        return {
            userIsLoggedIn: false,
            mobileMenuOpen: false
        }
    },

    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        },

        openLoginModal() {
            this.$buefy.modal.open({
                parent: this,
                component: LoginForm,
                hasModalCard: true
            })
        },

        openRegisterModal() {
            this.$buefy.modal.open({
                parent: this,
                component: RegisterForm,
                hasModalCard: true
            })
        },
    }
})
import '_sass/main.scss'
import Vue from 'vue'
import Home from '_views/Home.vue'

// eslint-disable-next-line
new Vue({
    el: '#app',
    render: h => h(Home)
})

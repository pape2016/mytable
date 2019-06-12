import Vue from 'vue'
import main from './main.vue';
import 'element-ui/lib/theme-chalk/index.css';
import elementUI from 'element-ui';

Vue.use(elementUI);

new Vue({
    render: h=>h(main)
}).$mount("#app")
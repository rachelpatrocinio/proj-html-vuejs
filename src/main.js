import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faBars,faBagShopping} from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faBars,faBagShopping);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');


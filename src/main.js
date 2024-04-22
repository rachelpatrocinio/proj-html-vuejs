import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faBars,faBagShopping, faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';


library.add(faMagnifyingGlass, faBars,faBagShopping, faCircle, faCircleRegular);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');


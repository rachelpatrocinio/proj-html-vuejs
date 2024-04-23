import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faMagnifyingGlass, faBars,faBagShopping, faCircle, faCheck, faUser, faTag, faX, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleRegular, faClock, faCopyright} from '@fortawesome/free-regular-svg-icons';
import {faTwitter, faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';


library.add(faMagnifyingGlass, faBars,faBagShopping, faCircle, faCircleRegular, faCheck, faUser, faTag, faX, faPhoneVolume, faClock, faCopyright, faTwitter, faInstagram, faFacebookF);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');


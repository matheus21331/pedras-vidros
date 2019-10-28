// Libs

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import '../sass/style.scss';

import 'selectric';
import 'slick-carousel';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap';
import 'popper.js';
import 'jquery-mask-plugin';
import 'jquery.nicescroll';

import Vue from 'vue';

Vue.component('componente-vue', require('./components/Component.vue').default);

var app = new Vue({
	el: '#app',
});



// Partials
import header from './partials/header.js';


(function ($) {
		// Partials
		header();

		console.log('ok');
})(jQuery);
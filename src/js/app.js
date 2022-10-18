import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';


import Header from '../blocks/modules/header/header.js';


const header = new Header();


$(document).ready(() => {
    header.init();
})
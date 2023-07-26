import '@babel/polyfill';
import './index.html';
import './index.scss';

import { dropBox } from './modules/headerDropBox';
import { slick } from './modules/slick';

dropBox();

slick(); //Главный слайдер

$('.data').slick(); //Слайдер топ 10


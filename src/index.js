import '@babel/polyfill';
import './index.html';
import './index.scss';

import { dropBox } from './modules/headerDropBox';
import { slider } from './modules/slider';
import { slick } from './modules/slick';

dropBox();
slider();

slick();


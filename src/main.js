// src/main.js
import { version } from '../package.json';

import axios from 'axios';
import lodash from 'lodash';

const show = () => {
  console.log('version ' + version, lodash.random(22, 33));
};

show();

export default show;

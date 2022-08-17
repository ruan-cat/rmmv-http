// src/main.js
import { version } from '../package.json';

import axios from 'axios';

const show = () => {
  console.log('version ' + version, axios);
};

show();

export default show;

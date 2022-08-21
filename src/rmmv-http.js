import { version } from '../package.json';

import axios from 'axios';
import lodash from 'lodash';

import params from './utils/getRmmvParams.js';

const show = () => {
  // console.log('version ' + version, lodash.random(22, 33));
  console.log('params ' + params);
};

show();

const success = 200;

/** 系统全局请求对象 */
const service = axios.create({
  headers: { Accept: '*/*', withCredentials: true },
  // baseURL: process.env.VUE_APP_BASE_API,
  // timeout: requestTimeOut,
  /** 按照王志荣给出的解决方案，给出该部分的设置。试图解决跨域浏览问题。
   * 参考链接：
   * https://blog.csdn.net/qq_34707272/article/details/119114615
   */
  withCredentials: false,
  responseType: 'json',
  validateStatus(status) {
    return status === success;
  },
});

// class RmmvHttp

export default service;

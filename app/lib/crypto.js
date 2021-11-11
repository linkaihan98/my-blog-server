/*
 * @Author: KAAN
 * @Date: 2021-11-06 15:06:55
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-11 19:16:13
 * @Descripttion: Hmac算法加密
 */

'use strict';

const crypto = require('crypto');
const { SECRET } = require('../../config/secretKeys');

const generatePassword = str => {
  return crypto.createHmac('sha256', SECRET).update(str).digest('hex');
};

module.exports = { generatePassword };

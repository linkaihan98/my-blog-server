/*
 * @Author: KAAN
 * @Date: 2021-11-11 17:23:45
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-11 19:08:29
 * @Descripttion: response状态格式化
 */
'use strict';

class ResponseStatus {
  Success(status, message, data) {
    return {
      code: 1,
      status: status || 200,
      message: message || 'success',
      data,
    };
  }

  // fail
  Fail(status, message) {
    return {
      code: 0,
      status: status || false,
      message: message || 'server error',
    };
  }
}

module.exports = new ResponseStatus();

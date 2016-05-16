(function(module) {
  'use strict';
  /* globals module, require */

  var constants = Object.freeze({
    'name': 'QQ好友',
    'admin': {
      'route': '/plugins/share-qqfriend',
      'icon': 'fa fa-qq'
    }
  });

  var QQFriend = {
    settings: undefined
  };
  
  QQFriend.addNetwork = function (networks, cb) {
    networks.push({
      id: "qqfriend",
      name: "QQ好友",
      class: "fa-qq"
    });
    if (cb && typeof cb === 'function')
      cb(null, networks);
  };
  module.exports = QQFriend;
}(module));
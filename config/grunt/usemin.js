'use strict';

module.exports = function(){
  var cdnRoot = require('../app').cdnDomain[process.env.DEPLOY_TYPE]||'';
  return {
    // look under this files
    css: '<%=yo.dist%>/static/**/*.css',
    html: '<%=yo.dist%>/views/**/*.vm',
    js: '<%=yo.dist%>/static/**/*.js',
    options: {
      // Extend default settings to support CDN url.
      patterns: require('../usemin-pattern').pattern(cdnRoot)
    }
  };
};

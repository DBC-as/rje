// Simple test utility
define(['require', 'exports', 'module'], function(require, exports, module) {
  var isDone;
  exports.begin = function() {
    isDone = false;
    waitsFor(function() { return isDone; }, 'Test timeout', 10000);
  }
  exports.done = function() { isDone = true; };
});

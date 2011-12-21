// Simple test utility
define([], function() {
  var isDone;
  return { 
    begin: function() {
        isDone = false;
        waitsFor(function() { return isDone; }, 'Test timeout', 10000);
    },
    end: function() { isDone = true; }};
});

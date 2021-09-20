"use strict";
exports.__esModule = true;
exports.factory = exports.name = exports.version = void 0;
var typescript_1 = require("typescript");
exports.version = Math.random();
exports.name = 'test';
function factory(compilerInstance) {
  return function (ctx) {
    return function (sf) {
      var visitor = function (node) {
        if (typescript_1.isPropertyAccessExpression(node) && node.getText() === 'import.meta.url') {
          return typescript_1.factory.createStringLiteral('http://localhost/');
        }
        return typescript_1.visitEachChild(node, visitor, ctx);
      };
      return typescript_1.visitNode(sf, visitor);
    };
  };
}
exports.factory = factory;

"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/module-details-from-path";
exports.ids = ["vendor-chunks/module-details-from-path"];
exports.modules = {

/***/ "(instrument)/./node_modules/module-details-from-path/index.js":
/*!********************************************************!*\
  !*** ./node_modules/module-details-from-path/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar path = __webpack_require__(/*! path */ \"path\")\n\nmodule.exports = function (file) {\n  var segments = file.split(path.sep)\n  var index = segments.lastIndexOf('node_modules')\n  if (index === -1) return\n  if (!segments[index + 1]) return\n  var scoped = segments[index + 1][0] === '@'\n  var name = scoped ? segments[index + 1] + '/' + segments[index + 2] : segments[index + 1]\n  var offset = scoped ? 3 : 2\n  return {\n    name: name,\n    basedir: segments.slice(0, index + offset).join(path.sep),\n    path: segments.slice(index + offset).join(path.sep)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL21vZHVsZS1kZXRhaWxzLWZyb20tcGF0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsa0JBQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJlcHVsc2UvLi9ub2RlX21vZHVsZXMvbW9kdWxlLWRldGFpbHMtZnJvbS1wYXRoL2luZGV4LmpzP2I1YWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgdmFyIHNlZ21lbnRzID0gZmlsZS5zcGxpdChwYXRoLnNlcClcbiAgdmFyIGluZGV4ID0gc2VnbWVudHMubGFzdEluZGV4T2YoJ25vZGVfbW9kdWxlcycpXG4gIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuICBpZiAoIXNlZ21lbnRzW2luZGV4ICsgMV0pIHJldHVyblxuICB2YXIgc2NvcGVkID0gc2VnbWVudHNbaW5kZXggKyAxXVswXSA9PT0gJ0AnXG4gIHZhciBuYW1lID0gc2NvcGVkID8gc2VnbWVudHNbaW5kZXggKyAxXSArICcvJyArIHNlZ21lbnRzW2luZGV4ICsgMl0gOiBzZWdtZW50c1tpbmRleCArIDFdXG4gIHZhciBvZmZzZXQgPSBzY29wZWQgPyAzIDogMlxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgYmFzZWRpcjogc2VnbWVudHMuc2xpY2UoMCwgaW5kZXggKyBvZmZzZXQpLmpvaW4ocGF0aC5zZXApLFxuICAgIHBhdGg6IHNlZ21lbnRzLnNsaWNlKGluZGV4ICsgb2Zmc2V0KS5qb2luKHBhdGguc2VwKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/module-details-from-path/index.js\n");

/***/ })

};
;
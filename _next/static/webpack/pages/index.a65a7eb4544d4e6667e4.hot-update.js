self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/VideoCanvas.tsx":
/*!************************************!*\
  !*** ./components/VideoCanvas.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _tensorflow_tfjs_backend_webgl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/index.js");
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_drawFaceLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/drawFaceLine */ "./utils/drawFaceLine.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _home_Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/Portal */ "./components/home/Portal.tsx");
/* harmony import */ var _home_ML_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/ML_Loading */ "./components/home/ML_Loading.tsx");
/* harmony import */ var _home_ProgressBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/ProgressBar */ "./components/home/ProgressBar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_drawLip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/drawLip */ "./utils/drawLip.ts");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\Desktop\\Projects\\mycolor-shushu\\components\\VideoCanvas.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: opacity 0.5s;\n  z-index: 100003;\n  margin-bottom: 30px;\n  opacity: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100vw;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  height: 100%;\n  width: auto;\n  z-index: 100;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  opacity: 0;\n  max-width: 100vw;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  /* width: 100vw; */\n  position: fixed;\n  top: 0;\n  /* transform: scale(-1, 1); */\n  transition: 0.125s linear;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  white-space: pre-wrap;\n  background: rgb(230, 230, 230);\n  padding: 1.5vh;\n  color: black;\n  font-size: 1.7vh;\n  margin-top: 0.5vh;\n  margin-bottom: 1vmin;\n  text-align: center;\n  position: relative;\n  white-space: nowrap;\n  @media (max-width: 720px) {\n    padding: 2vw;\n    font-size: 2.42vw;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // const FaceMeshComponent = dynamic(() => import('@mediapipe/face_mesh'), {
//   ssr: false,
// });
// import * as Stats from 'stats.js';










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div(_templateObject(), _utils_theme__WEBPACK_IMPORTED_MODULE_8__.default.borderRadius);
_c = Wrapper;
var VideoCss = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__.css)(_templateObject2());
var Video = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.video(_templateObject3(), VideoCss);
_c2 = Video;
var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.canvas(_templateObject4(), VideoCss);
_c3 = Canvas;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div(_templateObject5());
_c4 = Container;
var BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div(_templateObject6(), function (props) {
  return props.isLoading ? 0 : 1;
});
_c5 = BottomWrapper;

var VideoCanvas = function VideoCanvas(_ref) {
  _s();

  var stream = _ref.stream;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('인공지능을 불러오는 중이에요'),
      explain = _useState[0],
      setExplain = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isCalculated = _useState3[0],
      setIsCalculating = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isScanEnd = _useState4[0],
      setScanEnd = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)(); // const stats = useRef();

  var canvas = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var video = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var drawCanvas = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  var detector = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  var rafID = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();

  var scanDraw = function scanDraw(positions) {
    if (drawCanvas.current) drawCanvas.current.draw(positions);
  };

  var animate = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _drawCanvas$current, _detector$current, _video$current;

      var predictions, _predictions$, positions, srcObj;

      return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // stats.current.begin();
              (_drawCanvas$current = drawCanvas.current) === null || _drawCanvas$current === void 0 ? void 0 : _drawCanvas$current.clearAndDraw();
              _context.next = 3;
              return (_detector$current = detector.current) === null || _detector$current === void 0 ? void 0 : _detector$current.estimateFaces(video.current, {
                flipHorizontal: false
              });

            case 3:
              predictions = _context.sent;
              setIsLoading(false);

              if ((predictions === null || predictions === void 0 ? void 0 : predictions.length) != 0) {
                positions = predictions === null || predictions === void 0 ? void 0 : (_predictions$ = predictions[0]) === null || _predictions$ === void 0 ? void 0 : _predictions$.keypoints;

                if (positions) {
                  scanDraw(positions);
                }
              } else {
                setExplain('얼굴이 감지되지 않았어요. 카메라에 얼굴을 비춰주세요.');
              } // stats.current.end();


              srcObj = (_video$current = video.current) === null || _video$current === void 0 ? void 0 : _video$current.srcObject;
              if (srcObj !== null && srcObj !== void 0 && srcObj.active) rafID.current = requestAnimationFrame(animate);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function animate() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (isScanEnd) {
      drawCanvas.current = new _utils_drawLip__WEBPACK_IMPORTED_MODULE_13__.default();
      drawCanvas.current.init(canvas.current, video.current);
    }
  }, [isScanEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    try {
      video.current.srcObject = stream;
      video.current.play().then( /*#__PURE__*/(0,C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var faceLandmarksDetection, model;
        return C_Users_JAEHOON_OneDrive_Desktop_Projects_mycolor_shushu_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __webpack_require__.e(/*! import() */ "vendors-node_modules_tensorflow-models_face-landmarks-detection_dist_face-landmarks-detection-51a30a").then(__webpack_require__.bind(__webpack_require__, /*! @tensorflow-models/face-landmarks-detection */ "./node_modules/@tensorflow-models/face-landmarks-detection/dist/face-landmarks-detection.esm.js"));

              case 2:
                faceLandmarksDetection = _context2.sent;
                model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
                _context2.next = 6;
                return faceLandmarksDetection.createDetector(model, {
                  runtime: 'mediapipe',
                  refineLandmarks: false,
                  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh'
                });

              case 6:
                detector.current = _context2.sent;
                drawCanvas.current = new _utils_drawFaceLine__WEBPACK_IMPORTED_MODULE_7__.drawFaceLine(setExplain, setIsCalculating, router);
                drawCanvas.current.init(canvas.current, video.current);
                animate();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    } catch (error) {
      alert('before detected ');
    }

    return function () {
      return cancelAnimationFrame(rafID.current);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {
      id: "canvas",
      ref: canvas
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Video, {
      muted: true,
      playsInline: true,
      id: "video",
      ref: video
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_Portal__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [isCalculated && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ML_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {
          text: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694",
          title: "\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB97C \uCE21\uC815 \uC911\uC774\uC5D0\uC694!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ML_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {
          text: "\uAE30\uAE30\uC5D0 \uB530\uB77C \uCD5C\uB300 1\uBD84 \uAC00\uAE4C\uC774 \uC18C\uC694\uB420 \uC218 \uC788\uC5B4\uC694",
          title: "\uC778\uACF5\uC9C0\uB2A5\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC774\uC5D0\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomWrapper, {
      isLoading: isLoading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ProgressBar__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
        id: "testExplain",
        children: explain
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, _this);
};

_s(VideoCanvas, "D4YZzsgjLOnAZiFjzgdW1v4SN4s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter];
});

_c6 = VideoCanvas;
/* harmony default export */ __webpack_exports__["default"] = (VideoCanvas);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Video");
$RefreshReg$(_c3, "Canvas");
$RefreshReg$(_c4, "Container");
$RefreshReg$(_c5, "BottomWrapper");
$RefreshReg$(_c6, "VideoCanvas");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0NhbnZhcy50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiVmlkZW9Dc3MiLCJjc3MiLCJWaWRlbyIsIkNhbnZhcyIsIkNvbnRhaW5lciIsIkJvdHRvbVdyYXBwZXIiLCJwcm9wcyIsImlzTG9hZGluZyIsIlZpZGVvQ2FudmFzIiwic3RyZWFtIiwidXNlU3RhdGUiLCJleHBsYWluIiwic2V0RXhwbGFpbiIsInNldElzTG9hZGluZyIsImlzQ2FsY3VsYXRlZCIsInNldElzQ2FsY3VsYXRpbmciLCJpc1NjYW5FbmQiLCJzZXRTY2FuRW5kIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2FudmFzIiwidXNlUmVmIiwidmlkZW8iLCJkcmF3Q2FudmFzIiwiZGV0ZWN0b3IiLCJyYWZJRCIsInNjYW5EcmF3IiwicG9zaXRpb25zIiwiY3VycmVudCIsImRyYXciLCJhbmltYXRlIiwiY2xlYXJBbmREcmF3IiwiZXN0aW1hdGVGYWNlcyIsImZsaXBIb3Jpem9udGFsIiwicHJlZGljdGlvbnMiLCJsZW5ndGgiLCJrZXlwb2ludHMiLCJzcmNPYmoiLCJzcmNPYmplY3QiLCJhY3RpdmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1c2VFZmZlY3QiLCJkcmF3TGlwIiwiaW5pdCIsInBsYXkiLCJ0aGVuIiwiZmFjZUxhbmRtYXJrc0RldGVjdGlvbiIsIm1vZGVsIiwiU3VwcG9ydGVkTW9kZWxzIiwiTWVkaWFQaXBlRmFjZU1lc2giLCJjcmVhdGVEZXRlY3RvciIsInJ1bnRpbWUiLCJyZWZpbmVMYW5kbWFya3MiLCJzb2x1dGlvblBhdGgiLCJkcmF3RmFjZUxpbmUiLCJlcnJvciIsImFsZXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLE9BQUQ7QUFBUyxVQUFFLEVBQUMsYUFBWjtBQUFBLGtCQUEyQkk7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQWhHRDs7R0FBTUgsVztVQUtXVyxtRDs7O01BTFhYLFc7QUFrR04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTY1YTdlYjQ1NDRkNGU2NjY3ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRmFjZUxhbmRtYXJrc0RldGVjdG9yLFxyXG4gIEZhY2VMYW5kbWFya3NEZXRlY3RvcklucHV0LFxyXG59IGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nO1xyXG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbCc7XHJcbmltcG9ydCAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcclxuLy8gY29uc3QgRmFjZU1lc2hDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQG1lZGlhcGlwZS9mYWNlX21lc2gnKSwge1xyXG4vLyAgIHNzcjogZmFsc2UsXHJcbi8vIH0pO1xyXG4vLyBpbXBvcnQgKiBhcyBTdGF0cyBmcm9tICdzdGF0cy5qcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGRyYXdGYWNlTGluZSB9IGZyb20gJy4uL3V0aWxzL2RyYXdGYWNlTGluZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBNb2RhbFBvcnRhbCBmcm9tICcuL2hvbWUvUG9ydGFsJztcclxuaW1wb3J0IE1MX0xvYWRpbmcgZnJvbSAnLi9ob21lL01MX0xvYWRpbmcnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9ob21lL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZHJhd0xpcCBmcm9tICcuLi91dGlscy9kcmF3TGlwJztcclxuZXhwb3J0IGludGVyZmFjZSBwZXJzb25hbENvbG9yIHtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICByZXN1bHRLb3I6IHN0cmluZztcclxufVxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIHBhZGRpbmc6IDEuNXZoO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuN3ZoO1xyXG4gIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDF2bWluO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIGZvbnQtc2l6ZTogMi40MnZ3O1xyXG4gIH1cclxuICAke3RoZW1lLmJvcmRlclJhZGl1c31cclxuYDtcclxuXHJcbmNvbnN0IFZpZGVvQ3NzID0gY3NzYFxyXG4gIC8qIHdpZHRoOiAxMDB2dzsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuMTI1cyBsaW5lYXI7XHJcbmA7XHJcbmNvbnN0IFZpZGVvID0gc3R5bGVkLnZpZGVvYFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAke1ZpZGVvQ3NzfVxyXG5gO1xyXG5jb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgJHtWaWRlb0Nzc31cclxuYDtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAzO1xyXG5gO1xyXG5cclxuY29uc3QgQm90dG9tV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBpc0xvYWRpbmc6IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG4gIHotaW5kZXg6IDEwMDAwMztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzTG9hZGluZyA/IDAgOiAxKX07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gIGRyYXdNZXRob2Q/OiBzdHJpbmc7XHJcbiAgc3RyZWFtOiBNZWRpYVN0cmVhbTtcclxufVxyXG5cclxuY29uc3QgVmlkZW9DYW52YXMgPSAoeyBzdHJlYW0gfTogcHJvcHMpID0+IHtcclxuICBjb25zdCBbZXhwbGFpbiwgc2V0RXhwbGFpbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCfsnbjqs7Xsp4DriqXsnYQg67aI65+s7Jik64qUIOykkeydtOyXkOyalCcpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbaXNDYWxjdWxhdGVkLCBzZXRJc0NhbGN1bGF0aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbaXNTY2FuRW5kLCBzZXRTY2FuRW5kXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjb25zdCBzdGF0cyA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNhbnZhcyA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgdmlkZW8gPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZHJhd0NhbnZhcyA9IHVzZVJlZjxkcmF3RmFjZUxpbmUgfCBkcmF3TGlwPigpO1xyXG4gIGNvbnN0IGRldGVjdG9yID0gdXNlUmVmPEZhY2VMYW5kbWFya3NEZXRlY3Rvcj4oKTtcclxuICBjb25zdCByYWZJRCA9IHVzZVJlZjxudW1iZXI+KCk7XHJcblxyXG4gIGNvbnN0IHNjYW5EcmF3ID0gKHBvc2l0aW9uczogYW55KSA9PiB7XHJcbiAgICBpZiAoZHJhd0NhbnZhcy5jdXJyZW50KSAoZHJhd0NhbnZhcy5jdXJyZW50IGFzIGRyYXdGYWNlTGluZSkuZHJhdyhwb3NpdGlvbnMpO1xyXG4gIH07XHJcbiAgY29uc3QgYW5pbWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIHN0YXRzLmN1cnJlbnQuYmVnaW4oKTtcclxuXHJcbiAgICBkcmF3Q2FudmFzLmN1cnJlbnQ/LmNsZWFyQW5kRHJhdygpO1xyXG4gICAgY29uc3QgcHJlZGljdGlvbnMgPSBhd2FpdCBkZXRlY3Rvci5jdXJyZW50Py5lc3RpbWF0ZUZhY2VzKFxyXG4gICAgICB2aWRlby5jdXJyZW50IGFzIEZhY2VMYW5kbWFya3NEZXRlY3RvcklucHV0LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmxpcEhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKHByZWRpY3Rpb25zPy5sZW5ndGggIT0gMCkge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBwcmVkaWN0aW9ucz8uWzBdPy5rZXlwb2ludHM7XHJcbiAgICAgIGlmIChwb3NpdGlvbnMpIHtcclxuICAgICAgICBzY2FuRHJhdyhwb3NpdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFeHBsYWluKCfslrzqtbTsnbQg6rCQ7KeA65CY7KeAIOyViuyVmOyWtOyalC4g7Lm066mU65287JeQIOyWvOq1tOydhCDruYTstrDso7zshLjsmpQuJyk7XHJcbiAgICB9XHJcbiAgICAvLyBzdGF0cy5jdXJyZW50LmVuZCgpO1xyXG4gICAgY29uc3Qgc3JjT2JqOiBhbnkgPSB2aWRlby5jdXJyZW50Py5zcmNPYmplY3Q7XHJcbiAgICBpZiAoc3JjT2JqPy5hY3RpdmUpIHJhZklELmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzU2NhbkVuZCkge1xyXG4gICAgICBkcmF3Q2FudmFzLmN1cnJlbnQgPSBuZXcgZHJhd0xpcCgpO1xyXG4gICAgICBkcmF3Q2FudmFzLmN1cnJlbnQhLmluaXQoY2FudmFzLmN1cnJlbnQhLCB2aWRlby5jdXJyZW50ISk7XHJcbiAgICB9XHJcbiAgfSwgW2lzU2NhbkVuZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmlkZW8uY3VycmVudCEuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICB2aWRlby5jdXJyZW50IS5wbGF5KCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gc3RhdHMuY3VycmVudCA9IG5ldyBTdGF0cygpO1xyXG4gICAgICAgIC8vIHN0YXRzLmN1cnJlbnQhLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cclxuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmN1cnJlbnQhLmRvbSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmFjZUxhbmRtYXJrc0RldGVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgZmFjZUxhbmRtYXJrc0RldGVjdGlvbiA9IGF3YWl0IGltcG9ydCgnQHRlbnNvcmZsb3ctbW9kZWxzL2ZhY2UtbGFuZG1hcmtzLWRldGVjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5TdXBwb3J0ZWRNb2RlbHMuTWVkaWFQaXBlRmFjZU1lc2g7XHJcbiAgICAgICAgZGV0ZWN0b3IuY3VycmVudCA9IGF3YWl0IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uY3JlYXRlRGV0ZWN0b3IobW9kZWwsIHtcclxuICAgICAgICAgIHJ1bnRpbWU6ICdtZWRpYXBpcGUnLFxyXG4gICAgICAgICAgcmVmaW5lTGFuZG1hcmtzOiBmYWxzZSxcclxuICAgICAgICAgIHNvbHV0aW9uUGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQG1lZGlhcGlwZS9mYWNlX21lc2gnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRyYXdDYW52YXMuY3VycmVudCA9IG5ldyBkcmF3RmFjZUxpbmUoc2V0RXhwbGFpbiwgc2V0SXNDYWxjdWxhdGluZywgcm91dGVyKTtcclxuICAgICAgICBkcmF3Q2FudmFzLmN1cnJlbnQuaW5pdChjYW52YXMuY3VycmVudCEsIHZpZGVvLmN1cnJlbnQhKTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgYWxlcnQoJ2JlZm9yZSBkZXRlY3RlZCAnKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJRC5jdXJyZW50ISk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENhbnZhcyBpZD1cImNhbnZhc1wiIHJlZj17Y2FudmFzfSAvPlxyXG4gICAgICA8VmlkZW8gbXV0ZWQgcGxheXNJbmxpbmUgaWQ9XCJ2aWRlb1wiIHJlZj17dmlkZW99IC8+XHJcbiAgICAgIDxNb2RhbFBvcnRhbD5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2lzQ2FsY3VsYXRlZCAmJiAoXHJcbiAgICAgICAgICAgIDxNTF9Mb2FkaW5nIHRleHQ9XCLsnqDsi5zrp4wg6riw64uk66Ck7KO87IS47JqUXCIgdGl0bGU9XCLtjbzsiqTrhJDsu6zrn6zrpbwg7Lih7KCVIOykkeydtOyXkOyalCFcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8TUxfTG9hZGluZ1xyXG4gICAgICAgICAgICAgIHRleHQ9XCLquLDquLDsl5Ag65Sw6528IOy1nOuMgCAx67aEIOqwgOq5jOydtCDshozsmpTrkKAg7IiYIOyeiOyWtOyalFwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCLsnbjqs7Xsp4DriqXsnYQg67aI65+s7Jik64qUIOykkeydtOyXkOyalFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L01vZGFsUG9ydGFsPlxyXG4gICAgICA8Qm90dG9tV3JhcHBlciBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XHJcbiAgICAgICAgPFByb2dyZXNzQmFyIC8+XHJcbiAgICAgICAgPFdyYXBwZXIgaWQ9XCJ0ZXN0RXhwbGFpblwiPntleHBsYWlufTwvV3JhcHBlcj5cclxuICAgICAgPC9Cb3R0b21XcmFwcGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2FudmFzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
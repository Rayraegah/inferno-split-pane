(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoCompat = require('inferno-compat');

var _infernoCompat2 = _interopRequireDefault(_infernoCompat);

var _SplitPane = require('../lib/SplitPane');

var _SplitPane2 = _interopRequireDefault(_SplitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleNestedExample = function SimpleNestedExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { split: 'vertical', minSize: 50, maxSize: 300, defaultSize: 100, className: 'primary' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement(
            _SplitPane2.default,
            { split: 'horizontal' },
            _infernoCompat2.default.createElement('div', null),
            _infernoCompat2.default.createElement('div', null)
        )
    );
};

var BasicVerticalExample = function BasicVerticalExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { split: 'vertical' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement('div', null)
    );
};

var BasicHorizontalExample = function BasicHorizontalExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { split: 'horizontal' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement('div', null)
    );
};

var PercentageVerticalExample = function PercentageVerticalExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { defaultSize: '50%' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement('div', null)
    );
};

var PercentageHorizontalExample = function PercentageHorizontalExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { defaultSize: '50%', split: 'horizontal' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement('div', null)
    );
};

var VerticallyNestedInContainerExample = function VerticallyNestedInContainerExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { defaultSize: '40%', split: 'vertical' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement('div', null)
    );
};

var HorizontallyNestedInContainerExample = function HorizontallyNestedInContainerExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { defaultSize: '40%', split: 'horizontal' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement('div', null)
    );
};

var MultipleVerticalExample = function MultipleVerticalExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { split: 'vertical', defaultSize: '33%' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement(
            _SplitPane2.default,
            { split: 'vertical', defaultSize: '50%' },
            _infernoCompat2.default.createElement('div', null),
            _infernoCompat2.default.createElement('div', null)
        )
    );
};

var MultipleHorizontalExample = function MultipleHorizontalExample() {
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        { split: 'horizontal', defaultSize: '33%' },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement(
            _SplitPane2.default,
            { split: 'horizontal', defaultSize: '50%' },
            _infernoCompat2.default.createElement('div', null),
            _infernoCompat2.default.createElement('div', null)
        )
    );
};

var SubComponentExample = function SubComponentExample() {
    return _infernoCompat2.default.createElement(
        'div',
        { className: 'parent' },
        _infernoCompat2.default.createElement(
            'div',
            { className: 'header' },
            'Header'
        ),
        _infernoCompat2.default.createElement(
            'div',
            { className: 'wrapper' },
            _infernoCompat2.default.createElement(
                _SplitPane2.default,
                { split: 'horizontal', defaultSize: '50%' },
                _infernoCompat2.default.createElement('div', null),
                _infernoCompat2.default.createElement('div', null)
            )
        )
    );
};

var InlineStyleExample = function InlineStyleExample() {
    var styleA = { background: '#eee' };
    var styleB = { background: '#aaa4ba' };
    var styleC = { background: '#000' };
    var styleD = { padding: '2em', fontStyle: 'italic' };
    return _infernoCompat2.default.createElement(
        _SplitPane2.default,
        {
            split: 'vertical',
            minSize: 50, maxSize: 300, defaultSize: 100,
            className: 'primary',
            pane1Style: styleA,
            resizerStyle: styleC },
        _infernoCompat2.default.createElement('div', null),
        _infernoCompat2.default.createElement(
            _SplitPane2.default,
            { split: 'horizontal', paneStyle: styleD, pane2Style: styleB },
            _infernoCompat2.default.createElement(
                'div',
                null,
                'Hello...'
            ),
            _infernoCompat2.default.createElement(
                'div',
                null,
                ' ...world.'
            )
        )
    );
};

var SnapToPositionExample = function (_Component) {
    _inherits(SnapToPositionExample, _Component);

    function SnapToPositionExample(props) {
        _classCallCheck(this, SnapToPositionExample);

        var _this = _possibleConstructorReturn(this, (SnapToPositionExample.__proto__ || Object.getPrototypeOf(SnapToPositionExample)).call(this, props));

        _this.state = {
            size: undefined,
            dragging: false
        };
        _this.handleDragStart = _this.handleDragStart.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        return _this;
    }

    _createClass(SnapToPositionExample, [{
        key: 'handleDragStart',
        value: function handleDragStart() {
            this.setState({
                dragging: true
            });
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            var _this2 = this;

            this.setState({
                dragging: false
            });
            setTimeout(function () {
                _this2.setState({ size: undefined });
            }, 0);
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(width) {
            if (width >= 300 && width <= 400) {
                this.setState({ size: 300 });
            } else if (width > 400 && width <= 500) {
                this.setState({ size: 500 });
            } else {
                this.setState({ size: undefined });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var dropWarnStyle = {
                backgroundColor: 'yellow',
                left: 300,
                width: 200
            };
            var centeredTextStyle = {
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            };
            return _infernoCompat2.default.createElement(
                'div',
                { style: { height: '100%' } },
                _infernoCompat2.default.createElement(
                    _SplitPane2.default,
                    {
                        size: this.state.dragging ? undefined : this.state.size,
                        onChange: this.handleDrag,
                        onDragStarted: this.handleDragStart,
                        onDragFinished: this.handleDragEnd
                    },
                    _infernoCompat2.default.createElement('div', { style: { backgroundColor: 'blue', height: '100%', zIndex: 1, opacity: 0.1 } }),
                    _infernoCompat2.default.createElement('div', null)
                ),
                _infernoCompat2.default.createElement(
                    'div',
                    { style: _extends({}, centeredTextStyle, { left: 0, width: 300 }) },
                    'Can drop anywhere'
                ),
                _infernoCompat2.default.createElement(
                    'div',
                    { style: _extends({}, centeredTextStyle, dropWarnStyle) },
                    'Will snap to edges'
                ),
                _infernoCompat2.default.createElement(
                    'div',
                    { style: _extends({}, centeredTextStyle, { left: 500, width: 'calc(100% - 500px)' }) },
                    'Can drop anywhere'
                )
            );
        }
    }]);

    return SnapToPositionExample;
}(_infernoCompat.Component);

if (document.getElementById('simple-nested-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(SimpleNestedExample, null), document.getElementById('simple-nested-example'));
if (document.getElementById('basic-vertical-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(BasicVerticalExample, null), document.getElementById('basic-vertical-example'));
if (document.getElementById('basic-horizontal-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(BasicHorizontalExample, null), document.getElementById('basic-horizontal-example'));
if (document.getElementById('percentage-vertical-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(PercentageVerticalExample, null), document.getElementById('percentage-vertical-example'));
if (document.getElementById('percentage-horizontal-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(PercentageHorizontalExample, null), document.getElementById('percentage-horizontal-example'));
if (document.getElementById('vertically-nested-in-container-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(VerticallyNestedInContainerExample, null), document.getElementById('vertically-nested-in-container-example'));
if (document.getElementById('horizontally-nested-in-container-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(HorizontallyNestedInContainerExample, null), document.getElementById('horizontally-nested-in-container-example'));
if (document.getElementById('multiple-vertical-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(MultipleVerticalExample, null), document.getElementById('multiple-vertical-example'));
if (document.getElementById('multiple-horizontal-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(MultipleHorizontalExample, null), document.getElementById('multiple-horizontal-example'));
if (document.getElementById('subcomponent-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(SubComponentExample, null), document.getElementById('subcomponent-example'));
if (document.getElementById('inline-style-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(InlineStyleExample, null), document.getElementById('inline-style-example'));
if (document.getElementById('snap-to-position-example')) (0, _infernoCompat.render)(_infernoCompat2.default.createElement(SnapToPositionExample, null), document.getElementById('snap-to-position-example'));

},{"../lib/SplitPane":4,"inferno-compat":15}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _infernoCompat = require("inferno-compat");

var _infernoCompat2 = _interopRequireDefault(_infernoCompat);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require("react-style-proptype");

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Pane = function (_React$Component) {
    _inherits(Pane, _React$Component);

    function Pane(props) {
        _classCallCheck(this, Pane);

        var _this = _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).call(this, props));

        _this.state = { size: _this.props.size };
        return _this;
    }

    _createClass(Pane, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                prefixer = _props.prefixer,
                split = _props.split,
                styleProps = _props.style;
            var size = this.state.size;

            var classes = ['Pane', split, className];

            var style = _extends({}, styleProps || {}, {
                flex: 1,
                position: 'relative',
                outline: 'none'
            });

            if (size !== undefined) {
                if (split === 'vertical') {
                    style.width = size;
                } else {
                    style.height = size;
                    style.display = 'flex';
                }
                style.flex = 'none';
            }

            return _infernoCompat2.default.createElement('div', { className: classes.join(' '), style: prefixer.prefix(style) }, children);
        }
    }]);

    return Pane;
}(_infernoCompat2.default.Component);

Pane.propTypes = {
    className: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node.isRequired,
    prefixer: _propTypes2.default.instanceOf(_inlineStylePrefixer2.default).isRequired,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    split: _propTypes2.default.oneOf(['vertical', 'horizontal']),
    style: _reactStyleProptype2.default
};

Pane.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT })
};

exports.default = Pane;
module.exports = exports['default'];

},{"inferno-compat":15,"inline-style-prefixer":45,"prop-types":81,"react-style-proptype":84}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _infernoCompat = require("inferno-compat");

var _infernoCompat2 = _interopRequireDefault(_infernoCompat);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require("react-style-proptype");

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Resizer = function (_React$Component) {
    _inherits(Resizer, _React$Component);

    function Resizer() {
        _classCallCheck(this, Resizer);

        return _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).apply(this, arguments));
    }

    _createClass(Resizer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                _onClick = _props.onClick,
                _onDoubleClick = _props.onDoubleClick,
                _onMouseDown = _props.onMouseDown,
                _onTouchEnd = _props.onTouchEnd,
                _onTouchStart = _props.onTouchStart,
                prefixer = _props.prefixer,
                resizerClassName = _props.resizerClassName,
                split = _props.split,
                style = _props.style;

            var classes = [resizerClassName, split, className];

            return _infernoCompat2.default.createElement('span', {
                className: classes.join(' '),
                style: prefixer.prefix(style) || {},
                onMouseDown: function onMouseDown(event) {
                    return _onMouseDown(event);
                },
                onTouchStart: function onTouchStart(event) {
                    event.preventDefault();
                    _onTouchStart(event);
                },
                onTouchEnd: function onTouchEnd(event) {
                    event.preventDefault();
                    _onTouchEnd(event);
                },
                onClick: function onClick(event) {
                    if (_onClick) {
                        event.preventDefault();
                        _onClick(event);
                    }
                },
                onDoubleClick: function onDoubleClick(event) {
                    if (_onDoubleClick) {
                        event.preventDefault();
                        _onDoubleClick(event);
                    }
                }
            });
        }
    }]);

    return Resizer;
}(_infernoCompat2.default.Component);

Resizer.propTypes = {
    className: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func,
    onDoubleClick: _propTypes2.default.func,
    onMouseDown: _propTypes2.default.func.isRequired,
    onTouchStart: _propTypes2.default.func.isRequired,
    onTouchEnd: _propTypes2.default.func.isRequired,
    prefixer: _propTypes2.default.instanceOf(_inlineStylePrefixer2.default).isRequired,
    split: _propTypes2.default.oneOf(['vertical', 'horizontal']),
    style: _reactStyleProptype2.default,
    resizerClassName: _propTypes2.default.string.isRequired
};

Resizer.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    resizerClassName: 'Resizer'
};

exports.default = Resizer;
module.exports = exports['default'];

},{"inferno-compat":15,"inline-style-prefixer":45,"prop-types":81,"react-style-proptype":84}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _infernoCompat = require("inferno-compat");

var _infernoCompat2 = _interopRequireDefault(_infernoCompat);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require("react-style-proptype");

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

function unFocus(document, window) {
    if (document.selection) {
        document.selection.empty();
    } else {
        try {
            window.getSelection().removeAllRanges();
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}

var SplitPane = function (_React$Component) {
    _inherits(SplitPane, _React$Component);

    function SplitPane() {
        _classCallCheck(this, SplitPane);

        var _this = _possibleConstructorReturn(this, (SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).call(this));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);

        _this.state = {
            active: false,
            resized: false
        };
        return _this;
    }

    _createClass(SplitPane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setSize(this.props, this.state);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setSize(props, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchStart(eventWithTouches);
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
            var _props = this.props,
                allowResize = _props.allowResize,
                onDragStarted = _props.onDragStarted,
                split = _props.split;

            if (allowResize) {
                unFocus(document, window);
                var position = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                if (typeof onDragStarted === 'function') {
                    onDragStarted();
                }
                this.setState({
                    active: true,
                    position: position
                });
            }
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchMove(eventWithTouches);
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(event) {
            var _props2 = this.props,
                allowResize = _props2.allowResize,
                maxSize = _props2.maxSize,
                minSize = _props2.minSize,
                onChange = _props2.onChange,
                split = _props2.split;
            var _state = this.state,
                active = _state.active,
                position = _state.position;

            if (allowResize && active) {
                unFocus(document, window);
                var isPrimaryFirst = this.props.primary === 'first';
                var ref = isPrimaryFirst ? this.pane1 : this.pane2;
                if (ref) {
                    var node = _infernoCompat2.default.findDOMNode(ref);

                    if (node.getBoundingClientRect) {
                        var width = node.getBoundingClientRect().width;
                        var height = node.getBoundingClientRect().height;
                        var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                        var size = split === 'vertical' ? width : height;
                        var newPosition = isPrimaryFirst ? position - current : current - position;

                        var newMaxSize = maxSize;
                        if (maxSize !== undefined && maxSize <= 0) {
                            var splPane = this.splitPane;
                            if (split === 'vertical') {
                                newMaxSize = splPane.getBoundingClientRect().width + maxSize;
                            } else {
                                newMaxSize = splPane.getBoundingClientRect().height + maxSize;
                            }
                        }

                        var newSize = size - newPosition;

                        if (newSize < minSize) {
                            newSize = minSize;
                        } else if (maxSize !== undefined && newSize > newMaxSize) {
                            newSize = newMaxSize;
                        } else {
                            this.setState({
                                position: current,
                                resized: true
                            });
                        }

                        if (onChange) onChange(newSize);
                        this.setState({ draggedSize: newSize });
                        ref.setState({ size: newSize });
                    }
                }
            }
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            var _props3 = this.props,
                allowResize = _props3.allowResize,
                onDragFinished = _props3.onDragFinished;
            var _state2 = this.state,
                active = _state2.active,
                draggedSize = _state2.draggedSize;

            if (allowResize && active) {
                if (typeof onDragFinished === 'function') {
                    onDragFinished(draggedSize);
                }
                this.setState({ active: false });
            }
        }
    }, {
        key: 'setSize',
        value: function setSize(props, state) {
            var primary = this.props.primary;

            var ref = primary === 'first' ? this.pane1 : this.pane2;
            var newSize = void 0;
            if (ref) {
                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
                ref.setState({
                    size: newSize
                });
                if (props.size !== state.draggedSize) {
                    this.setState({
                        draggedSize: newSize
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props4 = this.props,
                allowResize = _props4.allowResize,
                children = _props4.children,
                className = _props4.className,
                defaultSize = _props4.defaultSize,
                minSize = _props4.minSize,
                onResizerClick = _props4.onResizerClick,
                onResizerDoubleClick = _props4.onResizerDoubleClick,
                paneStyle = _props4.paneStyle,
                pane1StyleProps = _props4.pane1Style,
                pane2StyleProps = _props4.pane2Style,
                primary = _props4.primary,
                prefixer = _props4.prefixer,
                resizerClassName = _props4.resizerClassName,
                resizerStyle = _props4.resizerStyle,
                size = _props4.size,
                split = _props4.split,
                styleProps = _props4.style;

            var disabledClass = allowResize ? '' : 'disabled';

            var style = _extends({}, styleProps || {}, {
                display: 'flex',
                flex: 1,
                height: '100%',
                position: 'absolute',
                outline: 'none',
                overflow: 'hidden',
                MozUserSelect: 'text',
                WebkitUserSelect: 'text',
                msUserSelect: 'text',
                userSelect: 'text'
            });

            if (split === 'vertical') {
                _extends(style, {
                    flexDirection: 'row',
                    left: 0,
                    right: 0
                });
            } else {
                _extends(style, {
                    bottom: 0,
                    flexDirection: 'column',
                    minHeight: '100%',
                    top: 0,
                    width: '100%'
                });
            }

            var classes = ['SplitPane', className, split, disabledClass];
            var pane1Style = prefixer.prefix(_extends({}, paneStyle || {}, pane1StyleProps || {}));
            var pane2Style = prefixer.prefix(_extends({}, paneStyle || {}, pane2StyleProps || {}));

            return _infernoCompat2.default.createElement('div', {
                className: classes.join(' '),
                ref: function ref(node) {
                    _this2.splitPane = node;
                },
                style: prefixer.prefix(style)
            }, _infernoCompat2.default.createElement(_Pane2.default, {
                className: 'Pane1',
                key: 'pane1',
                ref: function ref(node) {
                    _this2.pane1 = node;
                },
                size: primary === 'first' ? size || defaultSize || minSize : undefined,
                split: split,
                style: pane1Style
            }, children[0]), _infernoCompat2.default.createElement(_Resizer2.default, {
                className: disabledClass,
                onClick: onResizerClick,
                onDoubleClick: onResizerDoubleClick,
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                onTouchEnd: this.onMouseUp,
                key: 'resizer',
                ref: function ref(node) {
                    _this2.resizer = node;
                },
                resizerClassName: resizerClassName,
                split: split,
                style: resizerStyle || {}
            }), _infernoCompat2.default.createElement(_Pane2.default, {
                className: 'Pane2',
                key: 'pane2',
                ref: function ref(node) {
                    _this2.pane2 = node;
                },
                size: primary === 'second' ? size || defaultSize || minSize : undefined,
                split: split,
                style: pane2Style
            }, children[1]));
        }
    }]);

    return SplitPane;
}(_infernoCompat2.default.Component);

SplitPane.propTypes = {
    allowResize: _propTypes2.default.bool,
    children: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired,
    className: _propTypes2.default.string,
    primary: _propTypes2.default.oneOf(['first', 'second']),
    minSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    maxSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    // eslint-disable-next-line react/no-unused-prop-types
    defaultSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    split: _propTypes2.default.oneOf(['vertical', 'horizontal']),
    onDragStarted: _propTypes2.default.func,
    onDragFinished: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onResizerClick: _propTypes2.default.func,
    onResizerDoubleClick: _propTypes2.default.func,
    prefixer: _propTypes2.default.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    resizerStyle: _reactStyleProptype2.default,
    paneStyle: _reactStyleProptype2.default,
    pane1Style: _reactStyleProptype2.default,
    pane2Style: _reactStyleProptype2.default,
    resizerClassName: _propTypes2.default.string
};

SplitPane.defaultProps = {
    allowResize: true,
    minSize: 50,
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    primary: 'first',
    split: 'vertical'
};

exports.default = SplitPane;
module.exports = exports['default'];

},{"./Pane":2,"./Resizer":3,"inferno-compat":15,"inline-style-prefixer":45,"prop-types":81,"react-style-proptype":84}],5:[function(require,module,exports){
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(name, definition)
  else root[name] = definition()
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
      result.android = t
    } else if (!result.windowsphone && !result.msedge && iosdevice) {
      result[iosdevice] = t
      result.ios = t
    } else if (mac) {
      result.mac = t
    } else if (xbox) {
      result.xbox = t
    } else if (windows) {
      result.windows = t
    } else if (linux) {
      result.linux = t
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
},{"hyphenate-style-name":11}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;

var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
},{}],8:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],9:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))

},{"_process":77}],10:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
}).call(this,require('_process'))

},{"./emptyFunction":8,"_process":77}],11:[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * borrowed React SVGDOMPropertyConfig
 * @link https://github.com/facebook/react/blob/c78464f8ea9a5b00ec80252d20a71a1482210e57/src/renderers/dom/shared/SVGDOMPropertyConfig.js
 */
exports.default = {
    accentHeight: 'accent-height',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allowReorder',
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 'arabic-form',
    ascent: 0,
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 0,
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baseline-shift',
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 'calcMode',
    capHeight: 'cap-height',
    clip: 0,
    clipPath: 'clip-path',
    clipPathUnits: 'clipPathUnits',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 'diffuseConstant',
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 'dominant-baseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 'edgeMode',
    elevation: 0,
    enableBackground: 'enable-background',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 0,
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filter: 0,
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    focusable: 0,
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 0,
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    ideographic: 0,
    imageRendering: 'image-rendering',
    in: 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 0,
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limitingConeAngle',
    local: 0,
    markerEnd: 'marker-end',
    markerHeight: 'markerHeight',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 0,
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 0,
    mode: 0,
    numOctaves: 'numOctaves',
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointer-events',
    points: 0,
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 0,
    radius: 0,
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 'shape-rendering',
    slope: 0,
    spacing: 0,
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 0,
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 0,
    stemv: 0,
    stitchTiles: 'stitchTiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textLength: 'textLength',
    textRendering: 'text-rendering',
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicode: 0,
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    values: 0,
    vectorEffect: 'vector-effect',
    version: 0,
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 0,
    widths: 0,
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    x: 0,
    x1: 0,
    x2: 0,
    xChannelSelector: 'xChannelSelector',
    xHeight: 'x-height',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    // xmlns: 0,
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    xmlnsXlink: 'xmlns:xlink',
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 'yChannelSelector',
    z: 0,
    zoomAndPan: 'zoomAndPan'
};

},{}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_1 = require("inferno");
exports.cloneVNode = inferno_1.cloneVNode;
exports.createVNode = inferno_1.createVNode;
exports.EMPTY_OBJ = inferno_1.EMPTY_OBJ;
exports.findDOMNode = inferno_1.findDOMNode;
exports.render = inferno_1.render;
var inferno_component_1 = require("inferno-component");
exports.Component = inferno_component_1.default;
var inferno_create_class_1 = require("inferno-create-class");
exports.createClass = inferno_create_class_1.default;
var inferno_create_element_1 = require("inferno-create-element");
var inferno_shared_1 = require("inferno-shared");
exports.NO_OP = inferno_shared_1.NO_OP;
var isValidElement_1 = require("./isValidElement");
exports.isValidElement = isValidElement_1.default;
var SVGDOMPropertyConfig_1 = require("./SVGDOMPropertyConfig");
// Inlined PropTypes, there is propType checking ATM.
// tslint:disable-next-line:no-empty
function proptype() { }
proptype.isRequired = proptype;
var getProptype = function () { return proptype; };
var PropTypes = {
    any: getProptype,
    array: proptype,
    arrayOf: getProptype,
    bool: proptype,
    element: getProptype,
    func: proptype,
    instanceOf: getProptype,
    node: getProptype,
    number: proptype,
    object: proptype,
    objectOf: getProptype,
    oneOf: getProptype,
    oneOfType: getProptype,
    shape: getProptype,
    string: proptype,
    symbol: proptype
};
exports.PropTypes = PropTypes;
inferno_1.options.findDOMNodeEnabled = true;
function unmountComponentAtNode(container) {
    inferno_1.render(null, container);
    return true;
}
exports.unmountComponentAtNode = unmountComponentAtNode;
var ARR = [];
var Children = {
    map: function (children, fn, ctx) {
        if (inferno_shared_1.isNullOrUndef(children)) {
            return children;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
            fn = fn.bind(ctx);
        }
        return children.map(fn);
    },
    forEach: function (children, fn, ctx) {
        if (inferno_shared_1.isNullOrUndef(children)) {
            return;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
            fn = fn.bind(ctx);
        }
        for (var i = 0, len = children.length; i < len; i++) {
            fn(children[i], i, children);
        }
    },
    count: function (children) {
        children = Children.toArray(children);
        return children.length;
    },
    only: function (children) {
        children = Children.toArray(children);
        if (children.length !== 1) {
            throw new Error('Children.only() expects only one child.');
        }
        return children[0];
    },
    toArray: function (children) {
        if (inferno_shared_1.isNullOrUndef(children)) {
            return [];
        }
        return inferno_shared_1.isArray(children) ? children : ARR.concat(children);
    }
};
exports.Children = Children;
inferno_component_1.default.prototype.isReactComponent = {};
var currentComponent = null;
inferno_1.options.beforeRender = function (component) {
    currentComponent = component;
};
inferno_1.options.afterRender = function () {
    currentComponent = null;
};
var version = '15.4.2';
exports.version = version;
function normalizeProps(name, props) {
    if ((name === 'input' || name === 'textarea') && props.type !== 'radio' && props.onChange) {
        var type = props.type;
        var eventName = void 0;
        if (type === 'checkbox') {
            eventName = 'onclick';
        }
        else if (type === 'file') {
            eventName = 'onchange';
        }
        else {
            eventName = 'oninput';
        }
        if (!props[eventName]) {
            props[eventName] = props.onChange;
            delete props.onChange;
        }
    }
    for (var prop in props) {
        if (prop === 'onDoubleClick') {
            props.onDblClick = props[prop];
            delete props[prop];
        }
        if (prop === 'htmlFor') {
            props['for'] = props[prop];
            delete props[prop];
        }
        var mappedProp = SVGDOMPropertyConfig_1.default[prop];
        if (mappedProp && mappedProp !== prop) {
            props[mappedProp] = props[prop];
            delete props[prop];
        }
    }
}
// we need to add persist() to Event (as React has it for synthetic events)
// this is a hack and we really shouldn't be modifying a global object this way,
// but there isn't a performant way of doing this apart from trying to proxy
// every prop event that starts with "on", i.e. onClick or onKeyPress
// but in reality devs use onSomething for many things, not only for
// input events
if (typeof Event !== 'undefined' && !Event.prototype.persist) {
    // tslint:disable-next-line:no-empty
    Event.prototype.persist = function () { };
}
function iterableToArray(iterable) {
    var iterStep;
    var tmpArr = [];
    do {
        iterStep = iterable.next();
        if (iterStep.value) {
            tmpArr.push(iterStep.value);
        }
    } while (!iterStep.done);
    return tmpArr;
}
var hasSymbolSupport = typeof Symbol !== 'undefined';
var injectStringRefs = function (originalFunction) {
    return function (name, _props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var props = _props || {};
        var ref = props.ref;
        if (typeof ref === 'string' && !inferno_shared_1.isNull(currentComponent)) {
            currentComponent.refs = currentComponent.refs || {};
            props.ref = function (val) {
                this.refs[ref] = val;
            }.bind(currentComponent);
        }
        if (typeof name === 'string') {
            normalizeProps(name, props);
        }
        // React supports iterable children, in addition to Array-like
        if (hasSymbolSupport) {
            for (var i = 0, len = children.length; i < len; i++) {
                var child = children[i];
                if (child && !inferno_shared_1.isArray(child) && !inferno_shared_1.isString(child) && inferno_shared_1.isFunction(child[Symbol.iterator])) {
                    children[i] = iterableToArray(child[Symbol.iterator]());
                }
            }
        }
        return originalFunction.apply(void 0, [name, props].concat(children));
    };
};
var createElement = injectStringRefs(inferno_create_element_1.default);
exports.createElement = createElement;
var cloneElement = injectStringRefs(inferno_1.cloneVNode);
exports.cloneElement = cloneElement;
var oldCreateVNode = inferno_1.options.createVNode;
inferno_1.options.createVNode = function (vNode) {
    var children = vNode.children;
    var props = vNode.props;
    if (inferno_shared_1.isNullOrUndef(props)) {
        props = vNode.props = {};
    }
    if (!inferno_shared_1.isNullOrUndef(children) && inferno_shared_1.isNullOrUndef(props.children)) {
        props.children = children;
    }
    if (oldCreateVNode) {
        oldCreateVNode(vNode);
    }
};
// Credit: preact-compat - https://github.com/developit/preact-compat :)
function shallowDiffers(a, b) {
    for (var i in a) {
        if (!(i in b)) {
            return true;
        }
    }
    for (var i in b) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}
function PureComponent(props, context) {
    inferno_component_1.default.call(this, props, context);
}
exports.PureComponent = PureComponent;
PureComponent.prototype = new inferno_component_1.default({}, {});
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
var WrapperComponent = (function (_super) {
    __extends(WrapperComponent, _super);
    function WrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrapperComponent.prototype.getChildContext = function () {
        // tslint:disable-next-line
        return this.props['context'];
    };
    WrapperComponent.prototype.render = function (props) {
        return props.children;
    };
    return WrapperComponent;
}(inferno_component_1.default));
function unstable_renderSubtreeIntoContainer(parentComponent, vNode, container, callback) {
    var wrapperVNode = inferno_1.createVNode(4, WrapperComponent, null, null, {
        children: vNode,
        context: parentComponent.context
    });
    var component = inferno_1.render(wrapperVNode, container);
    if (callback) {
        // callback gets the component as context, no other argument.
        callback.call(component);
    }
    return component;
}
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;
// Credit: preact-compat - https://github.com/developit/preact-compat
var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');
function createFactory(type) {
    return createElement.bind(null, type);
}
exports.createFactory = createFactory;
var DOM = {};
exports.DOM = DOM;
for (var i = ELEMENTS.length; i--;) {
    DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}
// Mask React global in browser enviornments when React is not used.
if (inferno_shared_1.isBrowser && typeof window.React === 'undefined') {
    var exports_1 = {
        createVNode: inferno_1.createVNode,
        render: inferno_1.render,
        isValidElement: isValidElement_1.default,
        createElement: createElement,
        Component: inferno_component_1.default,
        PureComponent: PureComponent,
        unmountComponentAtNode: unmountComponentAtNode,
        cloneElement: cloneElement,
        PropTypes: PropTypes,
        createClass: inferno_create_class_1.default,
        findDOMNode: inferno_1.findDOMNode,
        Children: Children,
        cloneVNode: inferno_1.cloneVNode,
        NO_OP: inferno_shared_1.NO_OP,
        version: version,
        unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
        createFactory: createFactory,
        DOM: DOM,
        EMPTY_OBJ: inferno_1.EMPTY_OBJ
    };
    window.React = exports_1;
    window.ReactDOM = exports_1;
}
exports.default = {
    createVNode: inferno_1.createVNode,
    render: inferno_1.render,
    isValidElement: isValidElement_1.default,
    createElement: createElement,
    Component: inferno_component_1.default,
    PureComponent: PureComponent,
    unmountComponentAtNode: unmountComponentAtNode,
    cloneElement: cloneElement,
    PropTypes: PropTypes,
    createClass: inferno_create_class_1.default,
    findDOMNode: inferno_1.findDOMNode,
    Children: Children,
    cloneVNode: inferno_1.cloneVNode,
    NO_OP: inferno_shared_1.NO_OP,
    version: version,
    unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
    createFactory: createFactory,
    DOM: DOM,
    EMPTY_OBJ: inferno_1.EMPTY_OBJ
};

},{"./SVGDOMPropertyConfig":12,"./isValidElement":14,"inferno":42,"inferno-component":17,"inferno-create-class":19,"inferno-create-element":21,"inferno-shared":23}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
function isValidElement(obj) {
    var isNotANullObject = inferno_shared_1.isObject(obj) && inferno_shared_1.isNull(obj) === false;
    if (isNotANullObject === false) {
        return false;
    }
    var flags = obj.flags;
    return (flags & (28 /* Component */ | 3970 /* Element */)) > 0;
}
exports.default = isValidElement;

},{"inferno-shared":23}],15:[function(require,module,exports){
module.exports = require('./dist').default;
module.exports.default = module.exports;


},{"./dist":13}],16:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var inferno_1 = require("inferno");
var inferno_shared_1 = require("inferno-shared");
var noOp = inferno_shared_1.ERROR_MSG;
if (process.env.NODE_ENV !== 'production') {
    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
        var parentVNode = vNode.parentVNode;
        if (parentVNode) {
            parentVNode.dom = dom;
            updateParentComponentVNodes(parentVNode, dom);
        }
    }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            });
            component._updating = false;
        });
    }
    if (!inferno_shared_1.isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (inferno_shared_1.isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (pending === null) {
        component._pendingState = pending = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (inferno_shared_1.isBrowser && !component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        }
        else {
            addToQueue(component, false, callback);
        }
    }
    else {
        var state = component.state;
        if (state === null) {
            component.state = pending;
        }
        else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (!inferno_shared_1.isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = inferno_shared_1.combineFrom(prevState, pendingState);
        var props = component.props;
        var context_1 = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context_1, force, true);
        var didUpdate = true;
        if (inferno_shared_1.isInvalid(nextInput)) {
            nextInput = inferno_1.createVNode(4096 /* Void */, null);
        }
        else if (nextInput === inferno_shared_1.NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (inferno_shared_1.isStringOrNumber(nextInput)) {
            nextInput = inferno_1.createVNode(1 /* Text */, null, null, nextInput);
        }
        else if (inferno_shared_1.isArray(nextInput)) {
            if (process.env.NODE_ENV !== 'production') {
                inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            inferno_shared_1.throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext = void 0;
            if (!inferno_shared_1.isUndefined(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (inferno_shared_1.isNullOrUndef(childContext)) {
                childContext = component._childContext;
            }
            else {
                childContext = inferno_shared_1.combineFrom(context_1, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno_1.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!inferno_shared_1.isUndefined(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context_1);
            }
            if (!inferno_shared_1.isNull(inferno_1.options.afterUpdate)) {
                inferno_1.options.afterUpdate(vNode);
            }
        }
        var dom = vNode.dom = nextInput.dom;
        if (inferno_1.options.findDOMNodeEnabled) {
            inferno_1.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        updateParentComponentVNodes(vNode, dom);
    }
    else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!inferno_shared_1.isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var alreadyWarned = false;
var Component = (function () {
    function Component(props, context) {
        this.state = null;
        this._blockRender = false;
        this._blockSetState = true;
        this._pendingSetState = false;
        this._pendingState = null;
        this._lastInput = null;
        this._vNode = null;
        this._unmounted = false;
        this._lifecycle = null;
        this._childContext = null;
        this._isSVG = false;
        this._updating = true;
        /** @type {object} */
        this.props = props || inferno_1.EMPTY_OBJ;
        /** @type {object} */
        this.context = context || inferno_1.EMPTY_OBJ; // context should not be mutable
    }
    Component.prototype.forceUpdate = function (callback) {
        if (this._unmounted || !inferno_shared_1.isBrowser) {
            return;
        }
        applyState(this, true, callback);
    };
    Component.prototype.setState = function (newState, callback) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            queueStateChanges(this, newState, callback);
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                inferno_shared_1.throwError('cannot update state via setState() in componentWillUpdate() or constructor.');
            }
            inferno_shared_1.throwError();
        }
    };
    Component.prototype.setStateSync = function (newState) {
        if (process.env.NODE_ENV !== 'production') {
            if (!alreadyWarned) {
                alreadyWarned = true;
                console.warn('Inferno WARNING: setStateSync has been deprecated and will be removed in next release. Use setState instead.');
            }
        }
        this.setState(newState);
    };
    Component.prototype._updateComponent = function (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
        if (this._unmounted === true) {
            if (process.env.NODE_ENV !== 'production') {
                inferno_shared_1.throwError(noOp);
            }
            inferno_shared_1.throwError();
        }
        if ((prevProps !== nextProps || nextProps === inferno_1.EMPTY_OBJ) || prevState !== nextState || force) {
            if (prevProps !== nextProps || nextProps === inferno_1.EMPTY_OBJ) {
                if (!inferno_shared_1.isUndefined(this.componentWillReceiveProps) && !fromSetState) {
                    this._blockRender = true;
                    this.componentWillReceiveProps(nextProps, context);
                    this._blockRender = false;
                }
                if (this._pendingSetState) {
                    nextState = inferno_shared_1.combineFrom(nextState, this._pendingState);
                    this._pendingSetState = false;
                    this._pendingState = null;
                }
            }
            /* Update if scu is not defined, or it returns truthy value or force */
            if (inferno_shared_1.isUndefined(this.shouldComponentUpdate) || this.shouldComponentUpdate(nextProps, nextState, context) || force) {
                if (!inferno_shared_1.isUndefined(this.componentWillUpdate)) {
                    this._blockSetState = true;
                    this.componentWillUpdate(nextProps, nextState, context);
                    this._blockSetState = false;
                }
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
                if (inferno_1.options.beforeRender) {
                    inferno_1.options.beforeRender(this);
                }
                var render = this.render(nextProps, nextState, context);
                if (inferno_1.options.afterRender) {
                    inferno_1.options.afterRender(this);
                }
                return render;
            }
            else {
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
            }
        }
        return inferno_shared_1.NO_OP;
    };
    // tslint:disable-next-line:no-empty
    Component.prototype.render = function (nextProps, nextState, nextContext) { };
    return Component;
}());
exports.default = Component;

}).call(this,require('_process'))

},{"_process":77,"inferno":42,"inferno-shared":23}],17:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"./dist":16,"dup":15}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_component_1 = require("inferno-component");
var inferno_shared_1 = require("inferno-shared");
// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = new Set();
AUTOBIND_BLACKLIST.add('constructor');
AUTOBIND_BLACKLIST.add('render');
AUTOBIND_BLACKLIST.add('shouldComponentUpdate');
AUTOBIND_BLACKLIST.add('componentWillReceiveProps');
AUTOBIND_BLACKLIST.add('componentWillUpdate');
AUTOBIND_BLACKLIST.add('componentDidUpdate');
AUTOBIND_BLACKLIST.add('componentWillMount');
AUTOBIND_BLACKLIST.add('componentDidMount');
AUTOBIND_BLACKLIST.add('componentWillUnmount');
AUTOBIND_BLACKLIST.add('componentDidUnmount');
function extend(base, props) {
    for (var key in props) {
        if (!inferno_shared_1.isNullOrUndef(props[key])) {
            base[key] = props[key];
        }
    }
    return base;
}
function bindAll(ctx) {
    for (var i in ctx) {
        var v = ctx[i];
        if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.has(i)) {
            (ctx[i] = v.bind(ctx)).__bound = true;
        }
    }
}
function collateMixins(mixins, keyed) {
    if (keyed === void 0) { keyed = {}; }
    for (var i = 0, len = mixins.length; i < len; i++) {
        var mixin = mixins[i];
        // Surprise: Mixins can have mixins
        if (mixin.mixins) {
            // Recursively collate sub-mixins
            collateMixins(mixin.mixins, keyed);
        }
        for (var key in mixin) {
            if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
                (keyed[key] || (keyed[key] = [])).push(mixin[key]);
            }
        }
    }
    return keyed;
}
function multihook(hooks, mergeFn) {
    return function () {
        var ret;
        for (var i = 0, len = hooks.length; i < len; i++) {
            var hook = hooks[i];
            var r = hook.apply(this, arguments);
            if (mergeFn) {
                ret = mergeFn(ret, r);
            }
            else if (!inferno_shared_1.isUndefined(r)) {
                ret = r;
            }
        }
        return ret;
    };
}
function mergeNoDupes(previous, current) {
    if (!inferno_shared_1.isUndefined(current)) {
        if (!inferno_shared_1.isObject(current)) {
            inferno_shared_1.throwError('Expected Mixin to return value to be an object or null.');
        }
        if (!previous) {
            previous = {};
        }
        for (var key in current) {
            if (current.hasOwnProperty(key)) {
                if (previous.hasOwnProperty(key)) {
                    inferno_shared_1.throwError("Mixins return duplicate key " + key + " in their return values");
                }
                previous[key] = current[key];
            }
        }
    }
    return previous;
}
function applyMixin(key, inst, mixin) {
    var hooks = inferno_shared_1.isUndefined(inst[key]) ? mixin : mixin.concat(inst[key]);
    if (key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext') {
        inst[key] = multihook(hooks, mergeNoDupes);
    }
    else {
        inst[key] = multihook(hooks);
    }
}
function applyMixins(Cl, mixins) {
    for (var key in mixins) {
        if (mixins.hasOwnProperty(key)) {
            var mixin = mixins[key];
            var inst = void 0;
            if (key === 'getDefaultProps') {
                inst = Cl;
            }
            else {
                inst = Cl.prototype;
            }
            if (inferno_shared_1.isFunction(mixin[0])) {
                applyMixin(key, inst, mixin);
            }
            else {
                inst[key] = mixin;
            }
        }
    }
}
function createClass(obj) {
    var Cl = (function (_super) {
        __extends(Cl, _super);
        function Cl(props, context) {
            var _this = _super.call(this, props, context) || this;
            bindAll(_this);
            if (_this.getInitialState) {
                _this.state = _this.getInitialState();
            }
            return _this;
        }
        Cl.prototype.replaceState = function (nextState, callback) {
            this.setState(nextState, callback);
        };
        Cl.prototype.isMounted = function () {
            return !this._unmounted;
        };
        return Cl;
    }(inferno_component_1.default));
    Cl.displayName = obj.displayName || 'Component';
    Cl.propTypes = obj.propTypes;
    Cl.mixins = obj.mixins && collateMixins(obj.mixins);
    Cl.getDefaultProps = obj.getDefaultProps;
    extend(Cl.prototype, obj);
    if (obj.statics) {
        extend(Cl, obj.statics);
    }
    if (obj.mixins) {
        applyMixins(Cl, collateMixins(obj.mixins));
    }
    Cl.defaultProps = inferno_shared_1.isUndefined(Cl.getDefaultProps) ? undefined : Cl.getDefaultProps();
    return Cl;
}
exports.default = createClass;

},{"inferno-component":17,"inferno-shared":23}],19:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"./dist":18,"dup":15}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_1 = require("inferno");
var inferno_shared_1 = require("inferno-shared");
var componentHooks = new Set();
componentHooks.add('onComponentWillMount');
componentHooks.add('onComponentDidMount');
componentHooks.add('onComponentWillUnmount');
componentHooks.add('onComponentShouldUpdate');
componentHooks.add('onComponentWillUpdate');
componentHooks.add('onComponentDidUpdate');
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _children[_i - 2] = arguments[_i];
    }
    if (inferno_shared_1.isInvalid(type) || inferno_shared_1.isObject(type)) {
        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    var children = _children;
    var ref = null;
    var key = null;
    var className = null;
    var flags = 0;
    var newProps;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (inferno_shared_1.isString(type)) {
        flags = inferno_1.getFlagsForElementVnode(type);
        if (!inferno_shared_1.isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === 'className' || prop === 'class') {
                    className = props[prop];
                }
                else if (prop === 'key') {
                    key = props.key;
                }
                else if (prop === 'children' && inferno_shared_1.isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (prop === 'ref') {
                    ref = props.ref;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    else {
        flags = 16 /* ComponentUnknown */;
        if (!inferno_shared_1.isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!inferno_shared_1.isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (componentHooks.has(prop)) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop] = props[prop];
                }
                else if (prop === 'key') {
                    key = props.key;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    return inferno_1.createVNode(flags, type, className, children, newProps, key, ref);
}
exports.default = createElement;

},{"inferno":42,"inferno-shared":23}],21:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"./dist":20,"dup":15}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_OP = '$NO_OP';
exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
exports.isBrowser = !!(typeof window !== 'undefined' && window.document);
function toArray(children) {
    return exports.isArray(children) ? children : (children ? [children] : children);
}
exports.toArray = toArray;
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
exports.isStatefulComponent = isStatefulComponent;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
exports.isStringOrNumber = isStringOrNumber;
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
exports.isNullOrUndef = isNullOrUndef;
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
exports.isInvalid = isInvalid;
function isFunction(o) {
    return typeof o === 'function';
}
exports.isFunction = isFunction;
function isString(o) {
    return typeof o === 'string';
}
exports.isString = isString;
function isNumber(o) {
    return typeof o === 'number';
}
exports.isNumber = isNumber;
function isNull(o) {
    return o === null;
}
exports.isNull = isNull;
function isTrue(o) {
    return o === true;
}
exports.isTrue = isTrue;
function isUndefined(o) {
    return o === void 0;
}
exports.isUndefined = isUndefined;
function isObject(o) {
    return typeof o === 'object';
}
exports.isObject = isObject;
function throwError(message) {
    if (!message) {
        message = exports.ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
exports.throwError = throwError;
function warning(message) {
    console.warn(message);
}
exports.warning = warning;
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key in second) {
            out[key] = second[key];
        }
    }
    return out;
}
exports.combineFrom = combineFrom;
function Lifecycle() {
    this.listeners = [];
}
exports.Lifecycle = Lifecycle;
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};

},{}],23:[function(require,module,exports){
module.exports = require('./dist');
module.exports.default = module.exports;


},{"./dist":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xlinkNS = 'http://www.w3.org/1999/xlink';
exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
exports.svgNS = 'http://www.w3.org/2000/svg';
exports.strictProps = new Set();
exports.strictProps.add('volume');
exports.strictProps.add('defaultChecked');
exports.booleanProps = new Set();
exports.booleanProps.add('muted');
exports.booleanProps.add('scoped');
exports.booleanProps.add('loop');
exports.booleanProps.add('open');
exports.booleanProps.add('checked');
exports.booleanProps.add('default');
exports.booleanProps.add('capture');
exports.booleanProps.add('disabled');
exports.booleanProps.add('readOnly');
exports.booleanProps.add('required');
exports.booleanProps.add('autoplay');
exports.booleanProps.add('controls');
exports.booleanProps.add('seamless');
exports.booleanProps.add('reversed');
exports.booleanProps.add('allowfullscreen');
exports.booleanProps.add('novalidate');
exports.booleanProps.add('hidden');
exports.booleanProps.add('autoFocus');
exports.namespaces = new Map();
exports.namespaces.set('xlink:href', exports.xlinkNS);
exports.namespaces.set('xlink:arcrole', exports.xlinkNS);
exports.namespaces.set('xlink:actuate', exports.xlinkNS);
exports.namespaces.set('xlink:show', exports.xlinkNS);
exports.namespaces.set('xlink:role', exports.xlinkNS);
exports.namespaces.set('xlink:title', exports.xlinkNS);
exports.namespaces.set('xlink:type', exports.xlinkNS);
exports.namespaces.set('xml:base', exports.xmlNS);
exports.namespaces.set('xml:lang', exports.xmlNS);
exports.namespaces.set('xml:space', exports.xmlNS);
exports.isUnitlessNumber = new Set();
exports.isUnitlessNumber.add('animationIterationCount');
exports.isUnitlessNumber.add('borderImageOutset');
exports.isUnitlessNumber.add('borderImageSlice');
exports.isUnitlessNumber.add('borderImageWidth');
exports.isUnitlessNumber.add('boxFlex');
exports.isUnitlessNumber.add('boxFlexGroup');
exports.isUnitlessNumber.add('boxOrdinalGroup');
exports.isUnitlessNumber.add('columnCount');
exports.isUnitlessNumber.add('flex');
exports.isUnitlessNumber.add('flexGrow');
exports.isUnitlessNumber.add('flexPositive');
exports.isUnitlessNumber.add('flexShrink');
exports.isUnitlessNumber.add('flexNegative');
exports.isUnitlessNumber.add('flexOrder');
exports.isUnitlessNumber.add('gridRow');
exports.isUnitlessNumber.add('gridColumn');
exports.isUnitlessNumber.add('fontWeight');
exports.isUnitlessNumber.add('lineClamp');
exports.isUnitlessNumber.add('lineHeight');
exports.isUnitlessNumber.add('opacity');
exports.isUnitlessNumber.add('order');
exports.isUnitlessNumber.add('orphans');
exports.isUnitlessNumber.add('tabSize');
exports.isUnitlessNumber.add('widows');
exports.isUnitlessNumber.add('zIndex');
exports.isUnitlessNumber.add('zoom');
exports.isUnitlessNumber.add('fillOpacity');
exports.isUnitlessNumber.add('floodOpacity');
exports.isUnitlessNumber.add('stopOpacity');
exports.isUnitlessNumber.add('strokeDasharray');
exports.isUnitlessNumber.add('strokeDashoffset');
exports.isUnitlessNumber.add('strokeMiterlimit');
exports.isUnitlessNumber.add('strokeOpacity');
exports.isUnitlessNumber.add('strokeWidth');
exports.skipProps = new Set();
exports.skipProps.add('children');
exports.skipProps.add('childrenType');
exports.skipProps.add('defaultValue');
exports.skipProps.add('ref');
exports.skipProps.add('key');
exports.skipProps.add('selected');
exports.skipProps.add('checked');
exports.skipProps.add('multiple');
exports.delegatedEvents = new Set();
exports.delegatedEvents.add('onClick');
exports.delegatedEvents.add('onMouseDown');
exports.delegatedEvents.add('onMouseUp');
exports.delegatedEvents.add('onMouseMove');
exports.delegatedEvents.add('onSubmit');
exports.delegatedEvents.add('onDblClick');
exports.delegatedEvents.add('onKeyDown');
exports.delegatedEvents.add('onKeyUp');
exports.delegatedEvents.add('onKeyPress');

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var isiOS = inferno_shared_1.isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents.delete(name);
            }
        }
    }
}
exports.handleEvent = handleEvent;
function dispatchEvent(event, target, items, count, isClick, eventData) {
    var eventsToTrigger = items.get(target);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = target;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        }
        else {
            eventsToTrigger(event);
        }
        if (event.cancelBubble) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = target.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (parentDom === null || (isClick && parentDom.nodeType === 1 && parentDom.disabled)) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, isClick, eventData);
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function (event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData_1 = {
                dom: document
            };
            try {
                Object.defineProperty(event, 'currentTarget', {
                    configurable: true,
                    get: function get() {
                        return eventData_1.dom;
                    }
                });
            }
            catch (e) { }
            dispatchEvent(event, event.target, delegatedRoots.items, count, event.type === 'click', eventData_1);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() { }
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

},{"inferno-shared":23}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    return { data: data, event: event };
}
exports.linkEvent = linkEvent;

},{}],27:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var options_1 = require("../core/options");
var constants_1 = require("./constants");
var mounting_1 = require("./mounting");
var patching_1 = require("./patching");
var rendering_1 = require("./rendering");
var utils_1 = require("./utils");
var processElement_1 = require("./wrappers/processElement");
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                var placeholder = document.createTextNode('');
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            }
            else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        }
        else {
            dom = dom.nextSibling;
        }
    }
}
exports.normalizeChildNodes = normalizeChildNodes;
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    vNode.dom = dom;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === constants_1.svgNS;
        var instance = utils_1.createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vComponent = vNode;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        mounting_1.mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options_1.options.findDOMNodeEnabled) {
            rendering_1.componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input = utils_1.createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input, dom, lifecycle, context, isSVG);
        vNode.children = input;
        vNode.dom = input.dom;
        mounting_1.mountFunctionalComponentCallbacks(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.warning('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
        }
        var newDom = mounting_1.mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        utils_1.replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = processElement_1.isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patching_1.patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement_1.processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (inferno_shared_1.isNullOrUndef(className)) {
        dom.removeAttribute('class');
    }
    else {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (ref) {
        mounting_1.mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (inferno_shared_1.isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!inferno_shared_1.isNull(child) && inferno_shared_1.isObject(child)) {
                if (!inferno_shared_1.isNull(dom)) {
                    dom = hydrate(child, dom, lifecycle, context, isSVG).nextSibling;
                }
                else {
                    mounting_1.mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else if (inferno_shared_1.isStringOrNumber(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    }
    else if (inferno_shared_1.isObject(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mounting_1.mountText(vNode, null);
        vNode.dom = newDom;
        utils_1.replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        return hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 3970 /* Element */) {
        return hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        return hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        return hydrateVoid(vNode, dom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + typeof vNode + "\".");
        }
        inferno_shared_1.throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!inferno_shared_1.isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!inferno_shared_1.isNull(dom)) {
            hydrate(input, dom, lifecycle, utils_1.EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}
exports.hydrateRoot = hydrateRoot;

}).call(this,require('_process'))

},{"../core/options":40,"./constants":24,"./mounting":28,"./patching":29,"./rendering":31,"./utils":33,"./wrappers/processElement":37,"_process":77,"inferno-shared":23}],28:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var options_1 = require("../core/options");
var VNodes_1 = require("../core/VNodes");
var patching_1 = require("./patching");
var recycling_1 = require("./recycling");
var rendering_1 = require("./rendering");
var utils_1 = require("./utils");
var processElement_1 = require("./wrappers/processElement");
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof vNode === 'object') {
                inferno_shared_1.throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
            }
            else {
                inferno_shared_1.throwError("mount() expects a valid VNode, instead it received an object with the type \"" + typeof vNode + "\".");
            }
        }
        inferno_shared_1.throwError();
    }
}
exports.mount = mount;
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountText = mountText;
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode('');
    vNode.dom = dom;
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountVoid = mountVoid;
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (options_1.options.recyclingEnabled) {
        var dom_1 = recycling_1.recycleElement(vNode, lifecycle, context, isSVG);
        if (!inferno_shared_1.isNull(dom_1)) {
            if (!inferno_shared_1.isNull(parentDom)) {
                utils_1.appendChild(parentDom, dom_1);
            }
            return dom_1;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    var dom = utils_1.documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!inferno_shared_1.isInvalid(children)) {
        if (inferno_shared_1.isStringOrNumber(children)) {
            utils_1.setTextContent(dom, children);
        }
        else if (inferno_shared_1.isArray(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        }
        else if (VNodes_1.isVNode(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    if (!inferno_shared_1.isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = processElement_1.isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patching_1.patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement_1.processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!inferno_shared_1.isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountElement = mountElement;
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!inferno_shared_1.isInvalid(child)) {
            if (child.dom) {
                children[i] = child = VNodes_1.directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
exports.mountArrayChildren = mountArrayChildren;
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (options_1.options.recyclingEnabled) {
        var dom_2 = recycling_1.recycleComponent(vNode, lifecycle, context, isSVG);
        if (!inferno_shared_1.isNull(dom_2)) {
            if (!inferno_shared_1.isNull(parentDom)) {
                utils_1.appendChild(parentDom, dom_2);
            }
            return dom_2;
        }
    }
    var type = vNode.type;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var ref = vNode.ref;
    var dom;
    if (isClass) {
        var instance = utils_1.createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!inferno_shared_1.isNull(parentDom)) {
            utils_1.appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options_1.options.findDOMNodeEnabled) {
            rendering_1.componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input = utils_1.createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input, null, lifecycle, context, isSVG);
        vNode.children = input;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!inferno_shared_1.isNull(parentDom)) {
            utils_1.appendChild(parentDom, dom);
        }
    }
    return dom;
}
exports.mountComponent = mountComponent;
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (inferno_shared_1.isFunction(ref)) {
            ref(instance);
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                if (inferno_shared_1.isStringOrNumber(ref)) {
                    inferno_shared_1.throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                }
                else if (inferno_shared_1.isObject(ref) && (vNode.flags & 4 /* ComponentClass */)) {
                    inferno_shared_1.throwError('functional component lifecycle events are not supported on ES2015 class components.');
                }
                else {
                    inferno_shared_1.throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                }
            }
            inferno_shared_1.throwError();
        }
    }
    var hasDidMount = !inferno_shared_1.isUndefined(instance.componentDidMount);
    var afterMount = options_1.options.afterMount;
    if (hasDidMount || !inferno_shared_1.isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
exports.mountClassComponentCallbacks = mountClassComponentCallbacks;
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!inferno_shared_1.isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!inferno_shared_1.isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () { return ref.onComponentDidMount(dom); });
        }
    }
}
exports.mountFunctionalComponentCallbacks = mountFunctionalComponentCallbacks;
function mountRef(dom, value, lifecycle) {
    if (inferno_shared_1.isFunction(value)) {
        lifecycle.addListener(function () { return value(dom); });
    }
    else {
        if (inferno_shared_1.isInvalid(value)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        inferno_shared_1.throwError();
    }
}
exports.mountRef = mountRef;

}).call(this,require('_process'))

},{"../core/VNodes":38,"../core/options":40,"./patching":29,"./recycling":30,"./rendering":31,"./utils":33,"./wrappers/processElement":37,"_process":77,"inferno-shared":23}],29:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var options_1 = require("../core/options");
var VNodes_1 = require("../core/VNodes");
var constants_1 = require("./constants");
var delegation_1 = require("./events/delegation");
var mounting_1 = require("./mounting");
var rendering_1 = require("./rendering");
var unmounting_1 = require("./unmounting");
var utils_1 = require("./utils");
var processElement_1 = require("./wrappers/processElement");
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextFlags & 4 /* ComponentClass */) > 0), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            utils_1.replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
exports.patch = patch;
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (VNodes_1.isVNode(children)) {
        unmounting_1.unmount(children, dom, lifecycle, true, isRecycling);
    }
    else if (inferno_shared_1.isArray(children)) {
        utils_1.removeAllChildren(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        utils_1.replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    }
    else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || utils_1.EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || utils_1.EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== utils_1.EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = processElement_1.isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    processElement_1.processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== utils_1.EMPTY_OBJ) {
                for (var prop in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (inferno_shared_1.isNullOrUndef(nextPropsOrEmpty[prop])) {
                        removeProp(prop, lastPropsOrEmpty[prop], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (inferno_shared_1.isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else {
                if (isSVG) {
                    dom.setAttribute('class', nextClassName);
                }
                else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mounting_1.mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
exports.patchElement = patchElement;
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 && (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (inferno_shared_1.isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (inferno_shared_1.isInvalid(lastChildren)) {
        if (inferno_shared_1.isStringOrNumber(nextChildren)) {
            utils_1.setTextContent(dom, nextChildren);
        }
        else {
            if (inferno_shared_1.isArray(nextChildren)) {
                mounting_1.mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                mounting_1.mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (inferno_shared_1.isStringOrNumber(nextChildren)) {
        if (inferno_shared_1.isStringOrNumber(lastChildren)) {
            utils_1.updateTextContent(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            utils_1.setTextContent(dom, nextChildren);
        }
    }
    else if (inferno_shared_1.isArray(nextChildren)) {
        if (inferno_shared_1.isArray(lastChildren)) {
            patchArray = true;
            if (utils_1.isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mounting_1.mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (inferno_shared_1.isArray(lastChildren)) {
        utils_1.removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mounting_1.mount(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (VNodes_1.isVNode(nextChildren)) {
        if (VNodes_1.isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mounting_1.mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        utils_1.replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    }
    else {
        var nextProps = nextVNode.props || utils_1.EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (inferno_shared_1.isNull(parentDom)) {
                    return true;
                }
                utils_1.replaceChild(parentDom, mounting_1.mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            }
            else {
                var hasComponentDidUpdate = !inferno_shared_1.isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate ? inferno_shared_1.combineFrom(nextState, null) : nextState;
                var lastProps = instance.props;
                var childContext = void 0;
                if (!inferno_shared_1.isUndefined(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (inferno_shared_1.isNullOrUndef(childContext)) {
                    childContext = context;
                }
                else {
                    childContext = inferno_shared_1.combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (inferno_shared_1.isInvalid(nextInput)) {
                    nextInput = VNodes_1.createVoidVNode();
                }
                else if (nextInput === inferno_shared_1.NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                }
                else if (inferno_shared_1.isStringOrNumber(nextInput)) {
                    nextInput = VNodes_1.createTextVNode(nextInput, null);
                }
                else if (inferno_shared_1.isArray(nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    inferno_shared_1.throwError();
                }
                else if (inferno_shared_1.isObject(nextInput)) {
                    if (!inferno_shared_1.isNull(nextInput.dom)) {
                        nextInput = VNodes_1.directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                    nextInput.parentVNode = nextVNode;
                }
                else if (lastInput.flags & 28 /* Component */) {
                    lastInput.parentVNode = nextVNode;
                }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!inferno_shared_1.isNull(options_1.options.afterUpdate)) {
                        options_1.options.afterUpdate(nextVNode);
                    }
                    if (options_1.options.findDOMNodeEnabled) {
                        rendering_1.componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !inferno_shared_1.isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            var nextInput = lastInput;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined && !inferno_shared_1.isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !inferno_shared_1.isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                nextInput = nextType(nextProps, context);
                if (inferno_shared_1.isInvalid(nextInput)) {
                    nextInput = VNodes_1.createVoidVNode();
                }
                else if (inferno_shared_1.isStringOrNumber(nextInput) && nextInput !== inferno_shared_1.NO_OP) {
                    nextInput = VNodes_1.createTextVNode(nextInput, null);
                }
                else if (inferno_shared_1.isArray(nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    inferno_shared_1.throwError();
                }
                else if (inferno_shared_1.isObject(nextInput)) {
                    if (!inferno_shared_1.isNull(nextInput.dom)) {
                        nextInput = VNodes_1.directClone(nextInput);
                    }
                }
                if (nextInput !== inferno_shared_1.NO_OP) {
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput;
                    if (nextHooksDefined && !inferno_shared_1.isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                    nextVNode.dom = nextInput.dom;
                }
            }
            if (nextInput.flags & 28 /* Component */) {
                nextInput.parentVNode = nextVNode;
            }
            else if (lastInput.flags & 28 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
exports.patchComponent = patchComponent;
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
exports.patchText = patchText;
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
exports.patchVoid = patchVoid;
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = VNodes_1.directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild = nextChildren[i];
            if (nextChild.dom) {
                nextChild = nextChildren[i] = VNodes_1.directClone(nextChild);
            }
            utils_1.appendChild(dom, mounting_1.mount(nextChild, null, lifecycle, context, isSVG));
        }
    }
    else if (nextChildrenLength === 0) {
        utils_1.removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmounting_1.unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
exports.patchNonKeyedChildren = patchNonKeyedChildren;
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    if (aLength === 0) {
        if (bLength > 0) {
            mounting_1.mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    }
    else if (bLength === 0) {
        utils_1.removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = VNodes_1.directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = VNodes_1.directClone(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = VNodes_1.directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = VNodes_1.directClone(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            utils_1.insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = VNodes_1.directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            utils_1.insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = VNodes_1.directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = VNodes_1.directClone(node);
                }
                bStart++;
                utils_1.insertOrAppend(dom, mounting_1.mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmounting_1.unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if ((bLength <= 4) || (aLength * bLength <= 16)) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = VNodes_1.directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!inferno_shared_1.isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = VNodes_1.directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            utils_1.removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = VNodes_1.directClone(node);
                }
                bStart++;
                utils_1.insertOrAppend(dom, mounting_1.mount(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!inferno_shared_1.isNull(aNode)) {
                    unmounting_1.unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = VNodes_1.directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        utils_1.insertOrAppend(dom, mounting_1.mount(node, dom, lifecycle, context, isSVG), nextNode);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            utils_1.insertOrAppend(dom, node.dom, nextNode);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = VNodes_1.directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        utils_1.insertOrAppend(dom, mounting_1.mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
exports.patchKeyedChildren = patchKeyedChildren;
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = ((u + v) / 2) | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            }
            else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n';
}
exports.isAttrAnEvent = isAttrAnEvent;
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (constants_1.skipProps.has(prop) || (hasControlledValue && prop === 'value')) {
            return;
        }
        else if (constants_1.booleanProps.has(prop)) {
            prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        }
        else if (constants_1.strictProps.has(prop)) {
            var value = inferno_shared_1.isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        }
        else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (inferno_shared_1.isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!inferno_shared_1.isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && constants_1.namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(constants_1.namespaces.get(prop), prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
exports.patchProp = patchProp;
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (constants_1.delegatedEvents.has(name)) {
            delegation_1.handleEvent(name, lastValue, nextValue, dom);
        }
        else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!inferno_shared_1.isFunction(nextValue) && !inferno_shared_1.isNullOrUndef(nextValue)) {
                var linkEvent_1 = nextValue.event;
                if (linkEvent_1 && inferno_shared_1.isFunction(linkEvent_1)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent_1(nextValue.data, e);
                    };
                }
                else {
                    if (process.env.NODE_ENV !== 'production') {
                        inferno_shared_1.throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                    }
                    inferno_shared_1.throwError();
                }
            }
            else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
exports.patchEvent = patchEvent;
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    if (inferno_shared_1.isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    for (var style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        var value = nextAttrValue[style];
        if (!inferno_shared_1.isNumber(value) || constants_1.isUnitlessNumber.has(style)) {
            domStyle[style] = value;
        }
        else {
            domStyle[style] = value + 'px';
        }
    }
    if (!inferno_shared_1.isNullOrUndef(lastAttrValue)) {
        for (var style in lastAttrValue) {
            if (inferno_shared_1.isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
}
exports.patchStyle = patchStyle;
function removeProp(prop, lastValue, dom) {
    if (prop === 'value') {
        dom.value = '';
    }
    else if (prop === 'style') {
        dom.removeAttribute('style');
    }
    else if (isAttrAnEvent(prop)) {
        delegation_1.handleEvent(prop, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}

}).call(this,require('_process'))

},{"../core/VNodes":38,"../core/options":40,"./constants":24,"./events/delegation":25,"./mounting":28,"./rendering":31,"./unmounting":32,"./utils":33,"./wrappers/processElement":37,"_process":77,"inferno-shared":23}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var patching_1 = require("./patching");
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!inferno_shared_1.isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!inferno_shared_1.isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!inferno_shared_1.isUndefined(recycledVNode)) {
                patching_1.patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
exports.recycleElement = recycleElement;
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (inferno_shared_1.isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (inferno_shared_1.isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (inferno_shared_1.isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
exports.poolElement = poolElement;
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!inferno_shared_1.isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!inferno_shared_1.isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!inferno_shared_1.isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patching_1.patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
exports.recycleComponent = recycleComponent;
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
        hooks.onComponentWillUnmount ||
        hooks.onComponentDidMount ||
        hooks.onComponentWillUpdate ||
        hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (inferno_shared_1.isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (inferno_shared_1.isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (inferno_shared_1.isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
exports.poolComponent = poolComponent;

},{"./patching":29,"inferno-shared":23}],31:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var options_1 = require("../core/options");
var VNodes_1 = require("../core/VNodes");
var hydration_1 = require("./hydration");
var mounting_1 = require("./mounting");
var patching_1 = require("./patching");
var unmounting_1 = require("./unmounting");
var utils_1 = require("./utils");
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
exports.componentToDOMNodeMap = new Map();
var roots = options_1.options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options_1.options.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
        }
        inferno_shared_1.throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return exports.componentToDOMNodeMap.get(ref) || dom;
}
exports.findDOMNode = findDOMNode;
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== 'production') {
    if (inferno_shared_1.isBrowser && document.body === null) {
        inferno_shared_1.warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = inferno_shared_1.isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        inferno_shared_1.throwError();
    }
    if (input === inferno_shared_1.NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (inferno_shared_1.isNull(root)) {
        var lifecycle = new inferno_shared_1.Lifecycle();
        if (!inferno_shared_1.isInvalid(input)) {
            if (input.dom) {
                input = VNodes_1.directClone(input);
            }
            if (!hydration_1.hydrateRoot(input, parentDom, lifecycle)) {
                mounting_1.mount(input, parentDom, lifecycle, utils_1.EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        var lifecycle = root.lifecycle;
        lifecycle.listeners = [];
        if (inferno_shared_1.isNullOrUndef(input)) {
            unmounting_1.unmount(root.input, parentDom, lifecycle, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = VNodes_1.directClone(input);
            }
            patching_1.patch(root.input, input, parentDom, lifecycle, utils_1.EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && (rootInput.flags & 28 /* Component */)) {
            return rootInput.children;
        }
    }
}
exports.render = render;
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
exports.createRenderer = createRenderer;

}).call(this,require('_process'))

},{"../core/VNodes":38,"../core/options":40,"./hydration":27,"./mounting":28,"./patching":29,"./unmounting":32,"./utils":33,"_process":77,"inferno-shared":23}],32:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var options_1 = require("../core/options");
var patching_1 = require("./patching");
var recycling_1 = require("./recycling");
var rendering_1 = require("./rendering");
var utils_1 = require("./utils");
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & 3970 /* Element */) {
        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
exports.unmount = unmount;
function unmountVoidOrText(vNode, parentDom) {
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.removeChild(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent = flags & 4 /* ComponentClass */;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent) {
            if (!instance._unmounted) {
                instance._blockSetState = true;
                if (!inferno_shared_1.isNull(options_1.options.beforeUnmount)) {
                    options_1.options.beforeUnmount(vNode);
                }
                if (!inferno_shared_1.isUndefined(instance.componentWillUnmount)) {
                    instance.componentWillUnmount();
                }
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                if (options_1.options.findDOMNodeEnabled) {
                    rendering_1.componentToDOMNodeMap.delete(instance);
                }
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        }
        else {
            if (!inferno_shared_1.isNullOrUndef(ref)) {
                if (!inferno_shared_1.isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if (inferno_shared_1.isNullOrUndef(lastInput)) {
            lastInput = instance;
        }
        utils_1.removeChild(parentDom, dom);
    }
    if (options_1.options.recyclingEnabled && !isStatefulComponent && (parentDom || canRecycle)) {
        recycling_1.poolComponent(vNode);
    }
}
exports.unmountComponent = unmountComponent;
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!inferno_shared_1.isNullOrUndef(children)) {
        unmountChildren(children, lifecycle, isRecycling);
    }
    if (!inferno_shared_1.isNull(props)) {
        for (var name_1 in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name_1] !== null && patching_1.isAttrAnEvent(name_1)) {
                patching_1.patchEvent(name_1, props[name_1], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name_1] = null;
            }
        }
    }
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.removeChild(parentDom, dom);
    }
    if (options_1.options.recyclingEnabled && (parentDom || canRecycle)) {
        recycling_1.poolElement(vNode);
    }
}
exports.unmountElement = unmountElement;
function unmountChildren(children, lifecycle, isRecycling) {
    if (inferno_shared_1.isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!inferno_shared_1.isInvalid(child) && inferno_shared_1.isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    }
    else if (inferno_shared_1.isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (inferno_shared_1.isFunction(ref)) {
        ref(null);
    }
    else {
        if (inferno_shared_1.isInvalid(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        inferno_shared_1.throwError();
    }
}

}).call(this,require('_process'))

},{"../core/options":40,"./patching":29,"./recycling":30,"./rendering":31,"./utils":33,"_process":77,"inferno-shared":23}],33:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var options_1 = require("../core/options");
var VNodes_1 = require("../core/VNodes");
var constants_1 = require("./constants");
var mounting_1 = require("./mounting");
var unmounting_1 = require("./unmounting");
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
exports.EMPTY_OBJ = {};
if (process.env.NODE_ENV !== 'production') {
    Object.freeze(exports.EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (inferno_shared_1.isUndefined(context)) {
        context = exports.EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === exports.EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!inferno_shared_1.isUndefined(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!inferno_shared_1.isUndefined(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (inferno_shared_1.isNullOrUndef(childContext)) {
        instance._childContext = context;
    }
    else {
        instance._childContext = inferno_shared_1.combineFrom(context, childContext);
    }
    if (!inferno_shared_1.isNull(options_1.options.beforeRender)) {
        options_1.options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!inferno_shared_1.isNull(options_1.options.afterRender)) {
        options_1.options.afterRender(instance);
    }
    if (inferno_shared_1.isArray(input)) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        inferno_shared_1.throwError();
    }
    else if (inferno_shared_1.isInvalid(input)) {
        input = VNodes_1.createVoidVNode();
    }
    else if (inferno_shared_1.isStringOrNumber(input)) {
        input = VNodes_1.createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = VNodes_1.directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
exports.createClassComponentInstance = createClassComponentInstance;
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mounting_1.mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
exports.replaceLastChildAndUnmount = replaceLastChildAndUnmount;
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmounting_1.unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
exports.replaceVNode = replaceVNode;
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (inferno_shared_1.isArray(input)) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        inferno_shared_1.throwError();
    }
    else if (inferno_shared_1.isInvalid(input)) {
        input = VNodes_1.createVoidVNode();
    }
    else if (inferno_shared_1.isStringOrNumber(input)) {
        input = VNodes_1.createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = VNodes_1.directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    return input;
}
exports.createFunctionalComponentInput = createFunctionalComponentInput;
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(''));
    }
}
exports.setTextContent = setTextContent;
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
exports.updateTextContent = updateTextContent;
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
exports.appendChild = appendChild;
function insertOrAppend(parentDom, newNode, nextNode) {
    if (inferno_shared_1.isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
exports.insertOrAppend = insertOrAppend;
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(constants_1.svgNS, tag);
    }
    else {
        return document.createElement(tag);
    }
}
exports.documentCreateElement = documentCreateElement;
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmounting_1.unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mounting_1.mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
exports.replaceWithNewNode = replaceWithNewNode;
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
exports.replaceChild = replaceChild;
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
exports.removeChild = removeChild;
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    dom.textContent = '';
    if (!options_1.options.recyclingEnabled || (options_1.options.recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
}
exports.removeAllChildren = removeAllChildren;
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!inferno_shared_1.isInvalid(child)) {
            unmounting_1.unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
exports.removeChildren = removeChildren;
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !inferno_shared_1.isNullOrUndef(nextChildren[0]) && !inferno_shared_1.isNullOrUndef(nextChildren[0].key)
        && lastChildren.length > 0 && !inferno_shared_1.isNullOrUndef(lastChildren[0]) && !inferno_shared_1.isNullOrUndef(lastChildren[0].key);
}
exports.isKeyed = isKeyed;

}).call(this,require('_process'))

},{"../core/VNodes":38,"../core/options":40,"./constants":24,"./mounting":28,"./unmounting":32,"_process":77,"inferno-shared":23}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var utils_1 = require("../utils");
function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
exports.isCheckedType = isCheckedType;
function onTextInputChange(e) {
    var vNode = this;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event_1 = props.onInput;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.props || utils_1.EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onClick) {
        var event_2 = props.onClick;
        if (event_2.event) {
            event_2.event(event_2.data, e);
        }
        else {
            event_2(e);
        }
    }
    else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (mounting && isControlled) {
        if (isCheckedType(nextPropsOrEmpty.type)) {
            dom.onclick = onCheckboxChange.bind(vNode);
            dom.onclick.wrapped = true;
        }
        else {
            dom.oninput = onTextInputChange.bind(vNode);
            dom.oninput.wrapped = true;
        }
        if (nextPropsOrEmpty.onChange) {
            dom.onchange = wrappedOnChange.bind(vNode);
            dom.onchange.wrapped = true;
        }
    }
}
exports.processInput = processInput;
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !inferno_shared_1.isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!inferno_shared_1.isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!inferno_shared_1.isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        }
        else if (!inferno_shared_1.isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}
exports.applyValue = applyValue;

},{"../utils":33,"inferno-shared":23}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var VNodes_1 = require("../../core/VNodes");
var utils_1 = require("../utils");
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        if (inferno_shared_1.isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (VNodes_1.isVNode(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((inferno_shared_1.isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!inferno_shared_1.isNullOrUndef(value) || !inferno_shared_1.isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event_1 = props.onChange;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(vNode, dom, nextPropsOrEmpty, mounting);
    if (mounting && isControlled) {
        dom.onchange = onSelectChange.bind(vNode);
        dom.onchange.wrapped = true;
    }
}
exports.processSelect = processSelect;
function applyValue(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!inferno_shared_1.isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && inferno_shared_1.isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (inferno_shared_1.isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (VNodes_1.isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}
exports.applyValue = applyValue;

},{"../../core/VNodes":38,"../utils":33,"inferno-shared":23}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var utils_1 = require("../utils");
function wrappedOnChange(e) {
    var props = this.props || utils_1.EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event_1 = props.onInput;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom, mounting);
    if (mounting && isControlled) {
        dom.oninput = onTextareaInputChange.bind(vNode);
        dom.oninput.wrapped = true;
        if (nextPropsOrEmpty.onChange) {
            dom.onchange = wrappedOnChange.bind(vNode);
            dom.onchange.wrapped = true;
        }
    }
}
exports.processTextarea = processTextarea;
function applyValue(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (inferno_shared_1.isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!inferno_shared_1.isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            }
            else if (domValue !== '') {
                dom.value = '';
            }
        }
    }
    else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.value = value;
        }
    }
}
exports.applyValue = applyValue;

},{"../utils":33,"inferno-shared":23}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var InputWrapper_1 = require("./InputWrapper");
var SelectWrapper_1 = require("./SelectWrapper");
var TextareaWrapper_1 = require("./TextareaWrapper");
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
        InputWrapper_1.processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 2048 /* SelectElement */) {
        SelectWrapper_1.processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 1024 /* TextareaElement */) {
        TextareaWrapper_1.processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
}
exports.processElement = processElement;
function isControlledFormElement(nextPropsOrEmpty) {
    return (nextPropsOrEmpty.type && InputWrapper_1.isCheckedType(nextPropsOrEmpty.type)) ? !inferno_shared_1.isNullOrUndef(nextPropsOrEmpty.checked) : !inferno_shared_1.isNullOrUndef(nextPropsOrEmpty.value);
}
exports.isControlledFormElement = isControlledFormElement;

},{"./InputWrapper":34,"./SelectWrapper":35,"./TextareaWrapper":36,"inferno-shared":23}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var utils_1 = require("../DOM/utils");
var normalization_1 = require("./normalization");
var options_1 = require("./options");
function VNode(children, className, flags, key, props, ref, type) {
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key;
    this.props = props;
    this.ref = ref;
    this.type = type;
}
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
        flags = inferno_shared_1.isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    var vNode = new VNode(children === void 0 ? null : children, className === void 0 ? null : className, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
    if (noNormalise !== true) {
        normalization_1.normalize(vNode);
    }
    if (options_1.options.createVNode !== null) {
        options_1.options.createVNode(vNode);
    }
    return vNode;
}
exports.createVNode = createVNode;
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
        var props = void 0;
        var propsToClone = vNodeToClone.props;
        if (inferno_shared_1.isNull(propsToClone)) {
            props = utils_1.EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
        var newProps = newVNode.props;
        var newChildren = newProps.children;
        // we need to also clone component children that are in props
        // as the children may also have been hoisted
        if (newChildren) {
            if (inferno_shared_1.isArray(newChildren)) {
                var len = newChildren.length;
                if (len > 0) {
                    var tmpArray = [];
                    for (var i = 0; i < len; i++) {
                        var child = newChildren[i];
                        if (inferno_shared_1.isStringOrNumber(child)) {
                            tmpArray.push(child);
                        }
                        else if (!inferno_shared_1.isInvalid(child) && isVNode(child)) {
                            tmpArray.push(directClone(child));
                        }
                    }
                    newProps.children = tmpArray;
                }
            }
            else if (isVNode(newChildren)) {
                newProps.children = directClone(newChildren);
            }
        }
        newVNode.children = null;
    }
    else if (flags & 3970 /* Element */) {
        var children = vNodeToClone.children;
        var props = void 0;
        var propsToClone = vNodeToClone.props;
        if (propsToClone === null) {
            props = utils_1.EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props, vNodeToClone.key, vNodeToClone.ref, !children);
    }
    else if (flags & 1 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    return newVNode;
}
exports.directClone = directClone;
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _children[_i - 2] = arguments[_i];
    }
    var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !inferno_shared_1.isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!inferno_shared_1.isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (inferno_shared_1.isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className || (props && props.className);
        var key = !inferno_shared_1.isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
        var ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, className, null, (!vNodeToClone.props && !props) ? utils_1.EMPTY_OBJ : inferno_shared_1.combineFrom(vNodeToClone.props, props), key, ref, true);
            var newProps = newVNode.props;
            if (newProps) {
                var newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (inferno_shared_1.isArray(newChildren)) {
                        var len = newChildren.length;
                        if (len > 0) {
                            var tmpArray = [];
                            for (var i = 0; i < len; i++) {
                                var child = newChildren[i];
                                if (inferno_shared_1.isStringOrNumber(child)) {
                                    tmpArray.push(child);
                                }
                                else if (!inferno_shared_1.isInvalid(child) && isVNode(child)) {
                                    tmpArray.push(directClone(child));
                                }
                            }
                            newProps.children = tmpArray;
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = directClone(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children = (props && !inferno_shared_1.isUndefined(props.children)) ? props.children : vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, className, children, (!vNodeToClone.props && !props) ? utils_1.EMPTY_OBJ : inferno_shared_1.combineFrom(vNodeToClone.props, props), key, ref, !children);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, key);
        }
    }
    return newVNode;
}
exports.cloneVNode = cloneVNode;
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
exports.createVoidVNode = createVoidVNode;
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
exports.createTextVNode = createTextVNode;
function isVNode(o) {
    return !!o.flags;
}
exports.isVNode = isVNode;

},{"../DOM/utils":33,"./normalization":39,"./options":40,"inferno-shared":23}],39:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
var VNodes_1 = require("./VNodes");
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (inferno_shared_1.isNumber(key)) {
        key = "." + key;
    }
    if (inferno_shared_1.isNull(vNode.key) || vNode.key[0] === '.') {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!inferno_shared_1.isInvalid(n)) {
            if (inferno_shared_1.isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (inferno_shared_1.isStringOrNumber(n)) {
                    n = VNodes_1.createTextVNode(n, null);
                }
                else if (VNodes_1.isVNode(n) && n.dom || (n.key && n.key[0] === '.')) {
                    n = VNodes_1.directClone(n);
                }
                if (inferno_shared_1.isNull(n.key) || n.key[0] === '.') {
                    n = applyKey(key, n);
                }
                else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes['$'] === true) {
        nodes = nodes.slice();
    }
    else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (inferno_shared_1.isInvalid(n) || inferno_shared_1.isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        }
        else if (inferno_shared_1.isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, VNodes_1.createTextVNode(n, null)));
        }
        else if ((VNodes_1.isVNode(n) && n.dom !== null) || (inferno_shared_1.isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, VNodes_1.directClone(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, VNodes_1.directClone(n)));
        }
    }
    return newNodes || nodes;
}
exports.normalizeVNodes = normalizeVNodes;
function normalizeChildren(children) {
    if (inferno_shared_1.isArray(children)) {
        return normalizeVNodes(children);
    }
    else if (VNodes_1.isVNode(children) && children.dom !== null) {
        return VNodes_1.directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
        if (inferno_shared_1.isNullOrUndef(children) && !inferno_shared_1.isNullOrUndef(props.children)) {
            vNode.children = props.children;
        }
        if (!inferno_shared_1.isNullOrUndef(props.className)) {
            vNode.className = props.className;
            delete props.className;
        }
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (!inferno_shared_1.isNullOrUndef(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 128 /* SvgElement */;
    }
    else if (type === 'input') {
        return 512 /* InputElement */;
    }
    else if (type === 'select') {
        return 2048 /* SelectElement */;
    }
    else if (type === 'textarea') {
        return 1024 /* TextareaElement */;
    }
    else if (type === 'media') {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
exports.getFlagsForElementVnode = getFlagsForElementVnode;
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
        // set default props
        var type = vNode.type;
        var defaultProps = type.defaultProps;
        if (!inferno_shared_1.isNullOrUndef(defaultProps)) {
            if (!props) {
                props = vNode.props = defaultProps; // Create new object if only defaultProps given
            }
            else {
                for (var prop in defaultProps) {
                    if (inferno_shared_1.isUndefined(props[prop])) {
                        props[prop] = defaultProps[prop];
                    }
                }
            }
        }
        if (inferno_shared_1.isString(type)) {
            vNode.flags = getFlagsForElementVnode(type);
            if (props && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
    }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!inferno_shared_1.isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!inferno_shared_1.isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (process.env.NODE_ENV !== 'production') {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function (vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    inferno_shared_1.warning('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}
exports.normalize = normalize;

}).call(this,require('_process'))

},{"./VNodes":38,"_process":77,"inferno-shared":23}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

},{}],41:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = require("inferno-shared");
exports.NO_OP = inferno_shared_1.NO_OP;
var normalization_1 = require("./core/normalization");
exports.getFlagsForElementVnode = normalization_1.getFlagsForElementVnode;
exports.internal_normalize = normalization_1.normalize;
var options_1 = require("./core/options");
exports.options = options_1.options;
var VNodes_1 = require("./core/VNodes");
exports.cloneVNode = VNodes_1.cloneVNode;
exports.createVNode = VNodes_1.createVNode;
var constants_1 = require("./DOM/constants");
exports.internal_isUnitlessNumber = constants_1.isUnitlessNumber;
var linkEvent_1 = require("./DOM/events/linkEvent");
exports.linkEvent = linkEvent_1.linkEvent;
var patching_1 = require("./DOM/patching");
exports.internal_patch = patching_1.patch;
var rendering_1 = require("./DOM/rendering");
exports.internal_DOMNodeMap = rendering_1.componentToDOMNodeMap;
exports.createRenderer = rendering_1.createRenderer;
exports.findDOMNode = rendering_1.findDOMNode;
exports.render = rendering_1.render;
var utils_1 = require("./DOM/utils");
exports.EMPTY_OBJ = utils_1.EMPTY_OBJ;
if (process.env.NODE_ENV !== 'production') {
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() { };
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        inferno_shared_1.warning(('It looks like you\'re using a minified copy of the development build ' +
            'of Inferno. When deploying Inferno apps to production, make sure to use ' +
            'the production build which skips development warnings and is faster. ' +
            'See http://infernojs.org for more details.'));
    }
}
var version = '3.0.5';
exports.version = version;
// we duplicate it so it plays nicely with different module loading systems
exports.default = {
    getFlagsForElementVnode: normalization_1.getFlagsForElementVnode,
    linkEvent: linkEvent_1.linkEvent,
    // core shapes
    createVNode: VNodes_1.createVNode,
    // cloning
    cloneVNode: VNodes_1.cloneVNode,
    // used to shared common items between Inferno libs
    NO_OP: inferno_shared_1.NO_OP,
    EMPTY_OBJ: utils_1.EMPTY_OBJ,
    // DOM
    render: rendering_1.render,
    findDOMNode: rendering_1.findDOMNode,
    createRenderer: rendering_1.createRenderer,
    options: options_1.options,
    version: version,
    internal_patch: patching_1.patch,
    internal_DOMNodeMap: rendering_1.componentToDOMNodeMap,
    internal_isUnitlessNumber: constants_1.isUnitlessNumber,
    internal_normalize: normalization_1.normalize
};

}).call(this,require('_process'))

},{"./DOM/constants":24,"./DOM/events/linkEvent":26,"./DOM/patching":29,"./DOM/rendering":31,"./DOM/utils":33,"./core/VNodes":38,"./core/normalization":39,"./core/options":40,"_process":77,"inferno-shared":23}],42:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"./dist":41,"dup":15}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPrefixer;

var _getBrowserInformation = require('../utils/getBrowserInformation');

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = require('../utils/getPrefixedKeyframes');

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _addNewValuesOnly = require('../utils/addNewValuesOnly');

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = require('../utils/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _prefixValue = require('../utils/prefixValue');

var _prefixValue2 = _interopRequireDefault(_prefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
    return style;
  };

  return function () {
    /**
    * Instantiante a new prefixer
    * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
    * @param {string} keepUnprefixed - keeps unprefixed properties and values
    */
    function Prefixer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prefixer);

      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

      this._userAgent = options.userAgent || defaultUserAgent;
      this._keepUnprefixed = options.keepUnprefixed || false;

      if (this._userAgent) {
        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
      }

      // Checks if the userAgent was resolved correctly
      if (this._browserInfo && this._browserInfo.cssPrefix) {
        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
      } else {
        this._useFallback = true;
        return false;
      }

      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
      if (prefixData) {
        this._requiresPrefix = {};

        for (var property in prefixData) {
          if (prefixData[property] >= this._browserInfo.browserVersion) {
            this._requiresPrefix[property] = true;
          }
        }

        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
      } else {
        this._useFallback = true;
      }

      this._metaData = {
        browserVersion: this._browserInfo.browserVersion,
        browserName: this._browserInfo.browserName,
        cssPrefix: this._browserInfo.cssPrefix,
        jsPrefix: this._browserInfo.jsPrefix,
        keepUnprefixed: this._keepUnprefixed,
        requiresPrefix: this._requiresPrefix
      };
    }

    _createClass(Prefixer, [{
      key: 'prefix',
      value: function prefix(style) {
        // use static prefixer as fallback if userAgent can not be resolved
        if (this._useFallback) {
          return fallback(style);
        }

        // only add prefixes if needed
        if (!this._hasPropsRequiringPrefix) {
          return style;
        }

        return this._prefixStyle(style);
      }
    }, {
      key: '_prefixStyle',
      value: function _prefixStyle(style) {
        for (var property in style) {
          var value = style[property];

          // handle nested objects
          if ((0, _isObject2.default)(value)) {
            style[property] = this.prefix(value);
            // handle array values
          } else if (Array.isArray(value)) {
            var combinedValue = [];

            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (_processedValue) {
              style[property] = _processedValue;
            }

            // add prefixes to properties
            if (this._requiresPrefix.hasOwnProperty(property)) {
              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
              if (!this._keepUnprefixed) {
                delete style[property];
              }
            }
          }
        }

        return style;
      }

      /**
      * Returns a prefixed version of the style object using all vendor prefixes
      * @param {Object} styles - Style object that gets prefixed properties added
      * @returns {Object} - Style object with prefixed properties and values
      */

    }], [{
      key: 'prefixAll',
      value: function prefixAll(styles) {
        return fallback(styles);
      }
    }]);

    return Prefixer;
  }();
}
module.exports = exports['default'];
},{"../utils/addNewValuesOnly":69,"../utils/capitalizeString":70,"../utils/getBrowserInformation":71,"../utils/getPrefixedKeyframes":72,"../utils/isObject":74,"../utils/prefixValue":76}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: [],
  prefixMap: { "chrome": { "appearance": 59, "userSelect": 53, "textEmphasisPosition": 59, "textEmphasis": 59, "textEmphasisStyle": 59, "textEmphasisColor": 59, "boxDecorationBreak": 59, "clipPath": 54, "maskImage": 59, "maskMode": 59, "maskRepeat": 59, "maskPosition": 59, "maskClip": 59, "maskOrigin": 59, "maskSize": 59, "maskComposite": 59, "mask": 59, "maskBorderSource": 59, "maskBorderMode": 59, "maskBorderSlice": 59, "maskBorderWidth": 59, "maskBorderOutset": 59, "maskBorderRepeat": 59, "maskBorder": 59, "maskType": 59, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10.1, "userSelect": 10.1, "backdropFilter": 10.1, "fontKerning": 9, "scrollSnapType": 10.1, "scrollSnapPointsX": 10.1, "scrollSnapPointsY": 10.1, "scrollSnapDestination": 10.1, "scrollSnapCoordinate": 10.1, "boxDecorationBreak": 10.1, "clipPath": 10.1, "maskImage": 10.1, "maskMode": 10.1, "maskRepeat": 10.1, "maskPosition": 10.1, "maskClip": 10.1, "maskOrigin": 10.1, "maskSize": 10.1, "maskComposite": 10.1, "mask": 10.1, "maskBorderSource": 10.1, "maskBorderMode": 10.1, "maskBorderSlice": 10.1, "maskBorderWidth": 10.1, "maskBorderOutset": 10.1, "maskBorderRepeat": 10.1, "maskBorder": 10.1, "maskType": 10.1, "textDecorationStyle": 10.1, "textDecorationSkip": 10.1, "textDecorationLine": 10.1, "textDecorationColor": 10.1, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10.1, "flowInto": 10.1, "flowFrom": 10.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 54, "userSelect": 54, "textAlignLast": 48, "tabSize": 54, "hyphens": 42, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 44, "userSelect": 40, "fontKerning": 19, "textEmphasisPosition": 44, "textEmphasis": 44, "textEmphasisStyle": 44, "textEmphasisColor": 44, "boxDecorationBreak": 44, "clipPath": 41, "maskImage": 44, "maskMode": 44, "maskRepeat": 44, "maskPosition": 44, "maskClip": 44, "maskOrigin": 44, "maskSize": 44, "maskComposite": 44, "mask": 44, "maskBorderSource": 44, "maskBorderMode": 44, "maskBorderSlice": 44, "maskBorderWidth": 44, "maskBorderOutset": 44, "maskBorderRepeat": 44, "maskBorder": 44, "maskType": 44, "textDecorationStyle": 43, "textDecorationSkip": 43, "textDecorationLine": 43, "textDecorationColor": 43, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 15, "wrapFlow": 15, "wrapThrough": 15, "wrapMargin": 15, "scrollSnapType": 15, "scrollSnapPointsX": 15, "scrollSnapPointsY": 15, "scrollSnapDestination": 15, "scrollSnapCoordinate": 15, "hyphens": 15, "flowInto": 15, "flowFrom": 15, "breakBefore": 15, "breakAfter": 15, "breakInside": 15, "regionFragment": 15, "gridTemplateColumns": 15, "gridTemplateRows": 15, "gridTemplateAreas": 15, "gridTemplate": 15, "gridAutoColumns": 15, "gridAutoRows": 15, "gridAutoFlow": 15, "grid": 15, "gridRowStart": 15, "gridColumnStart": 15, "gridRowEnd": 15, "gridRow": 15, "gridColumn": 15, "gridColumnEnd": 15, "gridColumnGap": 15, "gridRowGap": 15, "gridArea": 15, "gridGap": 15 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 10, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textSizeAdjust": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 10, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 53, "userSelect": 53, "fontKerning": 4.4, "textEmphasisPosition": 53, "textEmphasis": 53, "textEmphasisStyle": 53, "textEmphasisColor": 53, "boxDecorationBreak": 53, "clipPath": 53, "maskImage": 53, "maskMode": 53, "maskRepeat": 53, "maskPosition": 53, "maskClip": 53, "maskOrigin": 53, "maskSize": 53, "maskComposite": 53, "mask": 53, "maskBorderSource": 53, "maskBorderMode": 53, "maskBorderSlice": 53, "maskBorderWidth": 53, "maskBorderOutset": 53, "maskBorderRepeat": 53, "maskBorder": 53, "maskType": 53, "filter": 4.4, "fontFeatureSettings": 4.4, "breakAfter": 53, "breakBefore": 53, "breakInside": 53, "columnCount": 53, "columnFill": 53, "columnGap": 53, "columnRule": 53, "columnRuleColor": 53, "columnRuleStyle": 53, "columnRuleWidth": 53, "columns": 53, "columnSpan": 53, "columnWidth": 53 }, "and_chr": { "appearance": 55, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55 }, "and_uc": { "flex": 11, "flexBasis": 11, "flexDirection": 11, "flexGrow": 11, "flexFlow": 11, "flexShrink": 11, "flexWrap": 11, "alignContent": 11, "alignItems": 11, "alignSelf": 11, "justifyContent": 11, "order": 11, "transition": 11, "transitionDelay": 11, "transitionDuration": 11, "transitionProperty": 11, "transitionTimingFunction": 11, "transform": 11, "transformOrigin": 11, "transformOriginX": 11, "transformOriginY": 11, "backfaceVisibility": 11, "perspective": 11, "perspectiveOrigin": 11, "transformStyle": 11, "transformOriginZ": 11, "animation": 11, "animationDelay": 11, "animationDirection": 11, "animationFillMode": 11, "animationDuration": 11, "animationIterationCount": 11, "animationName": 11, "animationPlayState": 11, "animationTimingFunction": 11, "appearance": 11, "userSelect": 11, "fontKerning": 11, "textEmphasisPosition": 11, "textEmphasis": 11, "textEmphasisStyle": 11, "textEmphasisColor": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textSizeAdjust": 11, "filter": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "fontFeatureSettings": 11, "columnCount": 11, "columnFill": 11, "columnGap": 11, "columnRule": 11, "columnRuleColor": 11, "columnRuleStyle": 11, "columnRuleWidth": 11, "columns": 11, "columnSpan": 11, "columnWidth": 11 }, "op_mini": {} }
};
module.exports = exports["default"];
},{}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = require('./createPrefixer');

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = require('./plugins/crossFade');

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = require('./plugins/filter');

var _filter2 = _interopRequireDefault(_filter);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = require('./plugins/imageSet');

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _static = require('../static');

var _static2 = _interopRequireDefault(_static);

var _dynamicData = require('./dynamicData');

var _dynamicData2 = _interopRequireDefault(_dynamicData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

var Prefixer = (0, _createPrefixer2.default)({
  prefixMap: _dynamicData2.default.prefixMap,
  plugins: plugins
}, _static2.default);
exports.default = Prefixer;
module.exports = exports['default'];
},{"../static":57,"./createPrefixer":43,"./dynamicData":44,"./plugins/crossFade":46,"./plugins/cursor":47,"./plugins/filter":48,"./plugins/flex":49,"./plugins/flexboxOld":50,"./plugins/gradient":51,"./plugins/imageSet":52,"./plugins/position":53,"./plugins/sizing":54,"./plugins/transition":55}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossFade(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
    return (0, _getPrefixedValue2.default)(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grabValues = {
  grab: true,
  grabbing: true
};


var zoomValues = {
  'zoom-in': true,
  'zoom-out': true
};

function cursor(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of
  // version until a reliable browser support info can be found
  // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
  if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }

  if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
    return (0, _getPrefixedValue2.default)(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  flex: true,
  'inline-flex': true
};
function flex(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};


var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
function gradient(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageSet(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
    return (0, _getPrefixedValue2.default)(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(property, value, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = require('../../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};

var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

// TODO: chrome & opera support it
function sizing(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];
},{"../../utils/getPrefixedValue":73}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = transition;

var _hyphenateProperty = require('css-in-js-utils/lib/hyphenateProperty');

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};

var requiresPrefixDashCased = void 0;

function transition(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var _ret = function () {
      // memoize the prefix array for later use
      if (!requiresPrefixDashCased) {
        requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
          return (0, _hyphenateProperty2.default)(prop);
        });
      }

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return {
        v: multipleValues.join(',')
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}
module.exports = exports['default'];
},{"css-in-js-utils/lib/hyphenateProperty":6}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = require('../utils/prefixProperty');

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = require('../utils/prefixValue');

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = require('../utils/addNewValuesOnly');

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = require('../utils/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];
},{"../utils/addNewValuesOnly":69,"../utils/isObject":74,"../utils/prefixProperty":75,"../utils/prefixValue":76}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = require('./createPrefixer');

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = require('./staticData');

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = require('./plugins/crossFade');

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = require('./plugins/filter');

var _filter2 = _interopRequireDefault(_filter);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = require('./plugins/imageSet');

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];
},{"./createPrefixer":56,"./plugins/crossFade":58,"./plugins/cursor":59,"./plugins/filter":60,"./plugins/flex":61,"./plugins/flexboxOld":62,"./plugins/gradient":63,"./plugins/imageSet":64,"./plugins/position":65,"./plugins/sizing":66,"./plugins/transition":67,"./staticData":68}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = require('css-in-js-utils/lib/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];
},{"css-in-js-utils/lib/isPrefixedValue":7}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
},{}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = require('css-in-js-utils/lib/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];
},{"css-in-js-utils/lib/isPrefixedValue":7}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: true,
  'inline-flex': true
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value];
  }
}
module.exports = exports['default'];
},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];
},{}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = require('css-in-js-utils/lib/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
},{"css-in-js-utils/lib/isPrefixedValue":7}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = require('css-in-js-utils/lib/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];
},{"css-in-js-utils/lib/isPrefixedValue":7}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];
},{}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
},{}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = require('css-in-js-utils/lib/hyphenateProperty');

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = require('css-in-js-utils/lib/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];
},{"../../utils/capitalizeString":70,"css-in-js-utils/lib/hyphenateProperty":6,"css-in-js-utils/lib/isPrefixedValue":7}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: [],
  prefixMap: { "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit"], "textDecorationSkip": ["Webkit"], "textDecorationLine": ["Webkit"], "textDecorationColor": ["Webkit"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transform": ["Webkit"], "transformOrigin": ["Webkit"], "transformOriginX": ["Webkit"], "transformOriginY": ["Webkit"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "fontKerning": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"] }
};
module.exports = exports["default"];
},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];
},{}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];
},{}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBrowserInformation;

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixByBrowser = {
  chrome: 'Webkit',
  safari: 'Webkit',
  ios: 'Webkit',
  android: 'Webkit',
  phantom: 'Webkit',
  opera: 'Webkit',
  webos: 'Webkit',
  blackberry: 'Webkit',
  bada: 'Webkit',
  tizen: 'Webkit',
  chromium: 'Webkit',
  vivaldi: 'Webkit',
  firefox: 'Moz',
  seamoney: 'Moz',
  sailfish: 'Moz',
  msie: 'ms',
  msedge: 'ms'
};


var browserByCanIuseAlias = {
  chrome: 'chrome',
  chromium: 'chrome',
  safari: 'safari',
  firfox: 'firefox',
  msedge: 'edge',
  opera: 'opera',
  vivaldi: 'opera',
  msie: 'ie'
};

function getBrowserName(browserInfo) {
  if (browserInfo.firefox) {
    return 'firefox';
  }

  if (browserInfo.mobile || browserInfo.tablet) {
    if (browserInfo.ios) {
      return 'ios_saf';
    } else if (browserInfo.android) {
      return 'android';
    } else if (browserInfo.opera) {
      return 'op_mini';
    }
  }

  for (var browser in browserByCanIuseAlias) {
    if (browserInfo.hasOwnProperty(browser)) {
      return browserByCanIuseAlias[browser];
    }
  }
}

/**
 * Uses bowser to get default browser browserInformation such as version and name
 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
 * @param {string} userAgent - userAgent that gets evaluated
 */
function getBrowserInformation(userAgent) {
  var browserInfo = _bowser2.default._detect(userAgent);

  for (var browser in prefixByBrowser) {
    if (browserInfo.hasOwnProperty(browser)) {
      var prefix = prefixByBrowser[browser];

      browserInfo.jsPrefix = prefix;
      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
      break;
    }
  }

  browserInfo.browserName = getBrowserName(browserInfo);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  if (browserInfo.version) {
    browserInfo.browserVersion = parseFloat(browserInfo.version);
  } else {
    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
  }

  browserInfo.osVersion = parseFloat(browserInfo.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
    browserInfo.browserName = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // Samsung browser are basically build on Chrome > 44
  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
    browserInfo.browserName = 'and_chr';
    browserInfo.browserVersion = 44;
  }

  return browserInfo;
}
module.exports = exports['default'];
},{"bowser":5}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedKeyframes;
function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
  var prefixedKeyframes = 'keyframes';

  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
    return cssPrefix + prefixedKeyframes;
  }
  return prefixedKeyframes;
}
module.exports = exports['default'];
},{}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedValue;
function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
  if (keepUnprefixed) {
    return [prefixedValue, value];
  }
  return prefixedValue;
}
module.exports = exports["default"];
},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];
},{}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = require('./capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];
},{"./capitalizeString":70}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];
},{}],77:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],78:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))

},{"./lib/ReactPropTypesSecret":82,"_process":77,"fbjs/lib/invariant":9,"fbjs/lib/warning":10}],79:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');

module.exports = function() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"fbjs/lib/emptyFunction":8,"fbjs/lib/invariant":9}],80:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))

},{"./checkPropTypes":78,"./lib/ReactPropTypesSecret":82,"_process":77,"fbjs/lib/emptyFunction":8,"fbjs/lib/invariant":9,"fbjs/lib/warning":10}],81:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))

},{"./factoryWithThrowingShims":79,"./factoryWithTypeCheckers":80,"_process":77}],82:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],83:[function(require,module,exports){
// GENERATED DO NOT EDIT
module.exports = [
  "alignContent",
  "MozAlignContent",
  "WebkitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebkitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebkitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebkitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebkitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebkitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebkitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebkitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebkitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebkitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebkitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebkitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebkitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebkitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebkitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebkitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebkitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebkitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebkitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebkitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebkitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebkitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebkitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebkitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebkitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebkitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebkitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebkitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebkitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebkitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebkitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebkitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebkitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebkitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebkitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebkitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebkitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebkitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebkitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebkitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebkitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebkitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebkitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebkitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebkitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebkitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebkitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebkitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebkitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebkitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebkitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebkitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebkitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebkitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebkitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebkitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebkitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebkitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebkitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebkitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebkitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebkitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebkitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebkitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebkitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebkitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebkitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebkitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebkitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebkitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebkitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebkitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebkitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebkitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebkitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebkitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebkitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebkitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebkitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebkitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebkitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebkitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "caretColor",
  "MozCaretColor",
  "WebkitCaretColor",
  "MSCaretColor",
  "OCaretColor",
  "ch",
  "MozCh",
  "WebkitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebkitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebkitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebkitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebkitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebkitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebkitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebkitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebkitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebkitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebkitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebkitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebkitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebkitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebkitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebkitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebkitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebkitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebkitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebkitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebkitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebkitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebkitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebkitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebkitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebkitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebkitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebkitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebkitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebkitFilter",
  "MSFilter",
  "OFilter",
  "flexBasis",
  "MozFlexBasis",
  "WebkitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebkitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebkitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebkitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebkitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebkitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebkitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebkitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebkitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebkitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebkitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebkitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebkitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebkitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebkitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebkitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebkitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebkitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebkitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebkitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebkitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebkitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebkitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebkitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "grad",
  "MozGrad",
  "WebkitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebkitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebkitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebkitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebkitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebkitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebkitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebkitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebkitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebkitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebkitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebkitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebkitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebkitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebkitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebkitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebkitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebkitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebkitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebkitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebkitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebkitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebkitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebkitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebkitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebkitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebkitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebkitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebkitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebkitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebkitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebkitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebkitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebkitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebkitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebkitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebkitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebkitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebkitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebkitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebkitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebkitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebkitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebkitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebkitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebkitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebkitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebkitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebkitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebkitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebkitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebkitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebkitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebkitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebkitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebkitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebkitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebkitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebkitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebkitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxHeight",
  "MozMaxHeight",
  "WebkitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxWidth",
  "MozMaxWidth",
  "WebkitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebkitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebkitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebkitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebkitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebkitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebkitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebkitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebkitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebkitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebkitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebkitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebkitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebkitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebkitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebkitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebkitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebkitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebkitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebkitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebkitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebkitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebkitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebkitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebkitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebkitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebkitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebkitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebkitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebkitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebkitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebkitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebkitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebkitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebkitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebkitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebkitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebkitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebkitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebkitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebkitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebkitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebkitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebkitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebkitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebkitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebkitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebkitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebkitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebkitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebkitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebkitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebkitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebkitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebkitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebkitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebkitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebkitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebkitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebkitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebkitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebkitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebkitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebkitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebkitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebkitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebkitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebkitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebkitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebkitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebkitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebkitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebkitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebkitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebkitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebkitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebkitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebkitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebkitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebkitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebkitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebkitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebkitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebkitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebkitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebkitTransform",
  "msTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebkitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebkitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebkitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebkitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebkitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebkitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebkitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebkitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebkitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebkitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebkitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebkitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebkitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebkitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebkitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebkitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebkitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebkitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebkitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebkitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebkitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebkitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebkitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebkitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebkitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebkitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "flex",
  "MozFlex",
  "WebkitFlex",
  "MSFlex",
  "OFlex",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "overflowScrolling",
  "MozOverflowScrolling",
  "WebkitOverflowScrolling",
  "MSOverflowScrolling",
  "OOverflowScrolling"
]

},{}],84:[function(require,module,exports){
var properties = require('./css-properties.js');
var PropTypes = require('prop-types');

module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = PropTypes.oneOfType([
  PropTypes.arrayOf(module.exports),
  module.exports
]);

},{"./css-properties.js":83,"prop-types":81}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL0V4YW1wbGVzLmpzIiwibGliL1BhbmUuanMiLCJsaWIvUmVzaXplci5qcyIsImxpYi9TcGxpdFBhbmUuanMiLCJub2RlX21vZHVsZXMvYm93c2VyL3NyYy9ib3dzZXIuanMiLCJub2RlX21vZHVsZXMvY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwibm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8tY29tcGF0L2Rpc3QvU1ZHRE9NUHJvcGVydHlDb25maWcuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby1jb21wYXQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vLWNvbXBhdC9kaXN0L2lzVmFsaWRFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8tY29tcGF0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8tY29tcG9uZW50L2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby1jcmVhdGUtY2xhc3MvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby1zaGFyZWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vLXNoYXJlZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vL2Rpc3QvRE9NL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vL2Rpc3QvRE9NL2V2ZW50cy9kZWxlZ2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8vZGlzdC9ET00vZXZlbnRzL2xpbmtFdmVudC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vL2Rpc3QvRE9NL2h5ZHJhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vL2Rpc3QvRE9NL21vdW50aW5nLmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8vZGlzdC9ET00vcGF0Y2hpbmcuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L0RPTS9yZWN5Y2xpbmcuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L0RPTS9yZW5kZXJpbmcuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L0RPTS91bm1vdW50aW5nLmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8vZGlzdC9ET00vdXRpbHMuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L0RPTS93cmFwcGVycy9JbnB1dFdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8vZGlzdC9ET00vd3JhcHBlcnMvVGV4dGFyZWFXcmFwcGVyLmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8vZGlzdC9ET00vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L2NvcmUvVk5vZGVzLmpzIiwibm9kZV9tb2R1bGVzL2luZmVybm8vZGlzdC9jb3JlL25vcm1hbGl6YXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5mZXJuby9kaXN0L2NvcmUvb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZlcm5vL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvY3JlYXRlUHJlZml4ZXIuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvZHluYW1pY0RhdGEuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9jcm9zc0ZhZGUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9jdXJzb3IuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9maWx0ZXIuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9mbGV4LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2dyYWRpZW50LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvaW1hZ2VTZXQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9wb3NpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL3NpemluZy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9jcmVhdGVQcmVmaXhlci5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jcm9zc0ZhZGUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2N1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94T2xkLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvaW1hZ2VTZXQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3Bvc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9zdGF0aWNEYXRhLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9hZGROZXdWYWx1ZXNPbmx5LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9nZXRQcmVmaXhlZFZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9pc09iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4UHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwibm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1wcm9wdHlwZS9zcmMvY3NzLXByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtcHJvcHR5cGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxzQkFBc0IsU0FBdEIsbUJBQXNCLEdBQU07QUFDOUIsV0FDSTtBQUFBO0FBQUEsVUFBVyxPQUFNLFVBQWpCLEVBQTRCLFNBQVMsRUFBckMsRUFBeUMsU0FBUyxHQUFsRCxFQUF1RCxhQUFhLEdBQXBFLEVBQXlFLFdBQVUsU0FBbkY7QUFDSSwwREFESjtBQUVJO0FBQUE7QUFBQSxjQUFXLE9BQU0sWUFBakI7QUFDSSw4REFESjtBQUVJO0FBRko7QUFGSixLQURKO0FBU0gsQ0FWRDs7QUFZQSxJQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsR0FBTTtBQUMvQixXQUNJO0FBQUE7QUFBQSxVQUFXLE9BQU0sVUFBakI7QUFDSSwwREFESjtBQUVJO0FBRkosS0FESjtBQU1ILENBUEQ7O0FBU0EsSUFBTSx5QkFBeUIsU0FBekIsc0JBQXlCLEdBQU07QUFDakMsV0FDSTtBQUFBO0FBQUEsVUFBVyxPQUFNLFlBQWpCO0FBQ0ksMERBREo7QUFFSTtBQUZKLEtBREo7QUFNSCxDQVBEOztBQVNBLElBQU0sNEJBQTRCLFNBQTVCLHlCQUE0QixHQUFNO0FBQ3BDLFdBQ0k7QUFBQTtBQUFBLFVBQVcsYUFBWSxLQUF2QjtBQUNJLDBEQURKO0FBRUk7QUFGSixLQURKO0FBTUgsQ0FQRDs7QUFTQSxJQUFNLDhCQUE4QixTQUE5QiwyQkFBOEIsR0FBTTtBQUN0QyxXQUNJO0FBQUE7QUFBQSxVQUFXLGFBQVksS0FBdkIsRUFBNkIsT0FBTSxZQUFuQztBQUNJLDBEQURKO0FBRUk7QUFGSixLQURKO0FBTUgsQ0FQRDs7QUFTQSxJQUFNLHFDQUFxQyxTQUFyQyxrQ0FBcUMsR0FBTTtBQUM3QyxXQUNJO0FBQUE7QUFBQSxVQUFXLGFBQVksS0FBdkIsRUFBNkIsT0FBTSxVQUFuQztBQUNJLDBEQURKO0FBRUk7QUFGSixLQURKO0FBTUgsQ0FQRDs7QUFTQSxJQUFNLHVDQUF1QyxTQUF2QyxvQ0FBdUMsR0FBTTtBQUMvQyxXQUNJO0FBQUE7QUFBQSxVQUFXLGFBQVksS0FBdkIsRUFBNkIsT0FBTSxZQUFuQztBQUNJLDBEQURKO0FBRUk7QUFGSixLQURKO0FBTUgsQ0FQRDs7QUFTQSxJQUFNLDBCQUEwQixTQUExQix1QkFBMEIsR0FBTTtBQUNsQyxXQUNJO0FBQUE7QUFBQSxVQUFXLE9BQU0sVUFBakIsRUFBNEIsYUFBWSxLQUF4QztBQUNJLDBEQURKO0FBRUk7QUFBQTtBQUFBLGNBQVcsT0FBTSxVQUFqQixFQUE0QixhQUFZLEtBQXhDO0FBQ0ksOERBREo7QUFFSTtBQUZKO0FBRkosS0FESjtBQVNILENBVkQ7O0FBWUEsSUFBTSw0QkFBNEIsU0FBNUIseUJBQTRCLEdBQU07QUFDcEMsV0FDSTtBQUFBO0FBQUEsVUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDSSwwREFESjtBQUVJO0FBQUE7QUFBQSxjQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNJLDhEQURKO0FBRUk7QUFGSjtBQUZKLEtBREo7QUFTSCxDQVZEOztBQVlBLElBQU0sc0JBQXNCLFNBQXRCLG1CQUFzQixHQUFNO0FBQzlCLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBLGNBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBLGtCQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNJLGtFQURKO0FBRUk7QUFGSjtBQURKO0FBRkosS0FESjtBQVdILENBWkQ7O0FBY0EsSUFBTSxxQkFBcUIsU0FBckIsa0JBQXFCLEdBQU07QUFDN0IsUUFBTSxTQUFTLEVBQUUsWUFBWSxNQUFkLEVBQWY7QUFDQSxRQUFNLFNBQVMsRUFBRSxZQUFZLFNBQWQsRUFBZjtBQUNBLFFBQU0sU0FBUyxFQUFFLFlBQVksTUFBZCxFQUFmO0FBQ0EsUUFBTSxTQUFTLEVBQUUsU0FBUyxLQUFYLEVBQWtCLFdBQVcsUUFBN0IsRUFBZjtBQUNBLFdBQ0k7QUFBQTtBQUFBO0FBQ0ksbUJBQU0sVUFEVjtBQUVJLHFCQUFTLEVBRmIsRUFFaUIsU0FBUyxHQUYxQixFQUUrQixhQUFhLEdBRjVDO0FBR0ksdUJBQVUsU0FIZDtBQUlJLHdCQUFZLE1BSmhCO0FBS0ksMEJBQWMsTUFMbEI7QUFNSSwwREFOSjtBQU9JO0FBQUE7QUFBQSxjQUFXLE9BQU0sWUFBakIsRUFBOEIsV0FBVyxNQUF6QyxFQUFpRCxZQUFZLE1BQTdEO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBUEosS0FESjtBQWNILENBbkJEOztJQXFCTSxxQjs7O0FBRUYsbUNBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGtKQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxrQkFBTSxTQURHO0FBRVQsc0JBQVU7QUFGRCxTQUFiO0FBSUEsY0FBSyxlQUFMLEdBQXVCLE1BQUssZUFBTCxDQUFxQixJQUFyQixPQUF2QjtBQUNBLGNBQUssYUFBTCxHQUFxQixNQUFLLGFBQUwsQ0FBbUIsSUFBbkIsT0FBckI7QUFDQSxjQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCO0FBUmU7QUFTbEI7Ozs7MENBRWlCO0FBQ2QsaUJBQUssUUFBTCxDQUFjO0FBQ1YsMEJBQVU7QUFEQSxhQUFkO0FBR0g7Ozt3Q0FFZTtBQUFBOztBQUNaLGlCQUFLLFFBQUwsQ0FBYztBQUNWLDBCQUFVO0FBREEsYUFBZDtBQUdBLHVCQUFXLFlBQU07QUFDYix1QkFBSyxRQUFMLENBQWMsRUFBRSxNQUFNLFNBQVIsRUFBZDtBQUNILGFBRkQsRUFFRyxDQUZIO0FBR0g7OzttQ0FFVSxLLEVBQU87QUFDZCxnQkFBSSxTQUFTLEdBQVQsSUFBZ0IsU0FBUyxHQUE3QixFQUFrQztBQUM5QixxQkFBSyxRQUFMLENBQWMsRUFBRSxNQUFNLEdBQVIsRUFBZDtBQUNILGFBRkQsTUFFTyxJQUFJLFFBQVEsR0FBUixJQUFlLFNBQVMsR0FBNUIsRUFBaUM7QUFDcEMscUJBQUssUUFBTCxDQUFjLEVBQUUsTUFBTSxHQUFSLEVBQWQ7QUFDSCxhQUZNLE1BRUE7QUFDSCxxQkFBSyxRQUFMLENBQWMsRUFBRSxNQUFNLFNBQVIsRUFBZDtBQUNIO0FBQ0o7OztpQ0FFUTtBQUNMLGdCQUFNLGdCQUFnQjtBQUNsQixpQ0FBaUIsUUFEQztBQUVsQixzQkFBTSxHQUZZO0FBR2xCLHVCQUFPO0FBSFcsYUFBdEI7QUFLQSxnQkFBTSxvQkFBb0I7QUFDdEIsMEJBQVUsVUFEWTtBQUV0Qix5QkFBUyxNQUZhO0FBR3RCLDRCQUFZLFFBSFU7QUFJdEIsZ0NBQWdCLFFBSk07QUFLdEIsd0JBQVE7QUFMYyxhQUExQjtBQU9BLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxPQUFPLEVBQUUsUUFBUSxNQUFWLEVBQVo7QUFDSTtBQUFBO0FBQUE7QUFDSSw4QkFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLFNBQXRCLEdBQWtDLEtBQUssS0FBTCxDQUFXLElBRHZEO0FBRUksa0NBQVUsS0FBSyxVQUZuQjtBQUdJLHVDQUFlLEtBQUssZUFIeEI7QUFJSSx3Q0FBZ0IsS0FBSztBQUp6QjtBQU1JLG1FQUFLLE9BQU8sRUFBRSxpQkFBaUIsTUFBbkIsRUFBMkIsUUFBUSxNQUFuQyxFQUEyQyxRQUFRLENBQW5ELEVBQXNELFNBQVMsR0FBL0QsRUFBWixHQU5KO0FBT0k7QUFQSixpQkFESjtBQVVJO0FBQUE7QUFBQSxzQkFBSyxPQUFPLFNBQWMsRUFBZCxFQUFrQixpQkFBbEIsRUFBcUMsRUFBRSxNQUFNLENBQVIsRUFBVyxPQUFPLEdBQWxCLEVBQXJDLENBQVo7QUFBQTtBQUFBLGlCQVZKO0FBYUk7QUFBQTtBQUFBLHNCQUFLLE9BQU8sU0FBYyxFQUFkLEVBQWtCLGlCQUFsQixFQUFxQyxhQUFyQyxDQUFaO0FBQUE7QUFBQSxpQkFiSjtBQWdCSTtBQUFBO0FBQUEsc0JBQUssT0FBTyxTQUFjLEVBQWQsRUFBa0IsaUJBQWxCLEVBQXFDLEVBQUUsTUFBTSxHQUFSLEVBQWEsT0FBTyxvQkFBcEIsRUFBckMsQ0FBWjtBQUFBO0FBQUE7QUFoQkosYUFESjtBQXVCSDs7Ozs7O0FBSUwsSUFBSSxTQUFTLGNBQVQsQ0FBd0IsdUJBQXhCLENBQUosRUFBc0QsMkJBQU8sc0NBQUMsbUJBQUQsT0FBUCxFQUFnQyxTQUFTLGNBQVQsQ0FBd0IsdUJBQXhCLENBQWhDO0FBQ3RELElBQUksU0FBUyxjQUFULENBQXdCLHdCQUF4QixDQUFKLEVBQXVELDJCQUFPLHNDQUFDLG9CQUFELE9BQVAsRUFBaUMsU0FBUyxjQUFULENBQXdCLHdCQUF4QixDQUFqQztBQUN2RCxJQUFJLFNBQVMsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBSixFQUF5RCwyQkFBTyxzQ0FBQyxzQkFBRCxPQUFQLEVBQW1DLFNBQVMsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBbkM7QUFDekQsSUFBSSxTQUFTLGNBQVQsQ0FBd0IsNkJBQXhCLENBQUosRUFBNEQsMkJBQU8sc0NBQUMseUJBQUQsT0FBUCxFQUFzQyxTQUFTLGNBQVQsQ0FBd0IsNkJBQXhCLENBQXRDO0FBQzVELElBQUksU0FBUyxjQUFULENBQXdCLCtCQUF4QixDQUFKLEVBQThELDJCQUFPLHNDQUFDLDJCQUFELE9BQVAsRUFBd0MsU0FBUyxjQUFULENBQXdCLCtCQUF4QixDQUF4QztBQUM5RCxJQUFJLFNBQVMsY0FBVCxDQUF3Qix3Q0FBeEIsQ0FBSixFQUF1RSwyQkFBTyxzQ0FBQyxrQ0FBRCxPQUFQLEVBQStDLFNBQVMsY0FBVCxDQUF3Qix3Q0FBeEIsQ0FBL0M7QUFDdkUsSUFBSSxTQUFTLGNBQVQsQ0FBd0IsMENBQXhCLENBQUosRUFBeUUsMkJBQU8sc0NBQUMsb0NBQUQsT0FBUCxFQUFpRCxTQUFTLGNBQVQsQ0FBd0IsMENBQXhCLENBQWpEO0FBQ3pFLElBQUksU0FBUyxjQUFULENBQXdCLDJCQUF4QixDQUFKLEVBQTBELDJCQUFPLHNDQUFDLHVCQUFELE9BQVAsRUFBb0MsU0FBUyxjQUFULENBQXdCLDJCQUF4QixDQUFwQztBQUMxRCxJQUFJLFNBQVMsY0FBVCxDQUF3Qiw2QkFBeEIsQ0FBSixFQUE0RCwyQkFBTyxzQ0FBQyx5QkFBRCxPQUFQLEVBQXNDLFNBQVMsY0FBVCxDQUF3Qiw2QkFBeEIsQ0FBdEM7QUFDNUQsSUFBSSxTQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLENBQUosRUFBcUQsMkJBQU8sc0NBQUMsbUJBQUQsT0FBUCxFQUFnQyxTQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLENBQWhDO0FBQ3JELElBQUksU0FBUyxjQUFULENBQXdCLHNCQUF4QixDQUFKLEVBQXFELDJCQUFPLHNDQUFDLGtCQUFELE9BQVAsRUFBK0IsU0FBUyxjQUFULENBQXdCLHNCQUF4QixDQUEvQjtBQUNyRCxJQUFJLFNBQVMsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBSixFQUF5RCwyQkFBTyxzQ0FBQyxxQkFBRCxPQUFQLEVBQWtDLFNBQVMsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBbEM7OztBQzNOekQ7Ozs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDekMsV0FBTztBQURrQyxDQUE3Qzs7QUFJQSxJQUFJLFdBQVcsT0FBTyxNQUFQLElBQWlCLFVBQVUsTUFBVixFQUFrQjtBQUFFLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxVQUFVLE1BQTlCLEVBQXNDLEdBQXRDLEVBQTJDO0FBQUUsWUFBSSxTQUFTLFVBQVUsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsZ0JBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLE1BQXJDLEVBQTZDLEdBQTdDLENBQUosRUFBdUQ7QUFBRSx1QkFBTyxHQUFQLElBQWMsT0FBTyxHQUFQLENBQWQ7QUFBNEI7QUFBRTtBQUFFLEtBQUMsT0FBTyxNQUFQO0FBQWdCLENBQWhROztBQUVBLElBQUksZUFBZSxZQUFZO0FBQUUsYUFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUFFLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQUUsZ0JBQUksYUFBYSxNQUFNLENBQU4sQ0FBakIsQ0FBMkIsV0FBVyxVQUFYLEdBQXdCLFdBQVcsVUFBWCxJQUF5QixLQUFqRCxDQUF3RCxXQUFXLFlBQVgsR0FBMEIsSUFBMUIsQ0FBZ0MsSUFBSSxXQUFXLFVBQWYsRUFBMkIsV0FBVyxRQUFYLEdBQXNCLElBQXRCLENBQTRCLE9BQU8sY0FBUCxDQUFzQixNQUF0QixFQUE4QixXQUFXLEdBQXpDLEVBQThDLFVBQTlDO0FBQTREO0FBQUUsS0FBQyxPQUFPLFVBQVUsV0FBVixFQUF1QixVQUF2QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFlBQUksVUFBSixFQUFnQixpQkFBaUIsWUFBWSxTQUE3QixFQUF3QyxVQUF4QyxFQUFxRCxJQUFJLFdBQUosRUFBaUIsaUJBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBQTRDLE9BQU8sV0FBUDtBQUFxQixLQUFoTjtBQUFtTixDQUE5aEIsRUFBbkI7O0FBRUEsSUFBSSxpQkFBaUIsT0FBakIsa0JBQUo7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksYUFBYSxPQUFiLGNBQUo7O0FBRUEsSUFBSSxjQUFjLHVCQUF1QixVQUF2QixDQUFsQjs7QUFFQSxJQUFJLHVCQUF1QixPQUF2Qix5QkFBSjs7QUFFQSxJQUFJLHdCQUF3Qix1QkFBdUIsb0JBQXZCLENBQTVCOztBQUVBLElBQUksc0JBQXNCLE9BQXRCLHdCQUFKOztBQUVBLElBQUksdUJBQXVCLHVCQUF1QixtQkFBdkIsQ0FBM0I7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFNBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBdEIsQ0FBSixFQUF3QztBQUFFLGNBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUEyRDtBQUFFOztBQUV6SixTQUFTLDBCQUFULENBQW9DLElBQXBDLEVBQTBDLElBQTFDLEVBQWdEO0FBQUUsUUFBSSxDQUFDLElBQUwsRUFBVztBQUFFLGNBQU0sSUFBSSxjQUFKLENBQW1CLDJEQUFuQixDQUFOO0FBQXdGLEtBQUMsT0FBTyxTQUFTLFFBQU8sSUFBUCx5Q0FBTyxJQUFQLE9BQWdCLFFBQWhCLElBQTRCLE9BQU8sSUFBUCxLQUFnQixVQUFyRCxJQUFtRSxJQUFuRSxHQUEwRSxJQUFqRjtBQUF3Rjs7QUFFaFAsU0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBQXlDO0FBQUUsUUFBSSxPQUFPLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0MsZUFBZSxJQUF2RCxFQUE2RDtBQUFFLGNBQU0sSUFBSSxTQUFKLENBQWMscUVBQW9FLFVBQXBFLHlDQUFvRSxVQUFwRSxFQUFkLENBQU47QUFBc0csS0FBQyxTQUFTLFNBQVQsR0FBcUIsT0FBTyxNQUFQLENBQWMsY0FBYyxXQUFXLFNBQXZDLEVBQWtELEVBQUUsYUFBYSxFQUFFLE9BQU8sUUFBVCxFQUFtQixZQUFZLEtBQS9CLEVBQXNDLFVBQVUsSUFBaEQsRUFBc0QsY0FBYyxJQUFwRSxFQUFmLEVBQWxELENBQXJCLENBQXFLLElBQUksVUFBSixFQUFnQixPQUFPLGNBQVAsR0FBd0IsT0FBTyxjQUFQLENBQXNCLFFBQXRCLEVBQWdDLFVBQWhDLENBQXhCLEdBQXNFLFNBQVMsU0FBVCxHQUFxQixVQUEzRjtBQUF3Rzs7QUFFOWUsSUFBSSxhQUFhLGlGQUFqQjs7QUFFQSxJQUFJLE9BQU8sVUFBVSxnQkFBVixFQUE0QjtBQUNuQyxjQUFVLElBQVYsRUFBZ0IsZ0JBQWhCOztBQUVBLGFBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDakIsd0JBQWdCLElBQWhCLEVBQXNCLElBQXRCOztBQUVBLFlBQUksUUFBUSwyQkFBMkIsSUFBM0IsRUFBaUMsQ0FBQyxLQUFLLFNBQUwsSUFBa0IsT0FBTyxjQUFQLENBQXNCLElBQXRCLENBQW5CLEVBQWdELElBQWhELENBQXFELElBQXJELEVBQTJELEtBQTNELENBQWpDLENBQVo7O0FBRUEsY0FBTSxLQUFOLEdBQWMsRUFBRSxNQUFNLE1BQU0sS0FBTixDQUFZLElBQXBCLEVBQWQ7QUFDQSxlQUFPLEtBQVA7QUFDSDs7QUFFRCxpQkFBYSxJQUFiLEVBQW1CLENBQUM7QUFDaEIsYUFBSyxRQURXO0FBRWhCLGVBQU8sU0FBUyxNQUFULEdBQWtCO0FBQ3JCLGdCQUFJLFNBQVMsS0FBSyxLQUFsQjtBQUFBLGdCQUNJLFdBQVcsT0FBTyxRQUR0QjtBQUFBLGdCQUVJLFlBQVksT0FBTyxTQUZ2QjtBQUFBLGdCQUdJLFdBQVcsT0FBTyxRQUh0QjtBQUFBLGdCQUlJLFFBQVEsT0FBTyxLQUpuQjtBQUFBLGdCQUtJLGFBQWEsT0FBTyxLQUx4QjtBQU1BLGdCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBdEI7O0FBRUEsZ0JBQUksVUFBVSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFNBQWhCLENBQWQ7O0FBRUEsZ0JBQUksUUFBUSxTQUFTLEVBQVQsRUFBYSxjQUFjLEVBQTNCLEVBQStCO0FBQ3ZDLHNCQUFNLENBRGlDO0FBRXZDLDBCQUFVLFVBRjZCO0FBR3ZDLHlCQUFTO0FBSDhCLGFBQS9CLENBQVo7O0FBTUEsZ0JBQUksU0FBUyxTQUFiLEVBQXdCO0FBQ3BCLG9CQUFJLFVBQVUsVUFBZCxFQUEwQjtBQUN0QiwwQkFBTSxLQUFOLEdBQWMsSUFBZDtBQUNILGlCQUZELE1BRU87QUFDSCwwQkFBTSxNQUFOLEdBQWUsSUFBZjtBQUNBLDBCQUFNLE9BQU4sR0FBZ0IsTUFBaEI7QUFDSDtBQUNELHNCQUFNLElBQU4sR0FBYSxNQUFiO0FBQ0g7O0FBRUQsbUJBQU8sZ0JBQWdCLE9BQWhCLENBQXdCLGFBQXhCLENBQ0gsS0FERyxFQUVILEVBQUUsV0FBVyxRQUFRLElBQVIsQ0FBYSxHQUFiLENBQWIsRUFBZ0MsT0FBTyxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsQ0FBdkMsRUFGRyxFQUdILFFBSEcsQ0FBUDtBQUtIO0FBbENlLEtBQUQsQ0FBbkI7O0FBcUNBLFdBQU8sSUFBUDtBQUNILENBbERVLENBa0RULGdCQUFnQixPQUFoQixDQUF3QixTQWxEZixDQUFYOztBQW9EQSxLQUFLLFNBQUwsR0FBaUI7QUFDYixlQUFXLFlBQVksT0FBWixDQUFvQixNQUFwQixDQUEyQixVQUR6QjtBQUViLGNBQVUsWUFBWSxPQUFaLENBQW9CLElBQXBCLENBQXlCLFVBRnRCO0FBR2IsY0FBVSxZQUFZLE9BQVosQ0FBb0IsVUFBcEIsQ0FBK0Isc0JBQXNCLE9BQXJELEVBQThELFVBSDNEO0FBSWIsVUFBTSxZQUFZLE9BQVosQ0FBb0IsU0FBcEIsQ0FBOEIsQ0FBQyxZQUFZLE9BQVosQ0FBb0IsTUFBckIsRUFBNkIsWUFBWSxPQUFaLENBQW9CLE1BQWpELENBQTlCLENBSk87QUFLYixXQUFPLFlBQVksT0FBWixDQUFvQixLQUFwQixDQUEwQixDQUFDLFVBQUQsRUFBYSxZQUFiLENBQTFCLENBTE07QUFNYixXQUFPLHFCQUFxQjtBQU5mLENBQWpCOztBQVNBLEtBQUssWUFBTCxHQUFvQjtBQUNoQixjQUFVLElBQUksc0JBQXNCLE9BQTFCLENBQWtDLEVBQUUsV0FBVyxVQUFiLEVBQWxDO0FBRE0sQ0FBcEI7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLElBQWxCO0FBQ0EsT0FBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQjs7O0FDdEdBOzs7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsSUFBSSxlQUFlLFlBQVk7QUFBRSxhQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQUUsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQU0sTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFBRSxnQkFBSSxhQUFhLE1BQU0sQ0FBTixDQUFqQixDQUEyQixXQUFXLFVBQVgsR0FBd0IsV0FBVyxVQUFYLElBQXlCLEtBQWpELENBQXdELFdBQVcsWUFBWCxHQUEwQixJQUExQixDQUFnQyxJQUFJLFdBQVcsVUFBZixFQUEyQixXQUFXLFFBQVgsR0FBc0IsSUFBdEIsQ0FBNEIsT0FBTyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLFdBQVcsR0FBekMsRUFBOEMsVUFBOUM7QUFBNEQ7QUFBRSxLQUFDLE9BQU8sVUFBVSxXQUFWLEVBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsWUFBSSxVQUFKLEVBQWdCLGlCQUFpQixZQUFZLFNBQTdCLEVBQXdDLFVBQXhDLEVBQXFELElBQUksV0FBSixFQUFpQixpQkFBaUIsV0FBakIsRUFBOEIsV0FBOUIsRUFBNEMsT0FBTyxXQUFQO0FBQXFCLEtBQWhOO0FBQW1OLENBQTloQixFQUFuQjs7QUFFQSxJQUFJLGlCQUFpQixPQUFqQixrQkFBSjs7QUFFQSxJQUFJLGtCQUFrQix1QkFBdUIsY0FBdkIsQ0FBdEI7O0FBRUEsSUFBSSxhQUFhLE9BQWIsY0FBSjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksdUJBQXVCLE9BQXZCLHlCQUFKOztBQUVBLElBQUksd0JBQXdCLHVCQUF1QixvQkFBdkIsQ0FBNUI7O0FBRUEsSUFBSSxzQkFBc0IsT0FBdEIsd0JBQUo7O0FBRUEsSUFBSSx1QkFBdUIsdUJBQXVCLG1CQUF2QixDQUEzQjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsU0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUF0QixDQUFKLEVBQXdDO0FBQUUsY0FBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQTJEO0FBQUU7O0FBRXpKLFNBQVMsMEJBQVQsQ0FBb0MsSUFBcEMsRUFBMEMsSUFBMUMsRUFBZ0Q7QUFBRSxRQUFJLENBQUMsSUFBTCxFQUFXO0FBQUUsY0FBTSxJQUFJLGNBQUosQ0FBbUIsMkRBQW5CLENBQU47QUFBd0YsS0FBQyxPQUFPLFNBQVMsUUFBTyxJQUFQLHlDQUFPLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEIsT0FBTyxJQUFQLEtBQWdCLFVBQXJELElBQW1FLElBQW5FLEdBQTBFLElBQWpGO0FBQXdGOztBQUVoUCxTQUFTLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBN0IsRUFBeUM7QUFBRSxRQUFJLE9BQU8sVUFBUCxLQUFzQixVQUF0QixJQUFvQyxlQUFlLElBQXZELEVBQTZEO0FBQUUsY0FBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsVUFBcEUseUNBQW9FLFVBQXBFLEVBQWQsQ0FBTjtBQUFzRyxLQUFDLFNBQVMsU0FBVCxHQUFxQixPQUFPLE1BQVAsQ0FBYyxjQUFjLFdBQVcsU0FBdkMsRUFBa0QsRUFBRSxhQUFhLEVBQUUsT0FBTyxRQUFULEVBQW1CLFlBQVksS0FBL0IsRUFBc0MsVUFBVSxJQUFoRCxFQUFzRCxjQUFjLElBQXBFLEVBQWYsRUFBbEQsQ0FBckIsQ0FBcUssSUFBSSxVQUFKLEVBQWdCLE9BQU8sY0FBUCxHQUF3QixPQUFPLGNBQVAsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBaEMsQ0FBeEIsR0FBc0UsU0FBUyxTQUFULEdBQXFCLFVBQTNGO0FBQXdHOztBQUU5ZSxJQUFJLGFBQWEsaUZBQWpCOztBQUVBLElBQUksVUFBVSxVQUFVLGdCQUFWLEVBQTRCO0FBQ3RDLGNBQVUsT0FBVixFQUFtQixnQkFBbkI7O0FBRUEsYUFBUyxPQUFULEdBQW1CO0FBQ2Ysd0JBQWdCLElBQWhCLEVBQXNCLE9BQXRCOztBQUVBLGVBQU8sMkJBQTJCLElBQTNCLEVBQWlDLENBQUMsUUFBUSxTQUFSLElBQXFCLE9BQU8sY0FBUCxDQUFzQixPQUF0QixDQUF0QixFQUFzRCxLQUF0RCxDQUE0RCxJQUE1RCxFQUFrRSxTQUFsRSxDQUFqQyxDQUFQO0FBQ0g7O0FBRUQsaUJBQWEsT0FBYixFQUFzQixDQUFDO0FBQ25CLGFBQUssUUFEYztBQUVuQixlQUFPLFNBQVMsTUFBVCxHQUFrQjtBQUNyQixnQkFBSSxTQUFTLEtBQUssS0FBbEI7QUFBQSxnQkFDSSxZQUFZLE9BQU8sU0FEdkI7QUFBQSxnQkFFSSxXQUFXLE9BQU8sT0FGdEI7QUFBQSxnQkFHSSxpQkFBaUIsT0FBTyxhQUg1QjtBQUFBLGdCQUlJLGVBQWUsT0FBTyxXQUoxQjtBQUFBLGdCQUtJLGNBQWMsT0FBTyxVQUx6QjtBQUFBLGdCQU1JLGdCQUFnQixPQUFPLFlBTjNCO0FBQUEsZ0JBT0ksV0FBVyxPQUFPLFFBUHRCO0FBQUEsZ0JBUUksbUJBQW1CLE9BQU8sZ0JBUjlCO0FBQUEsZ0JBU0ksUUFBUSxPQUFPLEtBVG5CO0FBQUEsZ0JBVUksUUFBUSxPQUFPLEtBVm5COztBQVlBLGdCQUFJLFVBQVUsQ0FBQyxnQkFBRCxFQUFtQixLQUFuQixFQUEwQixTQUExQixDQUFkOztBQUVBLG1CQUFPLGdCQUFnQixPQUFoQixDQUF3QixhQUF4QixDQUFzQyxNQUF0QyxFQUE4QztBQUNqRCwyQkFBVyxRQUFRLElBQVIsQ0FBYSxHQUFiLENBRHNDO0FBRWpELHVCQUFPLFNBQVMsTUFBVCxDQUFnQixLQUFoQixLQUEwQixFQUZnQjtBQUdqRCw2QkFBYSxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDckMsMkJBQU8sYUFBYSxLQUFiLENBQVA7QUFDSCxpQkFMZ0Q7QUFNakQsOEJBQWMsU0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQ3ZDLDBCQUFNLGNBQU47QUFDQSxrQ0FBYyxLQUFkO0FBQ0gsaUJBVGdEO0FBVWpELDRCQUFZLFNBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQjtBQUNuQywwQkFBTSxjQUFOO0FBQ0EsZ0NBQVksS0FBWjtBQUNILGlCQWJnRDtBQWNqRCx5QkFBUyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDN0Isd0JBQUksUUFBSixFQUFjO0FBQ1YsOEJBQU0sY0FBTjtBQUNBLGlDQUFTLEtBQVQ7QUFDSDtBQUNKLGlCQW5CZ0Q7QUFvQmpELCtCQUFlLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QjtBQUN6Qyx3QkFBSSxjQUFKLEVBQW9CO0FBQ2hCLDhCQUFNLGNBQU47QUFDQSx1Q0FBZSxLQUFmO0FBQ0g7QUFDSjtBQXpCZ0QsYUFBOUMsQ0FBUDtBQTJCSDtBQTVDa0IsS0FBRCxDQUF0Qjs7QUErQ0EsV0FBTyxPQUFQO0FBQ0gsQ0F6RGEsQ0F5RFosZ0JBQWdCLE9BQWhCLENBQXdCLFNBekRaLENBQWQ7O0FBMkRBLFFBQVEsU0FBUixHQUFvQjtBQUNoQixlQUFXLFlBQVksT0FBWixDQUFvQixNQUFwQixDQUEyQixVQUR0QjtBQUVoQixhQUFTLFlBQVksT0FBWixDQUFvQixJQUZiO0FBR2hCLG1CQUFlLFlBQVksT0FBWixDQUFvQixJQUhuQjtBQUloQixpQkFBYSxZQUFZLE9BQVosQ0FBb0IsSUFBcEIsQ0FBeUIsVUFKdEI7QUFLaEIsa0JBQWMsWUFBWSxPQUFaLENBQW9CLElBQXBCLENBQXlCLFVBTHZCO0FBTWhCLGdCQUFZLFlBQVksT0FBWixDQUFvQixJQUFwQixDQUF5QixVQU5yQjtBQU9oQixjQUFVLFlBQVksT0FBWixDQUFvQixVQUFwQixDQUErQixzQkFBc0IsT0FBckQsRUFBOEQsVUFQeEQ7QUFRaEIsV0FBTyxZQUFZLE9BQVosQ0FBb0IsS0FBcEIsQ0FBMEIsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUExQixDQVJTO0FBU2hCLFdBQU8scUJBQXFCLE9BVFo7QUFVaEIsc0JBQWtCLFlBQVksT0FBWixDQUFvQixNQUFwQixDQUEyQjtBQVY3QixDQUFwQjs7QUFhQSxRQUFRLFlBQVIsR0FBdUI7QUFDbkIsY0FBVSxJQUFJLHNCQUFzQixPQUExQixDQUFrQyxFQUFFLFdBQVcsVUFBYixFQUFsQyxDQURTO0FBRW5CLHNCQUFrQjtBQUZDLENBQXZCOztBQUtBLFFBQVEsT0FBUixHQUFrQixPQUFsQjtBQUNBLE9BQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakI7OztBQ2hIQTs7OztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN6QyxXQUFPO0FBRGtDLENBQTdDOztBQUlBLElBQUksV0FBVyxPQUFPLE1BQVAsSUFBaUIsVUFBVSxNQUFWLEVBQWtCO0FBQUUsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFBRSxZQUFJLFNBQVMsVUFBVSxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFBRSxnQkFBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsTUFBckMsRUFBNkMsR0FBN0MsQ0FBSixFQUF1RDtBQUFFLHVCQUFPLEdBQVAsSUFBYyxPQUFPLEdBQVAsQ0FBZDtBQUE0QjtBQUFFO0FBQUUsS0FBQyxPQUFPLE1BQVA7QUFBZ0IsQ0FBaFE7O0FBRUEsSUFBSSxlQUFlLFlBQVk7QUFBRSxhQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQUUsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQU0sTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFBRSxnQkFBSSxhQUFhLE1BQU0sQ0FBTixDQUFqQixDQUEyQixXQUFXLFVBQVgsR0FBd0IsV0FBVyxVQUFYLElBQXlCLEtBQWpELENBQXdELFdBQVcsWUFBWCxHQUEwQixJQUExQixDQUFnQyxJQUFJLFdBQVcsVUFBZixFQUEyQixXQUFXLFFBQVgsR0FBc0IsSUFBdEIsQ0FBNEIsT0FBTyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLFdBQVcsR0FBekMsRUFBOEMsVUFBOUM7QUFBNEQ7QUFBRSxLQUFDLE9BQU8sVUFBVSxXQUFWLEVBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsWUFBSSxVQUFKLEVBQWdCLGlCQUFpQixZQUFZLFNBQTdCLEVBQXdDLFVBQXhDLEVBQXFELElBQUksV0FBSixFQUFpQixpQkFBaUIsV0FBakIsRUFBOEIsV0FBOUIsRUFBNEMsT0FBTyxXQUFQO0FBQXFCLEtBQWhOO0FBQW1OLENBQTloQixFQUFuQjs7QUFFQSxJQUFJLGlCQUFpQixPQUFqQixrQkFBSjs7QUFFQSxJQUFJLGtCQUFrQix1QkFBdUIsY0FBdkIsQ0FBdEI7O0FBRUEsSUFBSSxhQUFhLE9BQWIsY0FBSjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksdUJBQXVCLE9BQXZCLHlCQUFKOztBQUVBLElBQUksd0JBQXdCLHVCQUF1QixvQkFBdkIsQ0FBNUI7O0FBRUEsSUFBSSxzQkFBc0IsT0FBdEIsd0JBQUo7O0FBRUEsSUFBSSx1QkFBdUIsdUJBQXVCLG1CQUF2QixDQUEzQjs7QUFFQSxJQUFJLFFBQVEsUUFBUSxRQUFSLENBQVo7O0FBRUEsSUFBSSxTQUFTLHVCQUF1QixLQUF2QixDQUFiOztBQUVBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjs7QUFFQSxJQUFJLFlBQVksdUJBQXVCLFFBQXZCLENBQWhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixTQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXRCLENBQUosRUFBd0M7QUFBRSxjQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU47QUFBMkQ7QUFBRTs7QUFFekosU0FBUywwQkFBVCxDQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxFQUFnRDtBQUFFLFFBQUksQ0FBQyxJQUFMLEVBQVc7QUFBRSxjQUFNLElBQUksY0FBSixDQUFtQiwyREFBbkIsQ0FBTjtBQUF3RixLQUFDLE9BQU8sU0FBUyxRQUFPLElBQVAseUNBQU8sSUFBUCxPQUFnQixRQUFoQixJQUE0QixPQUFPLElBQVAsS0FBZ0IsVUFBckQsSUFBbUUsSUFBbkUsR0FBMEUsSUFBakY7QUFBd0Y7O0FBRWhQLFNBQVMsU0FBVCxDQUFtQixRQUFuQixFQUE2QixVQUE3QixFQUF5QztBQUFFLFFBQUksT0FBTyxVQUFQLEtBQXNCLFVBQXRCLElBQW9DLGVBQWUsSUFBdkQsRUFBNkQ7QUFBRSxjQUFNLElBQUksU0FBSixDQUFjLHFFQUFvRSxVQUFwRSx5Q0FBb0UsVUFBcEUsRUFBZCxDQUFOO0FBQXNHLEtBQUMsU0FBUyxTQUFULEdBQXFCLE9BQU8sTUFBUCxDQUFjLGNBQWMsV0FBVyxTQUF2QyxFQUFrRCxFQUFFLGFBQWEsRUFBRSxPQUFPLFFBQVQsRUFBbUIsWUFBWSxLQUEvQixFQUFzQyxVQUFVLElBQWhELEVBQXNELGNBQWMsSUFBcEUsRUFBZixFQUFsRCxDQUFyQixDQUFxSyxJQUFJLFVBQUosRUFBZ0IsT0FBTyxjQUFQLEdBQXdCLE9BQU8sY0FBUCxDQUFzQixRQUF0QixFQUFnQyxVQUFoQyxDQUF4QixHQUFzRSxTQUFTLFNBQVQsR0FBcUIsVUFBM0Y7QUFBd0c7O0FBRTllLElBQUksYUFBYSxpRkFBakI7O0FBRUEsU0FBUyxPQUFULENBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CLFFBQUksU0FBUyxTQUFiLEVBQXdCO0FBQ3BCLGlCQUFTLFNBQVQsQ0FBbUIsS0FBbkI7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFJO0FBQ0EsbUJBQU8sWUFBUCxHQUFzQixlQUF0QjtBQUNBO0FBQ0gsU0FIRCxDQUdFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFDakI7QUFDSjs7QUFFRCxJQUFJLFlBQVksVUFBVSxnQkFBVixFQUE0QjtBQUN4QyxjQUFVLFNBQVYsRUFBcUIsZ0JBQXJCOztBQUVBLGFBQVMsU0FBVCxHQUFxQjtBQUNqQix3QkFBZ0IsSUFBaEIsRUFBc0IsU0FBdEI7O0FBRUEsWUFBSSxRQUFRLDJCQUEyQixJQUEzQixFQUFpQyxDQUFDLFVBQVUsU0FBVixJQUF1QixPQUFPLGNBQVAsQ0FBc0IsU0FBdEIsQ0FBeEIsRUFBMEQsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBakMsQ0FBWjs7QUFFQSxjQUFNLFdBQU4sR0FBb0IsTUFBTSxXQUFOLENBQWtCLElBQWxCLENBQXVCLEtBQXZCLENBQXBCO0FBQ0EsY0FBTSxZQUFOLEdBQXFCLE1BQU0sWUFBTixDQUFtQixJQUFuQixDQUF3QixLQUF4QixDQUFyQjtBQUNBLGNBQU0sV0FBTixHQUFvQixNQUFNLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSxjQUFNLFdBQU4sR0FBb0IsTUFBTSxXQUFOLENBQWtCLElBQWxCLENBQXVCLEtBQXZCLENBQXBCO0FBQ0EsY0FBTSxTQUFOLEdBQWtCLE1BQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUFsQjs7QUFFQSxjQUFNLEtBQU4sR0FBYztBQUNWLG9CQUFRLEtBREU7QUFFVixxQkFBUztBQUZDLFNBQWQ7QUFJQSxlQUFPLEtBQVA7QUFDSDs7QUFFRCxpQkFBYSxTQUFiLEVBQXdCLENBQUM7QUFDckIsYUFBSyxtQkFEZ0I7QUFFckIsZUFBTyxTQUFTLGlCQUFULEdBQTZCO0FBQ2hDLGlCQUFLLE9BQUwsQ0FBYSxLQUFLLEtBQWxCLEVBQXlCLEtBQUssS0FBOUI7QUFDQSxxQkFBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLLFNBQTFDO0FBQ0EscUJBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSyxXQUE1QztBQUNBLHFCQUFTLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUssV0FBNUM7QUFDSDtBQVBvQixLQUFELEVBUXJCO0FBQ0MsYUFBSywyQkFETjtBQUVDLGVBQU8sU0FBUyx5QkFBVCxDQUFtQyxLQUFuQyxFQUEwQztBQUM3QyxpQkFBSyxPQUFMLENBQWEsS0FBYixFQUFvQixLQUFLLEtBQXpCO0FBQ0g7QUFKRixLQVJxQixFQWFyQjtBQUNDLGFBQUssc0JBRE47QUFFQyxlQUFPLFNBQVMsb0JBQVQsR0FBZ0M7QUFDbkMscUJBQVMsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBSyxTQUE3QztBQUNBLHFCQUFTLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUssV0FBL0M7QUFDQSxxQkFBUyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLLFdBQS9DO0FBQ0g7QUFORixLQWJxQixFQW9CckI7QUFDQyxhQUFLLGFBRE47QUFFQyxlQUFPLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixnQkFBSSxtQkFBbUIsU0FBUyxFQUFULEVBQWEsS0FBYixFQUFvQixFQUFFLFNBQVMsQ0FBQyxFQUFFLFNBQVMsTUFBTSxPQUFqQixFQUEwQixTQUFTLE1BQU0sT0FBekMsRUFBRCxDQUFYLEVBQXBCLENBQXZCO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixnQkFBbEI7QUFDSDtBQUxGLEtBcEJxQixFQTBCckI7QUFDQyxhQUFLLGNBRE47QUFFQyxlQUFPLFNBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QjtBQUNoQyxnQkFBSSxTQUFTLEtBQUssS0FBbEI7QUFBQSxnQkFDSSxjQUFjLE9BQU8sV0FEekI7QUFBQSxnQkFFSSxnQkFBZ0IsT0FBTyxhQUYzQjtBQUFBLGdCQUdJLFFBQVEsT0FBTyxLQUhuQjs7QUFLQSxnQkFBSSxXQUFKLEVBQWlCO0FBQ2Isd0JBQVEsUUFBUixFQUFrQixNQUFsQjtBQUNBLG9CQUFJLFdBQVcsVUFBVSxVQUFWLEdBQXVCLE1BQU0sT0FBTixDQUFjLENBQWQsRUFBaUIsT0FBeEMsR0FBa0QsTUFBTSxPQUFOLENBQWMsQ0FBZCxFQUFpQixPQUFsRjtBQUNBLG9CQUFJLE9BQU8sYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUNyQztBQUNIO0FBQ0QscUJBQUssUUFBTCxDQUFjO0FBQ1YsNEJBQVEsSUFERTtBQUVWLDhCQUFVO0FBRkEsaUJBQWQ7QUFJSDtBQUNKO0FBbkJGLEtBMUJxQixFQThDckI7QUFDQyxhQUFLLGFBRE47QUFFQyxlQUFPLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixnQkFBSSxtQkFBbUIsU0FBUyxFQUFULEVBQWEsS0FBYixFQUFvQixFQUFFLFNBQVMsQ0FBQyxFQUFFLFNBQVMsTUFBTSxPQUFqQixFQUEwQixTQUFTLE1BQU0sT0FBekMsRUFBRCxDQUFYLEVBQXBCLENBQXZCO0FBQ0EsaUJBQUssV0FBTCxDQUFpQixnQkFBakI7QUFDSDtBQUxGLEtBOUNxQixFQW9EckI7QUFDQyxhQUFLLGFBRE47QUFFQyxlQUFPLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixnQkFBSSxVQUFVLEtBQUssS0FBbkI7QUFBQSxnQkFDSSxjQUFjLFFBQVEsV0FEMUI7QUFBQSxnQkFFSSxVQUFVLFFBQVEsT0FGdEI7QUFBQSxnQkFHSSxVQUFVLFFBQVEsT0FIdEI7QUFBQSxnQkFJSSxXQUFXLFFBQVEsUUFKdkI7QUFBQSxnQkFLSSxRQUFRLFFBQVEsS0FMcEI7QUFNQSxnQkFBSSxTQUFTLEtBQUssS0FBbEI7QUFBQSxnQkFDSSxTQUFTLE9BQU8sTUFEcEI7QUFBQSxnQkFFSSxXQUFXLE9BQU8sUUFGdEI7O0FBSUEsZ0JBQUksZUFBZSxNQUFuQixFQUEyQjtBQUN2Qix3QkFBUSxRQUFSLEVBQWtCLE1BQWxCO0FBQ0Esb0JBQUksaUJBQWlCLEtBQUssS0FBTCxDQUFXLE9BQVgsS0FBdUIsT0FBNUM7QUFDQSxvQkFBSSxNQUFNLGlCQUFpQixLQUFLLEtBQXRCLEdBQThCLEtBQUssS0FBN0M7QUFDQSxvQkFBSSxHQUFKLEVBQVM7QUFDTCx3QkFBSSxPQUFPLGdCQUFnQixPQUFoQixDQUF3QixXQUF4QixDQUFvQyxHQUFwQyxDQUFYOztBQUVBLHdCQUFJLEtBQUsscUJBQVQsRUFBZ0M7QUFDNUIsNEJBQUksUUFBUSxLQUFLLHFCQUFMLEdBQTZCLEtBQXpDO0FBQ0EsNEJBQUksU0FBUyxLQUFLLHFCQUFMLEdBQTZCLE1BQTFDO0FBQ0EsNEJBQUksVUFBVSxVQUFVLFVBQVYsR0FBdUIsTUFBTSxPQUFOLENBQWMsQ0FBZCxFQUFpQixPQUF4QyxHQUFrRCxNQUFNLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLE9BQWpGO0FBQ0EsNEJBQUksT0FBTyxVQUFVLFVBQVYsR0FBdUIsS0FBdkIsR0FBK0IsTUFBMUM7QUFDQSw0QkFBSSxjQUFjLGlCQUFpQixXQUFXLE9BQTVCLEdBQXNDLFVBQVUsUUFBbEU7O0FBRUEsNEJBQUksYUFBYSxPQUFqQjtBQUNBLDRCQUFJLFlBQVksU0FBWixJQUF5QixXQUFXLENBQXhDLEVBQTJDO0FBQ3ZDLGdDQUFJLFVBQVUsS0FBSyxTQUFuQjtBQUNBLGdDQUFJLFVBQVUsVUFBZCxFQUEwQjtBQUN0Qiw2Q0FBYSxRQUFRLHFCQUFSLEdBQWdDLEtBQWhDLEdBQXdDLE9BQXJEO0FBQ0gsNkJBRkQsTUFFTztBQUNILDZDQUFhLFFBQVEscUJBQVIsR0FBZ0MsTUFBaEMsR0FBeUMsT0FBdEQ7QUFDSDtBQUNKOztBQUVELDRCQUFJLFVBQVUsT0FBTyxXQUFyQjs7QUFFQSw0QkFBSSxVQUFVLE9BQWQsRUFBdUI7QUFDbkIsc0NBQVUsT0FBVjtBQUNILHlCQUZELE1BRU8sSUFBSSxZQUFZLFNBQVosSUFBeUIsVUFBVSxVQUF2QyxFQUFtRDtBQUN0RCxzQ0FBVSxVQUFWO0FBQ0gseUJBRk0sTUFFQTtBQUNILGlDQUFLLFFBQUwsQ0FBYztBQUNWLDBDQUFVLE9BREE7QUFFVix5Q0FBUztBQUZDLDZCQUFkO0FBSUg7O0FBRUQsNEJBQUksUUFBSixFQUFjLFNBQVMsT0FBVDtBQUNkLDZCQUFLLFFBQUwsQ0FBYyxFQUFFLGFBQWEsT0FBZixFQUFkO0FBQ0EsNEJBQUksUUFBSixDQUFhLEVBQUUsTUFBTSxPQUFSLEVBQWI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQXhERixLQXBEcUIsRUE2R3JCO0FBQ0MsYUFBSyxXQUROO0FBRUMsZUFBTyxTQUFTLFNBQVQsR0FBcUI7QUFDeEIsZ0JBQUksVUFBVSxLQUFLLEtBQW5CO0FBQUEsZ0JBQ0ksY0FBYyxRQUFRLFdBRDFCO0FBQUEsZ0JBRUksaUJBQWlCLFFBQVEsY0FGN0I7QUFHQSxnQkFBSSxVQUFVLEtBQUssS0FBbkI7QUFBQSxnQkFDSSxTQUFTLFFBQVEsTUFEckI7QUFBQSxnQkFFSSxjQUFjLFFBQVEsV0FGMUI7O0FBSUEsZ0JBQUksZUFBZSxNQUFuQixFQUEyQjtBQUN2QixvQkFBSSxPQUFPLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDdEMsbUNBQWUsV0FBZjtBQUNIO0FBQ0QscUJBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxLQUFWLEVBQWQ7QUFDSDtBQUNKO0FBaEJGLEtBN0dxQixFQThIckI7QUFDQyxhQUFLLFNBRE47QUFFQyxlQUFPLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixLQUF4QixFQUErQjtBQUNsQyxnQkFBSSxVQUFVLEtBQUssS0FBTCxDQUFXLE9BQXpCOztBQUVBLGdCQUFJLE1BQU0sWUFBWSxPQUFaLEdBQXNCLEtBQUssS0FBM0IsR0FBbUMsS0FBSyxLQUFsRDtBQUNBLGdCQUFJLFVBQVUsS0FBSyxDQUFuQjtBQUNBLGdCQUFJLEdBQUosRUFBUztBQUNMLDBCQUFVLE1BQU0sSUFBTixJQUFjLFNBQVMsTUFBTSxXQUE3QixJQUE0QyxNQUFNLFdBQWxELElBQWlFLE1BQU0sT0FBakY7QUFDQSxvQkFBSSxRQUFKLENBQWE7QUFDVCwwQkFBTTtBQURHLGlCQUFiO0FBR0Esb0JBQUksTUFBTSxJQUFOLEtBQWUsTUFBTSxXQUF6QixFQUFzQztBQUNsQyx5QkFBSyxRQUFMLENBQWM7QUFDVixxQ0FBYTtBQURILHFCQUFkO0FBR0g7QUFDSjtBQUNKO0FBbEJGLEtBOUhxQixFQWlKckI7QUFDQyxhQUFLLFFBRE47QUFFQyxlQUFPLFNBQVMsTUFBVCxHQUFrQjtBQUNyQixnQkFBSSxTQUFTLElBQWI7O0FBRUEsZ0JBQUksVUFBVSxLQUFLLEtBQW5CO0FBQUEsZ0JBQ0ksY0FBYyxRQUFRLFdBRDFCO0FBQUEsZ0JBRUksV0FBVyxRQUFRLFFBRnZCO0FBQUEsZ0JBR0ksWUFBWSxRQUFRLFNBSHhCO0FBQUEsZ0JBSUksY0FBYyxRQUFRLFdBSjFCO0FBQUEsZ0JBS0ksVUFBVSxRQUFRLE9BTHRCO0FBQUEsZ0JBTUksaUJBQWlCLFFBQVEsY0FON0I7QUFBQSxnQkFPSSx1QkFBdUIsUUFBUSxvQkFQbkM7QUFBQSxnQkFRSSxZQUFZLFFBQVEsU0FSeEI7QUFBQSxnQkFTSSxrQkFBa0IsUUFBUSxVQVQ5QjtBQUFBLGdCQVVJLGtCQUFrQixRQUFRLFVBVjlCO0FBQUEsZ0JBV0ksVUFBVSxRQUFRLE9BWHRCO0FBQUEsZ0JBWUksV0FBVyxRQUFRLFFBWnZCO0FBQUEsZ0JBYUksbUJBQW1CLFFBQVEsZ0JBYi9CO0FBQUEsZ0JBY0ksZUFBZSxRQUFRLFlBZDNCO0FBQUEsZ0JBZUksT0FBTyxRQUFRLElBZm5CO0FBQUEsZ0JBZ0JJLFFBQVEsUUFBUSxLQWhCcEI7QUFBQSxnQkFpQkksYUFBYSxRQUFRLEtBakJ6Qjs7QUFtQkEsZ0JBQUksZ0JBQWdCLGNBQWMsRUFBZCxHQUFtQixVQUF2Qzs7QUFFQSxnQkFBSSxRQUFRLFNBQVMsRUFBVCxFQUFhLGNBQWMsRUFBM0IsRUFBK0I7QUFDdkMseUJBQVMsTUFEOEI7QUFFdkMsc0JBQU0sQ0FGaUM7QUFHdkMsd0JBQVEsTUFIK0I7QUFJdkMsMEJBQVUsVUFKNkI7QUFLdkMseUJBQVMsTUFMOEI7QUFNdkMsMEJBQVUsUUFONkI7QUFPdkMsK0JBQWUsTUFQd0I7QUFRdkMsa0NBQWtCLE1BUnFCO0FBU3ZDLDhCQUFjLE1BVHlCO0FBVXZDLDRCQUFZO0FBVjJCLGFBQS9CLENBQVo7O0FBYUEsZ0JBQUksVUFBVSxVQUFkLEVBQTBCO0FBQ3RCLHlCQUFTLEtBQVQsRUFBZ0I7QUFDWixtQ0FBZSxLQURIO0FBRVosMEJBQU0sQ0FGTTtBQUdaLDJCQUFPO0FBSEssaUJBQWhCO0FBS0gsYUFORCxNQU1PO0FBQ0gseUJBQVMsS0FBVCxFQUFnQjtBQUNaLDRCQUFRLENBREk7QUFFWixtQ0FBZSxRQUZIO0FBR1osK0JBQVcsTUFIQztBQUlaLHlCQUFLLENBSk87QUFLWiwyQkFBTztBQUxLLGlCQUFoQjtBQU9IOztBQUVELGdCQUFJLFVBQVUsQ0FBQyxXQUFELEVBQWMsU0FBZCxFQUF5QixLQUF6QixFQUFnQyxhQUFoQyxDQUFkO0FBQ0EsZ0JBQUksYUFBYSxTQUFTLE1BQVQsQ0FBZ0IsU0FBUyxFQUFULEVBQWEsYUFBYSxFQUExQixFQUE4QixtQkFBbUIsRUFBakQsQ0FBaEIsQ0FBakI7QUFDQSxnQkFBSSxhQUFhLFNBQVMsTUFBVCxDQUFnQixTQUFTLEVBQVQsRUFBYSxhQUFhLEVBQTFCLEVBQThCLG1CQUFtQixFQUFqRCxDQUFoQixDQUFqQjs7QUFFQSxtQkFBTyxnQkFBZ0IsT0FBaEIsQ0FBd0IsYUFBeEIsQ0FDSCxLQURHLEVBRUg7QUFDSSwyQkFBVyxRQUFRLElBQVIsQ0FBYSxHQUFiLENBRGY7QUFFSSxxQkFBSyxTQUFTLEdBQVQsQ0FBYSxJQUFiLEVBQW1CO0FBQ3BCLDJCQUFPLFNBQVAsR0FBbUIsSUFBbkI7QUFDSCxpQkFKTDtBQUtJLHVCQUFPLFNBQVMsTUFBVCxDQUFnQixLQUFoQjtBQUxYLGFBRkcsRUFTSCxnQkFBZ0IsT0FBaEIsQ0FBd0IsYUFBeEIsQ0FDSSxPQUFPLE9BRFgsRUFFSTtBQUNJLDJCQUFXLE9BRGY7QUFFSSxxQkFBSyxPQUZUO0FBR0kscUJBQUssU0FBUyxHQUFULENBQWEsSUFBYixFQUFtQjtBQUNwQiwyQkFBTyxLQUFQLEdBQWUsSUFBZjtBQUNILGlCQUxMO0FBTUksc0JBQU0sWUFBWSxPQUFaLEdBQXNCLFFBQVEsV0FBUixJQUF1QixPQUE3QyxHQUF1RCxTQU5qRTtBQU9JLHVCQUFPLEtBUFg7QUFRSSx1QkFBTztBQVJYLGFBRkosRUFZSSxTQUFTLENBQVQsQ0FaSixDQVRHLEVBdUJILGdCQUFnQixPQUFoQixDQUF3QixhQUF4QixDQUFzQyxVQUFVLE9BQWhELEVBQXlEO0FBQ3JELDJCQUFXLGFBRDBDO0FBRXJELHlCQUFTLGNBRjRDO0FBR3JELCtCQUFlLG9CQUhzQztBQUlyRCw2QkFBYSxLQUFLLFdBSm1DO0FBS3JELDhCQUFjLEtBQUssWUFMa0M7QUFNckQsNEJBQVksS0FBSyxTQU5vQztBQU9yRCxxQkFBSyxTQVBnRDtBQVFyRCxxQkFBSyxTQUFTLEdBQVQsQ0FBYSxJQUFiLEVBQW1CO0FBQ3BCLDJCQUFPLE9BQVAsR0FBaUIsSUFBakI7QUFDSCxpQkFWb0Q7QUFXckQsa0NBQWtCLGdCQVhtQztBQVlyRCx1QkFBTyxLQVo4QztBQWFyRCx1QkFBTyxnQkFBZ0I7QUFiOEIsYUFBekQsQ0F2QkcsRUFzQ0gsZ0JBQWdCLE9BQWhCLENBQXdCLGFBQXhCLENBQ0ksT0FBTyxPQURYLEVBRUk7QUFDSSwyQkFBVyxPQURmO0FBRUkscUJBQUssT0FGVDtBQUdJLHFCQUFLLFNBQVMsR0FBVCxDQUFhLElBQWIsRUFBbUI7QUFDcEIsMkJBQU8sS0FBUCxHQUFlLElBQWY7QUFDSCxpQkFMTDtBQU1JLHNCQUFNLFlBQVksUUFBWixHQUF1QixRQUFRLFdBQVIsSUFBdUIsT0FBOUMsR0FBd0QsU0FObEU7QUFPSSx1QkFBTyxLQVBYO0FBUUksdUJBQU87QUFSWCxhQUZKLEVBWUksU0FBUyxDQUFULENBWkosQ0F0Q0csQ0FBUDtBQXFESDtBQWhIRixLQWpKcUIsQ0FBeEI7O0FBb1FBLFdBQU8sU0FBUDtBQUNILENBMVJlLENBMFJkLGdCQUFnQixPQUFoQixDQUF3QixTQTFSVixDQUFoQjs7QUE0UkEsVUFBVSxTQUFWLEdBQXNCO0FBQ2xCLGlCQUFhLFlBQVksT0FBWixDQUFvQixJQURmO0FBRWxCLGNBQVUsWUFBWSxPQUFaLENBQW9CLE9BQXBCLENBQTRCLFlBQVksT0FBWixDQUFvQixJQUFoRCxFQUFzRCxVQUY5QztBQUdsQixlQUFXLFlBQVksT0FBWixDQUFvQixNQUhiO0FBSWxCLGFBQVMsWUFBWSxPQUFaLENBQW9CLEtBQXBCLENBQTBCLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBMUIsQ0FKUztBQUtsQixhQUFTLFlBQVksT0FBWixDQUFvQixTQUFwQixDQUE4QixDQUFDLFlBQVksT0FBWixDQUFvQixNQUFyQixFQUE2QixZQUFZLE9BQVosQ0FBb0IsTUFBakQsQ0FBOUIsQ0FMUztBQU1sQixhQUFTLFlBQVksT0FBWixDQUFvQixTQUFwQixDQUE4QixDQUFDLFlBQVksT0FBWixDQUFvQixNQUFyQixFQUE2QixZQUFZLE9BQVosQ0FBb0IsTUFBakQsQ0FBOUIsQ0FOUztBQU9sQjtBQUNBLGlCQUFhLFlBQVksT0FBWixDQUFvQixTQUFwQixDQUE4QixDQUFDLFlBQVksT0FBWixDQUFvQixNQUFyQixFQUE2QixZQUFZLE9BQVosQ0FBb0IsTUFBakQsQ0FBOUIsQ0FSSztBQVNsQixVQUFNLFlBQVksT0FBWixDQUFvQixTQUFwQixDQUE4QixDQUFDLFlBQVksT0FBWixDQUFvQixNQUFyQixFQUE2QixZQUFZLE9BQVosQ0FBb0IsTUFBakQsQ0FBOUIsQ0FUWTtBQVVsQixXQUFPLFlBQVksT0FBWixDQUFvQixLQUFwQixDQUEwQixDQUFDLFVBQUQsRUFBYSxZQUFiLENBQTFCLENBVlc7QUFXbEIsbUJBQWUsWUFBWSxPQUFaLENBQW9CLElBWGpCO0FBWWxCLG9CQUFnQixZQUFZLE9BQVosQ0FBb0IsSUFabEI7QUFhbEIsY0FBVSxZQUFZLE9BQVosQ0FBb0IsSUFiWjtBQWNsQixvQkFBZ0IsWUFBWSxPQUFaLENBQW9CLElBZGxCO0FBZWxCLDBCQUFzQixZQUFZLE9BQVosQ0FBb0IsSUFmeEI7QUFnQmxCLGNBQVUsWUFBWSxPQUFaLENBQW9CLFVBQXBCLENBQStCLHNCQUFzQixPQUFyRCxFQUE4RCxVQWhCdEQ7QUFpQmxCLFdBQU8scUJBQXFCLE9BakJWO0FBa0JsQixrQkFBYyxxQkFBcUIsT0FsQmpCO0FBbUJsQixlQUFXLHFCQUFxQixPQW5CZDtBQW9CbEIsZ0JBQVkscUJBQXFCLE9BcEJmO0FBcUJsQixnQkFBWSxxQkFBcUIsT0FyQmY7QUFzQmxCLHNCQUFrQixZQUFZLE9BQVosQ0FBb0I7QUF0QnBCLENBQXRCOztBQXlCQSxVQUFVLFlBQVYsR0FBeUI7QUFDckIsaUJBQWEsSUFEUTtBQUVyQixhQUFTLEVBRlk7QUFHckIsY0FBVSxJQUFJLHNCQUFzQixPQUExQixDQUFrQyxFQUFFLFdBQVcsVUFBYixFQUFsQyxDQUhXO0FBSXJCLGFBQVMsT0FKWTtBQUtyQixXQUFPO0FBTGMsQ0FBekI7O0FBUUEsUUFBUSxPQUFSLEdBQWtCLFNBQWxCO0FBQ0EsT0FBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQjs7O0FDclhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcHpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9pREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAnLi4vbGliL1NwbGl0UGFuZSc7XG5cblxuY29uc3QgU2ltcGxlTmVzdGVkRXhhbXBsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPXs1MH0gbWF4U2l6ZT17MzAwfSBkZWZhdWx0U2l6ZT17MTAwfSBjbGFzc05hbWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgKTtcbn07XG5cbmNvbnN0IEJhc2ljVmVydGljYWxFeGFtcGxlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICApO1xufTtcblxuY29uc3QgQmFzaWNIb3Jpem9udGFsRXhhbXBsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICApO1xufTtcblxuY29uc3QgUGVyY2VudGFnZVZlcnRpY2FsRXhhbXBsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3BsaXRQYW5lIGRlZmF1bHRTaXplPVwiNTAlXCI+XG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICk7XG59O1xuXG5jb25zdCBQZXJjZW50YWdlSG9yaXpvbnRhbEV4YW1wbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNwbGl0UGFuZSBkZWZhdWx0U2l6ZT1cIjUwJVwiIHNwbGl0PVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICApO1xufTtcblxuY29uc3QgVmVydGljYWxseU5lc3RlZEluQ29udGFpbmVyRXhhbXBsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3BsaXRQYW5lIGRlZmF1bHRTaXplPVwiNDAlXCIgc3BsaXQ9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICApO1xufTtcblxuY29uc3QgSG9yaXpvbnRhbGx5TmVzdGVkSW5Db250YWluZXJFeGFtcGxlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTcGxpdFBhbmUgZGVmYXVsdFNpemU9XCI0MCVcIiBzcGxpdD1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgKTtcbn07XG5cbmNvbnN0IE11bHRpcGxlVmVydGljYWxFeGFtcGxlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIGRlZmF1bHRTaXplPVwiMzMlXCI+XG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBkZWZhdWx0U2l6ZT1cIjUwJVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgKTtcbn07XG5cbmNvbnN0IE11bHRpcGxlSG9yaXpvbnRhbEV4YW1wbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjMzJVwiPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjUwJVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgKTtcbn07XG5cbmNvbnN0IFN1YkNvbXBvbmVudEV4YW1wbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+SGVhZGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTaXplPVwiNTAlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBJbmxpbmVTdHlsZUV4YW1wbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVBID0geyBiYWNrZ3JvdW5kOiAnI2VlZScgfTtcbiAgICBjb25zdCBzdHlsZUIgPSB7IGJhY2tncm91bmQ6ICcjYWFhNGJhJyB9O1xuICAgIGNvbnN0IHN0eWxlQyA9IHsgYmFja2dyb3VuZDogJyMwMDAnIH07XG4gICAgY29uc3Qgc3R5bGVEID0geyBwYWRkaW5nOiAnMmVtJywgZm9udFN0eWxlOiAnaXRhbGljJyB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTcGxpdFBhbmVcbiAgICAgICAgICAgIHNwbGl0PVwidmVydGljYWxcIlxuICAgICAgICAgICAgbWluU2l6ZT17NTB9IG1heFNpemU9ezMwMH0gZGVmYXVsdFNpemU9ezEwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgcGFuZTFTdHlsZT17c3R5bGVBfVxuICAgICAgICAgICAgcmVzaXplclN0eWxlPXtzdHlsZUN9PlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBwYW5lU3R5bGU9e3N0eWxlRH0gcGFuZTJTdHlsZT17c3R5bGVCfT5cbiAgICAgICAgICAgICAgICA8ZGl2PkhlbGxvLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4gLi4ud29ybGQuPC9kaXY+XG4gICAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgKTtcbn07XG5cbmNsYXNzIFNuYXBUb1Bvc2l0aW9uRXhhbXBsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0ID0gdGhpcy5oYW5kbGVEcmFnU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnRW5kID0gdGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZyA9IHRoaXMuaGFuZGxlRHJhZy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZURyYWdTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRHJhZ0VuZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaXplOiB1bmRlZmluZWQgfSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGhhbmRsZURyYWcod2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoID49IDMwMCAmJiB3aWR0aCA8PSA0MDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaXplOiAzMDAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPiA0MDAgJiYgd2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2l6ZTogNTAwIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpemU6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZHJvcFdhcm5TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXG4gICAgICAgICAgICBsZWZ0OiAzMDAsXG4gICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjZW50ZXJlZFRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPFNwbGl0UGFuZVxuICAgICAgICAgICAgICAgICAgICBzaXplPXt0aGlzLnN0YXRlLmRyYWdnaW5nID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEcmFnfVxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydGVkPXt0aGlzLmhhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICAgICAgICAgICAgb25EcmFnRmluaXNoZWQ9e3RoaXMuaGFuZGxlRHJhZ0VuZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsIGhlaWdodDogJzEwMCUnLCB6SW5kZXg6IDEsIG9wYWNpdHk6IDAuMSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY2VudGVyZWRUZXh0U3R5bGUsIHsgbGVmdDogMCwgd2lkdGg6IDMwMCB9KX0+XG4gICAgICAgICAgICAgICAgICAgIENhbiBkcm9wIGFueXdoZXJlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY2VudGVyZWRUZXh0U3R5bGUsIGRyb3BXYXJuU3R5bGUpfT5cbiAgICAgICAgICAgICAgICAgICAgV2lsbCBzbmFwIHRvIGVkZ2VzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY2VudGVyZWRUZXh0U3R5bGUsIHsgbGVmdDogNTAwLCB3aWR0aDogJ2NhbGMoMTAwJSAtIDUwMHB4KScgfSl9PlxuICAgICAgICAgICAgICAgICAgICBDYW4gZHJvcCBhbnl3aGVyZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaW1wbGUtbmVzdGVkLWV4YW1wbGUnKSkgcmVuZGVyKDxTaW1wbGVOZXN0ZWRFeGFtcGxlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ltcGxlLW5lc3RlZC1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpYy12ZXJ0aWNhbC1leGFtcGxlJykpIHJlbmRlcig8QmFzaWNWZXJ0aWNhbEV4YW1wbGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpYy12ZXJ0aWNhbC1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpYy1ob3Jpem9udGFsLWV4YW1wbGUnKSkgcmVuZGVyKDxCYXNpY0hvcml6b250YWxFeGFtcGxlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzaWMtaG9yaXpvbnRhbC1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJjZW50YWdlLXZlcnRpY2FsLWV4YW1wbGUnKSkgcmVuZGVyKDxQZXJjZW50YWdlVmVydGljYWxFeGFtcGxlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyY2VudGFnZS12ZXJ0aWNhbC1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJjZW50YWdlLWhvcml6b250YWwtZXhhbXBsZScpKSByZW5kZXIoPFBlcmNlbnRhZ2VIb3Jpem9udGFsRXhhbXBsZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcmNlbnRhZ2UtaG9yaXpvbnRhbC1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0aWNhbGx5LW5lc3RlZC1pbi1jb250YWluZXItZXhhbXBsZScpKSByZW5kZXIoPFZlcnRpY2FsbHlOZXN0ZWRJbkNvbnRhaW5lckV4YW1wbGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0aWNhbGx5LW5lc3RlZC1pbi1jb250YWluZXItZXhhbXBsZScpKTtcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbGx5LW5lc3RlZC1pbi1jb250YWluZXItZXhhbXBsZScpKSByZW5kZXIoPEhvcml6b250YWxseU5lc3RlZEluQ29udGFpbmVyRXhhbXBsZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWxseS1uZXN0ZWQtaW4tY29udGFpbmVyLWV4YW1wbGUnKSk7XG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211bHRpcGxlLXZlcnRpY2FsLWV4YW1wbGUnKSkgcmVuZGVyKDxNdWx0aXBsZVZlcnRpY2FsRXhhbXBsZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211bHRpcGxlLXZlcnRpY2FsLWV4YW1wbGUnKSk7XG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211bHRpcGxlLWhvcml6b250YWwtZXhhbXBsZScpKSByZW5kZXIoPE11bHRpcGxlSG9yaXpvbnRhbEV4YW1wbGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdWx0aXBsZS1ob3Jpem9udGFsLWV4YW1wbGUnKSk7XG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmNvbXBvbmVudC1leGFtcGxlJykpIHJlbmRlcig8U3ViQ29tcG9uZW50RXhhbXBsZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmNvbXBvbmVudC1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmxpbmUtc3R5bGUtZXhhbXBsZScpKSByZW5kZXIoPElubGluZVN0eWxlRXhhbXBsZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubGluZS1zdHlsZS1leGFtcGxlJykpO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbmFwLXRvLXBvc2l0aW9uLWV4YW1wbGUnKSkgcmVuZGVyKDxTbmFwVG9Qb3NpdGlvbkV4YW1wbGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbmFwLXRvLXBvc2l0aW9uLWV4YW1wbGUnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9pbmZlcm5vQ29tcGF0ID0gcmVxdWlyZSgnaW5mZXJuby1jb21wYXQnKTtcblxudmFyIF9pbmZlcm5vQ29tcGF0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZmVybm9Db21wYXQpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyJyk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmxpbmVTdHlsZVByZWZpeGVyKTtcblxudmFyIF9yZWFjdFN0eWxlUHJvcHR5cGUgPSByZXF1aXJlKCdyZWFjdC1zdHlsZS1wcm9wdHlwZScpO1xuXG52YXIgX3JlYWN0U3R5bGVQcm9wdHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFN0eWxlUHJvcHR5cGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBVU0VSX0FHRU5UID0gJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMSkgQXBwbGVXZWJLaXQvNTM3LjIgKEtIVE1MLCBsaWtlIEdlY2tvKSBTYWZhcmkvNTM3LjInO1xuXG52YXIgUGFuZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFBhbmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUGFuZShwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFuZSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBhbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQYW5lKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0geyBzaXplOiBfdGhpcy5wcm9wcy5zaXplIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGFuZSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcHJlZml4ZXIgPSBfcHJvcHMucHJlZml4ZXIsXG4gICAgICAgICAgICAgICAgc3BsaXQgPSBfcHJvcHMuc3BsaXQsXG4gICAgICAgICAgICAgICAgc3R5bGVQcm9wcyA9IF9wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5zdGF0ZS5zaXplO1xuXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IFsnUGFuZScsIHNwbGl0LCBjbGFzc05hbWVdO1xuXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGVQcm9wcyB8fCB7fSwge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS53aWR0aCA9IHNpemU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGUuZmxleCA9ICdub25lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9pbmZlcm5vQ29tcGF0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLCBzdHlsZTogcHJlZml4ZXIucHJlZml4KHN0eWxlKSB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhbmU7XG59KF9pbmZlcm5vQ29tcGF0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWQsXG4gICAgcHJlZml4ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfaW5saW5lU3R5bGVQcmVmaXhlcjIuZGVmYXVsdCkuaXNSZXF1aXJlZCxcbiAgICBzaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgc3BsaXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIHN0eWxlOiBfcmVhY3RTdHlsZVByb3B0eXBlMi5kZWZhdWx0XG59O1xuXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhlcjogbmV3IF9pbmxpbmVTdHlsZVByZWZpeGVyMi5kZWZhdWx0KHsgdXNlckFnZW50OiBVU0VSX0FHRU5UIH0pXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQYW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaW5mZXJub0NvbXBhdCA9IHJlcXVpcmUoJ2luZmVybm8tY29tcGF0Jyk7XG5cbnZhciBfaW5mZXJub0NvbXBhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmZlcm5vQ29tcGF0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlciA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXhlcicpO1xuXG52YXIgX2lubGluZVN0eWxlUHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5saW5lU3R5bGVQcmVmaXhlcik7XG5cbnZhciBfcmVhY3RTdHlsZVByb3B0eXBlID0gcmVxdWlyZSgncmVhY3Qtc3R5bGUtcHJvcHR5cGUnKTtcblxudmFyIF9yZWFjdFN0eWxlUHJvcHR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RTdHlsZVByb3B0eXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVVNFUl9BR0VOVCA9ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCA2LjEpIEFwcGxlV2ViS2l0LzUzNy4yIChLSFRNTCwgbGlrZSBHZWNrbykgU2FmYXJpLzUzNy4yJztcblxudmFyIFJlc2l6ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZXNpemVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJlc2l6ZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNpemVyKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlc2l6ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZXNpemVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlc2l6ZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIF9vbkNsaWNrID0gX3Byb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgX29uRG91YmxlQ2xpY2sgPSBfcHJvcHMub25Eb3VibGVDbGljayxcbiAgICAgICAgICAgICAgICBfb25Nb3VzZURvd24gPSBfcHJvcHMub25Nb3VzZURvd24sXG4gICAgICAgICAgICAgICAgX29uVG91Y2hFbmQgPSBfcHJvcHMub25Ub3VjaEVuZCxcbiAgICAgICAgICAgICAgICBfb25Ub3VjaFN0YXJ0ID0gX3Byb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICAgICAgICBwcmVmaXhlciA9IF9wcm9wcy5wcmVmaXhlcixcbiAgICAgICAgICAgICAgICByZXNpemVyQ2xhc3NOYW1lID0gX3Byb3BzLnJlc2l6ZXJDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc3BsaXQgPSBfcHJvcHMuc3BsaXQsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gW3Jlc2l6ZXJDbGFzc05hbWUsIHNwbGl0LCBjbGFzc05hbWVdO1xuXG4gICAgICAgICAgICByZXR1cm4gX2luZmVybm9Db21wYXQyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBwcmVmaXhlci5wcmVmaXgoc3R5bGUpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX29uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIF9vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBfb25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljayhldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX29uRG91YmxlQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfb25Eb3VibGVDbGljayhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZXNpemVyO1xufShfaW5mZXJub0NvbXBhdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5SZXNpemVyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uRG91YmxlQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRvdWNoRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwcmVmaXhlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9pbmxpbmVTdHlsZVByZWZpeGVyMi5kZWZhdWx0KS5pc1JlcXVpcmVkLFxuICAgIHNwbGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgICBzdHlsZTogX3JlYWN0U3R5bGVQcm9wdHlwZTIuZGVmYXVsdCxcbiAgICByZXNpemVyQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5SZXNpemVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhlcjogbmV3IF9pbmxpbmVTdHlsZVByZWZpeGVyMi5kZWZhdWx0KHsgdXNlckFnZW50OiBVU0VSX0FHRU5UIH0pLFxuICAgIHJlc2l6ZXJDbGFzc05hbWU6ICdSZXNpemVyJ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXplcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2luZmVybm9Db21wYXQgPSByZXF1aXJlKCdpbmZlcm5vLWNvbXBhdCcpO1xuXG52YXIgX2luZmVybm9Db21wYXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5mZXJub0NvbXBhdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2lubGluZVN0eWxlUHJlZml4ZXIgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXInKTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lubGluZVN0eWxlUHJlZml4ZXIpO1xuXG52YXIgX3JlYWN0U3R5bGVQcm9wdHlwZSA9IHJlcXVpcmUoJ3JlYWN0LXN0eWxlLXByb3B0eXBlJyk7XG5cbnZhciBfcmVhY3RTdHlsZVByb3B0eXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0U3R5bGVQcm9wdHlwZSk7XG5cbnZhciBfUGFuZSA9IHJlcXVpcmUoJy4vUGFuZScpO1xuXG52YXIgX1BhbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZSk7XG5cbnZhciBfUmVzaXplciA9IHJlcXVpcmUoJy4vUmVzaXplcicpO1xuXG52YXIgX1Jlc2l6ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzaXplcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFVTRVJfQUdFTlQgPSAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xKSBBcHBsZVdlYktpdC81MzcuMiAoS0hUTUwsIGxpa2UgR2Vja28pIFNhZmFyaS81MzcuMic7XG5cbmZ1bmN0aW9uIHVuRm9jdXMoZG9jdW1lbnQsIHdpbmRvdykge1xuICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbn1cblxudmFyIFNwbGl0UGFuZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNwbGl0UGFuZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTcGxpdFBhbmUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcGxpdFBhbmUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTcGxpdFBhbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTcGxpdFBhbmUpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBfdGhpcy5vblRvdWNoU3RhcnQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTW91c2VNb3ZlID0gX3RoaXMub25Nb3VzZU1vdmUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gX3RoaXMub25Ub3VjaE1vdmUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF90aGlzKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICByZXNpemVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNwbGl0UGFuZSwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNpemUodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNpemUocHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlRG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50V2l0aFRvdWNoZXMgPSBfZXh0ZW5kcyh7fSwgZXZlbnQsIHsgdG91Y2hlczogW3sgY2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WSB9XSB9KTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50V2l0aFRvdWNoZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblRvdWNoU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF9wcm9wcy5hbGxvd1Jlc2l6ZSxcbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydGVkID0gX3Byb3BzLm9uRHJhZ1N0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgc3BsaXQgPSBfcHJvcHMuc3BsaXQ7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1Jlc2l6ZSkge1xuICAgICAgICAgICAgICAgIHVuRm9jdXMoZG9jdW1lbnQsIHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkRyYWdTdGFydGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRXaXRoVG91Y2hlcyA9IF9leHRlbmRzKHt9LCBldmVudCwgeyB0b3VjaGVzOiBbeyBjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZIH1dIH0pO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoTW92ZShldmVudFdpdGhUb3VjaGVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Ub3VjaE1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF9wcm9wczIuYWxsb3dSZXNpemUsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZSA9IF9wcm9wczIubWF4U2l6ZSxcbiAgICAgICAgICAgICAgICBtaW5TaXplID0gX3Byb3BzMi5taW5TaXplLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICBzcGxpdCA9IF9wcm9wczIuc3BsaXQ7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBfc3RhdGUuYWN0aXZlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gX3N0YXRlLnBvc2l0aW9uO1xuXG4gICAgICAgICAgICBpZiAoYWxsb3dSZXNpemUgJiYgYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdW5Gb2N1cyhkb2N1bWVudCwgd2luZG93KTtcbiAgICAgICAgICAgICAgICB2YXIgaXNQcmltYXJ5Rmlyc3QgPSB0aGlzLnByb3BzLnByaW1hcnkgPT09ICdmaXJzdCc7XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IGlzUHJpbWFyeUZpcnN0ID8gdGhpcy5wYW5lMSA6IHRoaXMucGFuZTI7XG4gICAgICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IF9pbmZlcm5vQ29tcGF0Mi5kZWZhdWx0LmZpbmRET01Ob2RlKHJlZik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyB3aWR0aCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IGlzUHJpbWFyeUZpcnN0ID8gcG9zaXRpb24gLSBjdXJyZW50IDogY3VycmVudCAtIHBvc2l0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TWF4U2l6ZSA9IG1heFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4U2l6ZSAhPT0gdW5kZWZpbmVkICYmIG1heFNpemUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxQYW5lID0gdGhpcy5zcGxpdFBhbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01heFNpemUgPSBzcGxQYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgbWF4U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNYXhTaXplID0gc3BsUGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyBtYXhTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NpemUgPSBzaXplIC0gbmV3UG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdTaXplIDwgbWluU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBtaW5TaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXhTaXplICE9PSB1bmRlZmluZWQgJiYgbmV3U2l6ZSA+IG5ld01heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gbmV3TWF4U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UobmV3U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dlZFNpemU6IG5ld1NpemUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoeyBzaXplOiBuZXdTaXplIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlVXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGFsbG93UmVzaXplID0gX3Byb3BzMy5hbGxvd1Jlc2l6ZSxcbiAgICAgICAgICAgICAgICBvbkRyYWdGaW5pc2hlZCA9IF9wcm9wczMub25EcmFnRmluaXNoZWQ7XG4gICAgICAgICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gX3N0YXRlMi5hY3RpdmUsXG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNpemUgPSBfc3RhdGUyLmRyYWdnZWRTaXplO1xuXG4gICAgICAgICAgICBpZiAoYWxsb3dSZXNpemUgJiYgYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkRyYWdGaW5pc2hlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBvbkRyYWdGaW5pc2hlZChkcmFnZ2VkU2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRTaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNpemUocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgcHJpbWFyeSA9IHRoaXMucHJvcHMucHJpbWFyeTtcblxuICAgICAgICAgICAgdmFyIHJlZiA9IHByaW1hcnkgPT09ICdmaXJzdCcgPyB0aGlzLnBhbmUxIDogdGhpcy5wYW5lMjtcbiAgICAgICAgICAgIHZhciBuZXdTaXplID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgIG5ld1NpemUgPSBwcm9wcy5zaXplIHx8IHN0YXRlICYmIHN0YXRlLmRyYWdnZWRTaXplIHx8IHByb3BzLmRlZmF1bHRTaXplIHx8IHByb3BzLm1pblNpemU7XG4gICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3U2l6ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zaXplICE9PSBzdGF0ZS5kcmFnZ2VkU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRTaXplOiBuZXdTaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgYWxsb3dSZXNpemUgPSBfcHJvcHM0LmFsbG93UmVzaXplLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzNC5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2l6ZSA9IF9wcm9wczQuZGVmYXVsdFNpemUsXG4gICAgICAgICAgICAgICAgbWluU2l6ZSA9IF9wcm9wczQubWluU2l6ZSxcbiAgICAgICAgICAgICAgICBvblJlc2l6ZXJDbGljayA9IF9wcm9wczQub25SZXNpemVyQ2xpY2ssXG4gICAgICAgICAgICAgICAgb25SZXNpemVyRG91YmxlQ2xpY2sgPSBfcHJvcHM0Lm9uUmVzaXplckRvdWJsZUNsaWNrLFxuICAgICAgICAgICAgICAgIHBhbmVTdHlsZSA9IF9wcm9wczQucGFuZVN0eWxlLFxuICAgICAgICAgICAgICAgIHBhbmUxU3R5bGVQcm9wcyA9IF9wcm9wczQucGFuZTFTdHlsZSxcbiAgICAgICAgICAgICAgICBwYW5lMlN0eWxlUHJvcHMgPSBfcHJvcHM0LnBhbmUyU3R5bGUsXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IF9wcm9wczQucHJpbWFyeSxcbiAgICAgICAgICAgICAgICBwcmVmaXhlciA9IF9wcm9wczQucHJlZml4ZXIsXG4gICAgICAgICAgICAgICAgcmVzaXplckNsYXNzTmFtZSA9IF9wcm9wczQucmVzaXplckNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICByZXNpemVyU3R5bGUgPSBfcHJvcHM0LnJlc2l6ZXJTdHlsZSxcbiAgICAgICAgICAgICAgICBzaXplID0gX3Byb3BzNC5zaXplLFxuICAgICAgICAgICAgICAgIHNwbGl0ID0gX3Byb3BzNC5zcGxpdCxcbiAgICAgICAgICAgICAgICBzdHlsZVByb3BzID0gX3Byb3BzNC5zdHlsZTtcblxuICAgICAgICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSBhbGxvd1Jlc2l6ZSA/ICcnIDogJ2Rpc2FibGVkJztcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlUHJvcHMgfHwge30sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbXNVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9leHRlbmRzKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBbJ1NwbGl0UGFuZScsIGNsYXNzTmFtZSwgc3BsaXQsIGRpc2FibGVkQ2xhc3NdO1xuICAgICAgICAgICAgdmFyIHBhbmUxU3R5bGUgPSBwcmVmaXhlci5wcmVmaXgoX2V4dGVuZHMoe30sIHBhbmVTdHlsZSB8fCB7fSwgcGFuZTFTdHlsZVByb3BzIHx8IHt9KSk7XG4gICAgICAgICAgICB2YXIgcGFuZTJTdHlsZSA9IHByZWZpeGVyLnByZWZpeChfZXh0ZW5kcyh7fSwgcGFuZVN0eWxlIHx8IHt9LCBwYW5lMlN0eWxlUHJvcHMgfHwge30pKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9pbmZlcm5vQ29tcGF0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuc3BsaXRQYW5lID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHByZWZpeGVyLnByZWZpeChzdHlsZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF9pbmZlcm5vQ29tcGF0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIF9QYW5lMi5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQYW5lMScsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdwYW5lMScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnBhbmUxID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBwcmltYXJ5ID09PSAnZmlyc3QnID8gc2l6ZSB8fCBkZWZhdWx0U2l6ZSB8fCBtaW5TaXplIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQ6IHNwbGl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHBhbmUxU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9pbmZlcm5vQ29tcGF0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Jlc2l6ZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBkaXNhYmxlZENsYXNzLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBvblJlc2l6ZXJDbGljayxcbiAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljazogb25SZXNpemVyRG91YmxlQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVzaXplcicsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZXNpemVyID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplckNsYXNzTmFtZTogcmVzaXplckNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3BsaXQ6IHNwbGl0LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogcmVzaXplclN0eWxlIHx8IHt9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2luZmVybm9Db21wYXQyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgX1BhbmUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BhbmUyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3BhbmUyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucGFuZTIgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHByaW1hcnkgPT09ICdzZWNvbmQnID8gc2l6ZSB8fCBkZWZhdWx0U2l6ZSB8fCBtaW5TaXplIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQ6IHNwbGl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHBhbmUyU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNwbGl0UGFuZTtcbn0oX2luZmVybm9Db21wYXQyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuU3BsaXRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICBhbGxvd1Jlc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlKS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcHJpbWFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2ZpcnN0JywgJ3NlY29uZCddKSxcbiAgICBtaW5TaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgbWF4U2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlc1xuICAgIGRlZmF1bHRTaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHNwbGl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgICBvbkRyYWdTdGFydGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25EcmFnRmluaXNoZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uUmVzaXplckNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25SZXNpemVyRG91YmxlQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBwcmVmaXhlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9pbmxpbmVTdHlsZVByZWZpeGVyMi5kZWZhdWx0KS5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBfcmVhY3RTdHlsZVByb3B0eXBlMi5kZWZhdWx0LFxuICAgIHJlc2l6ZXJTdHlsZTogX3JlYWN0U3R5bGVQcm9wdHlwZTIuZGVmYXVsdCxcbiAgICBwYW5lU3R5bGU6IF9yZWFjdFN0eWxlUHJvcHR5cGUyLmRlZmF1bHQsXG4gICAgcGFuZTFTdHlsZTogX3JlYWN0U3R5bGVQcm9wdHlwZTIuZGVmYXVsdCxcbiAgICBwYW5lMlN0eWxlOiBfcmVhY3RTdHlsZVByb3B0eXBlMi5kZWZhdWx0LFxuICAgIHJlc2l6ZXJDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59O1xuXG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIGFsbG93UmVzaXplOiB0cnVlLFxuICAgIG1pblNpemU6IDUwLFxuICAgIHByZWZpeGVyOiBuZXcgX2lubGluZVN0eWxlUHJlZml4ZXIyLmRlZmF1bHQoeyB1c2VyQWdlbnQ6IFVTRVJfQUdFTlQgfSksXG4gICAgcHJpbWFyeTogJ2ZpcnN0JyxcbiAgICBzcGxpdDogJ3ZlcnRpY2FsJ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3BsaXRQYW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyohXG4gKiBCb3dzZXIgLSBhIGJyb3dzZXIgZGV0ZWN0b3JcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvYm93c2VyXG4gKiBNSVQgTGljZW5zZSB8IChjKSBEdXN0aW4gRGlheiAyMDE1XG4gKi9cblxuIWZ1bmN0aW9uIChyb290LCBuYW1lLCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKG5hbWUsIGRlZmluaXRpb24pXG4gIGVsc2Ugcm9vdFtuYW1lXSA9IGRlZmluaXRpb24oKVxufSh0aGlzLCAnYm93c2VyJywgZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICAqIFNlZSB1c2VyYWdlbnRzLmpzIGZvciBleGFtcGxlcyBvZiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgKi9cblxuICB2YXIgdCA9IHRydWVcblxuICBmdW5jdGlvbiBkZXRlY3QodWEpIHtcblxuICAgIGZ1bmN0aW9uIGdldEZpcnN0TWF0Y2gocmVnZXgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHVhLm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsxXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Vjb25kTWF0Y2gocmVnZXgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHVhLm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsyXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGlvc2RldmljZSA9IGdldEZpcnN0TWF0Y2goLyhpcG9kfGlwaG9uZXxpcGFkKS9pKS50b0xvd2VyQ2FzZSgpXG4gICAgICAsIGxpa2VBbmRyb2lkID0gL2xpa2UgYW5kcm9pZC9pLnRlc3QodWEpXG4gICAgICAsIGFuZHJvaWQgPSAhbGlrZUFuZHJvaWQgJiYgL2FuZHJvaWQvaS50ZXN0KHVhKVxuICAgICAgLCBuZXh1c01vYmlsZSA9IC9uZXh1c1xccypbMC02XVxccyovaS50ZXN0KHVhKVxuICAgICAgLCBuZXh1c1RhYmxldCA9ICFuZXh1c01vYmlsZSAmJiAvbmV4dXNcXHMqWzAtOV0rL2kudGVzdCh1YSlcbiAgICAgICwgY2hyb21lb3MgPSAvQ3JPUy8udGVzdCh1YSlcbiAgICAgICwgc2lsayA9IC9zaWxrL2kudGVzdCh1YSlcbiAgICAgICwgc2FpbGZpc2ggPSAvc2FpbGZpc2gvaS50ZXN0KHVhKVxuICAgICAgLCB0aXplbiA9IC90aXplbi9pLnRlc3QodWEpXG4gICAgICAsIHdlYm9zID0gLyh3ZWJ8aHB3KW9zL2kudGVzdCh1YSlcbiAgICAgICwgd2luZG93c3Bob25lID0gL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVhKVxuICAgICAgLCBzYW1zdW5nQnJvd3NlciA9IC9TYW1zdW5nQnJvd3Nlci9pLnRlc3QodWEpXG4gICAgICAsIHdpbmRvd3MgPSAhd2luZG93c3Bob25lICYmIC93aW5kb3dzL2kudGVzdCh1YSlcbiAgICAgICwgbWFjID0gIWlvc2RldmljZSAmJiAhc2lsayAmJiAvbWFjaW50b3NoL2kudGVzdCh1YSlcbiAgICAgICwgbGludXggPSAhYW5kcm9pZCAmJiAhc2FpbGZpc2ggJiYgIXRpemVuICYmICF3ZWJvcyAmJiAvbGludXgvaS50ZXN0KHVhKVxuICAgICAgLCBlZGdlVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2VkZ2VcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICAsIHZlcnNpb25JZGVudGlmaWVyID0gZ2V0Rmlyc3RNYXRjaCgvdmVyc2lvblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdGFibGV0ID0gL3RhYmxldC9pLnRlc3QodWEpXG4gICAgICAsIG1vYmlsZSA9ICF0YWJsZXQgJiYgL1teLV1tb2JpL2kudGVzdCh1YSlcbiAgICAgICwgeGJveCA9IC94Ym94L2kudGVzdCh1YSlcbiAgICAgICwgcmVzdWx0XG5cbiAgICBpZiAoL29wZXJhL2kudGVzdCh1YSkpIHtcbiAgICAgIC8vICBhbiBvbGQgT3BlcmFcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhJ1xuICAgICAgLCBvcGVyYTogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzpvcGVyYXxvcHJ8b3Bpb3MpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvb3ByfG9waW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIC8vIGEgbmV3IE9wZXJhXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdPcGVyYSdcbiAgICAgICAgLCBvcGVyYTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om9wcnxvcGlvcylbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL1NhbXN1bmdCcm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhbXN1bmcgSW50ZXJuZXQgZm9yIEFuZHJvaWQnXG4gICAgICAgICwgc2Ftc3VuZ0Jyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzpTYW1zdW5nQnJvd3NlcilbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2NvYXN0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhIENvYXN0J1xuICAgICAgICAsIGNvYXN0OiB0XG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86Y29hc3QpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC95YWJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnWWFuZGV4IEJyb3dzZXInXG4gICAgICAsIHlhbmRleGJyb3dzZXI6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86eWFicm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdWNicm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiAnVUMgQnJvd3NlcidcbiAgICAgICAgLCB1Y2Jyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzp1Y2Jyb3dzZXIpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL214aW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01heHRob24nXG4gICAgICAgICwgbWF4dGhvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om14aW9zKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9lcGlwaGFueS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdFcGlwaGFueSdcbiAgICAgICAgLCBlcGlwaGFueTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmVwaXBoYW55KVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9wdWZmaW4vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUHVmZmluJ1xuICAgICAgICAsIHB1ZmZpbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnB1ZmZpbilbXFxzXFwvXShcXGQrKD86XFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2xlaXBuaXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2xlaXBuaXInXG4gICAgICAgICwgc2xlaXBuaXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpzbGVpcG5pcilbXFxzXFwvXShcXGQrKD86XFwuXFxkKykrKS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvay1tZWxlb24vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnSy1NZWxlb24nXG4gICAgICAgICwga01lbGVvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmstbWVsZW9uKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvd3NwaG9uZSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgd2luZG93c3Bob25lOiB0XG4gICAgICB9XG4gICAgICBpZiAoZWRnZVZlcnNpb24pIHtcbiAgICAgICAgcmVzdWx0Lm1zZWRnZSA9IHRcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tc2llID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2llbW9iaWxlXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvbXNpZXx0cmlkZW50L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0ludGVybmV0IEV4cGxvcmVyJ1xuICAgICAgLCBtc2llOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om1zaWUgfHJ2OikoXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaHJvbWVvcykge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQ2hyb21lJ1xuICAgICAgLCBjaHJvbWVvczogdFxuICAgICAgLCBjaHJvbWVCb29rOiB0XG4gICAgICAsIGNocm9tZTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvY2hyb21lLis/IGVkZ2UvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTWljcm9zb2Z0IEVkZ2UnXG4gICAgICAsIG1zZWRnZTogdFxuICAgICAgLCB2ZXJzaW9uOiBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdml2YWxkaS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdWaXZhbGRpJ1xuICAgICAgICAsIHZpdmFsZGk6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC92aXZhbGRpXFwvKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzYWlsZmlzaCkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2FpbGZpc2gnXG4gICAgICAsIHNhaWxmaXNoOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3NhaWxmaXNoXFxzP2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zZWFtb25rZXlcXC8vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2VhTW9ua2V5J1xuICAgICAgLCBzZWFtb25rZXk6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2VhbW9ua2V5XFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvZmlyZWZveHxpY2V3ZWFzZWx8Znhpb3MvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnRmlyZWZveCdcbiAgICAgICwgZmlyZWZveDogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpmaXJlZm94fGljZXdlYXNlbHxmeGlvcylbIFxcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgICBpZiAoL1xcKChtb2JpbGV8dGFibGV0KTtbXlxcKV0qcnY6W1xcZFxcLl0rXFwpL2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0LmZpcmVmb3hvcyA9IHRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2lsaykge1xuICAgICAgcmVzdWx0ID0gIHtcbiAgICAgICAgbmFtZTogJ0FtYXpvbiBTaWxrJ1xuICAgICAgLCBzaWxrOiB0XG4gICAgICAsIHZlcnNpb24gOiBnZXRGaXJzdE1hdGNoKC9zaWxrXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvcGhhbnRvbS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdQaGFudG9tSlMnXG4gICAgICAsIHBoYW50b206IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvcGhhbnRvbWpzXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2xpbWVyanMvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2xpbWVySlMnXG4gICAgICAgICwgc2xpbWVyOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2xpbWVyanNcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9ibGFja2JlcnJ5fFxcYmJiXFxkKy9pLnRlc3QodWEpIHx8IC9yaW1cXHN0YWJsZXQvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQmxhY2tCZXJyeSdcbiAgICAgICwgYmxhY2tiZXJyeTogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC9ibGFja2JlcnJ5W1xcZF0rXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh3ZWJvcykge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2ViT1MnXG4gICAgICAsIHdlYm9zOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goL3coPzplYik/b3Nicm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfTtcbiAgICAgIC90b3VjaHBhZFxcLy9pLnRlc3QodWEpICYmIChyZXN1bHQudG91Y2hwYWQgPSB0KVxuICAgIH1cbiAgICBlbHNlIGlmICgvYmFkYS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdCYWRhJ1xuICAgICAgLCBiYWRhOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL2RvbGZpblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHRpemVuKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdUaXplbidcbiAgICAgICwgdGl6ZW46IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86dGl6ZW5cXHM/KT9icm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL3F1cHppbGxhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1F1cFppbGxhJ1xuICAgICAgICAsIHF1cHppbGxhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86cXVwemlsbGEpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9taXVtL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9taXVtJ1xuICAgICAgICAsIGNocm9taXVtOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86Y2hyb21pdW0pW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9tZXxjcmlvc3xjcm1vL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9tZSdcbiAgICAgICAgLCBjaHJvbWU6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFuZHJvaWQpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0FuZHJvaWQnXG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NhZmFyaXxhcHBsZXdlYmtpdC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTYWZhcmknXG4gICAgICAsIHNhZmFyaTogdFxuICAgICAgfVxuICAgICAgaWYgKHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWUgOiBpb3NkZXZpY2UgPT0gJ2lwaG9uZScgPyAnaVBob25lJyA6IGlvc2RldmljZSA9PSAnaXBhZCcgPyAnaVBhZCcgOiAnaVBvZCdcbiAgICAgIH1cbiAgICAgIC8vIFdURjogdmVyc2lvbiBpcyBub3QgcGFydCBvZiB1c2VyIGFnZW50IGluIHdlYiBhcHBzXG4gICAgICBpZiAodmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKC9nb29nbGVib3QvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnR29vZ2xlYm90J1xuICAgICAgLCBnb29nbGVib3Q6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZ29vZ2xlYm90XFwvKFxcZCsoXFwuXFxkKykpL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBnZXRGaXJzdE1hdGNoKC9eKC4qKVxcLyguKikgLyksXG4gICAgICAgIHZlcnNpb246IGdldFNlY29uZE1hdGNoKC9eKC4qKVxcLyguKikgLylcbiAgICAgfTtcbiAgIH1cblxuICAgIC8vIHNldCB3ZWJraXQgb3IgZ2Vja28gZmxhZyBmb3IgYnJvd3NlcnMgYmFzZWQgb24gdGhlc2UgZW5naW5lc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAvKGFwcGxlKT93ZWJraXQvaS50ZXN0KHVhKSkge1xuICAgICAgaWYgKC8oYXBwbGUpP3dlYmtpdFxcLzUzN1xcLjM2L2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIkJsaW5rXCJcbiAgICAgICAgcmVzdWx0LmJsaW5rID0gdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIldlYmtpdFwiXG4gICAgICAgIHJlc3VsdC53ZWJraXQgPSB0XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdC52ZXJzaW9uICYmIHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQub3BlcmEgJiYgL2dlY2tvXFwvL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUgfHwgXCJHZWNrb1wiXG4gICAgICByZXN1bHQuZ2Vja28gPSB0XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHJlc3VsdC52ZXJzaW9uIHx8IGdldEZpcnN0TWF0Y2goL2dlY2tvXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgIH1cblxuICAgIC8vIHNldCBPUyBmbGFncyBmb3IgcGxhdGZvcm1zIHRoYXQgaGF2ZSBtdWx0aXBsZSBicm93c2Vyc1xuICAgIGlmICghcmVzdWx0LndpbmRvd3NwaG9uZSAmJiAhcmVzdWx0Lm1zZWRnZSAmJiAoYW5kcm9pZCB8fCByZXN1bHQuc2lsaykpIHtcbiAgICAgIHJlc3VsdC5hbmRyb2lkID0gdFxuICAgIH0gZWxzZSBpZiAoIXJlc3VsdC53aW5kb3dzcGhvbmUgJiYgIXJlc3VsdC5tc2VkZ2UgJiYgaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHRbaW9zZGV2aWNlXSA9IHRcbiAgICAgIHJlc3VsdC5pb3MgPSB0XG4gICAgfSBlbHNlIGlmIChtYWMpIHtcbiAgICAgIHJlc3VsdC5tYWMgPSB0XG4gICAgfSBlbHNlIGlmICh4Ym94KSB7XG4gICAgICByZXN1bHQueGJveCA9IHRcbiAgICB9IGVsc2UgaWYgKHdpbmRvd3MpIHtcbiAgICAgIHJlc3VsdC53aW5kb3dzID0gdFxuICAgIH0gZWxzZSBpZiAobGludXgpIHtcbiAgICAgIHJlc3VsdC5saW51eCA9IHRcbiAgICB9XG5cbiAgICAvLyBPUyB2ZXJzaW9uIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NWZXJzaW9uID0gJyc7XG4gICAgaWYgKHJlc3VsdC53aW5kb3dzcGhvbmUpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3dpbmRvd3MgcGhvbmUgKD86b3MpP1xccz8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9vcyAoXFxkKyhbX1xcc11cXGQrKSopIGxpa2UgbWFjIG9zIHgvaSk7XG4gICAgICBvc1ZlcnNpb24gPSBvc1ZlcnNpb24ucmVwbGFjZSgvW19cXHNdL2csICcuJyk7XG4gICAgfSBlbHNlIGlmIChhbmRyb2lkKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9hbmRyb2lkWyBcXC8tXShcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQud2Vib3MpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goLyg/OndlYnxocHcpb3NcXC8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmJsYWNrYmVycnkpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3JpbVxcc3RhYmxldFxcc29zXFxzKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5iYWRhKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9iYWRhXFwvKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC50aXplbikge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvdGl6ZW5bXFwvXFxzXShcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfVxuICAgIGlmIChvc1ZlcnNpb24pIHtcbiAgICAgIHJlc3VsdC5vc3ZlcnNpb24gPSBvc1ZlcnNpb247XG4gICAgfVxuXG4gICAgLy8gZGV2aWNlIHR5cGUgZXh0cmFjdGlvblxuICAgIHZhciBvc01ham9yVmVyc2lvbiA9IG9zVmVyc2lvbi5zcGxpdCgnLicpWzBdO1xuICAgIGlmIChcbiAgICAgICAgIHRhYmxldFxuICAgICAgfHwgbmV4dXNUYWJsZXRcbiAgICAgIHx8IGlvc2RldmljZSA9PSAnaXBhZCdcbiAgICAgIHx8IChhbmRyb2lkICYmIChvc01ham9yVmVyc2lvbiA9PSAzIHx8IChvc01ham9yVmVyc2lvbiA+PSA0ICYmICFtb2JpbGUpKSlcbiAgICAgIHx8IHJlc3VsdC5zaWxrXG4gICAgKSB7XG4gICAgICByZXN1bHQudGFibGV0ID0gdFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICBtb2JpbGVcbiAgICAgIHx8IGlvc2RldmljZSA9PSAnaXBob25lJ1xuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcG9kJ1xuICAgICAgfHwgYW5kcm9pZFxuICAgICAgfHwgbmV4dXNNb2JpbGVcbiAgICAgIHx8IHJlc3VsdC5ibGFja2JlcnJ5XG4gICAgICB8fCByZXN1bHQud2Vib3NcbiAgICAgIHx8IHJlc3VsdC5iYWRhXG4gICAgKSB7XG4gICAgICByZXN1bHQubW9iaWxlID0gdFxuICAgIH1cblxuICAgIC8vIEdyYWRlZCBCcm93c2VyIFN1cHBvcnRcbiAgICAvLyBodHRwOi8vZGV2ZWxvcGVyLnlhaG9vLmNvbS95dWkvYXJ0aWNsZXMvZ2JzXG4gICAgaWYgKHJlc3VsdC5tc2VkZ2UgfHxcbiAgICAgICAgKHJlc3VsdC5tc2llICYmIHJlc3VsdC52ZXJzaW9uID49IDEwKSB8fFxuICAgICAgICAocmVzdWx0LnlhbmRleGJyb3dzZXIgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTUpIHx8XG5cdFx0ICAgIChyZXN1bHQudml2YWxkaSAmJiByZXN1bHQudmVyc2lvbiA+PSAxLjApIHx8XG4gICAgICAgIChyZXN1bHQuY2hyb21lICYmIHJlc3VsdC52ZXJzaW9uID49IDIwKSB8fFxuICAgICAgICAocmVzdWx0LnNhbXN1bmdCcm93c2VyICYmIHJlc3VsdC52ZXJzaW9uID49IDQpIHx8XG4gICAgICAgIChyZXN1bHQuZmlyZWZveCAmJiByZXN1bHQudmVyc2lvbiA+PSAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjApIHx8XG4gICAgICAgIChyZXN1bHQuaW9zICYmIHJlc3VsdC5vc3ZlcnNpb24gJiYgcmVzdWx0Lm9zdmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPj0gNikgfHxcbiAgICAgICAgKHJlc3VsdC5ibGFja2JlcnJ5ICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjEpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApXG4gICAgICAgICkge1xuICAgICAgcmVzdWx0LmEgPSB0O1xuICAgIH1cbiAgICBlbHNlIGlmICgocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPCAxMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPCAyMCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uIDwgMjAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5zYWZhcmkgJiYgcmVzdWx0LnZlcnNpb24gPCA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uIDwgMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA8IDYpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPCAyMClcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYyA9IHRcbiAgICB9IGVsc2UgcmVzdWx0LnggPSB0XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICB2YXIgYm93c2VyID0gZGV0ZWN0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJyA6ICcnKVxuXG4gIGJvd3Nlci50ZXN0ID0gZnVuY3Rpb24gKGJyb3dzZXJMaXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm93c2VyTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGJyb3dzZXJJdGVtID0gYnJvd3Nlckxpc3RbaV07XG4gICAgICBpZiAodHlwZW9mIGJyb3dzZXJJdGVtPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChicm93c2VySXRlbSBpbiBib3dzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHZlcnNpb24gcHJlY2lzaW9ucyBjb3VudFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGdldFZlcnNpb25QcmVjaXNpb24oXCIxLjEwLjNcIikgLy8gM1xuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZlcnNpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHZlcnNpb24uc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheTo6bWFwIHBvbHlmaWxsXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZXJhdG9yXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWFwKGFyciwgaXRlcmF0b3IpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sIGk7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJyLCBpdGVyYXRvcik7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZXJhdG9yKGFycltpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBicm93c2VyIHZlcnNpb24gd2VpZ2h0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuOC4yLjEuOTAnXSkgICAgLy8gMVxuICAgKiAgIGNvbXBhcmVWZXJzaW9ucyhbJzEuMDEwLjIuMScsICcxLjA5LjIuMS45MCddKTsgIC8vIDFcbiAgICogICBjb21wYXJlVmVyc2lvbnMoWycxLjEwLjIuMScsICAnMS4xMC4yLjEnXSk7ICAgICAvLyAwXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuMDgwMC4yJ10pOyAgICAgLy8gLTFcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gdmVyc2lvbnMgdmVyc2lvbnMgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGNvbXBhcmlzb24gcmVzdWx0XG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbnModmVyc2lvbnMpIHtcbiAgICAvLyAxKSBnZXQgY29tbW9uIHByZWNpc2lvbiBmb3IgYm90aCB2ZXJzaW9ucywgZm9yIGV4YW1wbGUgZm9yIFwiMTAuMFwiIGFuZCBcIjlcIiBpdCBzaG91bGQgYmUgMlxuICAgIHZhciBwcmVjaXNpb24gPSBNYXRoLm1heChnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb25zWzBdKSwgZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uc1sxXSkpO1xuICAgIHZhciBjaHVua3MgPSBtYXAodmVyc2lvbnMsIGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICB2YXIgZGVsdGEgPSBwcmVjaXNpb24gLSBnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb24pO1xuXG4gICAgICAvLyAyKSBcIjlcIiAtPiBcIjkuMFwiIChmb3IgcHJlY2lzaW9uID0gMilcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgbmV3IEFycmF5KGRlbHRhICsgMSkuam9pbihcIi4wXCIpO1xuXG4gICAgICAvLyAzKSBcIjkuMFwiIC0+IFtcIjAwMDAwMDAwMFwiXCIsIFwiMDAwMDAwMDA5XCJdXG4gICAgICByZXR1cm4gbWFwKHZlcnNpb24uc3BsaXQoXCIuXCIpLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgyMCAtIGNodW5rLmxlbmd0aCkuam9pbihcIjBcIikgKyBjaHVuaztcbiAgICAgIH0pLnJldmVyc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIGl0ZXJhdGUgaW4gcmV2ZXJzZSBvcmRlciBieSByZXZlcnNlZCBjaHVua3MgYXJyYXlcbiAgICB3aGlsZSAoLS1wcmVjaXNpb24gPj0gMCkge1xuICAgICAgLy8gNCkgY29tcGFyZTogXCIwMDAwMDAwMDlcIiA+IFwiMDAwMDAwMDEwXCIgPSBmYWxzZSAoYnV0IFwiOVwiID4gXCIxMFwiID0gdHJ1ZSlcbiAgICAgIGlmIChjaHVua3NbMF1bcHJlY2lzaW9uXSA+IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2h1bmtzWzBdW3ByZWNpc2lvbl0gPT09IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIGlmIChwcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgICAvLyBhbGwgdmVyc2lvbiBjaHVua3MgYXJlIHNhbWVcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYnJvd3NlciBpcyB1bnN1cHBvcnRlZFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGJvd3Nlci5pc1Vuc3VwcG9ydGVkQnJvd3Nlcih7XG4gICAqICAgICBtc2llOiBcIjEwXCIsXG4gICAqICAgICBmaXJlZm94OiBcIjIzXCIsXG4gICAqICAgICBjaHJvbWU6IFwiMjlcIixcbiAgICogICAgIHNhZmFyaTogXCI1LjFcIixcbiAgICogICAgIG9wZXJhOiBcIjE2XCIsXG4gICAqICAgICBwaGFudG9tOiBcIjUzNFwiXG4gICAqICAgfSk7XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNVbnN1cHBvcnRlZEJyb3dzZXIobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgdmFyIF9ib3dzZXIgPSBib3dzZXI7XG5cbiAgICAvLyBtYWtlIHN0cmljdE1vZGUgcGFyYW0gb3B0aW9uYWwgd2l0aCB1YSBwYXJhbSB1c2FnZVxuICAgIGlmICh0eXBlb2Ygc3RyaWN0TW9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVhID0gc3RyaWN0TW9kZTtcbiAgICAgIHN0cmljdE1vZGUgPSB2b2lkKDApO1xuICAgIH1cblxuICAgIGlmIChzdHJpY3RNb2RlID09PSB2b2lkKDApKSB7XG4gICAgICBzdHJpY3RNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh1YSkge1xuICAgICAgX2Jvd3NlciA9IGRldGVjdCh1YSk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSBcIlwiICsgX2Jvd3Nlci52ZXJzaW9uO1xuICAgIGZvciAodmFyIGJyb3dzZXIgaW4gbWluVmVyc2lvbnMpIHtcbiAgICAgIGlmIChtaW5WZXJzaW9ucy5oYXNPd25Qcm9wZXJ0eShicm93c2VyKSkge1xuICAgICAgICBpZiAoX2Jvd3Nlclticm93c2VyXSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbWluVmVyc2lvbnNbYnJvd3Nlcl0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgdmVyc2lvbiBpbiB0aGUgbWluVmVyc2lvbiBtYXAgc2hvdWxkIGJlIGEgc3RyaW5nOiAnICsgYnJvd3NlciArICc6ICcgKyBTdHJpbmcobWluVmVyc2lvbnMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBicm93c2VyIHZlcnNpb24gYW5kIG1pbiBzdXBwb3J0ZWQgdmVyc2lvbi5cbiAgICAgICAgICByZXR1cm4gY29tcGFyZVZlcnNpb25zKFt2ZXJzaW9uLCBtaW5WZXJzaW9uc1ticm93c2VyXV0pIDwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJpY3RNb2RlOyAvLyBub3QgZm91bmRcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBicm93c2VyIGlzIHN1cHBvcnRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2sobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgcmV0dXJuICFpc1Vuc3VwcG9ydGVkQnJvd3NlcihtaW5WZXJzaW9ucywgc3RyaWN0TW9kZSwgdWEpO1xuICB9XG5cbiAgYm93c2VyLmlzVW5zdXBwb3J0ZWRCcm93c2VyID0gaXNVbnN1cHBvcnRlZEJyb3dzZXI7XG4gIGJvd3Nlci5jb21wYXJlVmVyc2lvbnMgPSBjb21wYXJlVmVyc2lvbnM7XG4gIGJvd3Nlci5jaGVjayA9IGNoZWNrO1xuXG4gIC8qXG4gICAqIFNldCBvdXIgZGV0ZWN0IG1ldGhvZCB0byB0aGUgbWFpbiBib3dzZXIgb2JqZWN0IHNvIHdlIGNhblxuICAgKiByZXVzZSBpdCB0byB0ZXN0IG90aGVyIHVzZXIgYWdlbnRzLlxuICAgKiBUaGlzIGlzIG5lZWRlZCB0byBpbXBsZW1lbnQgZnV0dXJlIHRlc3RzLlxuICAgKi9cbiAgYm93c2VyLl9kZXRlY3QgPSBkZXRlY3Q7XG5cbiAgcmV0dXJuIGJvd3NlclxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGVQcm9wZXJ0eTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3BlcnR5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUHJlZml4ZWRWYWx1ZTtcblxudmFyIHJlZ2V4ID0gLy13ZWJraXQtfC1tb3otfC1tcy0vO1xuXG5mdW5jdGlvbiBpc1ByZWZpeGVkVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVnZXgudGVzdCh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCAoeCkge31cbiAgICB9O1xuXG4gICAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZzsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xudmFyIGNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nIGluIGNhY2hlXG4gICAgPyBjYWNoZVtzdHJpbmddXG4gICAgOiBjYWNoZVtzdHJpbmddID0gc3RyaW5nXG4gICAgICAucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQmJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGJvcnJvd2VkIFJlYWN0IFNWR0RPTVByb3BlcnR5Q29uZmlnXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9jNzg0NjRmOGVhOWE1YjAwZWM4MDI1MmQyMGE3MWExNDgyMjEwZTU3L3NyYy9yZW5kZXJlcnMvZG9tL3NoYXJlZC9TVkdET01Qcm9wZXJ0eUNvbmZpZy5qc1xuICovXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWNjZW50SGVpZ2h0OiAnYWNjZW50LWhlaWdodCcsXG4gICAgYWNjdW11bGF0ZTogMCxcbiAgICBhZGRpdGl2ZTogMCxcbiAgICBhbGlnbm1lbnRCYXNlbGluZTogJ2FsaWdubWVudC1iYXNlbGluZScsXG4gICAgYWxsb3dSZW9yZGVyOiAnYWxsb3dSZW9yZGVyJyxcbiAgICBhbHBoYWJldGljOiAwLFxuICAgIGFtcGxpdHVkZTogMCxcbiAgICBhcmFiaWNGb3JtOiAnYXJhYmljLWZvcm0nLFxuICAgIGFzY2VudDogMCxcbiAgICBhdHRyaWJ1dGVOYW1lOiAnYXR0cmlidXRlTmFtZScsXG4gICAgYXR0cmlidXRlVHlwZTogJ2F0dHJpYnV0ZVR5cGUnLFxuICAgIGF1dG9SZXZlcnNlOiAnYXV0b1JldmVyc2UnLFxuICAgIGF6aW11dGg6IDAsXG4gICAgYmFzZUZyZXF1ZW5jeTogJ2Jhc2VGcmVxdWVuY3knLFxuICAgIGJhc2VQcm9maWxlOiAnYmFzZVByb2ZpbGUnLFxuICAgIGJhc2VsaW5lU2hpZnQ6ICdiYXNlbGluZS1zaGlmdCcsXG4gICAgYmJveDogMCxcbiAgICBiZWdpbjogMCxcbiAgICBiaWFzOiAwLFxuICAgIGJ5OiAwLFxuICAgIGNhbGNNb2RlOiAnY2FsY01vZGUnLFxuICAgIGNhcEhlaWdodDogJ2NhcC1oZWlnaHQnLFxuICAgIGNsaXA6IDAsXG4gICAgY2xpcFBhdGg6ICdjbGlwLXBhdGgnLFxuICAgIGNsaXBQYXRoVW5pdHM6ICdjbGlwUGF0aFVuaXRzJyxcbiAgICBjbGlwUnVsZTogJ2NsaXAtcnVsZScsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uOiAnY29sb3ItaW50ZXJwb2xhdGlvbicsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsXG4gICAgY29sb3JQcm9maWxlOiAnY29sb3ItcHJvZmlsZScsXG4gICAgY29sb3JSZW5kZXJpbmc6ICdjb2xvci1yZW5kZXJpbmcnLFxuICAgIGNvbnRlbnRTY3JpcHRUeXBlOiAnY29udGVudFNjcmlwdFR5cGUnLFxuICAgIGNvbnRlbnRTdHlsZVR5cGU6ICdjb250ZW50U3R5bGVUeXBlJyxcbiAgICBjdXJzb3I6IDAsXG4gICAgY3g6IDAsXG4gICAgY3k6IDAsXG4gICAgZDogMCxcbiAgICBkZWNlbGVyYXRlOiAwLFxuICAgIGRlc2NlbnQ6IDAsXG4gICAgZGlmZnVzZUNvbnN0YW50OiAnZGlmZnVzZUNvbnN0YW50JyxcbiAgICBkaXJlY3Rpb246IDAsXG4gICAgZGlzcGxheTogMCxcbiAgICBkaXZpc29yOiAwLFxuICAgIGRvbWluYW50QmFzZWxpbmU6ICdkb21pbmFudC1iYXNlbGluZScsXG4gICAgZHVyOiAwLFxuICAgIGR4OiAwLFxuICAgIGR5OiAwLFxuICAgIGVkZ2VNb2RlOiAnZWRnZU1vZGUnLFxuICAgIGVsZXZhdGlvbjogMCxcbiAgICBlbmFibGVCYWNrZ3JvdW5kOiAnZW5hYmxlLWJhY2tncm91bmQnLFxuICAgIGVuZDogMCxcbiAgICBleHBvbmVudDogMCxcbiAgICBleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkOiAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsXG4gICAgZmlsbDogMCxcbiAgICBmaWxsT3BhY2l0eTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgZmlsbFJ1bGU6ICdmaWxsLXJ1bGUnLFxuICAgIGZpbHRlcjogMCxcbiAgICBmaWx0ZXJSZXM6ICdmaWx0ZXJSZXMnLFxuICAgIGZpbHRlclVuaXRzOiAnZmlsdGVyVW5pdHMnLFxuICAgIGZsb29kQ29sb3I6ICdmbG9vZC1jb2xvcicsXG4gICAgZmxvb2RPcGFjaXR5OiAnZmxvb2Qtb3BhY2l0eScsXG4gICAgZm9jdXNhYmxlOiAwLFxuICAgIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScsXG4gICAgZm9udFNpemU6ICdmb250LXNpemUnLFxuICAgIGZvbnRTaXplQWRqdXN0OiAnZm9udC1zaXplLWFkanVzdCcsXG4gICAgZm9udFN0cmV0Y2g6ICdmb250LXN0cmV0Y2gnLFxuICAgIGZvbnRTdHlsZTogJ2ZvbnQtc3R5bGUnLFxuICAgIGZvbnRWYXJpYW50OiAnZm9udC12YXJpYW50JyxcbiAgICBmb250V2VpZ2h0OiAnZm9udC13ZWlnaHQnLFxuICAgIGZvcm1hdDogMCxcbiAgICBmcm9tOiAwLFxuICAgIGZ4OiAwLFxuICAgIGZ5OiAwLFxuICAgIGcxOiAwLFxuICAgIGcyOiAwLFxuICAgIGdseXBoTmFtZTogJ2dseXBoLW5hbWUnLFxuICAgIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsOiAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCcsXG4gICAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnLFxuICAgIGdseXBoUmVmOiAnZ2x5cGhSZWYnLFxuICAgIGdyYWRpZW50VHJhbnNmb3JtOiAnZ3JhZGllbnRUcmFuc2Zvcm0nLFxuICAgIGdyYWRpZW50VW5pdHM6ICdncmFkaWVudFVuaXRzJyxcbiAgICBoYW5naW5nOiAwLFxuICAgIGhvcml6QWR2WDogJ2hvcml6LWFkdi14JyxcbiAgICBob3Jpek9yaWdpblg6ICdob3Jpei1vcmlnaW4teCcsXG4gICAgaWRlb2dyYXBoaWM6IDAsXG4gICAgaW1hZ2VSZW5kZXJpbmc6ICdpbWFnZS1yZW5kZXJpbmcnLFxuICAgIGluOiAwLFxuICAgIGluMjogMCxcbiAgICBpbnRlcmNlcHQ6IDAsXG4gICAgazogMCxcbiAgICBrMTogMCxcbiAgICBrMjogMCxcbiAgICBrMzogMCxcbiAgICBrNDogMCxcbiAgICBrZXJuZWxNYXRyaXg6ICdrZXJuZWxNYXRyaXgnLFxuICAgIGtlcm5lbFVuaXRMZW5ndGg6ICdrZXJuZWxVbml0TGVuZ3RoJyxcbiAgICBrZXJuaW5nOiAwLFxuICAgIGtleVBvaW50czogJ2tleVBvaW50cycsXG4gICAga2V5U3BsaW5lczogJ2tleVNwbGluZXMnLFxuICAgIGtleVRpbWVzOiAna2V5VGltZXMnLFxuICAgIGxlbmd0aEFkanVzdDogJ2xlbmd0aEFkanVzdCcsXG4gICAgbGV0dGVyU3BhY2luZzogJ2xldHRlci1zcGFjaW5nJyxcbiAgICBsaWdodGluZ0NvbG9yOiAnbGlnaHRpbmctY29sb3InLFxuICAgIGxpbWl0aW5nQ29uZUFuZ2xlOiAnbGltaXRpbmdDb25lQW5nbGUnLFxuICAgIGxvY2FsOiAwLFxuICAgIG1hcmtlckVuZDogJ21hcmtlci1lbmQnLFxuICAgIG1hcmtlckhlaWdodDogJ21hcmtlckhlaWdodCcsXG4gICAgbWFya2VyTWlkOiAnbWFya2VyLW1pZCcsXG4gICAgbWFya2VyU3RhcnQ6ICdtYXJrZXItc3RhcnQnLFxuICAgIG1hcmtlclVuaXRzOiAnbWFya2VyVW5pdHMnLFxuICAgIG1hcmtlcldpZHRoOiAnbWFya2VyV2lkdGgnLFxuICAgIG1hc2s6IDAsXG4gICAgbWFza0NvbnRlbnRVbml0czogJ21hc2tDb250ZW50VW5pdHMnLFxuICAgIG1hc2tVbml0czogJ21hc2tVbml0cycsXG4gICAgbWF0aGVtYXRpY2FsOiAwLFxuICAgIG1vZGU6IDAsXG4gICAgbnVtT2N0YXZlczogJ251bU9jdGF2ZXMnLFxuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIG9wZXJhdG9yOiAwLFxuICAgIG9yZGVyOiAwLFxuICAgIG9yaWVudDogMCxcbiAgICBvcmllbnRhdGlvbjogMCxcbiAgICBvcmlnaW46IDAsXG4gICAgb3ZlcmZsb3c6IDAsXG4gICAgb3ZlcmxpbmVQb3NpdGlvbjogJ292ZXJsaW5lLXBvc2l0aW9uJyxcbiAgICBvdmVybGluZVRoaWNrbmVzczogJ292ZXJsaW5lLXRoaWNrbmVzcycsXG4gICAgcGFpbnRPcmRlcjogJ3BhaW50LW9yZGVyJyxcbiAgICBwYW5vc2UxOiAncGFub3NlLTEnLFxuICAgIHBhdGhMZW5ndGg6ICdwYXRoTGVuZ3RoJyxcbiAgICBwYXR0ZXJuQ29udGVudFVuaXRzOiAncGF0dGVybkNvbnRlbnRVbml0cycsXG4gICAgcGF0dGVyblRyYW5zZm9ybTogJ3BhdHRlcm5UcmFuc2Zvcm0nLFxuICAgIHBhdHRlcm5Vbml0czogJ3BhdHRlcm5Vbml0cycsXG4gICAgcG9pbnRlckV2ZW50czogJ3BvaW50ZXItZXZlbnRzJyxcbiAgICBwb2ludHM6IDAsXG4gICAgcG9pbnRzQXRYOiAncG9pbnRzQXRYJyxcbiAgICBwb2ludHNBdFk6ICdwb2ludHNBdFknLFxuICAgIHBvaW50c0F0WjogJ3BvaW50c0F0WicsXG4gICAgcHJlc2VydmVBbHBoYTogJ3ByZXNlcnZlQWxwaGEnLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJyxcbiAgICBwcmltaXRpdmVVbml0czogJ3ByaW1pdGl2ZVVuaXRzJyxcbiAgICByOiAwLFxuICAgIHJhZGl1czogMCxcbiAgICByZWZYOiAncmVmWCcsXG4gICAgcmVmWTogJ3JlZlknLFxuICAgIHJlbmRlcmluZ0ludGVudDogJ3JlbmRlcmluZy1pbnRlbnQnLFxuICAgIHJlcGVhdENvdW50OiAncmVwZWF0Q291bnQnLFxuICAgIHJlcGVhdER1cjogJ3JlcGVhdER1cicsXG4gICAgcmVxdWlyZWRFeHRlbnNpb25zOiAncmVxdWlyZWRFeHRlbnNpb25zJyxcbiAgICByZXF1aXJlZEZlYXR1cmVzOiAncmVxdWlyZWRGZWF0dXJlcycsXG4gICAgcmVzdGFydDogMCxcbiAgICByZXN1bHQ6IDAsXG4gICAgcm90YXRlOiAwLFxuICAgIHJ4OiAwLFxuICAgIHJ5OiAwLFxuICAgIHNjYWxlOiAwLFxuICAgIHNlZWQ6IDAsXG4gICAgc2hhcGVSZW5kZXJpbmc6ICdzaGFwZS1yZW5kZXJpbmcnLFxuICAgIHNsb3BlOiAwLFxuICAgIHNwYWNpbmc6IDAsXG4gICAgc3BlY3VsYXJDb25zdGFudDogJ3NwZWN1bGFyQ29uc3RhbnQnLFxuICAgIHNwZWN1bGFyRXhwb25lbnQ6ICdzcGVjdWxhckV4cG9uZW50JyxcbiAgICBzcGVlZDogMCxcbiAgICBzcHJlYWRNZXRob2Q6ICdzcHJlYWRNZXRob2QnLFxuICAgIHN0YXJ0T2Zmc2V0OiAnc3RhcnRPZmZzZXQnLFxuICAgIHN0ZERldmlhdGlvbjogJ3N0ZERldmlhdGlvbicsXG4gICAgc3RlbWg6IDAsXG4gICAgc3RlbXY6IDAsXG4gICAgc3RpdGNoVGlsZXM6ICdzdGl0Y2hUaWxlcycsXG4gICAgc3RvcENvbG9yOiAnc3RvcC1jb2xvcicsXG4gICAgc3RvcE9wYWNpdHk6ICdzdG9wLW9wYWNpdHknLFxuICAgIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nLFxuICAgIHN0cmlrZXRocm91Z2hUaGlja25lc3M6ICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsXG4gICAgc3RyaW5nOiAwLFxuICAgIHN0cm9rZTogMCxcbiAgICBzdHJva2VEYXNoYXJyYXk6ICdzdHJva2UtZGFzaGFycmF5JyxcbiAgICBzdHJva2VEYXNob2Zmc2V0OiAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxuICAgIHN0cm9rZUxpbmVjYXA6ICdzdHJva2UtbGluZWNhcCcsXG4gICAgc3Ryb2tlTGluZWpvaW46ICdzdHJva2UtbGluZWpvaW4nLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6ICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICAgc3Ryb2tlT3BhY2l0eTogJ3N0cm9rZS1vcGFjaXR5JyxcbiAgICBzdHJva2VXaWR0aDogJ3N0cm9rZS13aWR0aCcsXG4gICAgc3VyZmFjZVNjYWxlOiAnc3VyZmFjZVNjYWxlJyxcbiAgICBzeXN0ZW1MYW5ndWFnZTogJ3N5c3RlbUxhbmd1YWdlJyxcbiAgICB0YWJsZVZhbHVlczogJ3RhYmxlVmFsdWVzJyxcbiAgICB0YXJnZXRYOiAndGFyZ2V0WCcsXG4gICAgdGFyZ2V0WTogJ3RhcmdldFknLFxuICAgIHRleHRBbmNob3I6ICd0ZXh0LWFuY2hvcicsXG4gICAgdGV4dERlY29yYXRpb246ICd0ZXh0LWRlY29yYXRpb24nLFxuICAgIHRleHRMZW5ndGg6ICd0ZXh0TGVuZ3RoJyxcbiAgICB0ZXh0UmVuZGVyaW5nOiAndGV4dC1yZW5kZXJpbmcnLFxuICAgIHRvOiAwLFxuICAgIHRyYW5zZm9ybTogMCxcbiAgICB1MTogMCxcbiAgICB1MjogMCxcbiAgICB1bmRlcmxpbmVQb3NpdGlvbjogJ3VuZGVybGluZS1wb3NpdGlvbicsXG4gICAgdW5kZXJsaW5lVGhpY2tuZXNzOiAndW5kZXJsaW5lLXRoaWNrbmVzcycsXG4gICAgdW5pY29kZTogMCxcbiAgICB1bmljb2RlQmlkaTogJ3VuaWNvZGUtYmlkaScsXG4gICAgdW5pY29kZVJhbmdlOiAndW5pY29kZS1yYW5nZScsXG4gICAgdW5pdHNQZXJFbTogJ3VuaXRzLXBlci1lbScsXG4gICAgdkFscGhhYmV0aWM6ICd2LWFscGhhYmV0aWMnLFxuICAgIHZIYW5naW5nOiAndi1oYW5naW5nJyxcbiAgICB2SWRlb2dyYXBoaWM6ICd2LWlkZW9ncmFwaGljJyxcbiAgICB2TWF0aGVtYXRpY2FsOiAndi1tYXRoZW1hdGljYWwnLFxuICAgIHZhbHVlczogMCxcbiAgICB2ZWN0b3JFZmZlY3Q6ICd2ZWN0b3ItZWZmZWN0JyxcbiAgICB2ZXJzaW9uOiAwLFxuICAgIHZlcnRBZHZZOiAndmVydC1hZHYteScsXG4gICAgdmVydE9yaWdpblg6ICd2ZXJ0LW9yaWdpbi14JyxcbiAgICB2ZXJ0T3JpZ2luWTogJ3ZlcnQtb3JpZ2luLXknLFxuICAgIHZpZXdCb3g6ICd2aWV3Qm94JyxcbiAgICB2aWV3VGFyZ2V0OiAndmlld1RhcmdldCcsXG4gICAgdmlzaWJpbGl0eTogMCxcbiAgICB3aWR0aHM6IDAsXG4gICAgd29yZFNwYWNpbmc6ICd3b3JkLXNwYWNpbmcnLFxuICAgIHdyaXRpbmdNb2RlOiAnd3JpdGluZy1tb2RlJyxcbiAgICB4OiAwLFxuICAgIHgxOiAwLFxuICAgIHgyOiAwLFxuICAgIHhDaGFubmVsU2VsZWN0b3I6ICd4Q2hhbm5lbFNlbGVjdG9yJyxcbiAgICB4SGVpZ2h0OiAneC1oZWlnaHQnLFxuICAgIHhsaW5rQWN0dWF0ZTogJ3hsaW5rOmFjdHVhdGUnLFxuICAgIHhsaW5rQXJjcm9sZTogJ3hsaW5rOmFyY3JvbGUnLFxuICAgIHhsaW5rSHJlZjogJ3hsaW5rOmhyZWYnLFxuICAgIHhsaW5rUm9sZTogJ3hsaW5rOnJvbGUnLFxuICAgIHhsaW5rU2hvdzogJ3hsaW5rOnNob3cnLFxuICAgIHhsaW5rVGl0bGU6ICd4bGluazp0aXRsZScsXG4gICAgeGxpbmtUeXBlOiAneGxpbms6dHlwZScsXG4gICAgeG1sQmFzZTogJ3htbDpiYXNlJyxcbiAgICAvLyB4bWxuczogMCxcbiAgICB4bWxMYW5nOiAneG1sOmxhbmcnLFxuICAgIHhtbFNwYWNlOiAneG1sOnNwYWNlJyxcbiAgICB4bWxuc1hsaW5rOiAneG1sbnM6eGxpbmsnLFxuICAgIHk6IDAsXG4gICAgeTE6IDAsXG4gICAgeTI6IDAsXG4gICAgeUNoYW5uZWxTZWxlY3RvcjogJ3lDaGFubmVsU2VsZWN0b3InLFxuICAgIHo6IDAsXG4gICAgem9vbUFuZFBhbjogJ3pvb21BbmRQYW4nXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbmZlcm5vXzEgPSByZXF1aXJlKFwiaW5mZXJub1wiKTtcbmV4cG9ydHMuY2xvbmVWTm9kZSA9IGluZmVybm9fMS5jbG9uZVZOb2RlO1xuZXhwb3J0cy5jcmVhdGVWTm9kZSA9IGluZmVybm9fMS5jcmVhdGVWTm9kZTtcbmV4cG9ydHMuRU1QVFlfT0JKID0gaW5mZXJub18xLkVNUFRZX09CSjtcbmV4cG9ydHMuZmluZERPTU5vZGUgPSBpbmZlcm5vXzEuZmluZERPTU5vZGU7XG5leHBvcnRzLnJlbmRlciA9IGluZmVybm9fMS5yZW5kZXI7XG52YXIgaW5mZXJub19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLWNvbXBvbmVudFwiKTtcbmV4cG9ydHMuQ29tcG9uZW50ID0gaW5mZXJub19jb21wb25lbnRfMS5kZWZhdWx0O1xudmFyIGluZmVybm9fY3JlYXRlX2NsYXNzXzEgPSByZXF1aXJlKFwiaW5mZXJuby1jcmVhdGUtY2xhc3NcIik7XG5leHBvcnRzLmNyZWF0ZUNsYXNzID0gaW5mZXJub19jcmVhdGVfY2xhc3NfMS5kZWZhdWx0O1xudmFyIGluZmVybm9fY3JlYXRlX2VsZW1lbnRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLWNyZWF0ZS1lbGVtZW50XCIpO1xudmFyIGluZmVybm9fc2hhcmVkXzEgPSByZXF1aXJlKFwiaW5mZXJuby1zaGFyZWRcIik7XG5leHBvcnRzLk5PX09QID0gaW5mZXJub19zaGFyZWRfMS5OT19PUDtcbnZhciBpc1ZhbGlkRWxlbWVudF8xID0gcmVxdWlyZShcIi4vaXNWYWxpZEVsZW1lbnRcIik7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnRfMS5kZWZhdWx0O1xudmFyIFNWR0RPTVByb3BlcnR5Q29uZmlnXzEgPSByZXF1aXJlKFwiLi9TVkdET01Qcm9wZXJ0eUNvbmZpZ1wiKTtcbi8vIElubGluZWQgUHJvcFR5cGVzLCB0aGVyZSBpcyBwcm9wVHlwZSBjaGVja2luZyBBVE0uXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbmZ1bmN0aW9uIHByb3B0eXBlKCkgeyB9XG5wcm9wdHlwZS5pc1JlcXVpcmVkID0gcHJvcHR5cGU7XG52YXIgZ2V0UHJvcHR5cGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9wdHlwZTsgfTtcbnZhciBQcm9wVHlwZXMgPSB7XG4gICAgYW55OiBnZXRQcm9wdHlwZSxcbiAgICBhcnJheTogcHJvcHR5cGUsXG4gICAgYXJyYXlPZjogZ2V0UHJvcHR5cGUsXG4gICAgYm9vbDogcHJvcHR5cGUsXG4gICAgZWxlbWVudDogZ2V0UHJvcHR5cGUsXG4gICAgZnVuYzogcHJvcHR5cGUsXG4gICAgaW5zdGFuY2VPZjogZ2V0UHJvcHR5cGUsXG4gICAgbm9kZTogZ2V0UHJvcHR5cGUsXG4gICAgbnVtYmVyOiBwcm9wdHlwZSxcbiAgICBvYmplY3Q6IHByb3B0eXBlLFxuICAgIG9iamVjdE9mOiBnZXRQcm9wdHlwZSxcbiAgICBvbmVPZjogZ2V0UHJvcHR5cGUsXG4gICAgb25lT2ZUeXBlOiBnZXRQcm9wdHlwZSxcbiAgICBzaGFwZTogZ2V0UHJvcHR5cGUsXG4gICAgc3RyaW5nOiBwcm9wdHlwZSxcbiAgICBzeW1ib2w6IHByb3B0eXBlXG59O1xuZXhwb3J0cy5Qcm9wVHlwZXMgPSBQcm9wVHlwZXM7XG5pbmZlcm5vXzEub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlO1xuZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpIHtcbiAgICBpbmZlcm5vXzEucmVuZGVyKG51bGwsIGNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLnVubW91bnRDb21wb25lbnRBdE5vZGUgPSB1bm1vdW50Q29tcG9uZW50QXROb2RlO1xudmFyIEFSUiA9IFtdO1xudmFyIENoaWxkcmVuID0ge1xuICAgIG1hcDogZnVuY3Rpb24gKGNoaWxkcmVuLCBmbiwgY3R4KSB7XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGN0eCAmJiBjdHggIT09IGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRyZW4ubWFwKGZuKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uIChjaGlsZHJlbiwgZm4sIGN0eCkge1xuICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gICAgICAgIGlmIChjdHggJiYgY3R4ICE9PSBjaGlsZHJlbikge1xuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBmbihjaGlsZHJlbltpXSwgaSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb3VudDogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgfSxcbiAgICBvbmx5OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbi5vbmx5KCkgZXhwZWN0cyBvbmx5IG9uZSBjaGlsZC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRyZW5bMF07XG4gICAgfSxcbiAgICB0b0FycmF5OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogQVJSLmNvbmNhdChjaGlsZHJlbik7XG4gICAgfVxufTtcbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmluZmVybm9fY29tcG9uZW50XzEuZGVmYXVsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xudmFyIGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuaW5mZXJub18xLm9wdGlvbnMuYmVmb3JlUmVuZGVyID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XG59O1xuaW5mZXJub18xLm9wdGlvbnMuYWZ0ZXJSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xudmFyIHZlcnNpb24gPSAnMTUuNC4yJztcbmV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyhuYW1lLCBwcm9wcykge1xuICAgIGlmICgobmFtZSA9PT0gJ2lucHV0JyB8fCBuYW1lID09PSAndGV4dGFyZWEnKSAmJiBwcm9wcy50eXBlICE9PSAncmFkaW8nICYmIHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHZhciB0eXBlID0gcHJvcHMudHlwZTtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdvbmNsaWNrJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdvbmNoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSAnb25pbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm9wc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBwcm9wc1tldmVudE5hbWVdID0gcHJvcHMub25DaGFuZ2U7XG4gICAgICAgICAgICBkZWxldGUgcHJvcHMub25DaGFuZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ29uRG91YmxlQ2xpY2snKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkRibENsaWNrID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3AgPT09ICdodG1sRm9yJykge1xuICAgICAgICAgICAgcHJvcHNbJ2ZvciddID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hcHBlZFByb3AgPSBTVkdET01Qcm9wZXJ0eUNvbmZpZ18xLmRlZmF1bHRbcHJvcF07XG4gICAgICAgIGlmIChtYXBwZWRQcm9wICYmIG1hcHBlZFByb3AgIT09IHByb3ApIHtcbiAgICAgICAgICAgIHByb3BzW21hcHBlZFByb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB3ZSBuZWVkIHRvIGFkZCBwZXJzaXN0KCkgdG8gRXZlbnQgKGFzIFJlYWN0IGhhcyBpdCBmb3Igc3ludGhldGljIGV2ZW50cylcbi8vIHRoaXMgaXMgYSBoYWNrIGFuZCB3ZSByZWFsbHkgc2hvdWxkbid0IGJlIG1vZGlmeWluZyBhIGdsb2JhbCBvYmplY3QgdGhpcyB3YXksXG4vLyBidXQgdGhlcmUgaXNuJ3QgYSBwZXJmb3JtYW50IHdheSBvZiBkb2luZyB0aGlzIGFwYXJ0IGZyb20gdHJ5aW5nIHRvIHByb3h5XG4vLyBldmVyeSBwcm9wIGV2ZW50IHRoYXQgc3RhcnRzIHdpdGggXCJvblwiLCBpLmUuIG9uQ2xpY2sgb3Igb25LZXlQcmVzc1xuLy8gYnV0IGluIHJlYWxpdHkgZGV2cyB1c2Ugb25Tb21ldGhpbmcgZm9yIG1hbnkgdGhpbmdzLCBub3Qgb25seSBmb3Jcbi8vIGlucHV0IGV2ZW50c1xuaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUV2ZW50LnByb3RvdHlwZS5wZXJzaXN0KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gICAgRXZlbnQucHJvdG90eXBlLnBlcnNpc3QgPSBmdW5jdGlvbiAoKSB7IH07XG59XG5mdW5jdGlvbiBpdGVyYWJsZVRvQXJyYXkoaXRlcmFibGUpIHtcbiAgICB2YXIgaXRlclN0ZXA7XG4gICAgdmFyIHRtcEFyciA9IFtdO1xuICAgIGRvIHtcbiAgICAgICAgaXRlclN0ZXAgPSBpdGVyYWJsZS5uZXh0KCk7XG4gICAgICAgIGlmIChpdGVyU3RlcC52YWx1ZSkge1xuICAgICAgICAgICAgdG1wQXJyLnB1c2goaXRlclN0ZXAudmFsdWUpO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoIWl0ZXJTdGVwLmRvbmUpO1xuICAgIHJldHVybiB0bXBBcnI7XG59XG52YXIgaGFzU3ltYm9sU3VwcG9ydCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnO1xudmFyIGluamVjdFN0cmluZ1JlZnMgPSBmdW5jdGlvbiAob3JpZ2luYWxGdW5jdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSwgX3Byb3BzKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY2hpbGRyZW5bX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzID0gX3Byb3BzIHx8IHt9O1xuICAgICAgICB2YXIgcmVmID0gcHJvcHMucmVmO1xuICAgICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ3N0cmluZycgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKGN1cnJlbnRDb21wb25lbnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnJlZnMgPSBjdXJyZW50Q29tcG9uZW50LnJlZnMgfHwge307XG4gICAgICAgICAgICBwcm9wcy5yZWYgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW3JlZl0gPSB2YWw7XG4gICAgICAgICAgICB9LmJpbmQoY3VycmVudENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbm9ybWFsaXplUHJvcHMobmFtZSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlYWN0IHN1cHBvcnRzIGl0ZXJhYmxlIGNoaWxkcmVuLCBpbiBhZGRpdGlvbiB0byBBcnJheS1saWtlXG4gICAgICAgIGlmIChoYXNTeW1ib2xTdXBwb3J0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNBcnJheShjaGlsZCkgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmcoY2hpbGQpICYmIGluZmVybm9fc2hhcmVkXzEuaXNGdW5jdGlvbihjaGlsZFtTeW1ib2wuaXRlcmF0b3JdKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXSA9IGl0ZXJhYmxlVG9BcnJheShjaGlsZFtTeW1ib2wuaXRlcmF0b3JdKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbi5hcHBseSh2b2lkIDAsIFtuYW1lLCBwcm9wc10uY29uY2F0KGNoaWxkcmVuKSk7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlRWxlbWVudCA9IGluamVjdFN0cmluZ1JlZnMoaW5mZXJub19jcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQpO1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcbnZhciBjbG9uZUVsZW1lbnQgPSBpbmplY3RTdHJpbmdSZWZzKGluZmVybm9fMS5jbG9uZVZOb2RlKTtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50O1xudmFyIG9sZENyZWF0ZVZOb2RlID0gaW5mZXJub18xLm9wdGlvbnMuY3JlYXRlVk5vZGU7XG5pbmZlcm5vXzEub3B0aW9ucy5jcmVhdGVWTm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocHJvcHMpKSB7XG4gICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pICYmIGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKG9sZENyZWF0ZVZOb2RlKSB7XG4gICAgICAgIG9sZENyZWF0ZVZOb2RlKHZOb2RlKTtcbiAgICB9XG59O1xuLy8gQ3JlZGl0OiBwcmVhY3QtY29tcGF0IC0gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QtY29tcGF0IDopXG5mdW5jdGlvbiBzaGFsbG93RGlmZmVycyhhLCBiKSB7XG4gICAgZm9yICh2YXIgaSBpbiBhKSB7XG4gICAgICAgIGlmICghKGkgaW4gYikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuICAgIGluZmVybm9fY29tcG9uZW50XzEuZGVmYXVsdC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcbn1cbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBpbmZlcm5vX2NvbXBvbmVudF8xLmRlZmF1bHQoe30sIHt9KTtcblB1cmVDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChwcm9wcywgc3RhdGUpIHtcbiAgICByZXR1cm4gc2hhbGxvd0RpZmZlcnModGhpcy5wcm9wcywgcHJvcHMpIHx8IHNoYWxsb3dEaWZmZXJzKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn07XG52YXIgV3JhcHBlckNvbXBvbmVudCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdyYXBwZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV3JhcHBlckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBXcmFwcGVyQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1snY29udGV4dCddO1xuICAgIH07XG4gICAgV3JhcHBlckNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbiAgICB9O1xuICAgIHJldHVybiBXcmFwcGVyQ29tcG9uZW50O1xufShpbmZlcm5vX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcbmZ1bmN0aW9uIHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHBhcmVudENvbXBvbmVudCwgdk5vZGUsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICB2YXIgd3JhcHBlclZOb2RlID0gaW5mZXJub18xLmNyZWF0ZVZOb2RlKDQsIFdyYXBwZXJDb21wb25lbnQsIG51bGwsIG51bGwsIHtcbiAgICAgICAgY2hpbGRyZW46IHZOb2RlLFxuICAgICAgICBjb250ZXh0OiBwYXJlbnRDb21wb25lbnQuY29udGV4dFxuICAgIH0pO1xuICAgIHZhciBjb21wb25lbnQgPSBpbmZlcm5vXzEucmVuZGVyKHdyYXBwZXJWTm9kZSwgY29udGFpbmVyKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gY2FsbGJhY2sgZ2V0cyB0aGUgY29tcG9uZW50IGFzIGNvbnRleHQsIG5vIG90aGVyIGFyZ3VtZW50LlxuICAgICAgICBjYWxsYmFjay5jYWxsKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5leHBvcnRzLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyID0gdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG4vLyBDcmVkaXQ6IHByZWFjdC1jb21wYXQgLSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC1jb21wYXRcbnZhciBFTEVNRU5UUyA9ICdhIGFiYnIgYWRkcmVzcyBhcmVhIGFydGljbGUgYXNpZGUgYXVkaW8gYiBiYXNlIGJkaSBiZG8gYmlnIGJsb2NrcXVvdGUgYm9keSBiciBidXR0b24gY2FudmFzIGNhcHRpb24gY2l0ZSBjb2RlIGNvbCBjb2xncm91cCBkYXRhIGRhdGFsaXN0IGRkIGRlbCBkZXRhaWxzIGRmbiBkaWFsb2cgZGl2IGRsIGR0IGVtIGVtYmVkIGZpZWxkc2V0IGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBmb3JtIGgxIGgyIGgzIGg0IGg1IGg2IGhlYWQgaGVhZGVyIGhncm91cCBociBodG1sIGkgaWZyYW1lIGltZyBpbnB1dCBpbnMga2JkIGtleWdlbiBsYWJlbCBsZWdlbmQgbGkgbGluayBtYWluIG1hcCBtYXJrIG1lbnUgbWVudWl0ZW0gbWV0YSBtZXRlciBuYXYgbm9zY3JpcHQgb2JqZWN0IG9sIG9wdGdyb3VwIG9wdGlvbiBvdXRwdXQgcCBwYXJhbSBwaWN0dXJlIHByZSBwcm9ncmVzcyBxIHJwIHJ0IHJ1YnkgcyBzYW1wIHNjcmlwdCBzZWN0aW9uIHNlbGVjdCBzbWFsbCBzb3VyY2Ugc3BhbiBzdHJvbmcgc3R5bGUgc3ViIHN1bW1hcnkgc3VwIHRhYmxlIHRib2R5IHRkIHRleHRhcmVhIHRmb290IHRoIHRoZWFkIHRpbWUgdGl0bGUgdHIgdHJhY2sgdSB1bCB2YXIgdmlkZW8gd2JyIGNpcmNsZSBjbGlwUGF0aCBkZWZzIGVsbGlwc2UgZyBpbWFnZSBsaW5lIGxpbmVhckdyYWRpZW50IG1hc2sgcGF0aCBwYXR0ZXJuIHBvbHlnb24gcG9seWxpbmUgcmFkaWFsR3JhZGllbnQgcmVjdCBzdG9wIHN2ZyB0ZXh0IHRzcGFuJy5zcGxpdCgnICcpO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeSh0eXBlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0eXBlKTtcbn1cbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG52YXIgRE9NID0ge307XG5leHBvcnRzLkRPTSA9IERPTTtcbmZvciAodmFyIGkgPSBFTEVNRU5UUy5sZW5ndGg7IGktLTspIHtcbiAgICBET01bRUxFTUVOVFNbaV1dID0gY3JlYXRlRmFjdG9yeShFTEVNRU5UU1tpXSk7XG59XG4vLyBNYXNrIFJlYWN0IGdsb2JhbCBpbiBicm93c2VyIGVudmlvcm5tZW50cyB3aGVuIFJlYWN0IGlzIG5vdCB1c2VkLlxuaWYgKGluZmVybm9fc2hhcmVkXzEuaXNCcm93c2VyICYmIHR5cGVvZiB3aW5kb3cuUmVhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGV4cG9ydHNfMSA9IHtcbiAgICAgICAgY3JlYXRlVk5vZGU6IGluZmVybm9fMS5jcmVhdGVWTm9kZSxcbiAgICAgICAgcmVuZGVyOiBpbmZlcm5vXzEucmVuZGVyLFxuICAgICAgICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnRfMS5kZWZhdWx0LFxuICAgICAgICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50LFxuICAgICAgICBDb21wb25lbnQ6IGluZmVybm9fY29tcG9uZW50XzEuZGVmYXVsdCxcbiAgICAgICAgUHVyZUNvbXBvbmVudDogUHVyZUNvbXBvbmVudCxcbiAgICAgICAgdW5tb3VudENvbXBvbmVudEF0Tm9kZTogdW5tb3VudENvbXBvbmVudEF0Tm9kZSxcbiAgICAgICAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlczogUHJvcFR5cGVzLFxuICAgICAgICBjcmVhdGVDbGFzczogaW5mZXJub19jcmVhdGVfY2xhc3NfMS5kZWZhdWx0LFxuICAgICAgICBmaW5kRE9NTm9kZTogaW5mZXJub18xLmZpbmRET01Ob2RlLFxuICAgICAgICBDaGlsZHJlbjogQ2hpbGRyZW4sXG4gICAgICAgIGNsb25lVk5vZGU6IGluZmVybm9fMS5jbG9uZVZOb2RlLFxuICAgICAgICBOT19PUDogaW5mZXJub19zaGFyZWRfMS5OT19PUCxcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI6IHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyLFxuICAgICAgICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5LFxuICAgICAgICBET006IERPTSxcbiAgICAgICAgRU1QVFlfT0JKOiBpbmZlcm5vXzEuRU1QVFlfT0JKXG4gICAgfTtcbiAgICB3aW5kb3cuUmVhY3QgPSBleHBvcnRzXzE7XG4gICAgd2luZG93LlJlYWN0RE9NID0gZXhwb3J0c18xO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZVZOb2RlOiBpbmZlcm5vXzEuY3JlYXRlVk5vZGUsXG4gICAgcmVuZGVyOiBpbmZlcm5vXzEucmVuZGVyLFxuICAgIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudF8xLmRlZmF1bHQsXG4gICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCxcbiAgICBDb21wb25lbnQ6IGluZmVybm9fY29tcG9uZW50XzEuZGVmYXVsdCxcbiAgICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuICAgIHVubW91bnRDb21wb25lbnRBdE5vZGU6IHVubW91bnRDb21wb25lbnRBdE5vZGUsXG4gICAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnQsXG4gICAgUHJvcFR5cGVzOiBQcm9wVHlwZXMsXG4gICAgY3JlYXRlQ2xhc3M6IGluZmVybm9fY3JlYXRlX2NsYXNzXzEuZGVmYXVsdCxcbiAgICBmaW5kRE9NTm9kZTogaW5mZXJub18xLmZpbmRET01Ob2RlLFxuICAgIENoaWxkcmVuOiBDaGlsZHJlbixcbiAgICBjbG9uZVZOb2RlOiBpbmZlcm5vXzEuY2xvbmVWTm9kZSxcbiAgICBOT19PUDogaW5mZXJub19zaGFyZWRfMS5OT19PUCxcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgIHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyOiB1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcixcbiAgICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5LFxuICAgIERPTTogRE9NLFxuICAgIEVNUFRZX09CSjogaW5mZXJub18xLkVNUFRZX09CSlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZmVybm9fc2hhcmVkXzEgPSByZXF1aXJlKFwiaW5mZXJuby1zaGFyZWRcIik7XG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmopIHtcbiAgICB2YXIgaXNOb3RBTnVsbE9iamVjdCA9IGluZmVybm9fc2hhcmVkXzEuaXNPYmplY3Qob2JqKSAmJiBpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChvYmopID09PSBmYWxzZTtcbiAgICBpZiAoaXNOb3RBTnVsbE9iamVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZmxhZ3MgPSBvYmouZmxhZ3M7XG4gICAgcmV0dXJuIChmbGFncyAmICgyOCAvKiBDb21wb25lbnQgKi8gfCAzOTcwIC8qIEVsZW1lbnQgKi8pKSA+IDA7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ZhbGlkRWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0JykuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBNYWtlIHN1cmUgdSB1c2UgRU1QVFlfT0JKIGZyb20gJ2luZmVybm8nLCBvdGhlcndpc2UgaXQnbGwgYmUgYSBkaWZmZXJlbnQgcmVmZXJlbmNlXG52YXIgaW5mZXJub18xID0gcmVxdWlyZShcImluZmVybm9cIik7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBub09wID0gaW5mZXJub19zaGFyZWRfMS5FUlJPUl9NU0c7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG5vT3AgPSAnSW5mZXJubyBFcnJvcjogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuIFRoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkIHNldFN0YXRlKCkgb3IgZm9yY2VVcGRhdGUoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiBUaGlzIGlzIGEgbm8tb3AuJztcbn1cbnZhciBjb21wb25lbnRDYWxsYmFja1F1ZXVlID0gbmV3IE1hcCgpO1xuLy8gd2hlbiBhIGNvbXBvbmVudHMgcm9vdCBWTm9kZSBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBjYW4gcnVuIGludG8gaXNzdWVzXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHZhciBwYXJlbnRWTm9kZSA9IHZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyhwYXJlbnRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmZ1bmN0aW9uIGFkZFRvUXVldWUoY29tcG9uZW50LCBmb3JjZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcXVldWUgPSBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmdldChjb21wb25lbnQpO1xuICAgIGlmIChxdWV1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuc2V0KGNvbXBvbmVudCwgcXVldWUpO1xuICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmRlbGV0ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgY29tcG9uZW50Ll91cGRhdGluZyA9IHRydWU7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcXVldWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWVbaV0uY2FsbChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29tcG9uZW50Ll91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHF1ZXVlU3RhdGVDaGFuZ2VzKGNvbXBvbmVudCwgbmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNGdW5jdGlvbihuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5wcm9wcywgY29tcG9uZW50LmNvbnRleHQpO1xuICAgIH1cbiAgICB2YXIgcGVuZGluZyA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xuICAgIGlmIChwZW5kaW5nID09PSBudWxsKSB7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0gcGVuZGluZyA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgc3RhdGVLZXkgaW4gbmV3U3RhdGUpIHtcbiAgICAgICAgICAgIHBlbmRpbmdbc3RhdGVLZXldID0gbmV3U3RhdGVbc3RhdGVLZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQnJvd3NlciAmJiAhY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgJiYgIWNvbXBvbmVudC5fYmxvY2tSZW5kZXIpIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnQuX3VwZGF0aW5nKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgY29tcG9uZW50Ll91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkVG9RdWV1ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuc3RhdGUgPSBwZW5kaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gcGVuZGluZ1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoY2FsbGJhY2spICYmIGNvbXBvbmVudC5fYmxvY2tSZW5kZXIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGNhbGxiYWNrLmJpbmQoY29tcG9uZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNvbXBvbmVudC5fdW5tb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGZvcmNlIHx8ICFjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBwZW5kaW5nU3RhdGUgPSBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZTtcbiAgICAgICAgdmFyIHByZXZTdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IGluZmVybm9fc2hhcmVkXzEuY29tYmluZUZyb20ocHJldlN0YXRlLCBwZW5kaW5nU3RhdGUpO1xuICAgICAgICB2YXIgcHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG4gICAgICAgIHZhciBjb250ZXh0XzEgPSBjb21wb25lbnQuY29udGV4dDtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSBudWxsO1xuICAgICAgICB2YXIgbmV4dElucHV0ID0gY29tcG9uZW50Ll91cGRhdGVDb21wb25lbnQocHJldlN0YXRlLCBuZXh0U3RhdGUsIHByb3BzLCBwcm9wcywgY29udGV4dF8xLCBmb3JjZSwgdHJ1ZSk7XG4gICAgICAgIHZhciBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gaW5mZXJub18xLmNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dElucHV0ID09PSBpbmZlcm5vX3NoYXJlZF8xLk5PX09QKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBpbmZlcm5vXzEuY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCBuZXh0SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgIHZhciB2Tm9kZSA9IGNvbXBvbmVudC5fdk5vZGU7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSAobGFzdElucHV0LmRvbSAmJiBsYXN0SW5wdXQuZG9tLnBhcmVudE5vZGUpIHx8IChsYXN0SW5wdXQuZG9tID0gdk5vZGUuZG9tKTtcbiAgICAgICAgY29tcG9uZW50Ll9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbnRleHQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQoY29tcG9uZW50LmdldENoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuX2NoaWxkQ29udGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGluZmVybm9fc2hhcmVkXzEuY29tYmluZUZyb20oY29udGV4dF8xLCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpZmVDeWNsZSA9IGNvbXBvbmVudC5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgaW5mZXJub18xLmludGVybmFsX3BhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVDeWNsZSwgY2hpbGRDb250ZXh0LCBjb21wb25lbnQuX2lzU1ZHLCBmYWxzZSk7XG4gICAgICAgICAgICBsaWZlQ3ljbGUudHJpZ2dlcigpO1xuICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZShwcm9wcywgcHJldlN0YXRlLCBjb250ZXh0XzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChpbmZlcm5vXzEub3B0aW9ucy5hZnRlclVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBpbmZlcm5vXzEub3B0aW9ucy5hZnRlclVwZGF0ZSh2Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvbSA9IHZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgIGlmIChpbmZlcm5vXzEub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIGluZmVybm9fMS5pbnRlcm5hbF9ET01Ob2RlTWFwLnNldChjb21wb25lbnQsIG5leHRJbnB1dC5kb20pO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZSA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKGNvbXBvbmVudCk7XG4gICAgfVxufVxudmFyIGFscmVhZHlXYXJuZWQgPSBmYWxzZTtcbnZhciBDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xuICAgICAgICB0aGlzLl92Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3VubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9saWZlY3ljbGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc1NWRyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwgaW5mZXJub18xLkVNUFRZX09CSjtcbiAgICAgICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgaW5mZXJub18xLkVNUFRZX09CSjsgLy8gY29udGV4dCBzaG91bGQgbm90IGJlIG11dGFibGVcbiAgICB9XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5fdW5tb3VudGVkIHx8ICFpbmZlcm5vX3NoYXJlZF8xLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFwcGx5U3RhdGUodGhpcywgdHJ1ZSwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICAgICAgcXVldWVTdGF0ZUNoYW5nZXModGhpcywgbmV3U3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKSBvciBjb25zdHJ1Y3Rvci4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlU3luYyA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCFhbHJlYWR5V2FybmVkKSB7XG4gICAgICAgICAgICAgICAgYWxyZWFkeVdhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbmZlcm5vIFdBUk5JTkc6IHNldFN0YXRlU3luYyBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCByZWxlYXNlLiBVc2Ugc2V0U3RhdGUgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJldlByb3BzLCBuZXh0UHJvcHMsIGNvbnRleHQsIGZvcmNlLCBmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3Iobm9PcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHByZXZQcm9wcyAhPT0gbmV4dFByb3BzIHx8IG5leHRQcm9wcyA9PT0gaW5mZXJub18xLkVNUFRZX09CSikgfHwgcHJldlN0YXRlICE9PSBuZXh0U3RhdGUgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIGlmIChwcmV2UHJvcHMgIT09IG5leHRQcm9wcyB8fCBuZXh0UHJvcHMgPT09IGluZmVybm9fMS5FTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQodGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKSAmJiAhZnJvbVNldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gaW5mZXJub19zaGFyZWRfMS5jb21iaW5lRnJvbShuZXh0U3RhdGUsIHRoaXMuX3BlbmRpbmdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIFVwZGF0ZSBpZiBzY3UgaXMgbm90IGRlZmluZWQsIG9yIGl0IHJldHVybnMgdHJ1dGh5IHZhbHVlIG9yIGZvcmNlICovXG4gICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZCh0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSkgfHwgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGluZmVybm9fMS5vcHRpb25zLmJlZm9yZVJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICBpbmZlcm5vXzEub3B0aW9ucy5iZWZvcmVSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZW5kZXIgPSB0aGlzLnJlbmRlcihuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZmVybm9fMS5vcHRpb25zLmFmdGVyUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmVybm9fMS5vcHRpb25zLmFmdGVyUmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZmVybm9fc2hhcmVkXzEuTk9fT1A7XG4gICAgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHsgfTtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLWNvbXBvbmVudFwiKTtcbnZhciBpbmZlcm5vX3NoYXJlZF8xID0gcmVxdWlyZShcImluZmVybm8tc2hhcmVkXCIpO1xuLy8gZG9uJ3QgYXV0b2JpbmQgdGhlc2UgbWV0aG9kcyBzaW5jZSB0aGV5IGFscmVhZHkgaGF2ZSBndWFyYW50ZWVkIGNvbnRleHQuXG52YXIgQVVUT0JJTkRfQkxBQ0tMSVNUID0gbmV3IFNldCgpO1xuQVVUT0JJTkRfQkxBQ0tMSVNULmFkZCgnY29uc3RydWN0b3InKTtcbkFVVE9CSU5EX0JMQUNLTElTVC5hZGQoJ3JlbmRlcicpO1xuQVVUT0JJTkRfQkxBQ0tMSVNULmFkZCgnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyk7XG5BVVRPQklORF9CTEFDS0xJU1QuYWRkKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyk7XG5BVVRPQklORF9CTEFDS0xJU1QuYWRkKCdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG5BVVRPQklORF9CTEFDS0xJU1QuYWRkKCdjb21wb25lbnREaWRVcGRhdGUnKTtcbkFVVE9CSU5EX0JMQUNLTElTVC5hZGQoJ2NvbXBvbmVudFdpbGxNb3VudCcpO1xuQVVUT0JJTkRfQkxBQ0tMSVNULmFkZCgnY29tcG9uZW50RGlkTW91bnQnKTtcbkFVVE9CSU5EX0JMQUNLTElTVC5hZGQoJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyk7XG5BVVRPQklORF9CTEFDS0xJU1QuYWRkKCdjb21wb25lbnREaWRVbm1vdW50Jyk7XG5mdW5jdGlvbiBleHRlbmQoYmFzZSwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocHJvcHNba2V5XSkpIHtcbiAgICAgICAgICAgIGJhc2Vba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhc2U7XG59XG5mdW5jdGlvbiBiaW5kQWxsKGN0eCkge1xuICAgIGZvciAodmFyIGkgaW4gY3R4KSB7XG4gICAgICAgIHZhciB2ID0gY3R4W2ldO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdmdW5jdGlvbicgJiYgIXYuX19ib3VuZCAmJiAhQVVUT0JJTkRfQkxBQ0tMSVNULmhhcyhpKSkge1xuICAgICAgICAgICAgKGN0eFtpXSA9IHYuYmluZChjdHgpKS5fX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbGxhdGVNaXhpbnMobWl4aW5zLCBrZXllZCkge1xuICAgIGlmIChrZXllZCA9PT0gdm9pZCAwKSB7IGtleWVkID0ge307IH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWl4aW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBtaXhpbiA9IG1peGluc1tpXTtcbiAgICAgICAgLy8gU3VycHJpc2U6IE1peGlucyBjYW4gaGF2ZSBtaXhpbnNcbiAgICAgICAgaWYgKG1peGluLm1peGlucykge1xuICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgY29sbGF0ZSBzdWItbWl4aW5zXG4gICAgICAgICAgICBjb2xsYXRlTWl4aW5zKG1peGluLm1peGlucywga2V5ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtaXhpbikge1xuICAgICAgICAgICAgaWYgKG1peGluLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIG1peGluW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAoa2V5ZWRba2V5XSB8fCAoa2V5ZWRba2V5XSA9IFtdKSkucHVzaChtaXhpbltrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5ZWQ7XG59XG5mdW5jdGlvbiBtdWx0aWhvb2soaG9va3MsIG1lcmdlRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmV0O1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaG9va3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBob29rID0gaG9va3NbaV07XG4gICAgICAgICAgICB2YXIgciA9IGhvb2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChtZXJnZUZuKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWVyZ2VGbihyZXQsIHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQocikpIHtcbiAgICAgICAgICAgICAgICByZXQgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlTm9EdXBlcyhwcmV2aW91cywgY3VycmVudCkge1xuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChjdXJyZW50KSkge1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNPYmplY3QoY3VycmVudCkpIHtcbiAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcignRXhwZWN0ZWQgTWl4aW4gdG8gcmV0dXJuIHZhbHVlIHRvIGJlIGFuIG9iamVjdCBvciBudWxsLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgICAgIHByZXZpb3VzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoXCJNaXhpbnMgcmV0dXJuIGR1cGxpY2F0ZSBrZXkgXCIgKyBrZXkgKyBcIiBpbiB0aGVpciByZXR1cm4gdmFsdWVzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2aW91c1trZXldID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmV2aW91cztcbn1cbmZ1bmN0aW9uIGFwcGx5TWl4aW4oa2V5LCBpbnN0LCBtaXhpbikge1xuICAgIHZhciBob29rcyA9IGluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQoaW5zdFtrZXldKSA/IG1peGluIDogbWl4aW4uY29uY2F0KGluc3Rba2V5XSk7XG4gICAgaWYgKGtleSA9PT0gJ2dldERlZmF1bHRQcm9wcycgfHwga2V5ID09PSAnZ2V0SW5pdGlhbFN0YXRlJyB8fCBrZXkgPT09ICdnZXRDaGlsZENvbnRleHQnKSB7XG4gICAgICAgIGluc3Rba2V5XSA9IG11bHRpaG9vayhob29rcywgbWVyZ2VOb0R1cGVzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc3Rba2V5XSA9IG11bHRpaG9vayhob29rcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlNaXhpbnMoQ2wsIG1peGlucykge1xuICAgIGZvciAodmFyIGtleSBpbiBtaXhpbnMpIHtcbiAgICAgICAgaWYgKG1peGlucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgbWl4aW4gPSBtaXhpbnNba2V5XTtcbiAgICAgICAgICAgIHZhciBpbnN0ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2dldERlZmF1bHRQcm9wcycpIHtcbiAgICAgICAgICAgICAgICBpbnN0ID0gQ2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnN0ID0gQ2wucHJvdG90eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNGdW5jdGlvbihtaXhpblswXSkpIHtcbiAgICAgICAgICAgICAgICBhcHBseU1peGluKGtleSwgaW5zdCwgbWl4aW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zdFtrZXldID0gbWl4aW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmopIHtcbiAgICB2YXIgQ2wgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQ2wsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIENsKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgICAgIGJpbmRBbGwoX3RoaXMpO1xuICAgICAgICAgICAgaWYgKF90aGlzLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gX3RoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQ2wucHJvdG90eXBlLnJlcGxhY2VTdGF0ZSA9IGZ1bmN0aW9uIChuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgICAgICBDbC5wcm90b3R5cGUuaXNNb3VudGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLl91bm1vdW50ZWQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBDbDtcbiAgICB9KGluZmVybm9fY29tcG9uZW50XzEuZGVmYXVsdCkpO1xuICAgIENsLmRpc3BsYXlOYW1lID0gb2JqLmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIENsLnByb3BUeXBlcyA9IG9iai5wcm9wVHlwZXM7XG4gICAgQ2wubWl4aW5zID0gb2JqLm1peGlucyAmJiBjb2xsYXRlTWl4aW5zKG9iai5taXhpbnMpO1xuICAgIENsLmdldERlZmF1bHRQcm9wcyA9IG9iai5nZXREZWZhdWx0UHJvcHM7XG4gICAgZXh0ZW5kKENsLnByb3RvdHlwZSwgb2JqKTtcbiAgICBpZiAob2JqLnN0YXRpY3MpIHtcbiAgICAgICAgZXh0ZW5kKENsLCBvYmouc3RhdGljcyk7XG4gICAgfVxuICAgIGlmIChvYmoubWl4aW5zKSB7XG4gICAgICAgIGFwcGx5TWl4aW5zKENsLCBjb2xsYXRlTWl4aW5zKG9iai5taXhpbnMpKTtcbiAgICB9XG4gICAgQ2wuZGVmYXVsdFByb3BzID0gaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChDbC5nZXREZWZhdWx0UHJvcHMpID8gdW5kZWZpbmVkIDogQ2wuZ2V0RGVmYXVsdFByb3BzKCk7XG4gICAgcmV0dXJuIENsO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2xhc3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbmZlcm5vXzEgPSByZXF1aXJlKFwiaW5mZXJub1wiKTtcbnZhciBpbmZlcm5vX3NoYXJlZF8xID0gcmVxdWlyZShcImluZmVybm8tc2hhcmVkXCIpO1xudmFyIGNvbXBvbmVudEhvb2tzID0gbmV3IFNldCgpO1xuY29tcG9uZW50SG9va3MuYWRkKCdvbkNvbXBvbmVudFdpbGxNb3VudCcpO1xuY29tcG9uZW50SG9va3MuYWRkKCdvbkNvbXBvbmVudERpZE1vdW50Jyk7XG5jb21wb25lbnRIb29rcy5hZGQoJ29uQ29tcG9uZW50V2lsbFVubW91bnQnKTtcbmNvbXBvbmVudEhvb2tzLmFkZCgnb25Db21wb25lbnRTaG91bGRVcGRhdGUnKTtcbmNvbXBvbmVudEhvb2tzLmFkZCgnb25Db21wb25lbnRXaWxsVXBkYXRlJyk7XG5jb21wb25lbnRIb29rcy5hZGQoJ29uQ29tcG9uZW50RGlkVXBkYXRlJyk7XG4vKipcbiAqIENyZWF0ZXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbnxDb21wb25lbnQ8YW55LCBhbnk+fSB0eXBlIFR5cGUgb2Ygbm9kZVxuICogQHBhcmFtIHtvYmplY3Q9fSBwcm9wcyBPcHRpb25hbCBwcm9wcyBmb3IgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0gey4uLntvYmplY3R9PX0gX2NoaWxkcmVuIE9wdGlvbmFsIGNoaWxkcmVuIGZvciB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtWTm9kZX0gbmV3IHZpcnR1YWwgbmRvZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzKSB7XG4gICAgdmFyIF9jaGlsZHJlbiA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIF9jaGlsZHJlbltfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKHR5cGUpIHx8IGluZmVybm9fc2hhcmVkXzEuaXNPYmplY3QodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZlcm5vIEVycm9yOiBjcmVhdGVFbGVtZW50KCkgbmFtZSBwYXJhbWV0ZXIgY2Fubm90IGJlIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2Ugb3IgdHJ1ZSwgSXQgbXVzdCBiZSBhIHN0cmluZywgY2xhc3Mgb3IgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIHZhciBjaGlsZHJlbiA9IF9jaGlsZHJlbjtcbiAgICB2YXIgcmVmID0gbnVsbDtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgY2xhc3NOYW1lID0gbnVsbDtcbiAgICB2YXIgZmxhZ3MgPSAwO1xuICAgIHZhciBuZXdQcm9wcztcbiAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZyh0eXBlKSkge1xuICAgICAgICBmbGFncyA9IGluZmVybm9fMS5nZXRGbGFnc0ZvckVsZW1lbnRWbm9kZSh0eXBlKTtcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocHJvcHMpKSB7XG4gICAgICAgICAgICBuZXdQcm9wcyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJyB8fCBwcm9wID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdjaGlsZHJlbicgJiYgaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgLy8gYWx3YXlzIGZhdm91ciBjaGlsZHJlbiBhcmdzLCBkZWZhdWx0IHRvIHByb3BzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHByb3BzLnJlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmbGFncyA9IDE2IC8qIENvbXBvbmVudFVua25vd24gKi87XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihwcm9wcykpIHtcbiAgICAgICAgICAgIG5ld1Byb3BzID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudEhvb2tzLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVmW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmZlcm5vXzEuY3JlYXRlVk5vZGUoZmxhZ3MsIHR5cGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIG5ld1Byb3BzLCBrZXksIHJlZik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5OT19PUCA9ICckTk9fT1AnO1xyXG5leHBvcnRzLkVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcclxuLy8gVGhpcyBzaG91bGQgYmUgYm9vbGVhbiBhbmQgbm90IHJlZmVyZW5jZSB0byB3aW5kb3cuZG9jdW1lbnRcclxuZXhwb3J0cy5pc0Jyb3dzZXIgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xyXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gZXhwb3J0cy5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogKGNoaWxkcmVuID8gW2NoaWxkcmVuXSA6IGNoaWxkcmVuKTtcclxufVxyXG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xyXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxyXG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxyXG5leHBvcnRzLmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xyXG5mdW5jdGlvbiBpc1N0YXRlZnVsQ29tcG9uZW50KG8pIHtcclxuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xyXG59XHJcbmV4cG9ydHMuaXNTdGF0ZWZ1bENvbXBvbmVudCA9IGlzU3RhdGVmdWxDb21wb25lbnQ7XHJcbmZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIobykge1xyXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgbztcclxuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcclxufVxyXG5leHBvcnRzLmlzU3RyaW5nT3JOdW1iZXIgPSBpc1N0cmluZ09yTnVtYmVyO1xyXG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG8pIHtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZChvKSB8fCBpc051bGwobyk7XHJcbn1cclxuZXhwb3J0cy5pc051bGxPclVuZGVmID0gaXNOdWxsT3JVbmRlZjtcclxuZnVuY3Rpb24gaXNJbnZhbGlkKG8pIHtcclxuICAgIHJldHVybiBpc051bGwobykgfHwgbyA9PT0gZmFsc2UgfHwgaXNUcnVlKG8pIHx8IGlzVW5kZWZpbmVkKG8pO1xyXG59XHJcbmV4cG9ydHMuaXNJbnZhbGlkID0gaXNJbnZhbGlkO1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG8pIHtcclxuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xyXG5mdW5jdGlvbiBpc1N0cmluZyhvKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnO1xyXG59XHJcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcclxuZnVuY3Rpb24gaXNOdW1iZXIobykge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJztcclxufVxyXG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XHJcbmZ1bmN0aW9uIGlzTnVsbChvKSB7XHJcbiAgICByZXR1cm4gbyA9PT0gbnVsbDtcclxufVxyXG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcclxuZnVuY3Rpb24gaXNUcnVlKG8pIHtcclxuICAgIHJldHVybiBvID09PSB0cnVlO1xyXG59XHJcbmV4cG9ydHMuaXNUcnVlID0gaXNUcnVlO1xyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XHJcbiAgICByZXR1cm4gbyA9PT0gdm9pZCAwO1xyXG59XHJcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcclxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JztcclxufVxyXG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XHJcbmZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xyXG4gICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGV4cG9ydHMuRVJST1JfTVNHO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW5mZXJubyBFcnJvcjogXCIgKyBtZXNzYWdlKTtcclxufVxyXG5leHBvcnRzLnRocm93RXJyb3IgPSB0aHJvd0Vycm9yO1xyXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcclxufVxyXG5leHBvcnRzLndhcm5pbmcgPSB3YXJuaW5nO1xyXG5mdW5jdGlvbiBjb21iaW5lRnJvbShmaXJzdCwgc2Vjb25kKSB7XHJcbiAgICB2YXIgb3V0ID0ge307XHJcbiAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmlyc3QpIHtcclxuICAgICAgICAgICAgb3V0W2tleV0gPSBmaXJzdFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzZWNvbmQpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2Vjb25kKSB7XHJcbiAgICAgICAgICAgIG91dFtrZXldID0gc2Vjb25kW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5leHBvcnRzLmNvbWJpbmVGcm9tID0gY29tYmluZUZyb207XHJcbmZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcclxuICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbn1cclxuZXhwb3J0cy5MaWZlY3ljbGUgPSBMaWZlY3ljbGU7XHJcbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbn07XHJcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIoKSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XHJcbiAgICB2YXIgbGlzdGVuZXI7XHJcbiAgICAvLyBXZSBuZWVkIHRvIHJlbW92ZSBjdXJyZW50IGxpc3RlbmVyIGZyb20gYXJyYXkgd2hlbiBjYWxsaW5nIGl0LCBiZWNhdXNlIG1vcmUgbGlzdGVuZXJzIG1pZ2h0IGJlIGFkZGVkXHJcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBsaXN0ZW5lcnMuc2hpZnQoKSkge1xyXG4gICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0Jyk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy54bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuZXhwb3J0cy54bWxOUyA9ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnO1xuZXhwb3J0cy5zdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnRzLnN0cmljdFByb3BzID0gbmV3IFNldCgpO1xuZXhwb3J0cy5zdHJpY3RQcm9wcy5hZGQoJ3ZvbHVtZScpO1xuZXhwb3J0cy5zdHJpY3RQcm9wcy5hZGQoJ2RlZmF1bHRDaGVja2VkJyk7XG5leHBvcnRzLmJvb2xlYW5Qcm9wcyA9IG5ldyBTZXQoKTtcbmV4cG9ydHMuYm9vbGVhblByb3BzLmFkZCgnbXV0ZWQnKTtcbmV4cG9ydHMuYm9vbGVhblByb3BzLmFkZCgnc2NvcGVkJyk7XG5leHBvcnRzLmJvb2xlYW5Qcm9wcy5hZGQoJ2xvb3AnKTtcbmV4cG9ydHMuYm9vbGVhblByb3BzLmFkZCgnb3BlbicpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdjaGVja2VkJyk7XG5leHBvcnRzLmJvb2xlYW5Qcm9wcy5hZGQoJ2RlZmF1bHQnKTtcbmV4cG9ydHMuYm9vbGVhblByb3BzLmFkZCgnY2FwdHVyZScpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdkaXNhYmxlZCcpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdyZWFkT25seScpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdyZXF1aXJlZCcpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdhdXRvcGxheScpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdjb250cm9scycpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdzZWFtbGVzcycpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdyZXZlcnNlZCcpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdhbGxvd2Z1bGxzY3JlZW4nKTtcbmV4cG9ydHMuYm9vbGVhblByb3BzLmFkZCgnbm92YWxpZGF0ZScpO1xuZXhwb3J0cy5ib29sZWFuUHJvcHMuYWRkKCdoaWRkZW4nKTtcbmV4cG9ydHMuYm9vbGVhblByb3BzLmFkZCgnYXV0b0ZvY3VzJyk7XG5leHBvcnRzLm5hbWVzcGFjZXMgPSBuZXcgTWFwKCk7XG5leHBvcnRzLm5hbWVzcGFjZXMuc2V0KCd4bGluazpocmVmJywgZXhwb3J0cy54bGlua05TKTtcbmV4cG9ydHMubmFtZXNwYWNlcy5zZXQoJ3hsaW5rOmFyY3JvbGUnLCBleHBvcnRzLnhsaW5rTlMpO1xuZXhwb3J0cy5uYW1lc3BhY2VzLnNldCgneGxpbms6YWN0dWF0ZScsIGV4cG9ydHMueGxpbmtOUyk7XG5leHBvcnRzLm5hbWVzcGFjZXMuc2V0KCd4bGluazpzaG93JywgZXhwb3J0cy54bGlua05TKTtcbmV4cG9ydHMubmFtZXNwYWNlcy5zZXQoJ3hsaW5rOnJvbGUnLCBleHBvcnRzLnhsaW5rTlMpO1xuZXhwb3J0cy5uYW1lc3BhY2VzLnNldCgneGxpbms6dGl0bGUnLCBleHBvcnRzLnhsaW5rTlMpO1xuZXhwb3J0cy5uYW1lc3BhY2VzLnNldCgneGxpbms6dHlwZScsIGV4cG9ydHMueGxpbmtOUyk7XG5leHBvcnRzLm5hbWVzcGFjZXMuc2V0KCd4bWw6YmFzZScsIGV4cG9ydHMueG1sTlMpO1xuZXhwb3J0cy5uYW1lc3BhY2VzLnNldCgneG1sOmxhbmcnLCBleHBvcnRzLnhtbE5TKTtcbmV4cG9ydHMubmFtZXNwYWNlcy5zZXQoJ3htbDpzcGFjZScsIGV4cG9ydHMueG1sTlMpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyID0gbmV3IFNldCgpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2JvcmRlckltYWdlT3V0c2V0Jyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdib3JkZXJJbWFnZVNsaWNlJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdib3JkZXJJbWFnZVdpZHRoJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdib3hGbGV4Jyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdib3hGbGV4R3JvdXAnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2JveE9yZGluYWxHcm91cCcpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnY29sdW1uQ291bnQnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2ZsZXgnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2ZsZXhHcm93Jyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdmbGV4UG9zaXRpdmUnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2ZsZXhTaHJpbmsnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2ZsZXhOZWdhdGl2ZScpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnZmxleE9yZGVyJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdncmlkUm93Jyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdncmlkQ29sdW1uJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdmb250V2VpZ2h0Jyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdsaW5lQ2xhbXAnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2xpbmVIZWlnaHQnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ29wYWNpdHknKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ29yZGVyJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCdvcnBoYW5zJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCd0YWJTaXplJyk7XG5leHBvcnRzLmlzVW5pdGxlc3NOdW1iZXIuYWRkKCd3aWRvd3MnKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ3pJbmRleCcpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnem9vbScpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnZmlsbE9wYWNpdHknKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ2Zsb29kT3BhY2l0eScpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnc3RvcE9wYWNpdHknKTtcbmV4cG9ydHMuaXNVbml0bGVzc051bWJlci5hZGQoJ3N0cm9rZURhc2hhcnJheScpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnc3Ryb2tlRGFzaG9mZnNldCcpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnc3Ryb2tlTWl0ZXJsaW1pdCcpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnc3Ryb2tlT3BhY2l0eScpO1xuZXhwb3J0cy5pc1VuaXRsZXNzTnVtYmVyLmFkZCgnc3Ryb2tlV2lkdGgnKTtcbmV4cG9ydHMuc2tpcFByb3BzID0gbmV3IFNldCgpO1xuZXhwb3J0cy5za2lwUHJvcHMuYWRkKCdjaGlsZHJlbicpO1xuZXhwb3J0cy5za2lwUHJvcHMuYWRkKCdjaGlsZHJlblR5cGUnKTtcbmV4cG9ydHMuc2tpcFByb3BzLmFkZCgnZGVmYXVsdFZhbHVlJyk7XG5leHBvcnRzLnNraXBQcm9wcy5hZGQoJ3JlZicpO1xuZXhwb3J0cy5za2lwUHJvcHMuYWRkKCdrZXknKTtcbmV4cG9ydHMuc2tpcFByb3BzLmFkZCgnc2VsZWN0ZWQnKTtcbmV4cG9ydHMuc2tpcFByb3BzLmFkZCgnY2hlY2tlZCcpO1xuZXhwb3J0cy5za2lwUHJvcHMuYWRkKCdtdWx0aXBsZScpO1xuZXhwb3J0cy5kZWxlZ2F0ZWRFdmVudHMgPSBuZXcgU2V0KCk7XG5leHBvcnRzLmRlbGVnYXRlZEV2ZW50cy5hZGQoJ29uQ2xpY2snKTtcbmV4cG9ydHMuZGVsZWdhdGVkRXZlbnRzLmFkZCgnb25Nb3VzZURvd24nKTtcbmV4cG9ydHMuZGVsZWdhdGVkRXZlbnRzLmFkZCgnb25Nb3VzZVVwJyk7XG5leHBvcnRzLmRlbGVnYXRlZEV2ZW50cy5hZGQoJ29uTW91c2VNb3ZlJyk7XG5leHBvcnRzLmRlbGVnYXRlZEV2ZW50cy5hZGQoJ29uU3VibWl0Jyk7XG5leHBvcnRzLmRlbGVnYXRlZEV2ZW50cy5hZGQoJ29uRGJsQ2xpY2snKTtcbmV4cG9ydHMuZGVsZWdhdGVkRXZlbnRzLmFkZCgnb25LZXlEb3duJyk7XG5leHBvcnRzLmRlbGVnYXRlZEV2ZW50cy5hZGQoJ29uS2V5VXAnKTtcbmV4cG9ydHMuZGVsZWdhdGVkRXZlbnRzLmFkZCgnb25LZXlQcmVzcycpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBpc2lPUyA9IGluZmVybm9fc2hhcmVkXzEuaXNCcm93c2VyICYmICEhbmF2aWdhdG9yLnBsYXRmb3JtICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG52YXIgZGVsZWdhdGVkRXZlbnRzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gaGFuZGxlRXZlbnQobmFtZSwgbGFzdEV2ZW50LCBuZXh0RXZlbnQsIGRvbSkge1xuICAgIHZhciBkZWxlZ2F0ZWRSb290cyA9IGRlbGVnYXRlZEV2ZW50cy5nZXQobmFtZSk7XG4gICAgaWYgKG5leHRFdmVudCkge1xuICAgICAgICBpZiAoIWRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cyA9IHsgaXRlbXM6IG5ldyBNYXAoKSwgZG9jRXZlbnQ6IG51bGwgfTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50ID0gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5zZXQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoaXNpT1MgJiYgbmFtZSA9PT0gJ29uQ2xpY2snKSB7XG4gICAgICAgICAgICAgICAgdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWxlZ2F0ZWRSb290cy5pdGVtcy5zZXQoZG9tLCBuZXh0RXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWxlZ2F0ZWRSb290cykge1xuICAgICAgICB2YXIgaXRlbXMgPSBkZWxlZ2F0ZWRSb290cy5pdGVtcztcbiAgICAgICAgaWYgKGl0ZW1zLmRlbGV0ZShkb20pKSB7XG4gICAgICAgICAgICAvLyBJZiBhbnkgaXRlbXMgd2VyZSBkZWxldGVkLCBjaGVjayBpZiBsaXN0ZW5lciBuZWVkIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIGlmIChpdGVtcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50KTtcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5oYW5kbGVFdmVudCA9IGhhbmRsZUV2ZW50O1xuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCwgdGFyZ2V0LCBpdGVtcywgY291bnQsIGlzQ2xpY2ssIGV2ZW50RGF0YSkge1xuICAgIHZhciBldmVudHNUb1RyaWdnZXIgPSBpdGVtcy5nZXQodGFyZ2V0KTtcbiAgICBpZiAoZXZlbnRzVG9UcmlnZ2VyKSB7XG4gICAgICAgIGNvdW50LS07XG4gICAgICAgIC8vIGxpbmtFdmVudCBvYmplY3RcbiAgICAgICAgZXZlbnREYXRhLmRvbSA9IHRhcmdldDtcbiAgICAgICAgaWYgKGV2ZW50c1RvVHJpZ2dlci5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnRzVG9UcmlnZ2VyLmV2ZW50KGV2ZW50c1RvVHJpZ2dlci5kYXRhLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudHNUb1RyaWdnZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jYW5jZWxCdWJibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgLy8gSHRtbCBOb2RlcyBjYW4gYmUgbmVzdGVkIGZlOiBzcGFuIGluc2lkZSBidXR0b24gaW4gdGhhdCBzY2VuYXJpbyBicm93c2VyIGRvZXMgbm90IGhhbmRsZSBkaXNhYmxlZCBhdHRyaWJ1dGUgb24gcGFyZW50LFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBldmVudCBsaXN0ZW5lciBpcyBvbiBkb2N1bWVudC5ib2R5XG4gICAgICAgIC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzXG4gICAgICAgIGlmIChwYXJlbnREb20gPT09IG51bGwgfHwgKGlzQ2xpY2sgJiYgcGFyZW50RG9tLm5vZGVUeXBlID09PSAxICYmIHBhcmVudERvbS5kaXNhYmxlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXJlbnREb20sIGl0ZW1zLCBjb3VudCwgaXNDbGljaywgZXZlbnREYXRhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFdmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgdmFyIGRvY0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBjb3VudCA9IGRlbGVnYXRlZFJvb3RzLml0ZW1zLnNpemU7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IHN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgICAgIC8vIEV2ZW50IGRhdGEgbmVlZHMgdG8gYmUgb2JqZWN0IHRvIHNhdmUgcmVmZXJlbmNlIHRvIGN1cnJlbnRUYXJnZXQgZ2V0dGVyXG4gICAgICAgICAgICB2YXIgZXZlbnREYXRhXzEgPSB7XG4gICAgICAgICAgICAgICAgZG9tOiBkb2N1bWVudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnY3VycmVudFRhcmdldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudERhdGFfMS5kb207XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIGV2ZW50LnRhcmdldCwgZGVsZWdhdGVkUm9vdHMuaXRlbXMsIGNvdW50LCBldmVudC50eXBlID09PSAnY2xpY2snLCBldmVudERhdGFfMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkb2NFdmVudCk7XG4gICAgcmV0dXJuIGRvY0V2ZW50O1xufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG5mdW5jdGlvbiBlbXB0eUZuKCkgeyB9XG5mdW5jdGlvbiB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pIHtcbiAgICAvLyBNb2JpbGUgU2FmYXJpIGRvZXMgbm90IGZpcmUgcHJvcGVybHkgYnViYmxlIGNsaWNrIGV2ZW50cyBvblxuICAgIC8vIG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cywgd2hpY2ggbWVhbnMgZGVsZWdhdGVkIGNsaWNrIGxpc3RlbmVycyBkbyBub3RcbiAgICAvLyBmaXJlLiBUaGUgd29ya2Fyb3VuZCBmb3IgdGhpcyBidWcgaW52b2x2ZXMgYXR0YWNoaW5nIGFuIGVtcHR5IGNsaWNrXG4gICAgLy8gbGlzdGVuZXIgb24gdGhlIHRhcmdldCBub2RlLlxuICAgIC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDEwLzA5L2NsaWNrX2V2ZW50X2RlbC5odG1sXG4gICAgLy8gSnVzdCBzZXQgaXQgdXNpbmcgdGhlIG9uY2xpY2sgcHJvcGVydHkgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIG1hbmFnZSBhbnlcbiAgICAvLyBib29ra2VlcGluZyBmb3IgaXQuIE5vdCBzdXJlIGlmIHdlIG5lZWQgdG8gY2xlYXIgaXQgd2hlbiB0aGUgbGlzdGVuZXIgaXNcbiAgICAvLyByZW1vdmVkLlxuICAgIC8vIFRPRE86IE9ubHkgZG8gdGhpcyBmb3IgdGhlIHJlbGV2YW50IFNhZmFyaXMgbWF5YmU/XG4gICAgZG9tLm9uY2xpY2sgPSBlbXB0eUZuO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIExpbmtzIGdpdmVuIGRhdGEgdG8gZXZlbnQgYXMgZmlyc3QgcGFyYW1ldGVyXG4gKiBAcGFyYW0geyp9IGRhdGEgZGF0YSB0byBiZSBsaW5rZWQsIGl0IHdpbGwgYmUgYXZhaWxhYmxlIGluIGZ1bmN0aW9uIGFzIGZpcnN0IHBhcmFtZXRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXZlbnQgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gZXZlbnQgb2NjdXJzXG4gKiBAcmV0dXJucyB7e2RhdGE6ICosIGV2ZW50OiBGdW5jdGlvbn19XG4gKi9cbmZ1bmN0aW9uIGxpbmtFdmVudChkYXRhLCBldmVudCkge1xuICAgIHJldHVybiB7IGRhdGE6IGRhdGEsIGV2ZW50OiBldmVudCB9O1xufVxuZXhwb3J0cy5saW5rRXZlbnQgPSBsaW5rRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbmZlcm5vX3NoYXJlZF8xID0gcmVxdWlyZShcImluZmVybm8tc2hhcmVkXCIpO1xudmFyIG9wdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9jb3JlL29wdGlvbnNcIik7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG52YXIgbW91bnRpbmdfMSA9IHJlcXVpcmUoXCIuL21vdW50aW5nXCIpO1xudmFyIHBhdGNoaW5nXzEgPSByZXF1aXJlKFwiLi9wYXRjaGluZ1wiKTtcbnZhciByZW5kZXJpbmdfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmluZ1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgcHJvY2Vzc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50XCIpO1xuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBpZiAoZG9tLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoZG9tLmRhdGEgPT09ICchJykge1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKHBsYWNlaG9sZGVyLCBkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0RG9tID0gZG9tLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgICAgICAgICBkb20gPSBsYXN0RG9tIHx8IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5ub3JtYWxpemVDaGlsZE5vZGVzID0gbm9ybWFsaXplQ2hpbGROb2RlcztcbmZ1bmN0aW9uIGh5ZHJhdGVDb21wb25lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcykge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICB2YXIgX2lzU1ZHID0gZG9tLm5hbWVzcGFjZVVSSSA9PT0gY29uc3RhbnRzXzEuc3ZnTlM7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHV0aWxzXzEuY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIF9pc1NWRywgbGlmZWN5Y2xlKTtcbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgaW5zdGFuY2UuX3ZDb21wb25lbnQgPSB2Tm9kZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICBtb3VudGluZ18xLm1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSk7XG4gICAgICAgIGluc3RhbmNlLl91cGRhdGluZyA9IGZhbHNlOyAvLyBNb3VudCBmaW5pc2hlZCBhbGxvdyBnb2luZyBzeW5jXG4gICAgICAgIGlmIChvcHRpb25zXzEub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJlbmRlcmluZ18xLmNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHV0aWxzXzEuY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQ7XG4gICAgICAgIHZOb2RlLmRvbSA9IGlucHV0LmRvbTtcbiAgICAgICAgbW91bnRpbmdfMS5tb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlRWxlbWVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHZOb2RlLmNsYXNzTmFtZTtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIGlzU1ZHID0gaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pID4gMDtcbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAxIHx8IGRvbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHZOb2RlLnR5cGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEud2FybmluZygnSW5mZXJubyBoeWRyYXRpb246IFNlcnZlci1zaWRlIG1hcmt1cCBkb2VzblxcJ3QgbWF0Y2ggY2xpZW50LXNpZGUgbWFya3VwIG9yIEluaXRpYWwgcmVuZGVyIHRhcmdldCBpcyBub3QgZW1wdHknKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3RG9tID0gbW91bnRpbmdfMS5tb3VudEVsZW1lbnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHV0aWxzXzEucmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNGb3JtRWxlbWVudCA9IChmbGFncyAmIDM1ODQgLyogRm9ybUVsZW1lbnQgKi8pID4gMDtcbiAgICAgICAgaWYgKGlzRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50XzEuaXNDb250cm9sbGVkRm9ybUVsZW1lbnQocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaGluZ18xLnBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgcHJvY2Vzc0VsZW1lbnRfMS5wcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSwgcHJvcHMsIHRydWUsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihjbGFzc05hbWUpKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNTVkcpIHtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlZikge1xuICAgICAgICBtb3VudGluZ18xLm1vdW50UmVmKGRvbSwgcmVmLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSk7XG4gICAgdmFyIGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKGNoaWxkKSAmJiBpbmZlcm5vX3NoYXJlZF8xLmlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwoZG9tKSkge1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBoeWRyYXRlKGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91bnRpbmdfMS5tb3VudChjaGlsZCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICBpZiAoZG9tICYmIGRvbS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgaWYgKGRvbS5ub2RlVmFsdWUgIT09IGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgZG9tLm5vZGVWYWx1ZSA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBwYXJlbnREb20udGV4dENvbnRlbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIGh5ZHJhdGUoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICBkb20gPSBuZXh0U2libGluZztcbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMykge1xuICAgICAgICB2YXIgbmV3RG9tID0gbW91bnRpbmdfMS5tb3VudFRleHQodk5vZGUsIG51bGwpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHV0aWxzXzEucmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIHZhciB0ZXh0ID0gdk5vZGUuY2hpbGRyZW47XG4gICAgaWYgKGRvbS5ub2RlVmFsdWUgIT09IHRleHQpIHtcbiAgICAgICAgZG9tLm5vZGVWYWx1ZSA9IHRleHQ7XG4gICAgfVxuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZVZvaWQodk5vZGUsIGRvbSkge1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZSh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIChmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pID4gMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlRWxlbWVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZVZvaWQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKFwiaHlkcmF0ZSgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyB0eXBlb2Ygdk5vZGUgKyBcIlxcXCIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcigpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVSb290KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSkge1xuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwoZG9tKSkge1xuICAgICAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIHV0aWxzXzEuRU1QVFlfT0JKLCBmYWxzZSk7XG4gICAgICAgICAgICBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIC8vIGNsZWFyIGFueSBvdGhlciBET00gbm9kZXMsIHRoZXJlIHNob3VsZCBiZSBvbmx5IGEgc2luZ2xlIGVudHJ5IGZvciB0aGUgcm9vdFxuICAgICAgICAgICAgd2hpbGUgKGRvbSA9IGRvbS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5oeWRyYXRlUm9vdCA9IGh5ZHJhdGVSb290O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpO1xudmFyIFZOb2Rlc18xID0gcmVxdWlyZShcIi4uL2NvcmUvVk5vZGVzXCIpO1xudmFyIHBhdGNoaW5nXzEgPSByZXF1aXJlKFwiLi9wYXRjaGluZ1wiKTtcbnZhciByZWN5Y2xpbmdfMSA9IHJlcXVpcmUoXCIuL3JlY3ljbGluZ1wiKTtcbnZhciByZW5kZXJpbmdfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmluZ1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgcHJvY2Vzc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50XCIpO1xuZnVuY3Rpb24gbW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgKGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLykgPiAwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50VGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZOb2RlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcihcIm1vdW50KCkgcmVjZWl2ZWQgYW4gb2JqZWN0IHRoYXQncyBub3QgYSB2YWxpZCBWTm9kZSwgeW91IHNob3VsZCBzdHJpbmdpZnkgaXQgZmlyc3QuIE9iamVjdDogXFxcIlwiICsgSlNPTi5zdHJpbmdpZnkodk5vZGUpICsgXCJcXFwiLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcihcIm1vdW50KCkgZXhwZWN0cyBhIHZhbGlkIFZOb2RlLCBpbnN0ZWFkIGl0IHJlY2VpdmVkIGFuIG9iamVjdCB3aXRoIHRoZSB0eXBlIFxcXCJcIiArIHR5cGVvZiB2Tm9kZSArIFwiXFxcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZXhwb3J0cy5tb3VudCA9IG1vdW50O1xuZnVuY3Rpb24gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodk5vZGUuY2hpbGRyZW4pO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5leHBvcnRzLm1vdW50VGV4dCA9IG1vdW50VGV4dDtcbmZ1bmN0aW9uIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgdmFyIGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0cy5tb3VudFZvaWQgPSBtb3VudFZvaWQ7XG5mdW5jdGlvbiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChvcHRpb25zXzEub3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBkb21fMSA9IHJlY3ljbGluZ18xLnJlY3ljbGVFbGVtZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChkb21fMSkpIHtcbiAgICAgICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIHV0aWxzXzEuYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb21fMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9tXzE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaXNTVkcgPSBpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykgPiAwO1xuICAgIHZhciBkb20gPSB1dGlsc18xLmRvY3VtZW50Q3JlYXRlRWxlbWVudCh2Tm9kZS50eXBlLCBpc1NWRyk7XG4gICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHZOb2RlLmNsYXNzTmFtZTtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXRpbHNfMS5zZXRUZXh0Q29udGVudChkb20sIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoVk5vZGVzXzEuaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwocHJvcHMpKSB7XG4gICAgICAgIHZhciBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzRm9ybUVsZW1lbnQgPSAoZmxhZ3MgJiAzNTg0IC8qIEZvcm1FbGVtZW50ICovKSA+IDA7XG4gICAgICAgIGlmIChpc0Zvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudF8xLmlzQ29udHJvbGxlZEZvcm1FbGVtZW50KHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hpbmdfMS5wYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHByb2Nlc3NFbGVtZW50XzEucHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20sIHByb3BzLCB0cnVlLCBoYXNDb250cm9sbGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwocmVmKSkge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0cy5tb3VudEVsZW1lbnQgPSBtb3VudEVsZW1lbnQ7XG5mdW5jdGlvbiBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgLy8gVmVyaWZ5IGNhbiBzdHJpbmcvbnVtYmVyIGJlIGhlcmUuIG1pZ2h0IGNhdXNlIGRlLW9wdC4gLSBOb3JtYWxpemF0aW9uIHRha2VzIGNhcmUgb2YgaXQuXG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuZG9tKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0gPSBjaGlsZCA9IFZOb2Rlc18xLmRpcmVjdENsb25lKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5tb3VudEFycmF5Q2hpbGRyZW4gPSBtb3VudEFycmF5Q2hpbGRyZW47XG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgaWYgKG9wdGlvbnNfMS5vcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGRvbV8yID0gcmVjeWNsaW5nXzEucmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwoZG9tXzIpKSB7XG4gICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICB1dGlsc18xLmFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tXzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbV8yO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZhciBkb207XG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdXRpbHNfMS5jcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgaXNTVkcsIGxpZmVjeWNsZSk7XG4gICAgICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICB2Tm9kZS5kb20gPSBkb20gPSBtb3VudChpbnB1dCwgbnVsbCwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgdXRpbHNfMS5hcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgaW5zdGFuY2UuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zXzEub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJlbmRlcmluZ18xLmNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHV0aWxzXzEuY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dDtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIHV0aWxzXzEuYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5leHBvcnRzLm1vdW50Q29tcG9uZW50ID0gbW91bnRDb21wb25lbnQ7XG5mdW5jdGlvbiBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc09iamVjdChyZWYpICYmICh2Tm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcignZnVuY3Rpb25hbCBjb21wb25lbnQgbGlmZWN5Y2xlIGV2ZW50cyBhcmUgbm90IHN1cHBvcnRlZCBvbiBFUzIwMTUgY2xhc3MgY29tcG9uZW50cy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcihcImEgYmFkIHZhbHVlIGZvciBcXFwicmVmXFxcIiB3YXMgdXNlZCBvbiBjb21wb25lbnQ6IFxcXCJcIiArIEpTT04uc3RyaW5naWZ5KHJlZikgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGhhc0RpZE1vdW50ID0gIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQoaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQpO1xuICAgIHZhciBhZnRlck1vdW50ID0gb3B0aW9uc18xLm9wdGlvbnMuYWZ0ZXJNb3VudDtcbiAgICBpZiAoaGFzRGlkTW91bnQgfHwgIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKGFmdGVyTW91bnQpKSB7XG4gICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGFmdGVyTW91bnQpIHtcbiAgICAgICAgICAgICAgICBhZnRlck1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNEaWRNb3VudCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5tb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzID0gbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcztcbmZ1bmN0aW9uIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnREaWRNb3VudCkpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiByZWYub25Db21wb25lbnREaWRNb3VudChkb20pOyB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMubW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzID0gbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzO1xuZnVuY3Rpb24gbW91bnRSZWYoZG9tLCB2YWx1ZSwgbGlmZWN5Y2xlKSB7XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlKGRvbSk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZXhwb3J0cy5tb3VudFJlZiA9IG1vdW50UmVmO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpO1xudmFyIFZOb2Rlc18xID0gcmVxdWlyZShcIi4uL2NvcmUvVk5vZGVzXCIpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIGRlbGVnYXRpb25fMSA9IHJlcXVpcmUoXCIuL2V2ZW50cy9kZWxlZ2F0aW9uXCIpO1xudmFyIG1vdW50aW5nXzEgPSByZXF1aXJlKFwiLi9tb3VudGluZ1wiKTtcbnZhciByZW5kZXJpbmdfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmluZ1wiKTtcbnZhciB1bm1vdW50aW5nXzEgPSByZXF1aXJlKFwiLi91bm1vdW50aW5nXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBwcm9jZXNzRWxlbWVudF8xID0gcmVxdWlyZShcIi4vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnRcIik7XG5mdW5jdGlvbiBwYXRjaChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChsYXN0Vk5vZGUgIT09IG5leHRWTm9kZSkge1xuICAgICAgICB2YXIgbGFzdEZsYWdzID0gbGFzdFZOb2RlLmZsYWdzO1xuICAgICAgICB2YXIgbmV4dEZsYWdzID0gbmV4dFZOb2RlLmZsYWdzO1xuICAgICAgICBpZiAobmV4dEZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hDb21wb25lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dEZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbHNfMS5yZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudGluZ18xLm1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgKG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pID4gMCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWxzXzEucmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRpbmdfMS5tb3VudEVsZW1lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbHNfMS5yZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudGluZ18xLm1vdW50VGV4dChuZXh0Vk5vZGUsIG51bGwpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoVm9pZChsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsc18xLnJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50aW5nXzEubW91bnRWb2lkKG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlOiBtb3VudCBuZXcgb25lIHJlcGxhY2luZyBvbGQgb25lXG4gICAgICAgICAgICB1dGlsc18xLnJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKFZOb2Rlc18xLmlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRpbmdfMS51bm1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIHV0aWxzXzEucmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEVsZW1lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbmV4dFRhZyA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBsYXN0VGFnID0gbGFzdFZOb2RlLnR5cGU7XG4gICAgaWYgKGxhc3RUYWcgIT09IG5leHRUYWcpIHtcbiAgICAgICAgdXRpbHNfMS5yZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgIHZhciBsYXN0UHJvcHMgPSBsYXN0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBsYXN0Q2hpbGRyZW4gPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0UmVmID0gbmV4dFZOb2RlLnJlZjtcbiAgICAgICAgdmFyIGxhc3RDbGFzc05hbWUgPSBsYXN0Vk5vZGUuY2xhc3NOYW1lO1xuICAgICAgICB2YXIgbmV4dENsYXNzTmFtZSA9IG5leHRWTm9kZS5jbGFzc05hbWU7XG4gICAgICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgICAgIGlzU1ZHID0gaXNTVkcgfHwgKG5leHRGbGFncyAmIDEyOCAvKiBTdmdFbGVtZW50ICovKSA+IDA7XG4gICAgICAgIGlmIChsYXN0Q2hpbGRyZW4gIT09IG5leHRDaGlsZHJlbikge1xuICAgICAgICAgICAgcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlubGluZWQgcGF0Y2hQcm9wcyAgLS0gc3RhcnRzIC0tXG4gICAgICAgIGlmIChsYXN0UHJvcHMgIT09IG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIGxhc3RQcm9wc09yRW1wdHkgPSBsYXN0UHJvcHMgfHwgdXRpbHNfMS5FTVBUWV9PQko7XG4gICAgICAgICAgICB2YXIgbmV4dFByb3BzT3JFbXB0eSA9IG5leHRQcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICAgICAgICAgIHZhciBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHNPckVtcHR5ICE9PSB1dGlsc18xLkVNUFRZX09CSikge1xuICAgICAgICAgICAgICAgIHZhciBpc0Zvcm1FbGVtZW50ID0gKG5leHRGbGFncyAmIDM1ODQgLyogRm9ybUVsZW1lbnQgKi8pID4gMDtcbiAgICAgICAgICAgICAgICBpZiAoaXNGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudF8xLmlzQ29udHJvbGxlZEZvcm1FbGVtZW50KG5leHRQcm9wc09yRW1wdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG5leHRQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHRQcm9wc09yRW1wdHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSBsYXN0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0Zvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFbGVtZW50XzEucHJvY2Vzc0VsZW1lbnQobmV4dEZsYWdzLCBuZXh0Vk5vZGUsIGRvbSwgbmV4dFByb3BzT3JFbXB0eSwgZmFsc2UsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RQcm9wc09yRW1wdHkgIT09IHV0aWxzXzEuRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBsYXN0UHJvcHNPckVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobmV4dFByb3BzT3JFbXB0eVtwcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb3AocHJvcCwgbGFzdFByb3BzT3JFbXB0eVtwcm9wXSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIGVuZHMgLS1cbiAgICAgICAgaWYgKGxhc3RDbGFzc05hbWUgIT09IG5leHRDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobmV4dENsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV4dENsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb20uY2xhc3NOYW1lID0gbmV4dENsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZWYpIHtcbiAgICAgICAgICAgIGlmIChsYXN0Vk5vZGUucmVmICE9PSBuZXh0UmVmIHx8IGlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgbW91bnRpbmdfMS5tb3VudFJlZihkb20sIG5leHRSZWYsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnBhdGNoRWxlbWVudCA9IHBhdGNoRWxlbWVudDtcbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIHBhdGNoQXJyYXkgPSBmYWxzZTtcbiAgICB2YXIgcGF0Y2hLZXllZCA9IGZhbHNlO1xuICAgIGlmIChuZXh0RmxhZ3MgJiA2NCAvKiBIYXNOb25LZXllZENoaWxkcmVuICovKSB7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgobGFzdEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykgPiAwICYmIChuZXh0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSA+IDApIHtcbiAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzSW52YWxpZChuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1dGlsc18xLnNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkobmV4dENoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIG1vdW50aW5nXzEubW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdW50aW5nXzEubW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzU3RyaW5nT3JOdW1iZXIobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXRpbHNfMS51cGRhdGVUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgdXRpbHNfMS5zZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzS2V5ZWQobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgbW91bnRpbmdfMS5tb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHV0aWxzXzEucmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBsYXN0Q2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICBtb3VudGluZ18xLm1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoVk5vZGVzXzEuaXNWTm9kZShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChWTm9kZXNfMS5pc1ZOb2RlKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudGluZ18xLm1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0Y2hBcnJheSkge1xuICAgICAgICBpZiAocGF0Y2hLZXllZCkge1xuICAgICAgICAgICAgcGF0Y2hLZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBsYXN0VHlwZSA9IGxhc3RWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0VHlwZSA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBsYXN0S2V5ID0gbGFzdFZOb2RlLmtleTtcbiAgICB2YXIgbmV4dEtleSA9IG5leHRWTm9kZS5rZXk7XG4gICAgaWYgKGxhc3RUeXBlICE9PSBuZXh0VHlwZSB8fCBsYXN0S2V5ICE9PSBuZXh0S2V5KSB7XG4gICAgICAgIHV0aWxzXzEucmVwbGFjZVdpdGhOZXdOb2RlKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG5leHRQcm9wcyA9IG5leHRWTm9kZS5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGluc3RhbmNlLl91cGRhdGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1dGlsc18xLnJlcGxhY2VDaGlsZChwYXJlbnREb20sIG1vdW50aW5nXzEubW91bnRDb21wb25lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCAobmV4dFZOb2RlLmZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLykgPiAwKSwgbGFzdFZOb2RlLmRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ29tcG9uZW50RGlkVXBkYXRlID0gIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQoaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBjb21wb25lbnQgaGFzIGNvbXBvbmVudERpZFVwZGF0ZSBob29rLCB3ZSBuZWVkIHRvIGNsb25lIGxhc3RTdGF0ZSBvciB3aWxsIGJlIG1vZGlmaWVkIGJ5IHJlZmVyZW5jZSBkdXJpbmcgdXBkYXRlXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RTdGF0ZSA9IGhhc0NvbXBvbmVudERpZFVwZGF0ZSA/IGluZmVybm9fc2hhcmVkXzEuY29tYmluZUZyb20obmV4dFN0YXRlLCBudWxsKSA6IG5leHRTdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29udGV4dCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQoaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBpbmZlcm5vX3NoYXJlZF8xLmNvbWJpbmVGcm9tKGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBsYXN0SW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5wdXQgPSBpbnN0YW5jZS5fdXBkYXRlQ29tcG9uZW50KGxhc3RTdGF0ZSwgbmV4dFN0YXRlLCBsYXN0UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY2hpbGRDb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzSW52YWxpZChuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IFZOb2Rlc18xLmNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0SW5wdXQgPT09IGluZmVybm9fc2hhcmVkXzEuTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gbGFzdElucHV0O1xuICAgICAgICAgICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gVk5vZGVzXzEuY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzT2JqZWN0KG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChuZXh0SW5wdXQuZG9tKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUobmV4dElucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0NvbXBvbmVudERpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbGFzdFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKG9wdGlvbnNfMS5vcHRpb25zLmFmdGVyVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc18xLm9wdGlvbnMuYWZ0ZXJVcGRhdGUobmV4dFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uc18xLm9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmdfMS5jb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3RhbmNlLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbGFzdFByb3BzID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICAgICAgdmFyIG5leHRIb29rcyA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgICAgICB2YXIgbmV4dEhvb2tzRGVmaW5lZCA9ICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobmV4dEhvb2tzKTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5wdXQgPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgbmV4dElucHV0ID0gbGFzdElucHV0O1xuICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBsYXN0SW5wdXQ7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFNob3VsZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gbmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKGxhc3RQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZShsYXN0UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IG5leHRUeXBlKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gVk5vZGVzXzEuY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpICYmIG5leHRJbnB1dCAhPT0gaW5mZXJub19zaGFyZWRfMS5OT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBWTm9kZXNfMS5jcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0LCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNPYmplY3QobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKG5leHRJbnB1dC5kb20pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShuZXh0SW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQgIT09IGluZmVybm9fc2hhcmVkXzEuTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbmV4dElucHV0LnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbGFzdElucHV0LnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMucGF0Y2hDb21wb25lbnQgPSBwYXRjaENvbXBvbmVudDtcbmZ1bmN0aW9uIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIHZhciBuZXh0VGV4dCA9IG5leHRWTm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICBuZXh0Vk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChsYXN0Vk5vZGUuY2hpbGRyZW4gIT09IG5leHRUZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSBuZXh0VGV4dDtcbiAgICB9XG59XG5leHBvcnRzLnBhdGNoVGV4dCA9IHBhdGNoVGV4dDtcbmZ1bmN0aW9uIHBhdGNoVm9pZChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xufVxuZXhwb3J0cy5wYXRjaFZvaWQgPSBwYXRjaFZvaWQ7XG5mdW5jdGlvbiBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbGFzdENoaWxkcmVuTGVuZ3RoID0gbGFzdENoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgbmV4dENoaWxkcmVuTGVuZ3RoID0gbmV4dENoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgY29tbW9uTGVuZ3RoID0gbGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoID8gbmV4dENoaWxkcmVuTGVuZ3RoIDogbGFzdENoaWxkcmVuTGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgIGlmIChuZXh0Q2hpbGQuZG9tKSB7XG4gICAgICAgICAgICBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV0gPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShuZXh0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbltpXSwgbmV4dENoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA8IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBuZXh0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2hpbGQuZG9tKSB7XG4gICAgICAgICAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUobmV4dENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHV0aWxzXzEuYXBwZW5kQ2hpbGQoZG9tLCBtb3VudGluZ18xLm1vdW50KG5leHRDaGlsZCwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5leHRDaGlsZHJlbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICB1dGlsc18xLnJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IGxhc3RDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1bm1vdW50aW5nXzEudW5tb3VudChsYXN0Q2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5wYXRjaE5vbktleWVkQ2hpbGRyZW4gPSBwYXRjaE5vbktleWVkQ2hpbGRyZW47XG5mdW5jdGlvbiBwYXRjaEtleWVkQ2hpbGRyZW4oYSwgYiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBhTGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgdmFyIGJMZW5ndGggPSBiLmxlbmd0aDtcbiAgICB2YXIgYUVuZCA9IGFMZW5ndGggLSAxO1xuICAgIHZhciBiRW5kID0gYkxlbmd0aCAtIDE7XG4gICAgdmFyIGFTdGFydCA9IDA7XG4gICAgdmFyIGJTdGFydCA9IDA7XG4gICAgdmFyIGk7XG4gICAgdmFyIGo7XG4gICAgdmFyIGFOb2RlO1xuICAgIHZhciBiTm9kZTtcbiAgICB2YXIgbmV4dE5vZGU7XG4gICAgdmFyIG5leHRQb3M7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGFMZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKGJMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtb3VudGluZ18xLm1vdW50QXJyYXlDaGlsZHJlbihiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYkxlbmd0aCA9PT0gMCkge1xuICAgICAgICB1dGlsc18xLnJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgdmFyIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgdmFyIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICB2YXIgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoYlN0YXJ0Tm9kZSk7XG4gICAgfVxuICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoYkVuZE5vZGUpO1xuICAgIH1cbiAgICAvLyBTdGVwIDFcbiAgICAvKiBlc2xpbnQgbm8tY29uc3RhbnQtY29uZGl0aW9uOiAwICovXG4gICAgb3V0ZXI6IHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGJlZ2lubmluZy5cbiAgICAgICAgd2hpbGUgKGFTdGFydE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgZW5kLlxuICAgICAgICB3aGlsZSAoYUVuZE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICBpZiAoYUVuZE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgdXRpbHNfMS5pbnNlcnRPckFwcGVuZChkb20sIGJTdGFydE5vZGUuZG9tLCBhU3RhcnROb2RlLmRvbSk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGFuZCBzeW5jIG5vZGVzIGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgaWYgKGFTdGFydE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJFbmROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgdXRpbHNfMS5pbnNlcnRPckFwcGVuZChkb20sIGJFbmROb2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IFZOb2Rlc18xLmRpcmVjdENsb25lKGJFbmROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYVN0YXJ0ID4gYUVuZCkge1xuICAgICAgICBpZiAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8PSBiRW5kKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IFZOb2Rlc18xLmRpcmVjdENsb25lKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgICAgICB1dGlsc18xLmluc2VydE9yQXBwZW5kKGRvbSwgbW91bnRpbmdfMS5tb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgd2hpbGUgKGFTdGFydCA8PSBhRW5kKSB7XG4gICAgICAgICAgICB1bm1vdW50aW5nXzEudW5tb3VudChhW2FTdGFydCsrXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFMZW5ndGggPSBhRW5kIC0gYVN0YXJ0ICsgMTtcbiAgICAgICAgYkxlbmd0aCA9IGJFbmQgLSBiU3RhcnQgKyAxO1xuICAgICAgICB2YXIgc291cmNlcyA9IG5ldyBBcnJheShiTGVuZ3RoKTtcbiAgICAgICAgLy8gTWFyayBhbGwgbm9kZXMgYXMgaW5zZXJ0ZWQuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNvdXJjZXNbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBvcyA9IDA7XG4gICAgICAgIHZhciBwYXRjaGVkID0gMDtcbiAgICAgICAgLy8gV2hlbiBzaXplcyBhcmUgc21hbGwsIGp1c3QgbG9vcCB0aGVtIHRocm91Z2hcbiAgICAgICAgaWYgKChiTGVuZ3RoIDw9IDQpIHx8IChhTGVuZ3RoICogYkxlbmd0aCA8PSAxNikpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJTdGFydDsgaiA8PSBiRW5kOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhTm9kZS5rZXkgPT09IGJOb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXlJbmRleCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8vIE1hcCBrZXlzIGJ5IHRoZWlyIGluZGV4IGluIGFycmF5XG4gICAgICAgICAgICBmb3IgKGkgPSBiU3RhcnQ7IGkgPD0gYkVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAga2V5SW5kZXguc2V0KGJbaV0ua2V5LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyeSB0byBwYXRjaCBzYW1lIGtleXNcbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBrZXlJbmRleC5nZXQoYU5vZGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKGopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiTm9kZSA9IGJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzW2ogLSBiU3RhcnRdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW2pdID0gYk5vZGUgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmFzdC1wYXRoOiBpZiBub3RoaW5nIHBhdGNoZWQgcmVtb3ZlIGFsbCBvbGQgYW5kIGFkZCBhbGwgbmV3XG4gICAgICAgIGlmIChhTGVuZ3RoID09PSBhLmxlbmd0aCAmJiBwYXRjaGVkID09PSAwKSB7XG4gICAgICAgICAgICB1dGlsc18xLnJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pbnNlcnRPckFwcGVuZChkb20sIG1vdW50aW5nXzEubW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaSA9IGFMZW5ndGggLSBwYXRjaGVkO1xuICAgICAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2FTdGFydCsrXTtcbiAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKGFOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bm1vdW50aW5nXzEudW5tb3VudChhTm9kZSwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXEgPSBsaXNfYWxnb3JpdGhtKHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgIGogPSBzZXEubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsc18xLmluc2VydE9yQXBwZW5kKGRvbSwgbW91bnRpbmdfMS5tb3VudChub2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaSAhPT0gc2VxW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzXzEuaW5zZXJ0T3JBcHBlbmQoZG9tLCBub2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0Y2hlZCAhPT0gYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gcGF0Y2hlZCBjb3VudCBkb2Vzbid0IG1hdGNoIGIgbGVuZ3RoIHdlIG5lZWQgdG8gaW5zZXJ0IHRob3NlIG5ldyBvbmVzXG4gICAgICAgICAgICAgICAgLy8gbG9vcCBiYWNrd2FyZHMgc28gd2UgY2FuIHVzZSBpbnNlcnRCZWZvcmVcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsc18xLmluc2VydE9yQXBwZW5kKGRvbSwgbW91bnRpbmdfMS5tb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5wYXRjaEtleWVkQ2hpbGRyZW4gPSBwYXRjaEtleWVkQ2hpbGRyZW47XG4vLyAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Mb25nZXN0X2luY3JlYXNpbmdfc3Vic2VxdWVuY2VcbmZ1bmN0aW9uIGxpc19hbGdvcml0aG0oYXJyKSB7XG4gICAgdmFyIHAgPSBhcnIuc2xpY2UoMCk7XG4gICAgdmFyIHJlc3VsdCA9IFswXTtcbiAgICB2YXIgaTtcbiAgICB2YXIgajtcbiAgICB2YXIgdTtcbiAgICB2YXIgdjtcbiAgICB2YXIgYztcbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGFyckkgPSBhcnJbaV07XG4gICAgICAgIGlmIChhcnJJID09PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhcnJbal0gPCBhcnJJKSB7XG4gICAgICAgICAgICBwW2ldID0gajtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdSA9IDA7XG4gICAgICAgIHYgPSByZXN1bHQubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKHUgPCB2KSB7XG4gICAgICAgICAgICBjID0gKCh1ICsgdikgLyAyKSB8IDA7XG4gICAgICAgICAgICBpZiAoYXJyW3Jlc3VsdFtjXV0gPCBhcnJJKSB7XG4gICAgICAgICAgICAgICAgdSA9IGMgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdiA9IGM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyckkgPCBhcnJbcmVzdWx0W3VdXSkge1xuICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcFtpXSA9IHJlc3VsdFt1IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbdV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHUgPSByZXN1bHQubGVuZ3RoO1xuICAgIHYgPSByZXN1bHRbdSAtIDFdO1xuICAgIHdoaWxlICh1LS0gPiAwKSB7XG4gICAgICAgIHJlc3VsdFt1XSA9IHY7XG4gICAgICAgIHYgPSBwW3ZdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbic7XG59XG5leHBvcnRzLmlzQXR0ckFuRXZlbnQgPSBpc0F0dHJBbkV2ZW50O1xuZnVuY3Rpb24gcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpIHtcbiAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgaWYgKGNvbnN0YW50c18xLnNraXBQcm9wcy5oYXMocHJvcCkgfHwgKGhhc0NvbnRyb2xsZWRWYWx1ZSAmJiBwcm9wID09PSAndmFsdWUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnN0YW50c18xLmJvb2xlYW5Qcm9wcy5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wID09PSAnYXV0b0ZvY3VzJyA/IHByb3AudG9Mb3dlckNhc2UoKSA6IHByb3A7XG4gICAgICAgICAgICBkb21bcHJvcF0gPSAhIW5leHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25zdGFudHNfMS5zdHJpY3RQcm9wcy5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpID8gJycgOiBuZXh0VmFsdWU7XG4gICAgICAgICAgICBpZiAoZG9tW3Byb3BdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRvbVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXR0ckFuRXZlbnQocHJvcCkpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnQocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgcGF0Y2hTdHlsZShsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEh0bWwgPSBsYXN0VmFsdWUgJiYgbGFzdFZhbHVlLl9faHRtbDtcbiAgICAgICAgICAgIHZhciBuZXh0SHRtbCA9IG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKG5leHRIdG1sKSkge1xuICAgICAgICAgICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gbmV4dEh0bWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV2Ugb3B0aW1pemUgZm9yIE5TIGJlaW5nIGJvb2xlYW4uIEl0cyA5OS45JSB0aW1lIGZhbHNlXG4gICAgICAgICAgICBpZiAoaXNTVkcgJiYgY29uc3RhbnRzXzEubmFtZXNwYWNlcy5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmQgdXAgaW4gdGhpcyBwYXRoIHdlIGNhbiByZWFkIHByb3BlcnR5IGFnYWluXG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZU5TKGNvbnN0YW50c18xLm5hbWVzcGFjZXMuZ2V0KHByb3ApLCBwcm9wLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShwcm9wLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5wYXRjaFByb3AgPSBwYXRjaFByb3A7XG5mdW5jdGlvbiBwYXRjaEV2ZW50KG5hbWUsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pIHtcbiAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgaWYgKGNvbnN0YW50c18xLmRlbGVnYXRlZEV2ZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIGRlbGVnYXRpb25fMS5oYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuYW1lTG93ZXJDYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIGRvbUV2ZW50ID0gZG9tW25hbWVMb3dlckNhc2VdO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGlzIHdyYXBwZWQsIHRoYXQgbWVhbnMgaXQncyBiZWVuIGNvbnRyb2xsZWQgYnkgYSB3cmFwcGVyXG4gICAgICAgICAgICBpZiAoZG9tRXZlbnQgJiYgZG9tRXZlbnQud3JhcHBlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc0Z1bmN0aW9uKG5leHRWYWx1ZSkgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtFdmVudF8xID0gbmV4dFZhbHVlLmV2ZW50O1xuICAgICAgICAgICAgICAgIGlmIChsaW5rRXZlbnRfMSAmJiBpbmZlcm5vX3NoYXJlZF8xLmlzRnVuY3Rpb24obGlua0V2ZW50XzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRXZlbnRfMShuZXh0VmFsdWUuZGF0YSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKFwiYW4gZXZlbnQgb24gYSBWTm9kZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLiB3YXMgbm90IGEgZnVuY3Rpb24gb3IgYSB2YWxpZCBsaW5rRXZlbnQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMucGF0Y2hFdmVudCA9IHBhdGNoRXZlbnQ7XG4vLyBXZSBhcmUgYXNzdW1pbmcgaGVyZSB0aGF0IHdlIGNvbWUgZnJvbSBwYXRjaFByb3Agcm91dGluZVxuLy8gLW5leHRBdHRyVmFsdWUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXG5mdW5jdGlvbiBwYXRjaFN0eWxlKGxhc3RBdHRyVmFsdWUsIG5leHRBdHRyVmFsdWUsIGRvbSkge1xuICAgIHZhciBkb21TdHlsZSA9IGRvbS5zdHlsZTtcbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZyhuZXh0QXR0clZhbHVlKSkge1xuICAgICAgICBkb21TdHlsZS5jc3NUZXh0ID0gbmV4dEF0dHJWYWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdHlsZSBpbiBuZXh0QXR0clZhbHVlKSB7XG4gICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgIHZhciB2YWx1ZSA9IG5leHRBdHRyVmFsdWVbc3R5bGVdO1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdW1iZXIodmFsdWUpIHx8IGNvbnN0YW50c18xLmlzVW5pdGxlc3NOdW1iZXIuaGFzKHN0eWxlKSkge1xuICAgICAgICAgICAgZG9tU3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb21TdHlsZVtzdHlsZV0gPSB2YWx1ZSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobGFzdEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGUgaW4gbGFzdEF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0QXR0clZhbHVlW3N0eWxlXSkpIHtcbiAgICAgICAgICAgICAgICBkb21TdHlsZVtzdHlsZV0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMucGF0Y2hTdHlsZSA9IHBhdGNoU3R5bGU7XG5mdW5jdGlvbiByZW1vdmVQcm9wKHByb3AsIGxhc3RWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICBkZWxlZ2F0aW9uXzEuaGFuZGxlRXZlbnQocHJvcCwgbGFzdFZhbHVlLCBudWxsLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbmZlcm5vX3NoYXJlZF8xID0gcmVxdWlyZShcImluZmVybm8tc2hhcmVkXCIpO1xudmFyIHBhdGNoaW5nXzEgPSByZXF1aXJlKFwiLi9wYXRjaGluZ1wiKTtcbnZhciBjb21wb25lbnRQb29scyA9IG5ldyBNYXAoKTtcbnZhciBlbGVtZW50UG9vbHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgICAgIHZhciBwb29sID0ga2V5ID09PSBudWxsID8gcG9vbHMubm9uS2V5ZWQgOiBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICB2YXIgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaGluZ18xLnBhdGNoRWxlbWVudChyZWN5Y2xlZFZOb2RlLCB2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydHMucmVjeWNsZUVsZW1lbnQgPSByZWN5Y2xlRWxlbWVudDtcbmZ1bmN0aW9uIHBvb2xFbGVtZW50KHZOb2RlKSB7XG4gICAgdmFyIHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICB2YXIgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIG5vbktleWVkOiBbXVxuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50UG9vbHMuc2V0KHRhZywgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICBwb29sID0gW107XG4gICAgICAgICAgICBwb29scy5rZXllZC5zZXQoa2V5LCBwb29sKTtcbiAgICAgICAgfVxuICAgICAgICBwb29sLnB1c2godk5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydHMucG9vbEVsZW1lbnQgPSBwb29sRWxlbWVudDtcbmZ1bmN0aW9uIHJlY3ljbGVDb21wb25lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICAgICAgdmFyIHBvb2wgPSBrZXkgPT09IG51bGwgPyBwb29scy5ub25LZXllZCA6IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHZhciByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChyZWN5Y2xlZFZOb2RlKSkge1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgICAgICAgICAgICAgIHZhciBmYWlsZWQgPSBwYXRjaGluZ18xLnBhdGNoQ29tcG9uZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8sIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICghZmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZS5kb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0cy5yZWN5Y2xlQ29tcG9uZW50ID0gcmVjeWNsZUNvbXBvbmVudDtcbmZ1bmN0aW9uIHBvb2xDb21wb25lbnQodk5vZGUpIHtcbiAgICB2YXIgaG9va3MgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIG5vblJlY3ljbGVIb29rcyA9IGhvb2tzICYmIChob29rcy5vbkNvbXBvbmVudFdpbGxNb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudFdpbGxVbm1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlIHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKTtcbiAgICBpZiAobm9uUmVjeWNsZUhvb2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICBwb29scyA9IHtcbiAgICAgICAgICAgIGtleWVkOiBuZXcgTWFwKCksXG4gICAgICAgICAgICBub25LZXllZDogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50UG9vbHMuc2V0KHR5cGUsIHBvb2xzKTtcbiAgICB9XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5leHBvcnRzLnBvb2xDb21wb25lbnQgPSBwb29sQ29tcG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpO1xudmFyIFZOb2Rlc18xID0gcmVxdWlyZShcIi4uL2NvcmUvVk5vZGVzXCIpO1xudmFyIGh5ZHJhdGlvbl8xID0gcmVxdWlyZShcIi4vaHlkcmF0aW9uXCIpO1xudmFyIG1vdW50aW5nXzEgPSByZXF1aXJlKFwiLi9tb3VudGluZ1wiKTtcbnZhciBwYXRjaGluZ18xID0gcmVxdWlyZShcIi4vcGF0Y2hpbmdcIik7XG52YXIgdW5tb3VudGluZ18xID0gcmVxdWlyZShcIi4vdW5tb3VudGluZ1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG4vLyByYXRoZXIgdGhhbiB1c2UgYSBNYXAsIGxpa2Ugd2UgZGlkIGJlZm9yZSwgd2UgY2FuIHVzZSBhbiBhcnJheSBoZXJlXG4vLyBnaXZlbiB0aGVyZSBzaG91bGRuJ3QgYmUgVEhBVCBtYW55IHJvb3RzIG9uIHRoZSBwYWdlLCB0aGUgZGlmZmVyZW5jZVxuLy8gaW4gcGVyZm9ybWFuY2UgaXMgaHVnZTogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ODAyYTY5MTMzMGFiMDk5MDBhMWEyZGFcbmV4cG9ydHMuY29tcG9uZW50VG9ET01Ob2RlTWFwID0gbmV3IE1hcCgpO1xudmFyIHJvb3RzID0gb3B0aW9uc18xLm9wdGlvbnMucm9vdHM7XG4vKipcbiAqIFdoZW4gaW5mZXJuby5vcHRpb25zLmZpbmRET01OT2RlRW5hYmxlZCBpcyB0cnVlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIERPTSBOb2RlIGJ5IGNvbXBvbmVudCBpbnN0YW5jZVxuICogQHBhcmFtIHJlZiBDb21wb25lbnQgaW5zdGFuY2VcbiAqIEByZXR1cm5zIHsqfG51bGx9IHJldHVybnMgZG9tIG5vZGVcbiAqL1xuZnVuY3Rpb24gZmluZERPTU5vZGUocmVmKSB7XG4gICAgaWYgKCFvcHRpb25zXzEub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcignZmluZERPTU5vZGUoKSBoYXMgYmVlbiBkaXNhYmxlZCwgdXNlIEluZmVybm8ub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlOyBlbmFibGVkIGZpbmRET01Ob2RlKCkuIFdhcm5pbmcgdGhpcyBjYW4gc2lnbmlmaWNhbnRseSBpbXBhY3QgcGVyZm9ybWFuY2UhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIHZhciBkb20gPSByZWYgJiYgcmVmLm5vZGVUeXBlID8gcmVmIDogbnVsbDtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wb25lbnRUb0RPTU5vZGVNYXAuZ2V0KHJlZikgfHwgZG9tO1xufVxuZXhwb3J0cy5maW5kRE9NTm9kZSA9IGZpbmRET01Ob2RlO1xuZnVuY3Rpb24gZ2V0Um9vdChkb20pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm9vdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHJvb3QgPSByb290c1tpXTtcbiAgICAgICAgaWYgKHJvb3QuZG9tID09PSBkb20pIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0Um9vdChkb20sIGlucHV0LCBsaWZlY3ljbGUpIHtcbiAgICB2YXIgcm9vdCA9IHtcbiAgICAgICAgZG9tOiBkb20sXG4gICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgbGlmZWN5Y2xlOiBsaWZlY3ljbGVcbiAgICB9O1xuICAgIHJvb3RzLnB1c2gocm9vdCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm9vdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHJvb3RzW2ldID09PSByb290KSB7XG4gICAgICAgICAgICByb290cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQnJvd3NlciAmJiBkb2N1bWVudC5ib2R5ID09PSBudWxsKSB7XG4gICAgICAgIGluZmVybm9fc2hhcmVkXzEud2FybmluZygnSW5mZXJubyB3YXJuaW5nOiB5b3UgY2Fubm90IGluaXRpYWxpemUgaW5mZXJubyB3aXRob3V0IFwiZG9jdW1lbnQuYm9keVwiLiBXYWl0IG9uIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50LCBhZGQgc2NyaXB0IHRvIGJvdHRvbSBvZiBib2R5LCBvciB1c2UgYXN5bmMvZGVmZXIgYXR0cmlidXRlcyBvbiBzY3JpcHQgdGFnLicpO1xuICAgIH1cbn1cbnZhciBkb2N1bWVudEJvZHkgPSBpbmZlcm5vX3NoYXJlZF8xLmlzQnJvd3NlciA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuLyoqXG4gKiBSZW5kZXJzIHZpcnR1YWwgbm9kZSB0cmVlIGludG8gcGFyZW50IG5vZGUuXG4gKiBAcGFyYW0ge1ZOb2RlIHwgbnVsbCB8IHN0cmluZyB8IG51bWJlcn0gaW5wdXQgdk5vZGUgdG8gYmUgcmVuZGVyZWRcbiAqIEBwYXJhbSBwYXJlbnREb20gRE9NIG5vZGUgd2hpY2ggY29udGVudCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge0luZmVybm9DaGlsZHJlbn0gcmVuZGVyZWQgdmlydHVhbCBub2RlXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcihpbnB1dCwgcGFyZW50RG9tKSB7XG4gICAgaWYgKGRvY3VtZW50Qm9keSA9PT0gcGFyZW50RG9tKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoJ3lvdSBjYW5ub3QgcmVuZGVyKCkgdG8gdGhlIFwiZG9jdW1lbnQuYm9keVwiLiBVc2UgYW4gZW1wdHkgZWxlbWVudCBhcyBhIGNvbnRhaW5lciBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQgPT09IGluZmVybm9fc2hhcmVkXzEuTk9fT1ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcm9vdCA9IGdldFJvb3QocGFyZW50RG9tKTtcbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGwocm9vdCkpIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSA9IG5ldyBpbmZlcm5vX3NoYXJlZF8xLkxpZmVjeWNsZSgpO1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gVk5vZGVzXzEuZGlyZWN0Q2xvbmUoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoeWRyYXRpb25fMS5oeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpKSB7XG4gICAgICAgICAgICAgICAgbW91bnRpbmdfMS5tb3VudChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIHV0aWxzXzEuRU1QVFlfT0JKLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290ID0gc2V0Um9vdChwYXJlbnREb20sIGlucHV0LCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgbGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSA9IHJvb3QubGlmZWN5Y2xlO1xuICAgICAgICBsaWZlY3ljbGUubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoaW5wdXQpKSB7XG4gICAgICAgICAgICB1bm1vdW50aW5nXzEudW5tb3VudChyb290LmlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZVJvb3Qocm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaGluZ18xLnBhdGNoKHJvb3QuaW5wdXQsIGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgdXRpbHNfMS5FTVBUWV9PQkosIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5pbnB1dCA9IGlucHV0O1xuICAgICAgICBsaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgIH1cbiAgICBpZiAocm9vdCkge1xuICAgICAgICB2YXIgcm9vdElucHV0ID0gcm9vdC5pbnB1dDtcbiAgICAgICAgaWYgKHJvb3RJbnB1dCAmJiAocm9vdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RJbnB1dC5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyZXIocGFyZW50RG9tKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcmVyKGxhc3RJbnB1dCwgbmV4dElucHV0KSB7XG4gICAgICAgIGlmICghcGFyZW50RG9tKSB7XG4gICAgICAgICAgICBwYXJlbnREb20gPSBsYXN0SW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKG5leHRJbnB1dCwgcGFyZW50RG9tKTtcbiAgICB9O1xufVxuZXhwb3J0cy5jcmVhdGVSZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi4vY29yZS9vcHRpb25zXCIpO1xudmFyIHBhdGNoaW5nXzEgPSByZXF1aXJlKFwiLi9wYXRjaGluZ1wiKTtcbnZhciByZWN5Y2xpbmdfMSA9IHJlcXVpcmUoXCIuL3JlY3ljbGluZ1wiKTtcbnZhciByZW5kZXJpbmdfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmluZ1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5mdW5jdGlvbiB1bm1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgKDEgLyogVGV4dCAqLyB8IDQwOTYgLyogVm9pZCAqLykpIHtcbiAgICAgICAgdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxufVxuZXhwb3J0cy51bm1vdW50ID0gdW5tb3VudDtcbmZ1bmN0aW9uIHVubW91bnRWb2lkT3JUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgdXRpbHNfMS5yZW1vdmVDaGlsZChwYXJlbnREb20sIHZOb2RlLmRvbSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgdmFyIGlzU3RhdGVmdWxDb21wb25lbnQgPSBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi87XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmICghaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgaWYgKGlzU3RhdGVmdWxDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9ibG9ja1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKG9wdGlvbnNfMS5vcHRpb25zLmJlZm9yZVVubW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNfMS5vcHRpb25zLmJlZm9yZVVubW91bnQodk5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQoaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZihudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3VubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNfMS5vcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmdfMS5jb21wb25lbnRUb0RPTU5vZGVNYXAuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZS5fbGFzdElucHV0LCBudWxsLCBpbnN0YW5jZS5fbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocmVmKSkge1xuICAgICAgICAgICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsVW5tb3VudChkb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIHZhciBsYXN0SW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGxhc3RJbnB1dCkpIHtcbiAgICAgICAgICAgIGxhc3RJbnB1dCA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHV0aWxzXzEucmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9uc18xLm9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNTdGF0ZWZ1bENvbXBvbmVudCAmJiAocGFyZW50RG9tIHx8IGNhblJlY3ljbGUpKSB7XG4gICAgICAgIHJlY3ljbGluZ18xLnBvb2xDb21wb25lbnQodk5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydHMudW5tb3VudENvbXBvbmVudCA9IHVubW91bnRDb21wb25lbnQ7XG5mdW5jdGlvbiB1bm1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgIHVubW91bnRSZWYocmVmKTtcbiAgICB9XG4gICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGwocHJvcHMpKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiBwcm9wcykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIGlmIChwcm9wc1tuYW1lXzFdICE9PSBudWxsICYmIHBhdGNoaW5nXzEuaXNBdHRyQW5FdmVudChuYW1lXzEpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hpbmdfMS5wYXRjaEV2ZW50KG5hbWVfMSwgcHJvcHNbbmFtZV8xXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCB0aGlzIG51bGwsIGJlY2F1c2Ugc2FtZSBwcm9wcyBvdGhlcndpc2UgY29tZSBiYWNrIGlmIFNDVSByZXR1cm5zIGZhbHNlIGFuZCB3ZSBhcmUgcmVjeWxpbmdcbiAgICAgICAgICAgICAgICBwcm9wc1tuYW1lXzFdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgdXRpbHNfMS5yZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zXzEub3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcmVjeWNsaW5nXzEucG9vbEVsZW1lbnQodk5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydHMudW5tb3VudEVsZW1lbnQgPSB1bm1vdW50RWxlbWVudDtcbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKGNoaWxkKSAmJiBpbmZlcm5vX3NoYXJlZF8xLmlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzT2JqZWN0KGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFJlZihyZWYpIHtcbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0Z1bmN0aW9uKHJlZikpIHtcbiAgICAgICAgcmVmKG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKHJlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIGluZmVybm9fc2hhcmVkXzEudGhyb3dFcnJvcigpO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZmVybm9fc2hhcmVkXzEgPSByZXF1aXJlKFwiaW5mZXJuby1zaGFyZWRcIik7XG52YXIgb3B0aW9uc18xID0gcmVxdWlyZShcIi4uL2NvcmUvb3B0aW9uc1wiKTtcbnZhciBWTm9kZXNfMSA9IHJlcXVpcmUoXCIuLi9jb3JlL1ZOb2Rlc1wiKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbnZhciBtb3VudGluZ18xID0gcmVxdWlyZShcIi4vbW91bnRpbmdcIik7XG52YXIgdW5tb3VudGluZ18xID0gcmVxdWlyZShcIi4vdW5tb3VudGluZ1wiKTtcbi8vIFdlIG5lZWQgRU1QVFlfT0JKIGRlZmluZWQgaW4gb25lIHBsYWNlLlxuLy8gSXRzIHVzZWQgZm9yIGNvbXBhcmlzb24gc28gd2UgY2FudCBpbmxpbmUgaXQgaW50byBzaGFyZWRcbmV4cG9ydHMuRU1QVFlfT0JKID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIE9iamVjdC5mcmVlemUoZXhwb3J0cy5FTVBUWV9PQkopO1xufVxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgQ29tcG9uZW50LCBwcm9wcywgY29udGV4dCwgaXNTVkcsIGxpZmVjeWNsZSkge1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKGNvbnRleHQpKSB7XG4gICAgICAgIGNvbnRleHQgPSBleHBvcnRzLkVNUFRZX09CSjsgLy8gQ29udGV4dCBzaG91bGQgbm90IGJlIG11dGFibGVcbiAgICB9XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IENvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5fYmxvY2tTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcyA9PT0gZXhwb3J0cy5FTVBUWV9PQkopIHtcbiAgICAgICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIG11c3QgZmlyZSBhZnRlciByZW5kZXIgaXMgZG9uZSB3aGVuIGNhbGxlZCBmcm9tIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgb3IgY29tcG9uZW50V2lsbE1vdW50XG4gICAgaW5zdGFuY2UuX2xpZmVjeWNsZSA9IGxpZmVjeWNsZTtcbiAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgaW5zdGFuY2UuX2Jsb2NrUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIGluc3RhbmNlLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY2hpbGRDb250ZXh0O1xuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQpKSB7XG4gICAgICAgIGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgIH1cbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gaW5mZXJub19zaGFyZWRfMS5jb21iaW5lRnJvbShjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsKG9wdGlvbnNfMS5vcHRpb25zLmJlZm9yZVJlbmRlcikpIHtcbiAgICAgICAgb3B0aW9uc18xLm9wdGlvbnMuYmVmb3JlUmVuZGVyKGluc3RhbmNlKTtcbiAgICB9XG4gICAgdmFyIGlucHV0ID0gaW5zdGFuY2UucmVuZGVyKHByb3BzLCBpbnN0YW5jZS5zdGF0ZSwgY29udGV4dCk7XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChvcHRpb25zXzEub3B0aW9ucy5hZnRlclJlbmRlcikpIHtcbiAgICAgICAgb3B0aW9uc18xLm9wdGlvbnMuYWZ0ZXJSZW5kZXIoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gVk5vZGVzXzEuY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBWTm9kZXNfMS5jcmVhdGVUZXh0Vk5vZGUoaW5wdXQsIG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IGlucHV0O1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbmV4cG9ydHMuY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2U7XG5mdW5jdGlvbiByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50aW5nXzEubW91bnQobmV4dElucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdElucHV0LCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbn1cbmV4cG9ydHMucmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQgPSByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudDtcbmZ1bmN0aW9uIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIGRvbSwgdk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB1bm1vdW50aW5nXzEudW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgdk5vZGUuZG9tKTtcbn1cbmV4cG9ydHMucmVwbGFjZVZOb2RlID0gcmVwbGFjZVZOb2RlO1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCBjb21wb25lbnQsIHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIGlucHV0ID0gY29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaW5mZXJub19zaGFyZWRfMS50aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLnRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gVk5vZGVzXzEuY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBWTm9kZXNfMS5jcmVhdGVUZXh0Vk5vZGUoaW5wdXQsIG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5leHBvcnRzLmNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dDtcbmZ1bmN0aW9uIHNldFRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5zZXRUZXh0Q29udGVudCA9IHNldFRleHRDb250ZW50O1xuZnVuY3Rpb24gdXBkYXRlVGV4dENvbnRlbnQoZG9tLCB0ZXh0KSB7XG4gICAgZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdGV4dDtcbn1cbmV4cG9ydHMudXBkYXRlVGV4dENvbnRlbnQgPSB1cGRhdGVUZXh0Q29udGVudDtcbmZ1bmN0aW9uIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKSB7XG4gICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGRvbSk7XG59XG5leHBvcnRzLmFwcGVuZENoaWxkID0gYXBwZW5kQ2hpbGQ7XG5mdW5jdGlvbiBpbnNlcnRPckFwcGVuZChwYXJlbnREb20sIG5ld05vZGUsIG5leHROb2RlKSB7XG4gICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0Tm9kZSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBuZXdOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmVudERvbS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbmV4dE5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuaW5zZXJ0T3JBcHBlbmQgPSBpbnNlcnRPckFwcGVuZDtcbmZ1bmN0aW9uIGRvY3VtZW50Q3JlYXRlRWxlbWVudCh0YWcsIGlzU1ZHKSB7XG4gICAgaWYgKGlzU1ZHID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoY29uc3RhbnRzXzEuc3ZnTlMsIHRhZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIH1cbn1cbmV4cG9ydHMuZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50O1xuZnVuY3Rpb24gcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3ROb2RlLCBuZXh0Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHVubW91bnRpbmdfMS51bm1vdW50KGxhc3ROb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgdmFyIGRvbSA9IG1vdW50aW5nXzEubW91bnQobmV4dE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIG5leHROb2RlLmRvbSA9IGRvbTtcbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIGxhc3ROb2RlLmRvbSk7XG59XG5leHBvcnRzLnJlcGxhY2VXaXRoTmV3Tm9kZSA9IHJlcGxhY2VXaXRoTmV3Tm9kZTtcbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG5leHREb20sIGxhc3REb20pIHtcbiAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICBwYXJlbnREb20gPSBsYXN0RG9tLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQobmV4dERvbSwgbGFzdERvbSk7XG59XG5leHBvcnRzLnJlcGxhY2VDaGlsZCA9IHJlcGxhY2VDaGlsZDtcbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgZG9tKSB7XG4gICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG59XG5leHBvcnRzLnJlbW92ZUNoaWxkID0gcmVtb3ZlQ2hpbGQ7XG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZG9tLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKCFvcHRpb25zXzEub3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkIHx8IChvcHRpb25zXzEub3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1JlY3ljbGluZykpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obnVsbCwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmV4cG9ydHMucmVtb3ZlQWxsQ2hpbGRyZW4gPSByZW1vdmVBbGxDaGlsZHJlbjtcbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB1bm1vdW50aW5nXzEudW5tb3VudChjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMucmVtb3ZlQ2hpbGRyZW4gPSByZW1vdmVDaGlsZHJlbjtcbmZ1bmN0aW9uIGlzS2V5ZWQobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pIHtcbiAgICByZXR1cm4gbmV4dENoaWxkcmVuLmxlbmd0aCA+IDAgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0Q2hpbGRyZW5bMF0pICYmICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdLmtleSlcbiAgICAgICAgJiYgbGFzdENoaWxkcmVuLmxlbmd0aCA+IDAgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihsYXN0Q2hpbGRyZW5bMF0pICYmICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYobGFzdENoaWxkcmVuWzBdLmtleSk7XG59XG5leHBvcnRzLmlzS2V5ZWQgPSBpc0tleWVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gaXNDaGVja2VkVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJztcbn1cbmV4cG9ydHMuaXNDaGVja2VkVHlwZSA9IGlzQ2hlY2tlZFR5cGU7XG5mdW5jdGlvbiBvblRleHRJbnB1dENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcztcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgaWYgKHByb3BzLm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIGV2ZW50XzEgPSBwcm9wcy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnRfMS5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnRfMS5ldmVudChldmVudF8xLmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRfMShlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5vbmlucHV0KSB7XG4gICAgICAgIHByb3BzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzIHN5bmNyb25vdXNseVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgdmFyIG5ld1ZOb2RlID0gdGhpcztcbiAgICB2YXIgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICAvLyBJZiByZW5kZXIgaXMgZ29pbmcgYXN5bmMgdGhlcmUgaXMgbm8gdmFsdWUgY2hhbmdlIHlldCwgaXQgd2lsbCBjb21lIGJhY2sgdG8gcHJvY2VzcyBpbnB1dCBzb29uXG4gICAgaWYgKHByZXZpb3VzVmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlKSB7XG4gICAgICAgIC8vIFdoZW4gdGhpcyBoYXBwZW5zIHdlIG5lZWQgdG8gc3RvcmUgY3VycmVudCBjdXJzb3IgcG9zaXRpb24gYW5kIHJlc3RvcmUgaXQsIHRvIGF2b2lkIGp1bXBpbmdcbiAgICAgICAgYXBwbHlWYWx1ZShuZXdQcm9wcywgZG9tKTtcbiAgICB9XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMgfHwgdXRpbHNfMS5FTVBUWV9PQko7XG4gICAgdmFyIGV2ZW50ID0gcHJvcHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25DaGVja2JveENoYW5nZShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gVGhpcyBjbGljayBzaG91bGQgbm90IHByb3BhZ2F0ZSBpdHMgZm9yIGludGVybmFsIHVzZVxuICAgIHZhciB2Tm9kZSA9IHRoaXM7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgdXRpbHNfMS5FTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHZhciBldmVudF8yID0gcHJvcHMub25DbGljaztcbiAgICAgICAgaWYgKGV2ZW50XzIuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50XzIuZXZlbnQoZXZlbnRfMi5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50XzIoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMub25jbGljaykge1xuICAgICAgICBwcm9wcy5vbmNsaWNrKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbklucHV0IGV2ZW50cyBzeW5jcm9ub3VzbHlcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIHZhciBuZXdWTm9kZSA9IHRoaXM7XG4gICAgdmFyIG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHMgfHwgdXRpbHNfMS5FTVBUWV9PQko7XG4gICAgLy8gSWYgcmVuZGVyIGlzIGdvaW5nIGFzeW5jIHRoZXJlIGlzIG5vIHZhbHVlIGNoYW5nZSB5ZXQsIGl0IHdpbGwgY29tZSBiYWNrIHRvIHByb2Nlc3MgaW5wdXQgc29vblxuICAgIGlmIChwcmV2aW91c1ZhbHVlICE9PSBuZXdQcm9wcy52YWx1ZSkge1xuICAgICAgICAvLyBXaGVuIHRoaXMgaGFwcGVucyB3ZSBuZWVkIHRvIHN0b3JlIGN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uIGFuZCByZXN0b3JlIGl0LCB0byBhdm9pZCBqdW1waW5nXG4gICAgICAgIGFwcGx5VmFsdWUobmV3UHJvcHMsIGRvbSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20sIG5leHRQcm9wc09yRW1wdHksIG1vdW50aW5nLCBpc0NvbnRyb2xsZWQpIHtcbiAgICBhcHBseVZhbHVlKG5leHRQcm9wc09yRW1wdHksIGRvbSk7XG4gICAgaWYgKG1vdW50aW5nICYmIGlzQ29udHJvbGxlZCkge1xuICAgICAgICBpZiAoaXNDaGVja2VkVHlwZShuZXh0UHJvcHNPckVtcHR5LnR5cGUpKSB7XG4gICAgICAgICAgICBkb20ub25jbGljayA9IG9uQ2hlY2tib3hDaGFuZ2UuYmluZCh2Tm9kZSk7XG4gICAgICAgICAgICBkb20ub25jbGljay53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0SW5wdXRDaGFuZ2UuYmluZCh2Tm9kZSk7XG4gICAgICAgICAgICBkb20ub25pbnB1dC53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzT3JFbXB0eS5vbkNoYW5nZSkge1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlLmJpbmQodk5vZGUpO1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5wcm9jZXNzSW5wdXQgPSBwcm9jZXNzSW5wdXQ7XG5mdW5jdGlvbiBhcHBseVZhbHVlKG5leHRQcm9wc09yRW1wdHksIGRvbSkge1xuICAgIHZhciB0eXBlID0gbmV4dFByb3BzT3JFbXB0eS50eXBlO1xuICAgIHZhciB2YWx1ZSA9IG5leHRQcm9wc09yRW1wdHkudmFsdWU7XG4gICAgdmFyIGNoZWNrZWQgPSBuZXh0UHJvcHNPckVtcHR5LmNoZWNrZWQ7XG4gICAgdmFyIG11bHRpcGxlID0gbmV4dFByb3BzT3JFbXB0eS5tdWx0aXBsZTtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gbmV4dFByb3BzT3JFbXB0eS5kZWZhdWx0VmFsdWU7XG4gICAgdmFyIGhhc1ZhbHVlID0gIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZih2YWx1ZSk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZSAhPT0gZG9tLnR5cGUpIHtcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIH1cbiAgICBpZiAobXVsdGlwbGUgJiYgbXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBtdWx0aXBsZTtcbiAgICB9XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoZGVmYXVsdFZhbHVlKSAmJiAhaGFzVmFsdWUpIHtcbiAgICAgICAgZG9tLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSArICcnO1xuICAgIH1cbiAgICBpZiAoaXNDaGVja2VkVHlwZSh0eXBlKSkge1xuICAgICAgICBpZiAoaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChoYXNWYWx1ZSAmJiBkb20udmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaW5mZXJub19zaGFyZWRfMS5pc051bGxPclVuZGVmKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmFwcGx5VmFsdWUgPSBhcHBseVZhbHVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBWTm9kZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL1ZOb2Rlc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gdXBkYXRlQ2hpbGRPcHRpb25Hcm91cCh2Tm9kZSwgdmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgaWYgKHR5cGUgPT09ICdvcHRncm91cCcpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbihjaGlsZHJlbltpXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFZOb2Rlc18xLmlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbihjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkT3B0aW9uKHZOb2RlLCB2YWx1ZSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IHV0aWxzXzEuRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgLy8gd2UgZG8gdGhpcyBhcyBtdWx0aXBsZSBtYXkgaGF2ZSBjaGFuZ2VkXG4gICAgZG9tLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgaWYgKChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YocHJvcHMudmFsdWUpICE9PSAtMSkgfHwgcHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYodmFsdWUpIHx8ICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocHJvcHMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IHV0aWxzXzEuRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgdmFyIGV2ZW50XzEgPSBwcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgaWYgKGV2ZW50XzEuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50XzEuZXZlbnQoZXZlbnRfMS5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50XzEoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMub25jaGFuZ2UpIHtcbiAgICAgICAgcHJvcHMub25jaGFuZ2UoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzIHN5bmNyb25vdXNseVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgdmFyIG5ld1ZOb2RlID0gdGhpcztcbiAgICB2YXIgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICAvLyBJZiByZW5kZXIgaXMgZ29pbmcgYXN5bmMgdGhlcmUgaXMgbm8gdmFsdWUgY2hhbmdlIHlldCwgaXQgd2lsbCBjb21lIGJhY2sgdG8gcHJvY2VzcyBpbnB1dCBzb29uXG4gICAgaWYgKHByZXZpb3VzVmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlKSB7XG4gICAgICAgIC8vIFdoZW4gdGhpcyBoYXBwZW5zIHdlIG5lZWQgdG8gc3RvcmUgY3VycmVudCBjdXJzb3IgcG9zaXRpb24gYW5kIHJlc3RvcmUgaXQsIHRvIGF2b2lkIGp1bXBpbmdcbiAgICAgICAgYXBwbHlWYWx1ZShuZXdWTm9kZSwgZG9tLCBuZXdQcm9wcywgZmFsc2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSwgbmV4dFByb3BzT3JFbXB0eSwgbW91bnRpbmcsIGlzQ29udHJvbGxlZCkge1xuICAgIGFwcGx5VmFsdWUodk5vZGUsIGRvbSwgbmV4dFByb3BzT3JFbXB0eSwgbW91bnRpbmcpO1xuICAgIGlmIChtb3VudGluZyAmJiBpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZCh2Tm9kZSk7XG4gICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLnByb2Nlc3NTZWxlY3QgPSBwcm9jZXNzU2VsZWN0O1xuZnVuY3Rpb24gYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tLCBuZXh0UHJvcHNPckVtcHR5LCBtb3VudGluZykge1xuICAgIGlmIChuZXh0UHJvcHNPckVtcHR5Lm11bHRpcGxlICE9PSBkb20ubXVsdGlwbGUpIHtcbiAgICAgICAgZG9tLm11bHRpcGxlID0gbmV4dFByb3BzT3JFbXB0eS5tdWx0aXBsZTtcbiAgICB9XG4gICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbmV4dFByb3BzT3JFbXB0eS52YWx1ZTtcbiAgICAgICAgaWYgKG1vdW50aW5nICYmIGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV4dFByb3BzT3JFbXB0eS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChWTm9kZXNfMS5pc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5hcHBseVZhbHVlID0gYXBwbHlWYWx1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZmVybm9fc2hhcmVkXzEgPSByZXF1aXJlKFwiaW5mZXJuby1zaGFyZWRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZShlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyB8fCB1dGlsc18xLkVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBwcm9wcy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblRleHRhcmVhSW5wdXRDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXM7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgdXRpbHNfMS5FTVBUWV9PQko7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBpZiAocHJvcHMub25JbnB1dCkge1xuICAgICAgICB2YXIgZXZlbnRfMSA9IHByb3BzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudF8xLmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudF8xLmV2ZW50KGV2ZW50XzEuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudF8xKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLm9uaW5wdXQpIHtcbiAgICAgICAgcHJvcHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHMgc3luY3Jvbm91c2x5XG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICB2YXIgbmV3Vk5vZGUgPSB0aGlzO1xuICAgIHZhciBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzIHx8IHV0aWxzXzEuRU1QVFlfT0JKO1xuICAgIC8vIElmIHJlbmRlciBpcyBnb2luZyBhc3luYyB0aGVyZSBpcyBubyB2YWx1ZSBjaGFuZ2UgeWV0LCBpdCB3aWxsIGNvbWUgYmFjayB0byBwcm9jZXNzIGlucHV0IHNvb25cbiAgICBpZiAocHJldmlvdXNWYWx1ZSAhPT0gbmV3UHJvcHMudmFsdWUpIHtcbiAgICAgICAgLy8gV2hlbiB0aGlzIGhhcHBlbnMgd2UgbmVlZCB0byBzdG9yZSBjdXJyZW50IGN1cnNvciBwb3NpdGlvbiBhbmQgcmVzdG9yZSBpdCwgdG8gYXZvaWQganVtcGluZ1xuICAgICAgICBhcHBseVZhbHVlKG5ld1ZOb2RlLCB2Tm9kZS5kb20sIGZhbHNlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzVGV4dGFyZWEodk5vZGUsIGRvbSwgbmV4dFByb3BzT3JFbXB0eSwgbW91bnRpbmcsIGlzQ29udHJvbGxlZCkge1xuICAgIGFwcGx5VmFsdWUobmV4dFByb3BzT3JFbXB0eSwgZG9tLCBtb3VudGluZyk7XG4gICAgaWYgKG1vdW50aW5nICYmIGlzQ29udHJvbGxlZCkge1xuICAgICAgICBkb20ub25pbnB1dCA9IG9uVGV4dGFyZWFJbnB1dENoYW5nZS5iaW5kKHZOb2RlKTtcbiAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgIGlmIChuZXh0UHJvcHNPckVtcHR5Lm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UuYmluZCh2Tm9kZSk7XG4gICAgICAgICAgICBkb20ub25jaGFuZ2Uud3JhcHBlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnByb2Nlc3NUZXh0YXJlYSA9IHByb2Nlc3NUZXh0YXJlYTtcbmZ1bmN0aW9uIGFwcGx5VmFsdWUobmV4dFByb3BzT3JFbXB0eSwgZG9tLCBtb3VudGluZykge1xuICAgIHZhciB2YWx1ZSA9IG5leHRQcm9wc09yRW1wdHkudmFsdWU7XG4gICAgdmFyIGRvbVZhbHVlID0gZG9tLnZhbHVlO1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgIGlmIChtb3VudGluZykge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG5leHRQcm9wc09yRW1wdHkuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoZGVmYXVsdFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IGRvbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb21WYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBkb20udmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLyogVGhlcmUgaXMgdmFsdWUgc28ga2VlcCBpdCBjb250cm9sbGVkICovXG4gICAgICAgIGlmIChkb21WYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5hcHBseVZhbHVlID0gYXBwbHlWYWx1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZmVybm9fc2hhcmVkXzEgPSByZXF1aXJlKFwiaW5mZXJuby1zaGFyZWRcIik7XG52YXIgSW5wdXRXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi9JbnB1dFdyYXBwZXJcIik7XG52YXIgU2VsZWN0V3JhcHBlcl8xID0gcmVxdWlyZShcIi4vU2VsZWN0V3JhcHBlclwiKTtcbnZhciBUZXh0YXJlYVdyYXBwZXJfMSA9IHJlcXVpcmUoXCIuL1RleHRhcmVhV3JhcHBlclwiKTtcbi8qKlxuICogVGhlcmUgaXMgY3VycmVudGx5IG5vIHN1cHBvcnQgZm9yIHN3aXRjaGluZyBzYW1lIGlucHV0IGJldHdlZW4gY29udHJvbGxlZCBhbmQgbm9uQ29udHJvbGxlZFxuICogSWYgdGhhdCBldmVyIGJlY29tZXMgYSByZWFsIGlzc3VlLCB0aGVuIHJlIGRlc2lnbiBjb250cm9sbGVkIGVsZW1lbnRzXG4gKiBDdXJyZW50bHkgdXNlciBtdXN0IGNob29zZSBlaXRoZXIgY29udHJvbGxlZCBvciBub24tY29udHJvbGxlZCBhbmQgc3RpY2sgd2l0aCB0aGF0XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tLCBuZXh0UHJvcHNPckVtcHR5LCBtb3VudGluZywgaXNDb250cm9sbGVkKSB7XG4gICAgaWYgKGZsYWdzICYgNTEyIC8qIElucHV0RWxlbWVudCAqLykge1xuICAgICAgICBJbnB1dFdyYXBwZXJfMS5wcm9jZXNzSW5wdXQodk5vZGUsIGRvbSwgbmV4dFByb3BzT3JFbXB0eSwgbW91bnRpbmcsIGlzQ29udHJvbGxlZCk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDIwNDggLyogU2VsZWN0RWxlbWVudCAqLykge1xuICAgICAgICBTZWxlY3RXcmFwcGVyXzEucHJvY2Vzc1NlbGVjdCh2Tm9kZSwgZG9tLCBuZXh0UHJvcHNPckVtcHR5LCBtb3VudGluZywgaXNDb250cm9sbGVkKTtcbiAgICB9XG4gICAgaWYgKGZsYWdzICYgMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi8pIHtcbiAgICAgICAgVGV4dGFyZWFXcmFwcGVyXzEucHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20sIG5leHRQcm9wc09yRW1wdHksIG1vdW50aW5nLCBpc0NvbnRyb2xsZWQpO1xuICAgIH1cbn1cbmV4cG9ydHMucHJvY2Vzc0VsZW1lbnQgPSBwcm9jZXNzRWxlbWVudDtcbmZ1bmN0aW9uIGlzQ29udHJvbGxlZEZvcm1FbGVtZW50KG5leHRQcm9wc09yRW1wdHkpIHtcbiAgICByZXR1cm4gKG5leHRQcm9wc09yRW1wdHkudHlwZSAmJiBJbnB1dFdyYXBwZXJfMS5pc0NoZWNrZWRUeXBlKG5leHRQcm9wc09yRW1wdHkudHlwZSkpID8gIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0UHJvcHNPckVtcHR5LmNoZWNrZWQpIDogIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihuZXh0UHJvcHNPckVtcHR5LnZhbHVlKTtcbn1cbmV4cG9ydHMuaXNDb250cm9sbGVkRm9ybUVsZW1lbnQgPSBpc0NvbnRyb2xsZWRGb3JtRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZmVybm9fc2hhcmVkXzEgPSByZXF1aXJlKFwiaW5mZXJuby1zaGFyZWRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9ET00vdXRpbHNcIik7XG52YXIgbm9ybWFsaXphdGlvbl8xID0gcmVxdWlyZShcIi4vbm9ybWFsaXphdGlvblwiKTtcbnZhciBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi9vcHRpb25zXCIpO1xuZnVuY3Rpb24gVk5vZGUoY2hpbGRyZW4sIGNsYXNzTmFtZSwgZmxhZ3MsIGtleSwgcHJvcHMsIHJlZiwgdHlwZSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLmRvbSA9IG51bGw7XG4gICAgdGhpcy5mbGFncyA9IGZsYWdzO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xufVxuLyoqXG4gKiBDcmVhdGVzIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzXG4gKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbnxudWxsfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsPX0gY2xhc3NOYW1lXG4gKiBAcGFyYW0ge29iamVjdD19IGNoaWxkcmVuXG4gKiBAcGFyYW0ge29iamVjdD19IHByb3BzXG4gKiBAcGFyYW0geyo9fSBrZXlcbiAqIEBwYXJhbSB7b2JqZWN0fEZ1bmN0aW9uPX0gcmVmXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub05vcm1hbGlzZVxuICogQHJldHVybnMge1ZOb2RlfSByZXR1cm5zIG5ldyB2aXJ0dWFsIG5vZGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVk5vZGUoZmxhZ3MsIHR5cGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIHByb3BzLCBrZXksIHJlZiwgbm9Ob3JtYWxpc2UpIHtcbiAgICBpZiAoZmxhZ3MgJiAxNiAvKiBDb21wb25lbnRVbmtub3duICovKSB7XG4gICAgICAgIGZsYWdzID0gaW5mZXJub19zaGFyZWRfMS5pc1N0YXRlZnVsQ29tcG9uZW50KHR5cGUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgfVxuICAgIHZhciB2Tm9kZSA9IG5ldyBWTm9kZShjaGlsZHJlbiA9PT0gdm9pZCAwID8gbnVsbCA6IGNoaWxkcmVuLCBjbGFzc05hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBjbGFzc05hbWUsIGZsYWdzLCBrZXkgPT09IHZvaWQgMCA/IG51bGwgOiBrZXksIHByb3BzID09PSB2b2lkIDAgPyBudWxsIDogcHJvcHMsIHJlZiA9PT0gdm9pZCAwID8gbnVsbCA6IHJlZiwgdHlwZSk7XG4gICAgaWYgKG5vTm9ybWFsaXNlICE9PSB0cnVlKSB7XG4gICAgICAgIG5vcm1hbGl6YXRpb25fMS5ub3JtYWxpemUodk5vZGUpO1xuICAgIH1cbiAgICBpZiAob3B0aW9uc18xLm9wdGlvbnMuY3JlYXRlVk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgb3B0aW9uc18xLm9wdGlvbnMuY3JlYXRlVk5vZGUodk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5leHBvcnRzLmNyZWF0ZVZOb2RlID0gY3JlYXRlVk5vZGU7XG5mdW5jdGlvbiBkaXJlY3RDbG9uZSh2Tm9kZVRvQ2xvbmUpIHtcbiAgICB2YXIgbmV3Vk5vZGU7XG4gICAgdmFyIGZsYWdzID0gdk5vZGVUb0Nsb25lLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICB2YXIgcHJvcHMgPSB2b2lkIDA7XG4gICAgICAgIHZhciBwcm9wc1RvQ2xvbmUgPSB2Tm9kZVRvQ2xvbmUucHJvcHM7XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbChwcm9wc1RvQ2xvbmUpKSB7XG4gICAgICAgICAgICBwcm9wcyA9IHV0aWxzXzEuRU1QVFlfT0JKO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wc1RvQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0gcHJvcHNUb0Nsb25lW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUgPSBjcmVhdGVWTm9kZShmbGFncywgdk5vZGVUb0Nsb25lLnR5cGUsIG51bGwsIG51bGwsIHByb3BzLCB2Tm9kZVRvQ2xvbmUua2V5LCB2Tm9kZVRvQ2xvbmUucmVmLCB0cnVlKTtcbiAgICAgICAgdmFyIG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IG5ld1Byb3BzLmNoaWxkcmVuO1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFsc28gY2xvbmUgY29tcG9uZW50IGNoaWxkcmVuIHRoYXQgYXJlIGluIHByb3BzXG4gICAgICAgIC8vIGFzIHRoZSBjaGlsZHJlbiBtYXkgYWxzbyBoYXZlIGJlZW4gaG9pc3RlZFxuICAgICAgICBpZiAobmV3Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IG5ld0NoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3Q2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZ09yTnVtYmVyKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKGNoaWxkKSAmJiBpc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEFycmF5LnB1c2goZGlyZWN0Q2xvbmUoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5jaGlsZHJlbiA9IHRtcEFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVk5vZGUobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSBkaXJlY3RDbG9uZShuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUuY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZVRvQ2xvbmUuY2hpbGRyZW47XG4gICAgICAgIHZhciBwcm9wcyA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHByb3BzVG9DbG9uZSA9IHZOb2RlVG9DbG9uZS5wcm9wcztcbiAgICAgICAgaWYgKHByb3BzVG9DbG9uZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvcHMgPSB1dGlsc18xLkVNUFRZX09CSjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHNUb0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHByb3BzVG9DbG9uZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCB2Tm9kZVRvQ2xvbmUuY2xhc3NOYW1lLCBjaGlsZHJlbiwgcHJvcHMsIHZOb2RlVG9DbG9uZS5rZXksIHZOb2RlVG9DbG9uZS5yZWYsICFjaGlsZHJlbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVGV4dFZOb2RlKHZOb2RlVG9DbG9uZS5jaGlsZHJlbiwgdk5vZGVUb0Nsb25lLmtleSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbmV4cG9ydHMuZGlyZWN0Q2xvbmUgPSBkaXJlY3RDbG9uZTtcbi8qXG4gZGlyZWN0Q2xvbmUgaXMgcHJlZmVycmVkIG92ZXIgY2xvbmVWTm9kZSBhbmQgdXNlZCBpbnRlcm5hbGx5IGFsc28uXG4gVGhpcyBmdW5jdGlvbiBtYWtlcyBJbmZlcm5vIGJhY2t3YXJkcyBjb21wYXRpYmxlLlxuIEFuZCBjYW4gYmUgdHJlZS1zaGFrZWQgYnkgbW9kZXJuIGJ1bmRsZXJzXG5cbiBXb3VsZCBiZSBuaWNlIHRvIGNvbWJpbmUgdGhpcyB3aXRoIGRpcmVjdENsb25lIGJ1dCBjb3VsZCBub3QgZG8gaXQgd2l0aG91dCBicmVha2luZyBjaGFuZ2VcbiAqL1xuLyoqXG4gKiBDbG9uZXMgZ2l2ZW4gdmlydHVhbCBub2RlIGJ5IGNyZWF0aW5nIG5ldyBpbnN0YW5jZSBvZiBpdFxuICogQHBhcmFtIHtWTm9kZX0gdk5vZGVUb0Nsb25lIHZpcnR1YWwgbm9kZSB0byBiZSBjbG9uZWRcbiAqIEBwYXJhbSB7UHJvcHM9fSBwcm9wcyBhZGRpdGlvbmFsIHByb3BzIGZvciBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0gey4uLip9IF9jaGlsZHJlbiBuZXcgY2hpbGRyZW4gZm9yIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtWTm9kZX0gbmV3IHZpcnR1YWwgbm9kZVxuICovXG5mdW5jdGlvbiBjbG9uZVZOb2RlKHZOb2RlVG9DbG9uZSwgcHJvcHMpIHtcbiAgICB2YXIgX2NoaWxkcmVuID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgX2NoaWxkcmVuW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgdmFyIGNoaWxkcmVuTGVuID0gX2NoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAoY2hpbGRyZW5MZW4gPiAwICYmICFpbmZlcm5vX3NoYXJlZF8xLmlzVW5kZWZpbmVkKF9jaGlsZHJlblswXSkpIHtcbiAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRyZW5MZW4gPT09IDEpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX2NoaWxkcmVuWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG5ld1ZOb2RlO1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzQXJyYXkodk5vZGVUb0Nsb25lKSkge1xuICAgICAgICB2YXIgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZOb2RlVG9DbG9uZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdG1wQXJyYXkucHVzaChkaXJlY3RDbG9uZSh2Tm9kZVRvQ2xvbmVbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWTm9kZSA9IHRtcEFycmF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZsYWdzID0gdk5vZGVUb0Nsb25lLmZsYWdzO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gdk5vZGVUb0Nsb25lLmNsYXNzTmFtZSB8fCAocHJvcHMgJiYgcHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgdmFyIGtleSA9ICFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYodk5vZGVUb0Nsb25lLmtleSkgPyB2Tm9kZVRvQ2xvbmUua2V5IDogKHByb3BzID8gcHJvcHMua2V5IDogbnVsbCk7XG4gICAgICAgIHZhciByZWYgPSB2Tm9kZVRvQ2xvbmUucmVmIHx8IChwcm9wcyA/IHByb3BzLnJlZiA6IG51bGwpO1xuICAgICAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBjbGFzc05hbWUsIG51bGwsICghdk5vZGVUb0Nsb25lLnByb3BzICYmICFwcm9wcykgPyB1dGlsc18xLkVNUFRZX09CSiA6IGluZmVybm9fc2hhcmVkXzEuY29tYmluZUZyb20odk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIGtleSwgcmVmLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkcmVuID0gbmV3UHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBhbHNvIGNsb25lIGNvbXBvbmVudCBjaGlsZHJlbiB0aGF0IGFyZSBpbiBwcm9wc1xuICAgICAgICAgICAgICAgIC8vIGFzIHRoZSBjaGlsZHJlbiBtYXkgYWxzbyBoYXZlIGJlZW4gaG9pc3RlZFxuICAgICAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IG5ld0NoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBuZXdDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzSW52YWxpZChjaGlsZCkgJiYgaXNWTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEFycmF5LnB1c2goZGlyZWN0Q2xvbmUoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5jaGlsZHJlbiA9IHRtcEFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzVk5vZGUobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5jaGlsZHJlbiA9IGRpcmVjdENsb25lKG5ld0NoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZOb2RlLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSAocHJvcHMgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNVbmRlZmluZWQocHJvcHMuY2hpbGRyZW4pKSA/IHByb3BzLmNoaWxkcmVuIDogdk5vZGVUb0Nsb25lLmNoaWxkcmVuO1xuICAgICAgICAgICAgbmV3Vk5vZGUgPSBjcmVhdGVWTm9kZShmbGFncywgdk5vZGVUb0Nsb25lLnR5cGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sICghdk5vZGVUb0Nsb25lLnByb3BzICYmICFwcm9wcykgPyB1dGlsc18xLkVNUFRZX09CSiA6IGluZmVybm9fc2hhcmVkXzEuY29tYmluZUZyb20odk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIGtleSwgcmVmLCAhY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVRleHRWTm9kZSh2Tm9kZVRvQ2xvbmUuY2hpbGRyZW4sIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZOb2RlO1xufVxuZXhwb3J0cy5jbG9uZVZOb2RlID0gY2xvbmVWTm9kZTtcbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovLCBudWxsKTtcbn1cbmV4cG9ydHMuY3JlYXRlVm9pZFZOb2RlID0gY3JlYXRlVm9pZFZOb2RlO1xuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQsIGtleSkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSgxIC8qIFRleHQgKi8sIG51bGwsIG51bGwsIHRleHQsIG51bGwsIGtleSk7XG59XG5leHBvcnRzLmNyZWF0ZVRleHRWTm9kZSA9IGNyZWF0ZVRleHRWTm9kZTtcbmZ1bmN0aW9uIGlzVk5vZGUobykge1xuICAgIHJldHVybiAhIW8uZmxhZ3M7XG59XG5leHBvcnRzLmlzVk5vZGUgPSBpc1ZOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5mZXJub19zaGFyZWRfMSA9IHJlcXVpcmUoXCJpbmZlcm5vLXNoYXJlZFwiKTtcbnZhciBWTm9kZXNfMSA9IHJlcXVpcmUoXCIuL1ZOb2Rlc1wiKTtcbmZ1bmN0aW9uIGFwcGx5S2V5KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlJZk1pc3Npbmcoa2V5LCB2Tm9kZSkge1xuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVtYmVyKGtleSkpIHtcbiAgICAgICAga2V5ID0gXCIuXCIgKyBrZXk7XG4gICAgfVxuICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbCh2Tm9kZS5rZXkpIHx8IHZOb2RlLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBhcHBseUtleShrZXksIHZOb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlQcmVmaXgoa2V5LCB2Tm9kZSkge1xuICAgIHZOb2RlLmtleSA9IGtleSArIHZOb2RlLmtleTtcbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBfbm9ybWFsaXplVk5vZGVzKG5vZGVzLCByZXN1bHQsIGluZGV4LCBjdXJyZW50S2V5KSB7XG4gICAgZm9yICh2YXIgbGVuID0gbm9kZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbiA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgdmFyIGtleSA9IGN1cnJlbnRLZXkgKyBcIi5cIiArIGluZGV4O1xuICAgICAgICBpZiAoIWluZmVybm9fc2hhcmVkXzEuaXNJbnZhbGlkKG4pKSB7XG4gICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KG4pKSB7XG4gICAgICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2RlcyhuLCByZXN1bHQsIDAsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBWTm9kZXNfMS5jcmVhdGVUZXh0Vk5vZGUobiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFZOb2Rlc18xLmlzVk5vZGUobikgJiYgbi5kb20gfHwgKG4ua2V5ICYmIG4ua2V5WzBdID09PSAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBWTm9kZXNfMS5kaXJlY3RDbG9uZShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsKG4ua2V5KSB8fCBuLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleShrZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5UHJlZml4KGN1cnJlbnRLZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZOb2Rlcyhub2Rlcykge1xuICAgIHZhciBuZXdOb2RlcztcbiAgICAvLyB3ZSBhc3NpZ24gJCB3aGljaCBiYXNpY2FsbHkgbWVhbnMgd2UndmUgZmxhZ2dlZCB0aGlzIGFycmF5IGZvciBmdXR1cmUgbm90ZVxuICAgIC8vIGlmIGl0IGNvbWVzIGJhY2sgYWdhaW4sIHdlIG5lZWQgdG8gY2xvbmUgaXQsIGFzIHBlb3BsZSBhcmUgdXNpbmcgaXRcbiAgICAvLyBpbiBhbiBpbW11dGFibGUgd2F5XG4gICAgLy8gdHNsaW50OmRpc2FibGVcbiAgICBpZiAobm9kZXNbJyQnXSA9PT0gdHJ1ZSkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1snJCddID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgbiA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQobikgfHwgaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KG4pKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gKG5ld05vZGVzIHx8IG5vZGVzKS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaSwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIFZOb2Rlc18xLmNyZWF0ZVRleHRWTm9kZShuLCBudWxsKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChWTm9kZXNfMS5pc1ZOb2RlKG4pICYmIG4uZG9tICE9PSBudWxsKSB8fCAoaW5mZXJub19zaGFyZWRfMS5pc051bGwobi5rZXkpICYmIChuLmZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykgPT09IDApKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgVk5vZGVzXzEuZGlyZWN0Q2xvbmUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdOb2Rlcykge1xuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBWTm9kZXNfMS5kaXJlY3RDbG9uZShuKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlcyB8fCBub2Rlcztcbn1cbmV4cG9ydHMubm9ybWFsaXplVk5vZGVzID0gbm9ybWFsaXplVk5vZGVzO1xuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVk5vZGVzKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoVk5vZGVzXzEuaXNWTm9kZShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZG9tICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBWTm9kZXNfMS5kaXJlY3RDbG9uZShjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAodk5vZGUuZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgaWYgKGluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihjaGlsZHJlbikgJiYgIWluZmVybm9fc2hhcmVkXzEuaXNOdWxsT3JVbmRlZihwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocHJvcHMuY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdk5vZGUuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMucmVmKSB7XG4gICAgICAgIHZOb2RlLnJlZiA9IHByb3BzLnJlZjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnJlZjtcbiAgICB9XG4gICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYocHJvcHMua2V5KSkge1xuICAgICAgICB2Tm9kZS5rZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5rZXk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RmxhZ3NGb3JFbGVtZW50Vm5vZGUodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnc3ZnJykge1xuICAgICAgICByZXR1cm4gMTI4IC8qIFN2Z0VsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgcmV0dXJuIDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHJldHVybiAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgcmV0dXJuIDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnbWVkaWEnKSB7XG4gICAgICAgIHJldHVybiAyNTYgLyogTWVkaWFFbGVtZW50ICovO1xuICAgIH1cbiAgICByZXR1cm4gMiAvKiBIdG1sRWxlbWVudCAqLztcbn1cbmV4cG9ydHMuZ2V0RmxhZ3NGb3JFbGVtZW50Vm5vZGUgPSBnZXRGbGFnc0ZvckVsZW1lbnRWbm9kZTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2Tm9kZSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIC8vIGNvbnZlcnQgYSB3cm9uZ2x5IGNyZWF0ZWQgdHlwZSBiYWNrIHRvIGVsZW1lbnRcbiAgICAvLyBQcmltaXRpdmUgbm9kZSBkb2Vzbid0IGhhdmUgZGVmYXVsdFByb3BzLCBvbmx5IENvbXBvbmVudFxuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBwcm9wc1xuICAgICAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzTnVsbE9yVW5kZWYoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgPSBkZWZhdWx0UHJvcHM7IC8vIENyZWF0ZSBuZXcgb2JqZWN0IGlmIG9ubHkgZGVmYXVsdFByb3BzIGdpdmVuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mZXJub19zaGFyZWRfMS5pc1VuZGVmaW5lZChwcm9wc1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gZGVmYXVsdFByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmZlcm5vX3NoYXJlZF8xLmlzU3RyaW5nKHR5cGUpKSB7XG4gICAgICAgICAgICB2Tm9kZS5mbGFncyA9IGdldEZsYWdzRm9yRWxlbWVudFZub2RlKHR5cGUpO1xuICAgICAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcykge1xuICAgICAgICBub3JtYWxpemVQcm9wcyh2Tm9kZSwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICAgICAgaWYgKCFpbmZlcm5vX3NoYXJlZF8xLmlzSW52YWxpZChwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaW5mZXJub19zaGFyZWRfMS5pc0ludmFsaWQoY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBzdHJpcHBlZCBvdXQgZnJvbSBwcm9kdWN0aW9uIENPREVcbiAgICAgICAgLy8gSXQgaGVscHMgdXNlcnMgdG8gdHJhY2sgZXJyb3JzIGluIHRoZWlyIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgdmFyIHZlcmlmeUtleXMgPSBmdW5jdGlvbiAodk5vZGVzKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWVzID0gdk5vZGVzLm1hcChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm5vZGUua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBrZXlWYWx1ZXMuc29tZShmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0R1cGxpY2F0ZSA9IGtleVZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZlcm5vX3NoYXJlZF8xLndhcm5pbmcoJ0luZmVybm8gbm9ybWFsaXNhdGlvbiguLi4pOiBFbmNvdW50ZXJlZCB0d28gY2hpbGRyZW4gd2l0aCBzYW1lIGtleSwgYWxsIGtleXMgbXVzdCBiZSB1bmlxdWUgd2l0aGluIGl0cyBzaWJsaW5ncy4gRHVwbGljYXRlZCBrZXkgaXM6JyArIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzRHVwbGljYXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2Tm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KHZOb2RlLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdmVyaWZ5S2V5cyh2Tm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vcHRpb25zID0ge1xuICAgIGFmdGVyTW91bnQ6IG51bGwsXG4gICAgYWZ0ZXJSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJVcGRhdGU6IG51bGwsXG4gICAgYmVmb3JlUmVuZGVyOiBudWxsLFxuICAgIGJlZm9yZVVubW91bnQ6IG51bGwsXG4gICAgY3JlYXRlVk5vZGU6IG51bGwsXG4gICAgZmluZERPTU5vZGVFbmFibGVkOiBmYWxzZSxcbiAgICByZWN5Y2xpbmdFbmFibGVkOiBmYWxzZSxcbiAgICByb290czogW11cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbmZlcm5vX3NoYXJlZF8xID0gcmVxdWlyZShcImluZmVybm8tc2hhcmVkXCIpO1xuZXhwb3J0cy5OT19PUCA9IGluZmVybm9fc2hhcmVkXzEuTk9fT1A7XG52YXIgbm9ybWFsaXphdGlvbl8xID0gcmVxdWlyZShcIi4vY29yZS9ub3JtYWxpemF0aW9uXCIpO1xuZXhwb3J0cy5nZXRGbGFnc0ZvckVsZW1lbnRWbm9kZSA9IG5vcm1hbGl6YXRpb25fMS5nZXRGbGFnc0ZvckVsZW1lbnRWbm9kZTtcbmV4cG9ydHMuaW50ZXJuYWxfbm9ybWFsaXplID0gbm9ybWFsaXphdGlvbl8xLm5vcm1hbGl6ZTtcbnZhciBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi9jb3JlL29wdGlvbnNcIik7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zXzEub3B0aW9ucztcbnZhciBWTm9kZXNfMSA9IHJlcXVpcmUoXCIuL2NvcmUvVk5vZGVzXCIpO1xuZXhwb3J0cy5jbG9uZVZOb2RlID0gVk5vZGVzXzEuY2xvbmVWTm9kZTtcbmV4cG9ydHMuY3JlYXRlVk5vZGUgPSBWTm9kZXNfMS5jcmVhdGVWTm9kZTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL0RPTS9jb25zdGFudHNcIik7XG5leHBvcnRzLmludGVybmFsX2lzVW5pdGxlc3NOdW1iZXIgPSBjb25zdGFudHNfMS5pc1VuaXRsZXNzTnVtYmVyO1xudmFyIGxpbmtFdmVudF8xID0gcmVxdWlyZShcIi4vRE9NL2V2ZW50cy9saW5rRXZlbnRcIik7XG5leHBvcnRzLmxpbmtFdmVudCA9IGxpbmtFdmVudF8xLmxpbmtFdmVudDtcbnZhciBwYXRjaGluZ18xID0gcmVxdWlyZShcIi4vRE9NL3BhdGNoaW5nXCIpO1xuZXhwb3J0cy5pbnRlcm5hbF9wYXRjaCA9IHBhdGNoaW5nXzEucGF0Y2g7XG52YXIgcmVuZGVyaW5nXzEgPSByZXF1aXJlKFwiLi9ET00vcmVuZGVyaW5nXCIpO1xuZXhwb3J0cy5pbnRlcm5hbF9ET01Ob2RlTWFwID0gcmVuZGVyaW5nXzEuY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuZXhwb3J0cy5jcmVhdGVSZW5kZXJlciA9IHJlbmRlcmluZ18xLmNyZWF0ZVJlbmRlcmVyO1xuZXhwb3J0cy5maW5kRE9NTm9kZSA9IHJlbmRlcmluZ18xLmZpbmRET01Ob2RlO1xuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXJpbmdfMS5yZW5kZXI7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL0RPTS91dGlsc1wiKTtcbmV4cG9ydHMuRU1QVFlfT0JKID0gdXRpbHNfMS5FTVBUWV9PQko7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eSAqL1xuICAgIHZhciB0ZXN0RnVuYyA9IGZ1bmN0aW9uIHRlc3RGbigpIHsgfTtcbiAgICBpZiAoKHRlc3RGdW5jLm5hbWUgfHwgdGVzdEZ1bmMudG9TdHJpbmcoKSkuaW5kZXhPZigndGVzdEZuJykgPT09IC0xKSB7XG4gICAgICAgIGluZmVybm9fc2hhcmVkXzEud2FybmluZygoJ0l0IGxvb2tzIGxpa2UgeW91XFwncmUgdXNpbmcgYSBtaW5pZmllZCBjb3B5IG9mIHRoZSBkZXZlbG9wbWVudCBidWlsZCAnICtcbiAgICAgICAgICAgICdvZiBJbmZlcm5vLiBXaGVuIGRlcGxveWluZyBJbmZlcm5vIGFwcHMgdG8gcHJvZHVjdGlvbiwgbWFrZSBzdXJlIHRvIHVzZSAnICtcbiAgICAgICAgICAgICd0aGUgcHJvZHVjdGlvbiBidWlsZCB3aGljaCBza2lwcyBkZXZlbG9wbWVudCB3YXJuaW5ncyBhbmQgaXMgZmFzdGVyLiAnICtcbiAgICAgICAgICAgICdTZWUgaHR0cDovL2luZmVybm9qcy5vcmcgZm9yIG1vcmUgZGV0YWlscy4nKSk7XG4gICAgfVxufVxudmFyIHZlcnNpb24gPSAnMy4wLjUnO1xuZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcbi8vIHdlIGR1cGxpY2F0ZSBpdCBzbyBpdCBwbGF5cyBuaWNlbHkgd2l0aCBkaWZmZXJlbnQgbW9kdWxlIGxvYWRpbmcgc3lzdGVtc1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGdldEZsYWdzRm9yRWxlbWVudFZub2RlOiBub3JtYWxpemF0aW9uXzEuZ2V0RmxhZ3NGb3JFbGVtZW50Vm5vZGUsXG4gICAgbGlua0V2ZW50OiBsaW5rRXZlbnRfMS5saW5rRXZlbnQsXG4gICAgLy8gY29yZSBzaGFwZXNcbiAgICBjcmVhdGVWTm9kZTogVk5vZGVzXzEuY3JlYXRlVk5vZGUsXG4gICAgLy8gY2xvbmluZ1xuICAgIGNsb25lVk5vZGU6IFZOb2Rlc18xLmNsb25lVk5vZGUsXG4gICAgLy8gdXNlZCB0byBzaGFyZWQgY29tbW9uIGl0ZW1zIGJldHdlZW4gSW5mZXJubyBsaWJzXG4gICAgTk9fT1A6IGluZmVybm9fc2hhcmVkXzEuTk9fT1AsXG4gICAgRU1QVFlfT0JKOiB1dGlsc18xLkVNUFRZX09CSixcbiAgICAvLyBET01cbiAgICByZW5kZXI6IHJlbmRlcmluZ18xLnJlbmRlcixcbiAgICBmaW5kRE9NTm9kZTogcmVuZGVyaW5nXzEuZmluZERPTU5vZGUsXG4gICAgY3JlYXRlUmVuZGVyZXI6IHJlbmRlcmluZ18xLmNyZWF0ZVJlbmRlcmVyLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNfMS5vcHRpb25zLFxuICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgaW50ZXJuYWxfcGF0Y2g6IHBhdGNoaW5nXzEucGF0Y2gsXG4gICAgaW50ZXJuYWxfRE9NTm9kZU1hcDogcmVuZGVyaW5nXzEuY29tcG9uZW50VG9ET01Ob2RlTWFwLFxuICAgIGludGVybmFsX2lzVW5pdGxlc3NOdW1iZXI6IGNvbnN0YW50c18xLmlzVW5pdGxlc3NOdW1iZXIsXG4gICAgaW50ZXJuYWxfbm9ybWFsaXplOiBub3JtYWxpemF0aW9uXzEubm9ybWFsaXplXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcmVmaXhlcjtcblxudmFyIF9nZXRCcm93c2VySW5mb3JtYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24nKTtcblxudmFyIF9nZXRCcm93c2VySW5mb3JtYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0QnJvd3NlckluZm9ybWF0aW9uKTtcblxudmFyIF9nZXRQcmVmaXhlZEtleWZyYW1lcyA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRLZXlmcmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRLZXlmcmFtZXMpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5ID0gcmVxdWlyZSgnLi4vdXRpbHMvYWRkTmV3VmFsdWVzT25seScpO1xuXG52YXIgX2FkZE5ld1ZhbHVlc09ubHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkTmV3VmFsdWVzT25seSk7XG5cbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuLi91dGlscy9pc09iamVjdCcpO1xuXG52YXIgX2lzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzT2JqZWN0KTtcblxudmFyIF9wcmVmaXhWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByZWZpeFZhbHVlJyk7XG5cbnZhciBfcHJlZml4VmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4VmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBjcmVhdGVQcmVmaXhlcihfcmVmKSB7XG4gIHZhciBwcmVmaXhNYXAgPSBfcmVmLnByZWZpeE1hcCxcbiAgICAgIHBsdWdpbnMgPSBfcmVmLnBsdWdpbnM7XG4gIHZhciBmYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgKiBJbnN0YW50aWFudGUgYSBuZXcgcHJlZml4ZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgLSB1c2VyQWdlbnQgdG8gZ2F0aGVyIHByZWZpeCBpbmZvcm1hdGlvbiBhY2NvcmRpbmcgdG8gY2FuaXVzZS5jb21cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZWVwVW5wcmVmaXhlZCAtIGtlZXBzIHVucHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgKi9cbiAgICBmdW5jdGlvbiBQcmVmaXhlcigpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeGVyKTtcblxuICAgICAgdmFyIGRlZmF1bHRVc2VyQWdlbnQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMuX3VzZXJBZ2VudCA9IG9wdGlvbnMudXNlckFnZW50IHx8IGRlZmF1bHRVc2VyQWdlbnQ7XG4gICAgICB0aGlzLl9rZWVwVW5wcmVmaXhlZCA9IG9wdGlvbnMua2VlcFVucHJlZml4ZWQgfHwgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQpIHtcbiAgICAgICAgdGhpcy5fYnJvd3NlckluZm8gPSAoMCwgX2dldEJyb3dzZXJJbmZvcm1hdGlvbjIuZGVmYXVsdCkodGhpcy5fdXNlckFnZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2tzIGlmIHRoZSB1c2VyQWdlbnQgd2FzIHJlc29sdmVkIGNvcnJlY3RseVxuICAgICAgaWYgKHRoaXMuX2Jyb3dzZXJJbmZvICYmIHRoaXMuX2Jyb3dzZXJJbmZvLmNzc1ByZWZpeCkge1xuICAgICAgICB0aGlzLnByZWZpeGVkS2V5ZnJhbWVzID0gKDAsIF9nZXRQcmVmaXhlZEtleWZyYW1lczIuZGVmYXVsdCkodGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUsIHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uLCB0aGlzLl9icm93c2VySW5mby5jc3NQcmVmaXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXNlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmVmaXhEYXRhID0gdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgJiYgcHJlZml4TWFwW3RoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJOYW1lXTtcbiAgICAgIGlmIChwcmVmaXhEYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlcXVpcmVzUHJlZml4ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJlZml4RGF0YSkge1xuICAgICAgICAgIGlmIChwcmVmaXhEYXRhW3Byb3BlcnR5XSA+PSB0aGlzLl9icm93c2VySW5mby5icm93c2VyVmVyc2lvbikge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCA9IE9iamVjdC5rZXlzKHRoaXMuX3JlcXVpcmVzUHJlZml4KS5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXNlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tZXRhRGF0YSA9IHtcbiAgICAgICAgYnJvd3NlclZlcnNpb246IHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgICBicm93c2VyTmFtZTogdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUsXG4gICAgICAgIGNzc1ByZWZpeDogdGhpcy5fYnJvd3NlckluZm8uY3NzUHJlZml4LFxuICAgICAgICBqc1ByZWZpeDogdGhpcy5fYnJvd3NlckluZm8uanNQcmVmaXgsXG4gICAgICAgIGtlZXBVbnByZWZpeGVkOiB0aGlzLl9rZWVwVW5wcmVmaXhlZCxcbiAgICAgICAgcmVxdWlyZXNQcmVmaXg6IHRoaXMuX3JlcXVpcmVzUHJlZml4XG4gICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcmVmaXhlciwgW3tcbiAgICAgIGtleTogJ3ByZWZpeCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4KHN0eWxlKSB7XG4gICAgICAgIC8vIHVzZSBzdGF0aWMgcHJlZml4ZXIgYXMgZmFsbGJhY2sgaWYgdXNlckFnZW50IGNhbiBub3QgYmUgcmVzb2x2ZWRcbiAgICAgICAgaWYgKHRoaXMuX3VzZUZhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbGxiYWNrKHN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIXRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZpeFN0eWxlKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfcHJlZml4U3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcmVmaXhTdHlsZShzdHlsZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BlcnR5XTtcblxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgb2JqZWN0c1xuICAgICAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IHRoaXMucHJlZml4KHZhbHVlKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBhcnJheSB2YWx1ZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gKDAsIF9wcmVmaXhWYWx1ZTIuZGVmYXVsdCkocGx1Z2lucywgcHJvcGVydHksIHZhbHVlW2ldLCBzdHlsZSwgdGhpcy5fbWV0YURhdGEpO1xuICAgICAgICAgICAgICAoMCwgX2FkZE5ld1ZhbHVlc09ubHkyLmRlZmF1bHQpKGNvbWJpbmVkVmFsdWUsIHByb2Nlc3NlZFZhbHVlIHx8IHZhbHVlW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgICAgICAvLyBieSBhbnkgcGx1Z2luIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgbXV0YXRpb25zXG4gICAgICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IGNvbWJpbmVkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfcHJvY2Vzc2VkVmFsdWUgPSAoMCwgX3ByZWZpeFZhbHVlMi5kZWZhdWx0KShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCB0aGlzLl9tZXRhRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCB3YXMgdG91Y2hlZFxuICAgICAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSBfcHJvY2Vzc2VkVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyB0byBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVxdWlyZXNQcmVmaXguaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgIHN0eWxlW3RoaXMuX2Jyb3dzZXJJbmZvLmpzUHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5fa2VlcFVucHJlZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3R5bGVbcHJvcGVydHldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAgICAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgICovXG5cbiAgICB9XSwgW3tcbiAgICAgIGtleTogJ3ByZWZpeEFsbCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4QWxsKHN0eWxlcykge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2soc3R5bGVzKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHJlZml4ZXI7XG4gIH0oKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBwbHVnaW5zOiBbXSxcbiAgcHJlZml4TWFwOiB7IFwiY2hyb21lXCI6IHsgXCJhcHBlYXJhbmNlXCI6IDU5LCBcInVzZXJTZWxlY3RcIjogNTMsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNTksIFwidGV4dEVtcGhhc2lzXCI6IDU5LCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDU5LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDU5LCBcImJveERlY29yYXRpb25CcmVha1wiOiA1OSwgXCJjbGlwUGF0aFwiOiA1NCwgXCJtYXNrSW1hZ2VcIjogNTksIFwibWFza01vZGVcIjogNTksIFwibWFza1JlcGVhdFwiOiA1OSwgXCJtYXNrUG9zaXRpb25cIjogNTksIFwibWFza0NsaXBcIjogNTksIFwibWFza09yaWdpblwiOiA1OSwgXCJtYXNrU2l6ZVwiOiA1OSwgXCJtYXNrQ29tcG9zaXRlXCI6IDU5LCBcIm1hc2tcIjogNTksIFwibWFza0JvcmRlclNvdXJjZVwiOiA1OSwgXCJtYXNrQm9yZGVyTW9kZVwiOiA1OSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogNTksIFwibWFza0JvcmRlcldpZHRoXCI6IDU5LCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNTksIFwibWFza0JvcmRlclJlcGVhdFwiOiA1OSwgXCJtYXNrQm9yZGVyXCI6IDU5LCBcIm1hc2tUeXBlXCI6IDU5LCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogNTYsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDU2LCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA1NiwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDU2LCBcImZpbHRlclwiOiA1MiwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDQ3LCBcImJyZWFrQWZ0ZXJcIjogNDksIFwiYnJlYWtCZWZvcmVcIjogNDksIFwiYnJlYWtJbnNpZGVcIjogNDksIFwiY29sdW1uQ291bnRcIjogNDksIFwiY29sdW1uRmlsbFwiOiA0OSwgXCJjb2x1bW5HYXBcIjogNDksIFwiY29sdW1uUnVsZVwiOiA0OSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogNDksIFwiY29sdW1uUnVsZVN0eWxlXCI6IDQ5LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA0OSwgXCJjb2x1bW5zXCI6IDQ5LCBcImNvbHVtblNwYW5cIjogNDksIFwiY29sdW1uV2lkdGhcIjogNDkgfSwgXCJzYWZhcmlcIjogeyBcImZsZXhcIjogOCwgXCJmbGV4QmFzaXNcIjogOCwgXCJmbGV4RGlyZWN0aW9uXCI6IDgsIFwiZmxleEdyb3dcIjogOCwgXCJmbGV4Rmxvd1wiOiA4LCBcImZsZXhTaHJpbmtcIjogOCwgXCJmbGV4V3JhcFwiOiA4LCBcImFsaWduQ29udGVudFwiOiA4LCBcImFsaWduSXRlbXNcIjogOCwgXCJhbGlnblNlbGZcIjogOCwgXCJqdXN0aWZ5Q29udGVudFwiOiA4LCBcIm9yZGVyXCI6IDgsIFwidHJhbnNmb3JtXCI6IDgsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDgsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiA4LCBcInRyYW5zZm9ybU9yaWdpbllcIjogOCwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOCwgXCJwZXJzcGVjdGl2ZVwiOiA4LCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDgsIFwidHJhbnNmb3JtU3R5bGVcIjogOCwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IDgsIFwiYW5pbWF0aW9uXCI6IDgsIFwiYW5pbWF0aW9uRGVsYXlcIjogOCwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogOCwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiA4LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDgsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogOCwgXCJhbmltYXRpb25OYW1lXCI6IDgsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDgsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogOCwgXCJhcHBlYXJhbmNlXCI6IDEwLjEsIFwidXNlclNlbGVjdFwiOiAxMC4xLCBcImJhY2tkcm9wRmlsdGVyXCI6IDEwLjEsIFwiZm9udEtlcm5pbmdcIjogOSwgXCJzY3JvbGxTbmFwVHlwZVwiOiAxMC4xLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDEwLjEsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogMTAuMSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogMTAuMSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiAxMC4xLCBcImJveERlY29yYXRpb25CcmVha1wiOiAxMC4xLCBcImNsaXBQYXRoXCI6IDEwLjEsIFwibWFza0ltYWdlXCI6IDEwLjEsIFwibWFza01vZGVcIjogMTAuMSwgXCJtYXNrUmVwZWF0XCI6IDEwLjEsIFwibWFza1Bvc2l0aW9uXCI6IDEwLjEsIFwibWFza0NsaXBcIjogMTAuMSwgXCJtYXNrT3JpZ2luXCI6IDEwLjEsIFwibWFza1NpemVcIjogMTAuMSwgXCJtYXNrQ29tcG9zaXRlXCI6IDEwLjEsIFwibWFza1wiOiAxMC4xLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogMTAuMSwgXCJtYXNrQm9yZGVyTW9kZVwiOiAxMC4xLCBcIm1hc2tCb3JkZXJTbGljZVwiOiAxMC4xLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiAxMC4xLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogMTAuMSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDEwLjEsIFwibWFza0JvcmRlclwiOiAxMC4xLCBcIm1hc2tUeXBlXCI6IDEwLjEsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiAxMC4xLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiAxMC4xLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiAxMC4xLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogMTAuMSwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IDEwLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogMTAsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogMTAsIFwiZmlsdGVyXCI6IDksIFwiaHlwaGVuc1wiOiAxMC4xLCBcImZsb3dJbnRvXCI6IDEwLjEsIFwiZmxvd0Zyb21cIjogMTAuMSwgXCJicmVha0JlZm9yZVwiOiA4LCBcImJyZWFrQWZ0ZXJcIjogOCwgXCJicmVha0luc2lkZVwiOiA4LCBcInJlZ2lvbkZyYWdtZW50XCI6IDEwLjEsIFwiY29sdW1uQ291bnRcIjogOCwgXCJjb2x1bW5GaWxsXCI6IDgsIFwiY29sdW1uR2FwXCI6IDgsIFwiY29sdW1uUnVsZVwiOiA4LCBcImNvbHVtblJ1bGVDb2xvclwiOiA4LCBcImNvbHVtblJ1bGVTdHlsZVwiOiA4LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA4LCBcImNvbHVtbnNcIjogOCwgXCJjb2x1bW5TcGFuXCI6IDgsIFwiY29sdW1uV2lkdGhcIjogOCB9LCBcImZpcmVmb3hcIjogeyBcImFwcGVhcmFuY2VcIjogNTQsIFwidXNlclNlbGVjdFwiOiA1NCwgXCJ0ZXh0QWxpZ25MYXN0XCI6IDQ4LCBcInRhYlNpemVcIjogNTQsIFwiaHlwaGVuc1wiOiA0MiwgXCJicmVha0FmdGVyXCI6IDUxLCBcImJyZWFrQmVmb3JlXCI6IDUxLCBcImJyZWFrSW5zaWRlXCI6IDUxLCBcImNvbHVtbkNvdW50XCI6IDUxLCBcImNvbHVtbkZpbGxcIjogNTEsIFwiY29sdW1uR2FwXCI6IDUxLCBcImNvbHVtblJ1bGVcIjogNTEsIFwiY29sdW1uUnVsZUNvbG9yXCI6IDUxLCBcImNvbHVtblJ1bGVTdHlsZVwiOiA1MSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogNTEsIFwiY29sdW1uc1wiOiA1MSwgXCJjb2x1bW5TcGFuXCI6IDUxLCBcImNvbHVtbldpZHRoXCI6IDUxIH0sIFwib3BlcmFcIjogeyBcImZsZXhcIjogMTYsIFwiZmxleEJhc2lzXCI6IDE2LCBcImZsZXhEaXJlY3Rpb25cIjogMTYsIFwiZmxleEdyb3dcIjogMTYsIFwiZmxleEZsb3dcIjogMTYsIFwiZmxleFNocmlua1wiOiAxNiwgXCJmbGV4V3JhcFwiOiAxNiwgXCJhbGlnbkNvbnRlbnRcIjogMTYsIFwiYWxpZ25JdGVtc1wiOiAxNiwgXCJhbGlnblNlbGZcIjogMTYsIFwianVzdGlmeUNvbnRlbnRcIjogMTYsIFwib3JkZXJcIjogMTYsIFwidHJhbnNmb3JtXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpblwiOiAyMiwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpbllcIjogMjIsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IDIyLCBcInBlcnNwZWN0aXZlXCI6IDIyLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDIyLCBcInRyYW5zZm9ybVN0eWxlXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpblpcIjogMjIsIFwiYW5pbWF0aW9uXCI6IDI5LCBcImFuaW1hdGlvbkRlbGF5XCI6IDI5LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiAyOSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiAyOSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiAyOSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiAyOSwgXCJhbmltYXRpb25OYW1lXCI6IDI5LCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiAyOSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiAyOSwgXCJhcHBlYXJhbmNlXCI6IDQ0LCBcInVzZXJTZWxlY3RcIjogNDAsIFwiZm9udEtlcm5pbmdcIjogMTksIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNDQsIFwidGV4dEVtcGhhc2lzXCI6IDQ0LCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDQ0LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDQ0LCBcImJveERlY29yYXRpb25CcmVha1wiOiA0NCwgXCJjbGlwUGF0aFwiOiA0MSwgXCJtYXNrSW1hZ2VcIjogNDQsIFwibWFza01vZGVcIjogNDQsIFwibWFza1JlcGVhdFwiOiA0NCwgXCJtYXNrUG9zaXRpb25cIjogNDQsIFwibWFza0NsaXBcIjogNDQsIFwibWFza09yaWdpblwiOiA0NCwgXCJtYXNrU2l6ZVwiOiA0NCwgXCJtYXNrQ29tcG9zaXRlXCI6IDQ0LCBcIm1hc2tcIjogNDQsIFwibWFza0JvcmRlclNvdXJjZVwiOiA0NCwgXCJtYXNrQm9yZGVyTW9kZVwiOiA0NCwgXCJtYXNrQm9yZGVyU2xpY2VcIjogNDQsIFwibWFza0JvcmRlcldpZHRoXCI6IDQ0LCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNDQsIFwibWFza0JvcmRlclJlcGVhdFwiOiA0NCwgXCJtYXNrQm9yZGVyXCI6IDQ0LCBcIm1hc2tUeXBlXCI6IDQ0LCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogNDMsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDQzLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA0MywgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDQzLCBcImZpbHRlclwiOiAzOSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDM0LCBcImJyZWFrQWZ0ZXJcIjogMzYsIFwiYnJlYWtCZWZvcmVcIjogMzYsIFwiYnJlYWtJbnNpZGVcIjogMzYsIFwiY29sdW1uQ291bnRcIjogMzYsIFwiY29sdW1uRmlsbFwiOiAzNiwgXCJjb2x1bW5HYXBcIjogMzYsIFwiY29sdW1uUnVsZVwiOiAzNiwgXCJjb2x1bW5SdWxlQ29sb3JcIjogMzYsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDM2LCBcImNvbHVtblJ1bGVXaWR0aFwiOiAzNiwgXCJjb2x1bW5zXCI6IDM2LCBcImNvbHVtblNwYW5cIjogMzYsIFwiY29sdW1uV2lkdGhcIjogMzYgfSwgXCJpZVwiOiB7IFwidXNlclNlbGVjdFwiOiAxMSwgXCJ3cmFwRmxvd1wiOiAxMSwgXCJ3cmFwVGhyb3VnaFwiOiAxMSwgXCJ3cmFwTWFyZ2luXCI6IDExLCBcInNjcm9sbFNuYXBUeXBlXCI6IDExLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDExLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDExLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiAxMSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiAxMSwgXCJoeXBoZW5zXCI6IDExLCBcImZsb3dJbnRvXCI6IDExLCBcImZsb3dGcm9tXCI6IDExLCBcImJyZWFrQmVmb3JlXCI6IDExLCBcImJyZWFrQWZ0ZXJcIjogMTEsIFwiYnJlYWtJbnNpZGVcIjogMTEsIFwicmVnaW9uRnJhZ21lbnRcIjogMTEsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiAxMSwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IDExLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IDExLCBcImdyaWRUZW1wbGF0ZVwiOiAxMSwgXCJncmlkQXV0b0NvbHVtbnNcIjogMTEsIFwiZ3JpZEF1dG9Sb3dzXCI6IDExLCBcImdyaWRBdXRvRmxvd1wiOiAxMSwgXCJncmlkXCI6IDExLCBcImdyaWRSb3dTdGFydFwiOiAxMSwgXCJncmlkQ29sdW1uU3RhcnRcIjogMTEsIFwiZ3JpZFJvd0VuZFwiOiAxMSwgXCJncmlkUm93XCI6IDExLCBcImdyaWRDb2x1bW5cIjogMTEsIFwiZ3JpZENvbHVtbkVuZFwiOiAxMSwgXCJncmlkQ29sdW1uR2FwXCI6IDExLCBcImdyaWRSb3dHYXBcIjogMTEsIFwiZ3JpZEFyZWFcIjogMTEsIFwiZ3JpZEdhcFwiOiAxMSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiAxMSB9LCBcImVkZ2VcIjogeyBcInVzZXJTZWxlY3RcIjogMTUsIFwid3JhcEZsb3dcIjogMTUsIFwid3JhcFRocm91Z2hcIjogMTUsIFwid3JhcE1hcmdpblwiOiAxNSwgXCJzY3JvbGxTbmFwVHlwZVwiOiAxNSwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiAxNSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiAxNSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogMTUsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogMTUsIFwiaHlwaGVuc1wiOiAxNSwgXCJmbG93SW50b1wiOiAxNSwgXCJmbG93RnJvbVwiOiAxNSwgXCJicmVha0JlZm9yZVwiOiAxNSwgXCJicmVha0FmdGVyXCI6IDE1LCBcImJyZWFrSW5zaWRlXCI6IDE1LCBcInJlZ2lvbkZyYWdtZW50XCI6IDE1LCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogMTUsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiAxNSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiAxNSwgXCJncmlkVGVtcGxhdGVcIjogMTUsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IDE1LCBcImdyaWRBdXRvUm93c1wiOiAxNSwgXCJncmlkQXV0b0Zsb3dcIjogMTUsIFwiZ3JpZFwiOiAxNSwgXCJncmlkUm93U3RhcnRcIjogMTUsIFwiZ3JpZENvbHVtblN0YXJ0XCI6IDE1LCBcImdyaWRSb3dFbmRcIjogMTUsIFwiZ3JpZFJvd1wiOiAxNSwgXCJncmlkQ29sdW1uXCI6IDE1LCBcImdyaWRDb2x1bW5FbmRcIjogMTUsIFwiZ3JpZENvbHVtbkdhcFwiOiAxNSwgXCJncmlkUm93R2FwXCI6IDE1LCBcImdyaWRBcmVhXCI6IDE1LCBcImdyaWRHYXBcIjogMTUgfSwgXCJpb3Nfc2FmXCI6IHsgXCJmbGV4XCI6IDguMSwgXCJmbGV4QmFzaXNcIjogOC4xLCBcImZsZXhEaXJlY3Rpb25cIjogOC4xLCBcImZsZXhHcm93XCI6IDguMSwgXCJmbGV4Rmxvd1wiOiA4LjEsIFwiZmxleFNocmlua1wiOiA4LjEsIFwiZmxleFdyYXBcIjogOC4xLCBcImFsaWduQ29udGVudFwiOiA4LjEsIFwiYWxpZ25JdGVtc1wiOiA4LjEsIFwiYWxpZ25TZWxmXCI6IDguMSwgXCJqdXN0aWZ5Q29udGVudFwiOiA4LjEsIFwib3JkZXJcIjogOC4xLCBcInRyYW5zZm9ybVwiOiA4LjEsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDguMSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOC4xLCBcInBlcnNwZWN0aXZlXCI6IDguMSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA4LjEsIFwidHJhbnNmb3JtU3R5bGVcIjogOC4xLCBcInRyYW5zZm9ybU9yaWdpblpcIjogOC4xLCBcImFuaW1hdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uRGVsYXlcIjogOC4xLCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogOC4xLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDguMSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA4LjEsIFwiYW5pbWF0aW9uTmFtZVwiOiA4LjEsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDguMSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA4LjEsIFwiYXBwZWFyYW5jZVwiOiAxMCwgXCJ1c2VyU2VsZWN0XCI6IDEwLCBcImJhY2tkcm9wRmlsdGVyXCI6IDEwLCBcImZvbnRLZXJuaW5nXCI6IDEwLCBcInNjcm9sbFNuYXBUeXBlXCI6IDEwLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDEwLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDEwLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiAxMCwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiAxMCwgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogMTAsIFwiY2xpcFBhdGhcIjogMTAsIFwibWFza0ltYWdlXCI6IDEwLCBcIm1hc2tNb2RlXCI6IDEwLCBcIm1hc2tSZXBlYXRcIjogMTAsIFwibWFza1Bvc2l0aW9uXCI6IDEwLCBcIm1hc2tDbGlwXCI6IDEwLCBcIm1hc2tPcmlnaW5cIjogMTAsIFwibWFza1NpemVcIjogMTAsIFwibWFza0NvbXBvc2l0ZVwiOiAxMCwgXCJtYXNrXCI6IDEwLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogMTAsIFwibWFza0JvcmRlck1vZGVcIjogMTAsIFwibWFza0JvcmRlclNsaWNlXCI6IDEwLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiAxMCwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IDEwLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogMTAsIFwibWFza0JvcmRlclwiOiAxMCwgXCJtYXNrVHlwZVwiOiAxMCwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiAxMCwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IDEwLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiAxMCwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogMTAsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiAxMCwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IDEwLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogMTAsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogMTAsIFwiZmlsdGVyXCI6IDksIFwiaHlwaGVuc1wiOiAxMCwgXCJmbG93SW50b1wiOiAxMCwgXCJmbG93RnJvbVwiOiAxMCwgXCJicmVha0JlZm9yZVwiOiA4LjEsIFwiYnJlYWtBZnRlclwiOiA4LjEsIFwiYnJlYWtJbnNpZGVcIjogOC4xLCBcInJlZ2lvbkZyYWdtZW50XCI6IDEwLCBcImNvbHVtbkNvdW50XCI6IDguMSwgXCJjb2x1bW5GaWxsXCI6IDguMSwgXCJjb2x1bW5HYXBcIjogOC4xLCBcImNvbHVtblJ1bGVcIjogOC4xLCBcImNvbHVtblJ1bGVDb2xvclwiOiA4LjEsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDguMSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogOC4xLCBcImNvbHVtbnNcIjogOC4xLCBcImNvbHVtblNwYW5cIjogOC4xLCBcImNvbHVtbldpZHRoXCI6IDguMSB9LCBcImFuZHJvaWRcIjogeyBcImZsZXhcIjogNC4yLCBcImZsZXhCYXNpc1wiOiA0LjIsIFwiZmxleERpcmVjdGlvblwiOiA0LjIsIFwiZmxleEdyb3dcIjogNC4yLCBcImZsZXhGbG93XCI6IDQuMiwgXCJmbGV4U2hyaW5rXCI6IDQuMiwgXCJmbGV4V3JhcFwiOiA0LjIsIFwiYWxpZ25Db250ZW50XCI6IDQuMiwgXCJhbGlnbkl0ZW1zXCI6IDQuMiwgXCJhbGlnblNlbGZcIjogNC4yLCBcImp1c3RpZnlDb250ZW50XCI6IDQuMiwgXCJvcmRlclwiOiA0LjIsIFwidHJhbnNpdGlvblwiOiA0LjIsIFwidHJhbnNpdGlvbkRlbGF5XCI6IDQuMiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogNC4yLCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiA0LjIsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDQuMiwgXCJ0cmFuc2Zvcm1cIjogNC40LCBcInRyYW5zZm9ybU9yaWdpblwiOiA0LjQsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiA0LjQsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiA0LjQsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IDQuNCwgXCJwZXJzcGVjdGl2ZVwiOiA0LjQsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogNC40LCBcInRyYW5zZm9ybVN0eWxlXCI6IDQuNCwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IDQuNCwgXCJhbmltYXRpb25cIjogNC40LCBcImFuaW1hdGlvbkRlbGF5XCI6IDQuNCwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogNC40LCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IDQuNCwgXCJhbmltYXRpb25EdXJhdGlvblwiOiA0LjQsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogNC40LCBcImFuaW1hdGlvbk5hbWVcIjogNC40LCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiA0LjQsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogNC40LCBcImFwcGVhcmFuY2VcIjogNTMsIFwidXNlclNlbGVjdFwiOiA1MywgXCJmb250S2VybmluZ1wiOiA0LjQsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNTMsIFwidGV4dEVtcGhhc2lzXCI6IDUzLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDUzLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDUzLCBcImJveERlY29yYXRpb25CcmVha1wiOiA1MywgXCJjbGlwUGF0aFwiOiA1MywgXCJtYXNrSW1hZ2VcIjogNTMsIFwibWFza01vZGVcIjogNTMsIFwibWFza1JlcGVhdFwiOiA1MywgXCJtYXNrUG9zaXRpb25cIjogNTMsIFwibWFza0NsaXBcIjogNTMsIFwibWFza09yaWdpblwiOiA1MywgXCJtYXNrU2l6ZVwiOiA1MywgXCJtYXNrQ29tcG9zaXRlXCI6IDUzLCBcIm1hc2tcIjogNTMsIFwibWFza0JvcmRlclNvdXJjZVwiOiA1MywgXCJtYXNrQm9yZGVyTW9kZVwiOiA1MywgXCJtYXNrQm9yZGVyU2xpY2VcIjogNTMsIFwibWFza0JvcmRlcldpZHRoXCI6IDUzLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNTMsIFwibWFza0JvcmRlclJlcGVhdFwiOiA1MywgXCJtYXNrQm9yZGVyXCI6IDUzLCBcIm1hc2tUeXBlXCI6IDUzLCBcImZpbHRlclwiOiA0LjQsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiA0LjQsIFwiYnJlYWtBZnRlclwiOiA1MywgXCJicmVha0JlZm9yZVwiOiA1MywgXCJicmVha0luc2lkZVwiOiA1MywgXCJjb2x1bW5Db3VudFwiOiA1MywgXCJjb2x1bW5GaWxsXCI6IDUzLCBcImNvbHVtbkdhcFwiOiA1MywgXCJjb2x1bW5SdWxlXCI6IDUzLCBcImNvbHVtblJ1bGVDb2xvclwiOiA1MywgXCJjb2x1bW5SdWxlU3R5bGVcIjogNTMsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDUzLCBcImNvbHVtbnNcIjogNTMsIFwiY29sdW1uU3BhblwiOiA1MywgXCJjb2x1bW5XaWR0aFwiOiA1MyB9LCBcImFuZF9jaHJcIjogeyBcImFwcGVhcmFuY2VcIjogNTUsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNTUsIFwidGV4dEVtcGhhc2lzXCI6IDU1LCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDU1LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDU1LCBcImJveERlY29yYXRpb25CcmVha1wiOiA1NSwgXCJtYXNrSW1hZ2VcIjogNTUsIFwibWFza01vZGVcIjogNTUsIFwibWFza1JlcGVhdFwiOiA1NSwgXCJtYXNrUG9zaXRpb25cIjogNTUsIFwibWFza0NsaXBcIjogNTUsIFwibWFza09yaWdpblwiOiA1NSwgXCJtYXNrU2l6ZVwiOiA1NSwgXCJtYXNrQ29tcG9zaXRlXCI6IDU1LCBcIm1hc2tcIjogNTUsIFwibWFza0JvcmRlclNvdXJjZVwiOiA1NSwgXCJtYXNrQm9yZGVyTW9kZVwiOiA1NSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogNTUsIFwibWFza0JvcmRlcldpZHRoXCI6IDU1LCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogNTUsIFwibWFza0JvcmRlclJlcGVhdFwiOiA1NSwgXCJtYXNrQm9yZGVyXCI6IDU1LCBcIm1hc2tUeXBlXCI6IDU1LCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogNTUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDU1LCBcInRleHREZWNvcmF0aW9uTGluZVwiOiA1NSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDU1IH0sIFwiYW5kX3VjXCI6IHsgXCJmbGV4XCI6IDExLCBcImZsZXhCYXNpc1wiOiAxMSwgXCJmbGV4RGlyZWN0aW9uXCI6IDExLCBcImZsZXhHcm93XCI6IDExLCBcImZsZXhGbG93XCI6IDExLCBcImZsZXhTaHJpbmtcIjogMTEsIFwiZmxleFdyYXBcIjogMTEsIFwiYWxpZ25Db250ZW50XCI6IDExLCBcImFsaWduSXRlbXNcIjogMTEsIFwiYWxpZ25TZWxmXCI6IDExLCBcImp1c3RpZnlDb250ZW50XCI6IDExLCBcIm9yZGVyXCI6IDExLCBcInRyYW5zaXRpb25cIjogMTEsIFwidHJhbnNpdGlvbkRlbGF5XCI6IDExLCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAxMSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogMTEsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDExLCBcInRyYW5zZm9ybVwiOiAxMSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogMTEsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiAxMSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDExLCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiAxMSwgXCJwZXJzcGVjdGl2ZVwiOiAxMSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiAxMSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiAxMSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IDExLCBcImFuaW1hdGlvblwiOiAxMSwgXCJhbmltYXRpb25EZWxheVwiOiAxMSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogMTEsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogMTEsIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMTEsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogMTEsIFwiYW5pbWF0aW9uTmFtZVwiOiAxMSwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogMTEsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogMTEsIFwiYXBwZWFyYW5jZVwiOiAxMSwgXCJ1c2VyU2VsZWN0XCI6IDExLCBcImZvbnRLZXJuaW5nXCI6IDExLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IDExLCBcInRleHRFbXBoYXNpc1wiOiAxMSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiAxMSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiAxMSwgXCJtYXNrSW1hZ2VcIjogMTEsIFwibWFza01vZGVcIjogMTEsIFwibWFza1JlcGVhdFwiOiAxMSwgXCJtYXNrUG9zaXRpb25cIjogMTEsIFwibWFza0NsaXBcIjogMTEsIFwibWFza09yaWdpblwiOiAxMSwgXCJtYXNrU2l6ZVwiOiAxMSwgXCJtYXNrQ29tcG9zaXRlXCI6IDExLCBcIm1hc2tcIjogMTEsIFwibWFza0JvcmRlclNvdXJjZVwiOiAxMSwgXCJtYXNrQm9yZGVyTW9kZVwiOiAxMSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogMTEsIFwibWFza0JvcmRlcldpZHRoXCI6IDExLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogMTEsIFwibWFza0JvcmRlclJlcGVhdFwiOiAxMSwgXCJtYXNrQm9yZGVyXCI6IDExLCBcIm1hc2tUeXBlXCI6IDExLCBcInRleHRTaXplQWRqdXN0XCI6IDExLCBcImZpbHRlclwiOiAxMSwgXCJoeXBoZW5zXCI6IDExLCBcImZsb3dJbnRvXCI6IDExLCBcImZsb3dGcm9tXCI6IDExLCBcImJyZWFrQmVmb3JlXCI6IDExLCBcImJyZWFrQWZ0ZXJcIjogMTEsIFwiYnJlYWtJbnNpZGVcIjogMTEsIFwicmVnaW9uRnJhZ21lbnRcIjogMTEsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiAxMSwgXCJjb2x1bW5Db3VudFwiOiAxMSwgXCJjb2x1bW5GaWxsXCI6IDExLCBcImNvbHVtbkdhcFwiOiAxMSwgXCJjb2x1bW5SdWxlXCI6IDExLCBcImNvbHVtblJ1bGVDb2xvclwiOiAxMSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogMTEsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDExLCBcImNvbHVtbnNcIjogMTEsIFwiY29sdW1uU3BhblwiOiAxMSwgXCJjb2x1bW5XaWR0aFwiOiAxMSB9LCBcIm9wX21pbmlcIjoge30gfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZVByZWZpeGVyID0gcmVxdWlyZSgnLi9jcmVhdGVQcmVmaXhlcicpO1xuXG52YXIgX2NyZWF0ZVByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByZWZpeGVyKTtcblxudmFyIF9jdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Vyc29yJyk7XG5cbnZhciBfY3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnNvcik7XG5cbnZhciBfY3Jvc3NGYWRlID0gcmVxdWlyZSgnLi9wbHVnaW5zL2Nyb3NzRmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUpO1xuXG52YXIgX2ZpbHRlciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9maWx0ZXInKTtcblxudmFyIF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmlsdGVyKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX2ZsZXhib3hPbGQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveE9sZCcpO1xuXG52YXIgX2ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveE9sZCk7XG5cbnZhciBfZ3JhZGllbnQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZ3JhZGllbnQnKTtcblxudmFyIF9ncmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFkaWVudCk7XG5cbnZhciBfaW1hZ2VTZXQgPSByZXF1aXJlKCcuL3BsdWdpbnMvaW1hZ2VTZXQnKTtcblxudmFyIF9pbWFnZVNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbWFnZVNldCk7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvcG9zaXRpb24nKTtcblxudmFyIF9wb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbik7XG5cbnZhciBfc2l6aW5nID0gcmVxdWlyZSgnLi9wbHVnaW5zL3NpemluZycpO1xuXG52YXIgX3NpemluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaXppbmcpO1xuXG52YXIgX3RyYW5zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvdHJhbnNpdGlvbicpO1xuXG52YXIgX3RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbik7XG5cbnZhciBfc3RhdGljID0gcmVxdWlyZSgnLi4vc3RhdGljJyk7XG5cbnZhciBfc3RhdGljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRpYyk7XG5cbnZhciBfZHluYW1pY0RhdGEgPSByZXF1aXJlKCcuL2R5bmFtaWNEYXRhJyk7XG5cbnZhciBfZHluYW1pY0RhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHluYW1pY0RhdGEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGx1Z2lucyA9IFtfY3Jvc3NGYWRlMi5kZWZhdWx0LCBfY3Vyc29yMi5kZWZhdWx0LCBfZmlsdGVyMi5kZWZhdWx0LCBfZmxleGJveE9sZDIuZGVmYXVsdCwgX2dyYWRpZW50Mi5kZWZhdWx0LCBfaW1hZ2VTZXQyLmRlZmF1bHQsIF9wb3NpdGlvbjIuZGVmYXVsdCwgX3NpemluZzIuZGVmYXVsdCwgX3RyYW5zaXRpb24yLmRlZmF1bHQsIF9mbGV4Mi5kZWZhdWx0XTtcblxudmFyIFByZWZpeGVyID0gKDAsIF9jcmVhdGVQcmVmaXhlcjIuZGVmYXVsdCkoe1xuICBwcmVmaXhNYXA6IF9keW5hbWljRGF0YTIuZGVmYXVsdC5wcmVmaXhNYXAsXG4gIHBsdWdpbnM6IHBsdWdpbnNcbn0sIF9zdGF0aWMyLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJlZml4ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcm9zc0ZhZGU7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcm9zc0ZhZGUocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignY3Jvc3MtZmFkZSgnKSA+IC0xICYmIChicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgfHwgYnJvd3Nlck5hbWUgPT09ICdvcGVyYScgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRfY2hyJyB8fCAoYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJyB8fCBicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScpICYmIGJyb3dzZXJWZXJzaW9uIDwgMTApKSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUucmVwbGFjZSgvY3Jvc3MtZmFkZVxcKC9nLCBjc3NQcmVmaXggKyAnY3Jvc3MtZmFkZSgnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Vyc29yO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdyYWJWYWx1ZXMgPSB7XG4gIGdyYWI6IHRydWUsXG4gIGdyYWJiaW5nOiB0cnVlXG59O1xuXG5cbnZhciB6b29tVmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGN1cnNvcihwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbiA9IF9yZWYuYnJvd3NlclZlcnNpb24sXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICAvLyBhZGRzIHByZWZpeGVzIGZvciBmaXJlZm94LCBjaHJvbWUsIHNhZmFyaSwgYW5kIG9wZXJhIHJlZ2FyZGxlc3Mgb2ZcbiAgLy8gdmVyc2lvbiB1bnRpbCBhIHJlbGlhYmxlIGJyb3dzZXIgc3VwcG9ydCBpbmZvIGNhbiBiZSBmb3VuZFxuICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy83OVxuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIGdyYWJWYWx1ZXNbdmFsdWVdICYmIChicm93c2VyTmFtZSA9PT0gJ2ZpcmVmb3gnIHx8IGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyB8fCBicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgfHwgYnJvd3Nlck5hbWUgPT09ICdvcGVyYScpKSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzUHJlZml4ICsgdmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cblxuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIHpvb21WYWx1ZXNbdmFsdWVdICYmIChicm93c2VyTmFtZSA9PT0gJ2ZpcmVmb3gnICYmIGJyb3dzZXJWZXJzaW9uIDwgMjQgfHwgYnJvd3Nlck5hbWUgPT09ICdjaHJvbWUnICYmIGJyb3dzZXJWZXJzaW9uIDwgMzcgfHwgYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknICYmIGJyb3dzZXJWZXJzaW9uIDwgOSB8fCBicm93c2VyTmFtZSA9PT0gJ29wZXJhJyAmJiBicm93c2VyVmVyc2lvbiA8IDI0KSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaWx0ZXI7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBmaWx0ZXIocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignZmlsdGVyKCcpID4gLTEgJiYgKGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicgfHwgYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknICYmIGJyb3dzZXJWZXJzaW9uIDwgOS4xKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlLnJlcGxhY2UoL2ZpbHRlclxcKC9nLCBjc3NQcmVmaXggKyAnZmlsdGVyKCcpLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4O1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IHtcbiAgZmxleDogdHJ1ZSxcbiAgJ2lubGluZS1mbGV4JzogdHJ1ZVxufTtcbmZ1bmN0aW9uIGZsZXgocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzW3ZhbHVlXSAmJiAoYnJvd3Nlck5hbWUgPT09ICdjaHJvbWUnICYmIGJyb3dzZXJWZXJzaW9uIDwgMjkgJiYgYnJvd3NlclZlcnNpb24gPiAyMCB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDwgOSAmJiBicm93c2VyVmVyc2lvbiA+IDYgfHwgYnJvd3Nlck5hbWUgPT09ICdvcGVyYScgJiYgKGJyb3dzZXJWZXJzaW9uID09PSAxNSB8fCBicm93c2VyVmVyc2lvbiA9PT0gMTYpKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZScsXG4gIGZsZXg6ICdib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWJveCdcbn07XG5cblxudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnV2Via2l0Qm94UGFjaycsXG4gIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG59O1xuXG52YXIgb3RoZXJQcm9wcyA9IFsnYWxpZ25Db250ZW50JywgJ2FsaWduU2VsZicsICdvcmRlcicsICdmbGV4R3JvdycsICdmbGV4U2hyaW5rJywgJ2ZsZXhCYXNpcycsICdmbGV4RGlyZWN0aW9uJ107XG52YXIgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGFsdGVybmF0aXZlUHJvcHMpLmNvbmNhdChvdGhlclByb3BzKTtcblxuZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbiA9IF9yZWYuYnJvd3NlclZlcnNpb24sXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZCxcbiAgICAgIHJlcXVpcmVzUHJlZml4ID0gX3JlZi5yZXF1aXJlc1ByZWZpeDtcblxuICBpZiAoKHByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgPiAtMSB8fCBwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignZmxleCcpID4gLTEpICYmIChicm93c2VyTmFtZSA9PT0gJ2ZpcmVmb3gnICYmIGJyb3dzZXJWZXJzaW9uIDwgMjIgfHwgYnJvd3Nlck5hbWUgPT09ICdjaHJvbWUnICYmIGJyb3dzZXJWZXJzaW9uIDwgMjEgfHwgKGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnKSAmJiBicm93c2VyVmVyc2lvbiA8PSA2LjEgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRyb2lkJyAmJiBicm93c2VyVmVyc2lvbiA8IDQuNCB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZF91YycpKSB7XG4gICAgZGVsZXRlIHJlcXVpcmVzUHJlZml4W3Byb3BlcnR5XTtcblxuICAgIGlmICgha2VlcFVucHJlZml4ZWQgJiYgIUFycmF5LmlzQXJyYXkoc3R5bGVbcHJvcGVydHldKSkge1xuICAgICAgZGVsZXRlIHN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgaWYgKHByb3BlcnR5ID09PSAnZmxleERpcmVjdGlvbicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEpIHtcbiAgICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLldlYmtpdEJveE9yaWVudCA9ICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSkge1xuICAgICAgICBzdHlsZS5XZWJraXRCb3hEaXJlY3Rpb24gPSAncmV2ZXJzZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5XZWJraXRCb3hEaXJlY3Rpb24gPSAnbm9ybWFsJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgYWx0ZXJuYXRpdmVWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0sIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgc3R5bGVbYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV1dID0gYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcbmZ1bmN0aW9uIGdyYWRpZW50KHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlcy50ZXN0KHZhbHVlKSAmJiAoYnJvd3Nlck5hbWUgPT09ICdmaXJlZm94JyAmJiBicm93c2VyVmVyc2lvbiA8IDE2IHx8IGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyAmJiBicm93c2VyVmVyc2lvbiA8IDI2IHx8IChicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgfHwgYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJykgJiYgYnJvd3NlclZlcnNpb24gPCA3IHx8IChicm93c2VyTmFtZSA9PT0gJ29wZXJhJyB8fCBicm93c2VyTmFtZSA9PT0gJ29wX21pbmknKSAmJiBicm93c2VyVmVyc2lvbiA8IDEyLjEgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRyb2lkJyAmJiBicm93c2VyVmVyc2lvbiA8IDQuNCB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZF91YycpKSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzUHJlZml4ICsgdmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGltYWdlU2V0O1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaW1hZ2VTZXQocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignaW1hZ2Utc2V0KCcpID4gLTEgJiYgKGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyB8fCBicm93c2VyTmFtZSA9PT0gJ29wZXJhJyB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZF9jaHInIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnIHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJykpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZS5yZXBsYWNlKC9pbWFnZS1zZXRcXCgvZywgY3NzUHJlZml4ICsgJ2ltYWdlLXNldCgnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ3Bvc2l0aW9uJyAmJiB2YWx1ZSA9PT0gJ3N0aWNreScgJiYgKGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaXppbmc7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG5cbnZhciB2YWx1ZXMgPSB7XG4gICdtaW4tY29udGVudCc6IHRydWUsXG4gICdtYXgtY29udGVudCc6IHRydWUsXG4gICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICdmaXQtY29udGVudCc6IHRydWUsXG4gICdjb250YWluLWZsb2F0cyc6IHRydWVcbn07XG5cbi8vIFRPRE86IGNocm9tZSAmIG9wZXJhIHN1cHBvcnQgaXRcbmZ1bmN0aW9uIHNpemluZyhwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICAvLyBUaGlzIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlXG4gIC8vIEtlZXAgYW4gZXllIG9uIGl0XG4gIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzUHJlZml4ICsgdmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eScpO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IHRydWUsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uOiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cbnZhciByZXF1aXJlc1ByZWZpeERhc2hDYXNlZCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZCxcbiAgICAgIHJlcXVpcmVzUHJlZml4ID0gX3JlZi5yZXF1aXJlc1ByZWZpeDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gbWVtb2l6ZSB0aGUgcHJlZml4IGFycmF5IGZvciBsYXRlciB1c2VcbiAgICAgIGlmICghcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQpIHtcbiAgICAgICAgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQgPSBPYmplY3Qua2V5cyhyZXF1aXJlc1ByZWZpeCkubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfaHlwaGVuYXRlUHJvcGVydHkyLmRlZmF1bHQpKHByb3ApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gICAgICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAgICAgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKHZhbC5pbmRleE9mKHByb3ApID4gLTEgJiYgcHJvcCAhPT0gJ29yZGVyJykge1xuICAgICAgICAgICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gdmFsLnJlcGxhY2UocHJvcCwgY3NzUHJlZml4ICsgcHJvcCkgKyAoa2VlcFVucHJlZml4ZWQgPyAnLCcgKyB2YWwgOiAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJylcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcmVmaXhlcjtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByZWZpeFByb3BlcnR5Jyk7XG5cbnZhciBfcHJlZml4UHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcGVydHkpO1xuXG52YXIgX3ByZWZpeFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4VmFsdWUnKTtcblxudmFyIF9wcmVmaXhWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhWYWx1ZSk7XG5cbnZhciBfYWRkTmV3VmFsdWVzT25seSA9IHJlcXVpcmUoJy4uL3V0aWxzL2FkZE5ld1ZhbHVlc09ubHknKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZE5ld1ZhbHVlc09ubHkpO1xuXG52YXIgX2lzT2JqZWN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNPYmplY3QnKTtcblxudmFyIF9pc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc09iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZWZpeGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeE1hcCA9IF9yZWYucHJlZml4TWFwLFxuICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucztcblxuICBmdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAvLyBoYW5kbGUgbmVzdGVkIG9iamVjdHNcbiAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICAgICAgLy8gaGFuZGxlIGFycmF5IHZhbHVlc1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZVtpXSwgc3R5bGUsIHByZWZpeE1hcCk7XG4gICAgICAgICAgKDAsIF9hZGROZXdWYWx1ZXNPbmx5Mi5kZWZhdWx0KShjb21iaW5lZFZhbHVlLCBwcm9jZXNzZWRWYWx1ZSB8fCB2YWx1ZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgd2FzIHRvdWNoZWRcbiAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gY29tYmluZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByZWZpeE1hcCk7XG5cbiAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgIC8vIGJ5IGFueSBwbHVnaW4gdG8gcHJldmVudCB1bm5lY2Vzc2FyeSBtdXRhdGlvbnNcbiAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IF9wcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICgwLCBfcHJlZml4UHJvcGVydHkyLmRlZmF1bHQpKHByZWZpeE1hcCwgcHJvcGVydHksIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4gcHJlZml4QWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZVByZWZpeGVyID0gcmVxdWlyZSgnLi9jcmVhdGVQcmVmaXhlcicpO1xuXG52YXIgX2NyZWF0ZVByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByZWZpeGVyKTtcblxudmFyIF9zdGF0aWNEYXRhID0gcmVxdWlyZSgnLi9zdGF0aWNEYXRhJyk7XG5cbnZhciBfc3RhdGljRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0aWNEYXRhKTtcblxudmFyIF9jdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Vyc29yJyk7XG5cbnZhciBfY3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnNvcik7XG5cbnZhciBfY3Jvc3NGYWRlID0gcmVxdWlyZSgnLi9wbHVnaW5zL2Nyb3NzRmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUpO1xuXG52YXIgX2ZpbHRlciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9maWx0ZXInKTtcblxudmFyIF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmlsdGVyKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX2ZsZXhib3hPbGQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveE9sZCcpO1xuXG52YXIgX2ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveE9sZCk7XG5cbnZhciBfZ3JhZGllbnQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZ3JhZGllbnQnKTtcblxudmFyIF9ncmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFkaWVudCk7XG5cbnZhciBfaW1hZ2VTZXQgPSByZXF1aXJlKCcuL3BsdWdpbnMvaW1hZ2VTZXQnKTtcblxudmFyIF9pbWFnZVNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbWFnZVNldCk7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvcG9zaXRpb24nKTtcblxudmFyIF9wb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbik7XG5cbnZhciBfc2l6aW5nID0gcmVxdWlyZSgnLi9wbHVnaW5zL3NpemluZycpO1xuXG52YXIgX3NpemluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaXppbmcpO1xuXG52YXIgX3RyYW5zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvdHJhbnNpdGlvbicpO1xuXG52YXIgX3RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwbHVnaW5zID0gW19jcm9zc0ZhZGUyLmRlZmF1bHQsIF9jdXJzb3IyLmRlZmF1bHQsIF9maWx0ZXIyLmRlZmF1bHQsIF9mbGV4Ym94T2xkMi5kZWZhdWx0LCBfZ3JhZGllbnQyLmRlZmF1bHQsIF9pbWFnZVNldDIuZGVmYXVsdCwgX3Bvc2l0aW9uMi5kZWZhdWx0LCBfc2l6aW5nMi5kZWZhdWx0LCBfdHJhbnNpdGlvbjIuZGVmYXVsdCwgX2ZsZXgyLmRlZmF1bHRdO1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVByZWZpeGVyMi5kZWZhdWx0KSh7XG4gIHByZWZpeE1hcDogX3N0YXRpY0RhdGEyLmRlZmF1bHQucHJlZml4TWFwLFxuICBwbHVnaW5zOiBwbHVnaW5zXG59KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyb3NzRmFkZTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jcm9zcy1mYWRlXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJyddO1xuZnVuY3Rpb24gY3Jvc3NGYWRlKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjcm9zcy1mYWRlKCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jcm9zcy1mYWRlXFwoL2csIHByZWZpeCArICdjcm9zcy1mYWRlKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJzb3I7XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJyddO1xuXG52YXIgdmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWUsXG4gIGdyYWI6IHRydWUsXG4gIGdyYWJiaW5nOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaWx0ZXI7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy1maWx0ZXItZnVuY3Rpb25cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBmaWx0ZXIocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2ZpbHRlcignKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvZmlsdGVyXFwoL2csIHByZWZpeCArICdmaWx0ZXIoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXg7XG52YXIgdmFsdWVzID0ge1xuICBmbGV4OiB0cnVlLFxuICAnaW5saW5lLWZsZXgnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWUsIHZhbHVlXTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveE9sZDtcbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICB3cmFwOiAnbXVsdGlwbGUnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcydcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQocHJvcGVydHksIHZhbHVlLCBzdHlsZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEpIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveE9yaWVudCA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveE9yaWVudCA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xKSB7XG4gICAgICBzdHlsZS5XZWJraXRCb3hEaXJlY3Rpb24gPSAncmV2ZXJzZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdub3JtYWwnO1xuICAgIH1cbiAgfVxuICBpZiAoYWx0ZXJuYXRpdmVQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICBzdHlsZVthbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XV0gPSBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWU7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdyYWRpZW50O1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciB2YWx1ZXMgPSAvbGluZWFyLWdyYWRpZW50fHJhZGlhbC1ncmFkaWVudHxyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50fHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQvO1xuXG5mdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWVzLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGltYWdlU2V0O1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtaW1hZ2Utc2V0XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJyddO1xuZnVuY3Rpb24gaW1hZ2VTZXQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2ltYWdlLXNldCgnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvaW1hZ2Utc2V0XFwoL2csIHByZWZpeCArICdpbWFnZS1zZXQoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBvc2l0aW9uO1xuZnVuY3Rpb24gcG9zaXRpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ3Bvc2l0aW9uJyAmJiB2YWx1ZSA9PT0gJ3N0aWNreScpIHtcbiAgICByZXR1cm4gWyctd2Via2l0LXN0aWNreScsICdzdGlja3knXTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2l6aW5nO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eScpO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVByb3BlcnR5KTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IHRydWUsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uOiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cblxudmFyIHByZWZpeE1hcHBpbmcgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICBtczogJy1tcy0nXG59O1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZSh2YWx1ZSwgcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgaWYgKCgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG11bHRpcGxlVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHNpbmdsZVZhbHVlID0gbXVsdGlwbGVWYWx1ZXNbaV07XG4gICAgdmFyIHZhbHVlcyA9IFtzaW5nbGVWYWx1ZV07XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gKDAsIF9oeXBoZW5hdGVQcm9wZXJ0eTIuZGVmYXVsdCkocHJvcGVydHkpO1xuXG4gICAgICBpZiAoc2luZ2xlVmFsdWUuaW5kZXhPZihkYXNoQ2FzZVByb3BlcnR5KSA+IC0xICYmIGRhc2hDYXNlUHJvcGVydHkgIT09ICdvcmRlcicpIHtcbiAgICAgICAgdmFyIHByZWZpeGVzID0gcHJvcGVydHlQcmVmaXhNYXBbcHJvcGVydHldO1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgcExlbiA9IHByZWZpeGVzLmxlbmd0aDsgaiA8IHBMZW47ICsraikge1xuICAgICAgICAgIC8vIGpvaW4gYWxsIHByZWZpeGVzIGFuZCBjcmVhdGUgYSBuZXcgdmFsdWVcbiAgICAgICAgICB2YWx1ZXMudW5zaGlmdChzaW5nbGVWYWx1ZS5yZXBsYWNlKGRhc2hDYXNlUHJvcGVydHksIHByZWZpeE1hcHBpbmdbcHJlZml4ZXNbal1dICsgZGFzaENhc2VQcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbXVsdGlwbGVWYWx1ZXNbaV0gPSB2YWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgcmV0dXJuIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBwcm9wZXJ0eVByZWZpeE1hcCkge1xuICAvLyBhbHNvIGNoZWNrIGZvciBhbHJlYWR5IHByZWZpeGVkIHRyYW5zaXRpb25zXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgdmFyIG91dHB1dFZhbHVlID0gcHJlZml4VmFsdWUodmFsdWUsIHByb3BlcnR5UHJlZml4TWFwKTtcbiAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVmaXhlZFxuICAgIHZhciB3ZWJraXRPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuICEvLW1vei18LW1zLS8udGVzdCh2YWwpO1xuICAgIH0pLmpvaW4oJywnKTtcblxuICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdXZWJraXQnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gd2Via2l0T3V0cHV0O1xuICAgIH1cblxuICAgIHZhciBtb3pPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuICEvLXdlYmtpdC18LW1zLS8udGVzdCh2YWwpO1xuICAgIH0pLmpvaW4oJywnKTtcblxuICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdNb3onKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbW96T3V0cHV0O1xuICAgIH1cblxuICAgIHN0eWxlWydXZWJraXQnICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gd2Via2l0T3V0cHV0O1xuICAgIHN0eWxlWydNb3onICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gbW96T3V0cHV0O1xuICAgIHJldHVybiBvdXRwdXRWYWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHBsdWdpbnM6IFtdLFxuICBwcmVmaXhNYXA6IHsgXCJhcHBlYXJhbmNlXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJ1c2VyU2VsZWN0XCI6IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RW1waGFzaXNcIjogW1wiV2Via2l0XCJdLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiBbXCJXZWJraXRcIl0sIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IFtcIldlYmtpdFwiXSwgXCJjbGlwUGF0aFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0ltYWdlXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrTW9kZVwiOiBbXCJXZWJraXRcIl0sIFwibWFza1JlcGVhdFwiOiBbXCJXZWJraXRcIl0sIFwibWFza1Bvc2l0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQ2xpcFwiOiBbXCJXZWJraXRcIl0sIFwibWFza09yaWdpblwiOiBbXCJXZWJraXRcIl0sIFwibWFza1NpemVcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tDb21wb3NpdGVcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJNb2RlXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlck91dHNldFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlclJlcGVhdFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlclwiOiBbXCJXZWJraXRcIl0sIFwibWFza1R5cGVcIjogW1wiV2Via2l0XCJdLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogW1wiV2Via2l0XCJdLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiBbXCJXZWJraXRcIl0sIFwidGV4dERlY29yYXRpb25MaW5lXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IFtcIldlYmtpdFwiXSwgXCJmaWx0ZXJcIjogW1wiV2Via2l0XCJdLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogW1wiV2Via2l0XCJdLCBcImJyZWFrQWZ0ZXJcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwiYnJlYWtCZWZvcmVcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwiYnJlYWtJbnNpZGVcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwiY29sdW1uQ291bnRcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtbkZpbGxcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtbkdhcFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uUnVsZVwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uUnVsZUNvbG9yXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtblJ1bGVXaWR0aFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uc1wiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uU3BhblwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uV2lkdGhcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImZsZXhcIjogW1wiV2Via2l0XCJdLCBcImZsZXhCYXNpc1wiOiBbXCJXZWJraXRcIl0sIFwiZmxleERpcmVjdGlvblwiOiBbXCJXZWJraXRcIl0sIFwiZmxleEdyb3dcIjogW1wiV2Via2l0XCJdLCBcImZsZXhGbG93XCI6IFtcIldlYmtpdFwiXSwgXCJmbGV4U2hyaW5rXCI6IFtcIldlYmtpdFwiXSwgXCJmbGV4V3JhcFwiOiBbXCJXZWJraXRcIl0sIFwiYWxpZ25Db250ZW50XCI6IFtcIldlYmtpdFwiXSwgXCJhbGlnbkl0ZW1zXCI6IFtcIldlYmtpdFwiXSwgXCJhbGlnblNlbGZcIjogW1wiV2Via2l0XCJdLCBcImp1c3RpZnlDb250ZW50XCI6IFtcIldlYmtpdFwiXSwgXCJvcmRlclwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNmb3JtXCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogW1wiV2Via2l0XCJdLCBcInRyYW5zZm9ybU9yaWdpblhcIjogW1wiV2Via2l0XCJdLCBcInRyYW5zZm9ybU9yaWdpbllcIjogW1wiV2Via2l0XCJdLCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiBbXCJXZWJraXRcIl0sIFwicGVyc3BlY3RpdmVcIjogW1wiV2Via2l0XCJdLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNmb3JtT3JpZ2luWlwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25EZWxheVwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25OYW1lXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJiYWNrZHJvcEZpbHRlclwiOiBbXCJXZWJraXRcIl0sIFwiZm9udEtlcm5pbmdcIjogW1wiV2Via2l0XCJdLCBcInNjcm9sbFNuYXBUeXBlXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IFtcIldlYmtpdFwiXSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IFtcIldlYmtpdFwiXSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiBbXCJXZWJraXRcIl0sIFwiaHlwaGVuc1wiOiBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXSwgXCJmbG93SW50b1wiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJmbG93RnJvbVwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJyZWdpb25GcmFnbWVudFwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IFtcIk1velwiXSwgXCJ0YWJTaXplXCI6IFtcIk1velwiXSwgXCJ3cmFwRmxvd1wiOiBbXCJtc1wiXSwgXCJ3cmFwVGhyb3VnaFwiOiBbXCJtc1wiXSwgXCJ3cmFwTWFyZ2luXCI6IFtcIm1zXCJdLCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogW1wibXNcIl0sIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiBbXCJtc1wiXSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiBbXCJtc1wiXSwgXCJncmlkVGVtcGxhdGVcIjogW1wibXNcIl0sIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IFtcIm1zXCJdLCBcImdyaWRBdXRvUm93c1wiOiBbXCJtc1wiXSwgXCJncmlkQXV0b0Zsb3dcIjogW1wibXNcIl0sIFwiZ3JpZFwiOiBbXCJtc1wiXSwgXCJncmlkUm93U3RhcnRcIjogW1wibXNcIl0sIFwiZ3JpZENvbHVtblN0YXJ0XCI6IFtcIm1zXCJdLCBcImdyaWRSb3dFbmRcIjogW1wibXNcIl0sIFwiZ3JpZFJvd1wiOiBbXCJtc1wiXSwgXCJncmlkQ29sdW1uXCI6IFtcIm1zXCJdLCBcImdyaWRDb2x1bW5FbmRcIjogW1wibXNcIl0sIFwiZ3JpZENvbHVtbkdhcFwiOiBbXCJtc1wiXSwgXCJncmlkUm93R2FwXCI6IFtcIm1zXCJdLCBcImdyaWRBcmVhXCI6IFtcIm1zXCJdLCBcImdyaWRHYXBcIjogW1wibXNcIl0sIFwidGV4dFNpemVBZGp1c3RcIjogW1wiV2Via2l0XCIsIFwibXNcIl0sIFwidHJhbnNpdGlvbkRlbGF5XCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogW1wiV2Via2l0XCJdLCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFtcIldlYmtpdFwiXSB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZE5ld1ZhbHVlc09ubHk7XG5mdW5jdGlvbiBhZGRJZk5ldyhsaXN0LCB2YWx1ZSkge1xuICBpZiAobGlzdC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBsaXN0LnB1c2godmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1ZhbHVlc09ubHkobGlzdCwgdmFsdWVzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBhZGRJZk5ldyhsaXN0LCB2YWx1ZXNbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhZGRJZk5ldyhsaXN0LCB2YWx1ZXMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FwaXRhbGl6ZVN0cmluZztcbmZ1bmN0aW9uIGNhcGl0YWxpemVTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEJyb3dzZXJJbmZvcm1hdGlvbjtcblxudmFyIF9ib3dzZXIgPSByZXF1aXJlKCdib3dzZXInKTtcblxudmFyIF9ib3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm93c2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByZWZpeEJ5QnJvd3NlciA9IHtcbiAgY2hyb21lOiAnV2Via2l0JyxcbiAgc2FmYXJpOiAnV2Via2l0JyxcbiAgaW9zOiAnV2Via2l0JyxcbiAgYW5kcm9pZDogJ1dlYmtpdCcsXG4gIHBoYW50b206ICdXZWJraXQnLFxuICBvcGVyYTogJ1dlYmtpdCcsXG4gIHdlYm9zOiAnV2Via2l0JyxcbiAgYmxhY2tiZXJyeTogJ1dlYmtpdCcsXG4gIGJhZGE6ICdXZWJraXQnLFxuICB0aXplbjogJ1dlYmtpdCcsXG4gIGNocm9taXVtOiAnV2Via2l0JyxcbiAgdml2YWxkaTogJ1dlYmtpdCcsXG4gIGZpcmVmb3g6ICdNb3onLFxuICBzZWFtb25leTogJ01veicsXG4gIHNhaWxmaXNoOiAnTW96JyxcbiAgbXNpZTogJ21zJyxcbiAgbXNlZGdlOiAnbXMnXG59O1xuXG5cbnZhciBicm93c2VyQnlDYW5JdXNlQWxpYXMgPSB7XG4gIGNocm9tZTogJ2Nocm9tZScsXG4gIGNocm9taXVtOiAnY2hyb21lJyxcbiAgc2FmYXJpOiAnc2FmYXJpJyxcbiAgZmlyZm94OiAnZmlyZWZveCcsXG4gIG1zZWRnZTogJ2VkZ2UnLFxuICBvcGVyYTogJ29wZXJhJyxcbiAgdml2YWxkaTogJ29wZXJhJyxcbiAgbXNpZTogJ2llJ1xufTtcblxuZnVuY3Rpb24gZ2V0QnJvd3Nlck5hbWUoYnJvd3NlckluZm8pIHtcbiAgaWYgKGJyb3dzZXJJbmZvLmZpcmVmb3gpIHtcbiAgICByZXR1cm4gJ2ZpcmVmb3gnO1xuICB9XG5cbiAgaWYgKGJyb3dzZXJJbmZvLm1vYmlsZSB8fCBicm93c2VySW5mby50YWJsZXQpIHtcbiAgICBpZiAoYnJvd3NlckluZm8uaW9zKSB7XG4gICAgICByZXR1cm4gJ2lvc19zYWYnO1xuICAgIH0gZWxzZSBpZiAoYnJvd3NlckluZm8uYW5kcm9pZCkge1xuICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICB9IGVsc2UgaWYgKGJyb3dzZXJJbmZvLm9wZXJhKSB7XG4gICAgICByZXR1cm4gJ29wX21pbmknO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGJyb3dzZXIgaW4gYnJvd3NlckJ5Q2FuSXVzZUFsaWFzKSB7XG4gICAgaWYgKGJyb3dzZXJJbmZvLmhhc093blByb3BlcnR5KGJyb3dzZXIpKSB7XG4gICAgICByZXR1cm4gYnJvd3NlckJ5Q2FuSXVzZUFsaWFzW2Jyb3dzZXJdO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFVzZXMgYm93c2VyIHRvIGdldCBkZWZhdWx0IGJyb3dzZXIgYnJvd3NlckluZm9ybWF0aW9uIHN1Y2ggYXMgdmVyc2lvbiBhbmQgbmFtZVxuICogRXZhbHVhdGVzIGJvd3NlciBicm93c2VySW5mbyBhbmQgYWRkcyB2ZW5kb3JQcmVmaXggYnJvd3NlckluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IC0gdXNlckFnZW50IHRoYXQgZ2V0cyBldmFsdWF0ZWRcbiAqL1xuZnVuY3Rpb24gZ2V0QnJvd3NlckluZm9ybWF0aW9uKHVzZXJBZ2VudCkge1xuICB2YXIgYnJvd3NlckluZm8gPSBfYm93c2VyMi5kZWZhdWx0Ll9kZXRlY3QodXNlckFnZW50KTtcblxuICBmb3IgKHZhciBicm93c2VyIGluIHByZWZpeEJ5QnJvd3Nlcikge1xuICAgIGlmIChicm93c2VySW5mby5oYXNPd25Qcm9wZXJ0eShicm93c2VyKSkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeEJ5QnJvd3Nlclticm93c2VyXTtcblxuICAgICAgYnJvd3NlckluZm8uanNQcmVmaXggPSBwcmVmaXg7XG4gICAgICBicm93c2VySW5mby5jc3NQcmVmaXggPSAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID0gZ2V0QnJvd3Nlck5hbWUoYnJvd3NlckluZm8pO1xuXG4gIC8vIEZvciBjb3Jkb3ZhIElPUyA4IHRoZSB2ZXJzaW9uIGlzIG1pc3NpbmcsIHNldCB0cnVuY2F0ZWQgb3N2ZXJzaW9uIHRvIHByZXZlbnQgTmFOXG4gIGlmIChicm93c2VySW5mby52ZXJzaW9uKSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3NlclZlcnNpb24gPSBwYXJzZUZsb2F0KGJyb3dzZXJJbmZvLnZlcnNpb24pO1xuICB9IGVsc2Uge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gcGFyc2VJbnQocGFyc2VGbG9hdChicm93c2VySW5mby5vc3ZlcnNpb24pLCAxMCk7XG4gIH1cblxuICBicm93c2VySW5mby5vc1ZlcnNpb24gPSBwYXJzZUZsb2F0KGJyb3dzZXJJbmZvLm9zdmVyc2lvbik7XG5cbiAgLy8gaU9TIGZvcmNlcyBhbGwgYnJvd3NlcnMgdG8gdXNlIFNhZmFyaSB1bmRlciB0aGUgaG9vZFxuICAvLyBhcyB0aGUgU2FmYXJpIHZlcnNpb24gc2VlbXMgdG8gbWF0Y2ggdGhlIGlPUyB2ZXJzaW9uXG4gIC8vIHdlIGp1c3QgZXhwbGljaXRlbHkgdXNlIHRoZSBvc3ZlcnNpb24gaW5zdGVhZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNzJcbiAgaWYgKGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicgJiYgYnJvd3NlckluZm8uYnJvd3NlclZlcnNpb24gPiBicm93c2VySW5mby5vc1ZlcnNpb24pIHtcbiAgICBicm93c2VySW5mby5icm93c2VyVmVyc2lvbiA9IGJyb3dzZXJJbmZvLm9zVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHNlcGVyYXRlIG5hdGl2ZSBhbmRyb2lkIGNocm9tZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNDVcbiAgaWYgKGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlckluZm8uY2hyb21lICYmIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID4gMzcpIHtcbiAgICBicm93c2VySW5mby5icm93c2VyTmFtZSA9ICdhbmRfY2hyJztcbiAgfVxuXG4gIC8vIEZvciBhbmRyb2lkIDwgNC40IHdlIHdhbnQgdG8gY2hlY2sgdGhlIG9zdmVyc2lvblxuICAvLyBub3QgdGhlIGNocm9tZSB2ZXJzaW9uLCBzZWUgaXNzdWUgIzI2XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy8yNlxuICBpZiAoYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgPT09ICdhbmRyb2lkJyAmJiBicm93c2VySW5mby5vc1ZlcnNpb24gPCA1KSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3NlclZlcnNpb24gPSBicm93c2VySW5mby5vc1ZlcnNpb247XG4gIH1cblxuICAvLyBTYW1zdW5nIGJyb3dzZXIgYXJlIGJhc2ljYWxseSBidWlsZCBvbiBDaHJvbWUgPiA0NFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvMTAyXG4gIGlmIChicm93c2VySW5mby5icm93c2VyTmFtZSA9PT0gJ2FuZHJvaWQnICYmIGJyb3dzZXJJbmZvLnNhbXN1bmdCcm93c2VyKSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgPSAnYW5kX2Nocic7XG4gICAgYnJvd3NlckluZm8uYnJvd3NlclZlcnNpb24gPSA0NDtcbiAgfVxuXG4gIHJldHVybiBicm93c2VySW5mbztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFByZWZpeGVkS2V5ZnJhbWVzO1xuZnVuY3Rpb24gZ2V0UHJlZml4ZWRLZXlmcmFtZXMoYnJvd3Nlck5hbWUsIGJyb3dzZXJWZXJzaW9uLCBjc3NQcmVmaXgpIHtcbiAgdmFyIHByZWZpeGVkS2V5ZnJhbWVzID0gJ2tleWZyYW1lcyc7XG5cbiAgaWYgKGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyAmJiBicm93c2VyVmVyc2lvbiA8IDQzIHx8IChicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgfHwgYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJykgJiYgYnJvd3NlclZlcnNpb24gPCA5IHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnICYmIGJyb3dzZXJWZXJzaW9uIDwgMzAgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRyb2lkJyAmJiBicm93c2VyVmVyc2lvbiA8PSA0LjQgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRfdWMnKSB7XG4gICAgcmV0dXJuIGNzc1ByZWZpeCArIHByZWZpeGVkS2V5ZnJhbWVzO1xuICB9XG4gIHJldHVybiBwcmVmaXhlZEtleWZyYW1lcztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0UHJlZml4ZWRWYWx1ZTtcbmZ1bmN0aW9uIGdldFByZWZpeGVkVmFsdWUocHJlZml4ZWRWYWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKSB7XG4gIGlmIChrZWVwVW5wcmVmaXhlZCkge1xuICAgIHJldHVybiBbcHJlZml4ZWRWYWx1ZSwgdmFsdWVdO1xuICB9XG4gIHJldHVybiBwcmVmaXhlZFZhbHVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzT2JqZWN0O1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4UHJvcGVydHk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4vY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHByZWZpeFByb3BlcnR5KHByZWZpeFByb3BlcnRpZXMsIHByb3BlcnR5LCBzdHlsZSkge1xuICBpZiAocHJlZml4UHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICB2YXIgcmVxdWlyZWRQcmVmaXhlcyA9IHByZWZpeFByb3BlcnRpZXNbcHJvcGVydHldO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByZXF1aXJlZFByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBzdHlsZVtyZXF1aXJlZFByZWZpeGVzW2ldICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gc3R5bGVbcHJvcGVydHldO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVmaXhWYWx1ZTtcbmZ1bmN0aW9uIHByZWZpeFZhbHVlKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIG1ldGFEYXRhKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gcGx1Z2luc1tpXShwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBtZXRhRGF0YSk7XG5cbiAgICAvLyB3ZSBjYW4gc3RvcCBwcm9jZXNzaW5nIGlmIGEgdmFsdWUgaXMgcmV0dXJuZWRcbiAgICAvLyBhcyBhbGwgcGx1Z2luIGNyaXRlcmlhIGFyZSB1bmlxdWVcbiAgICBpZiAocHJvY2Vzc2VkVmFsdWUpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzZWRWYWx1ZTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ1JlYWN0LlByb3BUeXBlcy4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUpO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgZnVuY3Rpb24gc2hpbSgpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLy8gR0VORVJBVEVEIERPIE5PVCBFRElUXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgXCJhbGlnbkNvbnRlbnRcIixcbiAgXCJNb3pBbGlnbkNvbnRlbnRcIixcbiAgXCJXZWJraXRBbGlnbkNvbnRlbnRcIixcbiAgXCJNU0FsaWduQ29udGVudFwiLFxuICBcIk9BbGlnbkNvbnRlbnRcIixcbiAgXCJhbGlnbkl0ZW1zXCIsXG4gIFwiTW96QWxpZ25JdGVtc1wiLFxuICBcIldlYmtpdEFsaWduSXRlbXNcIixcbiAgXCJNU0FsaWduSXRlbXNcIixcbiAgXCJPQWxpZ25JdGVtc1wiLFxuICBcImFsaWduU2VsZlwiLFxuICBcIk1vekFsaWduU2VsZlwiLFxuICBcIldlYmtpdEFsaWduU2VsZlwiLFxuICBcIk1TQWxpZ25TZWxmXCIsXG4gIFwiT0FsaWduU2VsZlwiLFxuICBcImFsbFwiLFxuICBcIk1vekFsbFwiLFxuICBcIldlYmtpdEFsbFwiLFxuICBcIk1TQWxsXCIsXG4gIFwiT0FsbFwiLFxuICBcImFuaW1hdGlvblwiLFxuICBcIk1vekFuaW1hdGlvblwiLFxuICBcIldlYmtpdEFuaW1hdGlvblwiLFxuICBcIk1TQW5pbWF0aW9uXCIsXG4gIFwiT0FuaW1hdGlvblwiLFxuICBcImFuaW1hdGlvbkRlbGF5XCIsXG4gIFwiTW96QW5pbWF0aW9uRGVsYXlcIixcbiAgXCJXZWJraXRBbmltYXRpb25EZWxheVwiLFxuICBcIk1TQW5pbWF0aW9uRGVsYXlcIixcbiAgXCJPQW5pbWF0aW9uRGVsYXlcIixcbiAgXCJhbmltYXRpb25EaXJlY3Rpb25cIixcbiAgXCJNb3pBbmltYXRpb25EaXJlY3Rpb25cIixcbiAgXCJXZWJraXRBbmltYXRpb25EaXJlY3Rpb25cIixcbiAgXCJNU0FuaW1hdGlvbkRpcmVjdGlvblwiLFxuICBcIk9BbmltYXRpb25EaXJlY3Rpb25cIixcbiAgXCJhbmltYXRpb25EdXJhdGlvblwiLFxuICBcIk1vekFuaW1hdGlvbkR1cmF0aW9uXCIsXG4gIFwiV2Via2l0QW5pbWF0aW9uRHVyYXRpb25cIixcbiAgXCJNU0FuaW1hdGlvbkR1cmF0aW9uXCIsXG4gIFwiT0FuaW1hdGlvbkR1cmF0aW9uXCIsXG4gIFwiYW5pbWF0aW9uRmlsbE1vZGVcIixcbiAgXCJNb3pBbmltYXRpb25GaWxsTW9kZVwiLFxuICBcIldlYmtpdEFuaW1hdGlvbkZpbGxNb2RlXCIsXG4gIFwiTVNBbmltYXRpb25GaWxsTW9kZVwiLFxuICBcIk9BbmltYXRpb25GaWxsTW9kZVwiLFxuICBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCIsXG4gIFwiTW96QW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIixcbiAgXCJXZWJraXRBbmltYXRpb25JdGVyYXRpb25Db3VudFwiLFxuICBcIk1TQW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIixcbiAgXCJPQW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIixcbiAgXCJhbmltYXRpb25OYW1lXCIsXG4gIFwiTW96QW5pbWF0aW9uTmFtZVwiLFxuICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIixcbiAgXCJNU0FuaW1hdGlvbk5hbWVcIixcbiAgXCJPQW5pbWF0aW9uTmFtZVwiLFxuICBcImFuaW1hdGlvblBsYXlTdGF0ZVwiLFxuICBcIk1vekFuaW1hdGlvblBsYXlTdGF0ZVwiLFxuICBcIldlYmtpdEFuaW1hdGlvblBsYXlTdGF0ZVwiLFxuICBcIk1TQW5pbWF0aW9uUGxheVN0YXRlXCIsXG4gIFwiT0FuaW1hdGlvblBsYXlTdGF0ZVwiLFxuICBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiTW96QW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJXZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvblwiLFxuICBcIk1TQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJPQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJiYWNrZmFjZVZpc2liaWxpdHlcIixcbiAgXCJNb3pCYWNrZmFjZVZpc2liaWxpdHlcIixcbiAgXCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHlcIixcbiAgXCJNU0JhY2tmYWNlVmlzaWJpbGl0eVwiLFxuICBcIk9CYWNrZmFjZVZpc2liaWxpdHlcIixcbiAgXCJiYWNrZ3JvdW5kXCIsXG4gIFwiTW96QmFja2dyb3VuZFwiLFxuICBcIldlYmtpdEJhY2tncm91bmRcIixcbiAgXCJNU0JhY2tncm91bmRcIixcbiAgXCJPQmFja2dyb3VuZFwiLFxuICBcImJhY2tncm91bmRBdHRhY2htZW50XCIsXG4gIFwiTW96QmFja2dyb3VuZEF0dGFjaG1lbnRcIixcbiAgXCJXZWJraXRCYWNrZ3JvdW5kQXR0YWNobWVudFwiLFxuICBcIk1TQmFja2dyb3VuZEF0dGFjaG1lbnRcIixcbiAgXCJPQmFja2dyb3VuZEF0dGFjaG1lbnRcIixcbiAgXCJiYWNrZ3JvdW5kQmxlbmRNb2RlXCIsXG4gIFwiTW96QmFja2dyb3VuZEJsZW5kTW9kZVwiLFxuICBcIldlYmtpdEJhY2tncm91bmRCbGVuZE1vZGVcIixcbiAgXCJNU0JhY2tncm91bmRCbGVuZE1vZGVcIixcbiAgXCJPQmFja2dyb3VuZEJsZW5kTW9kZVwiLFxuICBcImJhY2tncm91bmRDbGlwXCIsXG4gIFwiTW96QmFja2dyb3VuZENsaXBcIixcbiAgXCJXZWJraXRCYWNrZ3JvdW5kQ2xpcFwiLFxuICBcIk1TQmFja2dyb3VuZENsaXBcIixcbiAgXCJPQmFja2dyb3VuZENsaXBcIixcbiAgXCJiYWNrZ3JvdW5kQ29sb3JcIixcbiAgXCJNb3pCYWNrZ3JvdW5kQ29sb3JcIixcbiAgXCJXZWJraXRCYWNrZ3JvdW5kQ29sb3JcIixcbiAgXCJNU0JhY2tncm91bmRDb2xvclwiLFxuICBcIk9CYWNrZ3JvdW5kQ29sb3JcIixcbiAgXCJiYWNrZ3JvdW5kSW1hZ2VcIixcbiAgXCJNb3pCYWNrZ3JvdW5kSW1hZ2VcIixcbiAgXCJXZWJraXRCYWNrZ3JvdW5kSW1hZ2VcIixcbiAgXCJNU0JhY2tncm91bmRJbWFnZVwiLFxuICBcIk9CYWNrZ3JvdW5kSW1hZ2VcIixcbiAgXCJiYWNrZ3JvdW5kT3JpZ2luXCIsXG4gIFwiTW96QmFja2dyb3VuZE9yaWdpblwiLFxuICBcIldlYmtpdEJhY2tncm91bmRPcmlnaW5cIixcbiAgXCJNU0JhY2tncm91bmRPcmlnaW5cIixcbiAgXCJPQmFja2dyb3VuZE9yaWdpblwiLFxuICBcImJhY2tncm91bmRQb3NpdGlvblwiLFxuICBcIk1vekJhY2tncm91bmRQb3NpdGlvblwiLFxuICBcIldlYmtpdEJhY2tncm91bmRQb3NpdGlvblwiLFxuICBcIk1TQmFja2dyb3VuZFBvc2l0aW9uXCIsXG4gIFwiT0JhY2tncm91bmRQb3NpdGlvblwiLFxuICBcImJhY2tncm91bmRSZXBlYXRcIixcbiAgXCJNb3pCYWNrZ3JvdW5kUmVwZWF0XCIsXG4gIFwiV2Via2l0QmFja2dyb3VuZFJlcGVhdFwiLFxuICBcIk1TQmFja2dyb3VuZFJlcGVhdFwiLFxuICBcIk9CYWNrZ3JvdW5kUmVwZWF0XCIsXG4gIFwiYmFja2dyb3VuZFNpemVcIixcbiAgXCJNb3pCYWNrZ3JvdW5kU2l6ZVwiLFxuICBcIldlYmtpdEJhY2tncm91bmRTaXplXCIsXG4gIFwiTVNCYWNrZ3JvdW5kU2l6ZVwiLFxuICBcIk9CYWNrZ3JvdW5kU2l6ZVwiLFxuICBcImJsb2NrU2l6ZVwiLFxuICBcIk1vekJsb2NrU2l6ZVwiLFxuICBcIldlYmtpdEJsb2NrU2l6ZVwiLFxuICBcIk1TQmxvY2tTaXplXCIsXG4gIFwiT0Jsb2NrU2l6ZVwiLFxuICBcImJvcmRlclwiLFxuICBcIk1vekJvcmRlclwiLFxuICBcIldlYmtpdEJvcmRlclwiLFxuICBcIk1TQm9yZGVyXCIsXG4gIFwiT0JvcmRlclwiLFxuICBcImJvcmRlckJsb2NrRW5kXCIsXG4gIFwiTW96Qm9yZGVyQmxvY2tFbmRcIixcbiAgXCJXZWJraXRCb3JkZXJCbG9ja0VuZFwiLFxuICBcIk1TQm9yZGVyQmxvY2tFbmRcIixcbiAgXCJPQm9yZGVyQmxvY2tFbmRcIixcbiAgXCJib3JkZXJCbG9ja0VuZENvbG9yXCIsXG4gIFwiTW96Qm9yZGVyQmxvY2tFbmRDb2xvclwiLFxuICBcIldlYmtpdEJvcmRlckJsb2NrRW5kQ29sb3JcIixcbiAgXCJNU0JvcmRlckJsb2NrRW5kQ29sb3JcIixcbiAgXCJPQm9yZGVyQmxvY2tFbmRDb2xvclwiLFxuICBcImJvcmRlckJsb2NrRW5kU3R5bGVcIixcbiAgXCJNb3pCb3JkZXJCbG9ja0VuZFN0eWxlXCIsXG4gIFwiV2Via2l0Qm9yZGVyQmxvY2tFbmRTdHlsZVwiLFxuICBcIk1TQm9yZGVyQmxvY2tFbmRTdHlsZVwiLFxuICBcIk9Cb3JkZXJCbG9ja0VuZFN0eWxlXCIsXG4gIFwiYm9yZGVyQmxvY2tFbmRXaWR0aFwiLFxuICBcIk1vekJvcmRlckJsb2NrRW5kV2lkdGhcIixcbiAgXCJXZWJraXRCb3JkZXJCbG9ja0VuZFdpZHRoXCIsXG4gIFwiTVNCb3JkZXJCbG9ja0VuZFdpZHRoXCIsXG4gIFwiT0JvcmRlckJsb2NrRW5kV2lkdGhcIixcbiAgXCJib3JkZXJCbG9ja1N0YXJ0XCIsXG4gIFwiTW96Qm9yZGVyQmxvY2tTdGFydFwiLFxuICBcIldlYmtpdEJvcmRlckJsb2NrU3RhcnRcIixcbiAgXCJNU0JvcmRlckJsb2NrU3RhcnRcIixcbiAgXCJPQm9yZGVyQmxvY2tTdGFydFwiLFxuICBcImJvcmRlckJsb2NrU3RhcnRDb2xvclwiLFxuICBcIk1vekJvcmRlckJsb2NrU3RhcnRDb2xvclwiLFxuICBcIldlYmtpdEJvcmRlckJsb2NrU3RhcnRDb2xvclwiLFxuICBcIk1TQm9yZGVyQmxvY2tTdGFydENvbG9yXCIsXG4gIFwiT0JvcmRlckJsb2NrU3RhcnRDb2xvclwiLFxuICBcImJvcmRlckJsb2NrU3RhcnRTdHlsZVwiLFxuICBcIk1vekJvcmRlckJsb2NrU3RhcnRTdHlsZVwiLFxuICBcIldlYmtpdEJvcmRlckJsb2NrU3RhcnRTdHlsZVwiLFxuICBcIk1TQm9yZGVyQmxvY2tTdGFydFN0eWxlXCIsXG4gIFwiT0JvcmRlckJsb2NrU3RhcnRTdHlsZVwiLFxuICBcImJvcmRlckJsb2NrU3RhcnRXaWR0aFwiLFxuICBcIk1vekJvcmRlckJsb2NrU3RhcnRXaWR0aFwiLFxuICBcIldlYmtpdEJvcmRlckJsb2NrU3RhcnRXaWR0aFwiLFxuICBcIk1TQm9yZGVyQmxvY2tTdGFydFdpZHRoXCIsXG4gIFwiT0JvcmRlckJsb2NrU3RhcnRXaWR0aFwiLFxuICBcImJvcmRlckJvdHRvbVwiLFxuICBcIk1vekJvcmRlckJvdHRvbVwiLFxuICBcIldlYmtpdEJvcmRlckJvdHRvbVwiLFxuICBcIk1TQm9yZGVyQm90dG9tXCIsXG4gIFwiT0JvcmRlckJvdHRvbVwiLFxuICBcImJvcmRlckJvdHRvbUNvbG9yXCIsXG4gIFwiTW96Qm9yZGVyQm90dG9tQ29sb3JcIixcbiAgXCJXZWJraXRCb3JkZXJCb3R0b21Db2xvclwiLFxuICBcIk1TQm9yZGVyQm90dG9tQ29sb3JcIixcbiAgXCJPQm9yZGVyQm90dG9tQ29sb3JcIixcbiAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCIsXG4gIFwiTW96Qm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiLFxuICBcIldlYmtpdEJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIixcbiAgXCJNU0JvcmRlckJvdHRvbUxlZnRSYWRpdXNcIixcbiAgXCJPQm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiLFxuICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXG4gIFwiTW96Qm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcbiAgXCJXZWJraXRCb3JkZXJCb3R0b21SaWdodFJhZGl1c1wiLFxuICBcIk1TQm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcbiAgXCJPQm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcbiAgXCJib3JkZXJCb3R0b21TdHlsZVwiLFxuICBcIk1vekJvcmRlckJvdHRvbVN0eWxlXCIsXG4gIFwiV2Via2l0Qm9yZGVyQm90dG9tU3R5bGVcIixcbiAgXCJNU0JvcmRlckJvdHRvbVN0eWxlXCIsXG4gIFwiT0JvcmRlckJvdHRvbVN0eWxlXCIsXG4gIFwiYm9yZGVyQm90dG9tV2lkdGhcIixcbiAgXCJNb3pCb3JkZXJCb3R0b21XaWR0aFwiLFxuICBcIldlYmtpdEJvcmRlckJvdHRvbVdpZHRoXCIsXG4gIFwiTVNCb3JkZXJCb3R0b21XaWR0aFwiLFxuICBcIk9Cb3JkZXJCb3R0b21XaWR0aFwiLFxuICBcImJvcmRlckNvbGxhcHNlXCIsXG4gIFwiTW96Qm9yZGVyQ29sbGFwc2VcIixcbiAgXCJXZWJraXRCb3JkZXJDb2xsYXBzZVwiLFxuICBcIk1TQm9yZGVyQ29sbGFwc2VcIixcbiAgXCJPQm9yZGVyQ29sbGFwc2VcIixcbiAgXCJib3JkZXJDb2xvclwiLFxuICBcIk1vekJvcmRlckNvbG9yXCIsXG4gIFwiV2Via2l0Qm9yZGVyQ29sb3JcIixcbiAgXCJNU0JvcmRlckNvbG9yXCIsXG4gIFwiT0JvcmRlckNvbG9yXCIsXG4gIFwiYm9yZGVySW1hZ2VcIixcbiAgXCJNb3pCb3JkZXJJbWFnZVwiLFxuICBcIldlYmtpdEJvcmRlckltYWdlXCIsXG4gIFwiTVNCb3JkZXJJbWFnZVwiLFxuICBcIk9Cb3JkZXJJbWFnZVwiLFxuICBcImJvcmRlckltYWdlT3V0c2V0XCIsXG4gIFwiTW96Qm9yZGVySW1hZ2VPdXRzZXRcIixcbiAgXCJXZWJraXRCb3JkZXJJbWFnZU91dHNldFwiLFxuICBcIk1TQm9yZGVySW1hZ2VPdXRzZXRcIixcbiAgXCJPQm9yZGVySW1hZ2VPdXRzZXRcIixcbiAgXCJib3JkZXJJbWFnZVJlcGVhdFwiLFxuICBcIk1vekJvcmRlckltYWdlUmVwZWF0XCIsXG4gIFwiV2Via2l0Qm9yZGVySW1hZ2VSZXBlYXRcIixcbiAgXCJNU0JvcmRlckltYWdlUmVwZWF0XCIsXG4gIFwiT0JvcmRlckltYWdlUmVwZWF0XCIsXG4gIFwiYm9yZGVySW1hZ2VTbGljZVwiLFxuICBcIk1vekJvcmRlckltYWdlU2xpY2VcIixcbiAgXCJXZWJraXRCb3JkZXJJbWFnZVNsaWNlXCIsXG4gIFwiTVNCb3JkZXJJbWFnZVNsaWNlXCIsXG4gIFwiT0JvcmRlckltYWdlU2xpY2VcIixcbiAgXCJib3JkZXJJbWFnZVNvdXJjZVwiLFxuICBcIk1vekJvcmRlckltYWdlU291cmNlXCIsXG4gIFwiV2Via2l0Qm9yZGVySW1hZ2VTb3VyY2VcIixcbiAgXCJNU0JvcmRlckltYWdlU291cmNlXCIsXG4gIFwiT0JvcmRlckltYWdlU291cmNlXCIsXG4gIFwiYm9yZGVySW1hZ2VXaWR0aFwiLFxuICBcIk1vekJvcmRlckltYWdlV2lkdGhcIixcbiAgXCJXZWJraXRCb3JkZXJJbWFnZVdpZHRoXCIsXG4gIFwiTVNCb3JkZXJJbWFnZVdpZHRoXCIsXG4gIFwiT0JvcmRlckltYWdlV2lkdGhcIixcbiAgXCJib3JkZXJJbmxpbmVFbmRcIixcbiAgXCJNb3pCb3JkZXJJbmxpbmVFbmRcIixcbiAgXCJXZWJraXRCb3JkZXJJbmxpbmVFbmRcIixcbiAgXCJNU0JvcmRlcklubGluZUVuZFwiLFxuICBcIk9Cb3JkZXJJbmxpbmVFbmRcIixcbiAgXCJib3JkZXJJbmxpbmVFbmRDb2xvclwiLFxuICBcIk1vekJvcmRlcklubGluZUVuZENvbG9yXCIsXG4gIFwiV2Via2l0Qm9yZGVySW5saW5lRW5kQ29sb3JcIixcbiAgXCJNU0JvcmRlcklubGluZUVuZENvbG9yXCIsXG4gIFwiT0JvcmRlcklubGluZUVuZENvbG9yXCIsXG4gIFwiYm9yZGVySW5saW5lRW5kU3R5bGVcIixcbiAgXCJNb3pCb3JkZXJJbmxpbmVFbmRTdHlsZVwiLFxuICBcIldlYmtpdEJvcmRlcklubGluZUVuZFN0eWxlXCIsXG4gIFwiTVNCb3JkZXJJbmxpbmVFbmRTdHlsZVwiLFxuICBcIk9Cb3JkZXJJbmxpbmVFbmRTdHlsZVwiLFxuICBcImJvcmRlcklubGluZUVuZFdpZHRoXCIsXG4gIFwiTW96Qm9yZGVySW5saW5lRW5kV2lkdGhcIixcbiAgXCJXZWJraXRCb3JkZXJJbmxpbmVFbmRXaWR0aFwiLFxuICBcIk1TQm9yZGVySW5saW5lRW5kV2lkdGhcIixcbiAgXCJPQm9yZGVySW5saW5lRW5kV2lkdGhcIixcbiAgXCJib3JkZXJJbmxpbmVTdGFydFwiLFxuICBcIk1vekJvcmRlcklubGluZVN0YXJ0XCIsXG4gIFwiV2Via2l0Qm9yZGVySW5saW5lU3RhcnRcIixcbiAgXCJNU0JvcmRlcklubGluZVN0YXJ0XCIsXG4gIFwiT0JvcmRlcklubGluZVN0YXJ0XCIsXG4gIFwiYm9yZGVySW5saW5lU3RhcnRDb2xvclwiLFxuICBcIk1vekJvcmRlcklubGluZVN0YXJ0Q29sb3JcIixcbiAgXCJXZWJraXRCb3JkZXJJbmxpbmVTdGFydENvbG9yXCIsXG4gIFwiTVNCb3JkZXJJbmxpbmVTdGFydENvbG9yXCIsXG4gIFwiT0JvcmRlcklubGluZVN0YXJ0Q29sb3JcIixcbiAgXCJib3JkZXJJbmxpbmVTdGFydFN0eWxlXCIsXG4gIFwiTW96Qm9yZGVySW5saW5lU3RhcnRTdHlsZVwiLFxuICBcIldlYmtpdEJvcmRlcklubGluZVN0YXJ0U3R5bGVcIixcbiAgXCJNU0JvcmRlcklubGluZVN0YXJ0U3R5bGVcIixcbiAgXCJPQm9yZGVySW5saW5lU3RhcnRTdHlsZVwiLFxuICBcImJvcmRlcklubGluZVN0YXJ0V2lkdGhcIixcbiAgXCJNb3pCb3JkZXJJbmxpbmVTdGFydFdpZHRoXCIsXG4gIFwiV2Via2l0Qm9yZGVySW5saW5lU3RhcnRXaWR0aFwiLFxuICBcIk1TQm9yZGVySW5saW5lU3RhcnRXaWR0aFwiLFxuICBcIk9Cb3JkZXJJbmxpbmVTdGFydFdpZHRoXCIsXG4gIFwiYm9yZGVyTGVmdFwiLFxuICBcIk1vekJvcmRlckxlZnRcIixcbiAgXCJXZWJraXRCb3JkZXJMZWZ0XCIsXG4gIFwiTVNCb3JkZXJMZWZ0XCIsXG4gIFwiT0JvcmRlckxlZnRcIixcbiAgXCJib3JkZXJMZWZ0Q29sb3JcIixcbiAgXCJNb3pCb3JkZXJMZWZ0Q29sb3JcIixcbiAgXCJXZWJraXRCb3JkZXJMZWZ0Q29sb3JcIixcbiAgXCJNU0JvcmRlckxlZnRDb2xvclwiLFxuICBcIk9Cb3JkZXJMZWZ0Q29sb3JcIixcbiAgXCJib3JkZXJMZWZ0U3R5bGVcIixcbiAgXCJNb3pCb3JkZXJMZWZ0U3R5bGVcIixcbiAgXCJXZWJraXRCb3JkZXJMZWZ0U3R5bGVcIixcbiAgXCJNU0JvcmRlckxlZnRTdHlsZVwiLFxuICBcIk9Cb3JkZXJMZWZ0U3R5bGVcIixcbiAgXCJib3JkZXJMZWZ0V2lkdGhcIixcbiAgXCJNb3pCb3JkZXJMZWZ0V2lkdGhcIixcbiAgXCJXZWJraXRCb3JkZXJMZWZ0V2lkdGhcIixcbiAgXCJNU0JvcmRlckxlZnRXaWR0aFwiLFxuICBcIk9Cb3JkZXJMZWZ0V2lkdGhcIixcbiAgXCJib3JkZXJSYWRpdXNcIixcbiAgXCJNb3pCb3JkZXJSYWRpdXNcIixcbiAgXCJXZWJraXRCb3JkZXJSYWRpdXNcIixcbiAgXCJNU0JvcmRlclJhZGl1c1wiLFxuICBcIk9Cb3JkZXJSYWRpdXNcIixcbiAgXCJib3JkZXJSaWdodFwiLFxuICBcIk1vekJvcmRlclJpZ2h0XCIsXG4gIFwiV2Via2l0Qm9yZGVyUmlnaHRcIixcbiAgXCJNU0JvcmRlclJpZ2h0XCIsXG4gIFwiT0JvcmRlclJpZ2h0XCIsXG4gIFwiYm9yZGVyUmlnaHRDb2xvclwiLFxuICBcIk1vekJvcmRlclJpZ2h0Q29sb3JcIixcbiAgXCJXZWJraXRCb3JkZXJSaWdodENvbG9yXCIsXG4gIFwiTVNCb3JkZXJSaWdodENvbG9yXCIsXG4gIFwiT0JvcmRlclJpZ2h0Q29sb3JcIixcbiAgXCJib3JkZXJSaWdodFN0eWxlXCIsXG4gIFwiTW96Qm9yZGVyUmlnaHRTdHlsZVwiLFxuICBcIldlYmtpdEJvcmRlclJpZ2h0U3R5bGVcIixcbiAgXCJNU0JvcmRlclJpZ2h0U3R5bGVcIixcbiAgXCJPQm9yZGVyUmlnaHRTdHlsZVwiLFxuICBcImJvcmRlclJpZ2h0V2lkdGhcIixcbiAgXCJNb3pCb3JkZXJSaWdodFdpZHRoXCIsXG4gIFwiV2Via2l0Qm9yZGVyUmlnaHRXaWR0aFwiLFxuICBcIk1TQm9yZGVyUmlnaHRXaWR0aFwiLFxuICBcIk9Cb3JkZXJSaWdodFdpZHRoXCIsXG4gIFwiYm9yZGVyU3BhY2luZ1wiLFxuICBcIk1vekJvcmRlclNwYWNpbmdcIixcbiAgXCJXZWJraXRCb3JkZXJTcGFjaW5nXCIsXG4gIFwiTVNCb3JkZXJTcGFjaW5nXCIsXG4gIFwiT0JvcmRlclNwYWNpbmdcIixcbiAgXCJib3JkZXJTdHlsZVwiLFxuICBcIk1vekJvcmRlclN0eWxlXCIsXG4gIFwiV2Via2l0Qm9yZGVyU3R5bGVcIixcbiAgXCJNU0JvcmRlclN0eWxlXCIsXG4gIFwiT0JvcmRlclN0eWxlXCIsXG4gIFwiYm9yZGVyVG9wXCIsXG4gIFwiTW96Qm9yZGVyVG9wXCIsXG4gIFwiV2Via2l0Qm9yZGVyVG9wXCIsXG4gIFwiTVNCb3JkZXJUb3BcIixcbiAgXCJPQm9yZGVyVG9wXCIsXG4gIFwiYm9yZGVyVG9wQ29sb3JcIixcbiAgXCJNb3pCb3JkZXJUb3BDb2xvclwiLFxuICBcIldlYmtpdEJvcmRlclRvcENvbG9yXCIsXG4gIFwiTVNCb3JkZXJUb3BDb2xvclwiLFxuICBcIk9Cb3JkZXJUb3BDb2xvclwiLFxuICBcImJvcmRlclRvcExlZnRSYWRpdXNcIixcbiAgXCJNb3pCb3JkZXJUb3BMZWZ0UmFkaXVzXCIsXG4gIFwiV2Via2l0Qm9yZGVyVG9wTGVmdFJhZGl1c1wiLFxuICBcIk1TQm9yZGVyVG9wTGVmdFJhZGl1c1wiLFxuICBcIk9Cb3JkZXJUb3BMZWZ0UmFkaXVzXCIsXG4gIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIixcbiAgXCJNb3pCb3JkZXJUb3BSaWdodFJhZGl1c1wiLFxuICBcIldlYmtpdEJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsXG4gIFwiTVNCb3JkZXJUb3BSaWdodFJhZGl1c1wiLFxuICBcIk9Cb3JkZXJUb3BSaWdodFJhZGl1c1wiLFxuICBcImJvcmRlclRvcFN0eWxlXCIsXG4gIFwiTW96Qm9yZGVyVG9wU3R5bGVcIixcbiAgXCJXZWJraXRCb3JkZXJUb3BTdHlsZVwiLFxuICBcIk1TQm9yZGVyVG9wU3R5bGVcIixcbiAgXCJPQm9yZGVyVG9wU3R5bGVcIixcbiAgXCJib3JkZXJUb3BXaWR0aFwiLFxuICBcIk1vekJvcmRlclRvcFdpZHRoXCIsXG4gIFwiV2Via2l0Qm9yZGVyVG9wV2lkdGhcIixcbiAgXCJNU0JvcmRlclRvcFdpZHRoXCIsXG4gIFwiT0JvcmRlclRvcFdpZHRoXCIsXG4gIFwiYm9yZGVyV2lkdGhcIixcbiAgXCJNb3pCb3JkZXJXaWR0aFwiLFxuICBcIldlYmtpdEJvcmRlcldpZHRoXCIsXG4gIFwiTVNCb3JkZXJXaWR0aFwiLFxuICBcIk9Cb3JkZXJXaWR0aFwiLFxuICBcImJvdHRvbVwiLFxuICBcIk1vekJvdHRvbVwiLFxuICBcIldlYmtpdEJvdHRvbVwiLFxuICBcIk1TQm90dG9tXCIsXG4gIFwiT0JvdHRvbVwiLFxuICBcImJveERlY29yYXRpb25CcmVha1wiLFxuICBcIk1vekJveERlY29yYXRpb25CcmVha1wiLFxuICBcIldlYmtpdEJveERlY29yYXRpb25CcmVha1wiLFxuICBcIk1TQm94RGVjb3JhdGlvbkJyZWFrXCIsXG4gIFwiT0JveERlY29yYXRpb25CcmVha1wiLFxuICBcImJveFNoYWRvd1wiLFxuICBcIk1vekJveFNoYWRvd1wiLFxuICBcIldlYmtpdEJveFNoYWRvd1wiLFxuICBcIk1TQm94U2hhZG93XCIsXG4gIFwiT0JveFNoYWRvd1wiLFxuICBcImJveFNpemluZ1wiLFxuICBcIk1vekJveFNpemluZ1wiLFxuICBcIldlYmtpdEJveFNpemluZ1wiLFxuICBcIk1TQm94U2l6aW5nXCIsXG4gIFwiT0JveFNpemluZ1wiLFxuICBcImJyZWFrQWZ0ZXJcIixcbiAgXCJNb3pCcmVha0FmdGVyXCIsXG4gIFwiV2Via2l0QnJlYWtBZnRlclwiLFxuICBcIk1TQnJlYWtBZnRlclwiLFxuICBcIk9CcmVha0FmdGVyXCIsXG4gIFwiYnJlYWtCZWZvcmVcIixcbiAgXCJNb3pCcmVha0JlZm9yZVwiLFxuICBcIldlYmtpdEJyZWFrQmVmb3JlXCIsXG4gIFwiTVNCcmVha0JlZm9yZVwiLFxuICBcIk9CcmVha0JlZm9yZVwiLFxuICBcImJyZWFrSW5zaWRlXCIsXG4gIFwiTW96QnJlYWtJbnNpZGVcIixcbiAgXCJXZWJraXRCcmVha0luc2lkZVwiLFxuICBcIk1TQnJlYWtJbnNpZGVcIixcbiAgXCJPQnJlYWtJbnNpZGVcIixcbiAgXCJjYXB0aW9uU2lkZVwiLFxuICBcIk1vekNhcHRpb25TaWRlXCIsXG4gIFwiV2Via2l0Q2FwdGlvblNpZGVcIixcbiAgXCJNU0NhcHRpb25TaWRlXCIsXG4gIFwiT0NhcHRpb25TaWRlXCIsXG4gIFwiY2FyZXRDb2xvclwiLFxuICBcIk1vekNhcmV0Q29sb3JcIixcbiAgXCJXZWJraXRDYXJldENvbG9yXCIsXG4gIFwiTVNDYXJldENvbG9yXCIsXG4gIFwiT0NhcmV0Q29sb3JcIixcbiAgXCJjaFwiLFxuICBcIk1vekNoXCIsXG4gIFwiV2Via2l0Q2hcIixcbiAgXCJNU0NoXCIsXG4gIFwiT0NoXCIsXG4gIFwiY2xlYXJcIixcbiAgXCJNb3pDbGVhclwiLFxuICBcIldlYmtpdENsZWFyXCIsXG4gIFwiTVNDbGVhclwiLFxuICBcIk9DbGVhclwiLFxuICBcImNsaXBcIixcbiAgXCJNb3pDbGlwXCIsXG4gIFwiV2Via2l0Q2xpcFwiLFxuICBcIk1TQ2xpcFwiLFxuICBcIk9DbGlwXCIsXG4gIFwiY2xpcFBhdGhcIixcbiAgXCJNb3pDbGlwUGF0aFwiLFxuICBcIldlYmtpdENsaXBQYXRoXCIsXG4gIFwiTVNDbGlwUGF0aFwiLFxuICBcIk9DbGlwUGF0aFwiLFxuICBcImNtXCIsXG4gIFwiTW96Q21cIixcbiAgXCJXZWJraXRDbVwiLFxuICBcIk1TQ21cIixcbiAgXCJPQ21cIixcbiAgXCJjb2xvclwiLFxuICBcIk1vekNvbG9yXCIsXG4gIFwiV2Via2l0Q29sb3JcIixcbiAgXCJNU0NvbG9yXCIsXG4gIFwiT0NvbG9yXCIsXG4gIFwiY29sdW1uQ291bnRcIixcbiAgXCJNb3pDb2x1bW5Db3VudFwiLFxuICBcIldlYmtpdENvbHVtbkNvdW50XCIsXG4gIFwiTVNDb2x1bW5Db3VudFwiLFxuICBcIk9Db2x1bW5Db3VudFwiLFxuICBcImNvbHVtbkZpbGxcIixcbiAgXCJNb3pDb2x1bW5GaWxsXCIsXG4gIFwiV2Via2l0Q29sdW1uRmlsbFwiLFxuICBcIk1TQ29sdW1uRmlsbFwiLFxuICBcIk9Db2x1bW5GaWxsXCIsXG4gIFwiY29sdW1uR2FwXCIsXG4gIFwiTW96Q29sdW1uR2FwXCIsXG4gIFwiV2Via2l0Q29sdW1uR2FwXCIsXG4gIFwiTVNDb2x1bW5HYXBcIixcbiAgXCJPQ29sdW1uR2FwXCIsXG4gIFwiY29sdW1uUnVsZVwiLFxuICBcIk1vekNvbHVtblJ1bGVcIixcbiAgXCJXZWJraXRDb2x1bW5SdWxlXCIsXG4gIFwiTVNDb2x1bW5SdWxlXCIsXG4gIFwiT0NvbHVtblJ1bGVcIixcbiAgXCJjb2x1bW5SdWxlQ29sb3JcIixcbiAgXCJNb3pDb2x1bW5SdWxlQ29sb3JcIixcbiAgXCJXZWJraXRDb2x1bW5SdWxlQ29sb3JcIixcbiAgXCJNU0NvbHVtblJ1bGVDb2xvclwiLFxuICBcIk9Db2x1bW5SdWxlQ29sb3JcIixcbiAgXCJjb2x1bW5SdWxlU3R5bGVcIixcbiAgXCJNb3pDb2x1bW5SdWxlU3R5bGVcIixcbiAgXCJXZWJraXRDb2x1bW5SdWxlU3R5bGVcIixcbiAgXCJNU0NvbHVtblJ1bGVTdHlsZVwiLFxuICBcIk9Db2x1bW5SdWxlU3R5bGVcIixcbiAgXCJjb2x1bW5SdWxlV2lkdGhcIixcbiAgXCJNb3pDb2x1bW5SdWxlV2lkdGhcIixcbiAgXCJXZWJraXRDb2x1bW5SdWxlV2lkdGhcIixcbiAgXCJNU0NvbHVtblJ1bGVXaWR0aFwiLFxuICBcIk9Db2x1bW5SdWxlV2lkdGhcIixcbiAgXCJjb2x1bW5TcGFuXCIsXG4gIFwiTW96Q29sdW1uU3BhblwiLFxuICBcIldlYmtpdENvbHVtblNwYW5cIixcbiAgXCJNU0NvbHVtblNwYW5cIixcbiAgXCJPQ29sdW1uU3BhblwiLFxuICBcImNvbHVtbldpZHRoXCIsXG4gIFwiTW96Q29sdW1uV2lkdGhcIixcbiAgXCJXZWJraXRDb2x1bW5XaWR0aFwiLFxuICBcIk1TQ29sdW1uV2lkdGhcIixcbiAgXCJPQ29sdW1uV2lkdGhcIixcbiAgXCJjb2x1bW5zXCIsXG4gIFwiTW96Q29sdW1uc1wiLFxuICBcIldlYmtpdENvbHVtbnNcIixcbiAgXCJNU0NvbHVtbnNcIixcbiAgXCJPQ29sdW1uc1wiLFxuICBcImNvbnRlbnRcIixcbiAgXCJNb3pDb250ZW50XCIsXG4gIFwiV2Via2l0Q29udGVudFwiLFxuICBcIk1TQ29udGVudFwiLFxuICBcIk9Db250ZW50XCIsXG4gIFwiY291bnRlckluY3JlbWVudFwiLFxuICBcIk1vekNvdW50ZXJJbmNyZW1lbnRcIixcbiAgXCJXZWJraXRDb3VudGVySW5jcmVtZW50XCIsXG4gIFwiTVNDb3VudGVySW5jcmVtZW50XCIsXG4gIFwiT0NvdW50ZXJJbmNyZW1lbnRcIixcbiAgXCJjb3VudGVyUmVzZXRcIixcbiAgXCJNb3pDb3VudGVyUmVzZXRcIixcbiAgXCJXZWJraXRDb3VudGVyUmVzZXRcIixcbiAgXCJNU0NvdW50ZXJSZXNldFwiLFxuICBcIk9Db3VudGVyUmVzZXRcIixcbiAgXCJjdXJzb3JcIixcbiAgXCJNb3pDdXJzb3JcIixcbiAgXCJXZWJraXRDdXJzb3JcIixcbiAgXCJNU0N1cnNvclwiLFxuICBcIk9DdXJzb3JcIixcbiAgXCJkZWdcIixcbiAgXCJNb3pEZWdcIixcbiAgXCJXZWJraXREZWdcIixcbiAgXCJNU0RlZ1wiLFxuICBcIk9EZWdcIixcbiAgXCJkaXJlY3Rpb25cIixcbiAgXCJNb3pEaXJlY3Rpb25cIixcbiAgXCJXZWJraXREaXJlY3Rpb25cIixcbiAgXCJNU0RpcmVjdGlvblwiLFxuICBcIk9EaXJlY3Rpb25cIixcbiAgXCJkaXNwbGF5XCIsXG4gIFwiTW96RGlzcGxheVwiLFxuICBcIldlYmtpdERpc3BsYXlcIixcbiAgXCJNU0Rpc3BsYXlcIixcbiAgXCJPRGlzcGxheVwiLFxuICBcImRwY21cIixcbiAgXCJNb3pEcGNtXCIsXG4gIFwiV2Via2l0RHBjbVwiLFxuICBcIk1TRHBjbVwiLFxuICBcIk9EcGNtXCIsXG4gIFwiZHBpXCIsXG4gIFwiTW96RHBpXCIsXG4gIFwiV2Via2l0RHBpXCIsXG4gIFwiTVNEcGlcIixcbiAgXCJPRHBpXCIsXG4gIFwiZHBweFwiLFxuICBcIk1vekRwcHhcIixcbiAgXCJXZWJraXREcHB4XCIsXG4gIFwiTVNEcHB4XCIsXG4gIFwiT0RwcHhcIixcbiAgXCJlbVwiLFxuICBcIk1vekVtXCIsXG4gIFwiV2Via2l0RW1cIixcbiAgXCJNU0VtXCIsXG4gIFwiT0VtXCIsXG4gIFwiZW1wdHlDZWxsc1wiLFxuICBcIk1vekVtcHR5Q2VsbHNcIixcbiAgXCJXZWJraXRFbXB0eUNlbGxzXCIsXG4gIFwiTVNFbXB0eUNlbGxzXCIsXG4gIFwiT0VtcHR5Q2VsbHNcIixcbiAgXCJleFwiLFxuICBcIk1vekV4XCIsXG4gIFwiV2Via2l0RXhcIixcbiAgXCJNU0V4XCIsXG4gIFwiT0V4XCIsXG4gIFwiZmlsdGVyXCIsXG4gIFwiTW96RmlsdGVyXCIsXG4gIFwiV2Via2l0RmlsdGVyXCIsXG4gIFwiTVNGaWx0ZXJcIixcbiAgXCJPRmlsdGVyXCIsXG4gIFwiZmxleEJhc2lzXCIsXG4gIFwiTW96RmxleEJhc2lzXCIsXG4gIFwiV2Via2l0RmxleEJhc2lzXCIsXG4gIFwiTVNGbGV4QmFzaXNcIixcbiAgXCJPRmxleEJhc2lzXCIsXG4gIFwiZmxleERpcmVjdGlvblwiLFxuICBcIk1vekZsZXhEaXJlY3Rpb25cIixcbiAgXCJXZWJraXRGbGV4RGlyZWN0aW9uXCIsXG4gIFwiTVNGbGV4RGlyZWN0aW9uXCIsXG4gIFwiT0ZsZXhEaXJlY3Rpb25cIixcbiAgXCJmbGV4Rmxvd1wiLFxuICBcIk1vekZsZXhGbG93XCIsXG4gIFwiV2Via2l0RmxleEZsb3dcIixcbiAgXCJNU0ZsZXhGbG93XCIsXG4gIFwiT0ZsZXhGbG93XCIsXG4gIFwiZmxleEdyb3dcIixcbiAgXCJNb3pGbGV4R3Jvd1wiLFxuICBcIldlYmtpdEZsZXhHcm93XCIsXG4gIFwiTVNGbGV4R3Jvd1wiLFxuICBcIk9GbGV4R3Jvd1wiLFxuICBcImZsZXhTaHJpbmtcIixcbiAgXCJNb3pGbGV4U2hyaW5rXCIsXG4gIFwiV2Via2l0RmxleFNocmlua1wiLFxuICBcIk1TRmxleFNocmlua1wiLFxuICBcIk9GbGV4U2hyaW5rXCIsXG4gIFwiZmxleFdyYXBcIixcbiAgXCJNb3pGbGV4V3JhcFwiLFxuICBcIldlYmtpdEZsZXhXcmFwXCIsXG4gIFwiTVNGbGV4V3JhcFwiLFxuICBcIk9GbGV4V3JhcFwiLFxuICBcImZsb2F0XCIsXG4gIFwiTW96RmxvYXRcIixcbiAgXCJXZWJraXRGbG9hdFwiLFxuICBcIk1TRmxvYXRcIixcbiAgXCJPRmxvYXRcIixcbiAgXCJmb250XCIsXG4gIFwiTW96Rm9udFwiLFxuICBcIldlYmtpdEZvbnRcIixcbiAgXCJNU0ZvbnRcIixcbiAgXCJPRm9udFwiLFxuICBcImZvbnRGYW1pbHlcIixcbiAgXCJNb3pGb250RmFtaWx5XCIsXG4gIFwiV2Via2l0Rm9udEZhbWlseVwiLFxuICBcIk1TRm9udEZhbWlseVwiLFxuICBcIk9Gb250RmFtaWx5XCIsXG4gIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiLFxuICBcIk1vekZvbnRGZWF0dXJlU2V0dGluZ3NcIixcbiAgXCJXZWJraXRGb250RmVhdHVyZVNldHRpbmdzXCIsXG4gIFwiTVNGb250RmVhdHVyZVNldHRpbmdzXCIsXG4gIFwiT0ZvbnRGZWF0dXJlU2V0dGluZ3NcIixcbiAgXCJmb250S2VybmluZ1wiLFxuICBcIk1vekZvbnRLZXJuaW5nXCIsXG4gIFwiV2Via2l0Rm9udEtlcm5pbmdcIixcbiAgXCJNU0ZvbnRLZXJuaW5nXCIsXG4gIFwiT0ZvbnRLZXJuaW5nXCIsXG4gIFwiZm9udExhbmd1YWdlT3ZlcnJpZGVcIixcbiAgXCJNb3pGb250TGFuZ3VhZ2VPdmVycmlkZVwiLFxuICBcIldlYmtpdEZvbnRMYW5ndWFnZU92ZXJyaWRlXCIsXG4gIFwiTVNGb250TGFuZ3VhZ2VPdmVycmlkZVwiLFxuICBcIk9Gb250TGFuZ3VhZ2VPdmVycmlkZVwiLFxuICBcImZvbnRTaXplXCIsXG4gIFwiTW96Rm9udFNpemVcIixcbiAgXCJXZWJraXRGb250U2l6ZVwiLFxuICBcIk1TRm9udFNpemVcIixcbiAgXCJPRm9udFNpemVcIixcbiAgXCJmb250U2l6ZUFkanVzdFwiLFxuICBcIk1vekZvbnRTaXplQWRqdXN0XCIsXG4gIFwiV2Via2l0Rm9udFNpemVBZGp1c3RcIixcbiAgXCJNU0ZvbnRTaXplQWRqdXN0XCIsXG4gIFwiT0ZvbnRTaXplQWRqdXN0XCIsXG4gIFwiZm9udFN0cmV0Y2hcIixcbiAgXCJNb3pGb250U3RyZXRjaFwiLFxuICBcIldlYmtpdEZvbnRTdHJldGNoXCIsXG4gIFwiTVNGb250U3RyZXRjaFwiLFxuICBcIk9Gb250U3RyZXRjaFwiLFxuICBcImZvbnRTdHlsZVwiLFxuICBcIk1vekZvbnRTdHlsZVwiLFxuICBcIldlYmtpdEZvbnRTdHlsZVwiLFxuICBcIk1TRm9udFN0eWxlXCIsXG4gIFwiT0ZvbnRTdHlsZVwiLFxuICBcImZvbnRTeW50aGVzaXNcIixcbiAgXCJNb3pGb250U3ludGhlc2lzXCIsXG4gIFwiV2Via2l0Rm9udFN5bnRoZXNpc1wiLFxuICBcIk1TRm9udFN5bnRoZXNpc1wiLFxuICBcIk9Gb250U3ludGhlc2lzXCIsXG4gIFwiZm9udFZhcmlhbnRcIixcbiAgXCJNb3pGb250VmFyaWFudFwiLFxuICBcIldlYmtpdEZvbnRWYXJpYW50XCIsXG4gIFwiTVNGb250VmFyaWFudFwiLFxuICBcIk9Gb250VmFyaWFudFwiLFxuICBcImZvbnRWYXJpYW50QWx0ZXJuYXRlc1wiLFxuICBcIk1vekZvbnRWYXJpYW50QWx0ZXJuYXRlc1wiLFxuICBcIldlYmtpdEZvbnRWYXJpYW50QWx0ZXJuYXRlc1wiLFxuICBcIk1TRm9udFZhcmlhbnRBbHRlcm5hdGVzXCIsXG4gIFwiT0ZvbnRWYXJpYW50QWx0ZXJuYXRlc1wiLFxuICBcImZvbnRWYXJpYW50Q2Fwc1wiLFxuICBcIk1vekZvbnRWYXJpYW50Q2Fwc1wiLFxuICBcIldlYmtpdEZvbnRWYXJpYW50Q2Fwc1wiLFxuICBcIk1TRm9udFZhcmlhbnRDYXBzXCIsXG4gIFwiT0ZvbnRWYXJpYW50Q2Fwc1wiLFxuICBcImZvbnRWYXJpYW50RWFzdEFzaWFuXCIsXG4gIFwiTW96Rm9udFZhcmlhbnRFYXN0QXNpYW5cIixcbiAgXCJXZWJraXRGb250VmFyaWFudEVhc3RBc2lhblwiLFxuICBcIk1TRm9udFZhcmlhbnRFYXN0QXNpYW5cIixcbiAgXCJPRm9udFZhcmlhbnRFYXN0QXNpYW5cIixcbiAgXCJmb250VmFyaWFudExpZ2F0dXJlc1wiLFxuICBcIk1vekZvbnRWYXJpYW50TGlnYXR1cmVzXCIsXG4gIFwiV2Via2l0Rm9udFZhcmlhbnRMaWdhdHVyZXNcIixcbiAgXCJNU0ZvbnRWYXJpYW50TGlnYXR1cmVzXCIsXG4gIFwiT0ZvbnRWYXJpYW50TGlnYXR1cmVzXCIsXG4gIFwiZm9udFZhcmlhbnROdW1lcmljXCIsXG4gIFwiTW96Rm9udFZhcmlhbnROdW1lcmljXCIsXG4gIFwiV2Via2l0Rm9udFZhcmlhbnROdW1lcmljXCIsXG4gIFwiTVNGb250VmFyaWFudE51bWVyaWNcIixcbiAgXCJPRm9udFZhcmlhbnROdW1lcmljXCIsXG4gIFwiZm9udFZhcmlhbnRQb3NpdGlvblwiLFxuICBcIk1vekZvbnRWYXJpYW50UG9zaXRpb25cIixcbiAgXCJXZWJraXRGb250VmFyaWFudFBvc2l0aW9uXCIsXG4gIFwiTVNGb250VmFyaWFudFBvc2l0aW9uXCIsXG4gIFwiT0ZvbnRWYXJpYW50UG9zaXRpb25cIixcbiAgXCJmb250V2VpZ2h0XCIsXG4gIFwiTW96Rm9udFdlaWdodFwiLFxuICBcIldlYmtpdEZvbnRXZWlnaHRcIixcbiAgXCJNU0ZvbnRXZWlnaHRcIixcbiAgXCJPRm9udFdlaWdodFwiLFxuICBcImZyXCIsXG4gIFwiTW96RnJcIixcbiAgXCJXZWJraXRGclwiLFxuICBcIk1TRnJcIixcbiAgXCJPRnJcIixcbiAgXCJncmFkXCIsXG4gIFwiTW96R3JhZFwiLFxuICBcIldlYmtpdEdyYWRcIixcbiAgXCJNU0dyYWRcIixcbiAgXCJPR3JhZFwiLFxuICBcImdyaWRcIixcbiAgXCJNb3pHcmlkXCIsXG4gIFwiV2Via2l0R3JpZFwiLFxuICBcIk1TR3JpZFwiLFxuICBcIk9HcmlkXCIsXG4gIFwiZ3JpZEFyZWFcIixcbiAgXCJNb3pHcmlkQXJlYVwiLFxuICBcIldlYmtpdEdyaWRBcmVhXCIsXG4gIFwiTVNHcmlkQXJlYVwiLFxuICBcIk9HcmlkQXJlYVwiLFxuICBcImdyaWRBdXRvQ29sdW1uc1wiLFxuICBcIk1vekdyaWRBdXRvQ29sdW1uc1wiLFxuICBcIldlYmtpdEdyaWRBdXRvQ29sdW1uc1wiLFxuICBcIk1TR3JpZEF1dG9Db2x1bW5zXCIsXG4gIFwiT0dyaWRBdXRvQ29sdW1uc1wiLFxuICBcImdyaWRBdXRvRmxvd1wiLFxuICBcIk1vekdyaWRBdXRvRmxvd1wiLFxuICBcIldlYmtpdEdyaWRBdXRvRmxvd1wiLFxuICBcIk1TR3JpZEF1dG9GbG93XCIsXG4gIFwiT0dyaWRBdXRvRmxvd1wiLFxuICBcImdyaWRBdXRvUm93c1wiLFxuICBcIk1vekdyaWRBdXRvUm93c1wiLFxuICBcIldlYmtpdEdyaWRBdXRvUm93c1wiLFxuICBcIk1TR3JpZEF1dG9Sb3dzXCIsXG4gIFwiT0dyaWRBdXRvUm93c1wiLFxuICBcImdyaWRDb2x1bW5cIixcbiAgXCJNb3pHcmlkQ29sdW1uXCIsXG4gIFwiV2Via2l0R3JpZENvbHVtblwiLFxuICBcIk1TR3JpZENvbHVtblwiLFxuICBcIk9HcmlkQ29sdW1uXCIsXG4gIFwiZ3JpZENvbHVtbkVuZFwiLFxuICBcIk1vekdyaWRDb2x1bW5FbmRcIixcbiAgXCJXZWJraXRHcmlkQ29sdW1uRW5kXCIsXG4gIFwiTVNHcmlkQ29sdW1uRW5kXCIsXG4gIFwiT0dyaWRDb2x1bW5FbmRcIixcbiAgXCJncmlkQ29sdW1uR2FwXCIsXG4gIFwiTW96R3JpZENvbHVtbkdhcFwiLFxuICBcIldlYmtpdEdyaWRDb2x1bW5HYXBcIixcbiAgXCJNU0dyaWRDb2x1bW5HYXBcIixcbiAgXCJPR3JpZENvbHVtbkdhcFwiLFxuICBcImdyaWRDb2x1bW5TdGFydFwiLFxuICBcIk1vekdyaWRDb2x1bW5TdGFydFwiLFxuICBcIldlYmtpdEdyaWRDb2x1bW5TdGFydFwiLFxuICBcIk1TR3JpZENvbHVtblN0YXJ0XCIsXG4gIFwiT0dyaWRDb2x1bW5TdGFydFwiLFxuICBcImdyaWRHYXBcIixcbiAgXCJNb3pHcmlkR2FwXCIsXG4gIFwiV2Via2l0R3JpZEdhcFwiLFxuICBcIk1TR3JpZEdhcFwiLFxuICBcIk9HcmlkR2FwXCIsXG4gIFwiZ3JpZFJvd1wiLFxuICBcIk1vekdyaWRSb3dcIixcbiAgXCJXZWJraXRHcmlkUm93XCIsXG4gIFwiTVNHcmlkUm93XCIsXG4gIFwiT0dyaWRSb3dcIixcbiAgXCJncmlkUm93RW5kXCIsXG4gIFwiTW96R3JpZFJvd0VuZFwiLFxuICBcIldlYmtpdEdyaWRSb3dFbmRcIixcbiAgXCJNU0dyaWRSb3dFbmRcIixcbiAgXCJPR3JpZFJvd0VuZFwiLFxuICBcImdyaWRSb3dHYXBcIixcbiAgXCJNb3pHcmlkUm93R2FwXCIsXG4gIFwiV2Via2l0R3JpZFJvd0dhcFwiLFxuICBcIk1TR3JpZFJvd0dhcFwiLFxuICBcIk9HcmlkUm93R2FwXCIsXG4gIFwiZ3JpZFJvd1N0YXJ0XCIsXG4gIFwiTW96R3JpZFJvd1N0YXJ0XCIsXG4gIFwiV2Via2l0R3JpZFJvd1N0YXJ0XCIsXG4gIFwiTVNHcmlkUm93U3RhcnRcIixcbiAgXCJPR3JpZFJvd1N0YXJ0XCIsXG4gIFwiZ3JpZFRlbXBsYXRlXCIsXG4gIFwiTW96R3JpZFRlbXBsYXRlXCIsXG4gIFwiV2Via2l0R3JpZFRlbXBsYXRlXCIsXG4gIFwiTVNHcmlkVGVtcGxhdGVcIixcbiAgXCJPR3JpZFRlbXBsYXRlXCIsXG4gIFwiZ3JpZFRlbXBsYXRlQXJlYXNcIixcbiAgXCJNb3pHcmlkVGVtcGxhdGVBcmVhc1wiLFxuICBcIldlYmtpdEdyaWRUZW1wbGF0ZUFyZWFzXCIsXG4gIFwiTVNHcmlkVGVtcGxhdGVBcmVhc1wiLFxuICBcIk9HcmlkVGVtcGxhdGVBcmVhc1wiLFxuICBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIixcbiAgXCJNb3pHcmlkVGVtcGxhdGVDb2x1bW5zXCIsXG4gIFwiV2Via2l0R3JpZFRlbXBsYXRlQ29sdW1uc1wiLFxuICBcIk1TR3JpZFRlbXBsYXRlQ29sdW1uc1wiLFxuICBcIk9HcmlkVGVtcGxhdGVDb2x1bW5zXCIsXG4gIFwiZ3JpZFRlbXBsYXRlUm93c1wiLFxuICBcIk1vekdyaWRUZW1wbGF0ZVJvd3NcIixcbiAgXCJXZWJraXRHcmlkVGVtcGxhdGVSb3dzXCIsXG4gIFwiTVNHcmlkVGVtcGxhdGVSb3dzXCIsXG4gIFwiT0dyaWRUZW1wbGF0ZVJvd3NcIixcbiAgXCJoZWlnaHRcIixcbiAgXCJNb3pIZWlnaHRcIixcbiAgXCJXZWJraXRIZWlnaHRcIixcbiAgXCJNU0hlaWdodFwiLFxuICBcIk9IZWlnaHRcIixcbiAgXCJoeXBoZW5zXCIsXG4gIFwiTW96SHlwaGVuc1wiLFxuICBcIldlYmtpdEh5cGhlbnNcIixcbiAgXCJNU0h5cGhlbnNcIixcbiAgXCJPSHlwaGVuc1wiLFxuICBcImh6XCIsXG4gIFwiTW96SHpcIixcbiAgXCJXZWJraXRIelwiLFxuICBcIk1TSHpcIixcbiAgXCJPSHpcIixcbiAgXCJpbWFnZU9yaWVudGF0aW9uXCIsXG4gIFwiTW96SW1hZ2VPcmllbnRhdGlvblwiLFxuICBcIldlYmtpdEltYWdlT3JpZW50YXRpb25cIixcbiAgXCJNU0ltYWdlT3JpZW50YXRpb25cIixcbiAgXCJPSW1hZ2VPcmllbnRhdGlvblwiLFxuICBcImltYWdlUmVuZGVyaW5nXCIsXG4gIFwiTW96SW1hZ2VSZW5kZXJpbmdcIixcbiAgXCJXZWJraXRJbWFnZVJlbmRlcmluZ1wiLFxuICBcIk1TSW1hZ2VSZW5kZXJpbmdcIixcbiAgXCJPSW1hZ2VSZW5kZXJpbmdcIixcbiAgXCJpbWFnZVJlc29sdXRpb25cIixcbiAgXCJNb3pJbWFnZVJlc29sdXRpb25cIixcbiAgXCJXZWJraXRJbWFnZVJlc29sdXRpb25cIixcbiAgXCJNU0ltYWdlUmVzb2x1dGlvblwiLFxuICBcIk9JbWFnZVJlc29sdXRpb25cIixcbiAgXCJpbWVNb2RlXCIsXG4gIFwiTW96SW1lTW9kZVwiLFxuICBcIldlYmtpdEltZU1vZGVcIixcbiAgXCJNU0ltZU1vZGVcIixcbiAgXCJPSW1lTW9kZVwiLFxuICBcImluXCIsXG4gIFwiTW96SW5cIixcbiAgXCJXZWJraXRJblwiLFxuICBcIk1TSW5cIixcbiAgXCJPSW5cIixcbiAgXCJpbmhlcml0XCIsXG4gIFwiTW96SW5oZXJpdFwiLFxuICBcIldlYmtpdEluaGVyaXRcIixcbiAgXCJNU0luaGVyaXRcIixcbiAgXCJPSW5oZXJpdFwiLFxuICBcImluaXRpYWxcIixcbiAgXCJNb3pJbml0aWFsXCIsXG4gIFwiV2Via2l0SW5pdGlhbFwiLFxuICBcIk1TSW5pdGlhbFwiLFxuICBcIk9Jbml0aWFsXCIsXG4gIFwiaW5saW5lU2l6ZVwiLFxuICBcIk1veklubGluZVNpemVcIixcbiAgXCJXZWJraXRJbmxpbmVTaXplXCIsXG4gIFwiTVNJbmxpbmVTaXplXCIsXG4gIFwiT0lubGluZVNpemVcIixcbiAgXCJpc29sYXRpb25cIixcbiAgXCJNb3pJc29sYXRpb25cIixcbiAgXCJXZWJraXRJc29sYXRpb25cIixcbiAgXCJNU0lzb2xhdGlvblwiLFxuICBcIk9Jc29sYXRpb25cIixcbiAgXCJqdXN0aWZ5Q29udGVudFwiLFxuICBcIk1vekp1c3RpZnlDb250ZW50XCIsXG4gIFwiV2Via2l0SnVzdGlmeUNvbnRlbnRcIixcbiAgXCJNU0p1c3RpZnlDb250ZW50XCIsXG4gIFwiT0p1c3RpZnlDb250ZW50XCIsXG4gIFwia2h6XCIsXG4gIFwiTW96S2h6XCIsXG4gIFwiV2Via2l0S2h6XCIsXG4gIFwiTVNLaHpcIixcbiAgXCJPS2h6XCIsXG4gIFwibGVmdFwiLFxuICBcIk1vekxlZnRcIixcbiAgXCJXZWJraXRMZWZ0XCIsXG4gIFwiTVNMZWZ0XCIsXG4gIFwiT0xlZnRcIixcbiAgXCJsZXR0ZXJTcGFjaW5nXCIsXG4gIFwiTW96TGV0dGVyU3BhY2luZ1wiLFxuICBcIldlYmtpdExldHRlclNwYWNpbmdcIixcbiAgXCJNU0xldHRlclNwYWNpbmdcIixcbiAgXCJPTGV0dGVyU3BhY2luZ1wiLFxuICBcImxpbmVCcmVha1wiLFxuICBcIk1vekxpbmVCcmVha1wiLFxuICBcIldlYmtpdExpbmVCcmVha1wiLFxuICBcIk1TTGluZUJyZWFrXCIsXG4gIFwiT0xpbmVCcmVha1wiLFxuICBcImxpbmVIZWlnaHRcIixcbiAgXCJNb3pMaW5lSGVpZ2h0XCIsXG4gIFwiV2Via2l0TGluZUhlaWdodFwiLFxuICBcIk1TTGluZUhlaWdodFwiLFxuICBcIk9MaW5lSGVpZ2h0XCIsXG4gIFwibGlzdFN0eWxlXCIsXG4gIFwiTW96TGlzdFN0eWxlXCIsXG4gIFwiV2Via2l0TGlzdFN0eWxlXCIsXG4gIFwiTVNMaXN0U3R5bGVcIixcbiAgXCJPTGlzdFN0eWxlXCIsXG4gIFwibGlzdFN0eWxlSW1hZ2VcIixcbiAgXCJNb3pMaXN0U3R5bGVJbWFnZVwiLFxuICBcIldlYmtpdExpc3RTdHlsZUltYWdlXCIsXG4gIFwiTVNMaXN0U3R5bGVJbWFnZVwiLFxuICBcIk9MaXN0U3R5bGVJbWFnZVwiLFxuICBcImxpc3RTdHlsZVBvc2l0aW9uXCIsXG4gIFwiTW96TGlzdFN0eWxlUG9zaXRpb25cIixcbiAgXCJXZWJraXRMaXN0U3R5bGVQb3NpdGlvblwiLFxuICBcIk1TTGlzdFN0eWxlUG9zaXRpb25cIixcbiAgXCJPTGlzdFN0eWxlUG9zaXRpb25cIixcbiAgXCJsaXN0U3R5bGVUeXBlXCIsXG4gIFwiTW96TGlzdFN0eWxlVHlwZVwiLFxuICBcIldlYmtpdExpc3RTdHlsZVR5cGVcIixcbiAgXCJNU0xpc3RTdHlsZVR5cGVcIixcbiAgXCJPTGlzdFN0eWxlVHlwZVwiLFxuICBcIm1hcmdpblwiLFxuICBcIk1vek1hcmdpblwiLFxuICBcIldlYmtpdE1hcmdpblwiLFxuICBcIk1TTWFyZ2luXCIsXG4gIFwiT01hcmdpblwiLFxuICBcIm1hcmdpbkJsb2NrRW5kXCIsXG4gIFwiTW96TWFyZ2luQmxvY2tFbmRcIixcbiAgXCJXZWJraXRNYXJnaW5CbG9ja0VuZFwiLFxuICBcIk1TTWFyZ2luQmxvY2tFbmRcIixcbiAgXCJPTWFyZ2luQmxvY2tFbmRcIixcbiAgXCJtYXJnaW5CbG9ja1N0YXJ0XCIsXG4gIFwiTW96TWFyZ2luQmxvY2tTdGFydFwiLFxuICBcIldlYmtpdE1hcmdpbkJsb2NrU3RhcnRcIixcbiAgXCJNU01hcmdpbkJsb2NrU3RhcnRcIixcbiAgXCJPTWFyZ2luQmxvY2tTdGFydFwiLFxuICBcIm1hcmdpbkJvdHRvbVwiLFxuICBcIk1vek1hcmdpbkJvdHRvbVwiLFxuICBcIldlYmtpdE1hcmdpbkJvdHRvbVwiLFxuICBcIk1TTWFyZ2luQm90dG9tXCIsXG4gIFwiT01hcmdpbkJvdHRvbVwiLFxuICBcIm1hcmdpbklubGluZUVuZFwiLFxuICBcIk1vek1hcmdpbklubGluZUVuZFwiLFxuICBcIldlYmtpdE1hcmdpbklubGluZUVuZFwiLFxuICBcIk1TTWFyZ2luSW5saW5lRW5kXCIsXG4gIFwiT01hcmdpbklubGluZUVuZFwiLFxuICBcIm1hcmdpbklubGluZVN0YXJ0XCIsXG4gIFwiTW96TWFyZ2luSW5saW5lU3RhcnRcIixcbiAgXCJXZWJraXRNYXJnaW5JbmxpbmVTdGFydFwiLFxuICBcIk1TTWFyZ2luSW5saW5lU3RhcnRcIixcbiAgXCJPTWFyZ2luSW5saW5lU3RhcnRcIixcbiAgXCJtYXJnaW5MZWZ0XCIsXG4gIFwiTW96TWFyZ2luTGVmdFwiLFxuICBcIldlYmtpdE1hcmdpbkxlZnRcIixcbiAgXCJNU01hcmdpbkxlZnRcIixcbiAgXCJPTWFyZ2luTGVmdFwiLFxuICBcIm1hcmdpblJpZ2h0XCIsXG4gIFwiTW96TWFyZ2luUmlnaHRcIixcbiAgXCJXZWJraXRNYXJnaW5SaWdodFwiLFxuICBcIk1TTWFyZ2luUmlnaHRcIixcbiAgXCJPTWFyZ2luUmlnaHRcIixcbiAgXCJtYXJnaW5Ub3BcIixcbiAgXCJNb3pNYXJnaW5Ub3BcIixcbiAgXCJXZWJraXRNYXJnaW5Ub3BcIixcbiAgXCJNU01hcmdpblRvcFwiLFxuICBcIk9NYXJnaW5Ub3BcIixcbiAgXCJtYXNrXCIsXG4gIFwiTW96TWFza1wiLFxuICBcIldlYmtpdE1hc2tcIixcbiAgXCJNU01hc2tcIixcbiAgXCJPTWFza1wiLFxuICBcIm1hc2tDbGlwXCIsXG4gIFwiTW96TWFza0NsaXBcIixcbiAgXCJXZWJraXRNYXNrQ2xpcFwiLFxuICBcIk1TTWFza0NsaXBcIixcbiAgXCJPTWFza0NsaXBcIixcbiAgXCJtYXNrQ29tcG9zaXRlXCIsXG4gIFwiTW96TWFza0NvbXBvc2l0ZVwiLFxuICBcIldlYmtpdE1hc2tDb21wb3NpdGVcIixcbiAgXCJNU01hc2tDb21wb3NpdGVcIixcbiAgXCJPTWFza0NvbXBvc2l0ZVwiLFxuICBcIm1hc2tJbWFnZVwiLFxuICBcIk1vek1hc2tJbWFnZVwiLFxuICBcIldlYmtpdE1hc2tJbWFnZVwiLFxuICBcIk1TTWFza0ltYWdlXCIsXG4gIFwiT01hc2tJbWFnZVwiLFxuICBcIm1hc2tNb2RlXCIsXG4gIFwiTW96TWFza01vZGVcIixcbiAgXCJXZWJraXRNYXNrTW9kZVwiLFxuICBcIk1TTWFza01vZGVcIixcbiAgXCJPTWFza01vZGVcIixcbiAgXCJtYXNrT3JpZ2luXCIsXG4gIFwiTW96TWFza09yaWdpblwiLFxuICBcIldlYmtpdE1hc2tPcmlnaW5cIixcbiAgXCJNU01hc2tPcmlnaW5cIixcbiAgXCJPTWFza09yaWdpblwiLFxuICBcIm1hc2tQb3NpdGlvblwiLFxuICBcIk1vek1hc2tQb3NpdGlvblwiLFxuICBcIldlYmtpdE1hc2tQb3NpdGlvblwiLFxuICBcIk1TTWFza1Bvc2l0aW9uXCIsXG4gIFwiT01hc2tQb3NpdGlvblwiLFxuICBcIm1hc2tSZXBlYXRcIixcbiAgXCJNb3pNYXNrUmVwZWF0XCIsXG4gIFwiV2Via2l0TWFza1JlcGVhdFwiLFxuICBcIk1TTWFza1JlcGVhdFwiLFxuICBcIk9NYXNrUmVwZWF0XCIsXG4gIFwibWFza1NpemVcIixcbiAgXCJNb3pNYXNrU2l6ZVwiLFxuICBcIldlYmtpdE1hc2tTaXplXCIsXG4gIFwiTVNNYXNrU2l6ZVwiLFxuICBcIk9NYXNrU2l6ZVwiLFxuICBcIm1hc2tUeXBlXCIsXG4gIFwiTW96TWFza1R5cGVcIixcbiAgXCJXZWJraXRNYXNrVHlwZVwiLFxuICBcIk1TTWFza1R5cGVcIixcbiAgXCJPTWFza1R5cGVcIixcbiAgXCJtYXhIZWlnaHRcIixcbiAgXCJNb3pNYXhIZWlnaHRcIixcbiAgXCJXZWJraXRNYXhIZWlnaHRcIixcbiAgXCJNU01heEhlaWdodFwiLFxuICBcIk9NYXhIZWlnaHRcIixcbiAgXCJtYXhXaWR0aFwiLFxuICBcIk1vek1heFdpZHRoXCIsXG4gIFwiV2Via2l0TWF4V2lkdGhcIixcbiAgXCJNU01heFdpZHRoXCIsXG4gIFwiT01heFdpZHRoXCIsXG4gIFwibWluQmxvY2tTaXplXCIsXG4gIFwiTW96TWluQmxvY2tTaXplXCIsXG4gIFwiV2Via2l0TWluQmxvY2tTaXplXCIsXG4gIFwiTVNNaW5CbG9ja1NpemVcIixcbiAgXCJPTWluQmxvY2tTaXplXCIsXG4gIFwibWluSGVpZ2h0XCIsXG4gIFwiTW96TWluSGVpZ2h0XCIsXG4gIFwiV2Via2l0TWluSGVpZ2h0XCIsXG4gIFwiTVNNaW5IZWlnaHRcIixcbiAgXCJPTWluSGVpZ2h0XCIsXG4gIFwibWluSW5saW5lU2l6ZVwiLFxuICBcIk1vek1pbklubGluZVNpemVcIixcbiAgXCJXZWJraXRNaW5JbmxpbmVTaXplXCIsXG4gIFwiTVNNaW5JbmxpbmVTaXplXCIsXG4gIFwiT01pbklubGluZVNpemVcIixcbiAgXCJtaW5XaWR0aFwiLFxuICBcIk1vek1pbldpZHRoXCIsXG4gIFwiV2Via2l0TWluV2lkdGhcIixcbiAgXCJNU01pbldpZHRoXCIsXG4gIFwiT01pbldpZHRoXCIsXG4gIFwibWl4QmxlbmRNb2RlXCIsXG4gIFwiTW96TWl4QmxlbmRNb2RlXCIsXG4gIFwiV2Via2l0TWl4QmxlbmRNb2RlXCIsXG4gIFwiTVNNaXhCbGVuZE1vZGVcIixcbiAgXCJPTWl4QmxlbmRNb2RlXCIsXG4gIFwibW1cIixcbiAgXCJNb3pNbVwiLFxuICBcIldlYmtpdE1tXCIsXG4gIFwiTVNNbVwiLFxuICBcIk9NbVwiLFxuICBcIm1zXCIsXG4gIFwiTW96TXNcIixcbiAgXCJXZWJraXRNc1wiLFxuICBcIk1TTXNcIixcbiAgXCJPTXNcIixcbiAgXCJvYmplY3RGaXRcIixcbiAgXCJNb3pPYmplY3RGaXRcIixcbiAgXCJXZWJraXRPYmplY3RGaXRcIixcbiAgXCJNU09iamVjdEZpdFwiLFxuICBcIk9PYmplY3RGaXRcIixcbiAgXCJvYmplY3RQb3NpdGlvblwiLFxuICBcIk1vek9iamVjdFBvc2l0aW9uXCIsXG4gIFwiV2Via2l0T2JqZWN0UG9zaXRpb25cIixcbiAgXCJNU09iamVjdFBvc2l0aW9uXCIsXG4gIFwiT09iamVjdFBvc2l0aW9uXCIsXG4gIFwib2Zmc2V0QmxvY2tFbmRcIixcbiAgXCJNb3pPZmZzZXRCbG9ja0VuZFwiLFxuICBcIldlYmtpdE9mZnNldEJsb2NrRW5kXCIsXG4gIFwiTVNPZmZzZXRCbG9ja0VuZFwiLFxuICBcIk9PZmZzZXRCbG9ja0VuZFwiLFxuICBcIm9mZnNldEJsb2NrU3RhcnRcIixcbiAgXCJNb3pPZmZzZXRCbG9ja1N0YXJ0XCIsXG4gIFwiV2Via2l0T2Zmc2V0QmxvY2tTdGFydFwiLFxuICBcIk1TT2Zmc2V0QmxvY2tTdGFydFwiLFxuICBcIk9PZmZzZXRCbG9ja1N0YXJ0XCIsXG4gIFwib2Zmc2V0SW5saW5lRW5kXCIsXG4gIFwiTW96T2Zmc2V0SW5saW5lRW5kXCIsXG4gIFwiV2Via2l0T2Zmc2V0SW5saW5lRW5kXCIsXG4gIFwiTVNPZmZzZXRJbmxpbmVFbmRcIixcbiAgXCJPT2Zmc2V0SW5saW5lRW5kXCIsXG4gIFwib2Zmc2V0SW5saW5lU3RhcnRcIixcbiAgXCJNb3pPZmZzZXRJbmxpbmVTdGFydFwiLFxuICBcIldlYmtpdE9mZnNldElubGluZVN0YXJ0XCIsXG4gIFwiTVNPZmZzZXRJbmxpbmVTdGFydFwiLFxuICBcIk9PZmZzZXRJbmxpbmVTdGFydFwiLFxuICBcIm9wYWNpdHlcIixcbiAgXCJNb3pPcGFjaXR5XCIsXG4gIFwiV2Via2l0T3BhY2l0eVwiLFxuICBcIk1TT3BhY2l0eVwiLFxuICBcIk9PcGFjaXR5XCIsXG4gIFwib3JkZXJcIixcbiAgXCJNb3pPcmRlclwiLFxuICBcIldlYmtpdE9yZGVyXCIsXG4gIFwiTVNPcmRlclwiLFxuICBcIk9PcmRlclwiLFxuICBcIm9ycGhhbnNcIixcbiAgXCJNb3pPcnBoYW5zXCIsXG4gIFwiV2Via2l0T3JwaGFuc1wiLFxuICBcIk1TT3JwaGFuc1wiLFxuICBcIk9PcnBoYW5zXCIsXG4gIFwib3V0bGluZVwiLFxuICBcIk1vek91dGxpbmVcIixcbiAgXCJXZWJraXRPdXRsaW5lXCIsXG4gIFwiTVNPdXRsaW5lXCIsXG4gIFwiT091dGxpbmVcIixcbiAgXCJvdXRsaW5lQ29sb3JcIixcbiAgXCJNb3pPdXRsaW5lQ29sb3JcIixcbiAgXCJXZWJraXRPdXRsaW5lQ29sb3JcIixcbiAgXCJNU091dGxpbmVDb2xvclwiLFxuICBcIk9PdXRsaW5lQ29sb3JcIixcbiAgXCJvdXRsaW5lT2Zmc2V0XCIsXG4gIFwiTW96T3V0bGluZU9mZnNldFwiLFxuICBcIldlYmtpdE91dGxpbmVPZmZzZXRcIixcbiAgXCJNU091dGxpbmVPZmZzZXRcIixcbiAgXCJPT3V0bGluZU9mZnNldFwiLFxuICBcIm91dGxpbmVTdHlsZVwiLFxuICBcIk1vek91dGxpbmVTdHlsZVwiLFxuICBcIldlYmtpdE91dGxpbmVTdHlsZVwiLFxuICBcIk1TT3V0bGluZVN0eWxlXCIsXG4gIFwiT091dGxpbmVTdHlsZVwiLFxuICBcIm91dGxpbmVXaWR0aFwiLFxuICBcIk1vek91dGxpbmVXaWR0aFwiLFxuICBcIldlYmtpdE91dGxpbmVXaWR0aFwiLFxuICBcIk1TT3V0bGluZVdpZHRoXCIsXG4gIFwiT091dGxpbmVXaWR0aFwiLFxuICBcIm92ZXJmbG93XCIsXG4gIFwiTW96T3ZlcmZsb3dcIixcbiAgXCJXZWJraXRPdmVyZmxvd1wiLFxuICBcIk1TT3ZlcmZsb3dcIixcbiAgXCJPT3ZlcmZsb3dcIixcbiAgXCJvdmVyZmxvd1dyYXBcIixcbiAgXCJNb3pPdmVyZmxvd1dyYXBcIixcbiAgXCJXZWJraXRPdmVyZmxvd1dyYXBcIixcbiAgXCJNU092ZXJmbG93V3JhcFwiLFxuICBcIk9PdmVyZmxvd1dyYXBcIixcbiAgXCJvdmVyZmxvd1hcIixcbiAgXCJNb3pPdmVyZmxvd1hcIixcbiAgXCJXZWJraXRPdmVyZmxvd1hcIixcbiAgXCJNU092ZXJmbG93WFwiLFxuICBcIk9PdmVyZmxvd1hcIixcbiAgXCJvdmVyZmxvd1lcIixcbiAgXCJNb3pPdmVyZmxvd1lcIixcbiAgXCJXZWJraXRPdmVyZmxvd1lcIixcbiAgXCJNU092ZXJmbG93WVwiLFxuICBcIk9PdmVyZmxvd1lcIixcbiAgXCJwYWRkaW5nXCIsXG4gIFwiTW96UGFkZGluZ1wiLFxuICBcIldlYmtpdFBhZGRpbmdcIixcbiAgXCJNU1BhZGRpbmdcIixcbiAgXCJPUGFkZGluZ1wiLFxuICBcInBhZGRpbmdCbG9ja0VuZFwiLFxuICBcIk1velBhZGRpbmdCbG9ja0VuZFwiLFxuICBcIldlYmtpdFBhZGRpbmdCbG9ja0VuZFwiLFxuICBcIk1TUGFkZGluZ0Jsb2NrRW5kXCIsXG4gIFwiT1BhZGRpbmdCbG9ja0VuZFwiLFxuICBcInBhZGRpbmdCbG9ja1N0YXJ0XCIsXG4gIFwiTW96UGFkZGluZ0Jsb2NrU3RhcnRcIixcbiAgXCJXZWJraXRQYWRkaW5nQmxvY2tTdGFydFwiLFxuICBcIk1TUGFkZGluZ0Jsb2NrU3RhcnRcIixcbiAgXCJPUGFkZGluZ0Jsb2NrU3RhcnRcIixcbiAgXCJwYWRkaW5nQm90dG9tXCIsXG4gIFwiTW96UGFkZGluZ0JvdHRvbVwiLFxuICBcIldlYmtpdFBhZGRpbmdCb3R0b21cIixcbiAgXCJNU1BhZGRpbmdCb3R0b21cIixcbiAgXCJPUGFkZGluZ0JvdHRvbVwiLFxuICBcInBhZGRpbmdJbmxpbmVFbmRcIixcbiAgXCJNb3pQYWRkaW5nSW5saW5lRW5kXCIsXG4gIFwiV2Via2l0UGFkZGluZ0lubGluZUVuZFwiLFxuICBcIk1TUGFkZGluZ0lubGluZUVuZFwiLFxuICBcIk9QYWRkaW5nSW5saW5lRW5kXCIsXG4gIFwicGFkZGluZ0lubGluZVN0YXJ0XCIsXG4gIFwiTW96UGFkZGluZ0lubGluZVN0YXJ0XCIsXG4gIFwiV2Via2l0UGFkZGluZ0lubGluZVN0YXJ0XCIsXG4gIFwiTVNQYWRkaW5nSW5saW5lU3RhcnRcIixcbiAgXCJPUGFkZGluZ0lubGluZVN0YXJ0XCIsXG4gIFwicGFkZGluZ0xlZnRcIixcbiAgXCJNb3pQYWRkaW5nTGVmdFwiLFxuICBcIldlYmtpdFBhZGRpbmdMZWZ0XCIsXG4gIFwiTVNQYWRkaW5nTGVmdFwiLFxuICBcIk9QYWRkaW5nTGVmdFwiLFxuICBcInBhZGRpbmdSaWdodFwiLFxuICBcIk1velBhZGRpbmdSaWdodFwiLFxuICBcIldlYmtpdFBhZGRpbmdSaWdodFwiLFxuICBcIk1TUGFkZGluZ1JpZ2h0XCIsXG4gIFwiT1BhZGRpbmdSaWdodFwiLFxuICBcInBhZGRpbmdUb3BcIixcbiAgXCJNb3pQYWRkaW5nVG9wXCIsXG4gIFwiV2Via2l0UGFkZGluZ1RvcFwiLFxuICBcIk1TUGFkZGluZ1RvcFwiLFxuICBcIk9QYWRkaW5nVG9wXCIsXG4gIFwicGFnZUJyZWFrQWZ0ZXJcIixcbiAgXCJNb3pQYWdlQnJlYWtBZnRlclwiLFxuICBcIldlYmtpdFBhZ2VCcmVha0FmdGVyXCIsXG4gIFwiTVNQYWdlQnJlYWtBZnRlclwiLFxuICBcIk9QYWdlQnJlYWtBZnRlclwiLFxuICBcInBhZ2VCcmVha0JlZm9yZVwiLFxuICBcIk1velBhZ2VCcmVha0JlZm9yZVwiLFxuICBcIldlYmtpdFBhZ2VCcmVha0JlZm9yZVwiLFxuICBcIk1TUGFnZUJyZWFrQmVmb3JlXCIsXG4gIFwiT1BhZ2VCcmVha0JlZm9yZVwiLFxuICBcInBhZ2VCcmVha0luc2lkZVwiLFxuICBcIk1velBhZ2VCcmVha0luc2lkZVwiLFxuICBcIldlYmtpdFBhZ2VCcmVha0luc2lkZVwiLFxuICBcIk1TUGFnZUJyZWFrSW5zaWRlXCIsXG4gIFwiT1BhZ2VCcmVha0luc2lkZVwiLFxuICBcInBjXCIsXG4gIFwiTW96UGNcIixcbiAgXCJXZWJraXRQY1wiLFxuICBcIk1TUGNcIixcbiAgXCJPUGNcIixcbiAgXCJwZXJzcGVjdGl2ZVwiLFxuICBcIk1velBlcnNwZWN0aXZlXCIsXG4gIFwiV2Via2l0UGVyc3BlY3RpdmVcIixcbiAgXCJNU1BlcnNwZWN0aXZlXCIsXG4gIFwiT1BlcnNwZWN0aXZlXCIsXG4gIFwicGVyc3BlY3RpdmVPcmlnaW5cIixcbiAgXCJNb3pQZXJzcGVjdGl2ZU9yaWdpblwiLFxuICBcIldlYmtpdFBlcnNwZWN0aXZlT3JpZ2luXCIsXG4gIFwiTVNQZXJzcGVjdGl2ZU9yaWdpblwiLFxuICBcIk9QZXJzcGVjdGl2ZU9yaWdpblwiLFxuICBcInBvaW50ZXJFdmVudHNcIixcbiAgXCJNb3pQb2ludGVyRXZlbnRzXCIsXG4gIFwiV2Via2l0UG9pbnRlckV2ZW50c1wiLFxuICBcIk1TUG9pbnRlckV2ZW50c1wiLFxuICBcIk9Qb2ludGVyRXZlbnRzXCIsXG4gIFwicG9zaXRpb25cIixcbiAgXCJNb3pQb3NpdGlvblwiLFxuICBcIldlYmtpdFBvc2l0aW9uXCIsXG4gIFwiTVNQb3NpdGlvblwiLFxuICBcIk9Qb3NpdGlvblwiLFxuICBcInB0XCIsXG4gIFwiTW96UHRcIixcbiAgXCJXZWJraXRQdFwiLFxuICBcIk1TUHRcIixcbiAgXCJPUHRcIixcbiAgXCJweFwiLFxuICBcIk1velB4XCIsXG4gIFwiV2Via2l0UHhcIixcbiAgXCJNU1B4XCIsXG4gIFwiT1B4XCIsXG4gIFwicVwiLFxuICBcIk1velFcIixcbiAgXCJXZWJraXRRXCIsXG4gIFwiTVNRXCIsXG4gIFwiT1FcIixcbiAgXCJxdW90ZXNcIixcbiAgXCJNb3pRdW90ZXNcIixcbiAgXCJXZWJraXRRdW90ZXNcIixcbiAgXCJNU1F1b3Rlc1wiLFxuICBcIk9RdW90ZXNcIixcbiAgXCJyYWRcIixcbiAgXCJNb3pSYWRcIixcbiAgXCJXZWJraXRSYWRcIixcbiAgXCJNU1JhZFwiLFxuICBcIk9SYWRcIixcbiAgXCJyZW1cIixcbiAgXCJNb3pSZW1cIixcbiAgXCJXZWJraXRSZW1cIixcbiAgXCJNU1JlbVwiLFxuICBcIk9SZW1cIixcbiAgXCJyZXNpemVcIixcbiAgXCJNb3pSZXNpemVcIixcbiAgXCJXZWJraXRSZXNpemVcIixcbiAgXCJNU1Jlc2l6ZVwiLFxuICBcIk9SZXNpemVcIixcbiAgXCJyZXZlcnRcIixcbiAgXCJNb3pSZXZlcnRcIixcbiAgXCJXZWJraXRSZXZlcnRcIixcbiAgXCJNU1JldmVydFwiLFxuICBcIk9SZXZlcnRcIixcbiAgXCJyaWdodFwiLFxuICBcIk1velJpZ2h0XCIsXG4gIFwiV2Via2l0UmlnaHRcIixcbiAgXCJNU1JpZ2h0XCIsXG4gIFwiT1JpZ2h0XCIsXG4gIFwicnVieUFsaWduXCIsXG4gIFwiTW96UnVieUFsaWduXCIsXG4gIFwiV2Via2l0UnVieUFsaWduXCIsXG4gIFwiTVNSdWJ5QWxpZ25cIixcbiAgXCJPUnVieUFsaWduXCIsXG4gIFwicnVieU1lcmdlXCIsXG4gIFwiTW96UnVieU1lcmdlXCIsXG4gIFwiV2Via2l0UnVieU1lcmdlXCIsXG4gIFwiTVNSdWJ5TWVyZ2VcIixcbiAgXCJPUnVieU1lcmdlXCIsXG4gIFwicnVieVBvc2l0aW9uXCIsXG4gIFwiTW96UnVieVBvc2l0aW9uXCIsXG4gIFwiV2Via2l0UnVieVBvc2l0aW9uXCIsXG4gIFwiTVNSdWJ5UG9zaXRpb25cIixcbiAgXCJPUnVieVBvc2l0aW9uXCIsXG4gIFwic1wiLFxuICBcIk1velNcIixcbiAgXCJXZWJraXRTXCIsXG4gIFwiTVNTXCIsXG4gIFwiT1NcIixcbiAgXCJzY3JvbGxCZWhhdmlvclwiLFxuICBcIk1velNjcm9sbEJlaGF2aW9yXCIsXG4gIFwiV2Via2l0U2Nyb2xsQmVoYXZpb3JcIixcbiAgXCJNU1Njcm9sbEJlaGF2aW9yXCIsXG4gIFwiT1Njcm9sbEJlaGF2aW9yXCIsXG4gIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIixcbiAgXCJNb3pTY3JvbGxTbmFwQ29vcmRpbmF0ZVwiLFxuICBcIldlYmtpdFNjcm9sbFNuYXBDb29yZGluYXRlXCIsXG4gIFwiTVNTY3JvbGxTbmFwQ29vcmRpbmF0ZVwiLFxuICBcIk9TY3JvbGxTbmFwQ29vcmRpbmF0ZVwiLFxuICBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiLFxuICBcIk1velNjcm9sbFNuYXBEZXN0aW5hdGlvblwiLFxuICBcIldlYmtpdFNjcm9sbFNuYXBEZXN0aW5hdGlvblwiLFxuICBcIk1TU2Nyb2xsU25hcERlc3RpbmF0aW9uXCIsXG4gIFwiT1Njcm9sbFNuYXBEZXN0aW5hdGlvblwiLFxuICBcInNjcm9sbFNuYXBUeXBlXCIsXG4gIFwiTW96U2Nyb2xsU25hcFR5cGVcIixcbiAgXCJXZWJraXRTY3JvbGxTbmFwVHlwZVwiLFxuICBcIk1TU2Nyb2xsU25hcFR5cGVcIixcbiAgXCJPU2Nyb2xsU25hcFR5cGVcIixcbiAgXCJzaGFwZUltYWdlVGhyZXNob2xkXCIsXG4gIFwiTW96U2hhcGVJbWFnZVRocmVzaG9sZFwiLFxuICBcIldlYmtpdFNoYXBlSW1hZ2VUaHJlc2hvbGRcIixcbiAgXCJNU1NoYXBlSW1hZ2VUaHJlc2hvbGRcIixcbiAgXCJPU2hhcGVJbWFnZVRocmVzaG9sZFwiLFxuICBcInNoYXBlTWFyZ2luXCIsXG4gIFwiTW96U2hhcGVNYXJnaW5cIixcbiAgXCJXZWJraXRTaGFwZU1hcmdpblwiLFxuICBcIk1TU2hhcGVNYXJnaW5cIixcbiAgXCJPU2hhcGVNYXJnaW5cIixcbiAgXCJzaGFwZU91dHNpZGVcIixcbiAgXCJNb3pTaGFwZU91dHNpZGVcIixcbiAgXCJXZWJraXRTaGFwZU91dHNpZGVcIixcbiAgXCJNU1NoYXBlT3V0c2lkZVwiLFxuICBcIk9TaGFwZU91dHNpZGVcIixcbiAgXCJ0YWJTaXplXCIsXG4gIFwiTW96VGFiU2l6ZVwiLFxuICBcIldlYmtpdFRhYlNpemVcIixcbiAgXCJNU1RhYlNpemVcIixcbiAgXCJPVGFiU2l6ZVwiLFxuICBcInRhYmxlTGF5b3V0XCIsXG4gIFwiTW96VGFibGVMYXlvdXRcIixcbiAgXCJXZWJraXRUYWJsZUxheW91dFwiLFxuICBcIk1TVGFibGVMYXlvdXRcIixcbiAgXCJPVGFibGVMYXlvdXRcIixcbiAgXCJ0ZXh0QWxpZ25cIixcbiAgXCJNb3pUZXh0QWxpZ25cIixcbiAgXCJXZWJraXRUZXh0QWxpZ25cIixcbiAgXCJNU1RleHRBbGlnblwiLFxuICBcIk9UZXh0QWxpZ25cIixcbiAgXCJ0ZXh0QWxpZ25MYXN0XCIsXG4gIFwiTW96VGV4dEFsaWduTGFzdFwiLFxuICBcIldlYmtpdFRleHRBbGlnbkxhc3RcIixcbiAgXCJNU1RleHRBbGlnbkxhc3RcIixcbiAgXCJPVGV4dEFsaWduTGFzdFwiLFxuICBcInRleHRDb21iaW5lVXByaWdodFwiLFxuICBcIk1velRleHRDb21iaW5lVXByaWdodFwiLFxuICBcIldlYmtpdFRleHRDb21iaW5lVXByaWdodFwiLFxuICBcIk1TVGV4dENvbWJpbmVVcHJpZ2h0XCIsXG4gIFwiT1RleHRDb21iaW5lVXByaWdodFwiLFxuICBcInRleHREZWNvcmF0aW9uXCIsXG4gIFwiTW96VGV4dERlY29yYXRpb25cIixcbiAgXCJXZWJraXRUZXh0RGVjb3JhdGlvblwiLFxuICBcIk1TVGV4dERlY29yYXRpb25cIixcbiAgXCJPVGV4dERlY29yYXRpb25cIixcbiAgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCIsXG4gIFwiTW96VGV4dERlY29yYXRpb25Db2xvclwiLFxuICBcIldlYmtpdFRleHREZWNvcmF0aW9uQ29sb3JcIixcbiAgXCJNU1RleHREZWNvcmF0aW9uQ29sb3JcIixcbiAgXCJPVGV4dERlY29yYXRpb25Db2xvclwiLFxuICBcInRleHREZWNvcmF0aW9uTGluZVwiLFxuICBcIk1velRleHREZWNvcmF0aW9uTGluZVwiLFxuICBcIldlYmtpdFRleHREZWNvcmF0aW9uTGluZVwiLFxuICBcIk1TVGV4dERlY29yYXRpb25MaW5lXCIsXG4gIFwiT1RleHREZWNvcmF0aW9uTGluZVwiLFxuICBcInRleHREZWNvcmF0aW9uU3R5bGVcIixcbiAgXCJNb3pUZXh0RGVjb3JhdGlvblN0eWxlXCIsXG4gIFwiV2Via2l0VGV4dERlY29yYXRpb25TdHlsZVwiLFxuICBcIk1TVGV4dERlY29yYXRpb25TdHlsZVwiLFxuICBcIk9UZXh0RGVjb3JhdGlvblN0eWxlXCIsXG4gIFwidGV4dEVtcGhhc2lzXCIsXG4gIFwiTW96VGV4dEVtcGhhc2lzXCIsXG4gIFwiV2Via2l0VGV4dEVtcGhhc2lzXCIsXG4gIFwiTVNUZXh0RW1waGFzaXNcIixcbiAgXCJPVGV4dEVtcGhhc2lzXCIsXG4gIFwidGV4dEVtcGhhc2lzQ29sb3JcIixcbiAgXCJNb3pUZXh0RW1waGFzaXNDb2xvclwiLFxuICBcIldlYmtpdFRleHRFbXBoYXNpc0NvbG9yXCIsXG4gIFwiTVNUZXh0RW1waGFzaXNDb2xvclwiLFxuICBcIk9UZXh0RW1waGFzaXNDb2xvclwiLFxuICBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCIsXG4gIFwiTW96VGV4dEVtcGhhc2lzUG9zaXRpb25cIixcbiAgXCJXZWJraXRUZXh0RW1waGFzaXNQb3NpdGlvblwiLFxuICBcIk1TVGV4dEVtcGhhc2lzUG9zaXRpb25cIixcbiAgXCJPVGV4dEVtcGhhc2lzUG9zaXRpb25cIixcbiAgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiLFxuICBcIk1velRleHRFbXBoYXNpc1N0eWxlXCIsXG4gIFwiV2Via2l0VGV4dEVtcGhhc2lzU3R5bGVcIixcbiAgXCJNU1RleHRFbXBoYXNpc1N0eWxlXCIsXG4gIFwiT1RleHRFbXBoYXNpc1N0eWxlXCIsXG4gIFwidGV4dEluZGVudFwiLFxuICBcIk1velRleHRJbmRlbnRcIixcbiAgXCJXZWJraXRUZXh0SW5kZW50XCIsXG4gIFwiTVNUZXh0SW5kZW50XCIsXG4gIFwiT1RleHRJbmRlbnRcIixcbiAgXCJ0ZXh0T3JpZW50YXRpb25cIixcbiAgXCJNb3pUZXh0T3JpZW50YXRpb25cIixcbiAgXCJXZWJraXRUZXh0T3JpZW50YXRpb25cIixcbiAgXCJNU1RleHRPcmllbnRhdGlvblwiLFxuICBcIk9UZXh0T3JpZW50YXRpb25cIixcbiAgXCJ0ZXh0T3ZlcmZsb3dcIixcbiAgXCJNb3pUZXh0T3ZlcmZsb3dcIixcbiAgXCJXZWJraXRUZXh0T3ZlcmZsb3dcIixcbiAgXCJNU1RleHRPdmVyZmxvd1wiLFxuICBcIk9UZXh0T3ZlcmZsb3dcIixcbiAgXCJ0ZXh0UmVuZGVyaW5nXCIsXG4gIFwiTW96VGV4dFJlbmRlcmluZ1wiLFxuICBcIldlYmtpdFRleHRSZW5kZXJpbmdcIixcbiAgXCJNU1RleHRSZW5kZXJpbmdcIixcbiAgXCJPVGV4dFJlbmRlcmluZ1wiLFxuICBcInRleHRTaGFkb3dcIixcbiAgXCJNb3pUZXh0U2hhZG93XCIsXG4gIFwiV2Via2l0VGV4dFNoYWRvd1wiLFxuICBcIk1TVGV4dFNoYWRvd1wiLFxuICBcIk9UZXh0U2hhZG93XCIsXG4gIFwidGV4dFRyYW5zZm9ybVwiLFxuICBcIk1velRleHRUcmFuc2Zvcm1cIixcbiAgXCJXZWJraXRUZXh0VHJhbnNmb3JtXCIsXG4gIFwiTVNUZXh0VHJhbnNmb3JtXCIsXG4gIFwiT1RleHRUcmFuc2Zvcm1cIixcbiAgXCJ0ZXh0VW5kZXJsaW5lUG9zaXRpb25cIixcbiAgXCJNb3pUZXh0VW5kZXJsaW5lUG9zaXRpb25cIixcbiAgXCJXZWJraXRUZXh0VW5kZXJsaW5lUG9zaXRpb25cIixcbiAgXCJNU1RleHRVbmRlcmxpbmVQb3NpdGlvblwiLFxuICBcIk9UZXh0VW5kZXJsaW5lUG9zaXRpb25cIixcbiAgXCJ0b3BcIixcbiAgXCJNb3pUb3BcIixcbiAgXCJXZWJraXRUb3BcIixcbiAgXCJNU1RvcFwiLFxuICBcIk9Ub3BcIixcbiAgXCJ0b3VjaEFjdGlvblwiLFxuICBcIk1velRvdWNoQWN0aW9uXCIsXG4gIFwiV2Via2l0VG91Y2hBY3Rpb25cIixcbiAgXCJNU1RvdWNoQWN0aW9uXCIsXG4gIFwiT1RvdWNoQWN0aW9uXCIsXG4gIFwidHJhbnNmb3JtXCIsXG4gIFwiTW96VHJhbnNmb3JtXCIsXG4gIFwiV2Via2l0VHJhbnNmb3JtXCIsXG4gIFwibXNUcmFuc2Zvcm1cIixcbiAgXCJPVHJhbnNmb3JtXCIsXG4gIFwidHJhbnNmb3JtQm94XCIsXG4gIFwiTW96VHJhbnNmb3JtQm94XCIsXG4gIFwiV2Via2l0VHJhbnNmb3JtQm94XCIsXG4gIFwiTVNUcmFuc2Zvcm1Cb3hcIixcbiAgXCJPVHJhbnNmb3JtQm94XCIsXG4gIFwidHJhbnNmb3JtT3JpZ2luXCIsXG4gIFwiTW96VHJhbnNmb3JtT3JpZ2luXCIsXG4gIFwiV2Via2l0VHJhbnNmb3JtT3JpZ2luXCIsXG4gIFwiTVNUcmFuc2Zvcm1PcmlnaW5cIixcbiAgXCJPVHJhbnNmb3JtT3JpZ2luXCIsXG4gIFwidHJhbnNmb3JtU3R5bGVcIixcbiAgXCJNb3pUcmFuc2Zvcm1TdHlsZVwiLFxuICBcIldlYmtpdFRyYW5zZm9ybVN0eWxlXCIsXG4gIFwiTVNUcmFuc2Zvcm1TdHlsZVwiLFxuICBcIk9UcmFuc2Zvcm1TdHlsZVwiLFxuICBcInRyYW5zaXRpb25cIixcbiAgXCJNb3pUcmFuc2l0aW9uXCIsXG4gIFwiV2Via2l0VHJhbnNpdGlvblwiLFxuICBcIk1TVHJhbnNpdGlvblwiLFxuICBcIk9UcmFuc2l0aW9uXCIsXG4gIFwidHJhbnNpdGlvbkRlbGF5XCIsXG4gIFwiTW96VHJhbnNpdGlvbkRlbGF5XCIsXG4gIFwiV2Via2l0VHJhbnNpdGlvbkRlbGF5XCIsXG4gIFwiTVNUcmFuc2l0aW9uRGVsYXlcIixcbiAgXCJPVHJhbnNpdGlvbkRlbGF5XCIsXG4gIFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsXG4gIFwiTW96VHJhbnNpdGlvbkR1cmF0aW9uXCIsXG4gIFwiV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXCIsXG4gIFwiTVNUcmFuc2l0aW9uRHVyYXRpb25cIixcbiAgXCJPVHJhbnNpdGlvbkR1cmF0aW9uXCIsXG4gIFwidHJhbnNpdGlvblByb3BlcnR5XCIsXG4gIFwiTW96VHJhbnNpdGlvblByb3BlcnR5XCIsXG4gIFwiV2Via2l0VHJhbnNpdGlvblByb3BlcnR5XCIsXG4gIFwiTVNUcmFuc2l0aW9uUHJvcGVydHlcIixcbiAgXCJPVHJhbnNpdGlvblByb3BlcnR5XCIsXG4gIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiTW96VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiV2Via2l0VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwiTVNUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIixcbiAgXCJPVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIsXG4gIFwidHVyblwiLFxuICBcIk1velR1cm5cIixcbiAgXCJXZWJraXRUdXJuXCIsXG4gIFwiTVNUdXJuXCIsXG4gIFwiT1R1cm5cIixcbiAgXCJ1bmljb2RlQmlkaVwiLFxuICBcIk1velVuaWNvZGVCaWRpXCIsXG4gIFwiV2Via2l0VW5pY29kZUJpZGlcIixcbiAgXCJNU1VuaWNvZGVCaWRpXCIsXG4gIFwiT1VuaWNvZGVCaWRpXCIsXG4gIFwidW5zZXRcIixcbiAgXCJNb3pVbnNldFwiLFxuICBcIldlYmtpdFVuc2V0XCIsXG4gIFwiTVNVbnNldFwiLFxuICBcIk9VbnNldFwiLFxuICBcInZlcnRpY2FsQWxpZ25cIixcbiAgXCJNb3pWZXJ0aWNhbEFsaWduXCIsXG4gIFwiV2Via2l0VmVydGljYWxBbGlnblwiLFxuICBcIk1TVmVydGljYWxBbGlnblwiLFxuICBcIk9WZXJ0aWNhbEFsaWduXCIsXG4gIFwidmhcIixcbiAgXCJNb3pWaFwiLFxuICBcIldlYmtpdFZoXCIsXG4gIFwiTVNWaFwiLFxuICBcIk9WaFwiLFxuICBcInZpc2liaWxpdHlcIixcbiAgXCJNb3pWaXNpYmlsaXR5XCIsXG4gIFwiV2Via2l0VmlzaWJpbGl0eVwiLFxuICBcIk1TVmlzaWJpbGl0eVwiLFxuICBcIk9WaXNpYmlsaXR5XCIsXG4gIFwidm1heFwiLFxuICBcIk1velZtYXhcIixcbiAgXCJXZWJraXRWbWF4XCIsXG4gIFwiTVNWbWF4XCIsXG4gIFwiT1ZtYXhcIixcbiAgXCJ2bWluXCIsXG4gIFwiTW96Vm1pblwiLFxuICBcIldlYmtpdFZtaW5cIixcbiAgXCJNU1ZtaW5cIixcbiAgXCJPVm1pblwiLFxuICBcInZ3XCIsXG4gIFwiTW96VndcIixcbiAgXCJXZWJraXRWd1wiLFxuICBcIk1TVndcIixcbiAgXCJPVndcIixcbiAgXCJ3aGl0ZVNwYWNlXCIsXG4gIFwiTW96V2hpdGVTcGFjZVwiLFxuICBcIldlYmtpdFdoaXRlU3BhY2VcIixcbiAgXCJNU1doaXRlU3BhY2VcIixcbiAgXCJPV2hpdGVTcGFjZVwiLFxuICBcIndpZG93c1wiLFxuICBcIk1veldpZG93c1wiLFxuICBcIldlYmtpdFdpZG93c1wiLFxuICBcIk1TV2lkb3dzXCIsXG4gIFwiT1dpZG93c1wiLFxuICBcIndpZHRoXCIsXG4gIFwiTW96V2lkdGhcIixcbiAgXCJXZWJraXRXaWR0aFwiLFxuICBcIk1TV2lkdGhcIixcbiAgXCJPV2lkdGhcIixcbiAgXCJ3aWxsQ2hhbmdlXCIsXG4gIFwiTW96V2lsbENoYW5nZVwiLFxuICBcIldlYmtpdFdpbGxDaGFuZ2VcIixcbiAgXCJNU1dpbGxDaGFuZ2VcIixcbiAgXCJPV2lsbENoYW5nZVwiLFxuICBcIndvcmRCcmVha1wiLFxuICBcIk1veldvcmRCcmVha1wiLFxuICBcIldlYmtpdFdvcmRCcmVha1wiLFxuICBcIk1TV29yZEJyZWFrXCIsXG4gIFwiT1dvcmRCcmVha1wiLFxuICBcIndvcmRTcGFjaW5nXCIsXG4gIFwiTW96V29yZFNwYWNpbmdcIixcbiAgXCJXZWJraXRXb3JkU3BhY2luZ1wiLFxuICBcIk1TV29yZFNwYWNpbmdcIixcbiAgXCJPV29yZFNwYWNpbmdcIixcbiAgXCJ3b3JkV3JhcFwiLFxuICBcIk1veldvcmRXcmFwXCIsXG4gIFwiV2Via2l0V29yZFdyYXBcIixcbiAgXCJNU1dvcmRXcmFwXCIsXG4gIFwiT1dvcmRXcmFwXCIsXG4gIFwid3JpdGluZ01vZGVcIixcbiAgXCJNb3pXcml0aW5nTW9kZVwiLFxuICBcIldlYmtpdFdyaXRpbmdNb2RlXCIsXG4gIFwiTVNXcml0aW5nTW9kZVwiLFxuICBcIk9Xcml0aW5nTW9kZVwiLFxuICBcInpJbmRleFwiLFxuICBcIk1velpJbmRleFwiLFxuICBcIldlYmtpdFpJbmRleFwiLFxuICBcIk1TWkluZGV4XCIsXG4gIFwiT1pJbmRleFwiLFxuICBcImZvbnRTaXplXCIsXG4gIFwiTW96Rm9udFNpemVcIixcbiAgXCJXZWJraXRGb250U2l6ZVwiLFxuICBcIk1TRm9udFNpemVcIixcbiAgXCJPRm9udFNpemVcIixcbiAgXCJmbGV4XCIsXG4gIFwiTW96RmxleFwiLFxuICBcIldlYmtpdEZsZXhcIixcbiAgXCJNU0ZsZXhcIixcbiAgXCJPRmxleFwiLFxuICBcImZyXCIsXG4gIFwiTW96RnJcIixcbiAgXCJXZWJraXRGclwiLFxuICBcIk1TRnJcIixcbiAgXCJPRnJcIixcbiAgXCJvdmVyZmxvd1Njcm9sbGluZ1wiLFxuICBcIk1vek92ZXJmbG93U2Nyb2xsaW5nXCIsXG4gIFwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdcIixcbiAgXCJNU092ZXJmbG93U2Nyb2xsaW5nXCIsXG4gIFwiT092ZXJmbG93U2Nyb2xsaW5nXCJcbl1cbiIsInZhciBwcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9jc3MtcHJvcGVydGllcy5qcycpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIHN0eWxlcyA9IHByb3BzW3Byb3BOYW1lXTtcbiAgaWYgKCFzdHlsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZmFpbHVyZXMgPSBbXTtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlS2V5KXtcbiAgICBpZiAocHJvcGVydGllcy5pbmRleE9mKHN0eWxlS2V5KSA9PT0gLTEpIHtcbiAgICAgIGZhaWx1cmVzLnB1c2goc3R5bGVLZXkpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChmYWlsdXJlcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3AgJyArIHByb3BOYW1lICsgJyBwYXNzZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLiBIYXMgaW52YWxpZCBrZXlzICcgKyBmYWlsdXJlcy5qb2luKCcsICcpKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAoIXByb3BzW3Byb3BOYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvcCAnICsgcHJvcE5hbWUgKyAnIHBhc3NlZCB0byAnICsgY29tcG9uZW50TmFtZSArICcgaXMgcmVxdWlyZWQnKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLnN1cHBvcnRpbmdBcnJheXMgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLmFycmF5T2YobW9kdWxlLmV4cG9ydHMpLFxuICBtb2R1bGUuZXhwb3J0c1xuXSk7XG4iXX0=

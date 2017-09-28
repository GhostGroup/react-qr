'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qrImage = require('qr-image');

var _qrImage2 = _interopRequireDefault(_qrImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactQR = function (_Component) {
  _inherits(ReactQR, _Component);

  function ReactQR() {
    _classCallCheck(this, ReactQR);

    return _possibleConstructorReturn(this, (ReactQR.__proto__ || Object.getPrototypeOf(ReactQR)).apply(this, arguments));
  }

  _createClass(ReactQR, [{
    key: 'render',
    value: function render() {
      var pngBuffer = _qrImage2.default.imageSync(this.props.text, { type: 'png', margin: 1 });
      var dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64');
      return _react2.default.createElement('img', { className: 'react-qr', src: dataURI });
    }
  }]);

  return ReactQR;
}(_react.Component);

ReactQR.displayName = 'ReactQR';
ReactQR.propTypes = _propTypes2.default.string.isRequired;

module.exports = ReactQR;

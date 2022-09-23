"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithInteractions = exports.AnchorWrapper = exports.buttonWrapper = exports.AllButtons = exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _Icon = require("./Icon");

var _StoryLinkWrapper = require("./StoryLinkWrapper");

var _testingLibrary = require("@storybook/testing-library");

var _jest = require("@storybook/jest");

var _templateObject;

var CustomButton = _styledComponents.default.button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border: 1px solid green;\n  background: lightgreen;\n  color: rebeccapurple;\n  padding: 1em;\n  font-size: 1.2em;\n"])));

function ButtonWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(CustomButton, props);
}

var _default = {
  title: 'Design System/Button',
  component: _Button.Button
};
exports.default = _default;

var AllButtons = function AllButtons(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primary"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "secondary"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "tertiary"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primaryOutline"
  }, "Outline primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "secondaryOutline"
  }, "Outline secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primary",
    isDisabled: true
  }, "Disabled"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primary",
    isLoading: true
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "secondary",
    isLoading: true
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "tertiary",
    isLoading: true
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline",
    isLoading: true
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline",
    isLoading: true,
    loadingText: "Custom..."
  }, "Outline"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primary",
    size: "small"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "secondary",
    size: "small"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "tertiary",
    size: "small"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline",
    size: "small"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primary",
    isDisabled: true,
    size: "small"
  }, "Disabled"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline",
    size: "small",
    containsIcon: true
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline",
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link"
  }), "Link"));
};

exports.AllButtons = AllButtons;
AllButtons.storyName = 'all buttons';

var buttonWrapper = function buttonWrapper(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(ButtonWrapper, null, "Original Button Wrapper"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondary"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "tertiary"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primaryOutline"
  }, "Outline primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondaryOutline"
  }, "Outline secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    isDisabled: true
  }, "Disabled"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    isLoading: true
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondary",
    isLoading: true
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "tertiary",
    isLoading: true
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    isLoading: true
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    isLoading: true,
    loadingText: "Custom..."
  }, "Outline"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    size: "small"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondary",
    size: "small"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "tertiary",
    size: "small"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    size: "small"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    isDisabled: true,
    size: "small"
  }, "Disabled"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    size: "small",
    containsIcon: true
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link"
  }), "Link"));
};

exports.buttonWrapper = buttonWrapper;
buttonWrapper.storyName = 'button wrapper';

var AnchorWrapper = function AnchorWrapper(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_StoryLinkWrapper.StoryLinkWrapper, {
    to: "http://storybook.js.org"
  }, "Original Link Wrapper"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primary",
    href: "http://storybook.js.org"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "secondary",
    href: "http://storybook.js.org"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "tertiary",
    href: "http://storybook.js.org"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "outline",
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primaryOutline",
    href: "http://storybook.js.org"
  }, "Outline primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "secondaryOutline",
    href: "http://storybook.js.org"
  }, "Outline secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primary",
    isDisabled: true,
    href: "http://storybook.js.org"
  }, "Disabled"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primary",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "secondary",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "tertiary",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "outline",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "outline",
    isLoading: true,
    loadingText: "Custom...",
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primary",
    size: "small",
    href: "http://storybook.js.org"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "secondary",
    size: "small",
    href: "http://storybook.js.org"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "tertiary",
    size: "small",
    href: "http://storybook.js.org"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "outline",
    size: "small",
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primary",
    isDisabled: true,
    size: "small",
    href: "http://storybook.js.org"
  }, "Disabled"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "outline",
    size: "small",
    containsIcon: true,
    href: "http://storybook.js.org"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "outline",
    size: "small",
    href: "http://storybook.js.org"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link"
  }), "Link"));
};

exports.AnchorWrapper = AnchorWrapper;

var WithInteractions = function WithInteractions(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

exports.WithInteractions = WithInteractions;
WithInteractions.args = {
  appearance: 'primary',
  href: 'http://storybook.js.org',
  ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
  children: 'Button'
};

WithInteractions.play = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
    var canvasElement, canvas;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            canvasElement = _ref.canvasElement;
            // Assigns canvas to the component root element
            canvas = (0, _testingLibrary.within)(canvasElement);
            _context.next = 4;
            return _testingLibrary.userEvent.click(canvas.getByRole('link'));

          case 4:
            (0, _jest.expect)(canvas.getByRole('link')).toHaveAttribute('href', 'http://storybook.js.org');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

AnchorWrapper.storyName = 'anchor wrapper';
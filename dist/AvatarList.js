"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarList = AvatarList;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Avatar = require("./Avatar");

var _styles = require("./shared/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var UserAvatar = (0, _styledComponents.default)(_Avatar.Avatar)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  box-shadow: ", " 0 0 0 2px;\n  display: block;\n"])), _styles.color.lightest);

var UserEllipses = _styledComponents.default.li(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  font-size: ", "px;\n  color: ", ";\n  margin-left: 6px;\n  white-space: nowrap;\n"])), _styles.typography.size.s1, _styles.color.mediumdark);

var User = _styledComponents.default.li(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n"])));

var Users = _styledComponents.default.ul(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  vertical-align: top;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  ", " {\n    position: relative;\n\n    &:not(:first-child) {\n      margin-left: -6px;\n    }\n    &:nth-child(1) {\n      z-index: 3;\n    }\n    &:nth-child(2) {\n      z-index: 2;\n    }\n    &:nth-child(3) {\n      z-index: 1;\n    }\n  }\n"])), User); // Either pass the full list of users, or a userCount if known


function AvatarList(_ref) {
  var loading = _ref.loading,
      users = _ref.users,
      userCount = _ref.userCount,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, ["loading", "users", "userCount", "size"]);
  var count = userCount || users.length;
  return /*#__PURE__*/_react.default.createElement(Users, Object.assign({
    "aria-label": "users"
  }, props), users.slice(0, 3).map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        avatarUrl = _ref2.avatarUrl;
    return /*#__PURE__*/_react.default.createElement(User, {
      key: id
    }, /*#__PURE__*/_react.default.createElement(UserAvatar, {
      size: size,
      username: name,
      src: avatarUrl,
      loading: loading
    }));
  }), count > 3 && /*#__PURE__*/_react.default.createElement(UserEllipses, {
    "aria-label": "".concat(count - 3, " more user(s)")
  }, " ", "+ ", count - 3, " "));
}

AvatarList.defaultProps = {
  loading: false,
  users: [{
    id: "loading",
    avatarUrl: null,
    name: "loading"
  }, {
    id: "loading2",
    avatarUrl: null,
    name: "loading"
  }, {
    id: "loading3",
    avatarUrl: null,
    name: "loading"
  }],
  userCount: null,
  size: "medium"
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = exports.BigUserCount = exports.Ellipsized = exports.Loading = exports.SmallSize = exports.Short = exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _AvatarList = require("./AvatarList");

var _default = {
  title: 'Design System/AvatarList'
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_AvatarList.AvatarList, args);
};

var Short = Template.bind({});
exports.Short = Short;
Short.args = {
  users: [{
    id: '1',
    name: 'Dominic Nguyen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385'
  }, {
    id: '2',
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554'
  }]
};
var SmallSize = Template.bind({});
exports.SmallSize = SmallSize;
SmallSize.args = {
  users: Short.args.users,
  size: 'small'
};
var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = {
  loading: true
};
var Ellipsized = Template.bind({});
exports.Ellipsized = Ellipsized;
Ellipsized.args = {
  users: [].concat((0, _toConsumableArray2.default)(Short.args.users), [{
    id: '3',
    name: 'Zoltan Olah',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/81672'
  }, {
    id: '4',
    name: 'Tim Hingston',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709'
  }])
};
var BigUserCount = Template.bind({});
exports.BigUserCount = BigUserCount;
BigUserCount.args = {
  users: Ellipsized.args.users,
  userCount: 100
};
var Empty = Template.bind({});
exports.Empty = Empty;
Empty.args = {
  users: []
};
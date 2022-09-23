"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RechartsComponent;

function RechartsComponent(data) {
  /*#__PURE__*/
  React.createElement(ResponsiveContainer, {
    className: "chart",
    height: 300
  }, /*#__PURE__*/React.createElement(LineChart, {
    width: 600,
    height: 300,
    data: data,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/React.createElement(YAxis, null), /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement(Tooltip, null), /*#__PURE__*/React.createElement(Legend, null), /*#__PURE__*/React.createElement(Line, {
    type: "monotone",
    dataKey: "pv",
    stroke: "#8884d8",
    activeDot: {
      r: 8
    }
  }), /*#__PURE__*/React.createElement(Line, {
    type: "monotone",
    dataKey: "uv",
    stroke: "#82ca9d"
  })));
}
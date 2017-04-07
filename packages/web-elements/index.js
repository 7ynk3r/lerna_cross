var React = require('react');
var { BaseButton, BaseButtonColor } = require('base-elements');

// var WebButton = React.createClass({
//   render: function() {
//     return
//     // return (<p>{'hellow'}</p>);
//   }
// });

const WebButton = React.createElement(
  'h1',
  {},
  'MyButton!!!'
);


module.exports = {
  WebButton: WebButton,
  WebButtonColor: BaseButtonColor ,
};

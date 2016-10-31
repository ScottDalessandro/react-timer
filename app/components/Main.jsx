var React = require('react');
var Router = require('react-router');
var Nav = require('Nav');
var TimerControls = require('TimerControls');
var Timer = require('Timer');


var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.childern}
    </div>
    
  )
}


module.exports = Main;



// React.createClass({

// })
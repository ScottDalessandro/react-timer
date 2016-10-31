var React = require('react');


var TimerControls = React.createClass({
  render: function(){
    return (
      <div>
        <button type="button">Start</button>
        <button type='button'> Clear</button>
      </div>
    )
  }
});

module.exports = TimerControls;
var React = require('react');


var TimerControls = React.createClass({
  handleChange: function(newStatus){    
    return () => {      
      this.props.handleChange(newStatus);      
    }
  },
  // propTypes: {
  //   timerStatus: React.PropTypes.string.isRequired
  // },
  renderButtons: function(){
    if(this.props.timerStatus === 'stop'){
      return <button className='button expanded' onClick={this.handleChange('count')}>Start</button>
    } else if (this.props.timerStatus === 'count') {
      return <button className='button expanded' onClick={this.handleChange('stop')}>Stop</button>
    }
  },
  render: function(){
    
    
    return (
      <div>
        {this.renderButtons()}
        <button className='button expanded' onClick={this.handleChange('clear')}>Clear</button>        
      </div>
    )
  }
});

module.exports = TimerControls;
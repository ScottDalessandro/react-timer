var React = require('react');

var Clock = require('Clock');
var TimerControls = require('TimerControls');
var Controls = require('Controls');

var Timer = React.createClass({
  
  getInitialState: function(){
    return {
      count:0,
      timerStatus: "stop"
    };
  },
  componentDidUpdate: function(prevProps, prevState){    
    if(this.state.timerStatus !== prevState.timerStatus) {      
      switch(this.state.timerStatus){
        case 'count': 
          this.startTimer();
          break;
        case 'clear':          
          this.setState({
            count:0,
            timerStatus: 'stop'
          });
        case 'stop': 
          this.stopTimer()  
                  
          break;
      }
    }
  },

  startTimer: function(){
    var count = this.state.count;
    this.timer = setInterval(() => {
      this.setState({
        count: ++count
      })
    }, 1000);
  },

  stopTimer: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    });    
  },
  render: function () {
    var {count,timerStatus} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <TimerControls timerStatus={timerStatus} handleChange={this.handleStatusChange}/>        
      </div>
    )
  }
});

module.exports = Timer;

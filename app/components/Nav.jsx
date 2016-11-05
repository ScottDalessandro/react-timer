var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Timer App</li>
          <li>
            <IndexLink activeClassName='active-link' to="/"> Timer </IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link"> Countdown </Link> 
          </li>
        </ul>        
      </div>      
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>
            Created by <a href='http://scottdalessandro.com' target='_blank'> Scott D'Alessandro </a>
          </li>
        </ul>
      </div>      
    </div>      
  );
};


module.exports = Nav;
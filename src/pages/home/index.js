import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Link to='/detail/1'>
          <button>detail</button>
        </Link>
      </div>
    )
  }
}

export default Home
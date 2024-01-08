import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  // renderAuthButton = () => {
  //   const {isLoggedIn} = this.state
  //   if (isLoggedIn === true) {
  //     return <button>Logout</button>
  //   }
  //   return <button>Login</button>
  // }

  render() {
    const {isLoggedIn} = this.state
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button>Logout</button>
    // } else {
    //   authButton = <button>Login</button>
    // }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
      </div>
    )
  }
}

export default App
// // {this.renderAuthButton()}
// // {authButton}
// // {isLoggedIn? <button>Logout</button> : <button>Login</button> }
// // {isLoggedIn? <button>Logout</button> : null }
// {isLoggedIn && <button>Logout</button>}
// {!isLoggedIn && <button>Login</button>}

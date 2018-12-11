import React, { Component } from 'react';
import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';
import { Route, Link } from 'react-router-dom'
import Bitcointoday from './komponen/Bitcoin_today'
import Kebitcoin from './komponen/Ke_bitcoin'
import Kerupiah from './komponen/Ke_rupiah'

class App extends Component {

  componentDidMount() {
    axios.get('https://blockchain.info/ticker')
      .then((ambil) => {
        console.log(ambil)
        this.setState({
          info: ambil.data,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <center>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_kpanR-he5UsdvnxQL7ua8Fm0FNGUM4LZ4df0Mt1ADlLXFzHpw" alt="ya" />
          <br />
          <Link to="/bitcointoday"><button>Harga Bitcoin Hari ini</button></Link>
          <Link to="/kebitcoin"><button>Rupiah ke Bitcoin</button></Link>
          <Link to="/kerupiah"><button>Bitcoin ke Rupiah</button></Link>
          <br />
          <Route path='/bitcointoday' component={Bitcointoday} />
          <Route path='/kebitcoin' component={Kebitcoin} />
          <Route path='/kerupiah' component={Kerupiah} />
        </center>
      </div>
    );
  }
}

export default App;

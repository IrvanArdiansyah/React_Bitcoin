import React, { Component } from 'react';
import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';

class Kebitcoin extends Component {
    state = {
        rupiah: 0,
        bitcoin: 0,
        info: ''
    }

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
        let input = (e) => {
            this.setState({
                rupiah: e.target.value,
                bitcoin: this.state.info.USD.buy
            })
        }

        let konversi = (this.state.rupiah / 14000) / (this.state.bitcoin)

        return (
            <div>
                <h1>KONVERSI RUPIAH KE BITCOIN</h1>
                <p>Kurs 1 USD = Rp.14.000</p>
                <input type="number" onInput={input}></input>
                <h4>Rp. {this.state.rupiah}, BTC {konversi}</h4>
            </div>
        );
    }
}

export default Kebitcoin;

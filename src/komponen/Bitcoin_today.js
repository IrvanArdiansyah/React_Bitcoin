import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import '../style/style.css'

class Bitcointoday extends Component {
    constructor() {
        super();
        this.state = {
            info: ''
        }
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

        return (
            <div>
                <h1>BITCOIN HARI INI</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Mata Uang</th>
                            <th>Harga Beli Bitcoin</th>
                            <th>Harga Jual Bitcoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dollar Australia</td>
                            <td>{this.state.info ? this.state.info.AUD.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.AUD.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Yuan China</td>
                            <td>{this.state.info ? this.state.info.CNY.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.CNY.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Euro Eropa</td>
                            <td>{this.state.info ? this.state.info.AUD.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.AUD.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Dolar Amerika Serikat</td>
                            <td>{this.state.info ? this.state.info.USD.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.USD.sell : ''}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Bitcointoday;

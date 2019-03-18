import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Transactions from './components/Transactions';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      transactions: [],
      balance: {},
      provider: {}
    };
    this.fetchData = this.fetchData.bind(this);
    this.sortNumber = this.sortNumber.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  sortNumber(a, b) {
    return a - b;
  }
  fetchData() {
    fetch('http://www.mocky.io/v2/5c62e7c33000004a00019b05')
      .then(response => response.json())
      .then(response =>
        this.setState({
          balance: response.balance,
          transactions: response.transactions
            .filter(item => item.category_title !== 'Income')
            .sort((a, b) => b.amount.value - a.amount.value)
            .splice(0, 10),
          provider: response.provider
        })
      )
      .catch(error => {
        throw new Error('There is a problem right now!');
      });
  }
  render() {
    const { provider, transactions, balance } = this.state;

    return (
      <main className='monthly-balance'>
        <Header balance={balance} transactions={transactions} provider={provider} />
        <Transactions transactions={transactions} />
      </main>
    );
  }
}

export default App;

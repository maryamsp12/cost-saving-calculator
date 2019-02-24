import React, { Component } from 'react';
import { calculateCount } from './calculate';
import './App.css';

class App extends Component {
  state = {
    input: { product: '', count: '' },
    result: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.product !== "" && this.state.input.count !== '') {
      const resultList = calculateCount(this.state.input.product, this.state.input.count);
      const result = [...this.state.result]
      this.setState({ result: resultList })
    }
  }

  handleChange = (e) => {
    const input = { ...this.state.input }
    input[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ input })
  }

  render() {

    return (
      <div>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <h1>Calculator</h1>
            <p>
              <label htmlFor='product'> Choose Product: </label><br />
              <select value={this.state.input.product} onChange={this.handleChange} id='product' name="product">
                <option defaultValue className="disabled">-- Select one  --</option>
                <option value="bottle">Bottles</option>
                <option value="chocolate">Chocolates</option>
                <option value="biscuit">Biscuits</option>
              </select> <br /> <br />

              <label htmlFor='count'> Enter Count: </label><br />
              <input value={this.state.input.count} onChange={this.handleChange} id='count' name='count' type='text' /> <br />
            </p>

            <button>Enter</button><br />
          </form>
          <div className="resultHead">
            You can get maximum saving by purchasing following:
            </div>
          <div className='result'>
            {this.state.result}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

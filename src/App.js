import React from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = ({
          notes : [
              {
                  id : 1,
                  title : "add course notes1",
                  details : "note 1",
              },
              {
                  id : 2,
                  title : "add course notes2",
                  details : "note 2",
              },
              {
                  id : 3,
                  title : "add course notes3",
                  details : "note 3",
              }
          ],
          name           : 'Magho',
          currentTitle   : '',
          currentDetails : '',
      });
  }

  handleChange (e) {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({
         [name] : value,
      });
  }

  handleSubmit (e) {
      alert(`Your note ${this.state.currentTitle} has been added`);
      e.preventDefault();
  }

  render() {
    return (
      <div className="App">
          <Header name={this.state.name}/>
          <Form currentTitle={this.state.currentTitle} currentDetails={this.state.currentDetails}
          handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <Grid notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;

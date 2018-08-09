import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = ({
          notes :[],
          name           : 'Magho',
          currentTitle   : '',
          currentDetails : '',
      });
  }

  componentWillMount () {

      firebase.initializeApp({

          apiKey: "AIzaSyBq_yXvumFzX1IE-bQpiK4th2FMCD-DLHo",
          authDomain: "notepad-magho.firebaseapp.com",
          databaseURL: "https://notepad-magho.firebaseio.com",
          projectId: "notepad-magho",
          storageBucket: "",
          messagingSenderId: "1074131528375"
      });

      firebase.database().ref('/notes')
          .on('value', snapshot => {
              const fbstore = snapshot.val();
              const store = _.map(fbstore, (value, id) => {
                  return {
                      id : id,
                      title : value.title,
                      details : value.details,
                  };
              });
              this.setState({
                  notes : store,
              });
          });
  }

  handleChange (event) {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
         [name] : value
      });
  }

  handleSubmit (e) {
      e.preventDefault();
      const data = {
          title : this.state.currentTitle,
          details: this.state.currentDetails,
      };

      firebase.database().ref('/notes').push(data);

      this.setState ({
          currentTitle : '',
          currentDetails : '',
      });
      alert(`successfully ${data.title} added `);
  }

  deleteNote (id) {
    firebase.database().ref(`/notes/${id}`)
        .remove();
    alert("successfully deleted");
  }

  render() {
    return (
      <div className="App">
          <Header name={this.state.name}/>
          <Form currentTitle={this.state.currentTitle} currentDetails={this.state.currentDetails}
                handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
          <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>
      </div>
    );
  }
}

export default App;

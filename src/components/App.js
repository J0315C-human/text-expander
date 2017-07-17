import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import ExpanderEntry from './ExpanderEntry.js';
import ExpanderDisplay from './ExpanderDisplay.js';
import store from '../store';

class App extends Component {

  componentWillMount() {
    this.props = store.getState();
  }

  onClickSubmit() {
    console.log('create clicked');
    store.dispatch({
      type: 'CREATE_EXPANDER',
    });
  }

  onEntryChange(sentence) {
    console.log('dispatching sentence change', sentence);
    store.dispatch({
      type: 'SENTENCE_CHANGE',
      payload: sentence,
    });
  }

  render() {
    const props = this.props;
    console.log('PROPS IN APP', props);
    console.log(' ---App rendering ---');
    console.log(this.props);
    return (
      <div className="App">
        <div className="title">Text-expander thing!</div>
        <ExpanderEntry
          sentence={props.inputSentence}
          inputValid={props.inputValid}
          onClick={props.inputValid ? this.onClickSubmit : null}
          onEntryChange={(val) => this.onEntryChange(val)}
          />
        <ExpanderDisplay />
      </div>
    );
  }
}

const render = () => {
  console.log(store.getState());
  ReactDOM.render(
		<App
			{... store.getState()}
		/>,
		document.getElementById('root')
	);
};


store.subscribe(render);

export default App;

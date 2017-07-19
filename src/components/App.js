import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import ExpanderEntry from './ExpanderEntry.js';
import ExpanderDisplay from './ExpanderDisplay.js';
import Sentence from './Sentence.js';
import store from '../store';
import actionTypes from '../store/actions.js';
class App extends Component {

  componentWillMount() {
    this.props = store.getState();
  }

  onClickSubmit() {
    store.dispatch({
      type: actionTypes.CREATE_EXPANDER,
    });
  }

  onEntryChange(sentence) {
    store.dispatch({
      type: actionTypes.SENTENCE_CHANGE,
      payload: sentence,
    });
  }

  onWordClick(wordIdx) {
    store.dispatch({
      type: actionTypes.EXPAND_WORD,
      payload: wordIdx,
    });
  }

  render() {
    const props = this.props;
    return (
      <div className="App">
        <div className="title">Text-expander thing!</div>
        <ExpanderEntry
          sentence={props.inputSentence}
          inputValid={props.inputValid}
          onClick={props.inputValid ? this.onClickSubmit : null}
          onEntryChange={(val) => this.onEntryChange(val)}
          />
        <ExpanderDisplay>
          <Sentence
            words={props.expanderWords}
            visibleIndexes={props.visibleWordIndexes}
            clickableIndexes={props.clickableWordIndexes}
            onWordClick={this.onWordClick}/>
        </ExpanderDisplay>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
		<App
			{... store.getState()}
		/>,
		document.getElementById('root')
	);
};


store.subscribe(render);

export default App;

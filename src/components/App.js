import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import ExpanderEntry from './ExpanderEntry.js';
import ExpanderDisplay from './ExpanderDisplay.js';
import Button from './Button.js';
import Sentence from './Sentence.js';
import store from '../store';
import actionTypes from '../store/actions.js';

const examples = [`These words {will be replaced {replaced {replaced {changed {switched up}} ` +
`or added to} when clicked. {clicked by the user. {user, with a mouse.}}}}`,
`Multiple_words {Multiple words getting expanded {expanded into arbitrarily ` +
`long {loong {loooong {looooooong}}} sentences}}`,
`We {We are a small company in the_greater_Cleveland_area, {the corporate offices off of the interstate, right by Cheddar's,} and we passionately {passionately and sustainably}} make ` +
`{design, fabricate, and test {test (our test team is award-winning)}} widgets. {widgets_and_gizmos_and_doodads. {widgets and gizmos and doodads of ` +
`  all shapes and sizes. {sizes, perfect for the modern family {businesswoman{CEO{dogwalker{millenial{baby{[insert type of person here]}}}}}} on-the-go.}}}`
]


class App extends Component {

  loadExample(idx) {
    document.getElementsByClassName('expanderEntryInput')[0].value = examples[idx];
    this.onEntryChange(examples[idx]);
  }


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
        <div className="exampleButtons">
          <Button text="Example 1" onClick={() => this.loadExample(0)} type="btn btnenabled" />
          <Button text="Example 2" onClick={() => this.loadExample(1)} type="btn btnenabled" />
          <Button text="Example 3" onClick={() => this.loadExample(2)} type="btn btnenabled" />
        </div>
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
            onWordClick={this.onWordClick} />
        </ExpanderDisplay>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <App
      {...store.getState() }
    />,
    document.getElementById('root')
  );
};


store.subscribe(render);

export default App;

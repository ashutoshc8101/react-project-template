import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {

  render(){
    return (<div>
      <h1> This is react component</h1>
      </div>);
  }

}

ReactDOM.render(<ReactComponent />, document.getElementById('app'));

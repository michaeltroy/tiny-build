import React from 'react'

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className="HelloWorld anotherClass andAnotherClass">
        <h2 className="rg-p2at4">+ Hello +</h2>
      </div>
    );
  }
});

React.render(
  <HelloWorld />,
  document.getElementById('content')
);

module.exports = HelloWorld;

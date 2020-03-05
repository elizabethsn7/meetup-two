import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }
  getStyle = () => {
    return {
      color: this.color
    };
  };
  render() {
    return (
      //  You can set the color of Alert to be null by default its children will override this later. This component attempts to render text it receives from its props, using the style from its getStyle function which defines a basic style for the color
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'italic'
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert };

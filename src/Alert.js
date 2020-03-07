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
    this.color = '#b52424';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#b52424';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#fff';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'italic',
      fontSize: '1.5em',
      backgroundColor: '#e63070',
      textAlign: 'center'
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert };

import React, { Component } from 'react';

class Paper extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div className="card text-white bg-primary mb-3" style={{maxWidth:"18rem"}}>
        <div className="card-header">{this.props.header}</div>
        <div className={"card-body"+this.props.description===undefined?this.props.description.length===0?"d-none":"":""} >
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Paper;

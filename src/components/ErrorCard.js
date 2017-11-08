import React from 'react'; 

class ErrorCard extends React.Component {
  render() {
    return (
      <div className="error-card">
        {this.props.message}
      </div>
    )
  }
}; 

export default ErrorCard;
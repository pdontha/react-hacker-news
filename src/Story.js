import React from "react";

class Story extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {

        return (
                <li> 
                <a href={this.props.url} alt={this.props.title}><h1>{this.props.title}</h1></a>
                </li>)
        
        
      }
    
}

Story.defaultProps = {
    title : '',
    url : ''

}

export default Story
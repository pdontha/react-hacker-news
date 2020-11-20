import React from "react";


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  


  handleSubmit=(evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    console.log(this.state.term);
    this.props.handleSearch(this.state.term);
    
    this.setState({term: this.state.term})
  }

  handleChange = (evt)=>{
    evt.preventDefault();
    const{name, value} = evt.target;
    this.setState(fData => ({
      ...fData,
      [name]: value
    }));
}



  render(){
    return (
      <form  onSubmit={this.handleSubmit}>
        <input name="term" id="term" value={this.state.term} 
        placeholder="Search by title"
        onChange={this.handleChange}></input>
        <button>Search</button>
      </form>
    );

  }

}


export default SearchForm;
import React from "react";


class SearchForm extends React.Component {

  state = {
    formData: {term: ""}
  }


  handleSearch=(evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    console.log("handleSearch",this.state.formData );
    this.props.updateTerm(evt.target.value);
  }

  handleChange = (evt)=>{
    evt.preventDefault();
    const{name, value} = evt.target;
    console.log("HANDLE CHANGE", value);
    this.state.formData = value;
    // this.setState(fData => ({
    //   ...fData,
    //   [name]: value
    // }));

  }


  render(){
    return (
      <form  onSubmit={this.handleSearch}>
        <input name="term" id="term" value={this.state.formData.term} 
        placeholder="Search by title"
        onChange={this.handleChange}></input>
        <button>Search</button>
      </form>
    );

  }

}


export default SearchForm;
import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
// import Story from "./Story";


class StoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stories: [], term: ""};
  }


  async componentDidMount() {

   // console.log("componentDidMount",this.state.term, prevState.term );
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${this.state.term}`);
    const { stories } = response.data.hits;
    this.setState({
      stories
    });
  }


  // async componentDidUpdate(prevState) {
  //   // if we received a new todo, we need to fetch its data
  //   if (this.state.term !== prevState.term) {
  //     console.log("componentDidUpdate",this.state.term, prevState.term );
  //     const response = await axios.get(
  //       `https://hn.algolia.com/api/v1/search?query=${this.state.term}`);
  //     const { stories } = response.data.hits;
  //     this.setState({
  //       stories
  //     });
  //   }
  // };

  updateTerm = async (term)=>{

    console.log("updateTerm--->",term );

    //console.log("componentDidUpdate",this.state.term, prevState.term );
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${this.state.term}`);
    const { stories } = response.data.hits;
    this.setState({
      stories
    });
    //this.setState({term: term});
  }



  render() {
    return (
      <div>
        <div>
          <SearchForm updateTerm={this.updateTerm}/>
        </div>
        <div>
          
          {/* {stories.map(story => <li><Story story={story} /></li>)} */}
        </div>
      </div>

    )
  }
}

export default StoryList;
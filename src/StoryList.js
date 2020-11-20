import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story";


class StoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stories: [], term: ""};
    this.handleSearch = this.handleSearch.bind(this);
  }


  async componentDidMount() {

   // console.log("componentDidMount",this.state.term, prevState.term );
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${this.state.term}`);
    const stories  = response.data.hits;
    console.log(response.data);
    this.setState({
      stories
    });
  }



  async handleSearch (term) {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${term}`);
      const stories  = response.data.hits;
      this.setState({
        stories
      });
  }


  render() {
    return (
      <div>
          <SearchForm handleSearch={this.handleSearch}/>        
          <ul>{this.state.stories.map(story => (
          <Story title={story.title} url={story.url} /> ))}</ul>
          </div>
    )
}
}
export default StoryList
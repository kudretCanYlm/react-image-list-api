import react from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput"
import axios from "axios";
import ImageList from "./ImageList"
class App extends react.Component
{
    constructor(props) {
        super(props);
        this.state={images:[]}
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
    async onSearchSubmit(entry){
      const values=await  axios.get(`https://pixabay.com/api/?key=23493743-cd94151c478cb1c46f87b988c&q=${entry}&image_type=photo`)
      this.setState({images:values.data.hits})
    }
    render(){

    return(
        <div className="ui container" style={{marginTop:"30px"}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            We have {this.state.images.length} images
            <ImageList images={this.state.images}/>
        </div>

    );
 }
}

export default App
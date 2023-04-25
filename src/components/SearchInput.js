import React from "react";
import ReactDOM from "react-dom";

class SearchInput extends React.Component {
    
    //fonksiyon yerine ctor daha fazla performanslı
    constructor(props) {
        super(props);
        this.state = {entry:""}
        //aşağıdaki olmadan orformsubmit fonskiyondaki console.log çalışmaz null olarak algılar bind etmek gerek
        //yada aşağdaki yerine arrow funtion kullanmak bindi otamatik yapar
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
    
     onFormSubmit(event){
      event.preventDefault();
      this.props.onSearchSubmit(this.state.entry);
     }

    // onFormSubmit=event=>{
    //     event.preventDefault();
    //     console.log(this.state.entry)
    // }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" >
                 <div className="field">                                       {/*oncahnage içine fonksiyon yazarsak un-controlled,state ile ulaşırsak controlled element olur */}
                     <div className="ui messive icon input">                   {/*parantez koyarsak ilk başta çalışır */}
                         <input type="text" className="" placeholder="Search..." onChange={event=>this.setState({entry:event.target.value})} value={this.state.entry}/>
                         <i className="search icon "></i>
                     </div>
                 </div>

                </form>
            </div>
        )
    }

}
export default SearchInput;
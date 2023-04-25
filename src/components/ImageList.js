import react from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

const Imagelist=(props)=>{
    const images= props.images.map((image,key)=>{
    return <img src={image.webformatURL} key={key}/>
    });
    return(
        <div>
            {
            images
            }
        </div>
    )
}
export default Imagelist;
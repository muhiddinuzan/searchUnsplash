import ArrayItem from "./ArrayItem";

function ListArray({imagesPlaceHolder}) {
    return (  <div className="imageList">
        {imagesPlaceHolder.map((image, index)=>{
            return <ArrayItem key={index} getImage={image}/>
        })}
    </div>);
}

export default ListArray;
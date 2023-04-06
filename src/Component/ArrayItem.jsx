function ArrayItem({getImage}) {
    console.log(getImage);
    return (  
        
    <div>
        <img className="imageItem" src={getImage.urls.small} alt={getImage.alt_description} />
    </div>);
}

export default ArrayItem;


export default function Author(props){
     
    const {authorImg , name , jobTitle} = props.author
 
    return (
        <>  
            <div className="author">
            <img src={authorImg} />
            <div>
                <h5>{name}</h5>
                <p>{jobTitle}</p>
            </div>
            </div> 
             
        </>
    )
}
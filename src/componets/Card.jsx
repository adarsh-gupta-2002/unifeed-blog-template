import Author from "./Author"

export default function Card(props){
    console.log(props)
    return (
        <>  
            <div className="card">
                <div className="card-image">
                    <img src={props.img} alt="card-image" />
                </div>
                <div className="card-content">
                    <h2>{props.heading}</h2>
                    <p>{props.content}</p>
                    <Author author = {props.author} />
                </div>
            </div>
        </>
    )
}
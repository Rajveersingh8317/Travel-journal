

function Card(props){
    return(
        <>
         <div className="card-stats">
            <img  src={`../assets/${props.img}`} className="logo-card"/>
          <div className="card-stats1">
            <img src={`../assets/${props.img1}`} className="location-logo"/>
            <p>{props.country} <span className="google-view">{props.location}</span></p>
            <h1>{props.title}</h1>
            <p className="bold">{props.date}</p>
            <p >{props.about}</p>
            
            </div> 
         </div>
        </>
    )
}
export default Card
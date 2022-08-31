import "./Card.css"

const Card = (props) => {
const { label, subtitle, description, image} = props;

return (
  <div className = "card">
    <p className = "textcard">{subtitle}</p>  
    
    <div className="flex">
      <img className = "img" alt='' src={require(`./${image}.png`)}/>
      <div className = {`div__${label}`}> {description} </div>
    </div>
  </div>
  )
}

export default Card
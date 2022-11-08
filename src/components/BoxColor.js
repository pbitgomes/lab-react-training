import './style.css'

function BoxColor(props) {
    let corDeFundo = {background: `rgb(${props.r},${props.g},${props.b})`,}
  
    return (
      <div className="color" style={corDeFundo}>
        <p>rgb({props.r},{props.g},{props.b})</p>
      </div>
  );
}

export default BoxColor
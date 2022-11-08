import './style.css'

function IdCard(props) {
  return (
      <div className="idCard">
        {<img src={props.picture} alt="foto perfil"></img>}
        <div>
          <p><b>Last Name:</b> {props.lastName}</p>
          <p><b>First Name:</b> {props.firstName}</p>
          <p><b>Gender:</b> {props.gender}</p>
          <p><b>Height:</b> {props.height}</p>
          <p><b>Birth:</b> {props.birth}</p>
        </div>
      </div>
  );
}

export default IdCard
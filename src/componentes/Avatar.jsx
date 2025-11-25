

export function Avatar(props) {
  return (
    <div className="avatar">
      <img 
        src={props.imagen} 
        alt="Avatar del alumno" 
        className="avatar-img"
      />
    </div>
  );
}

export default Avatar;
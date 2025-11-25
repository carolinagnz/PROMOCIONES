export function Alumno({nombre, children, apellido, grupo}) {
  return (
    <div className="user-info">
        {children}
      <p className="name">{nombre}</p>
      <p className="surname">{apellido}</p>
      <p className="course">{grupo}</p>
    </div>
  );
}
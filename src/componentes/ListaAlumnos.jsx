// Componente que muestra una lista de alumnos en trajetas que se generan dinámicamente
// Recibe como props: datosAlumno (array de objetos con datos de alumnos)

import { Avatar } from './Avatar'
import { Alumno } from './Alumno'

export function ListaAlumnos({datosAlumno}) {
  return (
    <div className="lista-alumnos">
      {datosAlumno.map((alumno, index) => (
        <div key={index} className="profile-container">
          <Avatar imagen={alumno.imagen} />
          <Alumno 
            nombre={alumno.nombre}
            apellido={alumno.apellido}
            grupo={alumno.grupo}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaAlumnos;

import './App.css'
import { Alumno } from './componentes/Alumno'
import { Avatar } from './componentes/Avatar'
import { SelectorPromocion } from './componentes/SelectorPromocion'
import { ListaAlumnos } from './componentes/ListaAlumnos'

function App() {
  const datosPromo = ["23/24", "24/25", "25/26", "24/25"];
  const datosAlumno = [
    {
    nombre: "Carolina",
    apellido: "Gonzalez",
    grupo: "25/26",
    imagen: "https://media.licdn.com/dms/image/v2/D4D03AQHTZRjzO36pjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678238223269?e=2147483647&v=beta&t=oYX54R_gpHn7kGydlw3ii7hKPjzGEI4niTttM5Ym0Z4"
    },
    {
    nombre: "Luis",
    apellido: "Martinez",
    grupo: "24/25",
    imagen: "https://img.freepik.com/fotos-premium/hombre-joven-estilo-camisa-mezclilla-auriculares-inalambricos-hombre-escuchando-musica_152637-7216.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
    nombre: "Maria",
    apellido: "Lopez",
    grupo: "23/24",
    imagen: "https://www.cristinarobles.es/wp-content/uploads/2019/12/fotografo-madrid-estudio-fotografico-marca-personal-linkedin.jpg"
    },
    {
    nombre: "Miguel",
    apellido: "Ramirez",
    grupo: "25/26",
    imagen: "https://img.freepik.com/fotos-premium/retrato-joven-pie-contra-arboles_1048944-4631288.jpg?semt=ais_hybrid&w=740&q=80"  
    }

  ];

  const alumnosFiltradosPromo = datosAlumno.filter(al => al.grupo == "25/26");

  return (
    <>
      
      <SelectorPromocion 
        datosPromo={datosPromo}
      />

      <ListaAlumnos
        datosAlumno={datosAlumno}
      />

      <SelectorPromocion 
        datosPromo={datosPromo}
      />

      <ListaAlumnos
        datosAlumno={alumnosFiltradosPromo}
      />

    </>
  )
}

export default App

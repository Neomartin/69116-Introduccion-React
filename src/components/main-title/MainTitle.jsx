import Counter from "../counter/Counter";
import "./MainTitle.css"; //importar el archivo de estilos de la misma carpeta por eso usamos ./
                // Destructuramos el objecto que recibe mi componente como props
function MainTitle({ titulo, subtitulo }) {
    // console.log(props)
    return <div className="title-container">
                <h1 className="main-title">
                    { titulo || "Titulo por defecto"  }
                </h1>
                { 
                    subtitulo && <p className="main-subtitle">{ subtitulo }</p>
                }
                
            </div>
    
}

export default MainTitle

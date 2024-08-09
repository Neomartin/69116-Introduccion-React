import Counter from "./components/counter/Counter";
import MainTitle from "./components/main-title/MainTitle";


function App() {
  const name = "John Doe";
  const importante = "Texto importante"


  return (
    <>
      <MainTitle  titulo="Aprendiendo React" 
                  subtitulo="Prop subtitulo de aprendiendo react con componentes" />

      <Counter />

      <h1 className="titulo">Bienvenido {name} a React</h1>
      <p className="texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit 
        <strong>{importante}</strong> . Omnis, nulla!</p>

      <MainTitle titulo="Descripción React" subtitulo="alguna descripción extra para react" />

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, quasi quisquam iure itaque optio minus sint ipsa atque laboriosam exercitationem harum temporibus maiores, quibusdam necessitatibus esse autem, quaerat delectus alias recusandae cupiditate illum. Animi quaerat adipisci voluptatum eligendi sunt quisquam saepe voluptatem at molestias delectus.</p>

      <MainTitle />

    </>

  
  )
}

export default App

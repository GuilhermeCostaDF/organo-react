import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <>
      <div className="App">
        <Banner />
        <CampoTexto label="Nome" placeHolder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeHolder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeHolder="Informe o endereço da imagem" />
        <CampoTexto label="Time" />
      </div>
    </>
  );
}

export default App;

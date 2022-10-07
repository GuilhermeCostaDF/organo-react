import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeHolder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeHolder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeHolder="Informe o endereço da imagem" />
        <CampoTexto label="Time" />
      </form>
    </section>
  );
};

export default Formulario;

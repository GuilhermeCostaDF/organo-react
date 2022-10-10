import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeHolder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeHolder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeHolder="Informe o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;

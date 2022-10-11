import "./Colaborador.css";

const Colaborador = () => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img
          src="http://github.com/guilhermecostadf.png"
          alt="Imagem de perfil do colaborador"
          width={200}
        />
      </div>
      <div className="rodape">
        <h4>Guilherme Costa</h4>
        <h5>Estagiário</h5>
      </div>
    </div>
  );
};

export default Colaborador;

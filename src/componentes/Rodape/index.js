import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodapeFooter">
      <div className="redes">
        <img src="/imagens/fb.png" alt="logo" />
        <img src="/imagens/tw.png" alt="logo" />
        <img src="/imagens/ig.png" alt="logo" />
      </div>
      <div className="logo">
        <img src="/imagens/logo.png" alt="logo" />
      </div>
      <div className="direitos">
        <p>&#169; Desenvolvido por Alura</p>
      </div>
    </footer>
  );
};

export default Rodape;

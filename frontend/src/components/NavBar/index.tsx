import rpd from 'assets/img/rpd.svg';

function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
  <div className="container">
    <nav className="my-2 my-md-0 mr-md-3">
      <img src={rpd} alt="Relatorio de Vendas" width="140" />
    </nav>
  </div>
</div>
  );
}

export default NavBar;

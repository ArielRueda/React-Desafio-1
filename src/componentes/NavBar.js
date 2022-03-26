import logo from './imagenes/desktop-logo.png';
import NavBarCss from './NavBar.css';
function NavBar() {
    return(
    
    <nav id="barra" class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">

            <a href="index.html"><img src={logo} alt="logo"/></a>

        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                </span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div id="items" class="navbar-nav">
                <a class="nav-link active selected" aria-current="page" href="index.html">Home</a>
                <a class="nav-link" href="productos.html">Productos</a>
                <a class="nav-link" href="sobrenosotros.html">Sobre Nosotros</a>
                <a class="nav-link" href="contacto.html">Contacto</a>
                <a class="nav-link" href="preguntasfrecuentes.html">Preguntas Frecuentes</a>

            </div>
        </div>
    </div>
</nav>
    );
}
export default NavBar
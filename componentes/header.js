export const componenteHeader = function () {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger border-bottom shadow-sm mb-3 fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img
                src="img/favicon/android-icon-192x192.png"
                width="30"
                height="30"
                alt="Logo"
            >
            <b>SkinsPay</b>
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <button
                        class="nav-link btn btn-link text-white"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#categoriasMenu"
                    >
                        Produtos
                    </button>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <form>
                        <div class="input-group">
                            <input type="search" class="form-control form-control-sm form-control-color mt-1 ms rounded-1" placeholder="Digite o nome da Skin">
                            <li class="nav-item">
                                <a href="/login.html" class="nav-link text-white">Entrar</a>
                            </li>
                            <li class="nav-item">
                                <a href="/cadastro.html" class="nav-link text-white">Quero me Cadastrar</a>
                            </li>
                            <li class="nav-item">
                            <span class="contagem-carrinho badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0" title="produto(s) no carrinho">
                             <small id="contador-carrinho">0</small>
                            </span>
                            <a href="/carrinho.html" class="nav-link text-white">
                              <i class="bi-cart" style="font-size:24px;line-height: 24px;"></i>
                            </a>
                          </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="categoriasMenu"
                aria-labelledby="categoriasMenuLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="categoriasMenuLabel">Categorias</h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="list-unstyled">
                        <li class="border-top mt-3 pt-3">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle text-dark text-decoration-none"
                                    href="#"
                                    role="button"
                                    id="riflesDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Rifles
                                </a>
                                <div class="dropdown-menu" aria-labelledby="riflesDropdown">
                                    <a class="dropdown-item" href="#"> AWP</a>
                                    <a class="dropdown-item" href="#"> AK-47</a>
                                    <a class="dropdown-item" href="#"> M4A4</a>
                                    <a class="dropdown-item" href="#"> M4A1-S</a>
                                    <a class="dropdown-item" href="#"> Famas</a>
                                    <a class="dropdown-item" href="#"> Galil AR</a>
                                    <a class="dropdown-item" href="#"> SSG 08</a>
                                    <a class="dropdown-item" href="#"> AUG</a>
                                    <a class="dropdown-item" href="#"> SCAR-20</a>
                                </div>
                            </div>
                        </li>
                        <li class="border-top mt-3 pt-3">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle text-dark text-decoration-none"
                                    href="#"
                                    role="button"
                                    id="pistolasDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Pistolas
                                </a>
                                <div class="dropdown-menu" aria-labelledby="pistolasDropdown">
                                    <a class="dropdown-item" href="#"> USP-S</a>
                                    <a class="dropdown-item" href="#"> Glock-18</a>
                                    <a class="dropdown-item" href="#"> Five-Seven</a>
                                    <a class="dropdown-item" href="#"> P2000</a>
                                    <a class="dropdown-item" href="#"> P250</a>
                                    <a class="dropdown-item" href="#"> Tec-9</a>
                                    <a class="dropdown-item" href="#"> CZ75-Auto</a>
                                    <a class="dropdown-item" href="#"> Desert Eagle</a>
                                </div>
                            </div>
                        </li>
                        <li class="border-top mt-3 pt-3">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle text-dark text-decoration-none"
                                    href="#"
                                    role="button"
                                    id="smgDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    SMG
                                </a>
                                <div class="dropdown-menu" aria-labelledby="smgDropdown">
                                    <a class="dropdown-item" href="#">MP9</a>
                                    <a class="dropdown-item" href="#">MP7</a>
                                    <a class="dropdown-item" href="#">UMP-45</a>
                                    <a class="dropdown-item" href="#">P90</a>
                                    <a class="dropdown-item" href="#">PP-Bizon</a>
                                    <a class="dropdown-item" href="#">MAC-10</a>
                                </div>
                            </div>
                        </li>
                        <li class="border-top mt-3 pt-3">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle text-dark text-decoration-none"
                                    href="#"
                                    role="button"
                                    id="pesadasDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Pesadas
                                </a>
                                <div class="dropdown-menu" aria-labelledby="pesadasDropdown">
                                    <a class="dropdown-item" href="#">Negev</a>
                                    <a class="dropdown-item" href="#">M249</a>
                                </div>
                            </div>
                        </li>
                        <li class="border-top mt-3 pt-3">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle text-dark text-decoration-none"
                                    href="#"
                                    role="button"
                                    id="facasDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Facas
                                </a>
                                <div class="dropdown-menu" aria-labelledby="facasDropdown">
                                    <a class="dropdown-item" href="#">Bayonet</a>
                                    <a class="dropdown-item" href="#">Flip Knife</a>
                                    <a class="dropdown-item" href="#">Gut Knife</a>
                                    <a class="dropdown-item" href="#">Karambit</a>
                                    <a class="dropdown-item" href="#">M9 Bayonet</a>
                                    <a class="dropdown-item" href="#">Huntsman Knife</a>
                                    <a class="dropdown-item" href="#">Butterfly Knife</a>
                                    <a class="dropdown-item" href="#">Falchion Knife</a>
                                    <a class="dropdown-item" href="#">Shadow Daggers</a>
                                    <a class="dropdown-item" href="#">Bowie Knife</a>
                                    <a class="dropdown-item" href="#">Navaja Knife</a>
                                    <a class="dropdown-item" href="#">Stiletto Knife</a>
                                    <a class="dropdown-item" href="#">Talon Knife</a>
                                </div>
                            </div>
                        </li>
                        <li class="border-top mt-3 pt-3">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle text-dark text-decoration-none"
                                    href="#"
                                    role="button"
                                    id="luvasDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Luvas
                                </a>
                                <div class="dropdown-menu" aria-labelledby="luvasDropdown">
                                    <a class="dropdown-item" href="#">Sport Gloves</a>
                                    <a class="dropdown-item" href="#">Driver Gloves</a>
                                    <a class="dropdown-item" href="#">Hand Wraps</a>
                                    <a class="dropdown-item" href="#">Moto Gloves</a>
                                    <a class="dropdown-item" href="#">Specialist Gloves</a>
                                    <a class="dropdown-item" href="#">Hydra Gloves</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

    `;
};
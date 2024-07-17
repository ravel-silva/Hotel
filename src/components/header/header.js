class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="menu-lateral">
        <div class="logo">
            <img src="../../assets/images/log-hotel.webp" alt="erro">
        </div>
        <div class="menu-lateral__navegacao">
            <ul>
                <li>
                    <a href="../../pages/reservas/reservas.html">Reservas</a>
                </li>
                <li>
                    <a href="../../pages/check-in/check-in.html">Check-In</a>
                </li>
                <li>
                    <a href="../../pages/check-out/check-out.html">Check-Out</a>
                </li>
                <li>
                    <a href="">Quartos</a>
                </li>
            </ul>
        </div>
        <div class= "exit">
         <span>
            <a href="../../../index.html">Exit</a>
        </span>
        </div>
    </nav>
    `;
    }
}
customElements.define('menu-lateral', Header)
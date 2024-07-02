class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="menu-lateral">
        <div class="logo">
            <img src="/public/log-hotel.webp" alt="erro">
        </div>
        <div class="menu-lateral__navegacao">
            <ul>
                <li>
                    <a href="">Reservas</a>
                </li>
                <li>
                    <a href="">Check-In</a>
                </li>
                <li>
                    <a href="">Check-Out</a>
                </li>
                <li>
                    <a href="">Quartos</a>
                </li>
            </ul>
        </div>
    </nav>
    `;
    }
}
customElements.define('menu-lateral', Header)
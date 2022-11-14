import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo" />
      <ul className="header__contacts">
        <li className="header__contact">
          <h3 className="header__contacts-heading">Контакты</h3>
        </li>
        <li className="header__contact">
          Email:{" "}
          <a className="header__contact-link" href="mailto:team@pena.marketing">
            team@pena.marketing
          </a>
        </li>
        <li className="header__contact">
          Телефон:{" "}
          <a className="header__contact-link" href="tel:+79644422240">
            +79644422240
          </a>
        </li>
        <li className="header__contact">
          Whatsapp:{" "}
          <a className="header__contact-link" href="https://wa.me/79644422240" target="_blank" rel="noreferrer">
            +79644422240
          </a>
        </li>
        <li className="header__contact">
          Telegram:{" "}
          <a className="header__contact-link" href="https://telegram.me/MarsherSu" target="_blank" rel="noreferrer">
            @MarsherSus
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

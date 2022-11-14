import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">Copyright 2018-{year} - Pena Co.,Ltd.</p>
    </footer>
  );
}

export default Footer;

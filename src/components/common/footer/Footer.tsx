import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer_background}>
        <div className={style.footer_layout}>
          <div className={style.footer_container}>
            <div className={style.footer_content}>
              <h3>Aviso legal</h3>
              <p>
                Este menu es solo para fines demostrativos. <br />
                Menu demo para pizzería/restaurante con enfoque en negocio
                minimalista.
              </p>
              <p>Copyright 2026 © Disenmix</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

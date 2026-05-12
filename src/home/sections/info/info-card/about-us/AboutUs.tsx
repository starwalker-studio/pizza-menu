import style from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <div className={style.info_card}>
      <h3>Sobre nosotros</h3>
      <p className={style.sobre_texto}>
        Somos una pizzería familiar con más de 5 años llevando sabor y calidad a
        cada rincón del fraccionamiento. Usamos ingredientes frescos
        seleccionados cada día y elaboramos nuestra masa de forma artesanal para
        garantizarte la mejor experiencia en cada mordida.
      </p>
      <p className={style.sobre_texto}>
        Nuestro compromiso es simple: pizza de calidad, entrega rápida y
        atención que te haga sentir como en casa.
      </p>
      <div className={style.sobre_badge}>
        <span>🍕 Hecho con amor desde 2019</span>
      </div>
    </div>
  );
};

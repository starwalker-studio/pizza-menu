import { Button } from "../../../components/ui/button/Button";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.overlay} />
      <div className={style.content}>
        <div className={style.content_text}>
          <h1>Disfruta de nuestras</h1>
          <h1 data-color="orange">deliciosas pizzas</h1>
          <p>Hechas con ingredientes frescos y mucho sabor.</p>
          <div className={style.hero_button}>
            <Button label="Ver Menu" />
          </div>
        </div>
      </div>
    </section>
  );
};

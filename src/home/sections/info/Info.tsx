import * as Card from "./info-card";
import style from "./Info.module.scss";

export const Info = () => {
  return (
    <section className={style.info_section}>
      <div className={style.info_container}>
        <div className={style.info_wrapper}>
          <div className={style.info_grid}>
            <Card.Contact />
            <Card.Opinions />
            <Card.AboutUs />
            <Card.Location />
          </div>
        </div>
      </div>
    </section>
  );
};

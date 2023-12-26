import React from "react";
import pokeImage from "../../assets/poke-back.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>POKE BOWL</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={pokeImage} alt="Сервировка блюд поке" />
      </div>
    </React.Fragment>
  );
};

export default Header;

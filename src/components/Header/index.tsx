import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
import Switch from "react-switch";
import { usePlayer } from "../../contexts/PlayerContext";

export function Header() {
  const { darkMode, setDarkMode } = usePlayer();

  const currentDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });

  return (
    <header
      className={
        darkMode ? styles.headerContainerDark : styles.headerContainerLight
      }
    >
      <img src="/logo.svg" alt="podcastr" />
      <p> O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
      <div style={{ marginLeft: 20 }}>
        <Switch
          onChange={() => setDarkMode(!darkMode)}
          checked={darkMode ? true : false}
          height={20}
          width={50}
          onColor={"#6f48c9"}
        />
      </div>
    </header>
  );
}

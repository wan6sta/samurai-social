import styles from './navigation.module.scss'
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const Navigation = () => {
  return <div className={styles.nav}>
    <NavLink
      className={({ isActive }) => isActive ? styles.activeLink : undefined}
      to={`/profile`}>
      <Button color="primary">Профиль</Button>
    </NavLink>
    <NavLink
      className={({ isActive }) => isActive ? styles.activeLink : undefined}
      to='/users'>
      <Button color="primary">Пользователи</Button>
    </NavLink>
    <NavLink
      className={({ isActive }) => isActive ? styles.activeLink : undefined}
      to='/chat'>
      <Button color="primary">Чат</Button>
    </NavLink>
  </div>
}

export default Navigation;
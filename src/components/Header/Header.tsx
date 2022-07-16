import {useState} from 'react'
import styles from './header.module.scss'
import {Button, Typography} from '@mui/material'
import avatar from '../../assets/images/avatar-svgrepo-com.svg'

const Header = () => {
  const [isAuth, setIsAuth] = useState(true)

  return <div className={styles.header}>
    <div>
      <Typography variant="h5" gutterBottom component="div">
        Samurai social
      </Typography>
    </div>
    <div className={styles.userInfoWrap}>
      {isAuth
        ? <div className={styles.userInfo}>
          <Typography variant="button">
            wan6sta@gmail.com
          </Typography>
          <img src={avatar} alt="Avatar"/>
        </div>
        : <Button variant="outlined">Войти</Button>
      }
    </div>
  </div>
}

export default Header
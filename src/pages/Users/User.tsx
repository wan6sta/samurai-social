import * as React from 'react';
import styles from './users.module.scss'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import avatar from '../../assets/images/icons8-user-80.png'
import {FC, useState} from "react";
import {IUser} from "../../models/models";
import {Button} from "@mui/material";

const User: FC<IUser> = ({name, photos, followed, status}) => {
  const [isFollow, setIsFollow] = useState(false)

  return (
    <div className={styles.card}>
      <img src={photos?.small ? photos.small : avatar} alt="avatar"/>
      <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
        Пользователь
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
        {status}
      </Typography>
      {isFollow
        ? <Button>Отписаться</Button>
        : <Button>Подписаться</Button>
      }

    </div>
  );
}

export default User
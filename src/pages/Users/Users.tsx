import styles from './users.module.scss'
import {useLazySearchUserQuery, useLazySearchUsersQuery} from "../../store/samurai/samurai.api";
import User from "./User";
import {TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {IUser} from "../../models/models";
import {useObserver} from "../../hooks/useObserver";
import ArrowAnimateDown from "../../components/ui/ArrowAnimateDown";
import Loading from "../../components/ui/Loading";
import ErrorUI from "../../components/ui/ErrorUI";

const Users = () => {
  const [fetchUsers, {isLoading, data, isError}] = useLazySearchUsersQuery()
  const [fetchUser, {isLoading: isLoadingUser, data: user, isError: isErrorUser}] = useLazySearchUserQuery()
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState<IUser[]>([])
  const lastElement = useRef<HTMLDivElement | null>(null)
  const [usersFind, setUsersFind] = useState<IUser[] | null>(null)
  const [searchInput, setSearchInput] = useState('')

  useObserver(lastElement, isLoading, () => {
    setPage(prev => prev + 1)
  })

  useEffect(() => {
    fetchUsers({page: page, count: 30})
    if (data) {
      // @ts-ignore
      setUsers([...users, ...data.items])
    }
  }, [page])

  if (isError) {
    return <ErrorUI/>
  }

  return <div className={styles.usersPage}>
    <div className={styles.total}>
      <TextField
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        id="outlined-basic"
        label="Найти пользователя"
        variant="outlined"
      />
    </div>

    <Loading isLoading={isLoading}/>

    <div className={styles.users}>
      {users.map(user => <User key={user.id} {...user}/>)}
      <div ref={lastElement}></div>
    </div>

    <ArrowAnimateDown/>
  </div>
}

export default Users
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Kalakolchik, Logo } from '../../svg'
import RegistrationModal from '../MUI/Modal/RegistrationModal/RegistrationModal'
import cls from './styles.module.scss'
import EnterModal from '../MUI/Modal/EnterModal/EnterModal'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import LoginModal from '../MUI/Modal/LoginModal/LoginModal'

export const Header = ({ }) => {


  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [registerOpen, setRegisterOpen] = useState(false);


  const handleOpenRegister = () => {
    setRegisterOpen(true);
    handleClose()
  }
  const handleCloseRegister = () => setRegisterOpen(false);


  const [openLog, setOpenLog] = useState(false);

  const handleOpenLog = () => {
    setOpenLog(true);
    handleClose()
  }
  const handleCloseLog = () => setOpenLog(false);


  const items = [
    { id: 1, link: '/home', name: 'Все потоки' },
    { id: 2, link: '/razrabotka', name: 'Разработка' },
    { id: 3, link: '/administrirovaniya', name: 'Администрирование' },
    { id: 4, link: '/dizayn', name: 'Дизайн' },
    { id: 5, link: '/menegment', name: 'Менеджмент' },
    { id: 6, link: '/nauchop', name: 'Научпоп' },
  ]

  return <div className={cls.wraphead}>
    <div className='container' >
      <header className={cls.header}>
        <Logo link="/home" />
        <nav className={cls.navStyle}>

          {
            items.map(el =>
              <Link className={cls.cheked} to={el.link} key={el.id}>
                {el.name}
              </Link>
            )
          }
        </nav>
        <button className={cls.kalakolchik}>
          <Kalakolchik /><div className={cls.kalakolchikShotchik}>1</div>
        </button>

        <EnterModal onRegisterClik={handleOpenRegister} open={open} handleClose={handleClose} />
        <RegistrationModal open={registerOpen} handleClose={handleCloseRegister} />
        {/* <LoginModal open={openLog} handleClose={handleCloseLog} /> */}
        <Button className={cls.btn} onClick={handleOpen}>Войти</Button>
      </header>
    </div>
  </div>
}

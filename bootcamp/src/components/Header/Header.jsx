// import { Link } from 'react-router-dom'
import { Kalakolchik, Logo } from '../../svg'
import SmButton from '../Buttons/SmButton'
import cls from './styles.module.scss'

export const Header = () => {
  return <div className={cls.wraphead}>
    <div className='container' >
      <header className={cls.header}>
        <Logo link="/" />
        <nav className={cls.navStyle}>
          <ul>
            <li className={cls.chekedAktive}>Все потоки</li>
            <li className={cls.cheked}>Разработка</li>
            <li className={cls.cheked}>Администрирование</li>
            <li className={cls.cheked}>Дизайн</li>
            <li className={cls.cheked}>Менеджмент</li>
            <li className={cls.cheked}>Маркетинг</li>
            <li className={cls.cheked}>Научпоп</li>
          </ul>
        </nav>
        <button className={cls.kalakolchik}>
          <Kalakolchik /><div className={cls.kalakolchikShotchik}>1</div>
        </button>
        <SmButton />

        {/* <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul> */}
      </header>
    </div>
  </div>
}

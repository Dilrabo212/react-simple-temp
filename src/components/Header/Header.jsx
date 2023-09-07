// import { Link } from 'react-router-dom'
import { Logo } from '../../svg'
import SmButton from '../Buttons/SmButton'
import cls from './styles.module.scss'

export const Header = () => {
  return <header className={cls.header}>
    <Logo />
    <nav className={cls.navStyle}>

      <ul>
        <li>Все потоки</li>
        <li>Разработка</li>
        <li>Администрирование</li>
        <li>Дизайн</li>
        <li>Менеджмент</li>
        <li>Маркетинг</li>
        <li>Научпоп</li>
      </ul>

    </nav>
    <SmButton />

    {/* <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul> */}
  </header>
}

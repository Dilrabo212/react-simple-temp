import cls from './styles.module.scss'
import { LogoFooter } from '../../svg'

export const Footer = () => {
  return <footer className={cls.footer}>
    <div className='container'>
      < div className={cls.container}>
        <div className={cls.aboutConeiner}>
          <div className={cls.logoAndText}>
            <div className={cls.logo}> <LogoFooter link={"/"} /></div>
            <p>Помощник в публикации статей, журналов.
              Список популярных международных конференций.
              Всё для студентов и преподавателей.</p>
          </div >
          <div className={cls.card}>
            <b>Ресурсы</b>
            <ul>
              <li>Статьи</li>
              <li>Журналы</li>
              <li>Газеты</li>
              <li>Диплом</li>
            </ul>
          </div>
          <div className={cls.card}>
            <b>О нас</b>
            <ul>
              <li>Контакты</li>
              <li>Помощь</li>
              <li>Заявки</li>
              <li>Политика</li>
            </ul>
          </div>
          <div className={cls.card}>
            <b>Помощь</b>
            <ul>
              <li>Часто задаваемые вопросы</li>
            </ul>
          </div>
        </div>
      </div>
      <p className={cls.copyright}>Copyright © 2020. LogoIpsum. All rights reserved.</p>
    </div>
  </footer>
}

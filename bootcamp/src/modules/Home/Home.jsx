import cls from './style.module.scss'
import user1 from '../../image/ruser1.png'
import user2 from '../../image/ruser2.png'
import user3 from '../../image/ruser3.png'
import History from '../../components/History/History'
import MuiCard from '../../components/MUI/MUICard/MUICard'
import PaginationRounded from '../../components/MUI/Pagination/Pagination'
import { Link } from 'react-router-dom'
import { request } from 'express'

const users = [
  {
    id: 1,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user1,//'/images/ruser1.png'
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 2,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user2,//'/images/ruser2.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 3,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user3,//'/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 4,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user2,//'/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 1,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user1,//'/images/ruser1.png'
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 2,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user2,//'/images/ruser2.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 3,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user3,//'/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 4,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user2,//'/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 1,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user1,//'/images/ruser1.png'
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 2,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user2,//'/images/ruser2.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 3,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user3,//'/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 4,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились ',
    date: '18:26    11.01.2021',
    img: user2,//'/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },

]
export const Home = () => {

  request.get('./posts')
    .then(data => {
      console.log(data)
    })


  return (
    <div className={cls.home}>
      <div className='container'>
        <div className={cls.historyBoxs}>
          <History />


          <div className={cls.userPostes}>
            {users.map(user => (
              <div key={user.id}>
                <Link to={'/useracaunt'}> <MuiCard el={user} /></Link>
              </div>
            ))}
          </div>
          <div className={cls.wrp}>
            <PaginationRounded />
          </div>
        </div>
      </div>
    </div>
  )
}







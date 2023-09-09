import cls from './style.module.scss'
import { Grid } from '@mui/material'
// import user from '../../image/ruser1.png'
import History from '../../components/History/History'
import MUICard from '../../components/MUI/MUICard'

const users = [
  {
    id: 1,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
    date: '18:26    11.01.2021',
    img: '../../image/ruser1.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 2,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
    date: '18:26    11.01.2021',
    img: '/images/ruser2.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 3,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
    date: '18:26    11.01.2021',
    img: '/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },
  {
    id: 4,
    title: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
    date: '18:26    11.01.2021',
    img: '/images/ruser3.png',
    viewed: <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0.638672 6.00065C1.48801 3.29598 4.01534 1.33398 7 1.33398C9.98534 1.33398 12.512 3.29598 13.3613 6.00065C12.512 8.70532 9.98534 10.6673 7 10.6673C4.01534 10.6673 1.48801 8.70532 0.638672 6.00065Z" stroke="#AEBEC9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      365
    </span>
  },

]
export const Home = () => {
  return (
    <div className={cls.home}>
      <div className='container'>
        <div className={cls.historyBoxs}>
          <History />

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
            className={cls.userPostes}
          >
            {users.map(user => (
              <Grid item xs={3} key={user.id}>
                <MUICard el={user} />
              </Grid>
            ))}
          </Grid>
          {/* <div className={cls.wrp}>
            <PaginationRounded />
          </div> */}
        </div>
      </div>
    </div>
  )
}







import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import { Avatar } from '@mui/material';
import user1 from '../../../../image/Ellipse 158.png';
import user2 from '../../../../image/user2.png';
import user3 from '../../../../image/user3.png';
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import { Link } from 'react-router-dom';
import { Home } from '../../../../modules/Home';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '546px',
    bgcolor: 'background.paper',
    border: 'none',
    p: '60px',
    borderRadius: '8px',
};

export default function EnterModal({ open, handleClose, onRegisterClik }) {



    return (
        <Modal
            className={styles.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography className={styles.title} id="modal-modal-title" variant="h4" component="h2">
                    Вход на udevs news
                </Typography>
                <input className={styles.inp} type='text' placeholder='Email' />
                <input className={styles.inp} type='text' placeholder='Пароль' />
                <Link to={'/home'}><Button onClick={handleClose} className={styles.login}>Войти</Button></Link>
                <Button className={styles.question} onClick={onRegisterClik}> Зарегистрироваться</Button>

            </Box>
        </Modal>
    );
}


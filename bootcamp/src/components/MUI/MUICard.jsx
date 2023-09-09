import React from 'react'
import cls from './style.module.scss'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


export default function MUICard({ el }) {
    return (
        <Card className={cls.card}>
            <CardActionArea className={cls.cardBody}>
                <CardMedia
                    className={cls.img}
                    component="img"
                    image={el.img}
                    alt={el.name || el.title}
                />
                <CardContent className={cls.section}>
                    <Typography className={cls.viwed}>
                        {el.date} {el.viwed}
                    </Typography>
                    <Typography className={cls.title}>
                        {el.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

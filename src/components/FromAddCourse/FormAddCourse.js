import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';

import Input from '../Auth/Input';

import { createCourse } from '../../actions/course';

const initialState = { title: '', sector: [], idTutor: ''};


const FormAddCourse = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [form, setForm] = useState({ title: '', sector: [], idTutor: user.result._id});
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm({ ...form, idTutor: user.result._id });
        dispatch(createCourse(form));
        setForm({ ...form, title: '', sector: [] });
      };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleChangeSector = (e) => {
        const list = e.target.value.toUpperCase().split(",");
        setForm({ ...form, ["sector"]: list });
    }

    return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
        
        <Typography component="h1" variant="h5"> Ajouter un cours </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Input name="title" label="Le titre" value={form.title} handleChange={handleChange} autoFocus />
            <Input name="sector" label="Filières" value={form.sector} handleChange={handleChangeSector} />
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Ajouter
            </Button>
        
        </form>
        </Paper>
    </Container>
    )
}

export default FormAddCourse

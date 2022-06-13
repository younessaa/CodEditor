import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';


import { createStudent } from '../../actions/student';


import useStyles from '../Auth/styles';
import Input from '../Auth/Input';

const initialState = { firstName: '', lastName: '', sector: '', email: '', password: '', confirmPassword: '' };

const AddStudent = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    //setIsSignup((prevIsSignup) => !prevIsSignup);
    setIsStudent((prevIsStudent) => !prevIsStudent);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createStudent(form));
    setForm({ ...form, firstName: '', lastName: '', sector: '', email: '', password: '', confirmPassword: '' });
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">{ "Add Student" }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
           
            <Input name="sector" label="Sector" handleChange={handleChange} />
            <Input name="email" label="Email" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { "Add Student"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddStudent;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import { studentSignIn, studentSignUp, tutorSignIn, tutorSignUp } from '../../actions/auth';


import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', sector: '', studentClass: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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

    if (isSignup) {
      isStudent ? dispatch(studentSignUp(form, navigate)) : dispatch(tutorSignUp(form, navigate));
    } else {
      isStudent ? dispatch(studentSignIn(form, navigate)) : dispatch(tutorSignIn(form, navigate));
    }
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isStudent ? "S'authentifier en tant qu'étudiant" : "S'authentifier en tant que tuteur" }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? "S'inscrire" : "S'identifier" }
          </Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isStudent ? 'Êtes-vous un tuteur? Connectez-vous en tant que tuteur' : "Êtes-vous un étudiant ? Se connecter en tant qu'étudiant" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;

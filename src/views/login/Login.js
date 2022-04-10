import React, { useState } from 'react';
import { 
    Container, 
    CssBaseline, 
    Box, 
    Avatar, 
    Typography, 
    TextField, 
    FormControlLabel, 
    Checkbox, 
    Button, 
    Grid, 
    Link
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

const Login = () => {
    const [formInput, setFormInput] = useState({})
    const router = useRouter()

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormInput(
            {               
                ...formInput, 
                [name]: value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { "your-username" : userName, "your-password": userPassword } = formInput;
        ((userName && userPassword) == 'admin') ? router.push('/') : '';
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={
                    {
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }>
                    <Avatar sx={{ backgroundColor: 'primary.main', width: 50, height: 50 }}>
                        <AccountCircleIcon fontSize="large" />
                    </Avatar>
                    <Typography component="h1" variant="h5" mt={1}>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField id="your-username" name="your-username" label="Username" onChange={handleInputChange} variant="outlined" margin="normal" required autoFocus fullWidth />
                        <TextField id="your-password" name="your-password" label="Password" onChange={handleInputChange} variant="outlined" margin="normal" required fullWidth />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/account/forgot/" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/account/register/" variant="body2">
                                    {"Don't have an account? Register!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login
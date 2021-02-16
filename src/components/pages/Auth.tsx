import React, {useState} from 'react';
import {Button, createStyles, makeStyles, TextField, Theme} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme: Theme) => createStyles({
    general: {
        margin: '20px',
        padding: '30px',
        border: 'solid 1px #e7e7e7',
        borderRadius: '4px',
    },
    myAccountBtn: {
        width: '160px',
        height: '50px',
        borderRadius: '4px',
        backgroundColor: '#4b1cff',
    },
    myAccountBtnText: {
        textTransform: 'lowercase',
        fontSize: '16px',
        letterSpacing: '-0.2px',
        textAlign: 'center',
        color: '#ffffff',
    },
    registrationBtn: {
        width: '160px',
        height: '50px',
        borderRadius: '4px',
        border: 'solid 1px #e7e7e7',
        backgroundColor: '#ffffff',
    },
    registrationBtnText: {
        textTransform: 'lowercase',
        fontSize: '16px',
        letterSpacing: -0.2,
        textAlign: "center",
        color: "#131515",
    },
    closeBtn: {
        width: '50px',
        height: '50px',
        padding: 0,
        borderRadius: '4px',
        border: 'solid 1px #e7e7e7',
    },
    header: {
        marginTop: '40px',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#131515"
    },
    inputs: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    input: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '15px',
        fontSize: 18,
        fontWeight: "bold",
        color: "#131515"
    },
    forgot: {
        marginTop: '15px',
        fontSize: 16,
        textAlign: "right",
        color: "#818181",
        textDecoration: 'none',
    },
    inputBg: {
        width: '440px',
        height: '50px',
    },
    logInToYourAccountBtn: {
        display: 'block',
        margin: '36px auto 40px',
        width: '280px',
        height: '60px',
        borderRadius: 4,
        border: 'solid 3px #131515',
    },
    logInToYourAccountBtnText: {
        textTransform: 'lowercase',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#131515"
    },
    socialNetworks: {
        width: '80%',
        display: 'block',
        margin: '0 auto',
        padding: '0 5px 0 50px',
        height: '110px',
        borderRadius: 4,
        backgroundColor: "#f9f9f9",
        [theme.breakpoints.down('sm')]: {
            height: '150px',
        }
    },
    socialContent: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    },
    socialNetworksText: {
        fontSize: 22,
        color: "#131515"
    },
    socialButton: {
        width: '70px',
        height: '70px',
        borderRadius: 4,
        backgroundColor: "#ffffff",
        marginRight: '15px',
    }
}));


const Auth: React.FC = () => {

    const classes = useStyles();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onChange(event: any) {
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    function onSubmit(event: any) {
        event.preventDefault()
        if (username && password) {
            handleAuthorization(username, password).then(r => r);
        }
        setUsername('');
        setPassword('');
    }

    async function handleAuthorization(username: string, password: string) {
        const response: string = await authorization(username, password)
        console.log(response)
    }

    function authorization(username: string, password: string): Promise<string> {
        const URL: string = 'blablabla'
        return fetch(`${URL}`, {
            method: 'POST',
            headers: {
                username: username,
                password: password
            }
        }).then(response => {
            if (!response.ok) {
                return response.status;
            }
            return response.json();
        })
    }

    function fbAuth() {
        console.log('fbAuth')
    }

    function linkedinAuth() {
        console.log('linkedinAuth')
    }

    function close() {
        console.log('close')
    }

    console.log(`username: ${username} password: ${password}`)

    return <React.Fragment>
        <div className={classes.general}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <Button variant="contained" color="primary" className={classes.myAccountBtn} classes={{label: classes.myAccountBtnText}}>Мой
                        аккаунт</Button>
                    <Button className={classes.registrationBtn}
                            classes={{label: classes.registrationBtnText}}>Регистрация</Button>
                </div>
                <Button className={classes.closeBtn} onClick={close}><CloseIcon fontSize={"large"}/></Button>
            </div>
            <div  className={classes.header}>Вход в аккаунт</div>

            <div className={classes.inputs}>
                <div className={classes.input}>
                    <label className={classes.label}>Эл. почта или телефон</label>
                    <TextField type={'text'} variant="outlined" onChange={onChange} name={'username'} value={username} required error={!username} helperText={!username && 'Это обязательное поле'} className={classes.inputBg} />
                </div>
                <div className={classes.input}>
                    <label className={classes.label}>Ваш пароль</label>
                    <TextField type={'text'} variant="outlined" onChange={onChange} name={'password'} value={password} required error={!password} helperText={!password && 'Это обязательное поле'} className={classes.inputBg}/>
                    <a href={'#'} className={classes.forgot}>Забыли свой пароль?</a>
                </div>
            </div>
            <Button disabled={!username || !password} className={classes.logInToYourAccountBtn} onClick={onSubmit} classes={{label: classes.logInToYourAccountBtnText}}>войти в свой аккаунт</Button>

            <div className={classes.socialNetworks}>
                <div className={classes.socialContent}>
                    <label className={classes.socialNetworksText}>или вы можете войти с помощью соцсетей</label>
                    <div>
                        <Button className={classes.socialButton} onClick={fbAuth}><FacebookIcon fontSize={"large"}/></Button>
                        <Button className={classes.socialButton} onClick={linkedinAuth}><LinkedInIcon fontSize={"large"}/></Button>
                    </div>
                </div>
            </div>
        </div>


    </React.Fragment>
}

export default Auth;
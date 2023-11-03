'use client';

import style from './signup.module.css'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

import logo from '../../public/logo_aduOrg.png'
import Image from 'next/image';
import Link from 'next/link'

export default function Login() {
    return (
        <div className={style.container}>

        <div className = {style.logo_box}>
            <Image
                src={logo}
                width={500}
                height={500}
                alt="Logo of Adu Org"
                className= {style.logo_design}
                />
            </div>

            <div className = {style.login_box}>

                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="Logo of Adu Org"
                />
                <h4 className = {style.register_quote}>Register to be aware of what’s happening.</h4>

                <form className={style.form_design}>
                    
                <div className={style.tf_box}>
                        <TextField label="AdU Email Address" variant="filled" type = "email" className = {style.login_tf} />
                        <TextField label="Password" variant="filled" type = "password" className = {style.login_tf}/>
                        <TextField label="Confirm Password" variant="filled" type = "password" className = {style.login_tf}/>
                    </div>

                    
                    
                    <div className={style.button_grp}>
                        <Button variant="contained" className = {style.button_design}>REGISTER</Button>
                        
                        <Link href="/login">Already have an Account? Click here.</Link>
                    </div>

                </form>
            </div>

            

        </div>
    )
}
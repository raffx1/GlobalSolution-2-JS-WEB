import React, { useState } from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginBox = Styled.div`
border: 1px solid #000;
padding: 20px;
margin-top: 50px; 
`

const FormGroup = Styled.div`
margin-bottom: 15px;

`

const LogoText = Styled.div`
font-size: 30px;
font-weight: bold;
`

const Bodycolor = Styled.body`
background-color: #fff;`

function Login() {

    const [formulario, setformulario] = useState({
        "email": "",
        "password": ""
    })

    const navegar = useNavigate()


    function submit(event) {
        event.preventDefault()
        if (formulario.email === "" || formulario.email === null) {
            alert("Por favor, preencha o campo de email")
        }
        if (formulario.password === "" || formulario.password === null) {
            alert("Por favor, preencha o campo de senha")
        }
        axios.get("http://localhost:5000/Users")
            .then(res => {
                res.data.map(user => {
                    if (user.email === formulario.email) {
                        if (user.password === formulario.password) {
                            alert("Login realizado com sucesso")
                            sessionStorage.setItem('Autenticado', true)
                            navegar("/Page")
                        }
                        else {
                            alert('senha errada')
                        }

                    } else { alert('email errado') }
                })
            })
    }

    return (
        <>
            <Bodycolor>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <LogoText className="logo">
                                <span className="logo-text">SC</span>
                            </LogoText>
                        </div>
                        <div className="col-6 text-right">
                            <LogoText className="logo">
                                <span className="logo-text">Global Solution 2023 - Engenharia de Software</span>
                            </LogoText>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <LoginBox className="login-box col-md-4">
                            <form onSubmit={submit}>
                                <FormGroup className="form-group">
                                    <label for="username">Usuário</label>
                                    <input type="text" className="form-control" id="email" placeholder="Digite seu usuário" onChange={(event) => setformulario({ ...formulario, email: event.target.value })} />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <label for="password">Senha</label>
                                    <input type="password" className="form-control" id="password" placeholder="Digite sua senha" onChange={(event) => setformulario({ ...formulario, password: event.target.value })} />
                                </FormGroup>
                                <button type="submit" className="btn btn-dark btn-block">Login</button>
                            </form>
                        </LoginBox>
                    </div>
                </div>
            </Bodycolor>
        </>)


}

export default Login

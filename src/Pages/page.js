import React from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/style.scss';
import ImagemTest from '../assets/img/imagem-teste.jpg';
import axios from 'axios';




function Page() {
    const navegar = useNavigate()

    function logout(){
        sessionStorage.clear()
        navegar('/')
    }
    
    axios.get('http://localhost:5000/Users')
        .then(result => {
            result.data.map(user => {
                const textnome = document.querySelector('#nome')
                const textemail = document.querySelector('#email')

                textnome.innerHTML = "Seja bem vindo " + user.name
                textemail.innerHTML = " de email: " + user.email

            })
        })

    return (
        
        <>
        
            
                <div class="container-fluid">
                    <div class="row header-section">
                        <div class="col-6">
                            <div class="logo">
                                <span class="logo-text">SC</span>
                            </div>
                        </div>
                        <div class="col-6 text-right">
                            <p class="header-text">Global Solution 2023 - Engenharia de Software</p>
                        </div>
                    </div>
                    <div><p id='nome'></p><p id='email'></p>
                        
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div>
                                <img src={ImagemTest} alt="Imagem Teste" class="img-fluid" />
                                <div class="solution-info">
                                    <h2>Saúde Conecta</h2>
                                    <p>Saúde digital, para proporcionar um gerenciamento eficiente e personalizado de doenças crônicas</p>
                                    <button class="btn btn-dark">Mais Informações</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 border-left border-dark d-flex align-items-center">
                            <div class="solution-details">
                                <h1>O que é a solução</h1>
                                <p>Desenvolver o Saúde Conecta, um sistema integrado de saúde digital.</p>
                                <hr />
                                <h1>O que ela fará</h1>
                                <p>Proporcionará um gerenciamento eficiente e personalizado de doenças crônicas, melhorando a qualidade de vida dos pacientes.</p>
                                <hr />
                                <h1>Como funcionará</h1>
                                <p>O usuário sincroniza seu smartwatch para monitorar seus níveis de glicose em tempo real. Além disso pode contar com as vantagens para seu funcionamento completo</p>
                            </div>
                        </div>
                    </div>

                    <div class="advantages-section">
                        <h3>Vantagens</h3>
                        <div class="row">
                            <div class="col-4">
                                <div class="advantage-item highlight">
                                    <div class="icon"><i class="bi bi-bookmark-fill"></i></div>
                                    <div class="text">
                                        <div class="number">01</div>
                                        <p><strong>Monitoramento</strong> de saúde através de dispositivos wearables.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="advantage-item">
                                    <div class="icon"><i class="bi bi-bookmark-fill"></i></div>
                                    <div class="text">
                                        <div class="number">02</div>
                                        <p><strong>Lembretes automáticos</strong> para a ingestão de medicamentos.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="advantage-item">
                                    <div class="icon"><i class="bi bi-bookmark-fill"></i></div>
                                    <div class="text">
                                        <div class="number">03</div>
                                        <p><strong>Comunicação direta </strong>com profissionais de saúde através de chat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button type="buttom" onClick={logout} class="btn btn-dark btn-block">Logout</button>

           
        </>)


}

export default Page
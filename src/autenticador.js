import React from 'react'
import { Navigate } from "react-router-dom"

export function Autenticar({ children }) {
    const usuario = sessionStorage.getItem('Autenticado')
    
    return usuario ? children : <Navigate to='/'/>
}

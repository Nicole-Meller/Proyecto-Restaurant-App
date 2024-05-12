import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { RouterApp } from '../routes/RouterApps'
import './App.css'
import { Layout } from './components/Layout/Layout'

export const App = () => {
  
    return (
      <BrowserRouter>
        <RouterApp/>
        <Layout>
        <Header/>
        <Footer/>
        </Layout>
      </BrowserRouter>
    )
  }
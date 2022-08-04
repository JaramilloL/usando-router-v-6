import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './routers/Inicio';
import Blog from './routers/Blog';
import Contacto from './routers/Contacto';
import NoEncontrada from './routers/NoEncontrada';
import Post from './routers/Post';
//usamos el routers para crear las rutas y ruter para definir los elemntos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Blog/:id' element={<Post/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='*' element={<NoEncontrada/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

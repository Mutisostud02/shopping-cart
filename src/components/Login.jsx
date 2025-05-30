import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
export default function Login() {
 
  return (
    <form className={styles.login}>
    <h2 style={{color:'whitesmoke'}}>Sign in Here!</h2>
      <label>
        Email 
        <input type="email" name="email" className={styles.email}/>
      </label>
      <label>
        Password
        <input name="password" type="password" className={styles.password}/>
      </label>
      <Link to="/LoggedIn">
      <button type="submit" className={styles.submit} >login</button>
      </Link>
      <p>Dont have an account? <span><button className={styles.signUp}>Sign up</button> now</span></p>
    </form>
  );
}

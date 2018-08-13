import React from 'react'
import styles from './styles.scss'

const Login = () => {
  return (
    <form className={styles.login}>
      <label className="username" >Username:</label>
      <input type="text" className="username-input"/>
      <label className="password" >Password:</label>
      <input type="password" className="password-input"/>
      <input type="submit" value="Log me in!" className={styles.submit}/>
    </form>
  )
}

export default Login;
import React from 'react'
import { 
  Form, 
  LoginContainer, 
  Title, 
  Wrapper } from './Login.style'
import { useForm } from "react-hook-form";
import axios from 'axios'

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    await axios.post('https://cartestwebapp.herokuapp.com/employee/login', data)
      .then((response) => {
        console.log(response.data.data.token);
        localStorage.setItem('Auth Token', response.data.data.token)
      })
      .catch((err) => {
        console.log(err);
      })
  } 

  return (
    <Wrapper>
      <LoginContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="number" 
            {...register("phoneNumber")} 
            placeholder='Enter Your Phone...' 
          />
          <input 
            type="password" 
            {...register("password")}
            placeholder='Enter Your Password...' 
          />

          <input type="submit" value={'Login'} />
        </Form>
      </LoginContainer>
    </Wrapper>
  )
}

export default Login
import React, { useState } from 'react'
import { 
  Form, 
  LoginContainer, 
  Title, 
  Wrapper } from './Login.style'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async data => {
    setIsLoading(true)

    try {
      await axios.post('https://cartestwebapp.herokuapp.com/employee/login', data)
      .then((response) => {
        localStorage.setItem('Auth Token', response.data.data.token)
        console.log(response.data);
        console.log('response.data');
        navigate('/admin')
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
    } catch(err) {
      console.log(err);
    }
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

          <input disabled={isLoading} type="submit" value={'Login'} />
        </Form>
      </LoginContainer>
    </Wrapper>
  )
}

export default Login
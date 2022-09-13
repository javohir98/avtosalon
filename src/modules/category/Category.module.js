import React, { useState } from 'react'
import tag from '../../assets/images/tag_dark.png'
import { IoMdClose } from 'react-icons/io'
import { Button, Close, Container, Form, FormGroup, FormLine, FormRowBox, Header, Input, Label, Wrapper } from '../Module.style'
import { useForm } from "react-hook-form";
import axios from 'axios';


const CategoryModule = ({close}) => {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmit = async data => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        setIsLoading(true)

        await axios.post('https://cartestwebapp.herokuapp.com/upload', formData)
        .then((res) => {
            addCategory(data.name, res.data.data)
        })
        .catch(err => console.log(err))
    }

    const addCategory = async (name, imgUrl) => {
        let newdata = {name, imgUrl}

        await axios.post('https://cartestwebapp.herokuapp.com/category', newdata, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Auth Token')
            }
            
        })
        .then((res) => {
            reset()
            setIsLoading(false)
            close(false)
        })
        .catch(err => console.log(err))
    }

  return (
    <Wrapper onClick={() => close(false)}>
        <Container onClick={e => e.stopPropagation()}>
            <Header>
                <div className='title'>
                    <img src={tag} />
                    <h3>Kategoriya qo’shish</h3>
                </div>
                <Close onClick={() => close(false)}>
                    <IoMdClose />
                </Close>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormRowBox>
                        <Label>Markasi</Label>
                        <Input {...register("name")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Rasm 360 ichki makon</Label>
                        <Input {...register("file")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormLine />
                <Button disabled={isLoading} type='submit'>Saqlash</Button>
            </Form>
        </Container>
    </Wrapper>
  )
}

export default CategoryModule
import React, { useEffect, useState } from 'react'
import { Button, Close, Container, Form, FormGroup, FormLine, FormRowBox, Header, Input, Label, Option, Select, TextArea, Wrapper } from '../Module.style'
import { IoMdClose } from 'react-icons/io'
import tag from '../../assets/images/tag_dark.png'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { changeEdit } from '../../redux/admin/adminSlice';
import { uploadFile } from '../../services/FileUploadService';

const AddCarModule = ({close}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [objFile, setObjFile] = useState(null);
    const [nameFile, setNameFile] = useState("");
    const [image, uploadData] = uploadFile();
    const { register, handleSubmit, reset } = useForm();
    const categories = useSelector(state => state.user.category)
    const editData = useSelector(state => state.admin.isEdit.data)
    const dispatch = useDispatch()

    const onSubmit = async data => {
        setIsLoading(true)

        let temporarilyData = {
            "price": parseInt(data.price),
            "year": parseInt(data.year),
            "description": data.description,
            "tonirovka": data.tonirovka,
            "motor": data.motor,
            "color": data.color,
            "distance": data.distance,
            "gearbok": data.gearbok,
            "categoryId": data.categoryId
        }
        
        editData ? handleEdit(temporarilyData) : addCar({...objFile,...temporarilyData});
    }

    const addCar = async (data) => {
        await axios.post('https://cartestwebapp.herokuapp.com/car', data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Auth Token')
            }
        })
        .then((res) => {
            setIsLoading(false)
            reset()
            close(false)
        })
    }

    const handleEdit = async (data) => {
        await axios.put('https://cartestwebapp.herokuapp.com/car', data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Auth Token')
            }
        })
        .then((res) => {
            setIsLoading(false)
            dispatch(changeEdit({
                isOpen: false,
                data: ''
            }))
        })
    }

    const exitModule = () => {
        if(editData.length !== 0) {
            dispatch(changeEdit({
                isOpen: false,
                data: ''
            }))
        } else {
            close(false)
        }
    }

    const handleChange = e => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        uploadData(formData)
        setNameFile(e.target.name)
    }

    useEffect(() => {
        if(nameFile)
            setObjFile({ ...objFile, [nameFile]: image.data });
    }, [nameFile, image]);

  return (
    <Wrapper onClick={exitModule}>
        <Container onClick={e => e.stopPropagation()}>
            <Header>
                <div className='title'>
                    <img src={tag} />
                    <h3>Mashina qo’shish</h3>
                </div>
                <Close onClick={exitModule}>
                    <IoMdClose />
                </Close>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormRowBox>
                        <Label>Markasi</Label>
                        <Select {...register("categoryId")} defaultValue={editData && editData.marka._id}>
                            {categories.map((item) => (
                                <Option 
                                    defaultValue={editData && editData.marka?._id === item._id} 
                                    value={item._id}
                                    key={item._id}
                                >
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Tanirovkasi</Label>
                        <Input 
                            {...register("tonirovka")} 
                            defaultValue={editData && editData.tonirovka} 
                            type={'text'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Motor</Label>
                        <Input 
                            {...register("motor")} 
                            defaultValue={editData && editData.motor} 
                            type={'text'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Year</Label>
                        <Input 
                            {...register("year")} 
                            defaultValue={editData && editData.year} 
                            type={'number'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Color</Label>
                        <Input 
                            {...register("color")} 
                            defaultValue={editData && editData.color} 
                            type={'text'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Distance</Label>
                        <Input 
                            {...register("distance")} 
                            defaultValue={editData && editData.distance} 
                            type={'number'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Gearbook</Label>
                        <Input 
                            {...register("gearbok")} 
                            defaultValue={editData && editData.gearbok} 
                            type={'text'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Narxi</Label>
                        <Input 
                            {...register("price")} 
                            defaultValue={editData && editData.price} 
                            type={'number'} 
                            placeholder='Kiriting' 
                        />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Rasm 360 ichki makon</Label>
                        <Input onChange={handleChange} name="imgUrlInside" type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Rasm 360 tashqi makon</Label>
                        <Input onChange={handleChange} name='imgUrlAutside' type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Deseription</Label>
                        <TextArea 
                            rows={6} 
                            {...register("description")} 
                            defaultValue={editData && editData.description} 
                            type={'text'} 
                            placeholder='Mazmuni kiriting' 
                        />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Modeli turi uchun rasm </Label>
                        <Input onChange={handleChange} name='imgUrl' type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormLine />
                <Button disabled={isLoading} type='submit'>Saqlash</Button>
            </Form>
        </Container>
    </Wrapper>
  )
}

export default AddCarModule
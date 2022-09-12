import React, { useMemo, useState } from 'react'
import List from '../components/List';
import { Container, Table, TBody, Th, THead, Tr, PContainer, Head, ActionsBtn } from './index.style';
import Pagination from '../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../redux/admin/adminSlice';
import tag from '../../../assets/images/tag.png'
import { AiOutlinePlus } from 'react-icons/ai'
import CategoryModule from '../../../modules/category/Category.module';
import AddCarModule from '../../../modules/car/AddCar.module';
import { getCategory } from '../../../redux/user/userSlice';

    
const CarList = () => {
    const PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [isOpenCars, setIsOpenCars] = useState(false);
    const total = useSelector(state => state.admin?.totalCars)
    const dispatch = useDispatch()

    useMemo(() => {
        dispatch(getCars({limit: 5, page: currentPage}))
    }, [currentPage]);

    const changeOpenCar = () => {
        setIsOpenCars(true)
        dispatch(getCategory())
    }
    
    return (
        <Container>
            <Head>
                <div className='title'>
                    <img src={tag} />
                    <h3>Mashinalar</h3>
                </div>
                <div className='btn-container'>
                    <ActionsBtn onClick={() => setIsOpenCategory(true)}><AiOutlinePlus />Kategoriya qo’shish</ActionsBtn>
                    <ActionsBtn onClick={changeOpenCar}><AiOutlinePlus />Mashina qo’shish</ActionsBtn>
                </div>
            </Head>
            <Table>
                <THead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Markasi</Th>
                        <Th>Gearbook</Th>
                        <Th>Tanirovkasi</Th>
                        <Th>Motor</Th>
                        <Th>Year</Th>
                        <Th>Color</Th>
                        <Th>Distance</Th>
                        <Th>Actions</Th>
                    </Tr>
                </THead>
                <div style={{height: '32px'}}></div>
                <TBody>
                    <List />
                </TBody>
            </Table>
            <PContainer>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={total}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </PContainer>
            {isOpenCategory && <CategoryModule close={setIsOpenCategory} />}
            {isOpenCars && <AddCarModule close={setIsOpenCars} />}
        </Container>
    )
    }
    
export default CarList
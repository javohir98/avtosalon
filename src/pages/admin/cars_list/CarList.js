import React, { useMemo, useState } from 'react'
import List from '../components/List';
import { Container, Table, TBody, Th, THead, Tr, PContainer, Head, ActionsBtn } from './index.style';
import Pagination from '../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../redux/admin/adminSlice';
import tag from '../../../assets/images/tag.png'
import { AiOutlinePlus } from 'react-icons/ai'

    
const CarList = () => {
    const PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const total = useSelector(state => state.admin?.totalCars)
    const dispatch = useDispatch()

    useMemo(() => {
        dispatch(getCars({limit: 5, page: currentPage}))
    }, [currentPage]);
    
    return (
        <Container>
            <Head>
                <div className='title'>
                    <img src={tag} />
                    <h3>Mashinalar</h3>
                </div>
                <div className='btn-container'>
                    <ActionsBtn><AiOutlinePlus />Kategoriya qo’shish</ActionsBtn>
                    <ActionsBtn><AiOutlinePlus />Mashina qo’shish</ActionsBtn>
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
        </Container>
    )
    }
    
export default CarList
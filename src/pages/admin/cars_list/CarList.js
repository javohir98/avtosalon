import React, { useMemo, useState } from 'react'
import List from '../components/List';
import { Container, Table, TBody, Th, THead, Tr, PContainer } from './index.style';
import Pagination from '../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../redux/admin/adminSlice';

    
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
            <h1>Title and Actions</h1>
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
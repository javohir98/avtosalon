import React from 'react'
import List from '../components/List';
import { Container, Table, TBody, Th, THead, Tr } from './index.style';

const index = () => {

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
        <h1 style={{textAlign: 'center'}}>Pagination</h1>
    </Container>
  )
}

export default index
import React from 'react'
import { Tr, Td, Button } from '../cars_list/index.style'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const ListItem = ({item, index}) => {
    
  return (
    <Tr>
        <Td>{index}</Td>
        <Td>{item?.marka?.name}</Td>
        <Td>{item.gearbok}</Td>
        <Td>{item.tonirovka}</Td>
        <Td>{item.motor}</Td>
        <Td>{item.year}</Td>
        <Td>{item.color}</Td>
        <Td>{item.distance}</Td>
        <Td>
          <Button color='#438aca' style={{paddingRight: '8px'}}><FaEdit /></Button>
          <Button color='#dc4a38'><MdDelete /></Button>
        </Td>
    </Tr>
  )
}

export default ListItem
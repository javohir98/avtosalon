import React from 'react'
import { Tr, Td, Button } from '../cars_list/index.style'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { changeEdit, deleteItem } from '../../../redux/admin/adminSlice'
import { getCategory } from '../../../redux/user/userSlice'

const ListItem = ({item, index}) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    axios.delete(`https://cartestwebapp.herokuapp.com/car/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('Auth Token')}`
      },
    })
      .then(res => {
        dispatch(deleteItem(id))
      })
      .catch(err => {
        console.log(err);
      })
  }

  const edit = () => {
    dispatch(changeEdit({
      isOpen: true,
      data: item
    }))
    dispatch(getCategory())
  }
    
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
          <Button color='#438aca' style={{paddingRight: '8px'}} onClick={edit}><FaEdit /></Button>
          <Button color='#dc4a38' onClick={() => handleDelete(item._id)}><MdDelete /></Button>
        </Td>
    </Tr>
  )
}

export default ListItem
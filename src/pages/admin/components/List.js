import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const List = () => {
    const list = useSelector(state => state.admin.cars)

  return (
    <>
        {list?.data?.map((item, index) => (
            <ListItem item={item} index={index + 1} />
        ))}
    </>
  )
}

export default List
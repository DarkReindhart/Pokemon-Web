import React from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../../redux/actions'

export default function TestingButtons() {
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getPokemons())
    }
  return (
    <button onClick={handleClick}>TEST</button>
  )
}

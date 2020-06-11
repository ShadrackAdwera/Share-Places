import React from 'react'

import Input from '../../../shared/components/UIElements/FormElements/Inputs/Input'

import './NewPlace.css'

const NewPlace = () => {
return <form className='place-form'>
    <Input element='input' type='text' label='Title'/>
</form>
}

export default NewPlace
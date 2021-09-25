import React from 'react'
import { Button } from '@material-ui/core'
import './button.css';

<<<<<<< HEAD
export default function PfButton({text,icon, func}) {
    
    return (
        <Button onClick={func}
        className={'custom_btn'} endIcon={icon ? (
        <div className={'btn_icon_container'}>{icon} </div> ) : null}>
=======
export default function PfButton({text,icon,func}) {
    return (
        <Button 
        onClick={func}
        className={'custom_btn'} endIcon={icon ? (
        <div className={'btn_icon_container'}>{icon}</div> ) : null}>
>>>>>>> divided_contract
        <span className='btn_text'>{text}</span>
       
        </Button>
    )
}


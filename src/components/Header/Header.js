import React, { Component } from 'react';
import '../../styles/bootstrap.min.css';
import { BiBookReader } from 'react-icons/bi';


export default function Header (){
    return(
        <h1 className='display-4 text-center'>
            <BiBookReader className='text-warning'/>
            Moji React <span className='text-warning'>Book</span> list Project
        </h1>
    )
}

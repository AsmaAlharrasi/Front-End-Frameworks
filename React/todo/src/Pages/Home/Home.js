import React from 'react'
import './Home.css'

export default function Home() {
    return (

        <>
            <div className='text-center'>
                <div className='row justify-contect-around'>
                    <div className='row'>
                        
                        <div class="main">
                        <div className='col-8'>
                                    <h1>To Do List</h1>
                                </div>
                            <div>
                               
                            <h2>Holla, I'm Asma Al-Harrasi</h2>
                            <h3>Exeplore My To Do List</h3>
                            <a href="/AddToDo" class="main-btn">Add To Do</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

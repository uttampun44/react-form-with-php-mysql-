import React from 'react'

function Header() {
  return (
    <header className='bg-black'>
        <nav>
            <div className='header'>
                <div className='container flex justify-between align-middle mr-auto ml-auto py-5'>
                    <div className='headingHeader'>
                        <h1 className='text-white font-medium text-xl font-sans'>Fullstackform</h1>
                    </div>
                    <div className='headerMenu flex justify-between items-center gap-3'>
                         <p className='text-white font-normal text-sm font-sans'>Home</p>
                         <p className='text-white font-normal text-sm font-sans'>About</p>
                         <p className='text-white font-normal text-sm font-sans'>Contact Us</p>
                    </div>
                </div>    
            </div>
        </nav>
    </header>
  )
}

export default Header
import React from 'react'
import Firstpage from './Firstpage'
import Headerr from './Headerr'

const Home = () => {

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      <div>
        <header>
            <Headerr />
        </header>
      </div>
      <div className='overflow-scroll overflow-x-hidden'>
        <main>
          <Firstpage />
        </main>
      </div>
    </div>
  )
}

export default Home
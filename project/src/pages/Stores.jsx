import React from 'react'
import './Stores.css'
const Stores = () => {
  return (
    <div>
    <div className='heading'>
        <h1>STORES</h1>
        <p>Find us in these fine stores:</p>
    </div>
    <div className='content'>
        <div className='div1'>
            <h2>The Blues</h2>
            <p>500 Terry Francine Street
            San Francisco, CA 94158
            Phone: 123.456.7890</p>
            <p>Mon-Sat: 10:00am-7:00pm
            Sunday: Closed</p>
        </div>
        <div className='div2'>
            <h2>EVA</h2>
            <p>500 Terry Francine Street
            San Francisco, CA 94158
            Phone: 123.456.7890</p>
            <p>Mon-Fri: 9:00am-6:00pm
            Sat-Sun: 10:00am-5:00pm</p>
        </div>
        <div className='div3'>
            <h2>City Center</h2>
            <p>500 Terry Francine Street
            San Francisco, CA 94158
            Phone: 123.456.7890</p>
            <p>Mon-Sat: 10:00am-7:00pm
            Sunday:Closed</p>
        </div>
    </div>
    </div>
  )
}

export default Stores

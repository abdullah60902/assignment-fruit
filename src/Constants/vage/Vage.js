import React from 'react'
import food from '../../asset/Food Photo (1).png'
import food2 from '../../asset/Food Photo (2).png'
import food3 from '../../asset/Food Photo (3).png'
import food4 from '../../asset/Food Photo png'
import './vage.css'
export default function Vage() {
  return (
    <div>
    <div className='card-veg'>
        <div>
            <img src={food} alt='' className='fruit'/>
            <p className='grey'>Greys Vage</p>
            <button className='days6'>
                <p className='remaning'>6 Days Remaining</p>
            </button>
        </div>
        <div>
            <img src={food2} alt='' className='fruit'/>
            <p className='grey'>Greys Vage</p>
            <button className='days6'>
                <p className='remaning'>6 Days Remaining</p>
            </button>
        </div>
        <div>
            <img src={food3} alt='' className='fruit'/>
            <p className='grey'>Greys Vage</p>
            <button className='days6'>
                <p className='remaning'>7 Days Remaining</p>
            </button>
        </div>
        <div>
            <img src={food4} alt='' className='fruit'/>
            <p className='grey'>Greys Vage</p>
            <button className='days6'>
                <p className='remaning'>8 Days Remaining</p>
            </button>
        </div>

    </div></div>
  )
}

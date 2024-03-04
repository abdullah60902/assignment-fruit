import React from 'react'
import './scroller.css'
import icon from '../../asset/Icon (1).svg'
import icon2 from '../../asset/Icon (2).svg'
import icon3 from '../../asset/Icon (3).svg'
import base from '../../asset/Image Base.png'

export default function scroller() {
  return (
    <div>

<div classNameName='orang-back'>
        <p classNameName='starving'>Are you starving?</p>
        <p classNameName='within'>Within a few clicks, find meals that are accessible near you</p>
        <div classNameName='circle'>
            <div classNameName='white-border-box-1'>
                <div classNameName='white-border-box'>
                    <button classNameName='bik'><img src={icon} alt='' classNameName='motor'/>
                        <p classNameName='very'>Delivery</p>
                    </button>
                    <button classNameName='pick-lock'><img src={icon2} alt='' classNameName='lock'/>
                        <p classNameName='pickup'>Pickup</p>
                    </button>
                </div>
                <hr classNameName='hr-00'/>
                {/* displayflex */}
                <div classNameName='fh'>
                    <input type='email' classNameName='email email-2' placeholder='Enter your address'/>
                    <button classNameName='find-search'><img src={icon3} alt=''/>
                        <p classNameName='find'>Find Food</p>
                    </button>
                </div>

            </div>
            <img src={base} alt='' classNameName='opps'/>
        </div>


    </div>


    </div>
  )
}

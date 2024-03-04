import React from 'react'
import mask from '../../asset/Mask Group.png'
import market from '../../asset/map-marker-alt.png'
import search from '../../asset/Search.png'
import user from '../../asset/user.png'


import './header.css'

export default function header() {
  return (
    <div>
         <div classNameName='navbar-main'>
        <div classNameName='bus'>
            <img src={mask} alt='' classNameName='burger'/>
            <p classNameName='food'>food</p>
            <p classNameName='wagon'>waGon</p>
        </div>
        <div classNameName='para-map'>
            <p classNameName='deliver'>Deliver to:</p>
            <img src={market} alt='' classNameName='map'/>
            <p classNameName='location'>Current Location</p>
            <p classNameName='pur'>Mohammadpur Bus Stand, Dhaka</p>
        </div>
        <div classNameName='log'>
            <img src={search} alt='' classNameName='search'/>
            <p classNameName='food-search'>Seaech food</p>
            <button classNameName='yellow-b'><img src={user} alt='' classNameName='user'/>
                <p classNameName='login-st'>login</p>
            </button>
        </div>

    </div>

    </div>
  )
}

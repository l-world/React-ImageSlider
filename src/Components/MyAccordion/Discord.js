import React from 'react'
import discordImg from './Icon/discord-brands.svg'

export default function Discord() {
  return (
    <div className='wrap-discord'>
        <div className='header'>
            <img className='header__icon' src={discordImg} alt="discord-icon" />
            <h2 className='header__title'>DISCORD</h2>
        </div>
        <h4 className='desc__title'>DevDojo Discord</h4>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nam obcaecati aliquid possimus vel suscipit modi alias quam! Illum, consequuntur? Iure ea dolorum sunt possimus totam a sed exercitationem iste.</p>
    </div>
  )
}

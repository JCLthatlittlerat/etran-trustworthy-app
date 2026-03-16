import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='footer-left flex flex-col justify-between '>
            <Image src={'/public/etran-logo.png'} alt='etran-logo' width={200} height={200}/>
            <p className='capitalize font-bold text-4xl'>etran</p>
        </div>    
        <div className='footer-right flex flex-col justify-between '>
            <div className="contacts">
                <h4 className='capitalize text-(--subheading)'>contact</h4>
                <p className="email">hello@figma.com</p>
                <p className="insta capitalize">Instgram</p>
                <p className="x capitalize">X</p>
                <p className="linkedin capitalize">LinkedIn</p>
            </div>
            <div className="policies text-(--subheading)">
                <p className="terms capitalize">Terms&Conditions</p>
                <p className="privacy capitalize">Privacy</p>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
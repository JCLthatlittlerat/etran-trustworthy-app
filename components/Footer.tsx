import Image from 'next/image';


function Footer() {
  return (
    <footer className='flex justify-between p-10 bg-(--subheading) text-black gap-y-15'>
        <div className='footer-left flex flex-col justify-between '>
            <Image src={'/etran-logo-2.svg'} alt='etran-logo' width={50} height={50} />
            <p className='capitalize font-bold text-4xl '>etran</p>
        </div>    
        <div className='footer-right flex flex-col justify-between gap-y-10 '>
            <div className="contacts">
                <h4 className='capitalize text-(--paragraph-2)'>contact</h4>
                <p className="email">hello@figma.com</p>
                <p className="insta capitalize">Instgram</p>
                <p className="x capitalize">X</p>
                <p className="linkedin capitalize">LinkedIn</p>
            </div>
            <div className="policies text-(--paragraph-2)">
                <p className="terms capitalize">Terms&Conditions</p>
                <p className="privacy capitalize">Privacy</p>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
import Image from 'next/image';
import Link from 'next/link';


function Footer() {
  return (
    <footer className='flex justify-between p-10 bg-(--subheading) text-black gap-y-15'>
        <section className='footer-left flex flex-col justify-between '>
            <Link href={'#hero-container'}><Image src={'/etran-logo-2.svg'} alt='etran-logo' width={50} height={50} /></Link>
            <Link href={'#hero-container'}><p className='capitalize font-bold text-4xl '>etran</p></Link>
        </section>    
        <article className='footer-right flex flex-col justify-between gap-y-10 '>
            <section id='contacts' className="contacts">
                <h4 className='capitalize text-(--paragraph-2)'>contact</h4>
                <p className="email">hello@etran.com</p>
                <p className="insta capitalize">Sales: +1 (402) 933-4864</p>
                <Link href={'https://twitter.com/ftni'}><p className="x capitalize">X</p></Link>
                <Link href={'https://www.linkedin.com/company/financial-transmission-network-inc-/'}><p className="linkedin capitalize">LinkedIn</p></Link>
            </section>
            <section id='policies' className="text-(--paragraph-2)">
                <Link href={'https://www.ftni.com/about'}><p className="terms capitalize">Terms&Conditions</p></Link>
                <Link href={'https://www.ftni.com/blog'}><p className="privacy capitalize">Privacy</p></Link>
            </section>
        </article>    
    </footer>
  )
}

export default Footer
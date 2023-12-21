import { SignLink } from '../..'

function NavFooter() {
  return (
    <>
      <div className='flex flex-col gap-5 w-48'>
        <SignLink link='/' name='Our Services' className='text-black font-semibold'/>
        <SignLink link='/' name='Why Us' className='text-black font-semibold'/>
        <SignLink link='/' name='Testimonial' className='text-black font-semibold'/>
        <SignLink link='/' name='FAQ' className='text-black font-semibold'/>
      </div>
    </>
  )
}

export default NavFooter
import { Text, Title } from '../..';

function TestimonialTitle() {
    
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <Title title='Testimonial' className='text-xl font-bold'/>
        <Text text='Berbagai review positif dari pelanggan kami'/>
      </div> 
    </>
  )
}

export default TestimonialTitle
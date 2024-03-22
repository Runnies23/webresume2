
import Box from './box';
import Bg from './bg';

export default function First(){
   return(
    <div className='w-fit bg-white'>
      <Bg className='-z-10'/>
      <Box className='z-10'/>
   </div>
   );
}
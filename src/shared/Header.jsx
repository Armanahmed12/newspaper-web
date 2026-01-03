import pageName from '../assets/logo.png'
import { format } from "date-fns";

const Header = () => {
    const date = new Date();
    return (
        <div className='flex flex-col   items-center justify-center my-5'>
             <img src={pageName} alt="" />
              <h2 className='text-xl my-1'>Journalism Without Fear or Favour</h2>
              <b className='text-lg'> {format(date, "EEE MMMM dd yyy")} </b>
        </div>
    );
};

export default Header;
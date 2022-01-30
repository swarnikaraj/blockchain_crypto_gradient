import { BsShieldCheck } from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {RiHeart2Fill} from "react-icons/ri";

import { shortenAddress } from "../utils/shortenAddress";

const ServiceCard=()=>(
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">

    </div>
)


const Services=()=>{
    return (
      <div className="flex w-full justify-center items-center gradient-bg-services">
       <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">

        <div className="flex-1 flex-col justify-start items-start">
          
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-2">Services</h1>

          <br/>
          

        </div>


       </div>
        
        <div className="flex-1 flex flex-col justify-start items-center">
             
            
        

        </div>
      
      </div>
    );

}


export default Services;

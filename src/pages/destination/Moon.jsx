
import CountUp from "react-countup"
import NavDestination from "../../components/NavDestination"
import ImgMoon from "../../assets/destination/image-moon.png"


const Moon = () => {

    return(

        <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col w-full h-full ">
            <div className="lg:mt-60  md:mt-[200px] mt-40 text-white">
                <p className="lg:-ml-20 lg:tracking-[4px] lg:text-[28px] md:ml-10 md:text-xl md:text-start md:tracking-[3px] text-center tracking-[2.7px] "> <span className="text-gray-500 font-bold mr-7">01</span> PICK YOUR DESTINATION</p>
                <div className="lg:mt-24 md:mt-[60px] md:flex md:justify-center mt-8 flex justify-center">
                    <img src={ImgMoon} alt="" className="lg:w-[445px] md:w-[300px] w-[170px] " />
                </div>
            </div>
                <div className="lg:mt-[300px] md:mt-[53px] md:flex md:flex-col md:items-center mt-[26px] flex flex-col items-center">
                    <NavDestination/>
                    <div className="lg:mt-[37px] md:mt-8 mt-5">
                        <h1 className="font-belf lg:text-[100px] md:text-[80px] text-[56px] text-white">MOON</h1>
                    </div>
                    <div className="text-center">
                        <p className="text-lg text-[#D0D6F9]">See our planet as you’ve never seen it before. A perfect  <br /> relaxing trip away to help regain perspective and come <br /> 
                        back refreshed. While you’re there, take in some history <br /> by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    </div>
                    <div className="lg:w-[400px] md:w-[550px] mt-[54px] w-[300px] border border-[#383B4B]"></div>
                    <div className="md:flex md:flex-row md:gap-20 flex flex-col items-center mt-7">
                        <div>
                            <p className="text-[#D0D6F9] lg:text-start text-center tracking-[2.36px]">AVG. DISTANCE</p>
                            
                            <p className="text-white font-belf md:mt-0 mt-3 text-[28px]">
                                <CountUp 
                                    end={384.400} 
                                    duration={1}
                                    decimals={3}
                                    decimal="." 
                                    suffix=" KM" 
                                
                                />
                            </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                            <p className="text-[#D0D6F9] tracking-[2.36px]">EST. TRAVEL TIME</p>

                            <p className="text-white font-belf md:mt-0 mt-3 text-[28px] lg:text-start text-center">
                                <CountUp 
                                    end={3}
                                    duration={1}
                                    suffix={" Days"}
                                />
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Moon
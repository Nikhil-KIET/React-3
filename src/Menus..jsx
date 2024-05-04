function Menus(){
    return(
        <div className="w-screen flex justify-center ">
            <div className="flex justify-center w-[80%] space-x-6 my-2 h-10 bg-[grey] items-center">
        <div className="bg-[maroon] px-10 text-white h-[100%] flex items-center">
            <a href="">HOME</a>
        </div>
        <div className="  px-10 text-white h-[100%] flex items-center ">
            <a href="">ABOUT</a>
        </div>
        <div className="px-10 text-white  h-[100%] flex items-center">
            <a href="">SERVICES</a>
        </div>
        <div className=" px-10  text-white h-[100%] flex items-center">
            <a href="">FAQ</a>
        </div>
        <div className=" px-10  text-white h-[100%] flex items-center">
            <a href="">CONTACT</a>
        </div>
    </div>

        </div>
    
    )
}
export default Menus;
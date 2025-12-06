export default function Contact() {
  return (
    <section>
      <div className="flex justify-center mt-10 lg:pt-5 ">
        <div className=" bg-white border-2 border-black lg:w-[400] lg:h-[550] sm:w-[400] sm:h-[500] rounded-lg p-5 ">
          <div className="text-black">
            <form action="" method="post" className="flex flex-col gap-7 md:gap-5 ">
                <div className="text-center" >
<h2 className="text-black font-bold md:text-3xl text-lg">Contact Us</h2>
    <h3 className="text-lg mt-2">Get touch With Us</h3>
                </div>
                <div>
                
                </div>
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text"  className="bg-transparent border-b border-black outline-none text-black text-lg"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Email</label>
                <input type="email" className="bg-transparent border-b border-black outline-none text-black text-lg" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="bg-transparent border-b border-black outline-none text-black text-lg" />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="message">Message</label>
                <textarea name="" id="" cols="10" className="p-3 border-2 outline-none rounded-lg  "></textarea>
              </div>
              <div className=" flex  flex-col lg:mt-5">
                <button className=" rounded-lg  py-2  bg-blue-500 hover:bg-blue-700 text-white">Send Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

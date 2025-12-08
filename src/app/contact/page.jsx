"use client";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4">
      <button
        onClick={back}
        className="absolute top-6 left-6 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl hover:opacity-80"
      >
        <FaArrowLeftLong className="h-5 w-5" />
      </button>

      <div className="bg-white border-2 border-black lg:w-[400px] lg:h-[580px] sm:w-[400px] sm:h-[570px] rounded-lg p-6">
        <form className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-black font-bold md:text-3xl text-xl">
              Contact Us
            </h2>
            <p className="text-lg mt-2">Get in Touch With Us</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="bg-transparent border-b border-black outline-none text-black text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="bg-transparent border-b border-black outline-none text-black text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="bg-transparent border-b border-black outline-none text-black text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="p-3 border-2 outline-none rounded-lg resize-none"
              rows={4}
            ></textarea>
          </div>

          <button className="rounded-lg py-2 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer">
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
}

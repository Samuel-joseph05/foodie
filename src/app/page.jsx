"use client"; // Required for App Router

import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  const router = useRouter();

  const menu = () => {
    router.push("/menu");
  };
  const aboutus = () => {
    router.push("/about_us");
  };

  return (
    <main className="min-h-screen bg-background">
      <div className=" flex  gap-2 md:block ">
        <div className="md:relative">
          <h1 className="text-orange-600 md:text-2xl text-3xl font-bold font-serif  ml-5 mt-10  md:ml-5 md:mt-10 ">
            Foodie
          </h1>
        </div>
        <div className="md:absolute md:top-7 md:left-25 absolute  top-7 left-32 md:ml-3  ">
          <Image
            src="/roasted-chicken.png"
            alt="Delicious food delivery"
            width={50}
            height={50}
          />
        </div>
        <div className="md:flex md:gap-10 md:absolute md:top-7 md:right-12 md:ml-3 font-medium text-lg sm:hidden hidden ">
          <p
            className="cursor-pointer hover:text-orange-600 "
            onClick={aboutus}
          >
            About Us
          </p>
          <p
            className="cursor-pointer hover:text-orange-600  "
            onClick={() => {
              router.push("/product_highlights");
            }}
          >
            Product Highlights
          </p>
          <p
            className="cursor-pointer hover:text-orange-600 "
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact Us
          </p>
        </div>
      </div>
      <div className="lg:hidden  absolute top-10 right-5">
        <AiOutlineMenu size={25} onClick={menu} />
      </div>

      <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold tracking-tight text-balance ">
              Delicious Food Delivered to Your{" "}
              <span className="text-orange-600">Doorstep</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 text-pretty">
              Order from your favorite restaurants and enjoy hot, fresh meals
              delivered fast. Your cravings are just a tap away.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={() => router.push("/product_highlights")}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-[300] h-[300]  lg:flex-1 aspect-square lg:h-[500px]  rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/Chicken.jpg"
              alt="Delicious food delivery"
              width={800}
              height={300}
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <Image
                  src="/fast delivery truck.png"
                  alt="fast delivery truck"
                  width={150}
                  height={200}
                  className="rounded-sm lg:w-[200] lg:h-[200] "
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your favorite meals delivered hot and fresh to your doorstep
                in 30 minutes or less.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 mt-11 ">
                <Image
                  src="/fresh-tomatoes-green-peppers_2.png"
                  alt="Fresh Ingredients"
                  width={200}
                  height={100}
                  className="rounded-sm w-[200] h-[150]  "
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the highest quality, farm-fresh ingredients for
                every dish we prepare.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-15 mt-20">
                <Image
                  src="/best-price.png"
                  alt="Affordable Pricing"
                  width={100}
                  height={100}
                  className="lg:w-16 lg:h-16"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground">
                Enjoy restaurant-quality meals at prices that won t break the
                bank. Great value every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

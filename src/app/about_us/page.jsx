"use client";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-amber-50 py-20 lg:py-10">
        <button
          onClick={back}
          className="absolute top-5 left-2 mb-6 flex items-center gap-2 text-muted-foreground bg-black text-white px-3 py-1 lg:px-5 lg:py-2 rounded-2xl  hover:text-foreground"
        >
          <FaArrowLeftLong className="h-5 w-5" />
        </button>
      <div className="mx-auto max-w-7xl px-6  lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h1 className="text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 font-light">
            Crafting exceptional food experiences with passion and authenticity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Born from a love of authentic flavors and sustainable practices,
                our journey began in a small kitchen with a big dream. Today, we
                are proud to bring farm-fresh, artisanal food to tables across
                the country.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every ingredient is carefully sourced, every recipe thoughtfully
                crafted, and every bite designed to create memorable moments
                that bring people together.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To nourish communities with wholesome, delicious food while
                supporting local farmers and protecting our planet for future
                generations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/50 bg-linear-to-br from-orange-100 to-amber-100 aspect-4/5 ">
              <Image
                src="/fresh-ripe-vegetables-.jpg"
                alt="Fresh artisanal food ingredients"
                width={500}
                height={700}
                className="w-[800] h-[880] object-cover  "
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-linear-to-br from-orange-400 to-amber-500 rounded-full opacity-20 blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-linear-to-br from-orange-300 to-yellow-400 rounded-full opacity-20 blur-3xl -z-10" />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-300/50">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to eco-friendly practices, from sourcing to
                packaging, ensuring every choice protects our planet.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-300/50">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest ingredients make it into our products. We never
                compromise on taste, freshness, or nutritional value.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-300/50">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Love
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting local farmers and giving back to our community is at
                the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function BestSellers() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };
  const bestSellers = [
    {
      id: 1,
      name: "Truffle Mushroom Risotto",
      description:
        "Creamy Arborio rice with wild mushrooms and white truffle oil",
      price: 250,
      image: "/truffle-mushroom-risotto-gourmet-food.jpg",
    },
    {
      id: 2,
      name: "Wagyu Beef Burger",
      description:
        "Premium wagyu patty with aged cheddar and caramelized onions",
      price: 150,
      image: "/wagyu-beef-burger-gourmet.jpg",
    },
    {
      id: 3,
      name: "Pan-Seared Salmon",
      description:
        "Fresh Atlantic salmon with lemon butter sauce and asparagus",
      price: 200,
      image: "/pan-seared-salmon-fine-dining.jpg",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description:
        "Wood-fired pizza with San Marzano tomatoes and fresh mozzarella",
      price: 99,
      image: "/margherita-pizza-wood-fired.jpg",
    },
  ];

  return (
    <section className="relative py-16 px-4 ">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <button
          onClick={back}
          className="mb-6 flex items-center gap-2 text-muted-foreground bg-black text-white lg:px-5 px-3 py-1  lg:py-2   rounded-2xl  hover:text-foreground"
        >
          <FaArrowLeftLong className="h-5 w-5" />
        </button>
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-serif text-4xl font-bold text-balance">
            Best Sellers
          </h2>
          <p className="text-muted-foreground text-lg">
            Our most loved dishes, crafted with passion
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="mb-2 font-semibold text-lg text-balance">
                  {item.name}
                </h3>
                <p className="mb-4 text-muted-foreground text-sm text-pretty">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-primary">
                    ₹{item.price}
                  </span>
                  <button className=" border-2 border-solid border-black rounded-lg  px-4 py-2 font-medium text-black text-sm transition-colors hover:bg-black hover:text-white ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

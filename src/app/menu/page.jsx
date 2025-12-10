"use client";
import { useRouter } from "next/navigation";
import { HiXMark } from "react-icons/hi2";

export default function Menubar() {
  const router = useRouter();
  const aboutus = () => {
    router.push("/about_us");
  };
  const ProductHighlights = () => {
    router.push("/product_highlights");
  };
  const contact = () => {
    router.push("/contact");
  };

  return (
    <section className="select-none">
      <div className="absolute right-4 top-9">
        <HiXMark
          size={30}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div className="relative font-medium ml-22 mt-25 text-2xl">
        <p className="mb-3 hover:text-orange-600" onClick={aboutus}>
          About Us
        </p>
        <p className="mb-3 hover:text-orange-600" onClick={ProductHighlights}>
          Product Highlights
        </p>
        <p onClick={contact} className="hover:text-orange-600">
          Contact Us
        </p>
      </div>
    </section>
  );
}

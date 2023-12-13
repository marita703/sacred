import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, LeafIcon } from "lucide-react";

const perks = [
  {
    name: "Delivery",
    icon: ArrowDownToLine,
    description: "Get your Beautiful Clothes World Wide",
  },
  {
    name: "Guaranteed Quality",
    icon: ArrowDownToLine,
    description:
      "Every Asset on our platform is handmade in Colombian Workshops, and verified by our team.",
  },
  {
    name: "For the Planet",
    icon: LeafIcon,
    description: "We use enviroment frineldy packaging and delivery",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your mode choice!{" "}
            <span className="text-gray-500 ">digital Assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to SACRED, Every asset in our catalog was crafted in
            Colombia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse trending
            </Link>
            <Button variant="ghost">Our quality promise</Button>
          </div>
        </div>
        {/* TODO list products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              ></div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

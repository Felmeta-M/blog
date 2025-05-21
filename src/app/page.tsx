import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-10 sm:space-y-4 items-center md:items-start ">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to The Debug Diary
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A modern blog platform for developers and tech enthusiasts.
                  Explore our latest articles, tutorials, and insights on web
                  development, programming, and more. Join our community of
                  passionate writers and readers, and share your knowledge with
                  the world.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/blog">
                  <Button className="group cursor-pointer">
                    Explore Blog
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

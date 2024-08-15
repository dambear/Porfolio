import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { FiGithub, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black font-mono text-white">
      <div className="container flex w-2/5 flex-col justify-center gap-y-8 py-16">
        <div className="flex max-w-full items-center rounded-3xl border border-white/20 text-white">
          <div className="flex w-4/5 flex-col gap-4 p-8">
            <div className="flex max-w-full items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="text-xl font-semibold">John Denver Asi</div>
                <div className="text-sm">Web Developer</div>
              </div>
            </div>
            <div className="max-w-full text-xs">
              Im from Philippines. Looking to hire me? Contact me thru my
              socials
            </div>
          </div>
          <div className="flex w-2/6 items-center justify-center gap-2 p-8">
            <FiGithub className="h-5 w-5" />
            <FiFacebook className="h-5 w-5" />
            <FiTwitter className="h-5 w-5" />
            <FiMail className="h-5 w-5" />
          </div>
        </div>
        <div className="flex max-w-full flex-col gap-y-4">
          <div className="text-sm">Projects 🍲</div>
          <div className="grid grid-cols-1 gap-4">
            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 rounded-3xl bg-white/30 opacity-5 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"></div>
              <div className="items-top relative flex flex-col justify-start gap-4 rounded-3xl bg-black p-8 leading-none ring-1 ring-white/15 hover:scale-105">
                <div className="">
                  <Image
                    className="rounded-xl"
                    src="https://www.techopedia.com/wp-content/uploads/2011/11/1-What-is-a-Website-scaled.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm">Farmwise</div>
                  <div className="text-xs">
                    A platform that optimizes farm management using real-time
                    data and predictive analytics. It empowers farmers with
                    insights to improve crop health, resource efficiency, and
                    yield.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </div>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </div>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </div>
          </div>
        </div>
        <div className="gap grid grid-cols-1 sm:grid-cols-2 md:gap-8">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { FiGithub, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";

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
              Im from Philippines. Looking to hire me? Contact me thru my socials
            </div>
          </div>
          <div className="flex w-2/6 items-center justify-center gap-2 p-8">
            <FiGithub className="h-5 w-5" />
            <FiFacebook className="h-5 w-5" />
            <FiTwitter className="h-5 w-5" />
            <FiMail className="h-5 w-5" />
          </div>
        </div>
        <div className="flex max-w-full items-center">
          <div className="max-w-full border-b border-white/40 text-sm">
            Projects 🍲
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

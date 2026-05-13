
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        priority
        className="absolute -top-[98px] -z-10"
      />

      <div className="lg:grid items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 
            className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
            style={{ textWrap: 'balance' }}
          >
            Hello, this is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {`, I'm a `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            Good software has taste. It reduces complexity through clear
            boundaries, deep modules, and contracts clear enough to keep the
            system understandable as it grows.
          </p>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              aria-label="GitHub profile"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              aria-label="LinkedIn profile"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.mahara}
              target='_blank'
              aria-label="Mahara evidence portfolio"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <PiBookOpenTextBold size={30} />
            </Link>
            <Link
                href={personalData.discord}
                target='_blank'
                aria-label="Discord"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaDiscord size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="block min-w-max whitespace-nowrap font-mono text-[8px] leading-4 xxs:text-[10px] xs:text-xs sm:text-xs md:text-sm md:leading-5 lg:text-sm">
              <div className="blink">
                <span className="mr-2 text-pink-500">public</span>
                <span className="mr-2 text-pink-500">class</span>
                <span className="mr-2 text-green-400">RomanManzhelii</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-8">
                <span className="mr-2 text-pink-500">private</span>
                <span className="mr-2 text-pink-500">final</span>
                <span className="mr-2 text-pink-500">String</span>
                <span className="mr-2 text-white">role</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-amber-300">&quot;Software Developer&quot;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="ml-8">
                <span className="mr-2 text-pink-500">private</span>
                <span className="mr-2 text-pink-500">final</span>
                <span className="mr-2 text-pink-500">String[]</span>
                <span className="mr-2 text-white">work</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;web applications&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;backend APIs&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;CI/CD pipelines&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;IoT systems&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;data analysis&quot;</span>
              </div>
              <div className="">
                <span className="ml-8 text-gray-400">{'};'}</span>
              </div>
              <br/>
              <div className="ml-8">
                <span className="mr-2 text-pink-500">private</span>
                <span className="mr-2 text-pink-500">final</span>
                <span className="mr-2 text-pink-500">String[]</span>
                <span className="mr-2 text-white">habits</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;small interfaces&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;generalize repeated logic&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;handle edge cases in the main flow&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-12">
                <span className="text-amber-300">&quot;explain decisions, not syntax&quot;</span>
              </div>
              <div className="ml-8">
                <span className="text-gray-400">{'};'}</span>
              </div>
              <br/>
              <div className="ml-8">
                <span className="mr-2 text-pink-500">public</span>
                <span className="mr-2 text-pink-500">String</span>
                <span className="mr-2 text-white">build</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div className="ml-12">
                <span className="mr-2 text-pink-500">return</span>
                <span className="text-amber-300">&quot;plan -&gt; implement -&gt; test -&gt; deploy&quot;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="ml-8">
                <span className="text-gray-400">{'}'}</span>
              </div>
              <br/>
              <div className="ml-8">
                <span className="mr-2 text-pink-500">public</span>
                <span className="mr-2 text-pink-500">static</span>
                <span className="mr-2 text-pink-500">void</span>
                <span className="mr-2 text-white">main</span>
                <span className="text-gray-400">(</span>
                <span className="mr-2 text-pink-500">String[]</span>
                <span className="text-white">args</span>
                <span className="text-gray-400">) {'{'}</span>
              </div>
              <div className="ml-12">
                <span className="mr-2 text-blue-400">RomanManzhelii</span>
                <span className="mr-2 text-white">roman</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="mr-2 text-pink-500">new</span>
                <span className="text-blue-400">RomanManzhelii</span>
                <span className="text-gray-400">();</span>
              </div>
              <div className="ml-12">
                <span className="text-cyan-400">roman.</span>
                <span className="text-white">build</span>
                <span className="text-gray-400">();</span>
              </div>
              <div className="ml-8">
                <span className="text-gray-400">{'}'}</span>
              </div>
              <div><span className="text-gray-400">{'}'}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import Link from 'next/link'
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import thendraConfig from "../../thendra.config";

const navigation = [
  { name: 'Achievements', href: '#achievements', current: false },
  { name: 'Repositories', href: '#projects', current: false },
  { name: 'Technologies', href: '#languages', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

{/*<a id='spo' className="fa-2x ml-[10px] text-gray-400" href="https://open.spotify.com/user/314c4qgsafgrqtpd6tnfandxnkzq">
                <i className='fa-brands fa-spotify mt-[9px] ml-[10px]' />
              </a>
              <a id='ig' className="fa-2x ml-[10px] text-gray-400" href="https://instagram.com/haasanerdem">
                <i className='fa-brands fa-instagram mt-[9px] ml-[10px]' />
              </a>

              <a id='git' className="fa-2x ml-[10px] text-gray-400" href="https://github.com/thendra-s">
                <i className='fa-brands fa-github mt-[9px] ml-[10px]' />
                        </a>*/}

export default function Navbar() {

  const router = useRouter();
  let [isOpen, setMenu] = useState(false);

  const pages = [
    {
        link: '/',
        label: 'Home',
        icon: {
            default: 'fal fa-home',
            active: 'fas fa-home'
        },
        active: router.pathname === '/'
    },
    {
        link: '/about',
        label: 'About',
        icon: {
            default: 'fal fa-user',
            active: 'fas fa-user'
        },
        active: router.pathname === '/about'
    },
    {
        link: '/projects',
        label: 'Projects',
        icon: {
            default: 'fal fa-project-diagram',
            active: 'fas fa-project-diagram'
        },
        active: router.pathname === '/projects'
    },
    {
        link: '/posts',
        label: 'Posts',
        icon: {
            default: 'fal fa-newspaper',
            active: 'fas fa-newspaper'
        },
        active: router.pathname === '/posts'
    }
]

const setIsOpen = (value) => {
  if (value === true) {
      document.body.style.overflow = 'hidden';
  } else {
      document.body.style.overflow = 'auto';
  }
  setMenu(value);
}

  return (
        <>
          <div className="mt-7 mx-auto max-w-fit px-3 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a id='thendra' className='font-bold text-white text-2xl' href='https://benthendra.cf'>{thendraConfig.name}</a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 px-[300px]">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white font-bold text-[18px]' : 'text-gray-300 hover:text-white',
                          'px-3 py-5 rounded-md text-[18px] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-400 hover:text-black mt-3 hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 justify-center rounded-lg transition-all duration-200" onClick={() => setIsOpen(true)}>
                    <i  className="fas fa-bars text-2xl mt-[1px]" />
                </div>
              </div>
               </div>
          </div>

          <Transition
            show={isOpen}
            appear
        >
            <Transition.Child
                as={"div"}
                enter="transition-all duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="fixed right-0 top-0 w-full h-full bg-black/50 z-[999]"
                onClick={() => setIsOpen(false)}
            />
            <Transition.Child
                enter="transition-all duration-500"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition-all duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
                className="fixed right-0 top-0 w-full lg:w-[30rem] h-full bg-[#f5f5f5] dark:bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]"
            >
                <div style={{ zIndex: 999 }}>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-2xl font-semibold text-white">{thendraConfig.name}</p>
                        <i onClick={() => setIsOpen(false)} className="fa fa-times w-12 h-12 hover:bg-gray-500/5 text-xl flex items-center justify-center transition-all duration-200 rounded-lg " />
                    </div>

                    <div className="mt-8 space-y-2">
                        <div className="flex items-center gap-2">
                            <p className="text-xs font-medium uppercase text-black/50 dark:text-white/10">Menu</p>
                            <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
                        </div>
                        {pages.map((page, index) => {
                            return <Link href={page.link} key={index}>
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-4 text-xl transition-all duration-200 ${page.active ? 'bg-gray-500/5 text-black dark:text-white font-semibold' : 'hover:bg-gray-500/10 text-zinc-400 hover:text-black hover:dark:text-white'} px-4 py-3 rounded-lg`}
                                >
                                    <i className={(page.active ? page.icon.active : page.icon.default) + " w-6"} />
                                    <p>{page.label}</p>
                                </a>
                            </Link>
                        })}
                    </div>
                </div>

                <div className="mt-8 space-y-2">
                    <div className="flex items-center gap-2">
                    <p className="text-xs font-medium uppercase text-black/50 dark:text-white/10">Socials</p>
                            <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
                        </div>
                        <div class="flex items-center gap-2">
                            <a href="https://github.com/thendra-s" target="_blank" className='hover:text-black hover:dark:text-white transition-all duration-200 w-[50px] h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10' rel="noreferrer">
                                <i class="fab fa-github text-2xl text-zinc-400"></i>
                            </a>
                            <a href="https://discord.com/users/267373400022843393" className='hover:text-black hover:dark:text-white transition-all duration-200 w-[50px] h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10' target="_blank" rel="noreferrer">
                                <i class="fab fa-discord text-2xl text-zinc-400"></i>
                            </a>
                            <a href="https://instagram.com/haasanerdem" className='hover:text-black hover:dark:text-white transition-all duration-200 w-[50px] h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10' target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram text-2xl text-zinc-400 "></i>
                            </a>
                          <a href="https://open.spotify.com/user/314c4qgsafgrqtpd6tnfandxnkzq" className='hover:text-black hover:dark:text-white transition-all duration-200 w-[50px] h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10' target="_blank" rel="noreferrer">
                                <i class="fab fa-spotify text-2xl text-zinc-400"></i>
                            </a>
                            {/*<a class="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white" href="/contact">
                                <i class="fas fa-envelope text-2xl"></i><p>Contact</p>
                      </a>*/}
                        </div>
                    </div>
            </Transition.Child>
        </Transition>
          
        </>
  )
}
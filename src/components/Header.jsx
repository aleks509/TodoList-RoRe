import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import roreLogo from "../assets/RoReLogo.png";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#1A1A1A]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-auto object-contain"
                  src={roreLogo}
                  alt="RoRe логотип"
                />
              </div>

              <div className="hidden md:flex">
                <a
                  href="https://rore.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold hover:text-[#a78b5f] transition-colors duration-200"
                >
                  Родная Речь
                </a>
              </div>

              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Открыть меню</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

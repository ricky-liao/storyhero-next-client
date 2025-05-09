'use client';

import { Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background relative w-full py-6 md:py-12">
      <div className="container mx-auto px-4">
        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <Image
              src="/logo.png"
              alt="storyhero logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <h4 className="text-lg font-bold">StoryHero</h4>
          </div>

          <div className="mb-4 flex justify-center space-x-6">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://discord.gg/bySfxxb4Sa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </a>
          </div>

          <div className="mb-4 flex justify-center space-x-4 text-sm">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden w-full md:flex">
          <div className="container mx-auto">
            <div className="flex w-full flex-row items-start justify-between">
              {/* StoryBox */}
              <div className="flex-1">
                <div className="flex flex-row items-center space-x-2">
                  <Image
                    src="/logo.png"
                    alt="storyhero logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <h4 className="m-0 text-left text-xl font-bold">StoryHero</h4>
                </div>
                <div className="mt-3">
                  <p className="text-left">
                    An AI Video Editor Built for Gamers
                  </p>
                  <p>Made with ❤️</p>
                </div>
              </div>

              {/* Our Socials */}
              <div className="flex flex-1 justify-center">
                <div>
                  <h4 className="mb-4 text-left text-xl font-bold">
                    Our Socials
                  </h4>
                  <div className="flex items-center justify-start space-x-4">
                    <a
                      href="https://x.com/storyboxgg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="https://discord.gg/bySfxxb4Sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="Discord"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-1 justify-end">
                <div>
                  <h4 className="mb-4 text-left text-xl font-bold">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy"
                        className="hover:text-primary transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="hover:text-primary transition-colors"
                      >
                        Terms of Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Both Mobile and Desktop */}
        <div className="mt-4 text-center text-sm md:mt-8">
          <p>
            &copy; {new Date().getFullYear()} StoryLabs LLC. All rights
            reserved.
          </p>
          {/* <p className="mt-2 text-gray-500 text-xs">
            StoryHero additional disclaimers
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

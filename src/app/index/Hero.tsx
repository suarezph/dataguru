'use client';

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const AnimatedBackground = () => (
  <>
    {/* Base gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-green-50 animate-[gradient_8s_ease-in-out_infinite] " />

    {/* Animated patterns */}
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-5 size-full stroke-emerald-300/30 -z-10">
      <defs>
        <pattern
          id="animated-grid"
          x="50%"
          y={-1}
          width={80}
          height={80}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
          className="animate-[diagonalMove_20s_linear_infinite]">
          <path
            d="M40 80V.5M.5 .5H80M0 40h80"
            fill="none"
            strokeWidth="1"
            className="animate-[dash_15s_linear_infinite]"
          />
        </pattern>
        <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)">
            <animate
              attributeName="stop-color"
              values="rgba(16, 185, 129, 0.3); rgba(5, 150, 105, 0.3); rgba(16, 185, 129, 0.3)"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="rgba(5, 150, 105, 0.3)">
            <animate
              attributeName="stop-color"
              values="rgba(5, 150, 105, 0.3); rgba(16, 185, 129, 0.3); rgba(5, 150, 105, 0.3)"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <style>
          {`
            @keyframes gradient {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes diagonalMove {
              0% { transform: translate(-50px, -50px); }
              100% { transform: translate(50px, 50px); }
            }
            @keyframes float {
              0% { transform: translate(-20px, -20px); }
              50% { transform: translate(20px, 20px); }
              100% { transform: translate(-20px, -20px); }
            }
            @keyframes dash {
              to {
                stroke-dashoffset: 160;
              }
            }
            .animate-dash {
              stroke-dasharray: 8;
            }
          `}
        </style>
      </defs>

      {/* Background shapes */}
      <g className="animate-[float_12s_ease-in-out_infinite]">
        <path
          d="M-100.5 0h201v201h-201Z"
          fill="url(#grid-gradient)"
          transform="rotate(-45)"
        />
        <path
          d="M699.5 0h201v201h-201Z"
          fill="url(#grid-gradient)"
          transform="rotate(-45)"
        />
        <path
          d="M499.5 400h201v201h-201Z"
          fill="url(#grid-gradient)"
          transform="rotate(-45)"
        />
        <path
          d="M-300.5 600h201v201h-201Z"
          fill="url(#grid-gradient)"
          transform="rotate(-45)"
        />
      </g>

      {/* Animated grid overlay */}
      <rect
        fill="url(#animated-grid)"
        width="100%"
        height="100%"
        className="opacity-70"
      />
    </svg>
  </>
);

const words = [
  {
    text: 'with',
    className: 'text-gray-900 dark:text-gray-900',
  },
  {
    text: 'Smart',
    className: 'text-gray-900 dark:text-gray-900',
  },
  {
    text: 'Data',
    className: 'text-gray-900 dark:text-gray-900',
  },
  {
    text: 'Insights',
    className: 'text-gray-900 dark:text-gray-900',
  },
];

export default function Hero() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-gray-900">Services</span>
              <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
              <a href="#" className="flex items-center gap-x-1">
                <span aria-hidden="true" className="absolute inset-0" />
                Explore our services
                <ChevronRightIcon
                  aria-hidden="true"
                  className="-mr-2 size-5 text-gray-400"
                />
              </a>
            </div>
          </div>
          <h1 className="mt-10 text-pretty text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Boost Your Business{' '}
            <span className="md:hidden">with Smart Data Insights</span>
            <div className="md:block hidden">
              <TypewriterEffectSmooth words={words} />
            </div>
          </h1>
          <p className="mt-8 text-pretty text-lg  text-gray-800 sm:text-xl/8 font-semibold">
            DataGuru provides cutting-edge IT & Data Analytics solutions
            tailored for e-commerce and online business owners. Unlock the full
            potential of your digital enterprise.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
              Start Your Data Journey
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <svg
            role="img"
            viewBox="0 0 366 729"
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
            <title>App screenshot</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect rx={36} width={316} height={684} />
              </clipPath>
            </defs>
            <path
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              fill="#4B5563"
            />
            <path
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              fill="#343E4E"
            />
            <foreignObject
              width={316}
              height={684}
              clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              transform="translate(24 24)">
              <Image
                alt=""
                src="https://tailwindui.com/plus-assets/img/component-images/mobile-app-screenshot.png"
                width={900}
                height={900}
              />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}

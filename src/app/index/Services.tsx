import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'E-commerce Analytics Setup',
    description: (
      <div>
        <div className="font-bold">Unlock Insights, Maximize Growth</div> Set up
        and optimize analytics tools to track key performance metrics, customer
        behavior, and sales trends. Gain actionable insights to improve
        conversions and boost revenue.
      </div>
    ),
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'IT Infrastructure',
    description: (
      <div>
        <div className="font-bold">Scalable & Secure Tech Solutions</div>{' '}
        Design, implement, and maintain a robust IT infrastructure tailored to
        your business needs. Ensure seamless operations, data security, and
        future scalability.
      </div>
    ),
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Data Management',
    description: (
      <div>
        <div className="font-bold">Organized Data, Smarter Decisions</div>{' '}
        Efficiently collect, store, and analyze business data to drive strategic
        decision-making. Improve workflow efficiency and gain a competitive edge
        through well-structured data management.
      </div>
    ),
    href: '#',
    icon: ArrowPathIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-gray-800">
            Boost Your Business
          </h2>
          <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance font-sans">
            Our Services
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            At <b>DATA GURU</b>, we empower businesses with data-driven
            solutions, secure IT infrastructure, and seamless e-commerce
            analytics. Our expertise ensures that your online business is
            optimized for growth, efficiency, and long-term success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-800"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-gray-800">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    id: 1,
    question: "What kind of businesses can benefit from DataGuru's services?",
    answer:
      "DataGuru's services are tailored for Shopify store owners of all sizes. Whether you're just starting out or running a large e-commerce operation, our solutions can help you leverage data to grow your business.",
  },
  {
    id: 2,
    question: "How long does it take to set up DataGuru's analytics system?",
    answer:
      'The setup time can vary depending on the complexity of your Shopify store and your specific needs. Typically, we can have a basic system up and running within 1-2 weeks, with more advanced implementations taking 3-4 weeks.',
  },
  {
    id: 3,
    question: "Do I need technical expertise to use DataGuru's solutions?",
    answer:
      "No, you don't need technical expertise. Our team handles the technical aspects of setting up and maintaining your analytics system. We provide user-friendly dashboards and reports that are easy to understand and act upon.",
  },
  {
    id: 4,
    question: 'Can DataGuru integrate with my existing tools and platforms?',
    answer:
      'Yes, DataGuru is designed to integrate seamlessly with a wide range of tools and platforms commonly used by Shopify store owners. This includes various analytics, marketing, and customer service tools.',
  },
  {
    id: 5,
    question: 'What kind of support does DataGuru offer?',
    answer:
      "We offer comprehensive support including setup assistance, training, ongoing maintenance, and regular check-ins to ensure you're getting the most out of our solutions. Our team is always available to answer questions and provide guidance.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white" id="faq">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900 font-sans">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

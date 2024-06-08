import Link from "next/link";

const Card = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-1">
        <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
      </div>
      <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full p-3">
        <h3 className="font-bold text-gray-900">
          Realtime Collaboration
        </h3>
        <p className="mt-3 text-base text-gray-600">
          www.linkport.com
        </p>
        <p className="mt-3 text-base text-gray-600">
          Collaborate in realtime with other editors in a project.
        </p>
      </div>
    </div>
  )
}

export default function Test() {
  return (
    <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and efficient
            when building websites and webapps
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:mt-12 lg:mt-20 sm:text-left">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>

  );
}
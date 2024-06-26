import ServerCP from "./ServerCP";

export default function Test() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            {/* contents */}
            <ServerCP />
            {/* /contents */}
          </div>
        </div>
      </div>
    </section>
  );
}
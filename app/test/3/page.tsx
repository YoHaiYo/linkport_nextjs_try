import FetchCP from "./FetchCP";
import ServerCP from "./FetchCP";

export default function Test() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            {/* contents */}
            <FetchCP />
            {/* /contents */}
          </div>
        </div>
      </div>
    </section>
  );
}
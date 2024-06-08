"use client"
import { useStore, visibleStore } from '@/store/store';
import ClientCP from "./ClientCP";
import ServerCP from "./ServerCP";

export default function Page() {
  const { count } = useStore();
  const { visible, visibleToggle } = visibleStore();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            {/* contents */}
            <div className=' p-5'>
              <b>Page</b>
              <h1>Count : {count}</h1>
            </div>
            <ClientCP />
            <ServerCP countNum={count} />
            <hr />
            <button onClick={visibleToggle}>Visible</button>
            {visible && <p>Look ! </p>}
            {/* contents */}
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
export default function Test() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <p>This is Test Page selct under number</p>
            <ul>
              <li>
                <Link href={"test/1"}>
                  1 : 서버컴포넌트, 클라이언트컴포넌트 섞기
                </Link>
              </li>
              <li>
                <Link href={"test/2"}>
                  2 : createContext
                </Link>
              </li>
              <li>
                <Link href={"test/3"}>
                  3 : api/fetch
                </Link>
              </li>
              <li>
                <Link href={"test/4"}>
                  4 : AuthButton 클라이언트와 분리
                </Link>
              </li>
              <li>
                <Link href={"test/5"}>
                  5 : Zustand
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
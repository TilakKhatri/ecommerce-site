import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="h-[100vh] flex justify-center items-center">
      <div className=" py-24 px-6 text-center">
        <h1 className="mt-2 mb-16 text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold tracking-tight">
          The best offer on the market <br />
          <span className="text-purple-600">for your Ecommerce business</span>
        </h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link
            to="/admin"
            className="mb-2 inline-block rounded bg-purple-600 md:px-12 md:py-3.5 px-8 py-2.5 text-xs md:text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-500 cursor-pointer mr-2"
          >
            Get started
          </Link>
          <a className="mb-2 inline-block rounded bg-transparent md:px-12 md:py-3.5 px-8 py-2.5 text-xs md:text-sm font-medium uppercase leading-normal text-dark hover:text-gray-50 shadow-sm transition duration-150 ease-in-out hover:bg-purple-500 cursor-pointer mr-2">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

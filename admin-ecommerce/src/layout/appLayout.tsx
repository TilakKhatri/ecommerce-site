import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <div className="flex gap-[6px] lg:gap-[32px] bg-neutral-50">
        <Sidebar className="max-w-[260px] shadow-md w-full flex-none sticky top-0 bg-shade-light" />

        <main className="grow p-12 rounded-lg overflow-auto bg-neutral-50">
          {children}
        </main>
      </div> */}
      {/* <NavBar /> */}
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <NavBar />
          <div className="w-full py-4 px-4 overflow-x-hidden">{children}</div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;

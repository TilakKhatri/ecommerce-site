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
      <NavBar />
      <div className="flex">
        <Sidebar className="max-w-[260px] shadow-md w-full flex-none sticky top-0 bg-shade-light" />
        <div className="w-full px-8 py-12 ml-[4.5rem] overflow-x-hidden">
          {children}
        </div>
      </div>
    </>
  );
}

export default AppLayout;

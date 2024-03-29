import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { store } from "./redux/store";
import Router from "./routers/router";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <div className="z-[9999]">
        <Toaster
          position="top-right"
          toastOptions={{
            error: {
              duration: 3000,
            },
          }}
        />
      </div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;

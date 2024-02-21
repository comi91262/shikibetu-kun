import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="gap-4 max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Header title={"シレン6 値段識別"} active={"Home"} />
        <Component />
      </div>
    </div>
  );
}

    // <div class="layout">
    // </div>
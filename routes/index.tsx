import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import Display from "../islands/Display.tsx";
import { Partial } from "$fresh/runtime.ts";

interface Project {
  content: Uint8Array;
}

export const handler: Handlers<Project> = {
  async GET(_req, ctx) {
    const content = await Deno.readFile("./main.wasm");
    return ctx.render({content: content});
  },
};

export default function Home(props: PageProps) {

  return (
    <Partial name="docs-content">
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="gap-4 max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <Display wasm={props.data.content} />
        </div>
      </div>
    </Partial>
  )
}


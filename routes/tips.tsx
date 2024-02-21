import { PageProps } from "$fresh/server.ts";
import { Handlers } from"$fresh/server.ts";
import { CSS, render as renderGFM } from "$gfm";

const gfmStyle = `
.markdown-body ul { list-style: disc }
.markdown-body a { color: teal }
${CSS}`;

interface Markdown {
  content: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const url = new URL("../README.md", import.meta.url);
    const markdown = await Deno.readTextFile(url);
    return ctx.render({content: markdown});
  },
};


export default function TipsPage(props: PageProps<Markdown>) {
  const content = renderGFM(props.data.content, {});

  return (
    <main
      data-color-mode="auto"
      data-dark-theme="dark"
      class="p-4 mx-auto max-w-screen-md markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};



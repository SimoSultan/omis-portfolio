import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";
import { privacyDetails } from "./src/data/privacy-details";

const tokens: Record<string, string> = {
  "{{legalName}}": privacyDetails.legalName,
  "{{abn}}": privacyDetails.abn,
  "{{state}}": privacyDetails.state,
  "{{email}}": privacyDetails.email,
};

function applyTokens(value: string): string {
  let result = value;
  for (const [token, replacement] of Object.entries(tokens)) {
    result = result.split(token).join(replacement);
  }
  return result;
}

export default defineConfig({
  markdown: {
    processor: satteri({
      mdastPlugins: [
        {
          name: "privacy-tokens",
          text(node: { value: string }, ctx: { setProperty: (n: object, k: string, v: string) => void }) {
            const next = applyTokens(node.value);
            if (next !== node.value) ctx.setProperty(node, "value", next);
          },
          link(node: { url: string }, ctx: { setProperty: (n: object, k: string, v: string) => void }) {
            const next = applyTokens(node.url);
            if (next !== node.url) ctx.setProperty(node, "url", next);
          },
        },
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

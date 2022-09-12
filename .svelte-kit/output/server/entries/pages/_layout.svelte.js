import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"}">
<title>Belen Chat</title>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

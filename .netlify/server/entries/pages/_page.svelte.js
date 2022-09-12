var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_login = require("../../chunks/login.js");
var import_database = require("firebase/database");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".myHero.svelte-1q5wtxo.svelte-1q5wtxo{padding:50px 0 50px 75px}.myHero.svelte-1q5wtxo h1.svelte-1q5wtxo{font-size:50px}@media(max-width: 768px){.myHero.svelte-1q5wtxo.svelte-1q5wtxo{padding:50px !important}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let user = null;
  let roomId = 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"box mySection text-align: center; is-vcentered"}"><div class="${"myHero svelte-1q5wtxo"}"><div style="${"background-color: black;"}" class="${"hr"}"></div>
    <h1 style="${"color: black;"}" class="${"svelte-1q5wtxo"}">Belen Chat</h1>
    <p style="${"color: black;"}">Yo I made this in like 30 minutes so if it dosen&#39;t work, deal with it.
      Ill problably make a decent website later.
    </p>
    <br>
    <p>When clicking sign in, you will be redirected to a google sign in page.
     <br>
      Also if you are using safari, you will have to click the popup icon on the search bar to accept the popup.
      <br>
      In case of not being logged in after that just login again.
      <br>
      Additonally, keep in mind that it might ask if you trust this app and you should because I made it :D
    </p>
    <br>
    <br>
    <input class="${"input"}" style="${"width: 50%;"}" maxlength="${"8"}" type="${"number"}" placeholder="${"RoomId"}"${(0, import_chunks.d)("value", roomId, 0)}>
    <a${(0, import_chunks.d)("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Chat</div></a>
    <div class="${"button"}">Create Chat</div>
    ${(0, import_chunks.v)(import_login.L, "Login").$$render(
      $$result,
      { resultuser: user },
      {
        resultuser: ($$value) => {
          user = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
</section>`;
  } while (!$$settled);
  return $$rendered;
});

import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { L as Login } from "../../chunks/login.js";
import "firebase/database";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".myHero.svelte-1q5wtxo.svelte-1q5wtxo{padding:50px 0 50px 75px}.myHero.svelte-1q5wtxo h1.svelte-1q5wtxo{font-size:50px}@media(max-width: 768px){.myHero.svelte-1q5wtxo.svelte-1q5wtxo{padding:50px !important}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    <input class="${"input"}" style="${"width: 50%;"}" maxlength="${"8"}" type="${"number"}" placeholder="${"RoomId"}"${add_attribute("value", roomId, 0)}>
    <a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Chat</div></a>
    <div class="${"button"}">Create Chat</div>
    ${validate_component(Login, "Login").$$render(
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
export {
  Page as default
};

import { c as create_ssr_component, f as each, d as add_attribute, e as escape, b as subscribe, v as validate_component } from "../../../../chunks/index.js";
import { ref, onValue } from "firebase/database";
import { p as page } from "../../../../chunks/stores.js";
import { d as db, L as Login } from "../../../../chunks/login.js";
import "firebase/auth";
const chat_svelte_svelte_type_style_lang = "";
const css = {
  code: ".message.svelte-3h2rxz{background-color:#dddd;color:#000;padding-bottom:15px}.input.svelte-3h2rxz{flex:1;height:40px;border:none;outline:none;padding-left:5px;font-size:16px}.button.svelte-3h2rxz{width:auto;font-size:18px;border:none;outline:none;background-color:#3b5998;color:white\n        }.main-Chat.svelte-3h2rxz{max-height:502px}",
  map: null
};
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { messages = {} } = $$props;
  let { db: db2 } = $$props;
  let { roomid } = $$props;
  let { user } = $$props;
  let message = "";
  function sortmessages() {
    let temp = Object.entries(messages).sort(([, a], [, b]) => a.Time - b.Time);
    return temp.slice(-9);
  }
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.db === void 0 && $$bindings.db && db2 !== void 0)
    $$bindings.db(db2);
  if ($$props.roomid === void 0 && $$bindings.roomid && roomid !== void 0)
    $$bindings.roomid(roomid);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `<div class="${"main-Chat svelte-3h2rxz"}"><h1 class="${"title"}" style="${"text-align: center;"}">Chat</h1>
        <hr>
        <div class="${"message svelte-3h2rxz"}">${each(sortmessages(), ([key, value]) => {
    return `${escape(value.User)}: ${escape(value.Message)} <br>`;
  })}</div>
        <br>
        ${user != null ? `<input class="${"input is-info svelte-3h2rxz"}" type="${"text"}" placeholder="${"Type a message..."}"${add_attribute("value", message, 0)}>
        <button style="${"color:white;"}" class="${"button svelte-3h2rxz"}">Send Message</button>` : `To send a message Login With Google`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let roomid = $page.url.toString().split("/").pop().replace(/\?/g, "");
  let user = null;
  user = "";
  let messages = {};
  const roomChange = ref(db, "Rooms/" + roomid);
  onValue(roomChange, async function(snapshot) {
    if (snapshot.exists()) {
      messages = await snapshot.val().Messages;
      delete messages["ignor"];
    }
  });
  console.log(user);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Login, "Login").$$render(
      $$result,
      { resultuser: user },
      {
        resultuser: ($$value) => {
          user = $$value;
          $$settled = false;
        }
      },
      {}
    )}
<div class="${"box has-text-centered"}">${validate_component(Chat, "Chat").$$render($$result, { user, messages, db, roomid }, {}, {})}
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};

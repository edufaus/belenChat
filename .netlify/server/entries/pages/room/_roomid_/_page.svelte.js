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
var import_chunks = require("../../../../chunks/index.js");
var import_database = require("firebase/database");
var import_stores = require("../../../../chunks/stores.js");
var import_login = require("../../../../chunks/login.js");
var import_auth = require("firebase/auth");
const chat_svelte_svelte_type_style_lang = "";
const css = {
  code: ".message.svelte-3h2rxz{background-color:#dddd;color:#000;padding-bottom:15px}.input.svelte-3h2rxz{flex:1;height:40px;border:none;outline:none;padding-left:5px;font-size:16px}.button.svelte-3h2rxz{width:auto;font-size:18px;border:none;outline:none;background-color:#3b5998;color:white\n        }.main-Chat.svelte-3h2rxz{max-height:502px}",
  map: null
};
const Chat = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
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
        <div class="${"message svelte-3h2rxz"}">${(0, import_chunks.f)(sortmessages(), ([key, value]) => {
    return `${(0, import_chunks.e)(value.User)}: ${(0, import_chunks.e)(value.Message)} <br>`;
  })}</div>
        <br>
        ${user != null ? `<input class="${"input is-info svelte-3h2rxz"}" type="${"text"}" placeholder="${"Type a message..."}"${(0, import_chunks.d)("value", message, 0)}>
        <button style="${"color:white;"}" class="${"button svelte-3h2rxz"}">Send Message</button>` : `To send a message Login With Google`}</div>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.b)(import_stores.p, (value) => $page = value);
  let roomid = $page.url.toString().split("/").pop().replace(/\?/g, "");
  let user = null;
  user = "";
  let messages = {};
  const roomChange = (0, import_database.ref)(import_login.d, "Rooms/" + roomid);
  (0, import_database.onValue)(roomChange, async function(snapshot) {
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
    $$rendered = `${(0, import_chunks.v)(import_login.L, "Login").$$render(
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
<div class="${"box has-text-centered"}">${(0, import_chunks.v)(Chat, "Chat").$$render($$result, { user, messages, db: import_login.d, roomid }, {}, {})}
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

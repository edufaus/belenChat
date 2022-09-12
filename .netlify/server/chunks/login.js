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
  L: () => Login,
  d: () => db
});
module.exports = __toCommonJS(stdin_exports);
var import_app = require("firebase/app");
var import_analytics = require("firebase/analytics");
var import_database = require("firebase/database");
var import_index = require("./index.js");
var import_auth = require("firebase/auth");
let API_KEY = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_apiKey;
let AUTH_DOMAIN = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_authDomain;
let PROJECT_ID = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_projectID;
let STORAGE_BUCKET = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_storageBucket;
let MESSAGE_SENDER_ID = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_messagingSenderID;
let APP_ID = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_appID;
let MEASUREMENT_ID = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_measurementId;
let databaseURL = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_databaseURL;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};
const app = (0, import_app.initializeApp)(firebaseConfig);
const db = (0, import_database.getDatabase)(app);
const Login = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { resultuser = null } = $$props;
  let user = "";
  resultuser = user;
  let loginbutton = false;
  if ($$props.resultuser === void 0 && $$bindings.resultuser && resultuser !== void 0)
    $$bindings.resultuser(resultuser);
  {
    {
      resultuser = null;
      loginbutton = true;
    }
  }
  return `${loginbutton ? `<div class="${"button"}"><p style="${"padding: 8px;"}">Login With Google</p>   <svg class="${"svg"}" width="${"18"}" height="${"18"}" viewBox="${"0 0 18 18"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#4285f4"}" stroke="${"none"}"></path><path d="${"M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#34a853"}" stroke="${"none"}"></path><path d="${"M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#fbbc05"}" stroke="${"none"}"></path><path d="${"M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#ea4335"}" stroke="${"none"}"></path></svg></div>` : ``}
                ${!loginbutton ? `<div class="${"button"}"><p style="${"padding: 8px;"}">Log Out</p>   <svg class="${"svg"}" width="${"18"}" height="${"18"}" viewBox="${"0 0 18 18"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#4285f4"}" stroke="${"none"}"></path><path d="${"M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#34a853"}" stroke="${"none"}"></path><path d="${"M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#fbbc05"}" stroke="${"none"}"></path><path d="${"M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"}" fill-rule="${"evenodd"}" fill-opacity="${"1"}" fill="${"#ea4335"}" stroke="${"none"}"></path></svg></div>` : ``}`;
});

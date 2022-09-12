<script>
// @ts-nocheck
import { browser } from '$app/environment';
  
        import { ref, set, onValue, get, child} from "firebase/database";
        import { page } from '$app/stores';
        import { goto } from '$app/navigation';
        import { onMount } from 'svelte';
        import Login from "../../../components/login.svelte";
        import Chat from "../../../components/chat.svelte";
        import {db} from "../../../functions/database.js";
        let roomid = $page.url.toString().split('/').pop().replace(/\?/g,'')
        let user = null;
        user = browser ? JSON.parse(window.sessionStorage.getItem('user')) ?? '' : '';

        onMount(async () => {
  
  if (isNaN(roomid) || roomid.length != 8) {
      goto("/room/invalidId")
    }
    else {
      get(child(ref(db), `Rooms/${roomid}`)).then((snapshot) => {
        if (!snapshot.exists()) {
            set(ref(db, 'Rooms/' + roomid), {
                "Messages": {
                    "ignor": ""
                }
            })
        }
    }).catch((error) => {
        console.error(error);
    });
    }
      });
let messages = {};
const roomChange = ref(db, "Rooms/"+roomid);
onValue(roomChange, async function (snapshot) {
  if (snapshot.exists()) {
    messages = await snapshot.val().Messages;
    delete messages["ignor"];
  }
})
console.log(user)
</script>
<Login bind:resultuser={user}></Login>
<div class="box has-text-centered">
  <Chat user={user} messages={messages} db={db} roomid={roomid}></Chat>
</div>

<style>
  .content.is-vcentered {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          align-items: center; 
  }
  .image img {
            width: auto;
            height: auto;
            max-height: 100%;
            object-fit: fill;
  }
  </style>
          
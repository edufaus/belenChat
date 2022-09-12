<script>
        // @ts-nocheck
        
        import { ref, set, onValue, get, child} from "firebase/database";
        import Login from "../../../components/login.svelte";

        import {db} from "../../../functions/database.js";
          let user = null;
          let roomId = 0;
          async function createRoom() {
            var randomRoomId = Math.floor(10000000 + Math.random() * 90000000);
            get(child(ref(db), `Rooms/${roomId}`))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  createRoom();
                } else {
                  location.href = "/room/" + randomRoomId;
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        

          
        </script>
        <div class="box has-text-centered">
                <br />
<h1 class="title">Bro either you mistyped or they sent you the wrong code</h1>

                <br />
                <input
                  class="input"
                  style="width: 50%;"
                  maxlength="8"
                  type="number"
                  placeholder="Chat Code"
                  bind:value={roomId}
                />
                <a href={"/room/" + roomId}><div class="button">Join Chat</div></a>
                <div class="button" on:click={createRoom}>Create Chat</div>
                <Login bind:resultuser={user}></Login>
        </div>

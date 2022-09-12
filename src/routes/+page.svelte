<script>
// @ts-nocheck

  import { db } from ".././functions/database.js";
  import { ref, get, child } from "firebase/database";
  import Login from ".././components/login.svelte";
  
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

<section class="box mySection text-align: center; is-vcentered">
  <div class="myHero">
    <div style="background-color: black;"class="hr" />
    <h1 style="color: black;">Belen Chat</h1>
    <p style="color: black;">
      Yo I made this in like 30 minutes so if it dosen't work, deal with it.
      Ill problably make a decent website later.
    </p>
    <br>
    <p>
      When clicking sign in, you will be redirected to a google sign in page.
     <br>
      Also if you are using safari, you will have to click the popup icon on the search bar to accept the popup.
      <br>
      In case of not being logged in after that just login again.
      <br>
      Additonally, keep in mind that it might ask if you trust this app and you should because I made it :D
    </p>
    <br />
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
</section>



<style>

 

  .myHero {
    padding: 50px 0 50px 75px;
  }

 

  .myHero h1 {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    .myHero {
      padding: 50px !important;
    }
  }

</style>
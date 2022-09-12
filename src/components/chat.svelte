<script>
// @ts-nocheck
        
        import { ref, set } from "firebase/database";
        import Login from "./login.svelte";
        import { v4 as genid } from 'uuid';
        export let messages = {}
        export let db;
        export let roomid;
        export let user;
        let message = "";
        let sortmes = "";
        function sortmessages() {
            let temp = Object.entries(messages)
                .sort(([,a],[,b]) => a.Time-b.Time)
            return temp.slice(-9)
        }
        function sendMessage() {
            if (message==""){return;}
            let tempmes = messages
    
            set(ref(db, "Rooms/"+roomid+"/Messages/"+genid()), {
                "User":user.displayName,
                "Message": message,
                "Time": Date.now()
            })
            message = ""
        }
    </script>
    
    <style>
        .message{
            background-color: #dddd;
            color:#000;
    
            padding-bottom: 15px;
        }
        .input{
            flex:1;
            height:40px;
            border:none;
            outline:none;
            padding-left: 5px;
            font-size: 16px;
    
        }
        .button{
            width:auto;
            font-size:18px;
            border:none;
            outline:none;
            background-color:#3b5998;
            color:white
        }
        .main-Chat{
            max-height: 502px;
        }
    
    </style>
    
    <div class="main-Chat">
        <h1 class="title" style="text-align: center;">Chat</h1>
        <hr>
        <div class="message">
            {#each sortmessages(messages) as [key, value]}
           {value.User}: {value.Message} <br>
        {/each}
        </div>
        <br>
        {#if user != null}
    
        <input bind:value={message} class="input is-info" type="text" placeholder="Type a message..." >
        <button style="color:white;"class="button" on:click={sendMessage}>Send Message</button>
      
        {:else}
        To send a message Login With Google
        {/if}
        
    </div>
        
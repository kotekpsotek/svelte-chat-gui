# Svelte-Chat GUI
The overlay of complex chat solution for modern applications.

### What is the Svelte-Chat?
Svelte-Chat is complex chat solution for **SvelteKit applications** which offers your clients top-level chat experiences and full power to administrate for your management team

## Swift description of this
This one is the overlay which supplies to your ***svelte-chat*** app the GUI experiences. [**full documentation**](https://kotekpsotek.github.io/svelte-chat-docs/)

## Installation (as always - for npm)
```bash
$ npm i @svelte-chat/gui
```

## Prerequisites
1. SvelteKit app,
2. **@svelte-chat/plugin** installed and embedded in your SvelteKit entity,

### Overview:
<details>
    <summary>
        <b>Expandable - open to see</b>
    </summary>
    <h3><b>For clients app</b></h3>
    <ul>
        <li>Chat interaction on page content background</li>
        <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/client/svelteChatInteraction.png" alt="Svelte-Chat Imteraction element">
        <li>Empty Chat List</li>
        <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/client/svelteEmptyChatList.png" alt="Empty chat list">
        <li>Chat lists with some</li>
        <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/client/svelteChatsList.png" alt="Chat list with some chats">
        <li>Particular selected chat</li>
        <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/client/svelteChatBubbles.png" alt="Chat message bubles">
    </ul>
    <br>
    <h3><b>For admins app</b></h3>
    <ul>
        <li>Activiteies required to be an admin and stop</li>
        <ul>
            <li>Signup</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/signup.png">
            <li>Signin</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/signin.png">
            <li>Logout</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/logout.png">
        </ul>
        <li>Admin Panel</li>
        <ul>
            <li>Empty one</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/adminPanelEmpty.png">
            <li>One with open cases</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/adminPanel.png">
        </ul>
        <li>Chat conversation</li>
        <ul>
            <li>Messages and task/send-bar</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/chatConversation.png">
            <li>Chat Management Menu</li>
            <img src="https://github.com/kotekpsotek/svelte-chat/tree/main/docs/admin/chatManagementOptions.png">
        </ul>
    </ul>
</details>

## In front of you are only two steps - to use (@svelte-chat/plugin not accounted)
***1st:*** Attach client interaction button to your SvelteKit App. Like below or similary:
```html
// Route: /src/routes/+layout.svelte
<script>
    import { SvelteChatButton } from "@svelte-chat/gui";
</script>

<!-- Other stuff will be load here -->
<slot/>

<SvelteChatButton/>
```

***2nd:*** Connect configuration with your client-side app. This can be done generally around 2 ways:
1. Use our load function which pass all configuration for client side by itself:
<!-- (for my the simplest one) -->
> - Remember that: Each example from **1** point can be utilized into any server side SvelteKit load spot file like: **+layout.server.ts** located in scope where 'SvelteChatButton' is used
- When you just made **+layout.server.ts**/**+page.server.ts** file
```TypeScript
import { loadLayoutServer } from "@svelte-chat/gui";

// This load automatically
export const load = loadLayoutServer;
```
- When you already have **+layout.server.ts**/**+page.server.ts** file
```Typescript
import { loadLayoutServer } from "@svelte-chat/gui"

// This load autmoatically
export const load = () => {
    const math = 1 * 1 * 0;

    return {
        ...loadLayoutServer()
        math,
    }
}
```

2. Enter configuration to ```<SvelteChatButton/>``` initialization component target:

```HTML
<script>
    import { SvelteChatButton } from "svelte-chat";
</script>

</slot>

<!-- Port 10501 is a default port for server communication. When you setup other port, pass here -->
<SvelteChatButton lexConfig={{port: 10501}}/>
```

- As you saw this is not to far complicated. But you should be couscious side effects which happens here:
    - When you skip any step application won't be work
    - In ***1st*** config option from **2nd** step, default config is load automatically same as fine tuned user configuration <u>[more about bellow]</u>
    - In ***2nd*** config option from **2nd** step, when you pass wrong port you will see an error into client side Debug Tool, so you must match-up correctly

<h5>Congrats. You have got configured basically your <u><b>@svelte-chat/gui</b></u></h5>

## Recomendations:
1. When you would like to have fittest apperance experiences you should setup such style for app e.g: in app.html head scope
```CSS
    * {
        margin: 0px;
        padding: 0px
    }
```

## Contribution:
**You feel will to help in solution evolution.** Don't be shy and pull issue with demand like: I would like take the participation in evolution because ...[cause]

## License
All what you should know about Copyrights is that all code base is under <u>Apache 2.0</u>

<h3 align="center">Made with ❤️ by <b><a href="https://github.com/kotekpsotek">kotekpsotek</a></b></h3>

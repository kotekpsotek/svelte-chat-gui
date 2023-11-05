import type { ClientOptions } from "$lib/client/client.typing.js";
import { readConfig } from "@svelte-chat/utils";

/** 
 * @description Load settings for client side from **Environment Variables** when exists in another case serves default options. Should be use as server load function e.g: '+layout.server.ts' or in other '+page.server.ts' and in both, in such way: ```export const load = loadLayoutServer```
*/
export function loadLayoutServer() {
    const options = readConfig();

    return {
        server: {
            port: options?.server?.port || 10501
        } 
    } satisfies ClientOptions;
}

/** 
 * @description Other named Alias for '**loadLayoutServer**' function 
*/
export function load() {
    return loadLayoutServer();
}

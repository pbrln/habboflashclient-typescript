import { FlashExternalInterface } from './FlashExternalInterface';
import { ExternalClickHandler } from './ExternalClickHandler';

declare global {
    interface Window {
        FlashExternalInterface: any;
        ExternalClickHandler: any;
    }
}

window.FlashExternalInterface = new FlashExternalInterface(true);
window.ExternalClickHandler = new ExternalClickHandler((url: string, hash: string, clicked: boolean) => {
    console.log(`[TRACKING] url=${url}, hash=${hash}, clicked=${clicked?'true':'false'}`)
});
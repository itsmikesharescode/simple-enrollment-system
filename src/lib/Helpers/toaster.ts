import type { ToastSettings } from "@skeletonlabs/skeleton";

export const createToast = (msg: string, error:boolean, toastStore: any) =>
{
    const t: ToastSettings = {
        message: `
        <h1 class="text-white text-sm ${error ? "" : ""}">${msg}</h1>
        `,
        background: `${error ? "bg-red-500" : "bg-green-500"}`
    };
    toastStore.trigger(t);
};
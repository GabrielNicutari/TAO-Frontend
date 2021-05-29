import { createContext, useContext } from "react";
// import ModalStore from "./modalStore";
import CommonStore from "./common.store";
import UserStore from "./user.store";

interface Store {
    userStore: UserStore;
    commonStore: CommonStore;
    // modalStore: ModalStore;
}

export const store: Store = {
    userStore: new UserStore(),
    commonStore: new CommonStore()
    // modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}

import { createContext, useContext } from "react";
import ModalStore from "./modal.store";
import CommonStore from "./common.store";
import UserStore from "./user.store";
import DailyReadingStore from "./daily-reading.store"; 
import EnergyStatistics from "./energy-statistics.store"

interface Store {
    userStore: UserStore;
    commonStore: CommonStore;
    dailyReadingStore: DailyReadingStore;
    energyStatistics: EnergyStatistics;
    modalStore: ModalStore;
}

export const store: Store = {
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    dailyReadingStore: new DailyReadingStore(),
    energyStatistics: new EnergyStatistics(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}

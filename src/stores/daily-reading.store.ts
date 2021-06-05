import { makeAutoObservable, } from "mobx";
import agent from "../services/agent.service";

export default class DailyReadingStore {

    constructor() {
        makeAutoObservable(this)
    }

    getDailyReadings = async (houseId: number, numberLatestObservations: number) => {
        try {
            return await agent.DailyReadings.list(houseId, numberLatestObservations);
        } catch (error) {
            console.log(error)
        }
    }
}

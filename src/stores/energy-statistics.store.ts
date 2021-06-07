import { makeAutoObservable, } from "mobx";
import agent from "../services/agent.service";

export default class EnergyStatistics {

    constructor() {
        makeAutoObservable(this)
    }

    getEnergyStatistics = async (houseId: number) => {
        try {
            return await agent.EnergyStats.list(houseId);
        } catch (error) {
            console.log(error)
        }
    }
}

import { makeObservable, makeAutoObservable, observable } from "mobx";
import { DailyReading } from "../models/daily-reading";
import agent from "../services/agent.service";

export default class DailyReadingStore {
    dailyReadings: DailyReading[] = [];


    constructor() {
        makeAutoObservable(this)
    }

    getDailyReadings = async () => {
        console.log("Hello from mobx")
        try {
            const dailyReadings = await agent.DailyReadings.list();
            console.log(dailyReadings);
        } catch (error) {
            console.log(error)
        }
    }
}
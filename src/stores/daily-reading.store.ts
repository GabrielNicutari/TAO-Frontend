import { makeObservable, makeAutoObservable, observable } from "mobx";
import { DailyReading } from "../models/daily-reading";
import agent from "../services/agent.service";

export default class DailyReadingStore {
    dailyReadings: DailyReading[] = [];


    constructor() {
        makeAutoObservable(this)
    }

    getDailyReadings = async () => {
        try {
            const result = await agent.DailyReadings.list();
            result.map(dp => {
                if (dp.houseReadingId === 1) {
                    this.dailyReadings.push(dp)
                }
            })
        } catch (error) {
            console.log(error)
        }
        console.log(this.dailyReadings);
    }
}
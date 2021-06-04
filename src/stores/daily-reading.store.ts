import { makeObservable, makeAutoObservable, observable } from "mobx";
import { DailyReading } from "../models/daily-reading";
import agent from "../services/agent.service";

export default class DailyReadingStore {
    dailyReadings: DailyReading[] = [];


    constructor() {
        makeAutoObservable(this)
    }

    getDailyReadings = async () => {
        this.dailyReadings = []
        try {
            const result = await agent.DailyReadings.list();
            result.map(dr => {
                if (dr.houseReadingId === 1) {
                    this.dailyReadings.push(dr)
                }
            })
            // console.log(this.dailyReadings)
            return this.dailyReadings;
        } catch (error) {
            console.log(error)
        }
    }
}
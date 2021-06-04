export interface DailyReading {
    id: number;
    timestamp: string;
    energy: number;
    volume: number,
    hourCounter: number,
    tempForward: number,
    tempReturn: number,
    power: number,
    flow: number,
    houseReadingId: number,
    houseReading: any
}
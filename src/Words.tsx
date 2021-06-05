import axios from "axios";
import {WordsConstants} from "./WordsConstants";

export class Words {
    public static contactFormTitle: string = WordsConstants.CONTACT_FORM_TITLE;
    public static leaveUsMessage: string = WordsConstants.LEAVE_US_MESSAGE;
    public static invalidEmailErrorMessage: string = WordsConstants.INVALID_EMAIL_ERROR_MESSAGE;
    public static send: string = WordsConstants.SEND;
    public static home: string = WordsConstants.HOME;
    public static energy: string = WordsConstants.ENERGY;
    public static saveEnergy: string = WordsConstants.SAVE_ENERGY;
    public static contact: string = WordsConstants.CONTACT;
    public static weatherForecastDescription = WordsConstants.WEATHER_FORECAST_DESCRIPTION;
    public static weatherForecastTitle = WordsConstants.WEATHER_FORECAST_TITLE;
    public static homepageTitle = WordsConstants.HOMEPAGE_TITLE;
    public static homepageSubtitle = WordsConstants.HOMEPAGE_SUBTITLE;
    public static services = WordsConstants.SERVICES;
    public static readMore = WordsConstants.READ_MORE;
    public static service1Title = WordsConstants.SERVICE_1_TITLE;
    public static service1Description = WordsConstants.SERVICE_1_DESCRIPTION;
    public static service2Title = WordsConstants.SERVICE_2_TITLE;
    public static service2Description = WordsConstants.SERVICE_2_DESCRIPTION;
    public static service3Title = WordsConstants.SERVICE_2_TITLE;
    public static service3Description = WordsConstants.SERVICE_2_DESCRIPTION;
    public static infoTitle = WordsConstants.INFO_TITLE;
    public static infoText = WordsConstants.INFO_TEXT;
    public static nameForm = WordsConstants.NAME;
    public static email = WordsConstants.EMAIL;
    public static message = WordsConstants.MESSAGE;
    public static password = WordsConstants.PASSWORD;
    public static loginFormTitle = WordsConstants.LOGIN_FORM_TITLE;
    public static login = WordsConstants.LOGIN;
    public static volume = WordsConstants.VOLUME;
    public static hourCounter = WordsConstants.HOUR_COUNTER;
    public static temperatureForward = WordsConstants.TEMP_FORWARD;
    public static temperatureReturn = WordsConstants.TEMP_RETURN;
    public static power = WordsConstants.POWER;
    public static flow = WordsConstants.FLOW;
    public static energyConsumption = WordsConstants.ENERGY_CONSUMPTION;
    public static latestObservation = WordsConstants.LATEST_OBSERVATION;

    static async translate(toLanguage: string): Promise<void> {
        await axios.post("http://localhost:5001/api/Translation", { words: [
            WordsConstants.CONTACT_FORM_TITLE,
            WordsConstants.LEAVE_US_MESSAGE,
            WordsConstants.INVALID_EMAIL_ERROR_MESSAGE,
            WordsConstants.SEND,
            WordsConstants.HOME,
            WordsConstants.ENERGY,
            WordsConstants.SAVE_ENERGY,
            WordsConstants.CONTACT,
            WordsConstants.WEATHER_FORECAST_DESCRIPTION,
            WordsConstants.WEATHER_FORECAST_TITLE,
            WordsConstants.HOMEPAGE_TITLE,
            WordsConstants.HOMEPAGE_SUBTITLE,
            WordsConstants.SERVICES,
            WordsConstants.READ_MORE,
            WordsConstants.SERVICE_1_TITLE,
            WordsConstants.SERVICE_1_DESCRIPTION,
            WordsConstants.SERVICE_2_TITLE,
            WordsConstants.SERVICE_2_DESCRIPTION,
            WordsConstants.SERVICE_3_TITLE,
            WordsConstants.SERVICE_3_DESCRIPTION,
            WordsConstants.INFO_TITLE,
            WordsConstants.INFO_TEXT,
            WordsConstants.NAME,
            WordsConstants.EMAIL,
            WordsConstants.MESSAGE,
            WordsConstants.PASSWORD,
            WordsConstants.LOGIN_FORM_TITLE,
            WordsConstants.LOGIN,
            WordsConstants.VOLUME,
            WordsConstants.HOUR_COUNTER,
            WordsConstants.TEMP_FORWARD,
            WordsConstants.TEMP_RETURN,
            WordsConstants.POWER,
            WordsConstants.FLOW,
            WordsConstants.ENERGY_CONSUMPTION,
            WordsConstants.LATEST_OBSERVATION,
            ], toLanguage})
            .then(response => {
                console.log(response.data);
                this.contactFormTitle = response.data[0];
                this.leaveUsMessage = response.data[1];
                this.invalidEmailErrorMessage = response.data[2];
                this.send = response.data[3];
                this.home = response.data[4];
                this.energy = response.data[5];
                this.saveEnergy = response.data[6];
                this.contact = response.data[7];
                this.weatherForecastDescription = response.data[8];
                this.weatherForecastTitle = response.data[9];
                this.homepageTitle = response.data[10];
                this.homepageSubtitle = response.data[11];
                this.services = response.data[12];
                this.readMore = response.data[13];
                this.service1Title = response.data[14];
                this.service1Description = response.data[15];
                this.service2Title = response.data[16];
                this.service2Description = response.data[17];
                this.service3Title = response.data[18];
                this.service3Description = response.data[19];
                this.infoTitle = response.data[20];
                this.infoText = response.data[21];
                this.nameForm = response.data[22];
                this.email = response.data[23];
                this.message = response.data[24];
                this.password = response.data[25];
                this.loginFormTitle = response.data[26];
                this.login = response.data[27];
                this.volume = response.data[28];
                this.hourCounter = response.data[29];
                this.temperatureForward = response.data[30];
                this.temperatureReturn = response.data[31];
                this.power = response.data[32];
                this.flow = response.data[33];
                this.energyConsumption = response.data[34];
                this.latestObservation = response.data[35];
            })
    }
}

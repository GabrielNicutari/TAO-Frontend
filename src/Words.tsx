import axios from "axios";
import { WordsConstants } from "./WordsConstants";

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

    static async translate(toLanguage: string): Promise<void> {
        await axios.post("http://localhost:5001/Translation", { words: [
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
            })
    }
}

import axios from "axios";
import {WordsConstants} from "./WordsConstants";

export class Words {

    public static contactFormTitle: string = WordsConstants.CONTACT_FORM_TITLE;
    public static leaveUsMessage: string = WordsConstants.LEAVE_US_MESSAGE;
    public static invalidEmailErrorMessage: string = WordsConstants.INVALID_EMAIL_ERROR_MESSAGE;
    public static send: string = WordsConstants.SEND;

    static async translate(toLanguage: string): Promise<void> {
        await axios.post("http://localhost:5001/Translation", { words: [
            WordsConstants.CONTACT_FORM_TITLE,
            WordsConstants.LEAVE_US_MESSAGE,
            WordsConstants.INVALID_EMAIL_ERROR_MESSAGE,
            WordsConstants.SEND,], toLanguage})
            .then(response => {
                this.contactFormTitle = response.data[0];
                this.leaveUsMessage = response.data[1];
                this.invalidEmailErrorMessage = response.data[2];
                this.send = response.data[3];
            })
    }
}

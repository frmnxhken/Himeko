export default class Message {
    constructor(min, max) {
        this.messages = {
            required: "This field must be filled in",
            email: "Email format incorrect",
            url: "Url format incorrect",
            number: "This field only accepts numbers",
            alphabet: "This field only accepts letters",
            max: `This field maximal ${max} characters.`,
            min: `This field minimum ${min} characters.`,
            lower: "This field must be lowercase",
            upper: "This field must be uppercase",
            integer: "This field must be integer",
            float: "This field must be float",
            image: "This field only accepts image file"
        }
    }
}
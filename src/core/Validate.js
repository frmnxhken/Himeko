import Message from "../message/Message.js";

export default class Validate {
    constructor() {
        this.domains = ["gmail.com", "yahoo.com"];
        this.errors = {}
    }

    // Required field validation
    isFill = (form) => {
        return /\S+/.test(form.value)
    }

    // Alphabet only field validation
    isAlphabet = (form) => {
        return /^[a-zA-z\s]+$/.test(form.value);
    }

    // isEmail field validation
    isEmail= (form) => {
        return this.domains.indexOf(form.value.split("@")[1]) == -1
          ? false
          : true;
    }
    
    // Lower case field validation
    lowerCase = (form) => {
        return form.value === form.value.toLowerCase();
    }
    
    // Upper case field validation
    upperCase = (form) => {
        return form.value === form.value.toUpperCase();
    }

    // Max length field validation
    maxData(form, max) {
        return form.value.length <= max;
    }
    
    // Min length field validation
    minData(form, min) {
        return form.value.length >= min;
    }

    /**
     *
     *  Specially validation for numeric
     *   
    **/

    // Isnumber field validation
    isNumber = (form) => {
        return /^[0-9]*$/.test(form.value);
    }

    // Isinteger field validation
    isInteger = (form) => {
        return Number.isInteger(parseFloat(form.value));
    }

    // Isfloat field validation
    isFloat = (form) => {
        return /\d+\.\d+/.test(form.value);
    }

    // Display Message while error validation
    displayMessage = (form, message) => {
        document.querySelector(`[data-message=${form.name}]`).innerText = message;
    };

    // Validation handler
    validation = (form, types) => {
        this.result = {}
        this.validations = {
            required: this.isFill,
            alphabet: this.isAlphabet,
            email: this.isEmail,
            number: this.isNumber,
            lower: this.lowerCase,
            upper: this.upperCase,
            integer: this.isInteger,
            float: this.isFloat
        }

        // Selection validation by type
        types.forEach((type) => {
            if(type.includes("min")) {
                this.min = type.split(":")[1];
                this.result["min"] = this.minData(form, this.min);
            } else if(type.includes("max")) {
                this.max = type.split(":")[1];
                this.result["max"] = this.maxData(form, this.max);
            } else {
                this.result[type] = this.validations[type](form)
            }
        })

        // Checking error 
        this.error = Object.keys(this.result).find(
            (key) => this.result[key] == false
        )
        
        // Initial message class
        const message = new Message(this.min, this.max);

        // Display message handler
        this.errors[form.name] = this.error;
        this.message = this.error !== undefined ? message.messages[this.error] : "";
        this.displayMessage(form, this.message);
    }
}
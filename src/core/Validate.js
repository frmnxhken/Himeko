export default class Validate {
    constructor() {
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
    
    // Lower case field validation
    lowerCase = (form) => {
        return form.value === form.value.toLowerCase();
    };
    
    // Upper case field validation
    upperCase = (form) => {
        return form.value === form.value.toUpperCase();
    };

    // Isnumber field validation
    isNumber = (form) => {
        return /^[0-9]*$/.test(form.value);
    };

    // Validation handler
    validation = (form, types) => {
        this.result = {}
        this.validations = {
            required: this.isFill,
            alphabet: this.isAlphabet,
            number: this.isNumber,
            lower: this.lowerCase,
            upper: this.upperCase
        }

        // Selection validation by type
        types.forEach((type) => {
            this.result[type] = this.validations[type](form)
        })

        // Checking error 
        this.error = Object.keys(this.result).find(
            (key) => this.result[key] == false
        )
      
        this.errors[form.name] = this.error
    }
}
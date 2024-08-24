export default class Validate {
    constructor() {
        this.errors = {}
    }

    // required field validation
    isFill = (form) => {
        return /\S+/.test(form.value)
    }
    
    // Validation handler
    validation = (form, types) => {
        this.result = {}
        this.validations = {
            required: this.isFill 
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
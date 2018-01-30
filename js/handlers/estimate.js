class EstimateHandler {
    constructor() {
        this.formElement = document.querySelector('.estimate__form')
        this.redirectOnSubmit()
    }

    redirectToThankYouPage(e) {
        e.preventDefault()
        window.location.href = '/website/thankyou'
    }

    redirectOnSubmit() {
        this.formElement.addEventListener(
            'submit', this.redirectToThankYouPage.bind(this)
        )
    }
}

export default EstimateHandler
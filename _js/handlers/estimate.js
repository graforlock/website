const { fromEvent } = require('most')

class EstimateHandler {
   constructor() {
       this.formElement = document.querySelector('.estimate__form')
       this.redirectOnSubmit()
   } 

   redirectToThankYouPage(e) {
       e.preventDefault()
       window.location.href = '/thankyou'
   }

   redirectOnSubmit() {
        this.formElement.addEventListener(
            'submit', this.redirectToThankYouPage.bind(this)
        )
   }
}

module.exports = EstimateHandler
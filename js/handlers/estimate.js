class EstimateHandler {
   constructor() {
       this.formElement = document.querySelector('.estimate__form')
       this.redirectOnSubmit()
   }

   handleSubmit(e) {}

   redirectToThankYouPage(e) {
       e.preventDefault()
       this.handleSubmit(e)
       window.location.href = '/website/thankyou'
   }

   redirectOnSubmit() {
        this.formElement.addEventListener(
            'submit', this.redirectToThankYouPage.bind(this)
        )
   }
}

export default EstimateHandler
import test from 'tape'

import EstimateHandler from './estimate'

class MockEstimateHandler extends EstimateHandler {
    constructor() {
        super()
        this.callbackFired = false
    }

    redirectToThankYouPage(e) {
        e.preventDefault()
        this.callbackFired = true
    }
}

test('estimate', assert => {
    // Test Setup 
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.type = 'submit'
    form.className = 'estimate__form'
    form.appendChild(input)
    document.body.appendChild(form)

    // Unit Test
    assert.plan(2)

    let estimateHandler = new MockEstimateHandler()

    input.click()

    assert.equals(estimateHandler.formElement.nodeName, 'FORM',
        'valid form element should be selected given .estimate__form class.')
    assert.ok(estimateHandler.callbackFired, 
        'form callback should fire in the attempt to send html data via POST.') 
})
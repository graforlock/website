import EstimateHandler from './handlers/estimate.js'

if(/website\/estimate[/]?$/.test(window.location.pathname)) {
    let _ = new EstimateHandler()
}

import EstimateHandler from './handlers/estimate'

if(/website\/estimate[/]?$/.test(window.location.pathname)) {
    let _ = new EstimateHandler()
}

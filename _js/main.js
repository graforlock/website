import wayfarer from 'wayfarer'

import EstimateHandler from './handlers/estimate'

const router = wayfarer('/404')

router.on('/website/estimate', () => {
    let _ = new EstimateHandler()
})

router(window.location.pathname)
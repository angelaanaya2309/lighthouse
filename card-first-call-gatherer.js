'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToCardFirstCall extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardLoadTimeResp')
            .then(cardLoadTimeResp => {
                if (!cardLoadTimeResp) {

                    throw new Error('Unable to find card first call load metrics in page');
                }
                return cardLoadTimeResp;
            });
    }
}

module.exports = TimeToCardFirstCall;
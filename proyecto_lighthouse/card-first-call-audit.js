'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME2 = 3000;

let loadedTime2;

let belowThreshold2;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id:"card-first-call-audit",
            title:"First ratp API call with response takes less than 3 seconds",
            failureTitle: 'MyPerformance',
            description: 'First ratp API call with response takes less than 3 seconds '+loadedTime2,
            requiredArtifacts: ['TimeToCardFirstCall']
            
            /*category: 'MyPerformance',
            name: 'card-audit',
            description: 'Schedule card initialized and ready',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',

            requiredArtifacts: ['TimeToCard']*/
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCardFirstCall;
        const belowThreshold = loadedTime <= MAX_CARD_TIME2;
        
        loadedTime2=loadedTime;
        belowThreshold2=belowThreshold;

        return {
            numericValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;
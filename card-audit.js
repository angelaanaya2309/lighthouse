'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 2000;

let loadedTime1;

let belowThreshold1;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id:"card-audit",
            title:"Schedule card initialized and ready",
            failureTitle: 'MyPerformance',
            description: 'Schedule card initialized and ready '+loadedTime1,
            requiredArtifacts: ['TimeToCard']
            
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
        const loadedTime = artifacts.TimeToCard;
        const belowThreshold = loadedTime <= MAX_CARD_TIME;
        
        loadedTime1=loadedTime;
        belowThreshold1=belowThreshold;

        return {
            numericValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;
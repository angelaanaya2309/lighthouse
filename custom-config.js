'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
            'card-first-call-gatherer'
        ]
    }],

    audits: [
        'card-audit',
        'card-first-call-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            auditRefs: [
                {id: 'card-audit', weight: 1},
                {id: 'card-first-call-audit', weight: 1}
            ]
        }
    }
};
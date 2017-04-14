import remove from 'lodash/remove';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';

import Kendo from './logos/kendo.png';
import Python from './logos/38ebd8acddf11e20cbbb5061512eff22.png';
import React from './logos/react.png';
import Browsersync from './logos/browsersync.png';
import GraphQL from './logos/graphql.png';
import Webpack from './logos/webpack.png';
import Rxjs from './logos/rxjs.png';

function mix(correct) {
    const technologies = [
    'React',
    'Angular',
    'Java',
    'JavaScript',
    'PHP',
    'GoLang',
    'Scala',
    'Python',
    'GraphQL',
    'Webpack',
    'Rxjs',
    'Kendo',
    'Browsersync',
];
    const AnswerWithoutCorrect = remove(technologies, (n) => n !== correct);
    let tech = sampleSize(AnswerWithoutCorrect, 3);
    tech.push(correct);
    return shuffle(tech);
}

const schema = [{
        logo: Browsersync,
        answers: mix('Browsersync'),
        correct: 'Browsersync',
    },
    {
        logo: React,
        answers: mix('React'),
        correct: 'React',
    },
    {
        logo: Kendo,
        answers: mix('Kendo'),
        correct: 'Kendo',
    },
    {
        logo: Webpack,
        answers: mix('Webpack'),
        correct: 'Webpack',
    },
    {
        logo: GraphQL,
        answers: mix('GraphQL'),
        correct: 'GraphQL',
    },
    {
        logo: Rxjs,
        answers: mix('Rxjs'),
        correct: 'Rxjs',
    }
];

export default schema;

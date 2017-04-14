import remove from 'lodash/remove';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';

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
        logo: `${process.env.PUBLIC_URL}/logos/browsersync.png`,
        answers: mix('Browsersync'),
        correct: 'Browsersync',
    },
    {
        logo: `${process.env.PUBLIC_URL}/logos/react.png`,
        answers: mix('React'),
        correct: 'React',
    },
    {
        logo: `${process.env.PUBLIC_URL}/logos/kendo.png`,
        answers: mix('Kendo'),
        correct: 'Kendo',
    },
    {
        logo: `${process.env.PUBLIC_URL}/logos/webpack.png`,
        answers: mix('Webpack'),
        correct: 'Webpack',
    },
    {
        logo: `${process.env.PUBLIC_URL}/logos/graphql.png`,
        answers: mix('GraphQL'),
        correct: 'GraphQL',
    },
    {
        logo: `${process.env.PUBLIC_URL}/logos/rxjs.png`,
        answers: mix('Rxjs'),
        correct: 'Rxjs',
    }
];

export default schema;

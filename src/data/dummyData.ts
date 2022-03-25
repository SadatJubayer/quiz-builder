import { LayoutTypes } from 'types/ILayout';
import { IQuiz } from 'types/IQuiz';

export const dummyData: IQuiz[] = [
    {
        id: 'quiz_a_1',
        name: 'DevOps Quiz (Basic)',
        layout: LayoutTypes.allInOne,
        isPublished: false,
        questions: [
            {
                id: '1',
                title: 'Which service runs on each Kubernetes node and ensures containers are running in a pod?',
                imgUrl: '',
                choices: [
                    {
                        id: '11',
                        imgUrl: '',
                        title: 'etcd',
                        correct: false,
                    },
                    {
                        id: '12',
                        imgUrl: '',
                        title: 'kubelet',
                        correct: true,
                    },
                    {
                        id: '13',
                        imgUrl: '',
                        title: 'scheduler',
                        correct: false,
                    },
                    {
                        id: '14',
                        imgUrl: '',
                        title: 'kubeadm',
                        correct: false,
                    },
                ],
            },
            {
                id: '2',
                title: 'Which component manages the assigning nodes to pods depending on resource availability?',
                imgUrl: '',
                choices: [
                    {
                        id: '21',
                        imgUrl: '',
                        title: 'etcd',
                        correct: false,
                    },
                    {
                        id: '22',
                        imgUrl: '',
                        title: 'helm',
                        correct: false,
                    },
                    {
                        id: '23',
                        imgUrl: '',
                        title: 'scheduler',
                        correct: true,
                    },
                    {
                        id: '24',
                        imgUrl: '',
                        title: 'kubectl',
                        correct: false,
                    },
                ],
            },
        ],
    },
    {
        id: 'quiz_a_2',
        name: 'Common HTML Interview Questions',
        layout: LayoutTypes.singlePage,
        isPublished: true,
        questions: [
            {
                id: '1',
                title: 'What type of a language is HTML?',
                imgUrl: '',
                choices: [
                    {
                        id: '11',
                        imgUrl: '',
                        title: 'Network Protocol',
                        correct: false,
                    },
                    {
                        id: '12',
                        imgUrl: '',
                        title: 'Markup Language',
                        correct: true,
                    },
                    {
                        id: '13',
                        imgUrl: '',
                        title: 'Programming Language',
                        correct: false,
                    },
                    {
                        id: '14',
                        imgUrl: '',
                        title: 'Scripting Language',
                        correct: false,
                    },
                ],
            },
            {
                id: '2',
                title: 'HTML are web pages read and rendered by -',
                imgUrl: '',
                choices: [
                    {
                        id: '21',
                        imgUrl: '',
                        title: 'Compiler',
                        correct: false,
                    },
                    {
                        id: '22',
                        imgUrl: '',
                        title: 'Interpreter',
                        correct: false,
                    },
                    {
                        id: '23',
                        imgUrl: '',
                        title: 'Web Browser',
                        correct: true,
                    },
                    {
                        id: '24',
                        imgUrl: '',
                        title: 'Server',
                        correct: false,
                    },
                ],
            },
            {
                id: '3',
                title: 'What is the correct HTML tag for inserting a line break?',
                imgUrl: '',
                choices: [
                    {
                        id: '31',
                        imgUrl: '',
                        title: '<break />',
                        correct: false,
                    },
                    {
                        id: '32',
                        imgUrl: '',
                        title: '<nbsp>',
                        correct: false,
                    },
                    {
                        id: '33',
                        imgUrl: '',
                        title: '<br />',
                        correct: true,
                    },
                    {
                        id: '34',
                        imgUrl: '',
                        title: '<lb />',
                        correct: false,
                    },
                ],
            },
        ],
    },
];

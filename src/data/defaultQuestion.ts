export const getDefaultQuestion = (id: number) => {
    return {
        id: id,
        title: `Untitled Question (${id})`,
        imgUrl: '',
        choices: [
            {
                id: `${id}_1`,
                imgUrl: '',
                title: 'Choice 1',
                correct: false,
            },
            {
                id: `${id}_2`,
                imgUrl: '',
                title: 'Choice 2',
                correct: false,
            },
        ],
    };
};

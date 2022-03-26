import { strings } from 'constant/strings';
import { useQuestion } from 'hooks';
import ContentEditable from 'react-contenteditable';
import { IChoice } from 'types/IChoice';
import { numberToLetter } from 'utils';

interface IChoiceCardProps {
    index: number;
    choice: IChoice;
}

export const ChoiceCard = ({ index, choice }: IChoiceCardProps) => {
    const { updateChoiceTitle, toggleAnswer } = useQuestion();

    const onTitleChange = (id: string, title: string) => {
        updateChoiceTitle(id, title);
    };

    return (
        <li className="my-2 items-center flex space-x-2.5 border p-1.5 rounded">
            <p className="border bg-lightBg text-lightText px-2 py-1 rounded-sm text-center font-medium">
                {numberToLetter(index + 1)}
            </p>
            <ContentEditable
                className="flex-1 text-sm focus:outline-none p-1 border-gray-400 focus:border-b border-dashed whitespace-pre-wrap"
                html={choice.title}
                onChange={(e) => onTitleChange(choice.id, e.target.value)}
            />
            <input
                className="p-1.5 h-6 w-6 rounded-full cursor-pointer border-gray-400 border-2"
                type="checkbox"
                title={strings.make_it_correct}
                checked={choice.correct}
                onChange={() => toggleAnswer(choice.id)}
            />
        </li>
    );
};

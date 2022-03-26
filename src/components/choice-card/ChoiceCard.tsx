import { strings } from 'constant/strings';
import { IChoice } from 'types/IChoice';
import { numberToLetter } from 'utils';

interface IChoiceCardProps {
    index: number;
    choice: IChoice;
}

export const ChoiceCard = ({ index, choice }: IChoiceCardProps) => {
    return (
        <li className="my-2 items-center flex space-x-2.5 border p-1.5 rounded">
            <p className="border bg-lightBg text-lightText px-2 py-1 rounded-sm text-center font-medium">
                {numberToLetter(index + 1)}
            </p>
            <h4 className="flex-1 text-sm">{choice.title}</h4>
            <input
                className="p-1.5 h-6 w-6 rounded-full cursor-pointer border-gray-400 border-2 appearance-none default:bg-white checked:bg-green-500 hover:bg-green-300"
                type="checkbox"
                title={strings.make_it_correct}
                checked={choice.correct}
            />
        </li>
    );
};

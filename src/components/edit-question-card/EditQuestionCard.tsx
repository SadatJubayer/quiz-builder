import { ChoiceCard } from 'components/choice-card/ChoiceCard';
import { strings } from 'constant/strings';
import { useQuizAdd } from 'hooks/useQuizAdd';
import { IQuestion } from 'types/IQuestion';

interface IEditQuestionCardProps {
    question: IQuestion;
}

export const EditQuestionCard = ({ question }: IEditQuestionCardProps) => {
    const { addAChoice } = useQuizAdd();

    return (
        <div className="md:pl-5 order-first md:order-last flex-1">
            <h3 className="border-b border-gray-500 border-dashed text-gray-600 text-xl">
                {question.title}
            </h3>
            <ul className="mt-5">
                {question.choices.map((choice, index) => (
                    <ChoiceCard key={choice.id} choice={choice} index={index} />
                ))}
                <button
                    onClick={addAChoice}
                    className="border border-primary px-3 py-1 rounded hover:text-primary text-sm text-gray-700"
                >
                    {strings.add_option}
                </button>
            </ul>
        </div>
    );
};

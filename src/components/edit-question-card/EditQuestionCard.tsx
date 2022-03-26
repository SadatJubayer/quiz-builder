import { ChoiceCard } from 'components/choice-card/ChoiceCard';
import { strings } from 'constant/strings';
import { useQuestion } from 'hooks';
import { useQuizAdd } from 'hooks/useQuizAdd';
import ContentEditable from 'react-contenteditable';
import { IQuestion } from 'types/IQuestion';

interface IEditQuestionCardProps {
    question: IQuestion;
}

export const EditQuestionCard = ({ question }: IEditQuestionCardProps) => {
    const { addAChoice } = useQuizAdd();
    const { updateQuestionTitle } = useQuestion();

    const onTitleChange = (title: string) => {
        updateQuestionTitle(title);
    };

    const onNewChoice = () => {
        addAChoice();
    };

    return (
        <div className="md:pl-5 order-first md:order-last flex-1">
            <ContentEditable
                tagName="h3"
                html={question.title}
                placeholder="Question Title"
                onChange={(e) => onTitleChange(e.target.value)}
                className="border-b border-gray-500 text-gray-600 text-xl focus:outline-none focus:border-b border-dashed"
            />
            <ul className="mt-5">
                {question.choices.map((choice, index) => (
                    <ChoiceCard key={choice.id} choice={choice} index={index} />
                ))}
            </ul>
            <button
                onClick={onNewChoice}
                className="border border-primary px-3 py-1 rounded hover:text-primary text-sm text-gray-700"
            >
                {strings.add_option}
            </button>
        </div>
    );
};

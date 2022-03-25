interface IButtonProps {
    text: string;
    onClick?: () => void;
}

export const Button = ({ text, onClick = () => null, ...rest }: IButtonProps) => {
    return (
        <button
            className="bg-primary text-white px-3 py-1.5 rounded-sm"
            onClick={onClick}
            {...rest}
        >
            {text}
        </button>
    );
};

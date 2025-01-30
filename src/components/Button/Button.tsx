import "./Button.scss";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    style: "primary" | "secondary";
}

function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.onClick ? props.onClick : () => {}}
            className={"button-container button-" + props.style}
        >
            {props.style == "secondary" && (
                <div className="button-container__dot"></div>
            )}
            <p>{props.label}</p>
        </button>
    );
}

export default Button;

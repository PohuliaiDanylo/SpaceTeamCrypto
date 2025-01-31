import "./Link.scss";

interface LinkProps {
    label: string;
    linkTo?: string;
    style: "primary" | "secondary";
    arrow?: boolean;
}

function Link(props: LinkProps) {
    return (
        <a
            href={props.linkTo ? props.linkTo : "/"}
            className={`link-container link-container-${props.style} flex items-center`}
        >
            <p>{props.label}</p>
            {props.arrow && <div className="arrow"></div>}
        </a>
    );
}
export default Link;

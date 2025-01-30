import "./Link.scss";

interface LinkProps {
    label: string;
    linkTo?: string;
}

function Link(props: LinkProps) {
    return (
        <a href={props.linkTo ? props.linkTo : "/"} className="link-container">
            {props.label}
        </a>
    );
}
export default Link;

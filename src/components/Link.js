import { Link } from "react-router-dom";

export default function ALink({ children, ...rest }) {
    return (
        <Link style={{ textDecoration: 'none' }} {...rest}>
            {children}
        </Link>
    )
}
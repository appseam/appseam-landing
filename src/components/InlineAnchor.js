import { Anchor } from 'grommet'

export default function InlineAnchor({ children, ...rest}) {
    return (
        <Anchor weight='bold' color='accent-1' {...rest}>
            {children}
        </Anchor>
    )
}
import clsx from 'clsx';
import { ContainerProps } from './Container.props';
import { children } from 'react';

export function Container({
    children,
    className,
    ...props
}: ContainerProps): JSX.Element {
    return (
        <div
            className={clsx(
                'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

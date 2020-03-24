import React from 'react';

// Type def
type BasePageProps = {
    component: any, // React.Component
    exact: boolean,
    path: string,
};

// Base Page component
// Component that wrap all pages of the application
export const BasePage = (props: BasePageProps) => {

    const { component: Component } = props;

    return (
        <div>
            {/** Component injection */}
            <Component {...props} />
        </div>
    );
};
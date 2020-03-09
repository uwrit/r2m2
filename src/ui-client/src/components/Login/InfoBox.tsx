import React from 'react';

interface Props {}

export default class InfoBox extends React.PureComponent<Props> {

    public render() {
        const c = 'infobox';

        return (
            <div className={c}>
                <div className={`${c}-header`}>Welcome to the Research Resource Maturity Model Survey</div>
            </div>
        );
    }
}
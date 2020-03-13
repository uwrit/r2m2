import React from 'react';
import { ModelQuestionOption } from '../../../model/ModelsState';
import './ModelOption.css';

interface Props {
    data: ModelQuestionOption;
    changedHandler?: (value: any) => any;
    clickHandler: (value: any) => any;
    selected: boolean;
}

export default class ModelOption extends React.PureComponent<Props> {
    private className = 'model-option';

    public render() {
        const c = this.className;
        const classes = [ c ];
        const { data, selected } = this.props;

        if (selected) {
            classes.push('selected');
        }

        return (
            <div className={classes.join(' ')} onClick={this.handleClick}>
                <div className={`${c}-value`}>{data.value}</div>
                {!data.freeText
                    ? <div className={`${c}-text`}>{data.text}</div>
                    : <div className={`${c}-text`}>
                        {data.text}
                        <input className={`${c}-text-input`} value={data.value} onChange={this.handleInputChange}/>
                     </div>
                }
            </div>
        );
    }

    private handleClick = () => {
        const { clickHandler, data } = this.props;
        clickHandler(data.value);
    }

    private handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { changedHandler } = this.props;
        changedHandler!(e.currentTarget.value);
    }
}
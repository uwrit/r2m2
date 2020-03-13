import React from 'react';
import { ModelQuestionOption } from '../../../model/ModelsState';
import './ModelOption.css';

interface Props {
    data: ModelQuestionOption;
    onClick: (value: any) => any;
    selected: boolean;
}

interface State {
    text: string;
}

export default class ModelOption extends React.PureComponent<Props,State> {
    private className = 'model-option';
    state = { text: '' };

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
                        <input className={`${c}-text-input`} value={this.state.text} onChange={this.handleTextChange}/>
                     </div>
                }
            </div>
        );
    }   

    private handleClick = () => {
        const { data, onClick } = this.props;
        const val = {
            answerField: data.answerField,
            freeText: data.freeText,
            text: data.text,
            value: data.value 
        };

        if (!data.freeText) {
            onClick(val);            
        } else {
            const val = {
                answerField: data.answerField,
                freeText: data.freeText,
                text: this.state.text,
                value: data.value 
            };
            onClick(val);
        }
        // onClick(val);
    }

    private handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ text: e.currentTarget.value });
    }
}
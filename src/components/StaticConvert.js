import React, { Component } from 'react';

export default class StaticConvert extends Component{

    render() {
        return(
            <div className='conversion'>
                <div className="primaryLabel">{this.props.primary}</div>
                <div className="resultLabel">{this.props.result}</div>
                <span className="primary_input"><input type="text" /></span>
                <span className="count"><input type="button" value="Convert"/></span>
                <span className="result_input"><input type="text" /></span>
            </div>
        );
    }
}
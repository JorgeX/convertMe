import React, { Component } from 'react';

export default class StaticConvert extends Component{

    constructor(props){
        super(props);
        this.convert = this.convert.bind(this);
    }

    convert(){
        //if()
    }

    render() {
        return(
            <div className='conversion'>
                <div className="primaryLabel">{this.props.primary}</div>
                <div className="resultLabel">{this.props.result}</div>
                <span className="primary_input"><input type="text" ref={(input) => {this.primaryValue = input}}/></span>
                <span className="count"><input type="button" value="< >" onClick={this.convert}/></span>
                <span className="result_input"><input type="text" /></span>
            </div>
        );
    }
}
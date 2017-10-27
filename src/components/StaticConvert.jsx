import React, { Component } from 'react';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';

export default class StaticConvert extends Component{

    constructor(props){
        super(props);
        this.convert = this.convert.bind(this);
        this.state = {
                mode: PRIMARY
            };
    }

    toggleMode(){
        let newMode = this.state.mode === PRIMARY ? SECONDARY : PRIMARY;
            this.setState({
                mode: newMode
            });
    }

    convert(){
        //TODO: regex check first
        //if()
    }

    render() {
        /*return(
            <div className='conversion'>
                <div className="primaryLabel">{this.props.primary}</div>
                <div className="resultLabel">{this.props.result}</div>
                <span className="primary_input"><input type="text" ref={(input) => {this.primaryValue = input}}/></span>
                <span className="count"><input type="button" value="<=>" onClick={this.convert}/></span>
                <span className="result_input"><input type="text" /></span>
            </div>
        );*/
        
        return( 
            <div className="conversion">
                <form  className="flex-form">
                    <input type="search" placeholder="convert from"/>
                    <label htmlFor="from">From</label>
                    <input className="flex-form-convert" type="submit" value="Convert"/>
                    <label htmlFor="from">To</label>
                    <input type="search" placeholder="convert to"/>
                    <input className="flex-form-switch" type="submit" value="Switch"/>
                </form>
            </div>
        );


    }
}
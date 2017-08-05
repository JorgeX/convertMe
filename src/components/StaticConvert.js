import React, { Component } from 'react';

class StaticConvert extends Component{

    render() {
        return(
            <div className='conversion'>
                <span className="primary_input"><input type="text" /></span>
                <span className="count"><input type="button" value="Convert"/></span>
                <span className="result_input"><input type="text" /></span>
            </div>
        );
    }
}
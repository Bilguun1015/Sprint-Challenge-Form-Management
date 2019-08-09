import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <p>{this.props.course} {this.props.name}</p>
            </>
        )
    }
}

export default Display
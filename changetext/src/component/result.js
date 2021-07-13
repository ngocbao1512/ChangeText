import React,{Component} from 'react';

class Result extends Component {


    setstyle () {
        return {
            color : this.props.color,
            borderColor : this.props.color,
            fontSize : this.props.fontsize + 'px',
            
        };
    }

    

    render () {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <div id="content" style={this.setstyle()}>
            <p>Color : {this.props.color} - Fontsize : {this.props.fontsize}px </p>
            </div>
            </div>
            );
    }
}


export default Result;

import React,{Component} from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors : ['red','green','black','yellow']
        };
    }

    showColor(color) {
      return {
          backgroundColor : color
      };
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }
    render () {

        var  elmColors = this.state.colors.map((color,index) => {

            return <span 
            key={index} style={ this.showColor(color) } className={ this.props.color === color ? 'active' : '' }
            onClick={ () => this.setActiveColor(color) } >
                {color}
            </span>
        });

        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 colorpicker">
        
            <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {elmColors}
                </div>
            </div>
            
          </div>
        );
    }
}


export default ColorPicker;

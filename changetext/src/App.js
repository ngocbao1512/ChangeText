import './App.css';
import React,{Component} from 'react';
import Reset from './component/reset.js';
import Result from './component/result.js';
import Sizesetting from './component/sizesetting';
import ColorPicker from './component/colorpicker';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        color : 'green',
        fontSize : 10
      };
      this.onSetColor = this.onSetColor.bind(this);
      this.onChangeSize = this.onChangeSize.bind(this);
      this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  onChangeSize(value) {
      if(this.state.fontSize + value >= 8 && this.state.fontSize + value <=36) {
        this.setState({
          fontSize : this.state.fontSize + value
        });
      } 
  }

  onSetColor(params) {
    this.setState({
      color : params
    });
  }
  onSettingDefault (value) {
    
      this.setState({
        color : 'red',
        fontSize : 12
      });
    
  }
  render() {
    return (
      <div className="App">
        
        
        <div className="row">
          
       
        
       < ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor } />
        
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          
          < Sizesetting fontsize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
          
          < Reset  onSettingDefault={this.onSettingDefault} />
        </div>
        </div>
  
        < Result color={this.state.color} fontsize={this.state.fontSize}/>
        
        
        
      </div>
    );
  }
}

export default App;

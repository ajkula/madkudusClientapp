import React          from 'react';
import { connect }    from "react-redux";
import ScatterPlot    from './Charts/ScatterPlot';
import '../list/styles.css';

class KuduDashboard extends React.Component {
  constructor(props){
    super(props);

    this._tooltipCB = this._tooltipCB.bind(this);
    this.before = {};
    this.graph = {};
  }

  _tooltipCB(item) {
    let continent = item.id.split(".").shift();
    return (<span>{item.name + " - " + continent}</span>)
  }
  
  render() {
    const { kudus } = this.props;
    const attribute = kudus.controls.selectedGroup;
    this.before = {};

    kudus.data.forEach(element => {
      if (!this.before[element[attribute]]) {
        let object = {};
        object.id = element[attribute];
        object.data = [{ x: element.weight, y: element.height, name: element.name }];
        this.before[element[attribute]] = object;
      } else { this.before[element[attribute]].data.push({ x: element.weight, y: element.height, name: element.name }); }
    });
    
    const ScatterplotComponent = () => (<ScatterPlot dataset={Object.values(this.before)} tooltipCB={this._tooltipCB} />)
    // const BubblesComponent = () => (<Bubbles dataset={a} tooltipCB={this._tooltipCB} />)

    return (
        <div style={{"height": "100%"}}>

          {/* <div style={{display: 'flex', flexDirection: "column", "height": "100%", "overflow": "auto"}}>
          <BubblesComponent />
          </div> */}
          <div style={{display: 'flex', flexDirection: "column", "height": "100%", "overflow": "hidden"}}>
          <ScatterplotComponent />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kudus: state.kudus.kuduList,
  };
};

export default connect(mapStateToProps, {  })(KuduDashboard);
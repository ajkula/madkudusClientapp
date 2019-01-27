import React                        from 'react';
import { connect }                  from "react-redux";
import Moment                       from '../../../../Components/Moment/Moment';
import Tooltip                      from '../../../../Components/Tooltip';
import { dateFormats, FR }          from '../../../../constants';
import './styles.css'

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.kudus;
  }

  _selectKudu(e) {
    console.log(e);
  }

  _prepareRender(kudus) {
    const cards = kudus.data.map((e, i) => {
      return (
          <div 
            className={"row " /*+ i % 2 === 0 ? "even" : "odd"*/}
            key={i + 1} 
            onClick={() => this._selectKudu(e)}
          >
          {/* <Tooltip message={e.notes}> */}
            <img src={e.picture} height={"100px"} width={"100px"} alt={e.name} ></img>
            {/* <div><Moment format={dateFormats.date} locale={FR}>{e.birthdate}</Moment></div> */}
            <span>{e.name}</span>
            <span>{e.weight}</span>
            <span>{e.height}</span>
            <span>{e.horns}</span>
            <span>{e.continent}</span>
            {/* </Tooltip> */}
          </div>
      );
    });

    cards.unshift((
      <div 
        className="rowHead"
        key={0} 
      >
        <span>picture</span>
        <span>name</span>
        <span>weight</span>
        <span>height</span>
        <span>horns</span>
        <span>continent</span>
      </div>
  ));

    return (
      <div
       className="flexContainer"
       >
        {cards}
      </div>
      );
  };

  render() {
    const { kudus } = this.props;
    return (
        this._prepareRender(kudus)
    )
  };
};

const mapStateToProps = (state) => {
  return {
    kudus: state.kudus.kuduList,
  };
};

export default connect(mapStateToProps, {  })(ListComponent);
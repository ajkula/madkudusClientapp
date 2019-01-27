// import React      from 'react';
// import PropTypes  from 'prop-types';
// import SimpleBar  from 'simplebar';

// import 'simplebar/dist/simplebar.css';
// import styles     from './Table.css';


// class TableScrollable extends React.Component {

//   static defaultProps = {  }

//   static propTypes = {
//     children: PropTypes.node,
//   }

//   constructor(props) {
//     super(props);

//     this._onResize = this._onResize.bind(this);
//     this._onScroll = this._onScroll.bind(this);

//     this.state = {
//       boxSize: {
//         width: 0,
//         height: 0,
//       }
//     };
//   }

//   componentDidMount() {
//     this._createCustomScrollbar();
//   }

//   componentDidUpdate() {
//     // force resize to re-init bar position
//     this._refreshHeight();
//     this._onResize();
//   }

//   _createCustomScrollbar() {
//     new SimpleBar(this.scrollContainer, {
//       autoHide: false,
//     });

//     // get scrollBar element
//     this.horizontalScrollEl = this.scrollContainer.querySelector('.simplebar-track.horizontal');

//     // set box positions
//     const boxPositions = this.scrollContainer.getBoundingClientRect();
//     this.height = boxPositions.height; // height of tableBoxScrollable
//     this.offsetTop = boxPositions.top; // start of tableBoxScrollable from viewport's top
//     this.scrollBarHeight = this.horizontalScrollEl.getBoundingClientRect().height; // height of custom scroll

//     // add padding bottom to make place for custom scroll
//     this.scrollContainer.querySelector('.simplebar-content > div').style.marginBottom = this.scrollBarHeight + 'px';

//     // add event
//     this.scrollEvent = document.addEventListener('scroll', this._onScroll);
//     this.resizeEvent = window.addEventListener('resize', (event) => this._onResize(event));

//     // force resize to init bar position
//     this._refreshHeight();
//     this._onResize();
//   }

//   _onScroll(event) {
//     const scrollTop = event.target.scrollingElement.scrollTop;
//     const maxScroll = (this.height + this.offsetTop - this.innerHeight - '52'); //52: height of extra div for tooltip
//     const offset = ( scrollTop < maxScroll ) ? scrollTop : maxScroll;
//     this._refreshHorizontalScrollBarPosition(offset);
//   }

//   _onResize() {
//     this._refreshInnerHeight();
//     this._refreshOffsetTop();
//     const scrollTop = document.scrollingElement.scrollTop;
//     const maxScroll = (this.height + this.offsetTop - this.innerHeight - '52');//52: height of extra div for tooltip
//     const offset = ( scrollTop < maxScroll ) ? scrollTop : maxScroll;
//     this._refreshHorizontalScrollBarPosition(offset);
//   }

//   _refreshInnerHeight() {
//     //viewport height
//     this.innerHeight = window.innerHeight;
//   }

//   _refreshHeight() {
//     //tableBoxScrollable height
//     this.height = this.scrollContainer.getBoundingClientRect().height;
//   }

//   _refreshOffsetTop() {
//     //tableBoxScrollable offset from viewport top
//     if (this.scrollContainer) {
//       this.offsetTop = this.scrollContainer.getBoundingClientRect().top + document.scrollingElement.scrollTop;
//     }
//   }

//   _refreshHorizontalScrollBarPosition(offset) {
//     const styleTop = this.innerHeight - this.offsetTop + offset - this.scrollBarHeight;
//     this.horizontalScrollEl.style.top = styleTop + 'px';
//   }

//   render() {
//     const { children } = this.props;

//     return (
//       <div
//         className={styles.tableBoxScrollable}
//         ref={(ref) => this.scrollContainer = ref}
//       >
//         { children }
//       </div>
//     );
//   }
// }

// export default TableScrollable;

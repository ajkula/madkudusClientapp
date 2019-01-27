// /*
//  * Copyright (c) 2016-present, Dalenys
//  * All rights reserved.
//  */
// import React            from 'react';
// import PropTypes        from 'prop-types';

// import TableButton  from '../Table/TableButton';
// import Menu             from '../Menu/Menu';
// import MenuSeparator    from '../Menu/MenuSeparator';
// import MenuItem         from '../Menu/MenuItem';
// import Popover          from '../Popover/Popover';

// class TableButtonActions extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//     this._openPopover = this._openPopover.bind(this);
//     this._closePopover = this._closePopover.bind(this);
//   }

//   _openPopover(event) {
//     event.stopPropagation();
//     this.setState({ isOpen: true });
//   }

//   _closePopover(popoverOpen) {
//     if (!popoverOpen) {
//       this.setState({ isOpen: false });
//     }
//   }

//   render() {

//     const { group, interactionKind, triggerIconName, popoverPosition, displayTitles } = this.props;

//     if (group.length === 0) return null;

//       const menu = (
//         <Menu>
//           {group.map((group, index) => {
//             if (group.actions.length > 0) {
//               return (
//                 <div key={index}>
//                   {displayTitles && <MenuSeparator title={group.title} />}
//                   {group.actions.map((action, index) => {
//                     return (
//                       <div key={index}>
//                         <MenuItem
//                           text={action.name}
//                           onClick={action.onClick}
//                         />
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             }
//           })}
//         </Menu>
//       );

//       return (
//         <Popover
//           content={menu}
//           interactionKind={interactionKind}
//           position={popoverPosition}
//           onInteraction={this._closePopover}
//           isOpen={this.state.isOpen}
//         >
//           <TableButton icon={triggerIconName} onClick={this._openPopover} />
//         </Popover>
//       );
//   }
// }


// TableButtonActions.defaultProps = {
//   interactionKind: 'click',
//   triggerIconName: 'ellipsis-v',
//   popoverPosition: 'bottom-right',
//   displayTitles:    false,
// };

// TableButtonActions.propTypes = {
//   group:          PropTypes.arrayOf(PropTypes.shape({
//     title :            PropTypes.string,
//     actions:          PropTypes.arrayOf(PropTypes.shape({
//       name:             PropTypes.string,
//       onClick:          PropTypes.func,
//     }))
//   })).isRequired,
//   interactionKind:  PropTypes.string,
//   triggerIconName:  PropTypes.string,
//   popoverPosition:  PropTypes.string,
//   displayTitles:    PropTypes.bool,
// };

// export default TableButtonActions;

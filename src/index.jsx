import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './page/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { List } from 'react-virtualized';

// // List data as an array of strings
// const list = [
//   'Brian Vaughn1',
//   'Brian Vaughn2',
//   'Brian Vaughn3',
//   'Brian Vaughn4',
//   'Brian Vaughn5',
//   'Brian Vaughn6',
//   'Brian Vaughn7',
//   'Brian Vaughn8',
//   'Brian Vaughn9',
//   'Brian Vaughn10',
//   'Brian Vaughn11',
//   'Brian Vaughn12',
//   'Brian Vaughn13',
//   'Brian Vaughn14',
//   'Brian Vaughn15',
//   'Brian Vaughn16',
//   'Brian Vaughn17',
//   'Brian Vaughn18',
//   'Brian Vaughn19',
//   'Brian Vaughn20',
//   'Brian Vaughn21',
//   'Brian Vaughn22',
//   'Brian Vaughn23',
//   'Brian Vaughn24',
//   'Brian Vaughn25',
//   'Brian Vaughn26',
//   'Brian Vaughn27',
//   'Brian Vaughn28',
//   'Brian Vaughn29',
//   'Brian Vaughn30',
// ];

// function rowRenderer ({
//   key,
//   index,
//   style
// }) {
//   return (
//     <div
//       key={key}
//       style={style}
//     >
//       {list[index]}
//     </div>
//   )
// }

// // Render your list
// ReactDOM.render(
//   <List
//     width={300}
//     height={300}
//     rowCount={list.length}
//     rowHeight={20}
//     rowRenderer={rowRenderer}
//     // overscanRowCount={10}
//   />,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

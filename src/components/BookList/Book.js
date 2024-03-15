import React from 'react';
import '../../styles/bootstrap.min.css';

// export default class Book extends Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.title}</td>
//         <td>{this.props.author}</td>
//         <td>{this.props.year}</td>
//       </tr>
//     )
//   }
// }

function Book({title , author , year}) {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{year}</td>
    </tr>
  )
}

export default Book

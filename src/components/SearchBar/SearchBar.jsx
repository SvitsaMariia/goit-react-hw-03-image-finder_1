// import { Component } from 'react';
// import css from './SearchBar.module.css';

// export class SearchBar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChangeValue = ({ target }) => {
//     this.setState({ inputValue: target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputValue);
//     this.setState({ inputValue: '' });
//   };
//   render() {
//     return (
//       <header className={css.SearchBar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="css" className={css.SearchForm_button}>
//             <span className={css.button_label}>Search</span>
//           </button>

//           <input
//             className={CSS.SearchForm_input}
//             type="text"
//             autoComplete="off"
//             value={this.state.value}
//             onChange={this.handleChangeValue}
//             autoFocus
//             placeholder="Search images and photos"
//             name="searcher"
//           />
//         </form>
//       </header>
//     );
//   }
// }

import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  return (
    <header className={styles.SearchBar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
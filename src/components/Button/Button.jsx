import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
  handleClick = () => {
    const { page } = this.props;
    const nextPage = page + 1;
    this.props.onClick(nextPage);
  };

  render() {
    return (
      <button className={css.button} type="button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

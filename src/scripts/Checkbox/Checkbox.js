/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import formatFieldClass from './../utilities/formatFieldClass.js';
import Label from './../Label/Label.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class Checkbox extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOf([ true, false ])
  };

  static defaultProps = {
    className: '',
    label: true,
    onChange: () => {},
    value: false
  };

  state = { value: this.props.value };

/******************************************************************************\
 EVENT HANDLERS
\******************************************************************************/

  handleOnChange = (e) => {
    const value = e.target.checked;
    this.setState({ value }, () => {
      this.props.onChange({ value });
    });
  };

/******************************************************************************\
 COMPONENT METHODS
\******************************************************************************/

  clear() {
    const { value } = this.props;
    this.setState({ value });
  }

/******************************************************************************\
 COMPONENT VIEW
\******************************************************************************/

  render() {

    const { className, id, label } = this.props;
    const { value } = this.state;

    return (
      <div className={ formatFieldClass(className, false, 'checkbox') }>
        <div className="form__field-inner">
          <Label
            id={ id }
            label={ label }
            placeholder={ false }
            value={ value } />
          <div className="form__field__input-container">
            <input
              className="form__input"
              checked={ value }
              id={ id }
              onChange={ this.handleOnChange }
              type="checkbox" />
          </div>
        </div>
      </div>
    );
  }
}

/******************************************************************************\
 EXPORTS
\******************************************************************************/

export default Checkbox;

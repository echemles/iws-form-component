/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import DropKick from 'dropkickjs/build/js/dropkick.min.js';
import Error from './../Error/Error.js';
import formatFieldClass from './../utilities/formatFieldClass.js';
import Label from './../Label/Label.js';
import titleize from './../utilities/titleize.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class Select extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    errorMessage: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    errorMessages: React.PropTypes.bool,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    onChange: React.PropTypes.func,
    options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      React.PropTypes.shape({
        label: React.PropTypes.string,
        value: React.PropTypes.oneOfType([
          React.PropTypes.bool,
          React.PropTypes.number,
          React.PropTypes.string
        ])
      }),
      React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.number,
        React.PropTypes.string
      ])
    ])),
    placeholders: React.PropTypes.bool,
    value: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number,
      React.PropTypes.string
    ])
  };

  static defaultProps = {
    className: '',
    errorMessage: true,
    label: true,
    onChange: () => {},
    validate: false,
    value: ''
  };

  state = {
    choices: null,
    dk: null,
    error: false,
    value: this.props.value
  };

/******************************************************************************\
 LIFECYCLE METHODS
\******************************************************************************/

  componentDidMount() {
    const { children, options, value } = this.props;
    const { select } = this.refs;
    this.setState({
      choices: this.formatChoices(children || options),
    }, () => {
      const dk = (children || options) && new DropKick(select);
      this.setState({ dk });
    });
  }

/******************************************************************************\
 EVENT HANDLERS
\******************************************************************************/

  handleOnChange = (e) => {
    const { value } = e.target;
    this.setState({ value }, () => {
      this.validate(value);
      this.props.onChange({ value });
    });
  };

/******************************************************************************\
 COMPONENT METHODS
\******************************************************************************/

  clear() {
    const { children, options, value } = this.props;
    const { select } = this.refs;
    let { dk } = this.state;
    this.setState({ value }, () => { dk.refresh(); });
  }

  formatChoices(choices) {
    const { placeholders } = this.props;
    choices = placeholders ? this.formatPlaceholder(choices) : choices;
    return choices && choices.map((choice, i) => {
      const { props } = choice;
      const value = props ? (props.value ? props.value : props.children) : typeof choice === 'object' ? choice.value : choice;
      const label = props ? props.children : typeof choice === 'object' ? choice.label : choice;
      return <option key={ i } value={ value }>{ label }</option>;
    });
  }

  formatClassName() {
    const { className, placeholders } = this.props;
    const { choices, error, value } = this.state;
    return [
      formatFieldClass(className, error, 'select'),
      placeholders ? 'form__field--select--placeholders' : '',
      placeholders && this.getFirstOption(choices) === value ? 'form__field--select--placeholder' : ''
    ].join(' ');
  }

  formatErrorMessage() {
    const { errorMessage, id } = this.props;
    if (typeof errorMessage === 'boolean') {
      return `Please select a valid ${ titleize(id).toLowerCase() }.`;
    } else { return errorMessage; }
  }

  formatPlaceholder(choices) {
    const { children, id } = this.props;
    let { label } = this.props;
    choices = children.length ? React.Children.toArray(choices) : choices;
    label = typeof label === 'string' ? label : `Please Select a Valid ${ titleize(id) }`;
    choices.unshift({ value: '', label });
    return choices;
  }

  getFirstOption(options) {
    if (options) {
      const { props } = React.Children.toArray(options)[0];
      return props.value;
    }
  }

  hasError() {
    const { errorMessage, errorMessages } = this.props;
    const { error } = this.state;
    return errorMessage && errorMessages && error;
  }

  validate(value) {
    const { validate } = this.props;
    const error = validate && !value;
    this.setState({ error });
    return error;
  }

/******************************************************************************\
 COMPONENT VIEW
\******************************************************************************/

  render() {

    const { children, id, label, options, placeholders } = this.props;
    const { choices, value } = this.state;

    return (
      <div className={ this.formatClassName() }>
        <div className="form__field-inner">
          { !placeholders && (
            <Label
              id={ id }
              label={ label }
              placeholder={ false }
              value={ value } />
          ) }
          <div className="form__field__input-container">
            <select
              id={ id }
              onChange={ this.handleOnChange }
              ref="select"
              value={ value }>
              { choices }
            </select>
            { this.hasError() && (
              <Error message={ this.formatErrorMessage() } />
            ) }
          </div>
        </div>
      </div>
    );
  }
}

/******************************************************************************\
 EXPORT
\******************************************************************************/

export default Select;

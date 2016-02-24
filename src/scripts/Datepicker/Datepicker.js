/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import Error from './../Error/Error.js';
import formatFieldClass from './../utilities/formatFieldClass.js';
import Label from './../Label/Label.js';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker';
import titleize from './../utilities/titleize.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class DatePicker extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    dateFormat: React.PropTypes.string.isRequired,
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
    maxDate: React.PropTypes.object,
    minDate: React.PropTypes.object,
    onChange: React.PropTypes.func,
    placeholders: React.PropTypes.bool,
    value: React.PropTypes.string,
    weekStart: React.PropTypes.string
  };

  static defaultProps = {
    className: '',
    dateFormat: 'MM/DD/YYYY',
    errorMessage: true,
    label: true,
    onChange: () => {},
    validate: false,
    value: '',
    weekStart: '0'
  };

  state = {
    error: false,
    value: this.props.value
  };

/******************************************************************************\
 EVENT HANDLERS
\******************************************************************************/

  handleOnChange(datepicker, date) {
    const value = datepicker.formatDate(date._d);
    datepicker.setState({ value }, () => {
      datepicker.validate(value);
      datepicker.props.onChange({ value });
    });
  }

/******************************************************************************\
 COMPONENT METHODS
\******************************************************************************/

  clear() {
    const { value } = this.props;
    this.setState({ value });
  }

  formatDate(d) {
    const date = new Date(d);
    return [
      date.getMonth() + 1,
      date.getDate(),
      date.getFullYear()
    ].join('/')
  }

  formatErrorMessage() {
    const { errorMessage, id } = this.props;
    if (typeof errorMessage === 'boolean') {
      return `Please select a valid ${ titleize(id).toLowerCase() }.`;
    } else { return errorMessage; }
  }

  formatPlaceholder() {
    const { id, label, placeholders } = this.props;
    return placeholders ? (typeof label === 'string' ? label : titleize(id)) : null;
  }

  hasError() {
    const { errorMessage, errorMessages } = this.props;
    const { error } = this.state;
    return errorMessage && errorMessages && error;
  }

  validate(value) {
    const { validate } = this.props;
    let error = validate && !value;
    this.setState({ error });
    return error;
  }

/******************************************************************************\
 COMPONENT VIEW
\******************************************************************************/

  render() {

    const {
      className,
      dateFormat,
      id,
      label,
      maxDate,
      minDate,
      weekStart,
      placeholders
    } = this.props;

    const { error, value } = this.state;

    return (
      <div className={ formatFieldClass(className, error, 'datepicker') }>
        <div className="form__field-inner">
          { !placeholders && (
            <Label
              id={ id }
              label={ label }
              placeholder={ false }
              value={ value } />
          ) }
          <div className="form__field__input-container">
            <ReactDatePicker
              dateFormat={ dateFormat }
              maxDate={ maxDate }
              minDate={ minDate }
              selected={ value ? moment(new Date(value)) : null }
              onChange={ this.handleOnChange.bind(null, this) }
              placeholderText={ this.formatPlaceholder() }
              weekStart={ weekStart } />
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

export default DatePicker;

/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import Fieldset from './../Fieldset/Fieldset.js';
import formatFieldClass from './../utilities/formatFieldClass.js';
import Label from './../Label/Label.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class Radio extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
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
    value: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number,
      React.PropTypes.string
    ])
  };

  static defaultProps = {
    className: '',
    label: true,
    onChange: () => {},
    value: ''
  };

  state = { value: this.props.value };

/******************************************************************************\
 EVENT HANDLERS
\******************************************************************************/

  handleOnChange = ({ target }) => {
    const value = target.id;
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

  checkEquality(value) {
    const { parse: p, stringify: s } = JSON;
    return s(p(value)) === s(p(this.state.value));
  }

  formatChoices(choices) {
    return choices && choices.map((choice, i) => {
      const { props } = choice;
      const value = props ? props.value : typeof choice === 'object' ? choice.value : choice;
      const label = props ? props.children : typeof choice === 'object' ? choice.label : choice;
      return { label, value };
    });
  }

  formatString(value) {
    const { stringify: s } = JSON;
    return typeof value === 'string' ? value : s(value);
  }

/******************************************************************************\
 COMPONENT VIEW
\******************************************************************************/

  render() {

    const { children, className, id, label, options } = this.props;
    const choices = this.formatChoices(children || options);
    const { value } = this.state;

    return (
      <div className={ formatFieldClass(className, false, 'radio') }>
        <div className="form__field-inner">
          <Label
            id={ id }
            label={ label }
            placeholder={ false }
            value={ value } />
          { choices && choices.map((option, i) => {
            return (
              <div
                className="form__field__input-container"
                key={ i }>
                <Label
                  id={ this.formatString(option.value) }
                  label={ this.formatString(option.label) }
                  placeholder={ false }
                  value={ this.checkEquality(option.value) } />
                <input
                  id={ option.value }
                  name={ id }
                  onChange={ this.handleOnChange }
                  ref={ option.value }
                  type="radio"
                  checked={ this.checkEquality(option.value) } />
              </div>
            );
          }) }
        </div>
      </div>
    );
  }
}

/******************************************************************************\
 EXPORT
\******************************************************************************/

export default Radio;

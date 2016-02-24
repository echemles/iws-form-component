/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import titleize from './../utilities/titleize.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class Label extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    placeholder: React.PropTypes.bool,
    value: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number,
      React.PropTypes.object,
      React.PropTypes.string
    ])
  };

/******************************************************************************\
 COMPONENT METHODS
\******************************************************************************/

  formatLabel(id) {
    const { label } = this.props;
    return typeof label === 'string' ? label : titleize(id);
  }

/******************************************************************************\
 COMPONENT VIEW
\******************************************************************************/

  render() {

    const { id, placeholder, value } = this.props;

    return (
      <label
        className={`form__${ placeholder ? 'placeholder' : 'label' }`}
        data-value={ value }
        htmlFor={ id }>
        <span dangerouslySetInnerHTML={{ __html: this.formatLabel(id) }} />
      </label>
    );
  }
}

/******************************************************************************\
 EXPORT
\******************************************************************************/

export default Label;

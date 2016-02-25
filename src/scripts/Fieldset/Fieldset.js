const Fieldset = ({ children, className, title }) => (
  <div className={ `form__fieldset ${ className }` }>
    { title && (
      <div
        className="form__fieldset-title"
        dangerouslySetInnerHTML={{ __html: title }} />
    ) }
    { children }
  </div>
);

Fieldset.propTypes = {
  className: React.PropTypes.string,
  componentType: React.PropTypes.string,
  title: React.PropTypes.string,
};

Fieldset.defaultProps = {
  className: '',
  componentType: 'fieldset',
  title: ''
};

export default Fieldset;

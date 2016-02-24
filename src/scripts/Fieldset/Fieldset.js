const Fieldset = ({ children, className, title }) => (
  <div className={ `form__fieldset ${ className }` }>
    { title && (
      <div className="form__fieldset-title">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
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
  componentType: 'fieldset'
};

export default Fieldset;

function formatFieldClass(className, error, type) {
  return [
    'form__field',
    `form__field--${ type }`,
    error ? 'form__field--error' : '',
    className
  ].join(' ');
}

export default formatFieldClass;

function Btn({ classProp, text }) {
  return (
    <button className={`btn ${classProp}`} type="button">
      {text}
    </button>
  );
}

Btn.defaultProps = {
  classProp: '',
  text: '[button]',
};

export default Btn;

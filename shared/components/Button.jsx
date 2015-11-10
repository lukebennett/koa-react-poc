export default React => (
  ({ disabled, onClick, value }) => (
    <input
      type='button'
      disabled={disabled}
      onClick={onClick}
      value={value}
    />
  )
);
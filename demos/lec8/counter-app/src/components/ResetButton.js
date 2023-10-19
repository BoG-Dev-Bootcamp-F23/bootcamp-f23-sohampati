export default function ResetButton(props) {
  return (
    <button
      onClick={() => {
        props.setCount(0);
      }}
    >
      Reset
    </button>
  );
}

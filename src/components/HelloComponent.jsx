function HelloComponet() {
  return (
    <div>
      <h1>React Hello</h1>

      <button
        onClick={() => {
          alert("Hello mundo cruel xd");
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default HelloComponet;
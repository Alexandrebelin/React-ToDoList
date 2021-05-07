const Form = ({ handleSubmit, setInput, input }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="new task"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;

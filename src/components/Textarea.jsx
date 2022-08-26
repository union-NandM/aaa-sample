export const Textarea = ({ text, setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea
        className="border-solid border-gray-300 border-2 w-full block h-32 resize-none font-mono"
        onChange={handleChange}
        value={text}
      ></textarea>
    </div>
  );
};

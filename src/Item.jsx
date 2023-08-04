const Item = ({ id, value, onChange }) => {
  console.log("rerender", id)
  return <input onChange={(e) => onChange(id, e.target.value)} value={value} />;
};

export default Item;

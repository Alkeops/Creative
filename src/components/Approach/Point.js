const Point = ({ title, num, children }) => {
  return (
    <div className="point">
      <div className="point__header">
        <h3>{title}</h3>
        <h1 className="number">{num}</h1>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Point;

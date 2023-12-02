const TransformCard = (prop) => {
  return (
    <div>
      <div className="w-[12rem] my-9">
        <h3 className="text-2xl font-semibold">{prop.title}</h3>
      </div>
      <div>
        <p>
            {prop.text}
        </p>
      </div>
    </div>
  );
};

export default TransformCard;

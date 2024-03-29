const Maincard = ({ img, onHeartClick, aleadyFavorite }) => {
  const heartIcon = aleadyFavorite ? "💖" : "🤍";

  return (
    <div className="main-card">
      <img src={img} alt="고양이" width="400" />
      <button onClick={onHeartClick}>{heartIcon}</button>
    </div>
  );
};

export default Maincard;

type CardProps = {
  id: string;
  title: string;
  addFavorite?: (e: any) => void;
  onSelect?: (e: any) => void;
};

export const Card = ({ id, title, addFavorite, onSelect }: CardProps) => {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <button onClick={addFavorite}>Add Favorite</button>
      <button onClick={onSelect}>Select</button>
    </div>
  );
};

export default Card;

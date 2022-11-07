import { AnimatePresence, motion } from "framer-motion";

type CardProps = {
  id: string;
  title: string;
  addFavorite?: (e: any) => void;
  onSelect?: (e: any) => void;
};

export const Card = ({ id, title, addFavorite, onSelect }: CardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3>{title}</h3>
        <button onClick={addFavorite}>Add Favorite</button>
        <button onClick={onSelect}>Select</button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;

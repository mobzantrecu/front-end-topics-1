type FiltersProps = {
  selectedId: string;
  filters: string[];
  onSelect: () => void;
};

const Filters = () => {
  return (
    <div>
      <label>
        <input type="checkbox" id="cbox1" value="first_checkbox" /> Este es mi
        Filtrar
      </label>
      <br></br>
    </div>
  );
};

export default Filters;

import React from "react";
import mapIcon from "../../../public/map-pin.png";
import searchIcon from "../../../public/search.png";
import { Button } from "../../components/Button";
import Input from "../../components/Input/Input";
import searchBarStyles from "./SearchBar.module.css";

const SearchBar = () => {
  const handleClick = (field: string) => {
    return (e: any) => console.log(field + " " + e.target.value);
  };

  const buttonClick = () => {
    return 5;
  };

  return (
    <div className={searchBarStyles.container}>
      <Input
        icon={searchIcon}
        iconAlt="Search Icon"
        placeholder="Job tittle or keyword"
        handleClick={handleClick("search")}
        layoutComponentClasses={searchBarStyles.input}
      />
      <div className={searchBarStyles.line} />
      <Input
        icon={mapIcon}
        iconAlt="Map Icon"
        placeholder="City, state or zip"
        handleClick={handleClick("location")}
        layoutComponentClasses={searchBarStyles.belowInput}
      />
      <Button
        onClick={buttonClick}
        layoutComponentClasses={searchBarStyles.button}
      >
        <span className={searchBarStyles.buttonText}>Find jobs</span>
      </Button>
    </div>
  );
};

export default SearchBar;

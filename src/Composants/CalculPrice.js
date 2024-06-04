import React from "react";

import { Button } from "antd";

export const CalculPrice = ({ value, setValue, setTotalePrix }) => {

  const handleCalculatePrix = () => {
    let prix = 0;
    const filmsAchetes = value.split("\n");
    let nbreFilmsPast = 0;

    filmsAchetes.forEach((film) => {
      if (film.length) {
        if (film.startsWith("Back to the Future")) {
          nbreFilmsPast++;
        } else {
          prix = prix + 20;
        }
      }
    });

    if (nbreFilmsPast > 2) {
      prix = prix + 15 * nbreFilmsPast * 0.8;
    }
    if (nbreFilmsPast === 2) {
      prix = prix + 15 * 2 * 0.9;
    }
    if (nbreFilmsPast === 1) {
      prix = prix + 15;
    }

    return setTotalePrix(prix);
  };

  return (
    <>
      <textarea
        placeholder="Nom des films achetés"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={5}
        cols={50}
      />
      <div>
        <Button type="primary" onClick={handleCalculatePrix} disabled={value?.length}>
          Calculate Prix
        </Button>
      </div>
    </>
  );
};

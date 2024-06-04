import { render, screen } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./CalculPrice.feature", {
  loadRelativePath: true,
});

defineFeature(feature, (test) => {
  test("Activé et désactivé le bouton calcule", ({
    given,
    and,
    when,
    then,
  }) => {
    given("J'accéder à la page d'accueil", () => {
      render(<App />);
    });

    and("Le bouton Calculate Prix est désactivé", () => {
        const bouton= screen.getByText("Calculate Prix");
        expect(bouton).toBeEnabled();
    });

    when("Je saisir des noms de films dans le champ de texte", () => {
        const text=screen.getByPlaceholderText("Nom des films achetés")
        userEvent.type(text,"Back to the Future 1")
    });

    then("Le bouton Calculate Prix est devenir activé", () => {
        const bouton= screen.getByText("Calculate Prix");
        expect(bouton).toBeEnabled();
    });
  });
});

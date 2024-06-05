import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
      const bouton = screen.getByText("Calculate Prix");
      expect(bouton).toBeEnabled();
    });

    when("Je saisir des noms de films dans le champ de texte", () => {
      const text = screen.getByPlaceholderText("Nom des films achetés");
      userEvent.type(text, "Back to the Future 1");
    });

    then("Le bouton Calculate Prix est devenir activé", () => {
      const bouton = screen.getByText("Calculate Prix");
      expect(bouton).toBeEnabled();
    });
  });
  test.only("Calculer le prix lors de la saisie des films achete", ({
    given,
    and,
    when,
    then,
  }) => {
    given("J'accéder à la page d'accueil", () => {
      render(<App />);
    });
    and('Je saisis les films suivants dans le champ de texte :', (table) => {
        console.log(
          "%csrcTestsCalculPrice.test.js:43 table",
          "color: #007acc;",
          table
        );
        const textArea = screen.getByPlaceholderText("Nom des films achetés");
        fireEvent.change(textArea, { target: { value: table } });
      }
    );
    when(/^Je clique sur le bouton "(.*)"$/, (boutonName) => {
      const bouton = screen.getByRole("button", { name: boutonName });
      fireEvent.click(bouton);
    });
    then(/^J'affiche le prix des films (.*)$/,  (prix) => {
        const totalPrice = screen.getByText(`Totale Prix: ${prix}`);
        expect(totalPrice).toBeInTheDocument();
    })
  });

  test("Calculer le prix lors de la saisie d'un seuls film achete", ({
    given,
    and,
    when,
    then,
  }) => {
    given("J'accéder à la page d'accueil", () => {
      render(<App />);
    });
    and(
      /^Je saisis les films suivants dans le champ de texte : (.*)$/,
      (table) => {
        console.log(
          "%csrcTestsCalculPrice.test.js:43 table",
          "color: #007acc;",
          table
        );
        
        const textArea = screen.getByPlaceholderText("Nom des films achetés");
        fireEvent.change(textArea, { target: { value: table } });
      }
    );

    when(/^Je clique sur le bouton "(.*)"$/, (boutonName) => {
      const bouton = screen.getByRole("button", { name: boutonName });
      fireEvent.click(bouton);
    });
    then(/^J'affiche le prix des films (.*)$/, async (prix) => {
      
      await waitFor(() => {
        const totalPrice = screen.getByText(`Totale Prix: ${prix}`);
        expect(totalPrice).toBeInTheDocument();
      }, { timeout: 5000 });
    });
  });
});

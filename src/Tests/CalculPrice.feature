Feature: Scenario CalculPrice

  Scenario: Activé et désactivé le bouton calcule
    Given J'accéder à la page d'accueil
    And Le bouton Calculate Prix est désactivé
    When Je saisir des noms de films dans le champ de texte
    Then Le bouton Calculate Prix est devenir activé

  Scenario: Calculer le prix lors de la saisie des films achete
    Given J'accéder à la page d'accueil
    And Je saisis les films suivants dans le champ de texte :
      | Film                 |
      | Back to the Future 1 |
      | Back to the Future 2 |
      | Back to the Future 3 |
      | La chèvre            |
    When Je clique sur le bouton "Calculate Prix"
    Then J'affiche le prix des films "56"

  Scenario Outline: Calculer le prix lors de la saisie d'un seuls film achete
    Given J'accéder à la page d'accueil
    And Je saisis les films suivants dans le champ de texte : <Liste de Films>
    When Je clique sur le bouton "Calculate Prix"
    Then J'affiche le prix des films <Prix>

    Examples:
      | Liste de Films       | Prix |
      | Back to the Future 1 |   15 |
      | La chèvre            |   20 |

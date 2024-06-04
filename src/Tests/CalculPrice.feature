Feature: Scenario CalculPrice


Scenario: Activé et désactivé le bouton calcule
Given J'accéder à la page d'accueil
And Le bouton Calculate Prix est désactivé
When Je saisir des noms de films dans le champ de texte
Then Le bouton Calculate Prix est devenir activé

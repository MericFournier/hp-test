# Henri Potier
*Test technique pour Publicis Sapient Engineering*


### Consignes

Concevoir une application qui permet d'afficher les livres de Henri Pottier, de les ajouter à son panier et de voir la meilleure offre associée. 

## Commandes

### `npm i`
Instale les dépendances 
### `npm start`
Lance l'application en mode développement sur le port 3000
### `npm test`
Lance les tests unitaires dans la console
### `npm cypress:open`
Lance Cypress dans une nouvelle fenêtre du navigateur
### `npm build`
Build l'application pour la production


## Solution

### Intégration

J'ai choisi de concevoir l'application avec **ReactJS**. Un framework JavaScript robuste qui permet, entre autres, d'avoir une application modulaire, c'est à dire composée de plusieurs blocs individuels réutilisables.

En stylisant mon application avec **SASS** je peux retrouver ce même fonctionnement modulaire dans mes styles et ainsi faciliter la modification ou l'ajout de style.

Afin de moderniser l'interface, j'intègre quelques animations avec la librairie **GSAP** qui fournit une panoplie très complète d'outils d'animations.

### Données

Afin de garantir la maintenabilité de l'application et de garantir une cohérence des données, l'ensemble des données est centralisée dans un store **Redux**. C'est depuis le store que sont faites les consommations d'API grâce au middleware **Redux-thunk** et à la librairie **Axios**

Afin d'offrir une meilleure expérience à l'utilisateur, le panier est enregistré dans le **localStorage** à chaque fois qu'un livre y est ajouté ou retiré.

### Tests

J'ai effectué deux types de tests dans le but de valider mon application : 

#### Les tests unitaires

Avec les librairies **Jest** et **React Testing** je valide des tests d'intégration, qui  permettent de vérifier qu'un composant s'affiche normalement en prenant en compte ses propriétés et son état. Je valide également certaines fonctions. 

Les tests unitaires permettent également de tester mon Store Redux, qui est la partie principale de l'application. 

Les tests unitaires sont plus nombreux que les tests End to End. Ils permettent de tester en profondeur tous les cas de figures sur un composant individuel. 

#### Les tests End to End

Avec la librairie **Cypress**, je valide un scénario précis afin de vérifier que les composants de mon application interagissent bien entre eux et que l'utilisateur est en mesure d'effectuer certaines actions. 

Ces tests permettent de simuler les actions d'un utilisateur : cliquer, naviguer, scroller etc...

#### La documentation

Afin de faciliter la maintenance par d'autres développeurs, je documente certaines fonctions en respectant la norme **JSDoc**. La documentation permet de comprendre rapidement les paramètres et les retours d'une fonction. Le nommage explicite des fonctions, classes et composants permet également une lecture plus intuitive du code.




## Axe d'amélioration


### Cache de données

Mettre en cache le résultat de chaque appel vers un service tiers. À chaque nouvel appel, si la requête a déjà été effectuée, on ne lance pas l'appel mais restitue les données du cache. 

### Favoris

Pouvoir ajouter un livre à ses favoris sans l'ajouter au panier

### Quantité

Pouvoir acheter en plusieurs quantité un même livre.









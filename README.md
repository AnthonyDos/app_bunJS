# Gestionnaire de tache

[Installation de Bun js](#installationBun)
[Installation de la VM](#installation)
[Liste des dépendances et description des dépendances](#dependances)
[Pourquoi avoir choisi cette liste](#pourquoi)


This project was created using `bun init` in bun v1.0.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


##Installation

Il faudra avant de commencer à lancé l'application, créer les variables d'environnements.
L'application tourne sur le port 3000 par défaut sinon 8000.

### Installation de Bun js
 -Commande pour installer Bun js : curl -fsSL https://bun.sh/install
 -Vérifier la version : bun --version
 -Modifier une version : bun upgrade
 -Créer un projet depuis NPM : bun create nom du projet et destination
 -Lancer le projet : bun run index.js ou index.ts selon le choix de typescript ou non.

####Commandes supplémentaires:
|   Commandes         |            Description de la commande                       |
|---------------------|-------------------------------------------------------------|
|   --force           | écraser les fichiers existants                              |
|   --no-install	  | Ignorer l'installation node_moduleset les tâches            |
|   --no-git	      | Ne pas initialiser un dépôt git                             |
|   --open            | Démarrer et ouvrir dans le navigateur après avoir terminé   |


### Installation de la VM
-Téléchargez et installez Ubuntu 22.04.02LTS
-Ouvrez l'invite de commande, dans paramétre choisir : ubuntu 22.04.02 LTS
-Placez vous dans la disque virtuel ubuntu
-Lancer le projet : bun run index.js ou index.ts selon le choix de typescript ou non.

### Installation des dépendances
-Dans le bash entrez : bun install et le nom de la dépendance
-elysia : bun add elysia
-@elysiajs/cookie : bun add @elysiajs/cookie
-@elysiajs/jwt : bun add @elysiajs/jwt
-mongoDb : bun add mongoDb
-mongoose : bun add mongoose
-mongoose-unique-validator : bun add mongoose-unique-validator
-dotenv : bun add dotenv
##Dependances
|   Dépendances            |            Description                                      |
|--------------------------|-------------------------------------------------------------|
|   elysia                 |  couche supplémentaire à Bun js                                                                                       |  
|   @elysiajs/cookie       |  utilisés pour suivre l'état et l'activité de l'utilisateur telles que la gestion de sessions, le stockage de préférences utilisateur, le suivi des activités de l'utilisateur etc.                                                                                     |
|   @elysiajs/jwt	       |  liée à la manipulation et à la gestion de JSON Web Tokens  |
|   mongoDb 	           | base de données NoSql                                       |
|   mongoose               |  fournit une couche d'abstraction au-dessus de MongoDB, ce qui facilite la gestion et la manipulation des données dans une application                  |
|mongoose-unique-validator | ajoute une validation de champ unique à vos schémas Mongoose|
|   dotenv                 | Les variables d'environnement sont des variables externes à votre application qui stockent des configurations sensibles telles que les clés d'API, les identifiants de base de données, les secrets, etc.                                       | 

##Pourquoi

**Bun js** : rapidité de développement, vue claire et structurée et Intégration de composants. 

**Elysia** : pour la gestion des cookies et du routage, rapide à mettre en place.

**@elysiajs/cookie** : la gestion des cookies

**MongoDb** : permet de mettre en place rapidement une base de données, elle permet une fléxibilité pour la modélisation des données. Simple à faire évoluer si l'on souhaite ajouter de nouveaux serveurs. Performance élevée pour la lecture et l'écriture de données. Mise à jour des données en temps en réel.

**Mongoose**: fournit un mécanisme de modélisation des données qui permet de définir la structure de vos données dans MongoDB. Mongoose offre des outils de validation qui vous permettent de définir des règles de validation pour vos données, garantissant que les données stockées dans la base de données respectent certaines conditions. Mongoose prend en charge les promesses, ce qui facilite la gestion asynchrone des opérations de base de données.Bien que MongoDB soit une base de données NoSQL, Mongoose permet de gérer des relations entre les documents, ce qui est utile dans de nombreux cas d'utilisation.

**mongoose-unique-validator**: Validation des champs uniques comme les adresses e-mail, les noms d'utilisateur, les identifiants uniques, etc. 

**dotenv**: simplifie la gestion des variables d'environnement dans votre application. Il vous permet de stocker des configurations sensibles, telles que des clés d'API, des identifiants de base de données, des secrets, etc., dans un fichier de configuration distinct, ce qui les rend faciles à gérer et à protéger.  Storing des configurations sensibles dans un fichier .env ou un fichier de configuration similaire permet de garder ces informations hors du code source de votre application, ce qui renforce la sécurité en cas de fuite de code source.



To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```
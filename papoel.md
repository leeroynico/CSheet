> Fichier pour Nico (désolé connexion éclaté depuis 24h ...)

# Mongo DB

## Création d'un projet

Lorsque tu te connectes à mongoDb tu aura ceci par défaut:

![homepage](./images/homepage.jpg)

Clique sur le dropdown dans le coin supérieur gauche (ici écrit technistory)

Puis clique sur **New Project**, nomme maintenant ton projet comme bon te semble, on te demandera si tu veux ajouter des membres et des permissions, tu peux ignorer cela pour l'instant et creer ton projet.

Tu devrai avoir queelque chose comme ceci :

![create-project](./images/create-project.jpg)

## Création de la **Database**

Cliques sur `Build Database` tu vas arriver ici :

![deploy-cloud-database](./images/deploy-cloud-database.jpg)

Cliques sur `Create` de la carte **free**, tu vas arriver sur cette page :

![create-cluster](./images/create-cluster.jpg)


|Options  |Mes choix  |
|---------|---------|
|Cloud Provider & Region|Je laisse AWS personellement|
|Region|Je choisis Europe/Froncjfurt car je suis en Europe et Franckfort est plus près de chez moi que Irelande.|
|Cluster Tier|Aucun choix car nnous sommes dans un free cluster|
|Additional Settings|Sauvegarde de la database, cette option est payante on n'a pas accès|
|Cluster Name|Le nom de ton cluster, ici Cluster-CSheet (tu le nomme comme tu veux, personnelemnt j'aime bien préfixer de Cluster)|

Une fois tout ça remplis clioques sur **create**, la création peut-être longue tu vas obtenir cette page

![deploying-cloud-database](./images/deploying-cluster.jpg)

Tu remarques un liseret gris en mouvement, cela indique que ton **cluster** est en cours de création, une fois le **cluster** créé tu obtiendra ceci:

![cluster-created](./images/cluster-created.jpg)

## Création de la base de donnée et de notre 1ère collection

Une fois ici cliques sur `Browse Collection`, ensuite clique sur l'onglet `Collections` et maintenant clique sur le boutton `Add My Own Data`

![database-create](./images/database-create.jpg)

## Voila la base de donnée et ta collection est crée

![database-success-create](./images/database-success-create.jpg)

## Vérification des accès

Pour pouvoir connecter ton cluster, il faut que tu ai un user dans ton compte pour autoriser la connexion a ta base de donnée.

## Création d'un user

Dans la partie `SECURITY` clique sur `Database Access` et clique sur `Add New Database User` Ci dessous je définis mon mot de passe et je donne les privilèges en lecture écriture, tu as juste à cliquer sur `add user`

![database-user-create](./images/database-user-create.jpg)


## Accès au réseau

>Sert à autoriser notre adresse ip ou une liste d'adresse ip à accèder à la base de donnée, ici je laisse full access mais si je ne voulais autoriser qu'une ou x autres personne je n'aurai qu'a ajouter leur adresse ip tout simplement <br>
><blockquote>PS: Ici il ne s'agit pas de donner un accès à ton compte MongoDb mais bien à la base de donnée uniquement.
</blockquote>

Ici j'autorise n'importe quelle adrese à se connecter en cliquant sur le bouton `ALLOW ACCESS FROM ANYWHERE`.<br/>
 **Lorsque tu travailleras sur ton projet seul tu mettra `ADD CURRENT IP ADDRESS`**

![network-fullaccess](./images/network-fullaccess.jpg)


<div>

**<h3>Conseils</h3>**

### Je te conseil d'installer sur ta machine MongoDBCompass, cela te permetttra de te connecter à ta base de donnée, mais aussi supposons que tu as un fichier .json avec tes donnée avec cet interface tu pourra directement injecter ton fichier en le téléchargeant simplement.

</div>

## Connecter sa base de donnéé à Compass

Cliques sur `Databases` dans la sidebar partie `DEPLOYMENT`, une fois que tu verras ton cluster cliques sur le boutton `Connect`.<br/>
Maintenant que tout est créé on va connecter notre base de donnée, tu aura donc 3 propositions:

- Connect avec MongoDB Shell
- Connect l'application
- Connecter en utilsant MongoDB Compass

Tu l'aura deviner, je vais me connecter à mongoDB Compass, bon comme je suis sympa voici le [Lien](https://www.mongodb.com/fr-fr/products/compass) pour l'installer.

Une fois installer ouvre ton compass (suis les étapes pour installer je ne les aient plus en tête).

Cliques sur `Connect using MongoDB Compass`

![connect-cluster-compass](./images/connect-cluster-compass.jpg)

Copie ce que tu as dans la partie 2 :

``` bash
mongodb+srv://<username>:<password>@cluster-csheet.aylec.mongodb.net/test
```

Rend toi dans Compass et colle en remplaçant par nos valeurs, donc ça va donner :

``` bash
mongodb+srv://teamStudi:csheet@cluster-csheet.aylec.mongodb.net/CSheetDB
```

![connect-compass-success](./images/connect-compass-success.jpg)

<br/><hr/><br/><br/>

# Voila c'est tout t'as plus qu'a t'amuser maintenant !
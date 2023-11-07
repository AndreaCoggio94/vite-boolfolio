# Laravel Boolfolio - API - Parte 1

## Consegna

### Milestone 1

nome repo 1: laravel-api
Aggiungiamo al nostro progetto Laravel una nuovo Api/ProjectController. Questo controller risponderà a delle richieste via API e si occuperà di restituire la lista dei progetti presenti nel database in formato json.

### Milestone 2

Testiamo la chiamata API tramite Postman e assicuriamoci di ricevere i dati correttamente.

### Milestone 3

nome repo 2: vite-boolfolio
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
Colleghiamo questo progetto ad una repo separata.

### Milestone 4

Nel componente principale della nostra Vue App facciamo una chiamata API all'endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

### Milestone 5

Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

### Bonus:

Gestire la paginazione dei risultati

# Laravel Boolfolio - API - Parte 2

## Consegna

### Milestone 1 (Vue)

Installate Vue Router, realizzate il file router.js come nelle slides o usate la cartella router/index.js come visto insieme.
Ricordate di
importarlo e usarlo anche in main.js
di usare il componente <router-view> in App.vue

### Milestone 2 (Vue)

Realizzare una cartella pages, inserite al suo interno 3 pagine: homepage, portfolio, project-detail.
La homepage è da realizzare a piacere (per ultima)
Il portfolio conterrà una lista di projects impaginati
Il project-detail conterrà il dettaglio di un singolo progetto (da utilizzare quindi un parametro nell'url e nei <router-link>)
NB: In questa milestone basterà vedere le pagine, non serve aggiungere il contenuto.

### Milestone 3 (Vue)

Aggiungere una navbar e tutti i router-link per permettere la navigazione

### Milestone 4 (Laravel)

Realizzare e testare le chiamate API (Api\ProjectController, metodi index e show).

### Milestone 5 (Vue)

Effettuare chiamate alle API da Axios e aggiungere il contenuto alle pagine portfolio e project-detail

### Bonus

Completare la homepage

### Bonus 2

Realizzare un form dei contatti che invii una mail con la configurazione di mailtrap (modificato)

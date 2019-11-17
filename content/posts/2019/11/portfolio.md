---
title: Portfolio con Saber
date: 2019-11-09
published: true
cover_image: ./images/portfolio.png
tags: ['Portfolio']
description: "Stanco di aggiornare il solito curriculum vitae cartaceo ho pensato di unirlo ad una carrellata dei miei progetti personali per creare il mio sito portfolio."
---

Stanco di aggiornare il solito curriculum vitae cartaceo ho pensato di unirlo a una carrellata dei miei progetti personali per creare il mio sito portfolio.

Già da diverso tempo avevo due idee distinte, il curriculum digitale appunto e una semplice landing page che mi avrebbe rimandato sul curriculum e sull'Eniblog (e su eventuali futuri progetti come l'[Enibrauhaus](/enibrauhaus-2-0)). Con una breve descrizione di me stesso e poco altro.

Per il curriculum digitale avevo pensato a Vuepress, come una sorta di wiki delle mie esperienze lavorative. Il portfolio invece lo avrei realizzato con il collaudato Gridsome (con cui vi ricordo ho fatto questo blog) e il tema Portfolio già citato [qua](/dieci-template-per-il-tuo-blog-statico).

Proprio mentre provavo questo tema mi sono accorto di un bug, ossia un flash che avviene quando si cambia pagina e si ha il tema scuro attivato. Per un breve istante è come se ritornasse al tema chiaro, un dettaglio da poco ma fastidioso (e che non ho provato a risolvere per pigrizia).  
Giusto in quei giorni il suo creatore postava sul suo canale youtube un [video](https://www.youtube.com/watch?v=h_xtEfc-p6A) relativo ad un nuovo generatore di siti statici, sempre basato su vue, [Saber](https://saber.land/).

Ha attirato la mia curiosità quando lo ha definito più semplice da imparare di Gridsome (è più simile a Hugo/Jekyll quindi niente GraphQL) e ha avuto la mia attenzione quando ha mostrato il sopracitato template portfolio fatto proprio per Saber. E indovinate, non aveva il bug del tema scuro.

![gif](https://media.giphy.com/media/10qzqO2Dej4uLm/giphy.gif)

Ok, come landing page/sito personale era perfetto e stavo per eliminare ovviamente la parte di blog, un po' uno spreco pensai visto che Saber consente di farlo "out of the box".

Ma qui mi si accese la lampadina: il curriculum è in sostanza una lista ordinata di "post esperienziali", che siano essi lavorativi o scolastici. Non ci sono così tante differenze dal layout di un blog, forse qualcosa si può fare.
Con il pregio che entrando nel post completo si può aumentare la verbosità della propria attività lavorativa senza pesare sul colpo d'occhio generale alla Linkedin, l'elenco dei post appunto. Ecco a voi il curriculum 2.0 😌

## Un po' di codice
Sono bastate poche modifiche per dare un idea di quello che volevo fare.  
Ho cominciato inserendo due nuove proprietà date (dateStart e dateEnd) nel frontmatter per ogni post:

```yaml
title: ISII Marconi
path: /isii-marconi
date: 2019-01-01
summary: Capotecnico informatica progetto ABACUS
tags: ['formazione']
layout: post
dateStart: 2006-09-01
dateEnd: 2011-07-01
```

Queste ultime due date mi servono per mostrare nel post, sia anteprima che dettaglio, l'intervallo dell'esperienza a livello di mese. E sono anche le uniche date da mostrare, perché non avrebbe senso mostrare la data del post. Questa è fittizia e mi serve solo per ordinare i post in ordine cronologico.  
Per rendere più elegante il tutto sarebbe stato meglio un indice numerico, ma non credo si possa fare, a meno di clonare direttamente Saber e modificarlo.

Nei view model blog.vue e post.vue ho quindi rimpiazzato la vecchia data

```js
{{ formatMonth(page.dateStart) }} - {{ formatMonth(page.dateEnd) }}
```

Definendo il formatMonth in modo da contemplare anche il caso in cui non ci sia la data di fine per il lavoro/scuola corrente.

```js
formatMonth(date){
    if(date == 'present'){
        return 'presente';
    }

    const options = { month: 'long', year: 'numeric', timeZone: 'UTC' }
    return new Date(date).toLocaleDateString('it-IT', options);
}
```

```yaml
title: Analista Programmatore
path: /analista-programmatore
date: 2019-07-01
summary: Elfo S.r.l. - Fiorenzuola d’Arda (Italia) Analista Programmatore
tags: ['lavoro']
layout: post
dateStart: 2018-01-01
dateEnd: present
```

## Eventuali sviluppi futuri
Per ora sono contento così, non è il massimo dell'eleganza ma fa il suo lavoro. Ma ho già individuato qualche modifica e feature da implementare
- Andrebbero formattate meglio le anteprime dei post, mettendo il luogo della scuola/azienda su un'altra riga. Probabilmente serve una nuova proprietà nel frontmatter perché non sono riuscito ad andare a capo con l'html, forse si potrà in nuove versioni di saber.
- Uno stile più personalizzato. Tenere pari pari il tema del template non è il massimo, si può fare di più. Dai colori alle immagini free di [Undraw](https://undraw.co/). Ma la Mark 50 di Iron Man rimarrà.
- Supporto multi-lingua (inglese e italiano), funzionalità già supportata da Saber. Anche le traduzioni delle date dovranno essere gestite.
- Funzionalità per generare la versione pdf del curriculum. Questa sarà più difficile e servirà generare automaticamente un pdf a partire dalla lista di post in markdown, con verbosità selezionabile. Quindi due curriculum per ogni volta che si modifica il sito.


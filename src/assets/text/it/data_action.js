const it_data_action = [
    {
        title: "Attaccare",
        icon: "crossed-swords",
        subtitle: "Attacco in mischia o a distanza",
        description: "Eseguire un attacco in mischia o a distanza con la propria arma.",
        reference: "MdG, pgs. 192,194-195.",
        bullets: [
            "Alcune caratteristiche, come la caratteristica <i>Attacco extra</i> del combattente, permettono di effettuare più di un attacco con questa azione. Ognuno di questi attacchi è un tiro separato e può colpire creature diverse. Tra un attacco e l'altro ci si può muovere.",
            "Quando si attacca con un'arma da mischia leggera, si può usare un'azione bonus per attaccare con l'altra mano (vedi l'azione bonus <i>Attaccare a due mani</i>)",
            "Si può sostituire uno dei propri attacchi in mischia con un attacco di <i>Lotta</i> o <i>Spingere</i>.",
            "Alcune condizioni danno vantaggio all'attacco: attacchi contro bersagli accecati, paralizzati, pietrificati, immobilizzati, storditi o incoscienti; attacchi in mischia contro bersagli proni; attacchi da parte di attaccanti invisibili o nascosti.",
            "Alcune condizioni danno svantaggio all'attacco: attacchi contro bersagli invisibili o nascosti; attacchi a distanza contro bersagli proni; attacchi da parte di attaccanti accecati, spaventati, avvelenati o immobilizzati."
        ]
    },
    {
        title: "Lottare",
        icon: "grab",
        subtitle: "Attacco speciale in mischia",
        description: "Tentare di afferrare una creatura o di lottare con essa.",
        reference: "MdG, pg. 195.",
        bullets: [
            "Si può usare l'azione <i>Attacco</i> per effettuare un attacco speciale in mischia, una presa. Se si possono effettuare più attacchi con l'azione Attacco, questo attacco ne sostituisce uno",
            "Il bersaglio della presa non deve essere più grande di una taglia rispetto a voi e deve essere alla vostra portata",
            "Usando almeno una mano libera, si cerca di afferrare il bersaglio effettuando una prova di afferrare, una prova di Forza (Atletica) contestata da una prova di Forza (Atletica) o Destrezza (Acrobatica) del bersaglio (il bersaglio sceglie l'abilità da usare)",
            "Se si ha successo, si sottopone il bersaglio alla condizione di afferrato (la sua velocità è impostata a 0)"
        ]
    },
    {
        title: "Spingere una Creatura",
        icon: "hand",
        subtitle: "Attacco speciale in mischia",
        description: "Spingere una creatura, per farla cadere prona o per allontanarla da voi.",
        reference: "MdG, pg. 196.",
        bullets: [
            "Utilizzando l'azione <i>Attacco</i>, si può effettuare un attacco speciale in mischia per spingere una creatura. Se si possono effettuare più attacchi con l'azione Attacco, questo attacco ne sostituisce uno",
            "Il bersaglio dello spintone non deve essere più grande di una taglia e deve essere a portata di mano",
            "Si effettua una prova di Forza (Atletica) contestata da una prova di Forza (Atletica) o Destrezza (Acrobatica) del bersaglio (il bersaglio sceglie l'abilità da usare)",
            "Se si vince la sfida, si stende il bersaglio prono o lo si spinge a un metro e mezzo di distanza da sé"
        ]
    },
    {
        title: "Lanciare un incantesimo",
        icon: "magic-swirl",
        subtitle: "Tempo di lancio di 1 azione",
        description: "Lanciare un incantesimo con tempo di lancio di 1 azione",
        reference: "MdG, pg. 192.",
        bullets: [
            "Non si può lanciare un incantesimo con la propria azione e un altro incantesimo con la propria azione bonus nello stesso turno, tranne se l'azione viene usata per lanciare un trucchetto",
            "Il bersaglio di un incantesimo deve trovarsi all'interno del raggio d'azione dell'incantesimo. Per colpire un bersaglio, è necessario avere un percorso chiaro per raggiungerlo, quindi non può trovarsi dietro una copertura totale",
            "Gli incantesimi con componenti materiali non consumano il materiale, a meno che non sia esplicitamente indicato. A meno che non sia indicato il costo di un materiale, si può presumere che il costo sia trascurabile e che il materiale sia semplicemente disponibile in una sacca dei componenti",
            "Alcuni incantesimi richiedono di mantenere la concentrazione per mantenere attiva la loro magia. Se si perde la concentrazione, l'incantesimo termina. Si perde la concentrazione su un incantesimo se si lancia un altro incantesimo che richiede concentrazione o se si è incapaci. Ogni volta che si subisce un danno, si deve effettuare un tiro salvezza di Costituzione per mantenere la concentrazione. La DC è pari a 10 o alla metà dei danni subiti, a seconda di quale sia il numero più alto"
        ]
    },
    {
        title: "Scatto",
        icon: "sprint",
        subtitle: "Velocità di movimento doppia",
        description: "Guadagna un movimento extra per il turno in corso",
        reference: "MdG, pg. 192.",
        bullets: [
            "L'aumento è pari alla velocità, dopo l'applicazione di eventuali modificatori."
        ]
    },
    {
        title: "Disimpegno",
        icon: "journey",
        subtitle: "Prevenire gli attacchi di opportunità",
        description: "Il movimento non provoca attacchi di opportunità per il resto del turno.",
        reference: "MdG, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Schivata",
        icon: "aura",
        subtitle: "Aumentare le difese",
        description: "Concentrarsi esclusivamente sull'evitare gli attacchi",
        reference: "MdG, pg. 192.",
        bullets: [
            "Fino all'inizio del vostro prossimo turno, qualsiasi tiro di attacco effettuato contro di voi ha svantaggio se potete vedere l'attaccante, e potete effettuare tiri salvezza di Destrezza con vantaggio.",
            "Si perde questo beneficio se si è <i>incapacitati</i> o se la propria velocità scende a 0."
        ]
    },
    {
        title: "Sfuggire a una lotta",
        icon: "manacles",
        subtitle: "Sfuggire a una lotta",
        description: "Sfuggire a una lotta",
        reference: "MdG, pg. 195.",
        bullets: [
            "Per sfuggire a una presa, bisogna riuscire a effettuare una prova di Forza (Atletica) o Destrezza (Acrobatica) contrastata dalla prova di Forza (Atletica) dell'afferratore",
            "Per sfuggire ad altre condizioni di costrizione (come le manette) può essere necessaria una prova di Destrezza o di Forza, come specificato dalla condizione."
        ]
    },
    {
        title: "Aiuto",
        icon: "telepathy",
        subtitle: "Garantire un vantaggio ad un alleato",
        description: "Garantire a un alleato un vantaggio su una prova di abilità o su un attacco.",
        reference: "MdG, pg. 192.",
        bullets: [
            "Il bersaglio guadagna vantaggio alla prossima prova di abilità che effettua per eseguire il compito per cui lo state aiutando",
            "In alternativa, il bersaglio guadagna vantaggio al prossimo tiro per attaccare contro una creatura entro un raggio di 1,5 metri da voi",
            "Il vantaggio dura fino all'inizio del tuo prossimo turno"
        ]
    },
    {
        title: "Utilizzare un Oggetto",
        icon: "snatch",
        subtitle: "Interagire, utilizzare abilità speciali",
        description: "Interagire con un secondo oggetto o utilizzare le abilità speciali dell'oggetto.",
        reference: "MdG, pg. 193.",
        bullets: [
            "Si può interagire gratuitamente con un oggetto durante il proprio turno (come estrarre un'arma o aprire una porta). Se volete interagire con un secondo oggetto, usate questa azione",
            "Quando un oggetto richiede la vostra azione per essere usato, usate anche questa azione"
        ]
    },
    {
        title: "Utilizzare uno scudo",
        icon: "round-shield",
        subtitle: "Equipaggiare o togliere uno scudo",
        description: "Equipaggiare o togliere uno scudo",
        reference: "MdG, pgs. 144-146.",
        bullets: [
            "Uno scudo richiede sempre un'azione per essere equipaggiato o disarmato",
            "Un'armatura richiede diversi minuti per essere equipaggiata o disarmata."
        ]
    },
    {
        title: "Nascondersi",
        icon: "hood",
        subtitle: "",
        description: "Tentare di nascondere",
        reference: "MdG, pg. 192.",
        bullets: [
            "Non puoi nasconderti da una creatura che può vederti. Dovete avere una copertura totale, trovarvi in un'area fortemente oscurata, essere invisibili o bloccare in altro modo la visuale del nemico",
            "Se si fa rumore (ad esempio gridando un avvertimento o rovesciando un vaso), si rivela la propria posizione",
            "Quando cerchi di nasconderti, effettua una prova di Destrezza (Furtività) e prendi nota del risultato. Finché non si viene scoperti o non si smette di nascondersi, il totale di quella prova viene contestato dalla prova di Saggezza (Percezione) di qualsiasi creatura che cerchi attivamente segni della propria presenza",
            "Una creatura vi nota anche se non vi sta cercando, a meno che la vostra prova di Furtività non sia superiore alla sua Percezione passiva",
            "Fuori dal combattimento, si può anche usare una prova di Destrezza (Furtività) per azioni come nascondersi dai nemici, eludere le guardie, sgattaiolare via senza essere notati o avvicinarsi furtivamente a qualcuno senza essere visti o sentiti"
        ]
    },
    {
        title: "Cercare",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedicate la vostra attenzione alla ricerca di qualcosa",
        reference: "MdG, pg. 193.",
        bullets: [
            "A seconda della natura della ricerca, il DM potrebbe farvi effettuare una prova di Saggezza (Percezione) o una prova di Intelligenza (Investigazione)."
        ]
    },
    {
        title: "Prepararsi",
        icon: "stopwatch",
        subtitle: "Scegliere l'innesco e l'azione",
        description: "Scegliere un fattore scatenante e una reazione di risposta",
        reference: "MdG, pg. 193.",
        bullets: [
            "Per prima cosa, decidete quale circostanza percepibile scatenerà la vostra reazione",
            "Poi, scegliete l'azione da compiere in risposta a quell'innesco, oppure scegliete di spostarvi alla vostra velocità in risposta ad esso",
            "Quando si verifica l'innesco, si può scegliere se eseguire la reazione subito dopo la fine dell'innesco o ignorare l'innesco",
            "Quando si prepara un incantesimo, lo si lancia normalmente ma se ne trattiene l'energia, che viene rilasciata con la reazione al momento dell'innesco. Per essere pronto, un incantesimo deve avere un tempo di lancio di 1 azione e trattenere la magia dell'incantesimo richiede concentrazione"
        ]
    },
    {
        title: "Utilizzare privilegio di classe",
        icon: "embrassed-energy",
        subtitle: "Alcune privielgi utilizzano azioni",
        description: "Usare una caratteristica razziale o di classe che utilizza un'azione",
        reference: "Per ulteriori informazioni, consultare la pagina della classe.",
        bullets: [

        ]
    },
    {
        title: "Stabilizzare una creatura",
        icon: "first-aid",
        subtitle: "Prestare il primo soccorso a una creatura morente",
        description: "Fermare una creatura morente dalla necessità di effettuare i tiri salvezza per la morte",
        reference: "MdG, pg. 197.",
        bullets: [
            "Effettuare un test di Saggezza (Medicina) con DC 10",
            "In caso di successo, la creatura è stabile e non deve più effettuare tiri salvezza per la morte",
            "Una creatura stabile recupera 1 punto ferita dopo 1d4 ore"
        ]
    },
    {
        title: "Improvvisare",
        icon: "juggler",
        subtitle: "Qualsiasi azione non presente nell'elenco",
        description: "Eseguire qualsiasi azione immaginabile",
        reference: "MdG, pg. 193.",
        bullets: [
            "Quando descrivete un'azione non descritta altrove nelle regole, il DM vi dice se quell'azione è possibile e che tipo di tiri dovete fare, se ne avete, per determinare il successo o il fallimento."
        ]
    }
]

export default it_data_action;
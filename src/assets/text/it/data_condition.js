const it_data_condition = [
    {
        title: "Accecato",
        icon: "one-eyed",
        subtitle: "Non si può vedere",
        description: "Non si può vedere",
        reference: "MdG, pg. 290.",
        bullets: [
            "Fallisci automaticamente qualsiasi prova di abilità che richieda la vista",
            "Hai svantaggio nei tiri per colpire",
            "I tiri per colpire contro di te hanno vantaggio"
        ]
    },
    {
        title: "Affascinato",
        icon: "smitten",
        subtitle: "Sei affascinato",
        description: "Sei affascinato da un'altra creatura",
        reference: "MdG, pg. 290.",
        bullets: [
            "Non potete attaccare il vostro incantatore o bersagliarlo con abilità dannose o effetti magici",
            "Il vostro incantatore ha un vantaggio sulle prove di abilità per interagire socialmente con voi"
        ]
    },
    {
        title: "Assordato",
        icon: "elf-ear",
        subtitle: "Non si sente",
        description: "Non si sente",
        reference: "MdG, pg. 290.",
        bullets: [
            "Si fallisce automaticamente qualsiasi prova di abilità che richieda l'udito."
        ]
    },
    {
        title: "Indebolimento",
        icon: "crawl",
        subtitle: "Sei esausto",
        description: "L'esaurimento si misura in sei livelli",
        reference: "MdG, pg. 291.",
        bullets: [
            "<table><tr><th>Livello</th><th style='text-align: left'>Effetto</th></tr><tr><td>1</td><td>Svantaggio nelle prove di abilità</td></tr><tr><td>2</td><td>Velocità dimezzata</td></tr><tr><td>3</td><td>Svantaggio nei tiri di attacco e nei tiri salvezza</td></tr><tr><td>4</td><td>Punti ferita massimi dimezzati</td></tr><tr><td>5</td><td>Velocità ridotta a 0</td></tr><tr><td>6</td><td>Morte</td></tr></table>",
            "Subisci l'effetto del tuo attuale livello di esaurimento e di tutti i livelli inferiori",
            "Terminare un riposo lungo riduce il livello di esaurimento di 1, a condizione che si sia anche mangiato e bevuto",
            "Inoltre, essere resuscitati dai morti riduce di 1 il livello di esaurimento di una creatura"
        ]
    },
    {
        title: "Spaventato",
        icon: "sharp-smile",
        subtitle: "Sei spaventato",
        description: "Sei spaventato",
        reference: "MdG, pg. 290.",
        bullets: [
            "Hai svantaggio alle prove di abilità e ai tiri per attaccare quando la fonte della tua paura è in linea di vista",
            "Non puoi avvicinarti volontariamente alla fonte della tua paura"
        ]
    },
    {
        title: "Afferrato",
        icon: "grab",
        subtitle: "Sei afferrato",
        description: "Sei afferrato",
        reference: "MdG, pg. 290.",
        bullets: [
            "La tua velocità diventa 0 e non puoi beneficiare di alcun bonus alla velocità",
            "La condizione termina se il vostro afferratore è incapacitato",
            "La condizione termina anche se si viene rimossi dalla portata dell'afferratore"
        ]
    },
    {
        title: "Incapacitato",
        icon: "internal-injury",
        subtitle: "Non è possibile intraprendere azioni o reazioni",
        description: "Non è possibile intraprendere azioni o reazioni",
        reference: "MdG, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisibile",
        icon: "invisible",
        subtitle: "Non si può essere visti",
        description: "Non si può essere visti senza l'aiuto della magia o di un senso speciale.",
        reference: "MdG, pg. 291.",
        bullets: [
            "Per lo scopo di nascondersi, si è fortemente oscurati",
            "E' possibile comunque essere individuati dai rumori che fate o dalle tracce che lasciate",
            "Hai vantaggio nei tiri per colpire",
            "I tiri per colpire contro di te hanno svantaggio"
        ]
    },
    {
        title: "Paralizzato",
        icon: "internal-injury",
        subtitle: "Sei paralizzato",
        description: "Non si può fare nulla",
        bullets: [
            "Sei incapace e non puoi muoverti o parlare",
            "I tiri per colpire contro di te hanno vantaggio",
            "Ogni attacco che vi colpisce è un colpo critico se l'attaccante si trova entro un raggio di 2 metri da voi",
            "Fallisci automaticamente i tiri salvezza di Forza e Destrezza"
        ]
    },
    {
        title: "Pietrificato",
        icon: "stone-pile",
        subtitle: "Sei trasformato in pietra",
        description: "Vieni trasformato, insieme a qualsiasi oggetto non magico indossato o trasportato, in una solida sostanza inanimata (di solito pietra).",
        reference: "MdG, pg. 291.",
        bullets: [
            "Il vostro peso aumenta di dieci volte e smettete di invecchiare",
            "Siete incapaci, non potete muovervi né parlare e non siete consapevoli di ciò che vi circonda",
            "I tiri per colpire contro di voi hanno un vantaggio",
            "Fallisci automaticamente i tiri salvezza di Forza e Destrezza",
            "Hai resistenza a tutti i danni",
            "Siete immuni al veleno e alle malattie, anche se un veleno o una malattia già presenti nel vostro organismo vengono solo sospesi, non neutralizzati"
        ]
    },
    {
        title: "Avvelenato",
        icon: "deathcab",
        subtitle: "Sei avvelenato",
        description: "Sei avvelenato",
        reference: "MdG, pg. 292.",
        bullets: [
            "Si ha svantaggio sui tiri per colpire e sulle prove di abilità."
        ]
    },
    {
        title: "Prono",
        icon: "crawl",
        subtitle: "Sei prono",
        description: "Sei prono",
        reference: "MdG, pg. 292.",
        bullets: [
            "L'unica possibilità di movimento è strisciare, a meno che non ci si alzi in piedi",
            "Hai svantaggio sui tiri per colpire",
            "I tiri per colpire contro di te hanno vantaggio se l'attaccante si trova entro un metro e mezzo da te, altrimenti il tiro di attacco ha svantaggio"
        ]
    },
    {
        title: "Trattenuto",
        icon: "imprisoned",
        subtitle: "Sei trattenuto",
        description: "Sei trattenuto",
        reference: "MdG, pg. 292.",
        bullets: [
            "La tua velocità diventa 0 e non puoi beneficiare di alcun bonus alla velocità",
            "Hai svantaggio nei tiri per colpire",
            "I tiri per colpire contro di te hanno vantaggio",
            "Hai svantaggio nei tiri salvezza di Destrezza"
        ]
    },
    {
        title: "Stordito",
        icon: "internal-injury",
        subtitle: "Sei stordito",
        description: "Sei stordito",
        reference: "MdG, pg. 292.",
        bullets: [
            "Sei incapacitato, non puoi muoverti e puoi parlare solo a fatica",
            "I tiri per colpire contro di te hanno vantaggio",
            "Si falliscono automaticamente i tiri salvezza di Forza e Destrezza"
        ]
    },
    {
        title: "Privo di sensi",
        icon: "coma",
        subtitle: "Sei privo di sensi",
        description: "Sei privo di sensi",
        reference: "MdG, pg. 292.",
        bullets: [
            "Siete incapaci, non potete muovervi né parlare e non siete consapevoli di ciò che vi circonda",
            "Si lascia cadere qualsiasi cosa si tenga in mano e si cade proni",
            "I tiri per colpire contro di te hanno vantaggio",
            "Ogni attacco che vi colpisce è un colpo critico se l'attaccante si trova entro un metro e mezzo da voi",
            "Si falliscono automaticamente i tiri salvezza di Forza e Destrezza",
        ]
    },
    {
        title: "Morente",
        icon: "dead-head",
        subtitle: "Sei morente",
        description: "Siete scesi a zero punti ferita e state morendo.",
        reference: "MdG, pg. 197.",
        bullets: [
            "Se vieni ridotto a 0 punti ferita da un danno che non ti uccide, cadi in stato di incoscienza e stai morendo",
            "Se si riceve una guarigione, si riprende immediatamente conoscenza e non si è più in fin di vita",
            "Quando si e' morenti, all'inizio di ogni turno si effettua un tiro salvezza per la morte. Tira un d20 e non aggiungi alcun modificatore",
            "Un 10 o più alto è un successo, un 9 o meno è un fallimento",
            "Al terzo successo, diventi stabile",
            "Al terzo fallimento, si muore",
            "Il lancio di un 1 conta come due fallimenti.",
            "Con un 20 si recupera immediatamente 1 punto ferita",
            "Potete essere stabilizzati anche da un alleato che compie l'azione Stabilizzare e riesce a superare una prova di Saggezza (Medicina) a DC 10",
            "Una volta stabilizzato, riacquisti 1 punto ferita dopo 1d4 ore"
        ]
    }
]

export default it_data_condition;
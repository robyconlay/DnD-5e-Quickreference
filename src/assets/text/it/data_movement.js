const it_data_movement = [
    {
        title: "Muoversi",
        icon: "run",
        subtitle: "Costo: 1,5m per 1,5m",
        description: "Costo movimento: 1,5m per 1,5m percorsi",
        reference: "MdG, pg. 190.",
        bullets: [
            "Se hai piu' di una velocita', come la velocita' di cammino e la velocita' di volo, puoi cambiare avanti e indietro tra le tue velocita' mentre ti muovi. Ogni volta che cambi, sottrai la distanza che hai gia percorso dalla nuova velocita'.",
            "Puoi muoverti attraverso lo spazio occupato da una creatura non ostile.",
            "Puoi muoverti attraverso lo spazio occupato da una creatura ostile sono se la creatura e' di due taglie piu' piccole o piu' grandi di te",
            "Lo spazio occupato da un'altra creatura e' terreno difficile per te.",
            "Indipendentemente se la creatura e' amica o nemica, non puoi volontariamente finire il tuo movimento nel suo spazio."
        ]
    },
    {
        title: "Scalare",
        icon: "crags",
        subtitle: "Costo: 3m per 1,5m",
        description: "Costo movimento: 3m per 1,5m scalati",
        reference: "MdG, pg. 182.",
        bullets: [
            "Potrebbe richiedere un tiro di Forza (Atletica) se la scalata e' difficile"
        ]
    },
    {
        title: "Nuotare",
        icon: "at-sea",
        subtitle: "Costo: 3m per 1,5m",
        description: "Costo movimento: 3m per 1,5m nuotati",
        reference: "MdG, pg. 182.",
        bullets: [
            "Potrebbe richiedere un tiro di Forza (Atletica) se la nuotata e' difficile"
        ]
    },
    {
        title: "Cadere prono",
        icon: "falling",
        subtitle: "Costo: 0m",
        description: "Costo movimento: 0m (gratis)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "E possibile cadere in posizione prona senza utilizzare la velocita'",
            "Per muoversi in posizione prona, è necessario strisciare o usare una magia come il teletrasporto.",
            "Cadere proni aggiunge la condizione <i>Prono</i> (gli attacchi in mischia contro di voi hanno vantaggio, gli attacchi a distanza contro di voi hanno svantaggio, i vostri stessi attacchi hanno svantaggio)"
        ]
    },
    {
        title: "Strisciare",
        icon: "crawl",
        subtitle: "Costo: 3m per 1,5m",
        description: "Costo movimento: 3m per 1,5m strisciati",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        title: "Alzarsi",
        icon: "strong",
        subtitle: "Costo: meta' della velocita di movimento",
        description: "Costo movimento: meta' della tua velocita'",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "Non e' possibile alzarsi se non si ha abbastanza movimento o se la velocità è pari a 0."
        ]
    },
    {
        title: "Salto in alto",
        icon: "wingfoot",
        subtitle: "Costo: 1,5m per 1,5m",
        description: "Costo movimento: 1,5m per 1,5m saltati",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "Si salta in aria per un numero di metri pari a <b>3 + il proprio modificatore di Forza</b> se ci si muove di almeno 3 metri a piedi immediatamente prima del salto",
            "Quando si effettua un salto in alto da fermi, si può saltare solo per metà della distanza",
            "Durante il salto si possono allungare le braccia per metà della propria altezza sopra di sé",
            "In alcune circostanze, il DM può permettere di effettuare una prova di Forza (Atletica) per saltare più in alto di quanto si possa fare normalmente"
        ]
    },
    {
        title: "Salto in lungo",
        icon: "wingfoot",
        subtitle: "Costo: 1,5m per 1,5m",
        description: "Costo movimento: 1,5m per 1,5m saltati",
        reference: "PHB, pg. 182.",
        bullets: [
            "Si percorre un numero di metri pari al proprio punteggio di <b>Forza</b> se ci si sposta di almeno 3 metri a piedi immediatamente prima del salto",
            "Quando si effettua un salto in lungo da fermi, si può saltare solo per metà della distanza",
            "Può comportare una prova di Forza (atletica) a DC 10 per superare un ostacolo basso (non più alto di un quarto della distanza del salto). Con una prova fallita si colpisce l'ostacolo",
            "Può comportare una prova di Destrezza (Acrobatica) a DC 10 per atterrare in piedi su un terreno difficile. Se la prova fallisce, si atterra proni"
        ]
    },
    {
        title: "Improvvisare",
        icon: "juggler",
        subtitle: "Qualsiasi acrobazia non presente nell'elenco",
        description: "Eseguire qualsiasi movimento o acrobazia che si possa immaginare",
        bullets: [
            "Quando descrivete un tipo di movimento non dettagliato in altre parti del regolamento, il DM vi dice se è possibile e che tipo di tiro dovete fare, eventualmente, per determinare il successo o il fallimento."
        ]
    },
    {
        title: "Terreno difficile",
        icon: "stone-pile",
        subtitle: "Modificatore di costo: +1,5m per 1,5m",
        reference: "PHB, pg. 182.",
        description: "Muoversi su terreni difficili costa 1,5 m in più per ogni 1,5 m di movimento.",
        bullets: [
        ]
    },
    {
        title: "Movimento in lotta",
        icon: "grab",
        subtitle: "Modificatore: velocita' dimezzata",
        description: "Trascinare o portare con sé la creatura afferrata",
        reference: "PHB, pg. 195.",
        bullets: [
            "Se vi muovete mentre afferrate un'altra creatura, la vostra velocità è dimezzata, a meno che la creatura non sia di due o più taglie più piccola di voi",
            "Vedi l'azione di attacco per sapere come afferrare una creatura"
        ]
    }
]

export default it_data_movement;
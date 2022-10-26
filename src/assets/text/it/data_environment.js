const it_data_environment = [
    {
        title: "Leggermente oscurato",
        icon: "bleeding-eye",
        subtitle: "Svantaggio in Percezione",
        description: "Luce debole, nebbia a chiazze, fogliame moderato",
        reference: "MdG, pg. 183.",
        bullets: [
            "Le creature hanno <b>svantaggio sulle prove di Saggezza (Percezione)</b> che si basano sulla vista."
        ]
    },
    {
        title: "Pesantemento oscurato",
        icon: "lightning-tear",
        subtitle: "Efficacemente cieco",
        description: "Buio, nebbia opaca, fitto fogliame",
        reference: "MdG, pg. 183.",
        bullets: [
            "Una creatura che si trova in un'area fortemente oscurata soffre effettivamente della condizione di <b>accecamento</b>."
        ]
    },
    {
        title: "Luce intensa",
        icon: "star-pupil",
        subtitle: "Visione normale",
        description: "Luce intensa consente alla maggior parte delle creature di vedere normalmente",
        reference: "MdG, pg. 183.",
        bullets: [
            "Le giornate uggiose forniscono comunque una luce intensa, così come le torce, le lanterne, i fuochi e altre fonti di illuminazione entro un raggio specifico."
        ]
    },
    {
        title: "Luce fioca",
        icon: "semi-closed-eye",
        subtitle: "Leggermente oscurato",
        description: "Luce fioca, detta anche ombra",
        reference: "MdG, pg. 183.",
        bullets: [
            "Crea un'area <b>leggermente oscurata</b>",
            "Un'area di luce fioca (penombra) è solitamente un confine tra una fonte di luce intensa, come una torcia, e l'oscurità circostante",
            "Anche la luce soffusa del crepuscolo e dell'alba conta come luce fioca. Una luna piena particolarmente brillante potrebbe immergere il territorio in una luce fioca"
        ]
    },
    {
        title: "Oscurita'",
        icon: "worried-eyes",
        subtitle: "Pesantemente oscurato",
        description: "L'oscurità crea un'area fortemente oscurata",
        reference: "MdG, pg. 183.",
        bullets: [
            "Crea un'area <b>fortemente oscurata</b>",
            "I personaggi affrontano l'oscurità all'aperto di notte (anche nella maggior parte delle notti di luna), all'interno dei confini di un sotterraneo non illuminato o di una volta sotterranea, o in un'area di oscurità magica"
        ]
    },
    {
        title: "Vista cieca",
        icon: "one-eyed",
        subtitle: "Percepire senza vedere",
        description: "Percepire l'ambiente circostante senza affidarsi alla vista, entro un certo raggio.",
        reference: "MdG, pg. 183.",
        bullets: [
            "Le creature prive di occhi, come i trasudatori, e le creature dotate di ecolocalizzazione o di sensi acuti, come i pipistrelli e i veri draghi, hanno questo senso."
        ]
    },
    {
        title: "Darkvision",
        icon: "semi-closed-eye",
        subtitle: "Limited vision in darkness",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "MdG, pgs. 183-184.",
        bullets: [
            "Entro un determinato raggio d'azione, una creatura con scurovisione può <b>vedere nell'oscurità come se l'oscurità fosse una luce fioca</b>, quindi le aree di oscurità sono solo leggermente oscurate per quanto riguarda quella creatura",
            "Tuttavia, la creatura non è in grado di distinguere i colori nell'oscurità, ma solo le sfumature di grigio",
            "Molte creature nei mondi di D&D, specialmente quelle che abitano nel sottosuolo, hanno la scurovisione"
        ]
    },
    {
        title: "Vista pura",
        icon: "eye-shield",
        subtitle: "Vedere nell'oscurita'",
        description: "Una creatura con vista pura può vedere ogni cosa nella sua vera forma, indipendentemente dall'ambiente.",
        reference: "MdG, pg. 184.",
        bullets: [
            "Una creatura con vista pura può, entro un raggio specifico, vedere nell'oscurità normale e magica, vedere creature e oggetti invisibili, rilevare automaticamente le illusioni visive e riuscire nei tiri salvezza contro di esse, e percepire la forma originale di un mutaforma o di una creatura trasformata dalla magia",
            "Inoltre, la creatura può vedere nel Piano Etereo"
        ]
    },
    {
        title: "Mezza copertura",
        icon: "broken-shield",
        subtitle: "Muro basso, mobili, creature",
        description: "Un bersaglio ha metà copertura se un ostacolo blocca almeno metà del suo corpo.",
        reference: "MdG, pg. 196.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend",
            "Un bersaglio con mezza copertura ha un <b>+2 bonus alla CA e ai tiri salvezza di Destrezza</b>.",
            "Se un bersaglio si trova dietro più fonti di copertura, si applica solo il grado di copertura più protettivo."
        ]
    },
    {
        title: "Tre quarti di copertura",
        icon: "cracked-shield",
        subtitle: "Saracinesca, feritoria",
        description: "Un bersaglio ha tre quarti di copertura se circa tre quarti di esso sono coperti da un ostacolo.",
        reference: "MdG, pg. 196.",
        bullets: [
            "L'ostacolo può essere una saracinesca, una feritoia o uno spesso tronco d'albero",
            "Un bersaglio con tre quarti di copertura ha un bonus di <b>+5 alla CA e ai tiri salvezza di Destrezza</b>.",
            "Se un bersaglio si trova dietro più fonti di copertura, si applica solo il grado di copertura più protettivo"
        ]
    },
    {
        title: "Copertura totale",
        icon: "shield",
        subtitle: "Completamente nascosto",
        description: "Un bersaglio ha una copertura totale se è completamente nascosto da un ostacolo.",
        reference: "MdG, pg. 196.",
        bullets: [
            "Un bersaglio con copertura totale <b>non può essere bersagliato direttamente</b> da un attacco o da un incantesimo, anche se alcuni incantesimi possono raggiungere tale bersaglio includendolo in un'area di effetto",
            "Se un bersaglio si trova dietro più fonti di copertura, si applica solo il grado di copertura più protettivo"
        ]
    }
]

export default it_data_environment;
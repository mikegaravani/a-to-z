// { letter: '', word: '', definition: '' },

// WHICH GAME ARE WE CHOOSING?
// There are currently 2 GAMES TO CHOOSE FROM
// Set this variable to another number this to change the game
let game = 3;
let listAZ;
let listZA;

// GAME 1: MARCO 03/27/2024 (MM/DD/YYYY)
if (game === 1){

    listAZ = [
        { letter: 'A', word: 'ANTERIORE', definition: 'Altro termine per definire il "futuro composto"' },
        { letter: 'B', word: 'BOMBOLE', definition: 'Fungono da riserve di aria per i sub' },
        { letter: 'C', word: 'CUMINO', definition: 'Una delle spezie del curry' },
        { letter: 'D', word: 'DUECENTO', definition: 'Per gli antichi romani è CC' },
        { letter: 'E', word: 'ESTORIL', definition: 'Località portoghese che ospitava il motomondiale' },
        { letter: 'F', word: 'FONDOTINTA', definition: 'Copre le imperfezioni del viso' },
        { letter: 'G', word: 'GUACCERO', definition: 'Bianca, attrice e conduttrice italiana' },
        { letter: 'H', word: 'HERBST', definition: 'Autunno in tedesco' },
        { letter: 'I', word: 'IRA', definition: 'Un vizio capitale' },
        { letter: 'L', word: 'LIBERO', definition: 'Ruolo calcistico ricoperto da Franco Baresi' },
        { letter: 'M', word: 'MELE', definition: 'Crescono sugli alberi di "Malus Domestica"' },
        { letter: 'N', word: 'NUBIANI', definition: 'Antico popolo dell\'Africa Nord-Orientale' },
        { letter: 'O', word: 'ODEON', definition: 'Piccolo teatro coperto dell\'Antica Grecia' },
        { letter: 'P', word: 'PORTHOS', definition: 'Uno dei tre moschettieri' },
        { letter: 'Q', word: 'QWERTY', definition: 'La tastiera standard inglese' },
        { letter: 'R', word: 'REGINELLE', definition: 'Biscotti palermitani ricoperti di sesamo' },
        { letter: 'S', word: 'STUART', definition: 'Storica famiglia reale scozzese' },
        { letter: 'T', word: 'TANATOFOBICO', definition: 'Teme ossessivamente la morte' },
        { letter: 'U', word: 'URBANISTICA', definition: 'La scienza che studia città' },
        { letter: 'V', word: 'VOGLIA', definition: 'Manca al pigro' },
        { letter: 'Z', word: 'ZAMBIA', definition: 'La nazione africana con Lusaka' },
    ];

    listZA = [
        { letter: 'Z', word: 'ZIBIBBO', definition: 'Un vino dolce' },
        { letter: 'V', word: 'VOLGA', definition: 'Il più lungo fiume europeo' },
        { letter: 'U', word: 'UNSPUNNEN', definition: 'La sua pietra si lancia in un tradizionale gioco svizzero' },
        { letter: 'T', word: 'TORBA', definition: 'Giacimento di resti vegetali non decomposti' },
        { letter: 'S', word: 'SAETTA', definition: 'McQueen, protagonista di "Cars"' },
        { letter: 'R', word: 'RAGNI', definition: 'Nome comune degli araneidi' },
        { letter: 'Q', word: 'QUI', definition: 'Con Quo e Qua' },
        { letter: 'P', word: 'PINGU', definition: 'La più conosciuta opera di Otmar Gutmann' },
        { letter: 'O', word: 'OLIVIERO', definition: 'Il nome del fotografo Toscani' },
        { letter: 'N', word: 'NAVARRA', definition: 'Comunità autonoma del nord della Spagna' },
        { letter: 'M', word: 'MANIERE', definition: 'Quelle buone sono insegnate dal galateo' },
        { letter: 'L', word: 'LINGERIE', definition: 'Biancheria intima femminile' },
        { letter: 'I', word: 'INDEPENDIENTE', definition: 'Blasonato club calcistico Argentino' },
        { letter: 'H', word: 'HONKY', definition: 'Insieme a "tonk" è il nome di un genere musicale' },
        { letter: 'G', word: 'GAELICO', definition: 'Insieme all\'inglese, è la lingua nazionale dell\'Irlanda' },
        { letter: 'F', word: 'FORZA', definition: 'È misurata dallo Newton' },
        { letter: 'E', word: 'ERITREA', definition: 'Asmara è la sua capitale' },
        { letter: 'D', word: 'DEIMOS', definition: 'Un satellite del pianeta Marte' },
        { letter: 'C', word: 'CARLINO', definition: 'Cane di piccola taglia, originario della Cina' },
        { letter: 'B', word: 'BRACARONE', definition: 'Persona sciatta e trasandata' },
        { letter: 'A', word: 'ALASKA', definition: 'Lo stato americano con l\'aurora boreale' },
    ];

}

// GAME 2: ANDREA 02/07/2024 (MM/DD/YYYY)
else if (game === 2){

    listAZ = [
        { letter: 'A', word: 'AEROPORTO', definition: 'Quello di Berna si trova a Belp' },
        { letter: 'B', word: 'BERBERI', definition: 'Popolo autoctono del Maghreb' },
        { letter: 'C', word: 'CELESTI', definition: 'Lo sono i "corpi" come stelle, pianeti e asteroidi' },
        { letter: 'D', word: 'DINGO', definition: 'Cane selvatico tipico dell\'Australia' },
        { letter: 'E', word: 'EVITA', definition: 'Madonna la interpreta in un film musicale del \'96' },
        { letter: 'F', word: 'FRITTATA', definition: 'Se si combina un guaio, la si fa senza uova' },
        { letter: 'G', word: 'GENESIS', definition: 'La band di Peter Gabriel e Phil Collins' },
        { letter: 'H', word: 'HOMBRE', definition: 'Uomo in spagnolo' },
        { letter: 'I', word: 'INN', definition: 'Fiume che attraversa la città di Innsbruck' },
        { letter: 'L', word: 'LOMBARDI', definition: 'Filippo, presidente dell\'HCAP' },
        { letter: 'M', word: 'MERENGUE', definition: 'Danza della Repubblica Dominicana' },
        { letter: 'N', word: 'NEGRAMARO', definition: 'Vitigno salentino a bacca nera' },
        { letter: 'O', word: 'OCCHIO', definition: 'Se esso "non vede, cuore non duole"' },
        { letter: 'P', word: 'POLLINI', definition: 'Granuli prodotti da piante a cui si è allergici' },
        { letter: 'Q', word: 'QUO', definition: 'Segue "Qui Pro" ed indica un malinteso' },
        { letter: 'R', word: 'RETTRICE', definition: 'Luisa Lambertini lo è dell\'USI' },
        { letter: 'S', word: 'SPENGLER', definition: 'Una "coppa" hockeyistica che si tiene a Davos' },
        { letter: 'T', word: 'TRUMAN', definition: 'Il suo "show" è un film con Jim Carrey' },
        { letter: 'U', word: 'UNICITÀ', definition: 'Originalità, singolarità' },
        { letter: 'V', word: 'VELENO', definition: 'Sostanza tossica che può nuocere' },
        { letter: 'Z', word: 'ZUG', definition: 'Treno in tedesco' },
    ];

    listZA = [
        { letter: 'Z', word: 'ZUPPE', definition: 'Lo sono la bouillabaisse e il cacciucco' },
        { letter: 'V', word: 'VASELINA', definition: 'Gelatina lubrificante ottenuta dal petrolio' },
        { letter: 'U', word: 'UTRECHT', definition: 'Una delle principali città olandesi' },
        { letter: 'T', word: 'TEMPO', definition: 'Il significato del prefisso "Crono"' },
        { letter: 'S', word: 'SCULTURA', definition: 'L\'arte del locarnese Remo Rossi' },
        { letter: 'R', word: 'RISPOSTA', definition: 'Si dà a una domanda' },
        { letter: 'Q', word: 'QUAGLIARE', definition: 'Concludersi positivamente, concretizzarsi' },
        { letter: 'P', word: 'PARANORMALE', definition: 'Occulto, spirituale' },
        { letter: 'O', word: 'OBLITERARE', definition: 'Timbrare un biglietto del bus cosicchè non venga riusato' },
        { letter: 'N', word: 'NUNCHAKU', definition: 'L\'arma di Michelangelo delle Tartarughe Ninja' },
        { letter: 'M', word: 'MARINA', definition: 'La Carobbio, consigliera di stato ticinese' },
        { letter: 'L', word: 'LUPUS', definition: 'In una locuzione latina, è "in fabula"' },
        { letter: 'I', word: 'INDIGENO', definition: 'Nativo, autoctono, di un determinato luogo' },
        { letter: 'H', word: 'HAL', definition: 'Il computer "9000" di un film di Kubrick' },
        { letter: 'G', word: 'GESSLER', definition: 'Il leggendario balivo a cui si oppose Guglielmo Tell' },
        { letter: 'F', word: 'FUNGHICIDA', definition: 'Sostanza in grado di estirpare i funghi' },
        { letter: 'E', word: 'ENGADINA', definition: 'La sua nusstorte è una specialità grigionese' },
        { letter: 'D', word: 'DOGO', definition: 'Quello argentino è un cane molossoide' },
        { letter: 'C', word: 'CELSIUS', definition: 'Il "grado" detto anche "centigrado"' },
        { letter: 'B', word: 'BULGARIA', definition: 'La sua capitale è Sofia' },
        { letter: 'A', word: 'ALLUMINIO', definition: 'Elemento chimico dal simbolo AL' },
    ];
}

// GAME 3: SARA 02/06/2024 (MM/DD/YYYY)
// Note: there might be spelling mistakes
else if (game === 3){

    listAZ = [
        { letter: 'A', word: 'AMERIGO', definition: 'Il nome dell\'esploratore vespucci' },
        { letter: 'B', word: 'BOCCAGLIO', definition: 'Si usa insieme alla maschera per fare snorkeling' },
        { letter: 'C', word: 'CHIACCHIERE', definition: 'Piacevoli conversazioni e dolci di carnevale' },
        { letter: 'D', word: 'DELÉMONT', definition: 'Capoluogo del canton Jura' },
        { letter: 'E', word: 'ENTRAMBI', definition: 'Tutti e due' },
        { letter: 'F', word: 'FINANZE', definition: 'Il dipartimento federale di Karin Keller Sutter' },
        { letter: 'G', word: 'GAGARIN', definition: 'Il primo uomo nello spazio' },
        { letter: 'H', word: 'HOT', definition: 'Tra "red" e "chili peppers", gruppo rock' },
        { letter: 'I', word: 'INDIETRO', definition: 'Direzione in cui va un\'auto se si inserisce la marcia R' },
        { letter: 'L', word: 'LEVRIERO', definition: 'Cosí è chiamato il cane greyhound' },
        { letter: 'M', word: 'MANDIBOLA', definition: 'Ospita l\'arcata dei denti inferiore' },
        { letter: 'N', word: 'NEO', definition: 'Lo interpreta Keanu Reeves in "Matrix"' },
        { letter: 'O', word: 'OMOZIGOTI', definition: 'Gemelli aventi lo stesso DNA' },
        { letter: 'P', word: 'PANDORA', definition: 'Il suo vaso cela tutti i mali del mondo' },
        { letter: 'Q', word: 'QUARANTENNI', definition: 'Quest\' anno, lo diventano i nati nel 1984' },
        { letter: 'R', word: 'ROMANOV', definition: 'L\'ultima dinastia imperiale russa' },
        { letter: 'S', word: 'SPAVENTAPASSERI', definition: 'Uno degli amici di Dorothy ne "Il mago di Oz"' },
        { letter: 'T', word: 'TARALLUCCI', definition: 'Insieme al "vino", fanno terminare una lite' },
        { letter: 'U', word: 'URTICANTE', definition: 'Irritante, che provoca prurito' },
        { letter: 'V', word: 'VOODOO', definition: 'Antica religione africana diffusa ai Caraibi' },
        { letter: 'Z', word: 'ZURBRIGGEN', definition: 'Pirmin, campione olimpico di discesa libera' },
    ];

    listZA = [
        { letter: 'Z', word: 'ZUPPA', definition: 'Se non è ciò, è pan bagnato' },
        { letter: 'V', word: 'VEGA', definition: 'Ramon, ex calciatore della nazionale Svizzera' },
        { letter: 'U', word: 'UOMO', definition: 'È "VITRUVIANO" in un disegno di Da Vinci' },
        { letter: 'T', word: 'TORCHIO', definition: 'Macchinario per spremere le olive' },
        { letter: 'S', word: 'STROMBOLI', definition: 'Isola vulcanica poco più a nord della sicilia' },
        { letter: 'R', word: 'RICCIO', definition: 'Ognuno di essi è un capriccio' },
        { letter: 'Q', word: 'QUO', definition: 'Se segue "status", indica lo stato delle cose' },
        { letter: 'P', word: 'PICASSO', definition: 'Del suo periodo rosa ha fatto un\'arte' },
        { letter: 'O', word: 'ODORATO', definition: 'Sinonimo di olfatto' },
        { letter: 'N', word: 'NEONATO', definition: 'Bebè, venuto da poco al mondo' },
        { letter: 'M', word: 'MALESE', definition: 'A Kuala Lumpur è lingua ufficiale' },
        { letter: 'L', word: 'LADRI', definition: 'Insieme alle guardie in un gioco per bambini' },
        { letter: 'I', word: 'INNSBRUCK', definition: 'Città austriaca, capoluogo del Tirolo' },
        { letter: 'H', word: 'HALFPIPE', definition: 'Specialità dello snowboard' },
        { letter: 'G', word: 'GORGONZOLA', definition: 'Formaggio embrionato lombardo' },
        { letter: 'F', word: 'FIORINO', definition: 'Nei Paesi Bassi, prima dell\'Euro' },
        { letter: 'E', word: 'EUREKA', definition: 'Lo esclamö Archimede dopo un\'importante scoperta' },
        { letter: 'D', word: 'DOZZINA', definition: 'Termine che equivale a dodici' },
        { letter: 'C', word: 'COCKTAIL', definition: 'Viene preparato dal mixologist' },
        { letter: 'B', word: 'BEN', definition: 'Il big, simbolo di Londra' },
        { letter: 'A', word: 'AMELIE', definition: 'Il suo "favoloso mondo" è un film del 2001' },
    ];
}
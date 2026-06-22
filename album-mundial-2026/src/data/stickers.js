// ============================================================
// Ãlbum Panini FIFA World Cup 2026 â€” Datos de muestra
// Basado en la estructura oficial del Ã¡lbum (980 figuritas totales)
//
// Estructura real del Ã¡lbum:
//   - 20 figuritas especiales (FWC1â€“FWC20 + logo Panini)
//   - 48 selecciones x 20 figuritas = 960 figuritas
//     Â· [PREFIX]1â€“2   : Badge del equipo (foil)
//     Â· [PREFIX]3â€“12  : Jugadores (base)
//     Â· [PREFIX]13    : Foto del equipo (base)
//     Â· [PREFIX]14â€“20 : Jugadores (base)
//
// Este archivo incluye: figuritas especiales + 8 selecciones completas
// con jugadores reales (160 figuritas de equipos + 9 especiales = 169 total)
// ============================================================

export const stickers = [

  // ============================================================
  // SECCION ESPECIAL â€” FIFA World Cup 2026
  // ============================================================
  { id: 1,   code: "00",    name: "Logo Panini",             section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 2,   code: "FWC1",  name: "Emblema Oficial",         section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 3,   code: "FWC2",  name: "Emblema Oficial",         section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 4,   code: "FWC3",  name: "Mascota Oficial",         section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 5,   code: "FWC4",  name: "Slogan Oficial",          section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 6,   code: "FWC5",  name: "BalÃ³n Oficial",           section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 7,   code: "FWC6",  name: "CanadÃ¡ (sede)",           section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 8,   code: "FWC7",  name: "MÃ©xico (sede)",           section: "Especiales", group: null,      type: "especial", rarity: "foil" },
  { id: 9,   code: "FWC8",  name: "USA (sede)",              section: "Especiales", group: null,      type: "especial", rarity: "foil" },

  // ============================================================
  // GRUPO J â€” ARGENTINA
  // ============================================================
  { id: 10,  code: "ARG1",  name: "Badge Argentina",         section: "Argentina",  group: "Grupo J", type: "badge",    rarity: "foil" },
  { id: 11,  code: "ARG2",  name: "Badge Argentina",         section: "Argentina",  group: "Grupo J", type: "badge",    rarity: "foil" },
  { id: 12,  code: "ARG3",  name: "Emiliano MartÃ­nez",       section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 13,  code: "ARG4",  name: "NicolÃ¡s Tagliafico",      section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 14,  code: "ARG5",  name: "Cristian Romero",         section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 15,  code: "ARG6",  name: "Lisandro MartÃ­nez",       section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 16,  code: "ARG7",  name: "Nahuel Molina",           section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 17,  code: "ARG8",  name: "Rodrigo De Paul",         section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 18,  code: "ARG9",  name: "Leandro Paredes",         section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 19,  code: "ARG10", name: "Enzo FernÃ¡ndez",          section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 20,  code: "ARG11", name: "Alexis Mac Allister",     section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 21,  code: "ARG12", name: "Lautaro MartÃ­nez",        section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 22,  code: "ARG13", name: "Foto equipo Argentina",   section: "Argentina",  group: "Grupo J", type: "foto",     rarity: "base" },
  { id: 23,  code: "ARG14", name: "Lionel Messi",            section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 24,  code: "ARG15", name: "JuliÃ¡n Ãlvarez",          section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 25,  code: "ARG16", name: "Ãngel Di MarÃ­a",          section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 26,  code: "ARG17", name: "Paulo Dybala",            section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 27,  code: "ARG18", name: "GermÃ¡n Pezzella",         section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 28,  code: "ARG19", name: "Marcos AcuÃ±a",            section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },
  { id: 29,  code: "ARG20", name: "Franco Armani",           section: "Argentina",  group: "Grupo J", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO C â€” BRASIL
  // ============================================================
  { id: 30,  code: "BRA1",  name: "Badge Brasil",            section: "Brasil",     group: "Grupo C", type: "badge",    rarity: "foil" },
  { id: 31,  code: "BRA2",  name: "Badge Brasil",            section: "Brasil",     group: "Grupo C", type: "badge",    rarity: "foil" },
  { id: 32,  code: "BRA3",  name: "Alisson Becker",          section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 33,  code: "BRA4",  name: "Ã‰der MilitÃ£o",            section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 34,  code: "BRA5",  name: "Marquinhos",              section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 35,  code: "BRA6",  name: "Gabriel MagalhÃ£es",       section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 36,  code: "BRA7",  name: "Danilo",                  section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 37,  code: "BRA8",  name: "Casemiro",                section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 38,  code: "BRA9",  name: "Bruno GuimarÃ£es",         section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 39,  code: "BRA10", name: "Raphinha",                section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 40,  code: "BRA11", name: "Rodrygo",                 section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 41,  code: "BRA12", name: "Endrick",                 section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 42,  code: "BRA13", name: "Foto equipo Brasil",      section: "Brasil",     group: "Grupo C", type: "foto",     rarity: "base" },
  { id: 43,  code: "BRA14", name: "Vinicius Jr.",            section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 44,  code: "BRA15", name: "Lucas PaquetÃ¡",           section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 45,  code: "BRA16", name: "Gabriel Martinelli",      section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 46,  code: "BRA17", name: "Savinho",                 section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 47,  code: "BRA18", name: "Andreas Pereira",         section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 48,  code: "BRA19", name: "Ã‰der MilitÃ£o",            section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },
  { id: 49,  code: "BRA20", name: "Weverton",                section: "Brasil",     group: "Grupo C", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO I â€” FRANCIA
  // ============================================================
  { id: 50,  code: "FRA1",  name: "Badge Francia",           section: "Francia",    group: "Grupo I", type: "badge",    rarity: "foil" },
  { id: 51,  code: "FRA2",  name: "Badge Francia",           section: "Francia",    group: "Grupo I", type: "badge",    rarity: "foil" },
  { id: 52,  code: "FRA3",  name: "Mike Maignan",            section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 53,  code: "FRA4",  name: "Jules KoundÃ©",            section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 54,  code: "FRA5",  name: "William Saliba",          section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 55,  code: "FRA6",  name: "Ibrahima KonatÃ©",         section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 56,  code: "FRA7",  name: "ThÃ©o HernÃ¡ndez",          section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 57,  code: "FRA8",  name: "AurÃ©lien TchouamÃ©ni",     section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 58,  code: "FRA9",  name: "Adrien Rabiot",           section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 59,  code: "FRA10", name: "Antoine Griezmann",       section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 60,  code: "FRA11", name: "Ousmane DembÃ©lÃ©",         section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 61,  code: "FRA12", name: "Marcus Thuram",           section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 62,  code: "FRA13", name: "Foto equipo Francia",     section: "Francia",    group: "Grupo I", type: "foto",     rarity: "base" },
  { id: 63,  code: "FRA14", name: "Kylian MbappÃ©",           section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 64,  code: "FRA15", name: "Bradley Barcola",         section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 65,  code: "FRA16", name: "Randal Kolo Muani",       section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 66,  code: "FRA17", name: "MattÃ©o Guendouzi",        section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 67,  code: "FRA18", name: "Benjamin Pavard",         section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 68,  code: "FRA19", name: "Eduardo Camavinga",       section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },
  { id: 69,  code: "FRA20", name: "Alphonse Areola",         section: "Francia",    group: "Grupo I", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO H â€” ESPAÃ‘A
  // ============================================================
  { id: 70,  code: "ESP1",  name: "Badge EspaÃ±a",            section: "EspaÃ±a",     group: "Grupo H", type: "badge",    rarity: "foil" },
  { id: 71,  code: "ESP2",  name: "Badge EspaÃ±a",            section: "EspaÃ±a",     group: "Grupo H", type: "badge",    rarity: "foil" },
  { id: 72,  code: "ESP3",  name: "David Raya",              section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 73,  code: "ESP4",  name: "Dani Carvajal",           section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 74,  code: "ESP5",  name: "Aymeric Laporte",         section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 75,  code: "ESP6",  name: "Robin Le Normand",        section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 76,  code: "ESP7",  name: "Alejandro Grimaldo",      section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 77,  code: "ESP8",  name: "Rodri",                   section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 78,  code: "ESP9",  name: "FabiÃ¡n Ruiz",             section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 79,  code: "ESP10", name: "Pedri",                   section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 80,  code: "ESP11", name: "Gavi",                    section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 81,  code: "ESP12", name: "Ãlvaro Morata",           section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 82,  code: "ESP13", name: "Foto equipo EspaÃ±a",      section: "EspaÃ±a",     group: "Grupo H", type: "foto",     rarity: "base" },
  { id: 83,  code: "ESP14", name: "Lamine Yamal",            section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 84,  code: "ESP15", name: "Nico Williams",           section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 85,  code: "ESP16", name: "Dani Olmo",               section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 86,  code: "ESP17", name: "Mikel Merino",            section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 87,  code: "ESP18", name: "Mikel Oyarzabal",         section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 88,  code: "ESP19", name: "Marc Cucurella",          section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },
  { id: 89,  code: "ESP20", name: "Unai SimÃ³n",              section: "EspaÃ±a",     group: "Grupo H", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO L â€” INGLATERRA
  // ============================================================
  { id: 90,  code: "ENG1",  name: "Badge Inglaterra",        section: "Inglaterra", group: "Grupo L", type: "badge",    rarity: "foil" },
  { id: 91,  code: "ENG2",  name: "Badge Inglaterra",        section: "Inglaterra", group: "Grupo L", type: "badge",    rarity: "foil" },
  { id: 92,  code: "ENG3",  name: "Jordan Pickford",         section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 93,  code: "ENG4",  name: "Kyle Walker",             section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 94,  code: "ENG5",  name: "John Stones",             section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 95,  code: "ENG6",  name: "Marc Guehi",              section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 96,  code: "ENG7",  name: "Trent Alexander-Arnold",  section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 97,  code: "ENG8",  name: "Declan Rice",             section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 98,  code: "ENG9",  name: "Kobbie Mainoo",           section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 99,  code: "ENG10", name: "Jude Bellingham",         section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 100, code: "ENG11", name: "Bukayo Saka",             section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 101, code: "ENG12", name: "Harry Kane",              section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 102, code: "ENG13", name: "Foto equipo Inglaterra",  section: "Inglaterra", group: "Grupo L", type: "foto",     rarity: "base" },
  { id: 103, code: "ENG14", name: "Phil Foden",              section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 104, code: "ENG15", name: "Cole Palmer",             section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 105, code: "ENG16", name: "Anthony Gordon",          section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 106, code: "ENG17", name: "Levi Colwill",            section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 107, code: "ENG18", name: "Luke Shaw",               section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 108, code: "ENG19", name: "Eberechi Eze",            section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },
  { id: 109, code: "ENG20", name: "Dean Henderson",          section: "Inglaterra", group: "Grupo L", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO E â€” ALEMANIA
  // ============================================================
  { id: 110, code: "GER1",  name: "Badge Alemania",          section: "Alemania",   group: "Grupo E", type: "badge",    rarity: "foil" },
  { id: 111, code: "GER2",  name: "Badge Alemania",          section: "Alemania",   group: "Grupo E", type: "badge",    rarity: "foil" },
  { id: 112, code: "GER3",  name: "Manuel Neuer",            section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 113, code: "GER4",  name: "Joshua Kimmich",          section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 114, code: "GER5",  name: "Antonio RÃ¼diger",         section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 115, code: "GER6",  name: "Jonathan Tah",            section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 116, code: "GER7",  name: "Maximilian MittelstÃ¤dt",  section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 117, code: "GER8",  name: "Ilkay GÃ¼ndogan",          section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 118, code: "GER9",  name: "Toni Kroos",              section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 119, code: "GER10", name: "Jamal Musiala",           section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 120, code: "GER11", name: "Leroy SanÃ©",              section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 121, code: "GER12", name: "Niclas FÃ¼llkrug",         section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 122, code: "GER13", name: "Foto equipo Alemania",    section: "Alemania",   group: "Grupo E", type: "foto",     rarity: "base" },
  { id: 123, code: "GER14", name: "Florian Wirtz",           section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 124, code: "GER15", name: "Kai Havertz",             section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 125, code: "GER16", name: "Thomas MÃ¼ller",           section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 126, code: "GER17", name: "Serge Gnabry",            section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 127, code: "GER18", name: "David Raum",              section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 128, code: "GER19", name: "Robert Andrich",          section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },
  { id: 129, code: "GER20", name: "Marc-AndrÃ© ter Stegen",   section: "Alemania",   group: "Grupo E", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO K â€” PORTUGAL
  // ============================================================
  { id: 130, code: "POR1",  name: "Badge Portugal",          section: "Portugal",   group: "Grupo K", type: "badge",    rarity: "foil" },
  { id: 131, code: "POR2",  name: "Badge Portugal",          section: "Portugal",   group: "Grupo K", type: "badge",    rarity: "foil" },
  { id: 132, code: "POR3",  name: "Diogo Costa",             section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 133, code: "POR4",  name: "JoÃ£o Cancelo",            section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 134, code: "POR5",  name: "RÃºben Dias",              section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 135, code: "POR6",  name: "Pepe",                    section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 136, code: "POR7",  name: "Nuno Mendes",             section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 137, code: "POR8",  name: "Vitinha",                 section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 138, code: "POR9",  name: "JoÃ£o Palhinha",           section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 139, code: "POR10", name: "Bernardo Silva",          section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 140, code: "POR11", name: "Rafael LeÃ£o",             section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 141, code: "POR12", name: "GonÃ§alo Ramos",           section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 142, code: "POR13", name: "Foto equipo Portugal",    section: "Portugal",   group: "Grupo K", type: "foto",     rarity: "base" },
  { id: 143, code: "POR14", name: "Cristiano Ronaldo",       section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 144, code: "POR15", name: "Bruno Fernandes",         section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 145, code: "POR16", name: "Pedro Neto",              section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 146, code: "POR17", name: "Diogo Dalot",             section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 147, code: "POR18", name: "William Carvalho",        section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 148, code: "POR19", name: "RÃºben Neves",             section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 149, code: "POR20", name: "JosÃ© SÃ¡",                 section: "Portugal",   group: "Grupo K", type: "jugador",  rarity: "base" },

  // ============================================================
  // GRUPO K â€” COLOMBIA
  // ============================================================
  { id: 150, code: "COL1",  name: "Badge Colombia",          section: "Colombia",   group: "Grupo K", type: "badge",    rarity: "foil" },
  { id: 151, code: "COL2",  name: "Badge Colombia",          section: "Colombia",   group: "Grupo K", type: "badge",    rarity: "foil" },
  { id: 152, code: "COL3",  name: "Camilo Vargas",           section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 153, code: "COL4",  name: "Daniel MuÃ±oz",            section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 154, code: "COL5",  name: "DÃ¡vinson SÃ¡nchez",        section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 155, code: "COL6",  name: "Yerry Mina",              section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 156, code: "COL7",  name: "Johan Mojica",            section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 157, code: "COL8",  name: "Matheus Uribe",           section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 158, code: "COL9",  name: "Jefferson Lerma",         section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 159, code: "COL10", name: "Richard RÃ­os",            section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 160, code: "COL11", name: "Luis DÃ­az",               section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 161, code: "COL12", name: "Cucho HernÃ¡ndez",         section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 162, code: "COL13", name: "Foto equipo Colombia",    section: "Colombia",   group: "Grupo K", type: "foto",     rarity: "base" },
  { id: 163, code: "COL14", name: "James RodrÃ­guez",         section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 164, code: "COL15", name: "Jhon CÃ³rdoba",            section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 165, code: "COL16", name: "Rafael Santos BorrÃ©",     section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 166, code: "COL17", name: "Juan Cuadrado",           section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 167, code: "COL18", name: "Carlos Cuesta",           section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 168, code: "COL19", name: "Juan Fernando Quintero",  section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
  { id: 169, code: "COL20", name: "Ãlvaro Montero",          section: "Colombia",   group: "Grupo K", type: "jugador",  rarity: "base" },
];

// ============================================================
// Referencia de los 48 equipos clasificados al Mundial 2026
// (datos para ampliar el Ã¡lbum en el futuro)
//
// Grupo A: Czech Republic, Mexico, South Africa, South Korea
// Grupo B: Bosnia and Herzegovina, Canada, Qatar, Switzerland
// Grupo C: Brazil, Haiti, Morocco, Scotland
// Grupo D: Australia, Paraguay, Turkey, USA
// Grupo E: CuraÃ§ao, Ecuador, Germany, Ivory Coast
// Grupo F: Japan, Netherlands, Sweden, Tunisia
// Grupo G: Belgium, Egypt, Iran, New Zealand
// Grupo H: Cape Verde, Saudi Arabia, Spain, Uruguay
// Grupo I: France, Iraq, Norway, Senegal
// Grupo J: Algeria, Argentina, Austria, Jordan
// Grupo K: Colombia, DR Congo, Portugal, Uzbekistan
// Grupo L: Croatia, England, Ghana, Panama
// ============================================================
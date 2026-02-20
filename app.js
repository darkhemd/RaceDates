const seriesConfig = [
  {
    id: "dtm",
    name: "DTM",
    color: "#e10600",
    watchLinks: [
      { label: "DTM TV", url: "https://tv.dtm.com/" },
      { label: "DTM Livestreams", url: "https://www.dtm.com/de/live" },
      { label: "ProSieben (DE)", url: "https://www.ran.de/sports/motorsport/dtm" }
    ],
    events: [
      { name: "Oschersleben", start: "2026-04-24", end: "2026-04-26", venue: "Deutschland", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Lausitzring", start: "2026-05-22", end: "2026-05-24", venue: "Deutschland", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Zandvoort", start: "2026-06-05", end: "2026-06-07", venue: "Niederlande", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Norisring", start: "2026-07-03", end: "2026-07-05", venue: "Deutschland", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Nürburgring", start: "2026-08-07", end: "2026-08-09", venue: "Deutschland", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Sachsenring", start: "2026-08-21", end: "2026-08-23", venue: "Deutschland", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Red Bull Ring", start: "2026-09-11", end: "2026-09-13", venue: "Osterreich", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" },
      { name: "Hockenheimring", start: "2026-10-02", end: "2026-10-04", venue: "Deutschland", kind: "circuit2race", infoUrl: "https://www.dtm.com/de/events" }
    ]
  },
  {
    id: "imsa",
    name: "IMSA",
    color: "#005eb8",
    watchLinks: [
      { label: "IMSA TV", url: "https://www.imsa.com/tvlive/" },
      { label: "NBC Sports (USA)", url: "https://www.nbcsports.com/motorsports" },
      { label: "IMSA Youtube", url: "https://www.youtube.com/@imsaofficial" },
      { label: "Peacock (USA)", url: "https://www.peacocktv.com/sports/motorsports" }
    ],
    events: [
      { name: "Rolex 24 At Daytona", start: "2026-01-22", end: "2026-01-25", venue: "Daytona", kind: "endurance", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Mobil 1 Twelve Hours Of Sebring", start: "2026-03-18", end: "2026-03-21", venue: "Sebring", kind: "endurance", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Grand Prix Of Long Beach", start: "2026-04-17", end: "2026-04-18", venue: "Long Beach", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Monterey SportsCar Championship", start: "2026-05-01", end: "2026-05-03", venue: "Laguna Seca", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Detroit Grand Prix", start: "2026-05-29", end: "2026-05-30", venue: "Detroit", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Sahlen's Six Hours Of The Glen", start: "2026-06-25", end: "2026-06-28", venue: "Watkins Glen", kind: "endurance", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Chevrolet Grand Prix", start: "2026-07-10", end: "2026-07-12", venue: "Canadian Tire Motorsport Park", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "IMSA SportsCar Weekend", start: "2026-07-31", end: "2026-08-02", venue: "Road America", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Michelin GT Challenge At VIR", start: "2026-08-21", end: "2026-08-23", venue: "VIR", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "TireRack.com Battle On The Bricks", start: "2026-09-18", end: "2026-09-20", venue: "Indianapolis", kind: "weekend", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" },
      { name: "Motul Petit Le Mans", start: "2026-09-30", end: "2026-10-03", venue: "Road Atlanta", kind: "endurance", infoUrl: "https://www.imsa.com/weathertech/weathertech-2026-schedule/" }
    ]
  },
  {
    id: "supercars",
    name: "V8 Supercars",
    color: "#d4a017",
    watchLinks: [
      { label: "Supercars TV Guide", url: "https://www.supercars.com/tv-schedule" },
      { label: "Supercars YouTube", url: "https://www.youtube.com/@SupercarsChampionship" },
      { label: "Kayo Sports (AU)", url: "https://kayosports.com.au/" },
      { label: "Fox Sports AU", url: "https://www.foxsports.com.au/motorsport/supercars" }
    ],
    events: [
      { name: "Sydney 500", start: "2026-02-20", end: "2026-02-22", venue: "Sydney", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Melbourne SuperSprint", start: "2026-03-12", end: "2026-03-15", venue: "Melbourne", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Taupo Super440", start: "2026-04-10", end: "2026-04-12", venue: "Neuseeland", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Christchurch Super440", start: "2026-04-17", end: "2026-04-19", venue: "Neuseeland", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Tasmania Super440", start: "2026-05-08", end: "2026-05-10", venue: "Tasmanien", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Darwin Triple Crown", start: "2026-06-19", end: "2026-06-21", venue: "Darwin", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Townsville 500", start: "2026-07-10", end: "2026-07-12", venue: "Townsville", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Perth Super440", start: "2026-07-24", end: "2026-07-26", venue: "Perth", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Ipswich Super440", start: "2026-08-07", end: "2026-08-09", venue: "Queensland", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "The Bend 500", start: "2026-09-11", end: "2026-09-13", venue: "Tailem Bend", kind: "endurance", infoUrl: "https://www.supercars.com/events" },
      { name: "Bathurst 1000", start: "2026-10-08", end: "2026-10-11", venue: "Mount Panorama", kind: "endurance", infoUrl: "https://www.supercars.com/events" },
      { name: "Gold Coast 500", start: "2026-10-23", end: "2026-10-25", venue: "Gold Coast", kind: "weekend", infoUrl: "https://www.supercars.com/events" },
      { name: "Sandown 500", start: "2026-11-13", end: "2026-11-15", venue: "Sandown", kind: "endurance", infoUrl: "https://www.supercars.com/events" },
      { name: "Adelaide Grand Final", start: "2026-11-26", end: "2026-11-29", venue: "Adelaide", kind: "weekend", infoUrl: "https://www.supercars.com/events" }
    ]
  },
  {
    id: "wec",
    name: "WEC",
    color: "#006241",
    watchLinks: [
      { label: "WEC TV", url: "https://fiawec.tv/" },
      { label: "WEC Where To Watch", url: "https://www.fiawec.com/en/where-to-watch/5634" },
      { label: "Eurosport", url: "https://www.eurosport.de/" }
    ],
    events: [
      { name: "Qatar 1812 km", start: "2026-03-26", end: "2026-03-28", venue: "Lusail", kind: "weekend", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "6 Hours Of Imola", start: "2026-04-17", end: "2026-04-19", venue: "Imola", kind: "weekend", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "6 Hours Of Spa-Francorchamps", start: "2026-05-07", end: "2026-05-09", venue: "Spa", kind: "weekend", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "24 Hours Of Le Mans", start: "2026-06-10", end: "2026-06-14", venue: "Le Mans", kind: "endurance", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "6 Hours Of Sao Paulo", start: "2026-07-10", end: "2026-07-12", venue: "Sao Paulo", kind: "weekend", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "Lone Star Le Mans", start: "2026-09-04", end: "2026-09-06", venue: "Austin", kind: "weekend", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "6 Hours Of Fuji", start: "2026-09-25", end: "2026-09-27", venue: "Fuji", kind: "weekend", infoUrl: "https://www.fiawec.com/en/calendar/80" },
      { name: "Bapco Energies 8 Hours Of Bahrain", start: "2026-11-05", end: "2026-11-07", venue: "Bahrain", kind: "endurance", infoUrl: "https://www.fiawec.com/en/calendar/80" }
    ]
  },
  {
    id: "wrc",
    name: "WRC",
    color: "#111111",
    watchLinks: [
      { label: "Rally.TV", url: "https://www.rally.tv/" },
      { label: "WRC Event Hub", url: "https://www.wrc.com/en/events" },
      { label: "WRC YouTube", url: "https://www.youtube.com/@wrc" }
    ],
    events: [
      { name: "Rallye Monte-Carlo", start: "2026-01-22", end: "2026-01-25", venue: "Monaco/Frankreich", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Sweden", start: "2026-02-12", end: "2026-02-15", venue: "Schweden", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Safari Rally Kenya", start: "2026-03-12", end: "2026-03-15", venue: "Kenia", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Islas Canarias", start: "2026-04-23", end: "2026-04-26", venue: "Spanien", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Portugal", start: "2026-05-07", end: "2026-05-10", venue: "Portugal", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Italia Sardegna", start: "2026-06-04", end: "2026-06-07", venue: "Italien", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Acropolis Rally", start: "2026-06-25", end: "2026-06-28", venue: "Griechenland", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Estonia", start: "2026-07-16", end: "2026-07-19", venue: "Estland", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Secto Rally Finland", start: "2026-07-30", end: "2026-08-02", venue: "Finnland", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Paraguay", start: "2026-08-27", end: "2026-08-30", venue: "Paraguay", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Chile Biobio", start: "2026-09-10", end: "2026-09-13", venue: "Chile", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Central European Rally", start: "2026-10-15", end: "2026-10-18", venue: "Mitteleuropa", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Japan", start: "2026-11-05", end: "2026-11-08", venue: "Japan", kind: "rally", infoUrl: "https://www.wrc.com/en/events" },
      { name: "Rally Saudi Arabia", start: "2026-11-26", end: "2026-11-29", venue: "Saudi-Arabien", kind: "rally", infoUrl: "https://www.wrc.com/en/events" }
    ]
  },
  {
    id: "tcrwt",
    name: "FIA TCR World Tour",
    color: "#ff6b00",
    watchLinks: [
      { label: "TCR TV", url: "https://www.tcr-series.tv/" },
      { label: "World Tour", url: "https://www.fiatcrworldtour.com/" },
      { label: "YouTube", url: "https://www.youtube.com/@tcrtv" }
    ],
    events: [
      { name: "Mexico City", start: "2026-03-13", end: "2026-03-15", venue: "Mexiko", kind: "weekend", infoUrl: "https://www.fiatcrworldtour.com/calendar/" },
      { name: "Vallelunga", start: "2026-05-08", end: "2026-05-10", venue: "Italien", kind: "weekend", infoUrl: "https://www.fiatcrworldtour.com/calendar/" },
      { name: "Spa-Francorchamps", start: "2026-06-19", end: "2026-06-21", venue: "Belgien", kind: "weekend", infoUrl: "https://www.fiatcrworldtour.com/calendar/" },
      { name: "Interlagos", start: "2026-07-17", end: "2026-07-19", venue: "Brasilien", kind: "weekend", infoUrl: "https://www.fiatcrworldtour.com/calendar/" },
      { name: "Inje Speedium", start: "2026-09-04", end: "2026-09-06", venue: "Sudkorea", kind: "weekend", infoUrl: "https://www.fiatcrworldtour.com/calendar/" },
      { name: "Macau Guia", start: "2026-11-12", end: "2026-11-15", venue: "Macau", kind: "weekend", infoUrl: "https://www.fiatcrworldtour.com/calendar/" }
    ]
  },
  {
    id: "tcreurope",
    name: "TCR Europe",
    color: "#a61d24",
    watchLinks: [
      { label: "TCR Europe", url: "https://europe.tcr-series.com/" },
      { label: "TCR TV", url: "https://www.tcr-series.tv/" },
      { label: "YouTube", url: "https://www.youtube.com/@tcrtv" }
    ],
    events: [
      { name: "Portimao", start: "2026-04-17", end: "2026-04-19", venue: "Portugal", kind: "weekend", infoUrl: "https://europe.tcr-series.com/calendar/" },
      { name: "Spa", start: "2026-05-15", end: "2026-05-17", venue: "Belgien", kind: "weekend", infoUrl: "https://europe.tcr-series.com/calendar/" },
      { name: "Hockenheim", start: "2026-06-12", end: "2026-06-14", venue: "Deutschland", kind: "weekend", infoUrl: "https://europe.tcr-series.com/calendar/" },
      { name: "Misano", start: "2026-07-03", end: "2026-07-05", venue: "Italien", kind: "weekend", infoUrl: "https://europe.tcr-series.com/calendar/" },
      { name: "Barcelona", start: "2026-09-18", end: "2026-09-20", venue: "Spanien", kind: "weekend", infoUrl: "https://europe.tcr-series.com/calendar/" },
      { name: "Monza", start: "2026-10-09", end: "2026-10-11", venue: "Italien", kind: "weekend", infoUrl: "https://europe.tcr-series.com/calendar/" }
    ]
  },
  {
    id: "nls",
    name: "NLS",
    color: "#005c3b",
    watchLinks: [
      { label: "NLS Live", url: "https://www.nls.tv/" },
      { label: "NLS Website", url: "https://www.nuerburgring-langstrecken-serie.de/" },
      { label: "YouTube", url: "https://www.youtube.com/@VLNOFFICIAL" }
    ],
    events: [
      { name: "NLS 1", start: "2026-03-21", end: "2026-03-22", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "NLS 2", start: "2026-04-11", end: "2026-04-12", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "24h Qualifiers", start: "2026-05-16", end: "2026-05-17", venue: "Nürburgring", kind: "endurance", infoUrl: "https://www.24h-rennen.de/qualifiers/" },
      { name: "NLS 3", start: "2026-05-30", end: "2026-05-31", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "24h Rennen Nürburgring", start: "2026-06-18", end: "2026-06-21", venue: "Nürburgring", kind: "endurance", infoUrl: "https://www.24h-rennen.de/" },
      { name: "NLS 4", start: "2026-07-04", end: "2026-07-05", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "NLS 5", start: "2026-08-29", end: "2026-08-30", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "NLS 6", start: "2026-09-26", end: "2026-09-27", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "NLS 7", start: "2026-10-17", end: "2026-10-18", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" },
      { name: "NLS 8", start: "2026-11-07", end: "2026-11-08", venue: "Nürburgring", kind: "weekend", infoUrl: "https://www.nuerburgring-langstrecken-serie.de/rennen/" }
    ]
  },
  {
    id: "elms",
    name: "ELMS",
    color: "#1d4ed8",
    watchLinks: [
      { label: "ELMS Live", url: "https://www.europeanlemansseries.com/en/live" },
      { label: "ELMS Website", url: "https://www.europeanlemansseries.com/" },
      { label: "YouTube", url: "https://www.youtube.com/@LeMansSeriesOfficial" }
    ],
    events: [
      { name: "4 Hours Of Barcelona", start: "2026-04-03", end: "2026-04-05", venue: "Barcelona", kind: "endurance", infoUrl: "https://www.europeanlemansseries.com/en/calendar" },
      { name: "4 Hours Of Le Castellet", start: "2026-05-01", end: "2026-05-03", venue: "Le Castellet", kind: "endurance", infoUrl: "https://www.europeanlemansseries.com/en/calendar" },
      { name: "4 Hours Of Imola", start: "2026-07-03", end: "2026-07-05", venue: "Imola", kind: "endurance", infoUrl: "https://www.europeanlemansseries.com/en/calendar" },
      { name: "4 Hours Of Spa", start: "2026-08-21", end: "2026-08-23", venue: "Spa", kind: "endurance", infoUrl: "https://www.europeanlemansseries.com/en/calendar" },
      { name: "4 Hours Of Silverstone", start: "2026-09-18", end: "2026-09-20", venue: "Silverstone", kind: "endurance", infoUrl: "https://www.europeanlemansseries.com/en/calendar" },
      { name: "4 Hours Of Portimao", start: "2026-10-16", end: "2026-10-18", venue: "Portimao", kind: "endurance", infoUrl: "https://www.europeanlemansseries.com/en/calendar" }
    ]
  }
];

const sessionTimeByEvent = {
  dtm: {
    Oschersleben: { Training: "11:05", Qualifying: "09:20", "Rennen 1": "13:30", "Rennen 2": "13:30" },
    Lausitzring: { Training: "10:55", Qualifying: "09:15", "Rennen 1": "13:30", "Rennen 2": "13:30" },
    Zandvoort: { Training: "11:15", Qualifying: "09:35", "Rennen 1": "13:35", "Rennen 2": "13:35" },
    Norisring: { Training: "10:45", Qualifying: "09:10", "Rennen 1": "13:10", "Rennen 2": "13:10" },
    Nürburgring: { Training: "11:10", Qualifying: "09:25", "Rennen 1": "13:30", "Rennen 2": "13:30" },
    Sachsenring: { Training: "10:50", Qualifying: "09:05", "Rennen 1": "13:00", "Rennen 2": "13:00" },
    "Red Bull Ring": { Training: "11:20", Qualifying: "09:40", "Rennen 1": "13:35", "Rennen 2": "13:35" },
    Hockenheimring: { Training: "11:00", Qualifying: "09:20", "Rennen 1": "13:30", "Rennen 2": "13:30" }
  },
  imsa: {
    "Rolex 24 At Daytona": { Training: "11:20", Qualifying: "15:35", Rennen: "13:40" },
    "Mobil 1 Twelve Hours Of Sebring": { Training: "10:05", Qualifying: "16:25", Rennen: "10:10" },
    "Grand Prix Of Long Beach": { Training: "08:00", Qualifying: "17:05", Rennen: "14:05" },
    "Monterey SportsCar Championship": { Training: "09:20", Qualifying: "15:20", Rennen: "12:10" },
    "Detroit Grand Prix": { Training: "08:30", Qualifying: "16:20", Rennen: "15:30" },
    "Sahlen's Six Hours Of The Glen": { Training: "10:15", Qualifying: "15:25", Rennen: "12:10" },
    "Chevrolet Grand Prix": { Training: "09:40", Qualifying: "17:15", Rennen: "14:05" },
    "IMSA SportsCar Weekend": { Training: "10:00", Qualifying: "14:45", Rennen: "13:10" },
    "Michelin GT Challenge At VIR": { Training: "09:30", Qualifying: "16:00", Rennen: "14:00" },
    "TireRack.com Battle On The Bricks": { Training: "10:20", Qualifying: "16:10", Rennen: "13:40" },
    "Motul Petit Le Mans": { Training: "11:30", Qualifying: "17:20", Rennen: "12:10" }
  },
  supercars: {
    "Sydney 500": { Training: "10:10", Qualifying: "12:45", Rennen: "15:20" },
    "Melbourne SuperSprint": { Training: "09:40", Qualifying: "11:55", Rennen: "14:35" },
    "Taupo Super440": { Training: "10:20", Qualifying: "12:30", Rennen: "15:10" },
    "Christchurch Super440": { Training: "10:25", Qualifying: "12:40", Rennen: "15:15" },
    "Tasmania Super440": { Training: "10:00", Qualifying: "12:10", Rennen: "14:55" },
    "Darwin Triple Crown": { Training: "09:35", Qualifying: "11:45", Rennen: "14:10" },
    "Townsville 500": { Training: "09:50", Qualifying: "12:20", Rennen: "14:50" },
    "Perth Super440": { Training: "10:15", Qualifying: "12:35", Rennen: "15:05" },
    "Ipswich Super440": { Training: "10:05", Qualifying: "12:25", Rennen: "15:00" },
    "The Bend 500": { Training: "09:45", Qualifying: "12:00", Rennen: "13:40" },
    "Bathurst 1000": { Training: "10:05", Qualifying: "12:15", Rennen: "11:15" },
    "Gold Coast 500": { Training: "09:55", Qualifying: "12:05", Rennen: "14:20" },
    "Sandown 500": { Training: "10:10", Qualifying: "12:20", Rennen: "13:50" },
    "Adelaide Grand Final": { Training: "09:45", Qualifying: "11:40", Rennen: "14:10" }
  },
  wec: {
    "Qatar 1812 km": { Training: "14:30", Qualifying: "18:00", Rennen: "12:00" },
    "6 Hours Of Imola": { Training: "11:45", Qualifying: "15:10", Rennen: "13:00" },
    "6 Hours Of Spa-Francorchamps": { Training: "11:30", Qualifying: "14:40", Rennen: "13:00" },
    "24 Hours Of Le Mans": { Training: "14:00", Qualifying: "20:00", Rennen: "16:00" },
    "6 Hours Of Sao Paulo": { Training: "10:20", Qualifying: "14:20", Rennen: "11:30" },
    "Lone Star Le Mans": { Training: "11:00", Qualifying: "17:00", Rennen: "13:00" },
    "6 Hours Of Fuji": { Training: "10:10", Qualifying: "14:00", Rennen: "11:00" },
    "Bapco Energies 8 Hours Of Bahrain": { Training: "15:30", Qualifying: "18:00", Rennen: "14:00" }
  },
  wrc: {
    "Rallye Monte-Carlo": { "Shakedown/Training": "09:01", "Qualifying Stage": "13:05", Rallye: "08:15" },
    "Rally Sweden": { "Shakedown/Training": "09:01", "Qualifying Stage": "12:30", Rallye: "08:00" },
    "Safari Rally Kenya": { "Shakedown/Training": "08:31", "Qualifying Stage": "11:45", Rallye: "07:05" },
    "Rally Islas Canarias": { "Shakedown/Training": "09:00", "Qualifying Stage": "12:40", Rallye: "08:20" },
    "Rally Portugal": { "Shakedown/Training": "09:01", "Qualifying Stage": "12:45", Rallye: "08:05" },
    "Rally Italia Sardegna": { "Shakedown/Training": "08:45", "Qualifying Stage": "12:15", Rallye: "08:30" },
    "Acropolis Rally": { "Shakedown/Training": "08:40", "Qualifying Stage": "12:20", Rallye: "08:00" },
    "Rally Estonia": { "Shakedown/Training": "09:01", "Qualifying Stage": "12:30", Rallye: "08:10" },
    "Secto Rally Finland": { "Shakedown/Training": "09:01", "Qualifying Stage": "12:45", Rallye: "08:00" },
    "Rally Paraguay": { "Shakedown/Training": "08:50", "Qualifying Stage": "12:00", Rallye: "07:30" },
    "Rally Chile Biobio": { "Shakedown/Training": "08:40", "Qualifying Stage": "11:50", Rallye: "07:45" },
    "Central European Rally": { "Shakedown/Training": "09:10", "Qualifying Stage": "13:00", Rallye: "08:20" },
    "Rally Japan": { "Shakedown/Training": "09:01", "Qualifying Stage": "12:15", Rallye: "08:00" },
    "Rally Saudi Arabia": { "Shakedown/Training": "09:15", "Qualifying Stage": "12:10", Rallye: "08:10" }
  },
  tcrwt: {
    "Mexico City": { Training: "09:30", Qualifying: "12:20", Rennen: "15:10" },
    Vallelunga: { Training: "10:10", Qualifying: "12:35", Rennen: "14:45" },
    "Spa-Francorchamps": { Training: "10:00", Qualifying: "12:10", Rennen: "15:20" },
    Interlagos: { Training: "09:40", Qualifying: "12:05", Rennen: "14:35" },
    "Inje Speedium": { Training: "10:20", Qualifying: "12:40", Rennen: "15:00" },
    "Macau Guia": { Training: "08:30", Qualifying: "11:10", Rennen: "14:10" }
  },
  tcreurope: {
    Portimao: { Training: "10:05", Qualifying: "12:30", Rennen: "15:10" },
    Spa: { Training: "10:25", Qualifying: "12:40", Rennen: "15:20" },
    Hockenheim: { Training: "10:00", Qualifying: "12:15", Rennen: "14:50" },
    Misano: { Training: "10:15", Qualifying: "12:35", Rennen: "15:05" },
    Barcelona: { Training: "10:20", Qualifying: "12:20", Rennen: "14:45" },
    Monza: { Training: "10:10", Qualifying: "12:25", Rennen: "14:55" }
  },
  nls: {
    "NLS 1": { Training: "08:30", Qualifying: "09:50", Rennen: "12:00" },
    "NLS 2": { Training: "08:30", Qualifying: "09:50", Rennen: "12:00" },
    "24h Qualifiers": { Training: "08:30", Qualifying: "09:30", "Qualifying Rennen": "13:00" },
    "NLS 3": { Training: "08:30", Qualifying: "09:45", Rennen: "12:00" },
    "24h Rennen Nürburgring": { Training: "13:00", Qualifying: "20:00", Rennen: "16:00" },
    "NLS 4": { Training: "08:30", Qualifying: "09:45", Rennen: "12:00" },
    "NLS 5": { Training: "08:30", Qualifying: "09:50", Rennen: "12:00" },
    "NLS 6": { Training: "08:30", Qualifying: "09:50", Rennen: "12:00" },
    "NLS 7": { Training: "08:30", Qualifying: "09:45", Rennen: "12:00" },
    "NLS 8": { Training: "08:30", Qualifying: "09:45", Rennen: "12:00" }
  },
  elms: {
    "4 Hours Of Barcelona": { Training: "10:00", Qualifying: "13:05", Rennen: "11:30" },
    "4 Hours Of Le Castellet": { Training: "10:10", Qualifying: "13:20", Rennen: "11:30" },
    "4 Hours Of Imola": { Training: "10:20", Qualifying: "13:15", Rennen: "11:30" },
    "4 Hours Of Spa": { Training: "10:00", Qualifying: "13:00", Rennen: "11:30" },
    "4 Hours Of Silverstone": { Training: "10:05", Qualifying: "13:10", Rennen: "11:30" },
    "4 Hours Of Portimao": { Training: "10:15", Qualifying: "13:20", Rennen: "11:30" }
  }
};

const raceLengthByEvent = {
  nls: {
    "NLS 1": "4 Stunden",
    "NLS 2": "4 Stunden",
    "24h Qualifiers": "6 Stunden",
    "NLS 3": "4 Stunden",
    "24h Rennen Nürburgring": "24 Stunden",
    "NLS 4": "4 Stunden",
    "NLS 5": "4 Stunden",
    "NLS 6": "4 Stunden",
    "NLS 7": "4 Stunden",
    "NLS 8": "4 Stunden"
  }
};

const filterContainer = document.getElementById("series-filters");
const sessionFilterContainer = document.getElementById("session-filters");
const currentList = document.getElementById("current-list");
const upcomingList = document.getElementById("upcoming-list");
const loadMoreBtn = document.getElementById("load-more-btn");
const todayLabel = document.getElementById("today-label");

const today = new Date();
const todayIso = toIsoDate(today);
let activeSeries = new Set(seriesConfig.map((entry) => entry.id));
const sessionFilterConfig = [
  { id: "training", label: "Training" },
  { id: "qualifying", label: "Qualifying" },
  { id: "race", label: "Rennen" }
];
let activeSessionTypes = new Set(sessionFilterConfig.map((entry) => entry.id));
const initialUpcomingCount = 30;
const loadMoreStep = 30;
let upcomingVisibleCount = initialUpcomingCount;

todayLabel.textContent = `Heute: ${formatDate(todayIso)}`;

const seriesTimeZones = {
  dtm: "Europe/Berlin",
  imsa: "America/New_York",
  supercars: "Australia/Sydney",
  wec: "Europe/Paris",
  wrc: "Europe/Paris",
  tcrwt: "Europe/Paris",
  tcreurope: "Europe/Berlin",
  nls: "Europe/Berlin",
  elms: "Europe/Paris"
};

const eventTimeZoneOverrides = {
  imsa: {
    "Grand Prix Of Long Beach": "America/Los_Angeles",
    "Monterey SportsCar Championship": "America/Los_Angeles",
    "Chevrolet Grand Prix": "America/Toronto",
    "IMSA SportsCar Weekend": "America/Chicago"
  },
  supercars: {
    "Taupo Super440": "Pacific/Auckland",
    "Christchurch Super440": "Pacific/Auckland",
    "Tasmania Super440": "Australia/Hobart",
    "Darwin Triple Crown": "Australia/Darwin",
    "Townsville 500": "Australia/Brisbane",
    "Perth Super440": "Australia/Perth",
    "Ipswich Super440": "Australia/Brisbane",
    "The Bend 500": "Australia/Adelaide",
    "Gold Coast 500": "Australia/Brisbane",
    "Adelaide Grand Final": "Australia/Adelaide"
  },
  wec: {
    "Qatar 1812 km": "Asia/Qatar",
    "6 Hours Of Imola": "Europe/Rome",
    "6 Hours Of Spa-Francorchamps": "Europe/Brussels",
    "6 Hours Of Sao Paulo": "America/Sao_Paulo",
    "Lone Star Le Mans": "America/Chicago",
    "6 Hours Of Fuji": "Asia/Tokyo",
    "Bapco Energies 8 Hours Of Bahrain": "Asia/Bahrain"
  },
  wrc: {
    "Rallye Monte-Carlo": "Europe/Paris",
    "Rally Sweden": "Europe/Stockholm",
    "Safari Rally Kenya": "Africa/Nairobi",
    "Rally Islas Canarias": "Atlantic/Canary",
    "Rally Portugal": "Europe/Lisbon",
    "Rally Italia Sardegna": "Europe/Rome",
    "Acropolis Rally": "Europe/Athens",
    "Rally Estonia": "Europe/Tallinn",
    "Secto Rally Finland": "Europe/Helsinki",
    "Rally Paraguay": "America/Asuncion",
    "Rally Chile Biobio": "America/Santiago",
    "Central European Rally": "Europe/Berlin",
    "Rally Japan": "Asia/Tokyo",
    "Rally Saudi Arabia": "Asia/Riyadh"
  },
  tcrwt: {
    "Mexico City": "America/Mexico_City",
    Vallelunga: "Europe/Rome",
    "Spa-Francorchamps": "Europe/Brussels",
    Interlagos: "America/Sao_Paulo",
    "Inje Speedium": "Asia/Seoul",
    "Macau Guia": "Asia/Macau"
  },
  tcreurope: {
    Portimao: "Europe/Lisbon",
    Spa: "Europe/Brussels",
    Hockenheim: "Europe/Berlin",
    Misano: "Europe/Rome",
    Barcelona: "Europe/Madrid",
    Monza: "Europe/Rome"
  },
  elms: {
    "4 Hours Of Barcelona": "Europe/Madrid",
    "4 Hours Of Le Castellet": "Europe/Paris",
    "4 Hours Of Imola": "Europe/Rome",
    "4 Hours Of Spa": "Europe/Brussels",
    "4 Hours Of Silverstone": "Europe/London",
    "4 Hours Of Portimao": "Europe/Lisbon"
  }
};

function getEventTimeZone(seriesId, eventName) {
  return eventTimeZoneOverrides[seriesId]?.[eventName] || seriesTimeZones[seriesId] || "UTC";
}

function getTimeZoneParts(date, timeZone) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  const parts = formatter.formatToParts(date);
  const values = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour: Number(values.hour),
    minute: Number(values.minute)
  };
}

function getDateFromTimeZone(isoDate, hhmm, timeZone) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const [hour, minute] = hhmm.split(":").map(Number);
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute);
  const zonedParts = getTimeZoneParts(new Date(utcGuess), timeZone);
  const zonedAsUtc = Date.UTC(
    zonedParts.year,
    zonedParts.month - 1,
    zonedParts.day,
    zonedParts.hour,
    zonedParts.minute
  );
  return new Date(utcGuess - (zonedAsUtc - utcGuess));
}

function formatSessionTimeForUser(isoDate, localTime, timeZone) {
  if (!localTime || localTime === "TBA") {
    return "TBA";
  }

  if (!/^\d{2}:\d{2}$/.test(localTime)) {
    return localTime;
  }

  try {
    const sessionDate = getDateFromTimeZone(isoDate, localTime, timeZone);
    return sessionDate.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return localTime;
  }
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00`);
  date.setDate(date.getDate() + days);
  return toIsoDate(date);
}

function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function getSessionTime(seriesId, eventName, sessionTitle) {
  return sessionTimeByEvent[seriesId]?.[eventName]?.[sessionTitle] || "TBA";
}

function getSessionType(sessionTitle) {
  const title = sessionTitle.toLowerCase();
  if (title.includes("qualifying rennen")) {
    return "race";
  }
  if (title.includes("qualifying")) {
    return "qualifying";
  }
  if (title.includes("rennen") || title.includes("rallye")) {
    return "race";
  }
  return "training";
}

function parseRaceLengthFromName(eventName) {
  const hourMatch = eventName.match(/(\d+)\s*(hours?|h)\b/i);
  if (hourMatch) {
    return `${hourMatch[1]} Stunden`;
  }

  const wordHourMatch = eventName.match(/\b(four|six|eight|twelve)\s+hours?\b/i);
  if (wordHourMatch) {
    const hourWords = { four: 4, six: 6, eight: 8, twelve: 12 };
    return `${hourWords[wordHourMatch[1].toLowerCase()]} Stunden`;
  }

  const kmMatch = eventName.match(/(\d{3,4})\s*km\b/i);
  if (kmMatch) {
    return `${kmMatch[1]} km`;
  }

  return "";
}

function getRaceLength(seriesId, eventName, sessionTitle, eventKind) {
  if (getSessionType(sessionTitle) !== "race") {
    return "";
  }

  const configuredLength = raceLengthByEvent[seriesId]?.[eventName];
  if (configuredLength) {
    return configuredLength;
  }

  const parsedLength = parseRaceLengthFromName(eventName);
  if (parsedLength) {
    return parsedLength;
  }

  if (eventKind === "circuit2race") {
    return "ca. 55 Minuten";
  }

  if (eventKind === "rally") {
    return "mehrere Wertungsprüfungen";
  }

  return "TBA";
}

function buildSessions(event, seriesId) {
  if (event.name === "24h Qualifiers") {
    return [
      { title: "Training", date: event.start, time: getSessionTime(seriesId, event.name, "Training") },
      { title: "Qualifying", date: addDays(event.start, 1), time: getSessionTime(seriesId, event.name, "Qualifying") },
      { title: "Qualifying Rennen", date: event.end, time: getSessionTime(seriesId, event.name, "Qualifying Rennen") }
    ];
  }

  if (event.kind === "circuit2race") {
    return [
      { title: "Training", date: event.start, time: getSessionTime(seriesId, event.name, "Training") },
      { title: "Qualifying", date: addDays(event.start, 1), time: getSessionTime(seriesId, event.name, "Qualifying") },
      { title: "Rennen 1", date: addDays(event.start, 1), time: getSessionTime(seriesId, event.name, "Rennen 1") },
      { title: "Rennen 2", date: event.end, time: getSessionTime(seriesId, event.name, "Rennen 2") }
    ];
  }

  if (event.kind === "rally") {
    return [
      { title: "Shakedown/Training", date: event.start, time: getSessionTime(seriesId, event.name, "Shakedown/Training") },
      { title: "Qualifying Stage", date: event.start, time: getSessionTime(seriesId, event.name, "Qualifying Stage") },
      { title: "Rallye", date: event.end, time: getSessionTime(seriesId, event.name, "Rallye") }
    ];
  }

  return [
    { title: "Training", date: event.start, time: getSessionTime(seriesId, event.name, "Training") },
    { title: "Qualifying", date: addDays(event.start, 1), time: getSessionTime(seriesId, event.name, "Qualifying") },
    { title: "Rennen", date: event.end, time: getSessionTime(seriesId, event.name, "Rennen") }
  ];
}

function flattenSessions() {
  const sessions = [];

  for (const series of seriesConfig) {
    if (!activeSeries.has(series.id)) {
      continue;
    }

    for (const event of series.events) {
      const eventSessions = buildSessions(event, series.id);
      const isLiveEvent = todayIso >= event.start && todayIso <= event.end;

      for (const session of eventSessions) {
        const sessionType = getSessionType(session.title);
        sessions.push({
          seriesId: series.id,
          seriesName: series.name,
          color: series.color,
          eventName: event.name,
          venue: event.venue,
          sessionTitle: session.title,
          sessionType,
          sessionDate: session.date,
          sessionTime: formatSessionTimeForUser(
            session.date,
            session.time,
            getEventTimeZone(series.id, event.name)
          ),
          sessionTimeLocal: session.time,
          raceLength: getRaceLength(series.id, event.name, session.title, event.kind),
          eventStart: event.start,
          eventEnd: event.end,
          isLiveEvent,
          infoUrl: event.infoUrl,
          watchLinks: series.watchLinks
        });
      }
    }
  }

  return sessions.sort((a, b) => {
    if (a.sessionDate !== b.sessionDate) {
      return a.sessionDate.localeCompare(b.sessionDate);
    }
    return a.sessionTimeLocal.localeCompare(b.sessionTimeLocal);
  });
}

function cardTemplate(item) {
  const watchLinks = item.watchLinks
    .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");

  return `
    <article class="card">
      <div class="badge" style="background:${item.color}">${item.seriesName}</div>
      <h3>${item.eventName}</h3>
      <p class="meta">${item.sessionTitle} • ${formatDate(item.sessionDate)} • ${item.sessionTime} Uhr (deine Zeit)${item.raceLength ? ` • Rennlänge: ${item.raceLength}` : ""} • ${item.venue}</p>
      <p class="meta">Event: ${formatDate(item.eventStart)} bis ${formatDate(item.eventEnd)}</p>
      <div class="links">
        <a href="${item.infoUrl}" target="_blank" rel="noreferrer">Event-Infos</a>
        ${watchLinks}
      </div>
    </article>
  `;
}

function render() {
  const allSessions = flattenSessions();
  const filteredSessions = allSessions.filter((entry) => activeSessionTypes.has(entry.sessionType));
  const liveOrToday = filteredSessions.filter(
    (entry) => entry.isLiveEvent || entry.sessionDate === todayIso
  );
  const allUpcoming = filteredSessions.filter((entry) => entry.sessionDate >= todayIso);
  const upcoming = allUpcoming.slice(0, upcomingVisibleCount);

  currentList.innerHTML = liveOrToday.length
    ? liveOrToday.map(cardTemplate).join("")
    : `<p class="empty">Heute läuft keine Session. Die nächsten Termine siehst du unten.</p>`;

  upcomingList.innerHTML = upcoming.length
    ? upcoming.map(cardTemplate).join("")
    : `<p class="empty">Keine zukünftigen Termine in den ausgewählten Serien gefunden.</p>`;

  const hasMoreUpcoming = allUpcoming.length > upcomingVisibleCount;
  loadMoreBtn.style.display = hasMoreUpcoming ? "inline-block" : "none";
}

function renderFilters() {
  filterContainer.innerHTML = "";

  for (const series of seriesConfig) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter active";
    button.style.borderColor = series.color;
    button.textContent = series.name;
    button.addEventListener("click", () => {
      if (activeSeries.has(series.id)) {
        activeSeries.delete(series.id);
        button.classList.remove("active");
      } else {
        activeSeries.add(series.id);
        button.classList.add("active");
      }
      upcomingVisibleCount = initialUpcomingCount;
      render();
    });
    filterContainer.appendChild(button);
  }
}

function renderSessionFilters() {
  sessionFilterContainer.innerHTML = "";

  for (const sessionType of sessionFilterConfig) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter session-filter active";
    button.textContent = sessionType.label;
    button.addEventListener("click", () => {
      if (activeSessionTypes.has(sessionType.id)) {
        activeSessionTypes.delete(sessionType.id);
        button.classList.remove("active");
      } else {
        activeSessionTypes.add(sessionType.id);
        button.classList.add("active");
      }
      upcomingVisibleCount = initialUpcomingCount;
      render();
    });
    sessionFilterContainer.appendChild(button);
  }
}

loadMoreBtn.addEventListener("click", () => {
  upcomingVisibleCount += loadMoreStep;
  render();
});

renderFilters();
renderSessionFilters();
render();

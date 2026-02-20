# Motorsport Kalender Webseite

Statische Webseite zur Anzeige von Motorsport-Terminen abhängig vom aktuellen Datum.

Unterstützte Serien:
- DTM
- IMSA
- V8 Supercars
- WEC
- WRC
- FIA TCR World Tour
- TCR Europe
- NLS
- ELMS

## Funktionen

- Anzeige von `Training`, `Qualifying` und `Rennen` (inkl. Uhrzeit je Session)
- Bereich `Aktuell / Als Nächstes`
- Bereich `Kommende Sessions`
- Filter nach Serie
- Filter nach Session-Typ (z. B. nur Rennen)
- Direkte Links zu Event-Infos und Übertragungsseiten
- Responsive Layout für Desktop und Mobile

## Projektstruktur

- `index.html`: Seitenstruktur und Container für Filter/Listen
- `styles.css`: Styling und responsive Darstellung
- `app.js`: Kalenderdaten, Sessionzeiten, Filterlogik und Rendering

## Starten

Da es eine statische Seite ist, reicht ein lokaler Webserver:

```bash
python3 -m http.server 8080
```

Dann im Browser öffnen:

`http://localhost:8080`

Alternativ kannst du `index.html` direkt im Browser öffnen.

## Daten anpassen

Alle Daten liegen in `app.js`:

- Serien + Events: `seriesConfig`
- Event-spezifische Session-Zeiten: `sessionTimeByEvent`

Wichtig:
- Der `event.name` in `seriesConfig` muss exakt zum Key im jeweiligen Bereich von `sessionTimeByEvent` passen.
- Wenn keine Zeit gefunden wird, wird `TBA` angezeigt.

## Hinweise

- Datumslogik basiert auf dem aktuellen Browser-Datum.
- Termine und Uhrzeiten sind lokal im Projekt hinterlegt (keine API-Anbindung).

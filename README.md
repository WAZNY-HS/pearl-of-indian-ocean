# 🌴 Pearl of Indian Ocean – Sri Lanka Tourism Website

A responsive tourism website that showcases Sri Lanka's top destinations, province-by-province travel packages and travel services.

Built as a mini project for **EEI3346 – Web Applications Development** (Bachelor of Software Engineering, The Open University of Sri Lanka), Dec 2021 – Jan 2022. Uploaded to GitHub and polished in Oct 2026.

**Live demo:** _https://wazny-hs.github.io/pearl-of-indian-ocean/_ 

## Pages

| Page | What it does |
| --- | --- |
| Home | Full-screen auto-playing slider of Sri Lankan landscapes |
| Book | Trip request form (destination, group size, arrival and leaving dates) |
| Packages | Nine province packages with highlights, ratings and prices in LKR |
| Services | Accommodation, meals, guides, transport and adventures |
| Places | 21 destinations with hover details |
| Contact | Contact form |

## Tech stack

- HTML5, CSS3 (flexbox, media queries, keyframe animation) and vanilla JavaScript
- [Font Awesome](https://fontawesome.com/) icons and the Nunito font (CDN)
- Mobile-first responsive layout with a collapsible menu

## Run locally

No build step needed. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## Project structure

```
index.html  book.html  packages.html  services.html  places.html  contact.html
css/style.css     styles for every page
js/main.js        menu, search bar, login popup, form handling
images/           destination and slider photos
docs/             original course documentation (PDF)
```

## What I fixed when revisiting the project

- Added the shared header and navigation to every page (originally only the home page had it)
- Rebuilt the home slider so all six slides display correctly
- Made JavaScript safe on every page and removed unused libraries
- Added alt text, lazy loading, page titles and meta descriptions
- Added form validation and a demo confirmation message
- Renamed assets to lowercase, web-safe file names

## Known limitations (roadmap)

- Forms are front-end only: no booking, payment or login backend yet
- Content and prices are sample data
- Photos came from the web as part of the original coursework. Replace or credit them before any commercial use.

## Next: the full app

This site is version 1. The plan is a full Sri Lanka tourist app with interactive maps, a trip planner, user accounts, real bookings and payments, offline mode and English, Sinhala and Tamil support.

## Author

**Shaffron Wazny** – Software Engineering Undergraduate, Sri Lanka

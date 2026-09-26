# Agrkémon

Samostatné Pokémon TCG kolo štěstí inspirované interakcemi z projektu AgrGamba, ale bez jakékoliv závislosti na původním repozitáři.

## Funkce
- obrázkové segmenty kola
- aktuální 2026 Mega Evolution / 30th Celebration pool
- filtry podle edice a typu produktu
- jednotlivé zapínání/vypínání produktů
- možnost přidat vlastní produkt a obrázek
- historie výsledků
- fullscreen a ovládání mezerníkem
- nastavení se ukládá do localStorage
- responzivní design pro desktop/OBS i mobil

## Nasazení
Repo je připravené pro GitHub Pages přes workflow `.github/workflows/deploy.yml`. Po pushi do `main` se statický web publikuje automaticky.

Pozn.: obrázky jsou načítané z veřejných produktových CDN / produktových zdrojů. Pokud některý externí obrázek přestane fungovat, UI má fallback a obrázek lze nahradit v `app.js` nebo přidat vlastní položku přímo přes nastavení.

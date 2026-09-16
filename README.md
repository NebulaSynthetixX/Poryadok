# Poryadok

> порядок — « ordre »

Application web scolaire personnelle qui centralise l'organisation et la révision : un espace pensé pour gérer ses cours, réviser efficacement et retrouver n'importe quelle information en quelques secondes.

Poryadok ne remplace pas un ENT (Pronote, EcoleDirecte...) — pas d'emploi du temps, pas de notes officielles. C'est un espace personnel construit autour de quatre principes : **gestion, tri, apprentissage, rapidité**.

## Fonctionnalités

- **Dashboard** — vue d'accueil agrégeant les échéances proches, les chapitres à réviser et des sessions de révision rapides selon le temps disponible
- **Gestionnaire de cours** — organisation des cours par matière et chapitre, façon gestionnaire de fichiers
- **Flashcards** — révision par répétition espacée avec suivi de maîtrise par notion
- **Quiz** — évaluations liées aux chapitres
- **Calendrier** — suivi des échéances et contrôles
- **Recherche globale** — accès instantané à tout le contenu (raccourci `⌘K` / `Ctrl+K`)

Les fonctionnalités sont pensées pour être connectées entre elles : un contrôle au calendrier renvoie vers son chapitre, ses documents, ses flashcards et son niveau de maîtrise.

## Stack technique

- HTML / CSS / JavaScript vanilla
- Organisation des styles en fichiers séparés (`abstract`, `base`, `components`...)
- Police [Geist](https://vercel.com/font) via Google Fonts, titres en Cinzel Decorative
- Icônes [Tabler](https://tabler.io/icons) via CDN jsDelivr

## Direction artistique

Minimaliste : fond blanc, texte noir, très peu de couleur (un accent bleu utilisé avec parcimonie). Typographie claire, iconographie simple et monochrome.

## Statut du projet

En développement. Approche MVP d'abord (cours, calendrier, flashcards, sessions de révision, progression), puis extensions (quiz, répétition espacée avancée, recherche avancée, statistiques). L'IA n'est intégrée que là où elle apporte une réelle valeur ajoutée, pas par défaut.

**Fait :**
- [x] Dashboard (structure statique)

**En cours / à venir :**
- [ ] Gestionnaire de cours
- [ ] Rendre le dashboard dynamique (données réelles)
- [ ] Flashcards
- [ ] Calendrier
- [ ] Recherche globale
- [ ] Quiz

## Structure du projet

```
public/
  pages/
    cours.html
src/
  assets/
    cours/
    dashboard/
  css/
    abstract/
      var.css
    base/
      responsive/
        coursResponsive.css
        dashboardResponsive.css
      reset.css
    components/
      cours/
        main.css
      dashboard/
        main.css
      sidebar.css
  js/
    dashboard.js
index.html
README.md
```

## Installation

Projet en vanilla HTML/CSS/JS, aucune dépendance à installer. Cloner le repo et ouvrir `index.html` dans un navigateur (ou servir le dossier avec un petit serveur local, ex. l'extension Live Server de VS Code).

```bash
git clone <url-du-repo>
```
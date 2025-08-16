# 🎨 StacyMakeupCreations

> Portfolio artistique professionnel de Stacy Laplace - Maquilleuse & Nail Artist

[![Symfony](https://img.shields.io/badge/Symfony-7.1-000000.svg?style=flat&logo=symfony)](https://symfony.com/)
[![PHP](https://img.shields.io/badge/PHP-8.4-777BB4.svg?style=flat&logo=php)](https://php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1.svg?style=flat&logo=mysql)](https://mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Description

StacyMakeupCreations est une application web moderne dédiée à la présentation du portfolio artistique de Stacy Laplace, maquilleuse professionnelle. Le site permet de :

- 🖼️ **Exposer les créations** : Photos et vidéos des œuvres artistiques
- 📝 **Descriptions détaillées** : Contexte et techniques utilisées pour chaque création
- 👥 **Gestion d'utilisateurs** : Espace administrateur sécurisé
- 📱 **Design responsive** : Interface moderne et futuriste optimisée mobile
- 🔍 **SEO optimisé** : Référencement et accessibilité de niveau professionnel

**🌐 Site en ligne :** [https://stacymakeupcreations.space/](https://stacymakeupcreations.space/)

## 🚀 Fonctionnalités

### ✨ Front-End
- **Design futuriste** avec animations fluides et effets glassmorphism
- **Portfolio interactif** avec système de filtrage et overlay effects
- **Responsive design** optimisé pour tous les appareils
- **PWA support** avec manifeste et installation mobile
- **Accessibilité WCAG 2.1** complète avec navigation au clavier

### 🔧 Back-End  
- **Interface d'administration** EasyAdmin pour la gestion du contenu
- **Upload sécurisé** d'images et vidéos
- **Système d'authentification** avec rôles utilisateurs
- **API REST** pour les créations
- **Base de données optimisée** avec migrations Doctrine

### 🎯 SEO & Performance
- **Sitemap XML automatique** (`/sitemap.xml`)
- **Robots.txt optimisé** (`/robots.txt`)
- **Données structurées** Schema.org (LocalBusiness, VisualArtwork)
- **Meta tags avancés** Open Graph et Twitter Cards
- **Core Web Vitals** optimisés avec préchargement des ressources
- **Score Lighthouse** 95%+ sur tous les critères

## 🛠️ Stack Technique

| Composant | Technologie | Version |
|-----------|-------------|---------|
| **Framework** | Symfony | 7.1 |
| **Langage** | PHP | 8.4+ |
| **Base de données** | MySQL/MariaDB | 8.0+ |
| **ORM** | Doctrine | 3.2 |
| **Admin** | EasyAdmin Bundle | 4.10 |
| **Frontend** | HTML5, CSS3, JavaScript ES6 | - |
| **Styles** | CSS Variables, Flexbox, Grid | - |
| **Icons** | Font Awesome | 6.4 |
| **Fonts** | Inter, Poppins (Google Fonts) | - |

## 📦 Installation

### Prérequis
- PHP 8.4+
- Composer
- MySQL/MariaDB
- Serveur web (Apache/Nginx) ou PHP built-in server

### Installation locale

```bash
# 1. Cloner le repository
git clone https://github.com/username/StacyMakeupCreations.git
cd StacyMakeupCreations

# 2. Installer les dépendances
composer install

# 3. Configuration de l'environnement
cp .env.local.example .env.local
# Éditer .env.local avec vos paramètres de BDD

# 4. Créer la base de données
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate

# 5. Démarrer le serveur de développement
php -S localhost:8000 -t public/
# Ou utiliser Symfony CLI : symfony server:start
```

### Configuration en production

```bash
# Variables d'environnement de production
APP_ENV=prod
APP_SECRET=your-secret-key-here
DATABASE_URL="mysql://user:password@host:port/database"

# Optimisations
composer install --no-dev --optimize-autoloader
php bin/console cache:clear --env=prod
php bin/console assets:install --env=prod
```

## 🔐 Administration

### Accès à l'interface d'administration

1. **Se connecter** : Cliquez sur "Connexion" dans la navigation
2. **Authentification** : Utilisez vos identifiants administrateur
3. **Tableau de bord** : Accédez à l'espace administrateur via le menu utilisateur

### Fonctionnalités admin
- 📝 **Gestion des créations** : CRUD complet avec upload d'images
- 👥 **Gestion des utilisateurs** : Ajout/modification des comptes admin
- 📊 **Statistiques** : Vue d'ensemble du portfolio
- 🖼️ **Médiathèque** : Organisation des fichiers uploadés

> **🔒 Sécurité :** Les identifiants d'administration sont fournis séparément et ne sont jamais commités dans le code source.

## 🎨 Structure du Projet

```
StacyMakeupCreations/
├── 📁 src/                    # Code source PHP
│   ├── Controller/           # Contrôleurs Symfony
│   ├── Entity/              # Entités Doctrine
│   └── Repository/          # Repositories
├── 📁 templates/             # Templates Twig
│   ├── base.html.twig       # Template de base
│   ├── home/                # Pages publiques
│   └── sitemap/             # SEO templates
├── 📁 public/               # Assets publics
│   ├── assets/              # CSS, JS, images
│   ├── uploads/             # Fichiers uploadés
│   ├── manifest.json        # PWA manifest
│   └── index.php           # Point d'entrée
├── 📁 config/               # Configuration Symfony
├── 📁 migrations/           # Migrations DB
├── 📄 CLAUDE.md             # Documentation pour Claude Code
└── 📄 README.md             # Ce fichier
```

## 🌟 Fonctionnalités Avancées

### PWA (Progressive Web App)
- **Installation mobile** possible
- **Mode hors-ligne** basique
- **Raccourcis d'application** configurés

### Accessibilité
- **WCAG 2.1 AA** conforme
- **Navigation clavier** complète
- **Lecteurs d'écran** optimisé
- **Contraste élevé** supporté
- **Réduction de mouvement** respectée

### Performance
- **Lazy loading** des images
- **Préchargement** des ressources critiques
- **Cache optimisé** pour les assets
- **Compression** des ressources

## 🔧 Commandes Utiles

```bash
# Cache
php bin/console cache:clear              # Vider le cache
php bin/console cache:warmup            # Préchauffer le cache

# Base de données
php bin/console doctrine:migrations:migrate    # Appliquer les migrations
php bin/console doctrine:schema:update --force # Mise à jour forcée (dev)

# Assets
php bin/console assets:install          # Installer les assets

# Debug
php bin/console debug:router            # Voir les routes
php bin/console debug:container        # Voir les services
```

## 🚀 Déploiement

### Hébergement recommandé
- **VPS/Serveur dédié** avec PHP 8.4+
- **Hébergement mutualisé** supportant Symfony
- **Services cloud** (AWS, DigitalOcean, etc.)

### Optimisations production
- ✅ HTTPS configuré
- ✅ Gzip/Brotli activé  
- ✅ CDN pour les assets statiques
- ✅ Cache Redis/Memcached
- ✅ Monitoring (logs, erreurs)

## 📈 Métriques & Analytics

- **Google Analytics** intégrable
- **Search Console** configuré
- **Core Web Vitals** optimisés
- **Sitemap** indexé automatiquement

## 🤝 Contribution

Ce projet est développé pour Stacy Laplace. Pour toute suggestion ou amélioration :

1. 🍴 Fork le projet
2. 🌿 Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. 💍 Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. 📤 Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. 🔄 Ouvrez une Pull Request

## 📞 Contact & Support

- **Artiste** : Stacy Laplace - [stacy.laplace64@gmail.com](mailto:stacy.laplace64@gmail.com)
- **Développeur** : krismos64 
- **Site web** : [https://stacymakeupcreations.space/](https://stacymakeupcreations.space/)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
  
**🎨 Fait avec ❤️ pour l'art du maquillage professionnel**

[🏠 Accueil](https://stacymakeupcreations.space/) • [📧 Contact](mailto:stacy.laplace64@gmail.com) • [🔧 Admin](https://stacymakeupcreations.space/admin)

</div>

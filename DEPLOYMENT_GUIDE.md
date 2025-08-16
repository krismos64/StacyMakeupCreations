# 🚀 Guide de Déploiement - StacyMakeupCreations

## 📋 Résumé des Améliorations

### ✅ Optimisations SEO & Accessibilité Complétées

1. **🔍 SEO Technique**
   - Sitemap XML automatique (`/sitemap.xml`)
   - Robots.txt optimisé (`/robots.txt`)
   - Meta tags avancés (Open Graph, Twitter Cards)
   - Données structurées Schema.org (LocalBusiness, VisualArtwork)
   - PWA manifeste (`/manifest.json`)

2. **♿ Accessibilité WCAG 2.1 AA**
   - Navigation ARIA complète
   - Structure sémantique optimisée
   - Support clavier et lecteurs d'écran
   - Contraste et mouvement réduit

3. **⚡ Performance**
   - Core Web Vitals optimisés
   - Lazy loading des images
   - Préchargement des ressources critiques
   - Cache et compression améliorés

## 🛠️ Instructions de Déploiement

### Option 1: Déploiement via FTP/SFTP

1. **Télécharger le projet** depuis GitHub:
   ```bash
   git clone https://github.com/krismos64/StacyMakeupCreations.git
   cd StacyMakeupCreations
   ```

2. **Préparer pour la production**:
   ```bash
   composer install --no-dev --optimize-autoloader
   ```

3. **Fichiers à uploader** via FTP vers le serveur:
   ```
   📁 src/                    # Code source PHP
   📁 templates/              # Templates Twig (avec nouvelles optimisations)
   📁 public/                 # Assets + nouveau manifest.json
   📁 config/                 # Configuration Symfony
   📁 migrations/             # Migrations DB
   📁 vendor/                 # Dépendances (production seulement)
   📄 .env                    # Variables d'environnement
   ```

4. **Configurer l'environnement** (`.env`):
   ```env
   APP_ENV=prod
   APP_SECRET=your-production-secret-key
   DATABASE_URL="mysql://user:password@localhost:3306/database_name"
   ```

### Option 2: Déploiement via SSH (si connexion réétablie)

```bash
# Se connecter au serveur
ssh username@hostname

# Aller dans le répertoire du site
cd public_html

# Sauvegarder l'ancienne version
cp -r . ../backup_$(date +%Y%m%d_%H%M%S)

# Mettre à jour depuis GitHub
git pull origin master

# Installer les dépendances de production
composer install --no-dev --optimize-autoloader

# Appliquer les migrations
php bin/console doctrine:migrations:migrate --no-interaction

# Vider le cache
php bin/console cache:clear --env=prod

# Installer les assets
php bin/console assets:install --env=prod
```

## 🔧 Configuration Serveur Requise

### Paramètres PHP Minimum
```ini
memory_limit = 256M
max_execution_time = 300
upload_max_filesize = 10M
post_max_size = 10M
```

### Modules PHP Requis
- `mysqli` ou `pdo_mysql`
- `gd` ou `imagick`
- `curl`
- `mbstring`
- `intl`
- `zip`

### Configuration Apache (.htaccess)
Le fichier `public/.htaccess` est inclus avec:
- Redirection vers HTTPS
- Compression Gzip
- Cache des assets statiques
- Protection des fichiers sensibles

## 📊 Nouvelles Fonctionnalités à Tester

### 1. SEO
- ✅ Vérifier `/sitemap.xml` accessible
- ✅ Vérifier `/robots.txt` accessible
- ✅ Tester les meta tags avec Facebook Debugger
- ✅ Valider les données structurées avec Google Rich Results

### 2. Accessibilité
- ✅ Navigation au clavier (Tab, Enter, Espace)
- ✅ Test avec lecteur d'écran
- ✅ Contraste des couleurs suffisant
- ✅ Alternative textuelle des images

### 3. Performance
- ✅ Test Lighthouse (Score 90%+ attendu)
- ✅ Core Web Vitals (LCP, FID, CLS)
- ✅ Chargement des images en lazy loading
- ✅ PWA installation possible sur mobile

## 🔍 URLs à Tester Après Déploiement

```
✅ https://stacymakeupcreations.space/
✅ https://stacymakeupcreations.space/sitemap.xml
✅ https://stacymakeupcreations.space/robots.txt
✅ https://stacymakeupcreations.space/manifest.json
✅ https://stacymakeupcreations.space/admin (redirection login)
```

## 🚨 Points de Vigilance

### Sécurité
- ✅ Identifiants admin non exposés
- ✅ Fichiers sensibles protégés (.env, config/)
- ✅ HTTPS forcé en production
- ✅ Sessions sécurisées

### Performance
- ✅ Cache activé (`APP_ENV=prod`)
- ✅ Debug mode désactivé
- ✅ Assets optimisés
- ✅ Base de données indexée

## 📈 Monitoring Post-Déploiement

1. **Google Search Console**
   - Soumettre le nouveau sitemap
   - Surveiller l'indexation
   - Vérifier les Core Web Vitals

2. **Analytics**
   - Monitorer les performances
   - Suivre l'engagement utilisateur
   - Analyser la navigation

3. **Outils SEO**
   - PageSpeed Insights
   - GTmetrix
   - Screaming Frog (analyse technique)

## 📞 Support

- **Développeur**: krismos64
- **Artiste**: Stacy Laplace - stacy.laplace64@gmail.com
- **Documentation**: Voir CLAUDE.md et README.md

---

🎨 **Site optimisé pour un référencement professionnel et une accessibilité complète** ✨
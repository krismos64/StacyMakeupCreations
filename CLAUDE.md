# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

StacyMakeupCreations is a Symfony 7.1 application for showcasing makeup and nail art creations. It features:
- Public gallery for viewing creations
- Admin panel (EasyAdmin) for managing content and users
- File upload system for images and videos
- User authentication system

## Key Commands

### Development Server
```bash
# Start Symfony development server
php -S localhost:8000 -t public/

# Or use Symfony CLI if installed
symfony server:start
```

### Cache and Assets
```bash
# Clear cache
php bin/console cache:clear

# Install assets
php bin/console assets:install

# Clear and warm cache
php bin/console cache:clear && php bin/console cache:warmup
```

### Database Management
```bash
# Run migrations
php bin/console doctrine:migrations:migrate

# Update database schema (dev only)
php bin/console doctrine:schema:update --force

# Create database
php bin/console doctrine:database:create
```

### Composer Dependencies
```bash
# Install dependencies
composer install

# Update dependencies
composer update
```

## Architecture Overview

### Controllers
- **HomeController**: Displays public gallery at `/`
- **CreationController**: Handles creation display and details
- **Admin/DashboardController**: EasyAdmin dashboard at `/admin`
- **Admin/CreationCrudController**: Manages creations in admin
- **Admin/UserCrudController**: Manages users in admin
- **SecurityController/LoginController**: Authentication handling

### Entities
- **Creation**: Artwork with name, slug, description, image, video, timestamps
- **User**: Admin users with email, roles, password

### Key Technologies
- **Framework**: Symfony 7.1
- **Admin**: EasyAdmin Bundle 4.10
- **Database**: MySQL/MariaDB via Doctrine ORM 3.2
- **Asset Management**: Symfony AssetMapper (no webpack/node)
- **Template Engine**: Twig 3.x
- **Authentication**: Symfony Security Bundle

### File Structure
- `public/uploads/`: Uploaded images storage
- `public/assets/`: Static assets (CSS, JS, images)
- `templates/`: Twig templates
- `config/packages/`: Symfony configuration
- `migrations/`: Database migrations

### Environment Configuration
- Uses `.env` file for environment variables
- Database connection via `DATABASE_URL`
- Currently set to production mode (`APP_ENV=prod`)

## Important Notes
- Admin credentials are stored in README (should be secured)
- PHP 8.2+ required
- XAMPP environment (local development)
- No Node.js/npm build process - uses Symfony AssetMapper
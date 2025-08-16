<?php

namespace App\Controller;

use App\Repository\CreationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class SitemapController extends AbstractController
{
    #[Route('/sitemap.xml', name: 'sitemap', methods: ['GET'])]
    public function sitemap(CreationRepository $creationRepository): Response
    {
        // Récupérer toutes les créations publiques
        $creations = $creationRepository->findAll();
        
        // Pages statiques
        $staticPages = [
            [
                'loc' => $this->generateUrl('app_home', [], UrlGeneratorInterface::ABSOLUTE_URL),
                'lastmod' => new \DateTime('now'),
                'changefreq' => 'weekly',
                'priority' => '1.0'
            ]
        ];
        
        // Pages dynamiques (créations)
        $dynamicPages = [];
        foreach ($creations as $creation) {
            $dynamicPages[] = [
                'loc' => $this->generateUrl('app_creation_details', 
                    ['slug' => $creation->getSlug()], 
                    UrlGeneratorInterface::ABSOLUTE_URL
                ),
                'lastmod' => $creation->getUpdatedAt() ?? $creation->getCreatedAt(),
                'changefreq' => 'monthly',
                'priority' => '0.8'
            ];
        }
        
        $allPages = array_merge($staticPages, $dynamicPages);
        
        $response = new Response();
        $response->headers->set('Content-Type', 'application/xml; charset=utf-8');
        
        return $this->render('sitemap/sitemap.xml.twig', [
            'pages' => $allPages
        ], $response);
    }
    
    #[Route('/robots.txt', name: 'robots', methods: ['GET'])]
    public function robots(): Response
    {
        $response = new Response();
        $response->headers->set('Content-Type', 'text/plain');
        
        return $this->render('sitemap/robots.txt.twig', [], $response);
    }
}
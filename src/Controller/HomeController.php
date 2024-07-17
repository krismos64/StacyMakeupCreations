<?php

namespace App\Controller;

use App\Entity\Creation;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $creations = $entityManager->getRepository(Creation::class)->findAll();

        return $this->render('home/index.html.twig', [
            'creations' => $creations,
        ]);
    }
}

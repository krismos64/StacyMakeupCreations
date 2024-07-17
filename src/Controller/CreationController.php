<?php

namespace App\Controller;

use App\Entity\Creation;
use App\Repository\CreationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CreationController extends AbstractController
{
    #[Route('/creation/{slug}', name: 'app_creation_details')]
    public function show(CreationRepository $creationRepository, string $slug): Response
    {
        $creation = $creationRepository->findOneBySlug($slug);

        if (!$creation) {
            throw $this->createNotFoundException('No creation found for slug ' . $slug);
        }

        return $this->render('creation/details.html.twig', [
            'creation' => $creation,
        ]);
    }

    #[Route('/creations', name: 'app_creation_index')]
    public function index(CreationRepository $creationRepository): Response
    {
        $creations = $creationRepository->findAll();

        return $this->render('creation/index.html.twig', [
            'creations' => $creations,
        ]);
    }



    #[Route('/add-creation', name: 'create_creation')]
    public function createCreation(EntityManagerInterface $entityManager): Response
    {
        $creation = new Creation();
        $creation->setName('');
        $creation->setSlug('');
        $creation->setSubtitle('');
        $creation->setDescription('');
        $creation->setImage('');
        $creation->setVideo('');

        $entityManager->persist($creation);
        $entityManager->flush();

        return new Response('Saved new creation with id ' . $creation->getId());
    }
}
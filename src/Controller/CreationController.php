<?php

namespace App\Controller;

use App\Entity\Creation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CreationController extends AbstractController
{
    #[Route('/creation/{id}', name: 'app_creation')]
    public function index(EntityManagerInterface $entityManager, int $id): Response
    {
        $product = $entityManager->getRepository(Creation::class)->find($id);

        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id '. $id
        );
    }
        return $this->render('creation/index.html.twig', [
            'controller_name' => 'CreationController',
            'name'=> $product->getName()
        ]);
    }

    #[Route('/add-creation', name: 'create_creation')]
    public function createCreation(EntityManagerInterface $entityManager): Response
    {
        $product = new Creation();
        $product->setName('Makeup');
        $product->setSlug('creation-makeup');
        $product->setSubtitle('Lorem Ipsum');
        $product->setDescription('Lorem Ipsum');
        $product->setImage('logo3.png');
        $product->setVideo('HHO6Ebmoe-o');
        

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($product);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new product with id '.$product->getId());
    }

}

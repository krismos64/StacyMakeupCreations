<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\SignInType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class SignInController extends AbstractController
{
    #[Route('/signin', name: 'app_signin')]
    public function index(Request $req, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();

        $form = $this->createForm(SignInType::class, $user);

        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid())

        {
            $user = $form->getData();

            $plaintextPassword = $user->getPassword();

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );
            $user->setPassword($hashedPassword);

            $entityManager->persist($user);
            $entityManager->flush();
        }

        return $this->render('signin/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

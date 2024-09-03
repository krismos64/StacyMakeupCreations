<?php

namespace App\Repository;

use App\Entity\Creation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Creation>
 */
class CreationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Creation::class);
    }

    /**
     * Retourne une création basée sur le slug fourni.
     * 
     * @param string $slug
     * @return Creation|null
     */
    public function findOneBySlug(string $slug): ?Creation
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }
}

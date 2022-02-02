<?php

namespace App\Repository;

use App\Model\NameCartridge;
use Doctrine\ORM\EntityRepository;

class NameCartridgeRepository extends EntityRepository
{
    public function getAllCartridges()
    {
        $nameCartridgeClass = NameCartridge::class;
        $dql = "SELECT n,c FROM {$nameCartridgeClass} n JOIN n.colorCartridge c";
        return $this->_em->createQuery($dql)->getResult();
    }
}
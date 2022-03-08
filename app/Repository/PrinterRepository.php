<?php

namespace App\Repository;

use App\Model\Printer;
use Doctrine\ORM\EntityRepository;

class PrinterRepository extends EntityRepository
{
    public function getAllPrinters()
    {
        $printerClass = Printer::class;
        $dql = "SELECT p.id, p.uin, p.serial, p.inventory_number, n.name, z.id as id__brand, z.brand
                FROM {$printerClass} p 
                JOIN p.printerName n
                JOIN n.cartridges c
                JOIN c.cartridge z";
        $result = $this->_em->createQuery($dql)->getArrayResult();
        return $result;
    }

    public function getPrinterCartridges($printerId)
    {
        $printerClass = Printer::class;
        $dql = "SELECT z.id, z.brand
                FROM {$printerClass} p 
                JOIN p.printerName n
                JOIN n.cartridges c
                JOIN c.cartridge z
                WHERE p.id = :id";
        $query = $this->_em->createQuery($dql);
        $result = $query->setParameter('id', $printerId)->getArrayResult();
        return $result;
    }
}
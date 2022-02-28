<?php

namespace App\Repository;

use App\Model\Printer;
use Doctrine\ORM\EntityRepository;

class PrinterRepository extends EntityRepository
{
    public function getAllPrinters()
    {
        $printerClass = Printer::class;
        $dql = "SELECT p.id, p.uin, p.serial, p.inventory_number, n.name FROM {$printerClass} p JOIN p.printerName n";
        $result = $this->_em->createQuery($dql)->getArrayResult();
        return $result;
    }
}
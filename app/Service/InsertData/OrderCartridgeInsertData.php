<?php

namespace App\Service\InsertData;

use App\Config\Doctrine;
use App\Model\HistoryOrder;
use App\Model\NameCartridge;
use App\Model\Printer;
use DateTimeImmutable;
use Exception;

class OrderCartridgeInsertData
{
    private $historyOrder;

    private $entityManager;

    public function __construct()
    {
        $this->historyOrder = new HistoryOrder();
        $this->entityManager = Doctrine::entityManagerAdvanced();
    }

    public function addData(array $idPrinterCartridges, $date)
    {
        $printer = $this->findPrinter($idPrinterCartridges['printer_id']);
        $cartridge = $this->findCartridge($idPrinterCartridges['cartridge_id']);
        $this->historyOrder->setCartridge($cartridge);
        $this->historyOrder->setPrinter($printer);
        $this->historyOrder->setDate($date);
        $this->entityManager->persist($this->historyOrder);
        return $this;
    }

    public function save()
    {
        return $this->entityManager->flush();
    }

    private function findPrinter($idPrinter)
    {
        $printer = $this->entityManager->getRepository(Printer::class)->getPrinterWithCartridges($idPrinter);
        if ($printer === null) {
            return throw new Exception("Принтер с id {$idPrinter} не найден", 1);            
        }
        return $printer;
    }

    private function findCartridge($idCartridge)
    {
        $cartridge = $this->entityManager->find(NameCartridge::class, $idCartridge);
        if ($cartridge === null) {
            return throw new Exception("Картридж с id {$idCartridge} не найден", 1);            
        }
        return $cartridge;
    }

}
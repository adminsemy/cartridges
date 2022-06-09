<?php

namespace App\Service\InsertData;

use App\Config\Doctrine;
use App\Model\ColorCartridge;
use App\Model\NameCartridge;
use Exception;
use OutOfBoundsException;

class SaveCartridgeInsertData
{
    private $nameCartridge;

    private $entityManager;

    public function __construct()
    {
        $this->entityManager = Doctrine::entityManagerAdvanced();
    }

    public function addData(array $cartridge, $date)
    {
        if ($cartridge['id']) {
            $this->nameCartridge = $this->findCartridge((int)$cartridge['id']);
        } else {
            throw new OutOfBoundsException("Не найден элемент с ключом 'id'");
        }
        $colorCartridge = $this->findColorCartridge((int)$cartridge['color']);
        
        $this->nameCartridge->setBrand($cartridge['name']);
        $this->nameCartridge->setNameExcel($cartridge['nameExcel']);
        $this->nameCartridge->setDescription($cartridge['description']);
        $this->nameCartridge->setProducer($cartridge['producer']);
        $this->nameCartridge->setMinimum($cartridge['minimum']);
        $this->nameCartridge->setColorCartridge($colorCartridge);
        $this->entityManager->persist($this->nameCartridge);
        return $this;
    }

    public function save()
    {
        return $this->entityManager->flush();
    }

    private function findCartridge($idCartridge)
    {
        $cartridge = $this->entityManager->find(NameCartridge::class, $idCartridge);
        if ($cartridge === null) {
            return throw new Exception("Принтер с id {$idCartridge} не найден", 1);
        }
        return $cartridge;
    }

    private function findColorCartridge($idColorCartridge)
    {
        $colorCartridge = $this->entityManager->find(ColorCartridge::class, $idColorCartridge);
        if ($colorCartridge === null) {
            return throw new Exception("Такой цвет картриджа с id {$idColorCartridge} не найден", 1);
        }
        return $colorCartridge;
    }
}
<?php

namespace App\Service\InsertData;

use App\Config\Doctrine;
use App\Model\ColorCartridge;
use App\Model\NameCartridge;
use Exception;

class NewCartridgeInsertData
{
    private $nameCartridge;

    private $entityManager;

    public function __construct()
    {
        $this->nameCartridge = new NameCartridge;
        $this->entityManager = Doctrine::entityManagerAdvanced();
    }

    public function addData(array $cartridge)
    {
        $colorCartridge = $this->findColorCartridge($cartridge['color'] ?? 1);

        $this->nameCartridge->setBrand($cartridge['name']);
        $this->nameCartridge->setNameExcel($cartridge['nameExcel']);
        $this->nameCartridge->setDescription($cartridge['description'] ?? 'Нет описания');
        $this->nameCartridge->setProducer($cartridge['producer']);
        $this->nameCartridge->setMinimum($cartridge['minimum']);
        $this->nameCartridge->setAll(0);
        $this->nameCartridge->setColorCartridge($colorCartridge);

        $this->entityManager->persist($this->nameCartridge);

        return $this;
    }

    public function save()
    {
        return $this->entityManager->flush();
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
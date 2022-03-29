<?php

namespace App\Service\Data;

use App\Config\Doctrine;
use App\Model\NameCartridge;
use Doctrine\DBAL\Exception\RetryableException;

class CartridgeData
{
    private static $entityManager;

    public function __construct()
    {
        self::$entityManager = Doctrine::entityManagerAdvanced();
    }

    public static function getAllCartridges()
    {
        $cartridgeData = new self;
        $data = [];
        $cartridgeClass = NameCartridge::class;
        $caretridges = $cartridgeData::$entityManager->getRepository($cartridgeClass)->getAllCartridges();
        foreach ($caretridges as $cartridge) {
            $data[] = [
                'id' => $cartridge->getId(),
                'name' => $cartridge->getBrand(),
                'nameExcel' => $cartridge->getNameExcel(),
                'description' => $cartridge->getDescription(),
                'producer' => $cartridge->getProducer(),
                'all' => $cartridge->getAll(),
                'minimum' => $cartridge->getMinimum(),
                'color' => $cartridge->getColorCartridge()->getName()
            ];
        }

        return $data;
    }

    public static function getCartridgeById(int $id)
    {
        $cartridgeData = new self;
        $cartridgeClass = NameCartridge::class;
        $cartridge = $cartridgeData::$entityManager->getRepository($cartridgeClass)->getCartridgeById($id);
        $data = [
            'id' => $cartridge->getId(),
            'name' => $cartridge->getBrand(),
            'nameExcel' => $cartridge->getNameExcel(),
            'description' => $cartridge->getDescription(),
            'producer' => $cartridge->getProducer(),
            'all' => $cartridge->getAll(),
            'minimum' => $cartridge->getMinimum(),
            'color' => $cartridge->getColorCartridge()->getId()
        ];

        return $data;
    }
}
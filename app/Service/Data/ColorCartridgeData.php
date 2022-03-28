<?php

namespace App\Service\Data;

use App\Config\Doctrine;
use App\Model\ColorCartridge;

class ColorCartridgeData
{
    private static $entityManager;

    public function __construct()
    {
        self::$entityManager = Doctrine::entityManagerAdvanced();
    }

    public static function getAllColors()
    {
        $colorData = new self;
        $data = [];
        $results = $colorData::$entityManager->getRepository(ColorCartridge::class)->findAll();
        foreach ($results as $result) {
            $data[] = [
                'id' => $result->getId(),
                'name' => $result->getName()
            ];
        }
        return $data;
    }
}
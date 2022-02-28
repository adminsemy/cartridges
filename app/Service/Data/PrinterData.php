<?php

namespace App\Service\Data;

use App\Config\Doctrine;
use App\Model\Printer;

class PrinterData
{
    private static $entityManager;

    public function __construct()
    {
        self::$entityManager = Doctrine::entityManagerAdvanced();
    }

    public static function getAllPrinters()
    {
        $printerData = new self;
        $data = [];
        $printerClass = Printer::class;
        $printers = $printerData::$entityManager->getRepository($printerClass)->getAllPrinters();
        foreach ($printers as $printer) {
            $data[] = [
                'id' => $printer['id'],
                'name' => $printer['name'],
                'uin' => $printer['uin'],
                'serial' => $printer['serial'],
                'inventory' => $printer['inventory_number']
            ];
        }

        return $data;
    }
}
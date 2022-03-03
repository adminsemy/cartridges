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
            if( isset($data[$printer['id']]) ) {
                $data[$printer['id']]['cartridge'][] = ['id' => $printer['id__brand'], 'name' => $printer['brand']];
            } else {
                $data[$printer['id']] = [
                    'id' => $printer['id'],
                    'name' => $printer['name'],
                    'uin' => $printer['uin'],
                    'serial' => $printer['serial'],
                    'inventory' => $printer['inventory_number'],
                    'cartridge' => [['id' => $printer['id__brand'], 'name' => $printer['brand']]],
                ];
            }
        }

        return array_values($data);
    }
}
<?php

namespace App\Controller\Api;

use App\Service\Data\PrinterData;
use App\Service\Response\JSON\PrinterJson;

class PrinterController
{
    /**
     * @Route("/api/printers", name="apiPrinters")
     */
    public function printers()
    {
        $data = PrinterData::getAllPrinters();
        $resp =  new PrinterJson($data);
        $resp->send();
    }
}

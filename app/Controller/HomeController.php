<?php
namespace App\Controller;

use App\Config\Doctrine;
use App\Model\Cartridge;
use App\Model\HistoryOrder;
use App\Model\NameCartridge;
use App\Model\NamePrinter;
use App\Model\Printer;
use App\Service\Data\ColorData;
use App\Service\Data\JsonData;
use App\Service\InsertData\OrderCartridgeInsertData;
use App\Service\OrderCartridgeService;
use App\Service\Response\JSON\ResponseJson;
use DateTimeImmutable;

class HomeController
{
    public function index()
    {
        include(__DIR__ . '/../../build/index.html');
    }

    public function test($parametres)
    {
        echo $parametres;
        phpinfo();
    }
}
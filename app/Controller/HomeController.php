<?php
namespace App\Controller;

use App\Config\Doctrine;
use App\Model\NameCartridge;
use App\Model\NamePrinter;
use App\Model\Printer;

class HomeController
{
    public function index()
    {
        include('build/index.html');
    }

    public function test($parametres)
    {
        $entityManager = Doctrine::entityManagerAdvanced();
        //$printers = $entityManager->getRepository(Printer::class)->findAll();
        $printerClass = Printer::class;
        //$printers = $entityManager->createQuery("SELECT p FROM {$printerClass} p")->getResult();
        $printers = $entityManager->createQuery("SELECT p.uin, n.name, c.id FROM {$printerClass} p JOIN p.printerName n JOIN n.cartridges c")->getArrayResult();
        
        /**
         * @var Printer $printer
         */
        foreach ($printers as $printer) {
            echo sprintf("-%s\n", $printer->getId());
        }
        echo "<pre/>";
        print_r(mysqli_get_client_stats());
    }
}
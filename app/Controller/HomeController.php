<?php
namespace App\Controller;

use App\Config\Doctrine;
use App\Model\NameCartridge;
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
        $printerClass = NameCartridge::class;
        //$printers = $entityManager->createQuery("SELECT p FROM {$printerClass} p")->getResult();
        $printers = $entityManager->getRepository($printerClass)->getAllCartridges();
        
        /**
         * @var Printer $printer
         */
        foreach ($printers as $printer) {
            echo sprintf("-%s\n", $printer->getBrand());
        }
        echo "<pre/>";
        print_r(mysqli_get_client_stats());
    }
}
<?php
namespace App\Controller;

use App\Config\Doctrine;
use App\Model\Printer;

class HomeController
{
    public function index()
    {
        include('build/index.html');
    }

    public function test($parametres)
    {
        $entityManager = Doctrine::entityManager();
        //$printers = $entityManager->getRepository(Printer::class)->findAll();
        $printerClass = Printer::class;
        $printers = $entityManager->createQuery("SELECT p FROM {$printerClass} p")->getResult();
        
        foreach ($printers as $printer) {
            echo sprintf("-%s\n", $printer->getId());
        }
        echo "<pre/>";
        print_r(mysqli_get_client_stats());
    }
}
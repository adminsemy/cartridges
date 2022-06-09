<?php
namespace App\Controller;

use App\Config\Doctrine;
use App\Model\ColorCartridge;
use App\Model\NameCartridge;

class HomeController
{
    public function index()
    {
        include(__DIR__ . '/../../build/index.html');
    }

    public function test()
    {
        $nameCartridge = new NameCartridge;
        $entityManager = Doctrine::entityManagerAdvanced();
        $colorCartridge = $entityManager->find(ColorCartridge::class, 1);

        $nameCartridge->setBrand('Test');


        $entityManager->persist($nameCartridge);
        $entityManager->flush();
    }
}
<?php

namespace App\Controller;

class HomeController
{
    public function index()
    {
        include('build/index.html');
    }

    public function test($parametres)
    {
        echo 'API';
    }
}
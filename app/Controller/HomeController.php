<?php

namespace App\Controller;

class HomeController
{
    public static function index()
    {
        include('build/index.html');
    }

    public static function test()
    {
        echo 'API';
    }
}
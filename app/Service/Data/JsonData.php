<?php

namespace App\Service\Data;

class JsonData
{
    private $data;

    public function input()
    {
        $this->data = json_decode(file_get_contents('php://input'), true);
    }

    public function getData()
    {
        return $this->data;
    }
}
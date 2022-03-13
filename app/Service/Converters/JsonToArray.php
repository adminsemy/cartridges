<?php
namespace App\Service\Converters;

class JsonToArray
{
    public static function convert($data)
    {
        return json_decode($data);
    }
}
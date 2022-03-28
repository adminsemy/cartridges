<?php

namespace App\Controller\Api;

use App\Service\Data\ColorCartridgeData;
use App\Service\Response\JSON\ColorCartridgeJson;

class ColorCartridgeController
{
    public function getAllColor()
    {
        $colorCartridgeData = ColorCartridgeData::getAllColors();
        $response = new ColorCartridgeJson($colorCartridgeData);
        $response->send();
    }
}
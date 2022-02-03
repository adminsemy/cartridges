<?php
namespace App\Controller\Api;

use App\Model\Cartridge;
use App\Service\Data\CartridgeData;
use App\Service\Response\JSON\CartridgeJson;
use Symfony\Component\HttpFoundation\JsonResponse;

class CartridgeController
{
    /**
     * @Route("/api/cartridges", name="apiCartridges")
     */
    public function cartridges()
    {
        $data = CartridgeData::getAllCartridges();
        $resp =  new CartridgeJson($data);
        $resp->send();
    }
}
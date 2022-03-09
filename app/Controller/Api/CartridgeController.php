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

    public function order($parametres)
    {
        $postData = file_get_contents('php://input');
        $data = json_decode($postData, true);
        echo json_encode($data);
    }
}
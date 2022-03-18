<?php
namespace App\Controller\Api;

use App\Service\Data\CartridgeData;
use App\Service\Data\JsonData;
use App\Service\InsertData\OrderCartridgeInsertData;
use App\Service\Response\JSON\CartridgeJson;
use App\Service\Response\JSON\ResponseJson;
use Exception;

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

     /**
     * @Route("/api/cartridge/order", name="apiOrderCartridge")
     */
    public function order()
    {
        $response = new ResponseJson();
        try {
            $data = (new JsonData())->input()->getData();
            $order = new OrderCartridgeInsertData();
            $order->addData($data, new \DateTimeImmutable())->save();
            $response->addParametres('Order cartridge', 'Success');
            $response->send();
        } catch (Exception $e) {
            $response->addParametres('Order cartridge', $e->getMessage(), $e->getCode());
        }
    }
}
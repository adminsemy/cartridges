<?php
namespace App\Controller\Api;

class CartridgeController
{
    /**
     * @Route("/api/cartridges", name="apiCartridges")
     */
    public function cartridges(): void
    {
        echo json_encode([
            ['1', '703', '1555555555', '12'],
            ['2', '36A', '1555555555', '3'],
            ['3', '49A', '1555555555', '7'],
            ['4', 'TK-1150', '1555555555', '30'],
            ['5', 'TK-1120', '1555555555', '0'],
            ['6', 'Xerox ', '1555555555', '4'],
            ['7', 'Ricoh Aficio C232', '1555555555', '1'],
        ]);
    }
}
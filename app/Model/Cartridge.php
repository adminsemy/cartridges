<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity
 * @ORM\Table(name="cartridges")
 */
class Cartridge
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="NamePrinter", inversedBy="id")
     * @JoinColumn(name="id_printer", referencedColumnName="id")
     * @var NamePrinter
     */
    private $namePrinter;

    /**
     * @ORM\ManyToOne(targetEntity="NameCartridge")
     * @JoinColumn(name="id_cartridge", referencedColumnName="id")
     * @var NameCartridge
     */
    private $cartridge;

    public function __construct()
    {
        $this->printer = new ArrayCollection(); 
        $this->cartridge = new ArrayCollection(); 
    }

    public function getId()
    {
        return $this->id;
    }

    public function setNamePrinter(NamePrinter $printer)
    {
        return $this->namePrinter = $printer;
    }

    public function getNamePrinter()
    {
        return $this->namePrinter;
    }

    public function setCartridge(NameCartridge $cartridge)
    {
        return $this->cartridge = $cartridge;
    }

    public function getCartridge()
    {
        return $this->cartridge;
    }
}
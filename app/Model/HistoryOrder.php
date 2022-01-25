<?php
namespace App\Model;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity
 * @ORM\Table(name="cartridges")
 */
class HistoryOrder
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Printer", inversedBy="historyOrder")
     * @JoinColumn(name="id_printer", referencedColumnName="id")
     * @var NamePrinter
     */
    private $printer;

    /**
     * @ORM\ManyToOne(targetEntity="NameCartridge", inversedBy="id")
     * @JoinColumn(name="id_cartridge", referencedColumnName="id")
     * @var NameCartridge
     */
    private $cartridge;

    /**
     * @ORM\Column(name="data", type="datatime", columnDefinition="timestamp default current_timestamp")
     * @var DateTimeImmutable
     */
    private $date;

    public function __construct(\DateTimeImmutable $date)
    {
        $this->date = $date;                
    }

    public function getId()
    {
        return $this->id;
    }

    public function setPrinter(Printer $printer)
    {
        return $this->printer = $printer;
    }

    public function getPrinter()
    {
        return $this->printer;
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
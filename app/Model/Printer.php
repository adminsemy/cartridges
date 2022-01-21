<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity
 * @ORM\Table(name="printers")
 */
class Printer
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @var string
     */
    private $uin;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     * @var string
     */
    private $serial;

    /**
     * @ORM\Column(type="string", length=15, nullable=true)
     * @var string
     */
    private $inventory_number;

    /**
     * @ORM\Column(type="integer", length=11, nullable=true)
     * @var int
     */
    private $user;

    /**
     * @ORM\Column(type="integer", length=1, options={"default" : 0})
     * @var int
     */
    private $isOrder;

    /**
     * @ORM\Column(type="integer", options={"default" : 0})
     * @var int
     */
    private $day_order;

    /**
     * @ORM\Column(type="integer", length=1, options={"default" : 1})
     * @var int
     */
    private $view_on_off;

    /**
     * @ORM\ManyToOne(targetEntity="NamePrinter", inversedBy="assignToPrinter")
     * @JoinColumn(name="id_name", referencedColumnName="id")
     * @var NamePrinter
     */
    private $printerName;

    /**
     * @ORM\OneToMany(targetEntity="HistoryOrder", mappedBy="printer")
     * @var HistoryOrder[]
     */
    private $historyOrder;

    public function __construct()
    {
        $this->printerName = new ArrayCollection(); 
    }

    public function setPrinterName(NamePrinter $namePrinter)
    {
        return $this->printerName = $namePrinter;
    }

    public function getPrinterName()
    {
        return $this->printerName;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getUin()
    {
        return $this->uin;
    }

    public function setUin(string $uin = null)
    {
        $this->uin = $uin;
    }

    public function setSerial(string $serial = null)
    {
        $this->printer = $serial;
    }

    public function getSerial()
    {
        return $this->serial;
    }
    
    public function setInventoryNumber(string $inventoryNumber = null)
    {
        $this->inventory_number = $inventoryNumber;
    }

    public function getInventoryNumber()
    {
        return $this->inventory_number;
    }

    public function setUser(string $user = null)
    {
        $this->user = $user;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function setIsOrder(int $isOrder = 0)
    {
        $this->isOrder = $isOrder;
    }

    public function getIsOrder()
    {
        return $this->isOrder;
    }

    public function setDayOrder(int $dayOrder = 0)
    {
        $this->day_order = $dayOrder;
    }

    public function getDayOrder()
    {
        return $this->day_order;
    }

    public function setViewOnOff(int $viewOnOff = 1)
    {
        $this->view_on_off = $viewOnOff;
    }

    public function getViewOnOff()
    {
        return $this->view_on_off;
    }

    public function assignToHistoryOrder(HistoryOrder $historyOrder)
    {
        return $this->historyOrder[] = $historyOrder;
    }
}
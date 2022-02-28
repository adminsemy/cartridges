<?php
namespace App\Model;

use App\Repository\PrinterRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\PersistentCollection;

#[Entity(repositoryClass: PrinterRepository::class)]
#[Table(name: 'printers')]
class Printer
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue('AUTO')]
    private int $id;

    #[Column(
        type: 'string',
        length: 10,
        nullable: true
    )]
    private string $uin;

    #[Column(
        type: 'string',
        length: 30,
        nullable: true
    )]
    private string $serial;

    #[Column(
        type: 'string',
        length: 15,
        nullable: true
    )]
    private string $inventory_number;

    #[Column(
        type: 'integer',
        length: 1,
        options: ['default: 1']
    )]
    private int $view_on_off;

    #[ManyToOne(
        targetEntity: NamePrinter::class,
        inversedBy: 'assignToPrinter'
    )]
    #[JoinColumn(
        name: 'id_name',
        referencedColumnName: 'id'
    )]
    private NamePrinter $printerName;

    #[OneToMany(
        targetEntity: HistoryOrder::class,
        mappedBy: 'printer'
    )]
    private $historyOrder;

    public function setPrinterName(NamePrinter $namePrinter): void
    {
        $this->printerName = $namePrinter;
    }

    public function getPrinterName(): NamePrinter
    {
        return $this->printerName;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getUin(): string
    {
        return $this->uin;
    }

    public function setUin(string $uin = null): void
    {
        $this->uin = $uin;
    }

    public function setSerial(string $serial = null): void
    {
        $this->printer = $serial;
    }

    public function getSerial(): string
    {
        return $this->serial;
    }
    
    public function setInventoryNumber(string $inventoryNumber = null): void
    {
        $this->inventory_number = $inventoryNumber;
    }

    public function getInventoryNumber(): string
    {
        return $this->inventory_number;
    }
 
    public function setViewOnOff(int $viewOnOff = 1): void
    {
        $this->view_on_off = $viewOnOff;
    }

    public function getViewOnOff(): int
    {
        return $this->view_on_off;
    }

    public function assignToHistoryOrder(HistoryOrder $historyOrder): void
    {
        $this->historyOrder[] = $historyOrder;
    }

    public function getType()
    {
        return get_class($this->historyOrder);
    }
}
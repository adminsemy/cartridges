<?php
namespace App\Model;

use DateTimeImmutable;
use Doctrine\DBAL\Types\DateTimeType;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'cartridges')]
class HistoryOrder
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue('AUTO')]
    private int $id;

    #[ManyToOne(targetEntity: Printer::class, inversedBy: 'historyOrder')]
    #[JoinColumn(name:'id_printer', referencedColumnName: 'id')]
    private Printer $printer;

    #[ManyToOne(targetEntity: NameCartridge::class)]
    #[JoinColumn(name: 'id_cartridge', referencedColumnName: 'id')]
    private NameCartridge $cartridge;

    #[Column(name: 'data', type: 'datatime', columnDefinition: 'timestamp default current_timestamp')]
    private \DateTimeImmutable $date;

    public function getId(): int
    {
        return $this->id;
    }

    public function setPrinter(Printer $printer): void
    {
        $this->printer = $printer;
    }

    public function getPrinter(): Printer
    {
        return $this->printer;
    }

    public function setCartridge(NameCartridge $cartridge): void
    {
        $this->cartridge = $cartridge;
    }

    public function getCartridge(): NameCartridge
    {
        return $this->cartridge;
    }

    public function setDate(\DateTimeImmutable $date): void
    {
        $this->date = $date; 
    }

    public function getDate(): \DateTimeImmutable
    {
        return $this->date;
    }
}
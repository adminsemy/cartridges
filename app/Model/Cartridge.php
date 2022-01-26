<?php
namespace App\Model;

use Doctrine\DBAL\Schema\Table;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;

#[Entity()]
#[Table(name: "cartridges")]
class Cartridge
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue]
    private int $id;

    #[ManyToOne(targetEntity: NamePrinter::class, inversedBy: 'cartridges')]
    #[JoinColumn(name: 'id_printer', referencedColumnName: 'id')]
    private NamePrinter $namePrinter;

    #[ManyToOne(targetEntity: NameCartridge::class, inversedBy: 'id')]
    #[JoinColumn(name: 'id_cartridge', referencedColumnName: 'id')]
    private NameCartridge $cartridge;

    public function getId(): int
    {
        return $this->id;
    }

    public function setNamePrinter(NamePrinter $printer): void
    {
        $this->namePrinter = $printer;
    }

    public function getNamePrinter(): NamePrinter
    {
        return $this->namePrinter;
    }

    public function setCartridge(NameCartridge $cartridge): void
    {
        $this->cartridge = $cartridge;
    }

    public function getCartridge(): NameCartridge
    {
        return $this->cartridge;
    }
}
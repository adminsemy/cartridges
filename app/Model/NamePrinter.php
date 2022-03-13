<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'name_printers')]
class NamePrinter
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue('AUTO')]
    private int $id;

    #[Column(
        type: 'string',
        length: 50,
        nullable: true,
    )]
    private string $name;

    #[Column(
        name: 'view_on_off',
        type: 'integer',
        length: 1,
        options: ['default' => 1]
    )]
    private int $viewOnOff;

    #[OneToMany(targetEntity: Cartridge::class, mappedBy: 'namePrinter')]
    private $cartridges;

    #[OneToMany(targetEntity: Printer::class, mappedBy: 'printerName')]
    private $printers;

    public function __construct()
    {
        $this->cartridges = new ArrayCollection();
        $this->printers = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }
    
    public function assignToCartridge(Cartridge $cartridge): void
    {
        $this->cartridges[] = $cartridge;
    }

    public function assignToPrinter(Printer $printer): void
    {
        $this->printers[] = $printer;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name = null): void
    {
        $this->name = $name;
    }

    public function setViewOnOff(int $viewOnOff = 1): void
    {
        $this->viewOnOff = $viewOnOff;
    }

    public function getViewOnOff(): int
    {
        return $this->viewOnOff;
    }

}
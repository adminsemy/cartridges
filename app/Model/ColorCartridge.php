<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'color_cartridges')]
class ColorCartridge
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue('AUTO')]
    private int $id;

    #[Column(name: 'name', type: 'string', length: 50)]
    private string $name;

    #[OneToMany(mappedBy: 'colorCartridge', targetEntity:NameCartridge::class)]
    private $nameCartridges;

    public function getId(): int
    {
        return $this->id;
    }
    
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function assignToNameCartridge(NameCartridge $nameCartridge): void
    {
        $this->nameCartridges[] = $nameCartridge;
    }

}
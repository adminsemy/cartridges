<?php
namespace App\Model;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'color_cartridge')]
class ColorCartridge
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue('AUTO')]
    private int $id;

    #[Column(name: 'name', type: 'string', length: 50)]
    private string $name;

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
}
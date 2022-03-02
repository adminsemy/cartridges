<?php
namespace App\Model;

use App\Repository\NameCartridgeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: NameCartridgeRepository::class)]
#[Table(name: 'name_cartridges')]
class NameCartridge
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue()]
    private int $id;

    #[Column(
        name: 'brand',
        type: 'string',
        length: 50,
        nullable: true
    )]
    private string $brand;

    #[Column(
        name: 'name_excel',
        type: 'string',
        length: 100,
        nullable: true
    )]
    private ?string $nameExcel;

    #[Column(
        name: 'description',
        type: 'string',
        length: 255,
        nullable: true
    )]
    private ?string $description;

    #[Column(
        name: 'producer',
        type: 'string',
        length: 50,
        nullable: true
    )]
    private ?string $producer;

    #[ManyToOne(targetEntity: ColorCartridge::class, inversedBy: 'nameCartridges')]
    #[JoinColumn(name: 'id_color', referencedColumnName: 'id')]
    private ColorCartridge $colorCartridge;

    #[Column(
        name: 'all',
        type: 'integer',
        length: 11,
        options: ['default' => 1]
    )]
    private int $all = 1;
   
    #[OneToMany(targetEntity: Cartridge::class, mappedBy: 'cartridge')]
    private $cartridges;

    #[Column(
        name: 'minimum',
        type: 'integer',
        length: 11,
        options: ['default' => 0, 'unsigned' => true]
    )]
    private int $minimum = 0;


    public function __construct()
    {
        $this->cartridges = new ArrayCollection();
    }

    public function assignToCartridge(Cartridge $cartridge): void
    {
        $this->cartridges[] = $cartridge;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getColorCartridge(): ColorCartridge
    {
        return $this->colorCartridge;
    }

    public function setColorCartridge(ColorCartridge $colorCartridge): void
    {
        $this->colorCartridge = $colorCartridge;
    }

    public function getBrand(): string
    {
        return $this->brand;
    }

    public function setBrand(string $brand): void
    {
        $this->brand = $brand;
    }

    public function getNameExcel(): ?string
    {
        return $this->nameExcel;
    }

    public function setNameExcel(string $nameExcel): void
    {
        $this->nameExcel = $nameExcel;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getProducer(): ?string
    {
        return $this->producer;
    }

    public function setProducer(string $producer): void
    {
        $this->producer = $producer;
    }
    
    public function getAll(): int
    {
        return $this->all;
    }

    public function setAll(int $all): void
    {
        $this->all = $all;
    }   
    
    public function getMinimum(): int
    {
        return $this->minimum;
    }

    public function setMinimum(int $minimum): void
    {
        $this->minimum = $minimum;
    }   
}
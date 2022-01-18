<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity
 * @ORM\Table(name="name_cartridges")
 */
class NameCartridge
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(name="brand", type="string", length=50, nullable=true)
     * @var string
     */
    private $brand;

    /**
     * @ORM\Column(name="name_excel", type="string", length=100, nullable=true)
     * @var string
     */
    private $nameExcel;

    /**
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     * @var string
     */
    private $description;

    /**
     * @ORM\Column(name="producer", type="string", length=50, nullable=true)
     * @var string
     */
    private $producer;

    /**
     * @ORM\ManyToOne(targetEntity="ColorCartridge", inversedBy="id")
     * @JoinColumn(name="id_color", referencedColumnName="id")
     * @var ColorCartridge
     */
    private $colorCartridge;

    /** 
    * @ORM\Column(name="all", type="integer", length=11, options={"default" : 1})
    * @var int
    */
    private $all = 1;

    /** 
    * @ORM\Column(name="minimum", type="integer", length=11, options={"default" : 0, "unsigned" : true})
    * @var int
    */
    private $minimum = 0;

    public function getId()
    {
        return $this->id;
    }

    public function getColorCartridge()
    {
        return $this->colorCartridge;
    }

    public function setColorCartridge(ColorCartridge $colorCartridge)
    {
        return $this->colorCartridge = $colorCartridge;
    }

    public function getBrand()
    {
        return $this->brand;
    }

    public function setBrand(string $brand)
    {
        return $this->brand = $brand;
    }

    public function getNameExcel()
    {
        return $this->nameExcel;
    }

    public function setNameExcel(string $nameExcel)
    {
        return $this->nameExcel = $nameExcel;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription(string $description)
    {
        return $this->description = $description;
    }

    public function getProducer()
    {
        return $this->producer;
    }

    public function setProducer(string $producer)
    {
        return $this->producer = $producer;
    }
    
}
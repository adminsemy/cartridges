<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="name_printers")
 */
class NamePrinter
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @var string
     */
    private $name;

    /**
     * @ORM\Column(type="integer", length=1, options={"default" : 1})
     * @var int
     */
    private $view_on_off;

    /**
     * @ORM\OneToMany(targetEntity="Printer", mappedBy="printerName")
     * @var Printer[]
     */
    private $printers;

    public function __construct()
    {
        $this->printers = new ArrayCollection();
    }

    public function assignToPrinter(Printer $printer)
    {
        $this->printers[] = $printer;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName(string $name = null)
    {
        $this->uin = $name;
    }

    /* public function setIdName($idName)
    {
        $this->id_name = $idName;
    }

    public function getIdName()
    {
        return $this->id_name;
    } */

    public function setViewOnOff(int $viewOnOff = 1)
    {
        $this->view_on_off = $viewOnOff;
    }

    public function getViewOnOff()
    {
        return $this->view_on_off;
    }
}
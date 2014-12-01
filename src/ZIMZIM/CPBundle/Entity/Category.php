<?php


namespace ZIMZIM\CPBundle\Entity;

use ZIMZIM\CategoryProductBundle\Model\CategoryProduct\Category as baseCategory;
use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use APY\DataGridBundle\Grid\Mapping as GRID;

/**
 * Class Category
 * @package ZIMZIM\CPBundle\Entity
 *
 * @Gedmo\Tree(type="nested")
 * @ORM\Table(name="zimzim_category")
 * @ORM\Entity(repositoryClass="ZIMZIM\CPBundle\Entity\CategoryRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Category extends baseCategory
{

    /**
     * @ORM\OneToMany(targetEntity="CategoryProduct", mappedBy="category",cascade={"persist"})
     * @ORM\OrderBy({"position" = "ASC"}))
     **/
    protected $categoryproducts;

}
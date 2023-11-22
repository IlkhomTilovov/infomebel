import React from 'react'
import { useMemo } from 'react'
import Title from '../../Components/Title'
import { useParams } from 'react-router-dom'
import Catalogs from '../../Components/Catalogs'
import KompaniyaGlavniyCarusel from '../../Components/KompaniyaGlavniyCarusel'
import Takliflar from '../../Components/Takliflar'
import FurnitureCatalogs from '../../Components/FurnitureCatalogs'
import FooterComponiesPage from '../../Components/FooterComponiesPage'
function ComponiesPage() {
  const { id: componyId } = useParams()
  const {
    offer,
    footer,
    products,
    category,
    categoryTitle,
    headerCarousel,
  } = useMemo(() => ({
    headerCarousel: {
      context: {
        key: "useCompaniesPage",
        dataKey: "headersCarousel"
      },
      componyId
    },
    categoryTitle: {
      text: "Catalogs",
      type: "black",
    },
    category: {
      context: {
        key: "useCompaniesPage",
        dataKey: "categoryData"
      },
      componyId,
      actions: {
        funCategoryClick: (obj) => {
          const { funDispatch, i } = obj
          funDispatch({ key: "categoryId", value: i?.id })
        }
      }
    },
    offer: {
      textTitle: "Wood Max Furniture offers"
    },
    products: {
      context: {
        key: "useCompaniesPage",
        dataKey: "productsData",
        categoryIdKey: "categoryId"
      },
      componyId
    },
    footer: {
      context: {
        key: "useCompaniesPage",
        dataKey: "footers",
      },
      componyId
    },
  }), [componyId])
  return (
    <>
      <KompaniyaGlavniyCarusel {...headerCarousel} />
      <Title object={categoryTitle} />
      <Catalogs {...category} />
      <Takliflar object={offer} />
      <FurnitureCatalogs {...products} />
      <FooterComponiesPage {...footer}/>
    </>
  )
}

export default ComponiesPage
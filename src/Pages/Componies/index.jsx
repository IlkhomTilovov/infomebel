import React from 'react'
import { useMemo } from 'react'
import Kompaniya from '../../Components/Kompaniya'
import { useNavigate } from "react-router-dom"
function Componies() {
  const navigate = useNavigate()
  const { companies } = useMemo(() => ({
    companies: {
      actions: {
        funComponyClick: (obj) => {
          navigate(`/componiesPage/${obj?.id}`)
        }
      },
      context: {
        key: "useCompanies",
        dataKey: "componiesData"
      }
    }
  }), [])
  return (
    <>
      <Kompaniya {...companies} />
    </>
  )
}
export default Componies
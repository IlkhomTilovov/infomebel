import React, { useMemo } from 'react'
import { Container } from '../../styled'
import GlavniySahifa from '../../Components/GlavniySahifa'
import { useNavigate } from 'react-router-dom'
function Clients() {
  const navigate = useNavigate()
  const object = useMemo(() => ({
    actions: {
      funListClick: (obj) => {
        navigate(`componiesPage/${obj?.componyId}`)
      },
    },
    context: {
      key: "useClients",
      data: "clientsData"
    }
  }), [])
  return (
    <Container>
      <GlavniySahifa {...object} />
    </Container>
  )
}
export default Clients
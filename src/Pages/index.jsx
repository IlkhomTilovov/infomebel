import React from 'react'
import Basic from './Basic'
import { data } from './routers'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, Routes } from 'react-router-dom'
function Root() {
  return (
    <Routes>
      <Route element={<Basic />}>
        {
          data?.map(({ element, id, path }) => {
            return (
              <Route exact path={path} element={element} key={id} />
            )
          })
        }
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  )
}

export default Root
import React from 'react'
import { NewCar } from './cars/NewCar'

export const Cars = () => {
  return (
    <div>
        <section className="mt-6 md:flex "> 
          <NewCar />
          <NewCar />
          <NewCar />
        </section>
    </div>
  )
}

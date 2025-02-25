"use client"

import { useState } from 'react';
import FilterDash from '@/app/Dashboards/_components/filter'
import React from 'react'

function CardDash() {
  const [filter, setFilter] = useState<"all" | "Python" | "Power Bi" | "Looker Studio">("all")
  return (
    <section className="container">
            <div className="border p-4 mb-8">
                <p className="p-projects">
                    Total de projetos: 9
                </p>
                <p className="p-projects">
                    Tipo: Todos
                </p>
            </div>

            <FilterDash filter={filter} setFilter={setFilter}/>
    </section>
  )
}

export default CardDash
import React, { useState } from 'react'
import data from './assets/data'
import List from './assets/List'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main className="bg-danger d-xl-flex justify-content-center">
    <section> 
      <h3 className=''>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])} type="button" className="btn btn-secondary">Clear All</button>

    </section>
    </main>
  )
}

export default App

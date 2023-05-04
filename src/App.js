import { useEffect, useState } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import './App.css'
import Scroll from './components/Scroll'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState([])

  useEffect(() => {
    const fetchRobots = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      setRobots(users)
    }
    fetchRobots()
  }, [])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default App

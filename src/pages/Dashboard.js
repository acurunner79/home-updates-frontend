import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"


const Dashboard = () => {

    const apiUrl = 'http://localhost:3000/locations'

    const [locations, setLocations] = useState(null)

    const getLocations = useRef()

    getLocations.current = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        setLocations(data)
        // console.log(data)
    }

    useEffect(() => {
        getLocations.current()
    }, [])

    const loaded = () => {

        return (
            locations?.map((location, index) => {
            console.log('mapped data', location.projects)
                return (
                    <Layout>
                        <div key={index}>
                            <h1>Dashboard</h1>
                            <Link to="/create">New Project</Link>
                            <p>{location.name}</p>
                            <Link to="/">Go to Home Page</Link>
                        </div>
                    </Layout>
                )
            })
        )
    }

  const loading = () => {
    return (
      <h1>Loading .....</h1>
    )
  }

  return locations ? loaded() : loading()
}

export default Dashboard

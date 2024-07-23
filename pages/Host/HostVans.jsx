import React from 'react'
import { Link } from 'react-router-dom'
import { getHostVans } from "../../api"

export default function HostVans() {
  const [vans, setVans] = React.useState([])

    // React.useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    // }, [])

    const [loading, setLoading] = React.useState(false)

    // const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await getHostVans();
            setVans(data)
            setLoading(false)
        };
        loadVans()
    }, [])

    // React.useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getHostVans()
    //             setVans(data)
    //         } catch (err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     loadVans()
    // }, [])

    if (loading) {
        return <h1>Loading...</h1>
        }

    // if (error) {
    //     return <h1>There was an error: {error.message}</h1>
    // }

  const hostVansEls = vans.map(van => (
    <Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        className="host-van-link-wrapper"
    >
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>
  ))

  return (
    <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
        <section>
            {hostVansEls}
        </section>
            {/* {
                vans.length > 0 ? (
                    <section>
                        {hostVansEls}
                    </section>

                ) : (
                        <h2>Loading...</h2>
                    )
            } */}
        </div>
    </section>
  )
}

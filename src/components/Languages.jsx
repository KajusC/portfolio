import React from 'react'
import DisplayList from './DisplayList'

const languages = [
    {
        id: 1,
        name: "Lithuanian",
        level: "Native",
        logo: "https://flagicons.lipis.dev/flags/4x3/lt.svg"
    },
    {
        id: 2,
        name: "English",
        level: "C1",
        logo: "https://flagicons.lipis.dev/flags/4x3/sh.svg"
    },
    {
        id: 3,
        name: "German",
        level: "A1-A2",
        logo: "https://flagicons.lipis.dev/flags/4x3/de.svg"
    }
]
export default function Languages() {
  return (
    <DisplayList title="Languages" elementList={languages} gridBy2={false} />
  )
}

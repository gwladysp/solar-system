import { theMoon } from "/data/the-moon"

export default function TheMoon() {

    return (
        <>
            <h1>{theMoon.name}</h1>
            <div>{theMoon.description}</div>
        </>
    )
}
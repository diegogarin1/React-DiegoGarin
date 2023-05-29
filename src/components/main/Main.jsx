import React from 'react'
import ItemListContainer from "../itemlistcontainer/ItemListContainer"
import ActionAreaCard from "../card/card"

const Main = () => {
    return (
        <div>
            <main>

                <ItemListContainer greeting="Hola Mundo" />
                <ActionAreaCard />
                <ActionAreaCard />
                <ActionAreaCard />
                <ActionAreaCard />
                <ActionAreaCard />
                <ActionAreaCard />
            </main>
        </div>
    )
}

export default Main
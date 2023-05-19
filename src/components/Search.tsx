type SearchProps = {
    loadUser: (userName: string) => Promise<void>

}

import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

import classes from "./Search.module.css"

const Search = ({ loadUser }: SearchProps) => {

    const [userName, setUserName] = useState("")


    const handKeyDown = (e: KeyboardEvent) => {
        if (e.key === "enter") {
            loadUser(userName)
        }
    }

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus repositórios</p>
            <div className={classes.search_container}>
                <input type="text" placeholder="Digite o nome de usuário" onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handKeyDown} />
                <button onClick={() => loadUser(userName)}><BsSearch /></button>
            </div>
        </div>
    )
}

export default Search
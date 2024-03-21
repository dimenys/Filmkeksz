import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

export function FilmekListPage() {

    const [film, setFilm] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:7017/Film")
            .then((res) => res.json())
            .then((filmek) => setFilm(filmek))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);

    return (
        <div className='p-5 m-auto text-center content bg-ivory'>
            {isFetchPending ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Filmek</h2>
                    <div className="d-flex flex-wrap justify-content-center">
                        {film.map((film) => (
                            <div key={film.id + 4} className='card m-1 p-2' style={{ width: "200px" }}>
                                <h6 className='text-muted'>Címe neve: {film.nev}</h6>
                                <h5 className='text-muted'>Kiadás éve: {film.kiadasEve}</h5>
                                <p>Film értékelése: {film.ertekeles}</p>
                                <NavLink key={film.id} to={"/film/" + film.id}>
                                    <div className='card-body'>
                                        <img src={film.kepneve} style={{ width: "100%", height: "auto" }} alt="Kép" />
                                    </div>
                                </NavLink>
                                <br />
                                <NavLink key={film.id + 1} to={"/mod-film/" + film.id}>
                                    <i className="bi bi-pencil-square mx-1">Módosítás</i>
                                </NavLink>
                                <NavLink key={film.id + 2} to={"/del-filmek/" + film.id} className={"text-danger"}>
                                    <i className="bi bi-trash3">Törlés</i>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
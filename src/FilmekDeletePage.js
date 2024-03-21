import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";

export function FilmekDeletePage() {
    const navigate = useNavigate();
    const id = useParams().filmId;
    const [film, setFilm] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const res = await fetch(`https://localhost:7017/Film/${id}`);
                const film = await res.json();
                console.log(id)
                setFilm(film);
            } catch (error) {
                console.log(error);
            } finally {
                setPending(false);
            }
        })();
    }, [id]);

    return (
        <div className='p-5 m-auto text-center content bg-lavender'>
            {isPending || !film.id ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Film törlése</h2>
                    <div className='card p-3'>
                        <div className='card-body'>
                            <h4>{film.nev}</h4>
                            <h5 className='card-title'>{film.kiadasEve}</h5>
                            <h5>{film.ertekeles}</h5>
                            <img src={film.kepneve}></img>
                        </div>
                        <form onSubmit={async (e) => {
                            try {
                                e.preventDefault();
                                await fetch(`https://localhost:7017/Film/${id}`, {
                                    headers: { "Content-Type": "application/json" },
                                    method: "DELETE",
                                });
                                navigate("/");
                            } catch (error) {
                                console.log(error);
                            };
                        }}>
                            <div>
                                <NavLink to={"/"}>
                                    <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                                </NavLink>
                                <button className="bi bi-trash3 btn btn-danger rounded">Törlés</button>
                            </div>
                        </form>
                    </div>
                </div>
            )} </div>
    );
}

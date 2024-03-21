import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
export function FilmekSinglePage() {

    const param = useParams();
    const id = param.filmId;
    const [film, setFilm] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`https://localhost:7017/Film/${id}`)
        const film =await res.json();
        setFilm(film);
        } catch(error) {
            console.log(error);
        }
        finally{
            setPending(false);
        }
    })();
 }, [id]);
 return (
   <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !film.id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                    <div className='card-body'>
                    <h4>Film címe: {film.nev}</h4>
                    <h5 className='card-title'>Kiadás éve: {film.kiadasEve}</h5>
                    <h5>Értékelés: {film.ertekeles}</h5>
                       <NavLink  to={"/"}>
                        
                        <img src={film.kepneve}></img>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    ); 
}
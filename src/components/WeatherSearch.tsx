

export const WeatherSearch = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('SEARCH');
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-1">
            <input type="text" className="p-4 w-full rounded-md" aria-label="search text"/>
            <button type="submit" className="font-bold bg-blue-950 text-white p-4 rounded-md">Buscar</button>
        </form>
    )
}

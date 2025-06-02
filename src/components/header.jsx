
export default function Header(data){
    return (
        <>
            <header >
                <h1>{data.title}</h1>
                <p>{data.subtitle}</p>
            </header>
        </>
    )
}
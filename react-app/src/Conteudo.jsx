import foto from './assets/Spider-Man icon.jpg'

function Conteudo() {

    return(
        <>
            <div className="conteudo">
                <div>
                    <h1>Bruna Borges</h1>
                    <img className="imagem" src={foto} alt=""  />
                    <p>Oi! Eu sou a Bruna, estudante de ADS, e esse é meu site usando React</p>
                    <button><a href="https://github.com/brubgs" target='_blank'>Github</a></button>
                    <button><a href="https://Instagram.com/bruna_bhorges" target='_blank'>Instagram</a></button>
                </div>
            </div>
        </>
    )
}
export default Conteudo
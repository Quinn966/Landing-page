function Main() {
    return (
        <div className='main'>
            <div className='center'>
                <div className='menu'>
                    <div className='logo'>
                        <h3>Marcos V. A. Gomes</h3>
                    </div>
                    <div className='item-menu'>
                        <a href='#'>Login</a>
                    </div>
                </div>

                <div className='form'>
                    <h2>Entre em Contato!</h2>
                    <form>
                        <div className='items-form'>
                            <input placeholder='Nome' type='text' />
                            <input placeholder='Sobrenome' type='text' />
                            <input placeholder='E-Mail' type='text' />
                            <input placeholder='Telefone' type='text' />
                            <input type='submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main
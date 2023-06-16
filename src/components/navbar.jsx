import '../styling/navbar.css'

function App(param) {
    // If the param == '/home'
    // Home classname == 'active
    return (
        <div className="navbar">
            <div className="navbar_links">
                <CustomLink href='/home' >Home</CustomLink>
                <CustomLink href='/services' >Services</CustomLink>
                <CustomLink href='/portfolio' >Portfoio</CustomLink>
                <CustomLink href='#' >Contact</CustomLink>
            </div>
        </div>
    )
}

function CustomLink({ href, children, ...props }) {
    var path = window.location.pathname
    return (
        <a className={path === href ? 'active' : ''} href={href} {...props}>{children}</a>
    )
}

export default App
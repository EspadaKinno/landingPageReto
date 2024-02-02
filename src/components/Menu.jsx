import "./Menu.css"

export const Menu = () => {
  return (
    <>
        
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            
        </nav>
        <div className="container-svg">
          <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fillRule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg>
        </div>            
    </>
  )
}

import { Menubar } from 'primereact/menubar';


const Navigation = () => {
    const navlist = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
            window.location.href='/';
        }},
        {label: 'About', icon: 'pi pi-fw pi-calendar', command: () =>{
            window.location.href='/about'
        }},
        { label: 'Search', icon: 'pi pi-fw pi-phone', command: () =>{
            window.location.href='/search'
        }}
      ]

    return(
        <div>
           <header>
              <nav>
                <ul>
                <Menubar model={navlist} />
                </ul>
              </nav>
           </header>
        </div>
    )
}

export default Navigation;
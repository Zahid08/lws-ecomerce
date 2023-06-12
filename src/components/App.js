import Navbar from "./partials/NavBar";

export default function App(props){
    return(
        <>
            <Navbar/>
            {props.children}
        </>
    );
}
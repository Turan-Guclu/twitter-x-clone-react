import Logo from "~/layouts/main/sidebar/logo/index.jsx";
import Menu from "~/layouts/main/sidebar/menu/index.jsx";


function Sidebar() {
    return (
        <asside className="w-[275px] min-h-screen px-2 ">
        <Logo/>
        <Menu/>

        </asside>
    )
}

export default Sidebar
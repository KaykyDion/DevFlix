import { HeaderStyle, HeaderTop, SearchBar, SettingsIcon } from "./styles";
import Nav from "../Nav";

const HeaderComponent = () => {
   return (
     <HeaderStyle>
       <HeaderTop>
         <SearchBar type="text" placeholder="Pesquisar" />
         <SettingsIcon />
       </HeaderTop>
       <Nav />
     </HeaderStyle>
   );
};

export default HeaderComponent;
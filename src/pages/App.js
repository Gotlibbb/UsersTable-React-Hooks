import { Header } from "../organisms/Header";
import { SideBar } from "../organisms/SideBar";
import { UsersTableContainer } from "../organisms/UsersTable/UsersTableContainer";
import style from "./styles.module.css";
import "typeface-roboto";

export const App = () => {
  return (
    <div className={style.App}>
      <Header />
      <div className={style.flexBlock}>
        <SideBar />
        <div className={style.Content}>
          <UsersTableContainer />
        </div>
      </div>
    </div>
  );
};

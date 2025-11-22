import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import PageLoader from "./PageLoader";
import CartOverview from "../features/cart/CartOverview";
import MobileNavMenu from "./MobileNavMenu";
import { useSelector } from "react-redux";

function AppLayout () {
    const navigation = useNavigation();
    const {menuToggle} = useSelector((state) => state.UI)

    const isLoading = navigation.state === 'loading';

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
        {isLoading && <PageLoader />}
      <Header />
      <main>
        {menuToggle ? <MobileNavMenu />
        : <Outlet />}
      </main>
      <CartOverview />
    </div>
  )
}

export default AppLayout;
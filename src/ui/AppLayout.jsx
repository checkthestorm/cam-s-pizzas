import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import PageLoader from "./PageLoader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout () {
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
        {true && <PageLoader />}
      <Header />
      <main>
        <Outlet /> 
      </main>
      <CartOverview />
    </div>
  )
}

export default AppLayout;
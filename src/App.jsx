import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/defaultLayout";
import Detail from "./pages/Product/Detail";
import Create from "./pages/Product/Create";
import NotFound from "./pages/notFound/";
import Airdrop from "./pages/Airdrop/";
import { useContext } from "react";
import { LoadingContext } from "./context/LoadingContext";
import Loading from "./components/Loading";

function App() {
  const { loading } = useContext(LoadingContext);
  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;

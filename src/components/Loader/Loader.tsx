import Spinner from "react-loader-spinner";
import { loader } from "./LoaderStyle";

const Loader = () => {
  return (
    <div style={loader}>
      <Spinner
        type="Circles"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={3000}
      />
    </div>
  );
};

export default Loader;

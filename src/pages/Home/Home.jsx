// import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            paddingLeft: "40px",
            paddingRight: "10px",
          }}
        >
          <i style={{ fontSize: "30px" }}>WelCome to Your Mail Box</i>
        </div>
        <hr
          style={{ margin: "0px", width: "100%", border: "1px solid black" }}
        />
      </div>
    </>
  );
};

export default Home;

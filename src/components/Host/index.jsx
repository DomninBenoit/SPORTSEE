/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/index";
import "./style.scss";

const Host = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function init() {
      let response = await getUser(id);
      setUser(response.data);
    }
    init();
  }, []);

  return (
    <>
      <div className="welcomeHost">
        <p>Bonjour </p>
        <p className="firstname">{user?.userInfos?.firstName}</p>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
    </>
  );
};

export default Host;

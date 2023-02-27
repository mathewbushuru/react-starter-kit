import { useNavigate } from "react-router-dom";

import { MainLayout } from "layouts";
import { PrimaryButton } from "components/UI";

export const ComingSoon = ({ item }) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>{item} coming soon</p>
        <PrimaryButton onClick={() => navigate("/")}>
          Back to search query
        </PrimaryButton>
      </div>
    </MainLayout>
  );
};

import { useNavigate } from "react-router-dom";

import { MainLayout } from "@/layouts";
import { Button } from "@/components/UI";

interface ComingSoonProps {
  item: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ item }) => {
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
        <Button onClick={() => navigate("/")}>Back to home</Button>
      </div>
    </MainLayout>
  );
};

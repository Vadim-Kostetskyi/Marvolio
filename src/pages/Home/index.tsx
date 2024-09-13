import React, { useEffect } from "react";
import MainLayout from "modules/core/components/MainLayout";
import Main from "modules/core/containers";

const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';

import config from './config';
import Header from './components/Header/Header.component';
import Page from './components/Page/Page.component';
import Footer from './components/Footer/Footer.component';

import { devices } from './breakpoints';
import { MenuItem, ApiCategory } from './types';

const Gutter = styled.div`
  width: 95px;
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.mobileL} {
    display: inherit;
  }
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const apiUrl = `${config.server.host}${config.server.path && '/'}${config.server.path}${config.server.port && ':'}${config.server.port}`;

const getMenu = async (): Promise<ApiCategory[]> => {
  const response = await fetch(`${apiUrl}/categories`);
  return await response.json();
}

const getMenuItemPictures = async (theme: string, category: string) => {
  const response = await fetch(`${apiUrl}/files/theme/${theme}/category/${category}`);
  return await response.json();
}

const menuMapping = (input: ApiCategory[]): MenuItem[] => input.map(i => ({
    year: i.theme,
    title: i.category,
}));

function Home() {
  const [openedMenu, toggleMenu] = useState(false);
  const defaultMenu: MenuItem[] = [];
  const [menu, setMenu] = useState(defaultMenu);

  useEffect(() => {
    getMenu().then(menu => {
      setMenu(menuMapping(menu));
      getMenuItemPictures(menu[0].theme, menu[0].category).then(pictures => {
        console.log(pictures);
      });
    });
  }, []);

  return (
    <HomeContainer>
      <Gutter />
      <ContentContainer>
        <Header
          title="PaulSabArt"
          toggleMenu={() => toggleMenu(!openedMenu)}
          opened={openedMenu}
        />
        <Page
          openedMenu={openedMenu}
          pictures={[{
            alt: "le bain",
            src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg",
          },
          {
            alt: "terrasse",
            src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg",
            artist: "Michel Sudre",
            title: "Véranda",
            technique: "acrylique",
          },
          {
            alt: "other",
            src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Yves%20(Acrylique).jpg",
          }]}
          menu={menu}
        />
        <Footer
          content={["Toulouse", "Université Paul Sabatier", "Villa du SCAS de 17h à 20h"]}
        />
      </ContentContainer>
      <Gutter />
    </HomeContainer>
  );
}

export default function AppRouter() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
  );
}
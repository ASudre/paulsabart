import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import config from './config';
import Header from './components/Header/Header.component';
import Page from './components/Page/Page.component';
import Footer from './components/Footer/Footer.component';

import { devices } from './breakpoints';
import { MenuItem, ApiCategory, ApiPicture, Picture } from './types';

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

const picturesMapping = (input: ApiPicture[]): Picture[] => input.map(p => ({
  src: `${apiUrl}/${config.server.imagesFolder}${p.file_path}/${p.theme}/${p.category}/${p.file_name}`,
  alt: p.file_name,
}));

type Props = {
  match: {
    params: {
      theme?: string,
      category?: string,
    }
  }
}

function Home(props: Props) {
  const { theme, category } = props.match.params;

  const [openedMenu, toggleMenu] = useState(false);

  const defaultMenu: MenuItem[] = [];
  const [menu, setMenu] = useState(defaultMenu);

  const defaultPictures: Picture[] = [];
  const [pictures, setPictures] = useState(defaultPictures);

  const defaultSelectedMenuItemIndex = 0
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(defaultSelectedMenuItemIndex);

  useEffect(() => {
    getMenu().then(m => {
      setMenu(menuMapping(m));
    });
  }, []);

  useEffect(() => {
    if (menu.length > 0) {
      const menuIndex = menu.findIndex(m => m.year === theme && m.title === category);
      setSelectedMenuItemIndex(menuIndex !== -1 ? menuIndex : defaultSelectedMenuItemIndex);
      getMenuItemPictures(menu[menuIndex].year, menu[menuIndex].title).then((p: ApiPicture[]) => {
        setPictures(picturesMapping(p));
      });
      toggleMenu(false);
    }
  }, [menu, theme, category]);

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
          pictures={pictures}
          menu={menu}
          selectedMenuItemIndex={selectedMenuItemIndex}
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
      <Switch>
        <Route path="/theme/:theme/category/:category" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
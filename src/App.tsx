import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header.component';
import Page from './components/Page/Page.component';
import Footer from './components/Footer/Footer.component';

const Gutter = styled.div`
  width: 95px;
`

const AppContainer = styled.div`
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

const PageContainer = styled.div`
  overflow-y: scroll;
  flex: auto;
  padding: 30px;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Gutter />
        <ContentContainer>
          <Header
            title="PaulSabArt"
          />
          <PageContainer>
            <Page
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
              menu={[
                {
                  year: 2019,
                  title: "Toulouse Lautrec"
                },
                {
                  year: 2019,
                  title: "Photos anciennes"
                },
                {
                  year: 2018,
                  title: "Vie en rose",
                }
              ]}
            />
          </PageContainer>
          <Footer
            content={["Toulouse", "Université Paul Sabatier", "Villa du SCAS de 17h à 20h"]}
          />
        </ContentContainer>
        <Gutter />
      </AppContainer>
    );
  }
}

export default App;

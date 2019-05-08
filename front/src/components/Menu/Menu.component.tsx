import React from 'react';
import styled from 'styled-components';

import { MenuItem } from '../../types';

type Props = {
  items: MenuItem[],
  selectedIndex: number,
}

const Item = styled.div`
  font-family: Helvetica Neue, Regular;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.83;
  letter-spacing: 1.7px;
  text-align: left;
  color: rgba(0, 0, 0, 0.53);
`

const SelectedItem = styled(Item)`
  color: black;
`

const UnSelectedItem = styled(Item)`
`

const Separator = styled.div`
  width: 52px;
  height: 0;
  border-bottom: solid 1px;
  margin: 0 5px 0 0;
`

const YearSeparator = styled(Separator)`
  border-color: black;
`

const TitleSeparator = styled(Separator)`
  width: 200px;
  border-color: #80808029;
`

const Year = styled.div`
  font-family: Superclarendon;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.8px;
  color: rgba(0, 0, 0, 0.92);
  margin: 0 5px;
`

const YearContainer = styled.div`
  display: flex;
  direction: row;
  align-items: center;
`

const showYear = (index: number, array: MenuItem[]) =>
  (index == 0 || array[index - 1].year != array[index].year);

export default function Menu(props: Props) {
  return (
    <div>
      {props.items.map((i, index, arr) => (
        <div key={`${i.year}_${i.title}`} >
          {showYear(index, arr) ? <YearContainer>
            <YearSeparator></YearSeparator>
            <Year>{i.year}</Year>
          </YearContainer> : null}
          <Item>
            {props.selectedIndex == index ?
              <SelectedItem>{i.title}</SelectedItem> :
              <UnSelectedItem>{i.title}</UnSelectedItem>
            }
            {(index != arr.length - 1 && !showYear(index + 1, arr))
              && <TitleSeparator></TitleSeparator>}
          </Item>
        </div>
      ))}
    </div>
  )
}

import styled from 'styled-components';

export const Foot = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 230px;
  color: #e5e4dc;
  background-color: #171a21;
`

export const FootNav = styled.div`
  background-color: #171a21;
  padding: 30px;
  padding-left: 175px;
`

export const FootSelection = styled.a`
  color: #e5e4dc;
  display: inline-block;
  background-color:#545454;
  padding: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 3px;
  text-decoration: none;
`

export const SteamLogo = styled.div`
  float: right;
  margin-top: -20px;
  padding-right: 145px;
`

export const Line = styled.div`
  height: 8px;
  border-top: 1px solid #585858;
  margin: 10px 175px 5px 175px;
`

export const Buttons = styled.a`
  color: #b8b6b4;
  text-decoration: none;
  color: #e5e4dc;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    color: #ffffff;
  }
`

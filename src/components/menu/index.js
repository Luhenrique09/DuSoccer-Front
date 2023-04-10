import React from 'react';
import styled from 'styled-components';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyMenu({hiddenAdd, setHiddenAdd}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  function openHiddenAdd(){
    setHiddenAdd(!hiddenAdd);
  }

  function init() {
    navigate("/home");
    window.location.reload();
    
  }
  function ChampionshipUser() {
    navigate("/ChampionshipUser");
  
  }
  return (
    <AppBar>
      <MenuButton>
        <Dropdown>
        <StyledFaBars onClick={() => setShowDropdown(!showDropdown)}/>
        <DropdownContent show={showDropdown}>
          <DropdownItem onClick={init}>Inicio</DropdownItem>
          <DropdownItem onClick={openHiddenAdd}>+ Crie seu Campeonato</DropdownItem>
          <DropdownItem onClick={ChampionshipUser}>Meus Campeonatos</DropdownItem>
          <DropdownItem>Sair</DropdownItem>
        </DropdownContent>
      </Dropdown>
      </MenuButton>
      <Title onClick={init}>DuSoccer</Title>
      <SearchWrapper>
        <SearchIconWrapper>
          <FaSearch />
        </SearchIconWrapper>
        <InputBaseWrapper placeholder="Search…" aria-label="search" />
      </SearchWrapper>
    </AppBar>
  );
}


const AppBar = styled.div`
  background-color: #201b2c;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
 box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.25); 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  background-color: #201B2C;
  z-index: 1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;

const DropdownItem = styled.a`
  color: #00FF88;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.2);
  &:hover {
    background-color: #00FF88;
    color:#201B2C;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  :hover{
    cursor: pointer;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  border-radius: 50px;
  background-color: white;  
  margin-left: 1rem;
  width: 500px;
  `;

const SearchIconWrapper = styled.div`
  color: #201b2c;
  padding: 0.5rem;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBaseWrapper = styled.input`
  color: inherit;
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0.5rem calc(2rem + 0.5rem);
  width: 100%;


    &:focus {
      width: 20ch;
    }
  
`;

const StyledFaBars = styled(FaBars)`
  color: #00ff88;
  font-size: 24px;
  cursor: pointer;
`;

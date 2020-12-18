import React from 'react';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="toolbar">
          <div>
            {/* grupo esquerda */}
            <span>YouDev</span>
          </div>
          <div className="">
            {/* grupo direita */}
            <Button color="primary" variant="contained">
              Nova Postagem
            </Button>
            <span>img-1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

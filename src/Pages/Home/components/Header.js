import React from 'react';

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
            <button>Nova Postagem</button>
            <span>img1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

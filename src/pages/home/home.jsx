import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { SideMenu } from '../../components/sideMenu/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="Screening" />
      <div className="flex-grow-1">
        <div className="container">
          <SideMenu />
        </div>
      </div>
      <Footer text="Teste realizado por Mayrus Michel para ST-One - 30/07/2024" />
    </div>
  );
}

<div align="center">
  <img src=".github/logo-ignite-lab-react.svg"/>
  <h3>Ignite Lab - Do Figma ao React (Design System)</h3>
</div>
<br/>
<div align="center">
   <a href="https://github.com/mathrb22">
      <img alt="Made by mathrb22" src="https://img.shields.io/badge/made%20by-mathrb22-yellow"/>
   </a>
   <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/mathrb22/IgniteLab-Design-System"/>
   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/mathrb22/IgniteLab-Design-System"/>
   <a href="https://github.com/mathrb22/IgniteLab-Design-System/commits/main">
      <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/mathrb22/IgniteLab-Design-System"/>
   </a>
   <a href="https://github.com/mathrb22/IgniteLab-Design-System/issues">
      <img alt="GitHub Issues" src="https://img.shields.io/github/issues/mathrb22/IgniteLab-Design-System"/>
   </a>
   <a href="https://github.com/mathrb22/IgniteLab-Design-System/pulls">
      <img alt="Pull Requests Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"/>
   </a>
   </br>
   </br>
   <a href="#-tecnologias-utilizadas">
      <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
      <img alt="Vite.js" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
      <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
      <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
      <img alt="Storybook" src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"/>
      <img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
   </a>
</div>

</br>
<div align="center">

[**Sobre**](#-sobre) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Tecnologias e ferramentas utilizadas**](#-tecnologias-e-ferramentas-utilizadas) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Features**](#-features) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Design**](#-design) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Demo**](#-demo) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Instalação e execução**](#-instalação-e-execução) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Como contribuir**](#-como-contribuir) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Contato**](#-contato) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Licença**](#-licença)

</div>

## 📃 Sobre

<img src=".github/wallpaper-ignitelab.png" alt="Ignite Lab" />

<br/>

Este é o projeto desenvolvido durante o Ignite Lab, um evento online produzido pela [**Rocketseat**](https://github.com/Rocketseat), durante os dias 10 a 14 de outubro de 2022.

O projeto consiste na criação e implementação de um Design System. Para isso, inicialmente foram desenvolvidos os componentes e suas variações no Figma, e em seguida implementados no código, utilizando o React e a ferramenta Storybook para a documentação dos componentes.

## 🚀 Tecnologias e ferramentas utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- [**Figma**](https://www.figma.com/): ferramenta de prototipação e design de interfaces.

- [**React**](https://reactjs.org/): uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros;

- [**TypeScript**](https://www.typescriptlang.org/): um super conjunto da linguagem JavaScript que fornece classes, interfaces e tipagem estática opcional. Utilizado em conjunto com React no frontend web;

- [**Vite.JS**](https://vitejs.dev/): ferramenta de construção para front-end moderna que oferece uma experiência de desenvolvimento mais rápida e mais eficiente;

- [**TailwindCSS**](https://tailwindcss.com/): um framework CSS muito flexível que permite criar rapidamente interfaces de usuário complexas e responsivas;

- [**Storybook**](https://storybook.js.org/): uma ferramenta voltada para o desenvolvimento de componentes de interface de usuário isolados, usada por empresas como GitHub, Dropbox, airbnb, Mozilla, entre outras;

- [**RadixUI**](https://www.radix-ui.com/): um conjunto de componentes React acessíveis, flexíveis e com baixo acoplamento, que podem ser usados ​​para construir interfaces de usuário complexas.

- [**Visual Studio Code**](https://code.visualstudio.com/): um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, recomendado para o desenvolvimento de aplicações web;

## ✨ Features

- [x] Criação de tokens personalizados no design system utilizando o TailwindCSS;
- [x] Implementação do design pattern de composição no React (Compound Component);
- [x] Documentação dos componentes e suas variantes no Storybook;
- [x] CI/CD: configuração do deploy do Storybook por meio de um workflow do Github Actions para o Github Pages;
- [x] Utilização do [storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y/) para testar os componentes em relação aos padrões de acessibilidade na web;
- [x] Implementação de [testes de interações](https://storybook.js.org/docs/react/writing-tests/interaction-testing) automatizados utilizando a integração do **Jest** com o Storybook e o [Test Runner](https://storybook.js.org/docs/react/writing-tests/test-runner);
- [x] Implementação de uma API Mock com o **Mock Service Worker** para simular requisições HTTP, por meio do [MSW Storybook Addon](https://github.com/mswjs/msw-storybook-addon);

## 🎨 Design

<img alt="Login UI" src=".github/login-page.png">

O design do projeto foi desenvolvido no Figma, e pode ser acessado através do link: [**Ignite Lab - Design System**](https://www.figma.com/file/GtextqwoVpkKJrFD8Nt9IO/Ignite-Lab---Design-System?node-id=14%3A72).

## 🎉 Demo

Clique nos links para acessar o design system e a interface do projeto:

<a href="https://mathrb22.github.io/IgniteLab-Design-System/">
<img src="https://img.shields.io/badge/-Design%20System%20(Storybook)-FF4785?style=for-the-badge&logo=storybook&logoColor=white"/>
</a>
<a href="https://mathrb22-ignitelab-design-system.vercel.app/">
<img src="https://img.shields.io/badge/UI%20(Vercel)-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

## 🔧 Instalação e execução

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).

Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
git clone https://github.com/mathrb22/IgniteLab-Design-System.git
```

Para instalar as dependências e executar o projeto terá que ter instalado em sua máquina o [**Node.js**](https://nodejs.org/en/), que vem acompanhado do NPM. Com ele instalado:

- Instale as dependências do projeto:

  ```bash
  npm install
  ```

- Execute o projeto:

  ```bash
  npm run dev

  ```

- Execute a interface do Storybook:

  ```bash
  npm run storybook
  ```

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## 📲 Contato

Entre em contato comigo por e-mail ou pelo meu LinkedIn:

<a href="mailto:math.ribeiro.dev@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/></a>
<a href="https://www.linkedin.com/in/matheus-ribeiro-dev/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>

## 📝 Licença

<a href="https://github.com/mathrb22/IgniteLab-Design-System/blob/main/LICENSE.md">
  <img alt="GitHub License" src="https://img.shields.io/github/license/mathrb22/IgniteLab-Design-System">
</a>

Esse projeto está sob a licença **MIT**. Veja o arquivo _**LICENSE**_ para mais detalhes.

---

<h5 align="center">
  &copy;2022 - <a href="https://github.com/mathrb22/">Matheus Ribeiro</a>
</h5>

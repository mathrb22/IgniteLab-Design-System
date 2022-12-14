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
[**Instala????o e execu????o**](#-instala????o-e-execu????o) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Como contribuir**](#-como-contribuir) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Contato**](#-contato) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Licen??a**](#-licen??a)

</div>

## ???? Sobre

<img src=".github/wallpaper-ignitelab.png" alt="Ignite Lab" />

Este ?? o projeto desenvolvido durante o Ignite Lab, um evento online produzido pela [**Rocketseat**](https://github.com/Rocketseat), durante os dias 10 a 14 de outubro de 2022.

O projeto consiste na cria????o e implementa????o de um Design System. Para isso, inicialmente foram desenvolvidos os componentes e suas varia????es no Figma, e em seguida implementados no c??digo, utilizando o React e a ferramenta Storybook para a documenta????o dos componentes.

## ???? Tecnologias e ferramentas utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- [**Figma**](https://www.figma.com/): ferramenta de prototipa????o e design de interfaces.

- [**React**](https://reactjs.org/): uma biblioteca JavaScript de c??digo aberto com foco em criar interfaces de usu??rio (frontend) em p??ginas web. ?? mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. ?? utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros;

- [**TypeScript**](https://www.typescriptlang.org/): um super conjunto da linguagem JavaScript que fornece classes, interfaces e tipagem est??tica opcional. Utilizado em conjunto com React no frontend web;

- [**Vite.JS**](https://vitejs.dev/): ferramenta de constru????o para front-end moderna que oferece uma experi??ncia de desenvolvimento mais r??pida e mais eficiente;

- [**TailwindCSS**](https://tailwindcss.com/): um framework CSS muito flex??vel que permite criar rapidamente interfaces de usu??rio complexas e responsivas;

- [**Storybook**](https://storybook.js.org/): uma ferramenta voltada para o desenvolvimento de componentes de interface de usu??rio isolados, usada por empresas como GitHub, Dropbox, airbnb, Mozilla, entre outras;

- [**RadixUI**](https://www.radix-ui.com/): um conjunto de componentes React acess??veis, flex??veis e com baixo acoplamento, que podem ser usados ??????para construir interfaces de usu??rio complexas.

- [**Visual Studio Code**](https://code.visualstudio.com/): um editor de c??digo-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, recomendado para o desenvolvimento de aplica????es web;

## ??? Features

- [x] Cria????o de tokens personalizados no design system utilizando o TailwindCSS;
- [x] Implementa????o do design pattern de composi????o no React (Compound Component);
- [x] Documenta????o dos componentes e suas variantes no Storybook;
- [x] CI/CD: configura????o do deploy do Storybook por meio de um workflow do Github Actions para o Github Pages;
- [x] Utiliza????o do [storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y/) para testar os componentes em rela????o aos padr??es de acessibilidade na web;
- [x] Implementa????o de [testes de intera????es](https://storybook.js.org/docs/react/writing-tests/interaction-testing) automatizados utilizando a integra????o do **Jest** com o Storybook e o [Test Runner](https://storybook.js.org/docs/react/writing-tests/test-runner);
- [x] Implementa????o de uma API Mock com o **Mock Service Worker** para simular requisi????es HTTP, por meio do [MSW Storybook Addon](https://github.com/mswjs/msw-storybook-addon);

## ???? Design

<img alt="Login UI" src=".github/login-page.png">

O design do projeto foi desenvolvido no Figma, e pode ser acessado atrav??s do link: [**Ignite Lab - Design System**](https://www.figma.com/file/GtextqwoVpkKJrFD8Nt9IO/Ignite-Lab---Design-System?node-id=14%3A72).

## ???? Demo

Clique nos links para acessar o design system e a interface do projeto:

<a href="https://mathrb22.github.io/IgniteLab-Design-System/">
<img src="https://img.shields.io/badge/-Design%20System%20(Storybook)-FF4785?style=for-the-badge&logo=storybook&logoColor=white"/>
</a>
<a href="https://mathrb22-ignitelab-design-system.vercel.app/">
<img src="https://img.shields.io/badge/UI%20(Vercel)-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

## ???? Instala????o e execu????o

Para baixar o c??digo-fonte do projeto em sua m??quina, primeiramente ter?? que ter instalado o [**Git**](https://git-scm.com/).

Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
git clone https://github.com/mathrb22/IgniteLab-Design-System.git
```

Para instalar as depend??ncias e executar o projeto ter?? que ter instalado em sua m??quina o [**Node.js**](https://nodejs.org/en/), que vem acompanhado do NPM. Com ele instalado:

- Instale as depend??ncias do projeto:

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

## ???? Como contribuir

- Fa??a um **_fork_** desse reposit??rio;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Fa??a um **commit** com suas altera????es: `git commit -m 'feat: Minha nova feature'`;
- Fa??a um **push** para o seu branch: `git push origin minha-feature`;
- Fa??a um **pull request** com sua feature;

Pull requests s??o sempre bem-vindos. Em caso de d??vidas ou sugest??es, crie uma _**issue**_ ou entre em contato comigo.

## ???? Contato

Entre em contato comigo por e-mail ou pelo meu LinkedIn:

<a href="mailto:math.ribeiro.dev@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/></a>
<a href="https://www.linkedin.com/in/matheus-ribeiro-dev/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>

## ???? Licen??a

<a href="https://github.com/mathrb22/IgniteLab-Design-System/blob/main/LICENSE.md">
  <img alt="GitHub License" src="https://img.shields.io/github/license/mathrb22/IgniteLab-Design-System">
</a>

Esse projeto est?? sob a licen??a **MIT**. Veja o arquivo _**LICENSE**_ para mais detalhes.

---

<h5 align="center">
  &copy;2022 - <a href="https://github.com/mathrb22/">Matheus Ribeiro</a>
</h5>

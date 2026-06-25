# 🚀 Laboratório de Práticas Web - 2º Semestre (faculty2s)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Ambiente-Acad%C3%AAmico-blue?style=flat-square" alt="Ambiente">
  <img src="https://img.shields.io/badge/Curso-ADS-orange?style=flat-square" alt="Curso">
</p>

### 🔍 Sobre o Repositório
Este repositório serve como um compilado de projetos e práticas desenvolvidos durante o segundo semestre da faculdade. O objetivo principal foi consolidar os fundamentos da stack de desenvolvimento web (HTML5, CSS3 e JavaScript), evoluindo desde a estruturação de layouts semânticos até a manipulação dinâmica de elementos da página através do DOM (Document Object Model).

---

### 📂 Estrutura e Funcionalidades dos Projetos

#### 🧮 1. Calculadora Dinâmica (`calculadora.html` / `calculadora.js`)
Uma aplicação prática de operações matemáticas interativas na web.
* **Conceitos aplicados:** Arrow functions, captura de inputs numéricos, manipulação do DOM e o uso avançado de **operadores ternários encadeados** para determinar a operação matemática baseada no índice selecionado (`selectedIndex`) de um elemento `<select>`.
* **Operações:** Adição, Subtração, Divisão (com validação para evitar divisão por zero), Multiplicação e Exponenciação (`Math.pow`).

#### ⚖️ 2. Calculadora de IMC (`imc.html` / `imc.js`)
Interface para cálculo de Índice de Massa Corporal que avalia a situação física do usuário.
* **Conceitos aplicados:** Funções puras, manipulação de strings com `.toFixed(2)` e uma robusta **estrutura condicional encadeada (`if/else if`)** para categorizar os resultados de saúde do usuário com base nos parâmetros estabelecidos pela OMS (Abaixo do peso até Obesidade mórbida).

#### 📋 3. Sistema de Cadastro e Formulários Semânticos (`cadastro.html` / `cadastro.css`)
Uma página focada na coleta estruturada de dados do usuário e estilização moderna.
* **Conceitos aplicados:** Uso de tags semânticas avançadas de formulários como `<fieldset>`, `<legend>`, e tipos de inputs específicos (`date`, `tel`, `email`).
* **Estilização:** Alinhamento com **CSS Grid** (`grid-template-columns`), uso de fontes externas customizadas (`@font-face`) e estilização de inputs com esquema dark/contrastado.

#### ⚽ 4. Página Old Fut (`home.html` / `home.css`)
Interface informativa que simula uma página esportiva clássica.
* **Conceitos aplicados:** Criação e estilização de tabelas HTML (`<table>`, `colspan`, propriedades de cores de fundo), inclusão de mídias externas através de `<iframe>` (reprodução de vídeo do YouTube) e manipulação avançada de seletores CSS como **pseudo-classes (`:hover`)** e **pseudo-elementos (`::first-line`)**.

#### 🛒 5. Cálculo de Inventário de Peças (`index.js`)
Algoritmo procedural JavaScript focado na simulação de leitura e processamento de dados (estilo desafios do *Beecrowd* / *Uri Judge*).
* **Conceitos aplicados:** Manipulação de tipos primitivos (`parseInt`, `Number`), passagem de parâmetros em funções e formatação monetária.

---

### 🛠️ Tecnologias Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
</p>

---

### 🚀 Como Executar Localmente no VS Code

1. **Clonar o Repositório:** Abra o terminal na sua pasta de preferência e digite:
   ```bash
   git clone [https://github.com/brunno333/faculty2s.git](https://github.com/brunno333/faculty2s.git)

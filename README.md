# BoilerplateWebPack
Um template de configuração do WebPack com Babel.

<h2>O que é Babel?</h2>
<p> 
  Babel é um transcompilador JavaScript gratuito e de código aberto que é usado principalmente para converter código ECMAScript 2015+ em código JavaScript 
  compatível com versões anteriores que pode ser executado por mecanismos JavaScript mais antigos.
  Ou seja, ele converte o seu código JavaScript Atual para um outro código utilizando recursos do javascript que todos navegadores tem. Para que sua aplicação consiga
  rodar em qualquer navegador ou dispositivo.
  Um exemplo de recurso que não esta adaptado para todos os navegadores são as constantes 'const'. Se seu código utiliza const, talvez ele não seja utilizavel em todos
  os navegadores, o Babel soluciona esse problema.
  
  <br>Site Oficial: https://babeljs.io/
</p>

<h2>O que é WebPack</h2>
<p>
  O Webpack é um empacotador de módulos gratuito e de código aberto para JavaScript. Ele é feito principalmente para JavaScript, mas pode transformar ativos de front-end,
  como HTML, CSS e imagens, se os carregadores correspondentes forem incluídos. Em sua essência, o webpack é um empacotador de módulo estático para aplicativos JavaScript
  modernos. Quando o webpack processa seu aplicativo, ele cria internamente um gráfico de dependência de um ou mais pontos de entrada e, em seguida, combina todos os 
  módulos que seu projeto precisa em um ou mais pacotes , que são ativos estáticos para servir seu conteúdo.
  
  <br>Site Oficial: https://webpack.js.org/
</p>


<h3>Comandos:</h3>
<p>
  npm i --save-dev @babel/present-env @babel/cli @babel/core babel-loader webpack webpack-cli<br>
  npm i core-js regenerator-runtime
</p>

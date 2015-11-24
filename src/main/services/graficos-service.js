
myApp.service('graficoService', function (constantesFactory) {
this.circulo = function(svg,x,y,r,cor) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',x)
      .attr('cy',y)
      .attr('r', r)
      .attr('fill',cor);
};

this.circuloCentral = function(svg,x,y,r,cor) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',constantesFactory.centroX+x)
      .attr('cy',constantesFactory.centroY+y)
      .attr('r', r)
      .attr('fill',cor);
};

this.linha = function(svg,lx1,ly1,lx2,ly2,cor) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', lx1)
      .attr('x2', lx2)
      .attr('y1', ly1)
      .attr('y2', ly2)
      .attr('stroke',cor)
      .attr('marker-start', 'url(#triangle-start)');
};

this.linhaCentral = function(svg,lx1,ly1,lx2,ly2,cor) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', constantesFactory.centroX+lx1)
      .attr('x2', constantesFactory.centroX+lx2)
      .attr('y1', constantesFactory.centroY+ly1)
      .attr('y2', constantesFactory.centroY+ly2)
      .attr('stroke',cor)
      .attr('marker-start', 'url(#triangle-start)');
};

this.reta = function(svg,x,y,l,a,cor) {
  svg.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('width', l)
    .attr('height', a)
    .style('fill',cor);
};

this.cruzQuadro = function(svg,x,y,l,a,cor) {
  var borda = 2;
  this.reta(svg,x + l / 2,y,borda,a-y,constantesFactory.corVermelho);
  this.reta(svg,x,y + a / 2,l-x,borda,constantesFactory.corVermelho);
};

this.tela = function(svg)
{ var borda = 0;
  this.linha(svg,0,0,constantesFactory.largura-borda,0,constantesFactory.corTela);
  this.linha(svg,0,constantesFactory.altura-borda,constantesFactory.largura-borda,constantesFactory.altura-borda,constantesFactory.corTela);
  this.linha(svg,0,0,0,constantesFactory.altura-borda,constantesFactory.corTela);
  this.linha(svg,constantesFactory.largura-borda,0,constantesFactory.largura-borda,constantesFactory.altura-borda,constantesFactory.corTela);
};

this.grid = function(svg)
{
  var escala=10;
  for(var linhas=0;linhas<constantesFactory.largura;linhas+=escala) {
    this.linha(svg,linhas,0,linhas,constantesFactory.altura,constantesFactory.corOuro);
    }
  for(linhas=0;linhas<constantesFactory.altura;linhas+=escala) {
    this.linha(svg,0,linhas,constantesFactory.largura,linhas,constantesFactory.corOuro);
    }
};

this.limpaQuadro = function(svg,x,y,l,a,cor) {
  this.reta(svg,x,y,l,a,cor);
  this.tela(svg);
  this.grid(svg);
  this.cruzQuadro(svg,0,0,l,a,cor);
  };
});

function tela(svg)
{ var borda = 0;
  linha(svg,0,0,largura-borda,0,corTela);
  linha(svg,0,altura-borda,largura-borda,altura-borda,corTela);
  linha(svg,0,0,0,altura-borda,corTela);
  linha(svg,largura-borda,0,largura-borda,altura-borda,corTela);
};

function grid(svg)
{
  var escala=10;
  for(var linhas=0;linhas<largura;linhas+=escala)
  {
    linha(svg,linhas,0,linhas,altura,"gray");
  }
  for(var linhas=0;linhas<altura;linhas+=escala)
  {
    linha(svg,0,linhas,largura,linhas,"gray");
  }
};

function circulo(svg,x,y,r,color) {
  svg.append("circle")
      .attr("class", "origin")
      .attr("cx",x)
      .attr("cy",y)
      .attr("r", r)
      .attr("fill",color);
};

function circuloPinta(svg,x,y,r,color) {
  svg.append("circle")
      .attr("class", "origin")
      .attr("cx",centroX+x)
      .attr("cy",centroY+y)
      .attr("r", r)
      .attr("fill",color);
};

function linhaPinta(svg,lx1,ly1,lx2,ly2) {
  svg.append("line")
      .attr("class", "arrow")
      .attr("x1", centroX+lx1)
      .attr("x2", centroX+lx2)
      .attr("y1", centroY+ly1)
      .attr("y2", centroY+ly2)
      .attr("marker-start", "url(#triangle-start)");
};

function reta(svg,x,y,l,a,cor) {
svg.append("rect")
.attr("x", x)
.attr("y", y)
.attr("width", l)
.attr("height", a)
.style("fill",cor);
};

function linha(svg,lx1,ly1,lx2,ly2,cor) {
  svg.append("line")
      .attr("class", "arrow")
      .attr("x1", lx1)
      .attr("x2", lx2)
      .attr("y1", ly1)
      .attr("y2", ly2)
      .attr("stroke",cor)
      .attr("marker-start", "url(#triangle-start)");
};

function limpaQuadro(svg,x,y,l,a,color) {
  reta(svg,x,y,l,a,color);
  tela(svg);
  grid(svg);
};

function delta($a, $b, $c) {
  sq = ( $b * $b  ) - 4 * $a * $c;
  if (sq>0) {
    return Math.sqrt( sq);
  } else {return 0;};
};

function bhaskara(sinal, a, b, c) {
    var d = delta(a,b,c);
    if(sinal>0)  return (-b + d) / (2 * a );
           else  return (-b - d) / (2 * a );
};

function operacaoPositivo($numero) {
        if ($numero >0 ) return "+" + $numero;
        else return $numero;

};

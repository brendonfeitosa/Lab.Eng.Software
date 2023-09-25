function Pessoa() {
    let nome;
    let email;
    let datanasc;
    let telfixo;
    let celular;


    this.getNome = function() {
        return this.nome;
    }

    this.setNome = function(n) {
        this.nome = n;
    }

    this.getEmail = function() {
        return this.email;
    }

    this.setEmail = function(e) {
        this.email = e;
    }

    this.getDataNasc = function() {
        return this.datanasc;
    }

    this.setDataNasc = function(dtnas) {
        this.datanasc = dtnas;
    }

    this.getTelFixo = function() {
        return this.telfixo;
    }

    this.setTelFixo = function(fixo) {
        this.telfixo = fixo;
    }

    this.geCelular = function() {
        return this.celular;
    }

    this.setCelular = function(cel) {
        this.celular = cel;
    }
}

function Aluno() {
    let matricula;
    let curso;

    this.setMatricula = function(mat) {
        this.matricula = mat;
    }

    this.getMatricula = function() {
        return this.matricula;
    }

    this.setCurso = function(c) {
        this.curso = c;
    }

    this.getCurso = function() {
        return this.curso;
    }
}

function Professor() {
    let matricula;
    let atuacao;
    let curriculo;

    this.setMatricula = function(mat) {
        this.matricula = mat;
    }

    this.getMatricula = function() {
        return this.matricula;
    }

    this.setAtuacao = function(at) {
        this.atuacao = at;
    }

    this.getAtuacao = function() {
        return this.atuacao;
    }

    this.setCurriculo = function(lattes) {
        this.curriculo = lattes;
    }

    this.getCurriculo = function() {
        return this.curriculo;
    }
}

document.getElementById.apply("professor").addEventListener("click", capturarProfessor())


/////////////////////////

document.getElementById("aluno").addEventListener("click", selecionado1);
document.getElementById("professor").addEventListener("click", selecionado2);
document.getElementById("btnRst").addEventListener("click", () => {

  document.getElementById("result").innerHTML = "";
});


function selecionado1() {

  let div = '<div class="input-form" >';
  div += '<label for="curso" class="form-label">Curso</label>';
  div += '<input type="text" class="form-control" id="curso" placeholder="Curso">';
  div += '<label for="matricula" class="form-label">matricula</label>';
  div += '<input type="text" class="form-control" id="matricula" placeholder="matricula">';
  '</div>';
  document.getElementById("result").innerHTML = div;
}
function selecionado2() {

  let div = '<div class="input-form" >';
  div += '<label for="matricula" class="form-label">Matricula</label>';
  div += '<input type="text" class="form-control" id="matricula" placeholder="matricula">';
  div += '<label for="area" class="form-label">Área</label>';
  div += '<input type="text" class="form-control" id="area" placeholder="area">';
  div += '<label for="lates" class="form-label">Lates</label>';
  div += '<input type="text" class="form-control" id="lates" placeholder="lates"></div>';
  document.getElementById("result").innerHTML = div;
}

document.getElementById("btn").addEventListener("click", () => {

  const tipo = document.querySelector('input[type=radio][name=tipo]:checked').value;
  let result = "";
  if (tipo === "professor") {

    pr = new Professor();
    pr.setNome(document.getElementById('nome').value);
    pr.setEmail(document.getElementById('email').value);
    pr.setDtNasc(document.getElementById('datanasc').value);
    pr.setFixo(document.getElementById('fixo').value);
    pr.setCelular(document.getElementById('cel').value);
    pr.setMatricula(document.getElementById('matricula').value);
    pr.setArea(document.getElementById('area').value);
    pr.setLates(document.getElementById('lates').value);
   
    resultado(pr);

  } else if (tipo === "aluno") {
    al = new Aluno();
    al.setNome(document.getElementById('nome').value);
    al.setEmail(document.getElementById('email').value);
    al.setDtNasc(document.getElementById('datanasc').value);
    al.setFixo(document.getElementById('fixo').value);
    al.setCelular(document.getElementById('cel').value);
    al.setMatricula(document.getElementById('matricula').value);
    al.setCurso(document.getElementById('curso').value);
   
    resultado(al);

  }

});
function resultado(p) {
   let vet = p.dtNasc;
   vet = vet.split("-"); 
  
  let dt = vet[2]+"/"+vet[1]+"/"+vet[0];

  
  if (!p.area) {
    result = '<table class="table table-success table-striped">';
    result += '<thead><tr><th colspan="3"><h3>Aluno</h3></th></tr>';
    result += ' <tr><th scope="col">Matricula</th><th scope="col">Nome</th>';
    result += '<th colspan="2" scope="col">Data Nascimento</th></tr></thead>';

    result += '<tbody> <tr><th scope="col">' + p.matricula + '</th><th scope="col">' + p.nome + ' </th>';
    result += '<th colspan="2" scope="col">' + dt + '</th></tr>';
    result += '<tr><th colspan="3">Curso: ' + p.curso + '</th></tr><tr>';
    result += '<th colspan="3">Telefone fixo: ' + p.fixo + '</th></tr>';
    result += '<tr><th colspan="3">Telefone Celula ' + p.celular + '</th></tr></table>';
  } else {
    result = '<table class="table table-success table-striped">';
    result += '<thead><tr><th colspan="3"><h3>Professor</h3></th>';
    result += '</tr> <tr><th scope="col">Matricula</th><th scope="col">Nome </th>';
    result += '<th colspan="2" scope="col">Data Nascimento</th></tr></thead>';
    result += '</tr> <tbody><tr><th scope="col">'+ p.matricula + '</th><th scope="col">' + p.nome + ' </th>';
    result += '<th colspan="2" scope="col">' + dt + '</th></tr>';


    result += '<tr><th colspan="3">Área: ' + p.area + '</th>';
    result +='<tr><th colspan="3">Lates: ' + p.lates + '</th></tr><tr>';
    result += '<th colspan="3">Telefone fixo: ' + p.fixo + '</th></tr>';
    result += '<tr><th colspan="3">Telefone Celular ' + p.celular + '</th></tr></table>';

  }
  console.log(document.getElementById('result').innerHTML = result);
}




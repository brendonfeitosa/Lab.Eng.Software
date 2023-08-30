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

function capturarProfessor() {
    
}




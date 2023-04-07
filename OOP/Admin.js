import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true ) {
        super(nome, email, nascimento, role, ativo);

    }

    criarCurso(curso, vagas) {

    }
}

// const adm1 = new Admin("asd","asddd","vcxv")
// console.log(adm1.toString())
exports.getSuperName = (day, month)=>{

    return `${preName()[day-1]} ${postName()[month-1]}`
}

function preName(){
    return ["Cat","Letal","Elástico","Invisible","Capitán", "Doctor", "Sargento","Invencible", "Super","Agente","Maestro", "Robot", "Príncipe","Reina","Rey", "Fantasma", "Princesa","Mujer","Hombre","Ayudante","Terrible","Increíble", "Patético","Mr Torpe", "Mrs Torpe", "Iron", "Aprendiz","Hipster","Gurú","Hipnótico","Vigilante"]
};

function postName(){
    return ["del Mal", "Mágico", "Volador","Mutante", "Letal","Sangriento","Calcetín Mojado", "Celestial","sin Calzoncillos","Desconocido","del Javascript","de Hierro"]
};
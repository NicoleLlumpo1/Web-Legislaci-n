/* =====================================================
   DATOS: MATERIAL DE ESTUDIO POR UNIDAD
   ===================================================== */
const listaUnidadesMaterial = [
  { titulo: "1 · El Derecho", puntos: [
    "Normas: religiosas (sanción espiritual), morales (conciencia), sociales (rechazo), jurídicas (coactiva, impuestas por el Estado).",
    "Caracteres de la norma jurídica: heteronomía, exterioridad, imperatividad, generalidad, coercibilidad (amenaza de sanción) y coactividad (fuerza estatal).",
    "Valores jurídicos: Justicia (central), Orden-Seguridad, Paz-Poder, Solidaridad-Cooperación.",
    "Relación jurídica: acreedor (crédito) – deudor (deuda). Derecho en interferencia intersubjetiva.",
    "Derecho público: constitucional, penal, administrativo, internacional público, procesal. Privado: civil, comercial, laboral, internacional privado, minero, rural.",
    "Derecho natural: función negativa (barrera) y positiva (guía) sobre el derecho positivo.",
    "Fuentes formales: ley (vinculante); costumbre (solo si la ley remite o hay laguna); jurisprudencia (solo fallo plenario); doctrina (no vinculante). Fuentes materiales: factores sociales que influyen en la norma."
  ]},
  { titulo: "2 · Sistema jurídico y la ley", puntos: [
    "Ley: escrita, general, obligatoria, de autoridad competente, irretroactiva (art. 7 CCyC). Retroactiva solo si lo dice y nunca contra garantías constitucionales.",
    "Inexcusabilidad: la ignorancia de la ley no excusa. Rige desde el 8.º día de su publicación o la fecha que fije.",
    "Obligatoria para todos los habitantes del territorio (art. 4 CCyC).",
    "Pirámide de Kelsen: CN y tratados DDHH → tratados → leyes nacionales → constituciones provinciales → leyes provinciales → ordenanzas → sentencias/contratos.",
    "Control de constitucionalidad: lo hace el Poder Judicial; la inconstitucionalidad NO deroga, solo inaplica al caso. Derogar es potestad del Legislativo.",
    "Formación de ley: iniciativa → discusión → sanción (Legislativo) → promulgación expresa o tácita (10 días) o veto (Ejecutivo) → publicación → vigencia.",
    "Interpretación: legislativa/auténtica, doctrinaria, judicial. El juez no puede dejar de juzgar: usa analogía y valores jurídicos."
  ]},
  { titulo: "3 · Constitución Nacional", puntos: [
    "Rígida: reforma con declaración de necesidad por 2/3 de la totalidad de miembros del Congreso y Convención Constituyente.",
    "Estructura: Preámbulo, 1.ª parte (declaraciones, derechos, garantías), 2.ª parte (autoridades), disposiciones transitorias.",
    "Art. 1: forma representativa, republicana y federal (es una declaración).",
    "Derechos: civiles, políticos (ciudadanos desde 18), sociales; individuales vs. de incidencia colectiva.",
    "Garantías: amparo (legitimados: afectado, Defensor del Pueblo, asociaciones), hábeas data, hábeas corpus (reparador, preventivo, correctivo, desaparición forzada).",
    "República: soberanía popular, división de poderes, periodicidad, responsabilidad de funcionarios, igualdad, publicidad.",
    "Diputados: 4 años, renovación por mitades. Senadores: 6 años, renovación por tercios, 3 por provincia/CABA.",
    "Art. 123: autonomía municipal (desde 1994). Auditoría General, Defensoría del Pueblo (5 años), Jefe de Gabinete, Consejo de la Magistratura, Ministerio Público (Fiscal y de la Defensa)."
  ]},
  { titulo: "4 · Persona", puntos: [
    "Humana: existe desde la concepción, con derechos condicionados a nacer con vida. Imagen: consentimiento; libre a los 20 años de la muerte.",
    "Atributos de la humana: nombre, estado (civil y de familia), domicilio, capacidad, patrimonio. De la jurídica: nombre, domicilio, capacidad, patrimonio (sin estado).",
    "Patrimonio: necesario, inalienable, universalidad jurídica, garantía común de acreedores. TODA persona lo tiene.",
    "Domicilio: real (voluntario, mutable), legal (la ley lo presume sin prueba en contrario; único y forzoso), especial (contractual).",
    "Capacidad de derecho: siempre relativa (no existe incapacidad absoluta) y no se suple por representación. Capacidad de ejercicio: limitada por representación, apoyos o curador.",
    "Jurídica pública: Estado, provincias, CABA, municipios, entidades autárquicas, Iglesia Católica. Privada: sociedades, asociaciones, fundaciones, cooperativas, consorcios.",
    "Asociaciones civiles y fundaciones necesitan autorización estatal (IGJ). Principio de especialidad. Inoponibilidad de la personalidad: responden socios/administradores en forma ilimitada y solidaria."
  ]},
  { titulo: "5 · Hechos y actos jurídicos", puntos: [
    "Hecho jurídico (art. 257): acontecimiento que crea, modifica o extingue relaciones jurídicas. Naturales o humanos.",
    "Acto voluntario = discernimiento + intención + libertad + exteriorización. Discernimiento: 10 años (ilícitos), 13 (lícitos).",
    "Vicios: error/ignorancia/dolo afectan la intención; violencia/amenaza afectan la LIBERTAD. Su falta hace el acto involuntario (no ilícito).",
    "Simple acto lícito (art. 258): la ley atribuye los efectos. Acto jurídico (art. 259): fin inmediato de producir efectos jurídicos.",
    "Ilícitos: cuasidelito (culpa: negligencia, imprudencia, impericia) y delito (dolo).",
    "Presupuestos de responsabilidad: antijuridicidad (1717), daño (1737), causalidad (1726), deber de reparar (1716). Prevención del daño: art. 1710.",
    "Elementos del acto jurídico: sujetos, objeto, causa y forma. Instrumento público: fe pública y fecha cierta. Privado: libertad de formas, fecha cierta por certificación de firma, etc."
  ]},
  { titulo: "6 · Obligaciones y responsabilidad civil", puntos: [
    "Obligación (art. 724): acreedor (activo) exige prestación al deudor (pasivo). Elementos: sujetos, objeto (dar/hacer/no hacer) y causa fuente.",
    "Fuentes: ley, contratos, actos ilícitos, enriquecimiento sin causa, ejercicio abusivo de derechos, voluntad unilateral.",
    "Hacer: de medios (diligencia, sin garantizar resultado) vs. de resultado. Solidaria: se puede exigir el 100% a cualquier deudor; mancomunada: cada uno su parte.",
    "Modalidades: plazo (cierto), condición (incierto), cargo (obligación accesoria).",
    "Mora automática en obligaciones a plazo: por el solo vencimiento.",
    "Responsabilidad contractual vs. extracontractual (deber de no dañar). El ingeniero responde de ambas.",
    "Daño: emergente, lucro cesante, extrapatrimonial. Eximentes: caso fortuito/fuerza mayor, imposibilidad de pago, imprevisión.",
    "Extinción: pago, consignación, novación, transacción, compensación, confusión, renuncia, imposibilidad, remisión, dación en pago."
  ]},
  { titulo: "7 · Derechos reales", puntos: [
    "Real: persona↔cosa, erga omnes, solo creados por ley (numerus clausus), con persecución y preferencia. Personal: persona↔persona, relativo.",
    "Dominio: usar, gozar y disponer; exclusivo, excluyente, perpetuo. Se tiene DOMINIO de una cosa; PROPIEDAD es el concepto constitucional amplio (art. 17).",
    "Prescripción adquisitiva: 20 años sin título; 10 con justo título y buena fe.",
    "Condominio: derecho real de PROPIEDAD (no de garantía) por partes indivisas. Propiedad horizontal: unidades funcionales + partes comunes; expensas.",
    "Expropiación: ley de utilidad pública, relación expropiante-expropiado, transferencia, indemnización previa y justa.",
    "Garantía: hipoteca (inmuebles, escritura pública + registro, sin desplazamiento), prenda (muebles, con o sin desplazamiento/registro) y anticresis. Accesorios e indivisibles."
  ]},
  { titulo: "8 · Contratos civiles", puntos: [
    "Principios: autonomía, efecto vinculante, buena fe, normas supletorias. Elementos: consentimiento (oferta + aceptación), objeto, causa, forma.",
    "Clasificaciones: uni/bilateral, oneroso/gratuito, consensual/real, conmutativo/aleatorio, formal/no formal, nominado/innominado, principal/accesorio, de ejecución inmediata/diferida, instantánea/tracto sucesivo, de adhesión.",
    "Extinción: cumplimiento; rescisión (a futuro), revocación (donación/mandato, a futuro), resolución (retroactiva), imprevisión (art. 1091).",
    "Compraventa: onerosa, bilateral, conmutativa. Saneamiento: evicción y vicios ocultos.",
    "Locación: mínimo 3 años inmuebles; máximo 20 (habitacional) / 50 (otros); temporaria hasta 3 meses.",
    "Servicios: obligación de medios, sin dependencia. Obra: obligación de resultado; el contratista responde 60 días tras descubrir fallas.",
    "Comodato: préstamo de uso, gratuito, cosa NO fungible. Mutuo: préstamo de consumo, cosas fungibles/consumibles, oneroso o gratuito.",
    "Fianza: accesoria y de garantía; el fiador responde con todo su patrimonio (garantía personal). El garante afecta bienes puntuales (garantía real)."
  ]},
  { titulo: "9 · Contratos comerciales y títulos", puntos: [
    "Seguro: aleatorio, de adhesión, consensual. Prima, riesgo, indemnización, póliza. Cobertura desde las 12 h; denuncia del siniestro en 3 días.",
    "Cuenta corriente bancaria: registro de créditos/débitos, giro en descubierto. Tarjeta de crédito: comisión máx. 5%, 30 días para observar el resumen.",
    "Transporte: de personas (obligación de seguridad) y de cosas (carta de porte; 5 días para reclamar averías ocultas).",
    "Franquicia: marca + know-how + asistencia + canon; sin relación laboral. Leasing: NO es locación; opción de compra tras 3/4 del canon.",
    "Títulos circulatorios: autonomía, literalidad, incorporación, circulación (endoso).",
    "Cheque: ORDEN de pago al banco (girado); el librador firma. Común: 30 días. Pago diferido: hasta 360 días. Pagaré: PROMESA de pago; sin plazo es a la vista (12 meses)."
  ]},
  { titulo: "10 · Sociedades y concursos", puntos: [
    "Sociedad: aportes para producir/intercambiar bienes o servicios, con beneficios y pérdidas. Plazo estándar 99 años. Unipersonal solo SAU.",
    "Colectiva: responsabilidad subsidiaria, ilimitada y solidaria. SCS: comanditados (ilimitados) y comanditarios (limitados). SCI: capitalistas e industriales.",
    "SRL: cuotas, máx. 50 socios, responsabilidad limitada a cuotas; Gerencia; Reunión de socios; sindicatura optativa (obligatoria desde $10.000.000).",
    "SA/SAU: acciones, responsabilidad limitada a lo integrado; Directorio (administración), Asamblea (gobierno: ordinaria/extraordinaria), Sindicatura o Consejo de Vigilancia (fiscalización).",
    "SAPEM: Estado ≥ 51%. SAS: capital mínimo 2 SMVM.",
    "Socio aparente responde como socio; socio oculto responde ilimitada y solidariamente.",
    "Concursos: cesación de pagos. APE (privado, homologado), concurso preventivo (conserva administración con síndico), quiebra (desapoderamiento y liquidación)."
  ]},
  { titulo: "11 · Derechos intelectuales", puntos: [
    "Autor: protege la expresión, no las ideas. Incluye software. Vida + 70 años desde el 1 de enero siguiente a la muerte.",
    "Cita sin permiso con fines didácticos: máx. 1000 palabras. Retratos: libres 20 años tras la muerte.",
    "Patente: 20 años no renovables desde la solicitud (INPI). Requisitos: novedad mundial, actividad inventiva, aplicación industrial. Caduca por falta de explotación 2 años.",
    "Modelo de utilidad: mejora sobre algo conocido (10 años). Marca: 10 años renovables indefinidamente, con uso en los 5 años previos.",
    "Marca: publicación 1 día, 30 días de oposiciones, 1 año para subsanar. Invención en dependencia: pertenece al empleador si la solicitud es hasta 1 año tras el egreso."
  ]},
  { titulo: "12 · Derecho del trabajo", puntos: [
    "Principios: protectorio (in dubio pro operario, norma más favorable, condición más beneficiosa), irrenunciabilidad, continuidad, primacía de la realidad, gratuidad.",
    "Relación de dependencia: subordinación técnica, económica y jurídica. Distingue trabajo de servicios.",
    "Contrato por tiempo indeterminado es la regla. Período de prueba: 3 meses.",
    "Plazo fijo: por escrito, máx. 5 años, preaviso 1 a 2 meses. Tiempo parcial: menos de 2/3 de la jornada, sin horas extra.",
    "Otras: eventual, temporada, en grupo, teletrabajo. SAC en dos cuotas (30/6 y 31/12); hasta 20% del salario en especie.",
    "Pasantías: NO son contrato laboral; 2 meses a 1 año, máx. 20 h semanales / 4 h diarias."
  ]},
  { titulo: "13 · El ingeniero (profesión)", puntos: [
    "Se rige por el sistema general y por la normativa de su especialidad. La matriculación es necesaria en algunas especialidades y en otras aún no.",
    "Consejos profesionales: personas jurídicas públicas creadas por ley; se financian con matrículas, multas, asesoramiento y cursos.",
    "Sanciones (de menor a mayor): advertencia, amonestación, censura pública, multa, suspensión (1 mes a 2 años), cancelación (hasta 5 años, por la Justicia). Previo procedimiento en Tribunal de Disciplina.",
    "Apelación: advertencia/amonestación → Junta Central; multa/suspensión/cancelación → Justicia. Independientes de la responsabilidad civil o penal.",
    "Responsabilidad: culpa incluye impericia (art. 1724); a mayor conocimiento, mayor diligencia (art. 1725). Civil, penal y ética pueden coexistir.",
    "En juicio puede actuar como perito (de oficio, arts. 457-478 CPCCN), consultor técnico de parte o árbitro (no está obligado a aceptar). Dictamen sujeto a sana crítica."
  ]}
];

/* =====================================================
   DATOS: TARJETAS DE PLAZOS Y NÚMEROS
   ===================================================== */
const listaTarjetasPlazos = [
  ["Vigencia de una ley", "8.º día desde la publicación"],
  ["Promulgación tácita", "10 días sin veto del Ejecutivo"],
  ["Reforma constitucional", "2/3 de la totalidad de miembros de cada Cámara"],
  ["Mandato diputados / senadores", "4 años (mitades) / 6 años (tercios)"],
  ["Defensor del Pueblo", "5 años, una reelección"],
  ["Discernimiento acto lícito / ilícito", "13 años / 10 años"],
  ["Imagen de un fallecido", "Libre a los 20 años de la muerte"],
  ["Unión convivencial", "Mínimo 2 años de convivencia"],
  ["Prescripción adquisitiva", "20 años sin título / 10 con justo título y buena fe"],
  ["Locación de inmueble", "Mín. 3 años; máx. 20 habitacional / 50 otros"],
  ["Locación temporaria", "Máx. 3 meses"],
  ["Responsabilidad del contratista de obra", "60 días desde el descubrimiento de fallas"],
  ["Denuncia del siniestro (seguro)", "3 días"],
  ["Observar resumen de tarjeta", "30 días"],
  ["Comisión máxima de tarjeta al comercio", "5%"],
  ["Averías ocultas en transporte de cosas", "5 días tras la recepción"],
  ["Cheque común / pago diferido", "30 días / hasta 360 días"],
  ["Pagaré sin plazo", "A la vista; presentar dentro de 12 meses"],
  ["Opción de compra en leasing", "Tras pagar 3/4 del canon"],
  ["Duración estándar de una sociedad", "99 años"],
  ["SRL: máximo de socios", "50"],
  ["Sindicatura obligatoria", "Capital desde $10.000.000"],
  ["SAPEM", "Estado con al menos 51%"],
  ["SAS: capital mínimo", "2 salarios mínimos vitales y móviles"],
  ["Derecho de autor", "Vida + 70 años (desde el 1 de enero siguiente)"],
  ["Cita didáctica sin permiso", "Hasta 1000 palabras"],
  ["Patente", "20 años no renovables desde la solicitud"],
  ["Marca", "10 años renovables; uso en los 5 años previos"],
  ["Marca: oposiciones / subsanar", "30 días / 1 año"],
  ["Período de prueba laboral", "3 meses"],
  ["Contrato a plazo fijo", "Máx. 5 años, por escrito; preaviso 1 a 2 meses"],
  ["Pasantía", "2 meses a 1 año; máx. 20 h semanales"],
  ["Suspensión de matrícula / cancelación", "1 mes a 2 años / hasta 5 años"]
];

/* =====================================================
   DATOS: CUADROS COMPARATIVOS
   ===================================================== */
const listaCuadrosComparativos = [
  { titulo: "Derecho real vs. personal", columnas: ["Criterio", "Real", "Personal"], filas: [
    ["Relación", "Persona ↔ cosa", "Persona ↔ persona"],
    ["Oponibilidad", "Erga omnes", "Solo contra el deudor"],
    ["Origen", "Solo la ley (numerus clausus)", "Autonomía de las partes"],
    ["Facultades", "Persecución y preferencia", "Exigir la prestación"]] },
  { titulo: "Acto jurídico vs. simple acto lícito", columnas: ["", "Acto jurídico (art. 259)", "Simple acto lícito (art. 258)"], filas: [
    ["Qué es", "Voluntario y lícito con fin inmediato de producir efectos jurídicos", "Voluntario no prohibido; los efectos los pone la ley"],
    ["Ejemplos", "Contrato de alquiler, testamento, matrimonio", "Pescar, pintar un cuadro, hallar un tesoro"]] },
  { titulo: "Hipoteca vs. prenda", columnas: ["Criterio", "Hipoteca", "Prenda"], filas: [
    ["Objeto", "Inmuebles (art. 2205)", "Muebles (art. 2219)"],
    ["Posesión", "Queda con el deudor", "Con desplazamiento o sin desplazamiento (registro)"],
    ["Instrumento", "Escritura pública + inscripción", "Instrumento público o privado con firma certificada + registro"],
    ["En común", "Reales de garantía, accesorios, indivisibles", "Ídem"]] },
  { titulo: "Contrato de trabajo vs. contrato de servicios", columnas: ["Criterio", "Trabajo (LCT)", "Servicios (CCyC)"], filas: [
    ["Dependencia", "Técnica, económica y jurídica", "Autónomo, sin dependencia"],
    ["Régimen", "Orden público laboral, irrenunciable", "CCyC y autonomía de la voluntad"],
    ["Riesgo / pago", "Del empleador; salario", "Del prestador; honorarios"],
    ["Obligación", "Poner a disposición la fuerza de trabajo", "De medios"]] },
  { titulo: "Cheque vs. pagaré", columnas: ["", "Cheque", "Pagaré"], filas: [
    ["Naturaleza", "ORDEN de pago al banco", "PROMESA directa de pago"],
    ["Sujetos", "Librador (titular de la cuenta), girado (banco), beneficiario", "Suscriptor y beneficiario"],
    ["Plazo", "30 días (común) / hasta 360 (diferido)", "Pactado; si no, a la vista"]] },
  { titulo: "Sociedades: colectiva vs. SRL vs. SA", columnas: ["", "Colectiva", "SRL", "SA"], filas: [
    ["Capital", "Aportes", "Cuotas", "Acciones"],
    ["Responsabilidad", "Subsidiaria, ilimitada y solidaria", "Limitada a cuotas", "Limitada a acciones integradas"],
    ["Administración", "Socios", "Gerencia", "Directorio"],
    ["Gobierno", "Reunión de socios", "Reunión de socios", "Asamblea"]] },
  { titulo: "Extinción de contratos", columnas: ["Modo", "Efecto", "Nota"], filas: [
    ["Rescisión", "A futuro", "Bilateral por acuerdo; unilateral si la ley/contrato lo permite"],
    ["Revocación", "A futuro", "Típica de donación y mandato"],
    ["Resolución", "Retroactivo", "Por hecho posterior, p. ej. incumplimiento"]] }
];

/* =====================================================
   DATOS: VERDADERO O FALSO
   ===================================================== */
const listaPreguntasVerdaderoFalso = [
  { enunciado: "La costumbre como fuente puede ser vinculante en algunos casos.", respuesta: true, explicacion: "Solo si la ley se refiere a ella o ante una laguna legal." },
  { enunciado: "La doctrina y la jurisprudencia son fuentes vinculantes.", respuesta: false, explicacion: "Por regla no vinculan; la excepción es el fallo plenario." },
  { enunciado: "La coercibilidad es la amenaza de sanción ante el incumplimiento.", respuesta: true, explicacion: "Coactividad es la aplicación efectiva de la fuerza." },
  { enunciado: "En el Estado Federal solo existe un poder central unificado.", respuesta: false, explicacion: "Eso es Estado unitario. En el federal coexisten Nación soberana y provincias autónomas." },
  { enunciado: "La formación de una ley nacional está a cargo exclusivamente del Poder Legislativo.", respuesta: false, explicacion: "El Ejecutivo promulga o veta y ordena la publicación." },
  { enunciado: "En la etapa de sanción de una ley interviene el Poder Legislativo y el Poder Judicial.", respuesta: false, explicacion: "En la sanción interviene solo el Legislativo.", trampa: true },
  { enunciado: "El control de constitucionalidad lo realiza el Poder Ejecutivo.", respuesta: false, explicacion: "Es función del Poder Judicial." },
  { enunciado: "Un juez debe declarar la inconstitucionalidad de una ley para derogarla.", respuesta: false, explicacion: "La declara inaplicable al caso concreto; derogar es potestad del Legislativo.", trampa: true },
  { enunciado: "El hábeas corpus solo puede ser reparador, preventivo y correctivo.", respuesta: false, explicacion: "También existe por desaparición forzada de personas." },
  { enunciado: "El amparo sirve para cualquier reclamo judicial.", respuesta: false, explicacion: "Procede cuando no hay vías ordinarias: es una acción expedita y rápida." },
  { enunciado: "Algunas personas humanas pueden carecer de patrimonio.", respuesta: false, explicacion: "El patrimonio es necesario: todas las personas lo tienen." },
  { enunciado: "El Estado, como atributo de la persona humana, incluye estado civil, de familia y a veces nacional, provincial o municipal.", respuesta: false, explicacion: "Solo existen estado civil y estado de familia.", trampa: true },
  { enunciado: "La ley permite, excepcionalmente, la incapacidad de derecho absoluta.", respuesta: false, explicacion: "Sería muerte civil. Las incapacidades de derecho son siempre relativas y no se suplen por representación.", trampa: true },
  { enunciado: "La incapacidad de derecho de la persona humana es siempre relativa y no se subsana por representación.", respuesta: true, explicacion: "Lo que se suple por representación es la incapacidad de ejercicio." },
  { enunciado: "Las personas jurídicas privadas carecen de capacidad para adquirir derechos y contraer obligaciones.", respuesta: false, explicacion: "Siempre tienen capacidad, limitada por el principio de especialidad." },
  { enunciado: "El domicilio legal es el lugar donde la ley presume, sin admitir prueba en contrario, que reside una persona.", respuesta: true, explicacion: "Es único y forzoso (funcionarios, incapaces, etc.)." },
  { enunciado: "El acto jurídico puede o no tener consecuencias jurídicas.", respuesta: false, explicacion: "Por definición tiene fin inmediato de producir efectos jurídicos." },
  { enunciado: "La diferencia entre acto jurídico y simple acto lícito está en la finalidad de producir consecuencias jurídicas.", respuesta: true, explicacion: "En el simple acto lícito los efectos los atribuye la ley." },
  { enunciado: "La falta de discernimiento, intención o libertad hace al acto ilícito.", respuesta: false, explicacion: "Lo hace involuntario.", trampa: true },
  { enunciado: "Un acto realizado bajo violencia o amenazas carece de discernimiento.", respuesta: false, explicacion: "La violencia o amenaza vicia la LIBERTAD, no el discernimiento.", trampa: true },
  { enunciado: "Los elementos esenciales del acto jurídico son: instrumento público, objeto, deudor y acreedor.", respuesta: false, explicacion: "Son sujetos, objeto, causa y forma." },
  { enunciado: "Las únicas fuentes de las obligaciones son la ley y los contratos.", respuesta: false, explicacion: "También actos ilícitos, enriquecimiento sin causa, ejercicio abusivo de derechos y voluntad unilateral." },
  { enunciado: "Obligación: vínculo entre un sujeto activo que debe satisfacer una prestación y un sujeto pasivo.", respuesta: false, explicacion: "Roles invertidos: el que debe es el deudor (pasivo).", trampa: true },
  { enunciado: "Una obligación puede extinguirse por la muerte del deudor.", respuesta: false, explicacion: "Por regla se transmite a los herederos, salvo obligaciones intuitu personae.", trampa: true },
  { enunciado: "Los ingenieros responden civilmente solo ante incumplimiento contractual, no extracontractual.", respuesta: false, explicacion: "Antes que ingenieros son personas: responden también extracontractualmente." },
  { enunciado: "Los ingenieros en un proceso judicial solo pueden intervenir como peritos.", respuesta: false, explicacion: "También como consultores técnicos de parte (y como árbitros)." },
  { enunciado: "Por incumplir la ética profesional, los ingenieros solo reciben sanciones económicas.", respuesta: false, explicacion: "Hay advertencia, amonestación, censura, multa, suspensión y cancelación de matrícula." },
  { enunciado: "El dominio otorga las facultades de usar, gozar y disponer de la cosa.", respuesta: true, explicacion: "Es el derecho real pleno sobre cosa propia (art. 1941)." },
  { enunciado: "El condominio es un derecho real de garantía sobre bienes de varias personas.", respuesta: false, explicacion: "Es un derecho real de propiedad por partes indivisas." },
  { enunciado: "Hipoteca y prenda son los únicos derechos reales de garantía.", respuesta: false, explicacion: "Existe también la anticresis." },
  { enunciado: "El contrato de trabajo se presume celebrado por tiempo indeterminado.", respuesta: true, explicacion: "Regla general (art. 90 LCT)." },
  { enunciado: "El contrato de trabajo a plazo fijo siempre debe formalizarse por escrito.", respuesta: true, explicacion: "Además debe responder a la modalidad de la tarea; máx. 5 años." },
  { enunciado: "El contrato de seguro es aleatorio y de adhesión.", respuesta: true, explicacion: "Depende de un hecho incierto y el asegurador predispone las cláusulas." },
  { enunciado: "Los socios de la sociedad colectiva y de la S.A. tienen igual responsabilidad.", respuesta: false, explicacion: "Colectiva: subsidiaria, ilimitada y solidaria. S.A.: limitada a las acciones." },
  { enunciado: "La S.A. y S.A.U. dividen su capital en acciones; la S.R.L. en cuotas partes.", respuesta: true, explicacion: "Correcto." },
  { enunciado: "El banco es el librador del cheque de pago diferido.", respuesta: false, explicacion: "El banco es el girado; el librador es el titular de la cuenta que firma.", trampa: true },
  { enunciado: "El pagaré es una orden de pago y el cheque una promesa de pago.", respuesta: false, explicacion: "Invertido: cheque = orden; pagaré = promesa.", trampa: true }
];

/* =====================================================
   DATOS: MÚLTIPLE CHOICE
   ===================================================== */
const listaPreguntasMultipleChoice = [
  { enunciado: "«Representativa, Republicana y Federal» (art. 1 CN) es…", opciones: ["Una garantía", "Un derecho", "Una norma de excepción", "Una declaración de la CN"], correcta: 3, explicacion: "Los enunciados de principios de organización son declaraciones." },
  { enunciado: "Compraventa, locación y transporte son contratos…", opciones: ["Innominados y accesorios", "Reales y gratuitos", "Nominados y principales", "Aleatorios y unilaterales"], correcta: 2, explicacion: "Están tipificados y no dependen de otro contrato." },
  { enunciado: "Fuentes formales estrictamente vinculantes:", opciones: ["Ley, doctrina y costumbre", "Ley, fallo plenario y costumbre (si la ley remite o hay laguna)", "Solo jurisprudencia", "Doctrina y fallo plenario"], correcta: 1, explicacion: "La doctrina nunca vincula." },
  { enunciado: "La hipoteca se constituye sobre…", opciones: ["Cosas inmuebles", "Cosas muebles", "Créditos", "Cualquier cosa"], correcta: 0, explicacion: "Art. 2205." },
  { enunciado: "La prenda se constituye sobre…", opciones: ["Solo inmuebles", "Muebles registrables y no registrables", "Solo muebles no registrables", "Derechos reales"], correcta: 1, explicacion: "Art. 2219." },
  { enunciado: "Finalidad del principio protectorio laboral:", opciones: ["Proteger al empleador", "Equilibrar la desigualdad estructural empleador–trabajador", "Fijar salarios", "Eliminar el contrato de trabajo"], correcta: 1, explicacion: "In dubio pro operario, norma más favorable y condición más beneficiosa." },
  { enunciado: "El hábeas data es…", opciones: ["Una garantía del art. 43 CN", "Un derecho político", "Un tipo de hábeas corpus", "Una norma procesal"], correcta: 0, explicacion: "Protege el acceso, rectificación o supresión de datos personales." },
  { enunciado: "Orden correcto de formación de una ley nacional:", opciones: ["Sanción → iniciativa → promulgación", "Iniciativa → discusión → sanción → promulgación → publicación → vigencia", "Promulgación → sanción → publicación", "Discusión → iniciativa → veto"], correcta: 1, explicacion: "Arts. 77–84 CN." },
  { enunciado: "El leasing se distingue de la locación porque…", opciones: ["No tiene canon", "Incluye opción de compra", "Transfiere el dominio al inicio", "No requiere inscripción"], correcta: 1, explicacion: "El tomador puede comprar tras pagar 3/4 del canon." },
  { enunciado: "El ingeniero designado árbitro…", opciones: ["Está obligado a aceptar", "No está obligado a aceptar, pero si acepta debe cumplir", "No cobra honorarios", "Debe ser juez"], correcta: 1, explicacion: "Capítulo 13." }
];

/* =====================================================
   DATOS: CASOS INTEGRADORES
   ===================================================== */
const listaCasosIntegradores = [
  { titulo: "Caso 1 · Plex S.A. y la obra de pavimentación",
    enunciado: "Dos ingenieros forman Plex S.A. (consultoría vial), compran oficinas en Caballito, contratan mudanza con Logis Transports S.R.L.; adjudicataria de una obra en CABA, contrata a Bricks S.A. y compra hormigón patentado (paga con cheque y pagaré). A los 6 meses el hormigón cede y daña autos.",
    puntos: [
      "Mudanza: contrato de transporte de cosas (trasladar, custodiar y entregar en el mismo estado).",
      "Plex S.A.: sociedad anónima; capital en acciones; responsabilidad limitada; gobierno = Asamblea, administración = Directorio.",
      "Obligación de la mudanza: de hacer. Sujetos (Plex y Logis), objeto (el traslado), causa (el contrato).",
      "Daños: responde Bricks S.A. (vicios ocultos). Probar antijuridicidad, daño, causalidad y factor de atribución objetivo (riesgo de la cosa)."] },
  { titulo: "Caso 2 · Estrada S.A. y los préstamos",
    enunciado: "Cinco ingenieros de Estrada S.A. obtienen una beca provincial (España, 12 meses; presentarse el 8/4 bajo pena de caducidad). Piden préstamo hipotecario (sede) y prendario (notebooks) al Banco Macro. El 7/4 se cancelan los vuelos por tormentas extraordinarias.",
    puntos: [
      "Personas: humanas (ingenieros), jurídicas privadas (Estrada S.A., Banco Macro), jurídica pública (Estado provincial).",
      "Incumplimiento: caso fortuito o fuerza mayor (imprevisible e inevitable); sin culpa no hay responsabilidad.",
      "Derechos reales: dominio/condominio sobre la sede, dominio sobre las notebooks, hipoteca sobre el inmueble y prenda sobre las notebooks."] },
  { titulo: "Caso 3 · Sidimax S.R.L.",
    enunciado: "Transporta medicamentos; socios: 2 ingenieros UTN; marca registrada, 10 sucursales alquiladas, camiones comprados con prenda, empleados en dependencia, seguro contra incendio, contrato de servicios de refrigeración.",
    puntos: [
      "Contratos: transporte de cargas, locación, compraventa (camiones), prenda, seguro, trabajo, servicios.",
      "Marca: uso exclusivo por 10 años renovables (Ley 22.362).",
      "Órganos de la S.R.L.: Gerencia (administración/representación), Reunión de socios (gobierno), Sindicatura o Consejo de Vigilancia (fiscalización)."] },
  { titulo: "APE · Ciberataque al Estado (noticia + Cap. I–V)",
    enunciado: "Modelo de análisis: aplicá cada capítulo a una noticia.",
    puntos: [
      "Cap. I: afecta valores jurídicos de seguridad y paz; las normas son imperativas, generales, coercibles y coactivas.",
      "Cap. II: supremacía constitucional (art. 31 CN), irretroactividad (art. 7), inexcusabilidad (art. 8).",
      "Cap. III: forma federal, hábeas data y amparo (art. 43), Defensoría del Pueblo, Auditoría General.",
      "Cap. IV: organismos como personas jurídicas públicas.",
      "Cap. V: hecho humano, voluntario e ilícito; delito (dolo). Presupuestos: antijuridicidad, daño, causalidad, deber de reparar; prevención del daño (art. 1710)."] }
];

/* =====================================================
   DATOS: ESTRUCTURA DEL EPI
   ===================================================== */
const listaEstructuraExamen = [
  "1. Verdadero o falso: hay que justificar más de uno (los falsos, explicando por qué).",
  "2. Múltiple choice.",
  "3. Caso integrador con tres preguntas de desarrollo simple (3 a 4 líneas cada una).",
  "No se evalúan: usufructo y servidumbre, contratos de depósito y donación, ausencia con presunción de fallecimiento.",
  "Los contratos hay que saber clasificarlos: no preguntan qué es bilateral, sino que el contrato X es bilateral.",
  "Fuentes de las obligaciones: respondé con la lista del libro de cátedra (ley, contrato, actos ilícitos, enriquecimiento sin causa, ejercicio abusivo de derechos, voluntad unilateral).",
  "Muerte del deudor: si piden el artículo, confirmalo en el CCyC antes del examen.",
  "Desafío de repaso: las trampas de redacción (⚠️) fueron los errores más frecuentes en el APE."
];

/* =====================================================
   ESTADO DE PUNTAJES
   ===================================================== */
const estadoPuntajes = {
  verdaderoFalso: { aciertos: 0, respondidas: 0 },
  multipleChoice: { aciertos: 0, respondidas: 0 }
};

/* =====================================================
   UTILIDADES DE DOM
   ===================================================== */
function funcionCrearElemento(etiqueta, clase, texto) {
  const elementoCreado = document.createElement(etiqueta);
  if (clase) elementoCreado.className = clase;
  if (texto !== undefined) elementoCreado.textContent = texto;
  return elementoCreado;
}

function funcionActualizarPuntaje(clavePuntaje, idTexto) {
  const puntaje = estadoPuntajes[clavePuntaje];
  document.getElementById(idTexto).textContent = "Puntaje: " + puntaje.aciertos + " / " + puntaje.respondidas;
}

/* =====================================================
   RENDERIZADO: MATERIAL DE ESTUDIO Y BUSCADOR
   ===================================================== */
function funcionResaltarTexto(contenedor, texto, termino) {
  if (!termino) { contenedor.textContent = texto; return; }
  const posicion = texto.toLowerCase().indexOf(termino);
  if (posicion === -1) { contenedor.textContent = texto; return; }
  contenedor.append(texto.slice(0, posicion));
  contenedor.append(funcionCrearElemento("mark", "textoResaltadoBusqueda", texto.slice(posicion, posicion + termino.length)));
  contenedor.append(texto.slice(posicion + termino.length));
}

function funcionRenderizarMaterial(terminoBusqueda) {
  const contenedor = document.getElementById("contenedorListadoUnidades");
  contenedor.replaceChildren();
  const termino = terminoBusqueda.trim().toLowerCase();
  listaUnidadesMaterial.forEach(function (unidad) {
    const puntosCoincidentes = unidad.puntos.filter(function (punto) {
      return !termino || punto.toLowerCase().includes(termino) || unidad.titulo.toLowerCase().includes(termino);
    });
    if (puntosCoincidentes.length === 0) return;
    const tarjeta = funcionCrearElemento("details", "tarjetaUnidad");
    if (termino) tarjeta.open = true;
    tarjeta.append(funcionCrearElemento("summary", "tituloUnidad", unidad.titulo));
    const lista = funcionCrearElemento("ul", "listaPuntosUnidad");
    puntosCoincidentes.forEach(function (punto) {
      const elementoPunto = funcionCrearElemento("li");
      funcionResaltarTexto(elementoPunto, punto, termino);
      lista.append(elementoPunto);
    });
    tarjeta.append(lista);
    contenedor.append(tarjeta);
  });
}

/* =====================================================
   RENDERIZADO: TARJETAS DE PLAZOS
   ===================================================== */
function funcionRenderizarTarjetasPlazos() {
  const contenedor = document.getElementById("contenedorTarjetasPlazos");
  listaTarjetasPlazos.forEach(function (par) {
    const tarjeta = funcionCrearElemento("button", "tarjetaPlazo", par[0]);
    tarjeta.addEventListener("click", function () {
      const mostrandoRespuesta = tarjeta.classList.toggle("tarjetaPlazoRespondida");
      tarjeta.textContent = mostrandoRespuesta ? par[1] : par[0];
    });
    contenedor.append(tarjeta);
  });
}

/* =====================================================
   RENDERIZADO: CUADROS COMPARATIVOS
   ===================================================== */
function funcionRenderizarCuadrosComparativos() {
  const contenedor = document.getElementById("contenedorCuadrosComparativos");
  listaCuadrosComparativos.forEach(function (cuadro) {
    contenedor.append(funcionCrearElemento("h3", "tituloCuadroComparativo", cuadro.titulo));
    const envoltura = funcionCrearElemento("div", "envolturaTabla");
    const tabla = funcionCrearElemento("table", "tablaComparativa");
    const filaEncabezado = funcionCrearElemento("tr");
    cuadro.columnas.forEach(function (columna) { filaEncabezado.append(funcionCrearElemento("th", "", columna)); });
    tabla.append(filaEncabezado);
    cuadro.filas.forEach(function (fila) {
      const filaTabla = funcionCrearElemento("tr");
      fila.forEach(function (celda) { filaTabla.append(funcionCrearElemento("td", "", celda)); });
      tabla.append(filaTabla);
    });
    envoltura.append(tabla);
    contenedor.append(envoltura);
  });
}

/* =====================================================
   RENDERIZADO: PRÁCTICA VERDADERO O FALSO
   ===================================================== */
function funcionRenderizarVerdaderoFalso() {
  const contenedor = document.getElementById("contenedorPreguntasVerdaderoFalso");
  contenedor.replaceChildren();
  estadoPuntajes.verdaderoFalso = { aciertos: 0, respondidas: 0 };
  funcionActualizarPuntaje("verdaderoFalso", "textoPuntajeVerdaderoFalso");
  listaPreguntasVerdaderoFalso.forEach(function (pregunta) {
    const tarjeta = funcionCrearElemento("div", "tarjetaPregunta");
    const enunciado = funcionCrearElemento("p", "textoEnunciado", pregunta.enunciado);
    if (pregunta.trampa) enunciado.append(funcionCrearElemento("span", "etiquetaTrampa", "⚠️ trampa"));
    const filaOpciones = funcionCrearElemento("div", "filaOpciones");
    const botones = [true, false].map(function (valor) {
      const boton = funcionCrearElemento("button", "botonOpcion", valor ? "Verdadero" : "Falso");
      boton.addEventListener("click", function () {
        botones.forEach(function (otro) { otro.disabled = true; });
        const acierto = valor === pregunta.respuesta;
        boton.classList.add(acierto ? "botonOpcionCorrecta" : "botonOpcionIncorrecta");
        estadoPuntajes.verdaderoFalso.respondidas++;
        if (acierto) estadoPuntajes.verdaderoFalso.aciertos++;
        funcionActualizarPuntaje("verdaderoFalso", "textoPuntajeVerdaderoFalso");
        const textoVeredicto = (pregunta.respuesta ? "Verdadero. " : "Falso. ") + pregunta.explicacion;
        tarjeta.append(funcionCrearElemento("p", "textoExplicacion", textoVeredicto));
      });
      filaOpciones.append(boton);
      return boton;
    });
    tarjeta.append(enunciado, filaOpciones);
    contenedor.append(tarjeta);
  });
}

/* =====================================================
   RENDERIZADO: PRÁCTICA MÚLTIPLE CHOICE
   ===================================================== */
function funcionRenderizarMultipleChoice() {
  const contenedor = document.getElementById("contenedorPreguntasMultipleChoice");
  contenedor.replaceChildren();
  estadoPuntajes.multipleChoice = { aciertos: 0, respondidas: 0 };
  funcionActualizarPuntaje("multipleChoice", "textoPuntajeMultipleChoice");
  listaPreguntasMultipleChoice.forEach(function (pregunta) {
    const tarjeta = funcionCrearElemento("div", "tarjetaPregunta");
    tarjeta.append(funcionCrearElemento("p", "textoEnunciado", pregunta.enunciado));
    const botones = pregunta.opciones.map(function (textoOpcion, indice) {
      const boton = funcionCrearElemento("button", "botonOpcion botonOpcionColumna", textoOpcion);
      boton.addEventListener("click", function () {
        botones.forEach(function (otro) { otro.disabled = true; });
        const acierto = indice === pregunta.correcta;
        boton.classList.add(acierto ? "botonOpcionCorrecta" : "botonOpcionIncorrecta");
        botones[pregunta.correcta].classList.add("botonOpcionCorrecta");
        estadoPuntajes.multipleChoice.respondidas++;
        if (acierto) estadoPuntajes.multipleChoice.aciertos++;
        funcionActualizarPuntaje("multipleChoice", "textoPuntajeMultipleChoice");
        tarjeta.append(funcionCrearElemento("p", "textoExplicacion", pregunta.explicacion));
      });
      return boton;
    });
    const columna = funcionCrearElemento("div", "filaOpciones");
    botones.forEach(function (boton) { columna.append(boton); });
    tarjeta.append(columna);
    contenedor.append(tarjeta);
  });
}

/* =====================================================
   RENDERIZADO: CASOS Y ESTRUCTURA DEL EXAMEN
   ===================================================== */
function funcionRenderizarCasosIntegradores() {
  const contenedor = document.getElementById("contenedorCasosIntegradores");
  listaCasosIntegradores.forEach(function (caso) {
    const tarjeta = funcionCrearElemento("details", "tarjetaCaso");
    tarjeta.append(funcionCrearElemento("summary", "tituloCaso", caso.titulo));
    const cuerpo = funcionCrearElemento("div", "cuerpoCaso");
    cuerpo.append(funcionCrearElemento("p", "textoEnunciadoCaso", caso.enunciado));
    const lista = funcionCrearElemento("ul");
    caso.puntos.forEach(function (punto) { lista.append(funcionCrearElemento("li", "", punto)); });
    cuerpo.append(lista);
    tarjeta.append(cuerpo);
    contenedor.append(tarjeta);
  });
}

function funcionRenderizarEstructuraExamen() {
  const contenedor = document.getElementById("contenedorEstructuraExamen");
  const lista = funcionCrearElemento("ul", "listaPuntosUnidad");
  listaEstructuraExamen.forEach(function (linea) { lista.append(funcionCrearElemento("li", "", linea)); });
  contenedor.append(lista);
}

/* =====================================================
   NAVEGACIÓN ENTRE SECCIONES
   ===================================================== */
function funcionMostrarSeccion(idSeccionDestino) {
  document.querySelectorAll(".seccionContenido").forEach(function (seccion) {
    seccion.classList.toggle("seccionOculta", seccion.id !== idSeccionDestino);
  });
  document.querySelectorAll(".botonNavegacion").forEach(function (boton) {
    boton.classList.toggle("botonNavegacionActivo", boton.dataset.seccion === idSeccionDestino);
  });
}

/* =====================================================
   INICIALIZACIÓN Y EVENTOS
   ===================================================== */
document.querySelectorAll(".botonNavegacion").forEach(function (boton) {
  boton.addEventListener("click", function () { funcionMostrarSeccion(boton.dataset.seccion); });
});
document.getElementById("campoBuscadorMaterial").addEventListener("input", function (evento) {
  funcionRenderizarMaterial(evento.target.value);
});
document.getElementById("botonReiniciarVerdaderoFalso").addEventListener("click", funcionRenderizarVerdaderoFalso);
document.getElementById("botonReiniciarMultipleChoice").addEventListener("click", funcionRenderizarMultipleChoice);

funcionRenderizarMaterial("");
funcionRenderizarTarjetasPlazos();
funcionRenderizarCuadrosComparativos();
funcionRenderizarVerdaderoFalso();
funcionRenderizarMultipleChoice();
funcionRenderizarCasosIntegradores();
funcionRenderizarEstructuraExamen();

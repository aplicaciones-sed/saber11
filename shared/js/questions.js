// Banco centralizado de preguntas
// Cada pregunta tiene:
// - id: identificador único
// - simulators: array de simulacros a los que pertenece (ej: [1] o [1,2])
// - subject: clave de la materia (lc, mat, soc, cn, ing)
// - context: contexto de la pregunta (HTML)
// - contextImg: imagen de contexto (opcional)
// - questionImg: imagen de la pregunta (opcional)
// - text: enunciado
// - options: opciones de respuesta
// - optionsImg: imágenes de opciones (opcional)
// - correct: índice de respuesta correcta (0-3)
// - competency: competencia evaluada
// - level: nivel de dificultad (1-4)
// - assertion: afirmación
// - evidence: evidencia
// - component: componente
// - standard: estándar asociado
// - skill: pensamiento asociado
// - evaluationCriteria: qué evalúa
// - justification: justificación/explicación
// - invalidOptions: opciones no válidas

const QUESTIONS = [
  // LC - Lectura Crítica (20 preguntas)
  {
    id: 1,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p> <div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div></div>`,
    text: '¿Cuál es la relación argumentativa entre los dos enunciados del texto que se presentan a continuación?<br><br>"Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes."<br><br>"Estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos".',
    options: [
      "Premisa / evidencia.",
      "Introducción / descripción.",
      "Antecedente / fundamento.",
      "Conjetura / contraevidencia.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Comprende las relaciones entre diferentes partes o enunciados de un texto.",
    component: "",
    standard:
      "Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar la relación entre dos enunciados de un texto.",
    justification:
      "La opción D es la respuesta correcta, ya que el primer enunciado presenta una conjetura acerca de la posibilidad de verter basura sin consecuencias en los océanos, dada su profundidad, y el segundo enunciado señala que existen estudios que prueban que la conjetura no era correcta.",
    invalidOptions:
      "Las opciones A, B y C no son correctas, ya que identifican relaciones inexistentes entre los enunciados. La opción A afirma que el primer enunciado es una premisa y el segundo una evidencia para sustentar esa premisa, pero el segundo enunciado presenta evidencia que va en contravía de lo dicho en el primero. La opción B dice que el primer enunciado es una introducción y el segundo una descripción, pero el segundo enunciado no hace una descripción; presenta evidencia de estudios para contradecir la hipótesis inicial. La opción C, por último, asegura que el primer es un antecedente y el segundo enunciado es un fundamento, pero el primer enunciado no es un antecedente de un razonamiento.",
  },
  {
    id: 2,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: "¿Cuál de los siguientes enunciados puede considerarse la antítesis del argumento central del texto?",
    options: [
      "La respuesta al problema de la contaminación es la dilución.",
      "Las iniciativas dirigidas a la protección marítima son casi inexistentes.",
      "Los océanos han sido contaminados por los humanos durante miles de años.",
      "Los humanos han comenzado a advertir la insostenibilidad de la filosofía de la dilución.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir la tesis contraria a la tesis principal de un texto.",
    justification:
      "La opción A es la respuesta correcta, ya que el texto argumenta que la idea de la dilución ha llevado a que causemos daños cada vez mayores a los océanos: \"En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la 'dilución' ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero\". La opción A afirma justamente lo contrario.",
    invalidOptions:
      "Las opciones B, C y D no son correctas porque presentan tesis que no se oponen a lo dicho en el texto. La opción B afirma que las iniciativas para proteger los océanos son casi inexistentes. Lo tesis contraria esta sería que las iniciativas para proteger a los océanos abundan. El texto no menciona lo anterior, simplemente señala que cada vez hay más santuarios marinos e iniciativas aisladas para restaurar estuarios y bahías. La opción C dice los humanos han contamino los océanos desde hace miles de años, que es justamente lo que afirma el texto. Finalmente, la opción D asegura que los humanos han empezado a darse cuenta de la insostenibilidad de la idea de la dilución, que también es algo que se afirma en el texto: \"Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la 'dilución'\".",
  },
  {
    id: 3,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: 'El enunciado "Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta"',
    options: [
      'refuerza la postura de aquellos que promueven la ideología de la "dilución".',
      "controvierte la tesis sobre el incremento alarmante de la contaminación marítima.",
      "apoya el argumento de la contaminación marítima a causa de la actividad humana.",
      "refuta la creencia popular de que la contaminación marítima es un fenómeno reciente.",
    ],
    correct: 2,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar la función que cumple un enunciado en un argumento en un texto.",
    justification:
      "La respuesta correcta es la opción C, ya que las zonas muertas descubiertas contribuyen a probar que la devastación reciente de los océanos es responsabilidad de los vertimientos industriales y la contaminación humana.",
    invalidOptions:
      "Las opciones A, B y D no son correctas porque presentan funciones que no cumple el enunciado de la pregunta. La opción A afirma que el descubrimiento de las zonas muertas refuerza la postura de quienes defienden la dilución, pero las zonas muertas prueban que la idea de la dilución no es correcta. La opción B dice que las zonas controvierten la tesis sobre el incremento de la contaminación marina, pero el descubrimiento de estas zonas muestra todo lo contrario. La opción D, finalmente, señala que las zonas muertas refutan la creencia de que la contaminación marítima es un fenómeno reciente, pero el descubrimiento de estas zonas apoya la idea de que de hecho la contaminación marina es en ciertos sentidos un hecho sentido.",
  },
  {
    id: 4,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><strong>LA CONTAMINACIÓN MARINA</strong></p><p>Debido a la inmensidad y profundidad de los océanos, hasta hace poco se creía que podrían ser utilizados para verter basura y sustancias químicas en cantidades ilimitadas sin que esto tuviera consecuencias importantes. Los partidarios de continuar con los vertidos en los océanos incluso tienen un eslogan: "La solución a la contaminación es la dilución". En la actualidad, basta con fijarse en la zona muerta del tamaño del estado de Nueva Jersey que se forma cada verano en el delta del Río Mississippi, o en la extensión de 1.600 kilómetros de plástico en descomposición en el Pacífico Norte para darse cuenta de que esta ideología de la "dilución" ha contribuido a llevar al borde del colapso lo que tiempo atrás fue un ecosistema oceánico próspero. Existen pruebas de que los océanos han sufrido a manos del hombre durante miles de años. Sin embargo, estudios recientes demuestran que la degradación, especialmente en las zonas costeras, se ha acelerado notablemente en los últimos tres siglos a medida que han aumentado los vertidos industriales y los contaminantes procedentes de explotaciones agrarias y ciudades costeras.</p><br><p>Algunos de los contaminantes más comunes derivados de la actividad humana son los plaguicidas, fertilizantes químicos, detergentes, hidrocarburos, aguas residuales, plásticos y otros sólidos. Muchos de estos contaminantes se acumulan en las profundidades del océano, donde son ingeridos por pequeños organismos marinos a través de los cuales se introducen en la cadena alimentaria global. Los fertilizantes ricos en nitrógeno que utilizan los productores agrícolas en zonas del interior, por ejemplo, acaban en las corrientes, ríos y aguas subterráneas locales, y más tarde se depositan en los estuarios, bahías y deltas. Este exceso de nutrientes puede provocar un crecimiento masivo de algas que consumen el oxígeno del agua, lo cual genera zonas en las que no puede haber vida marina o apenas existe. Los científicos han descubierto 400 zonas muertas con estas características por todo el planeta. Los humanos comienzan a percatarse de la insostenibilidad de la filosofía de la "dilución". Muchas leyes nacionales y protocolos internacionales prohíben en la actualidad el vertido de sustancias nocivas en los océanos, si bien su aplicación es a menudo incierta. Se están creando santuarios marinos con el fin de mantener ecosistemas marinos prístinos. Asimismo, se están llevando a cabo iniciativas aisladas que han logrado cierto éxito en la restauración de estuarios y bahías.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.nationalgeographic.es/el-oceano/cuestiones-criticas-sobre-el-problemas-de-la-contaminacion-marina/</em></p></div>`,
    text: "¿Qué recurso emplean los autores del texto para reforzar su tesis principal?",
    options: [
      "Evidencia científica.",
      "Un estudio de caso.",
      "Datos gubernamentales.",
      "Investigaciones propias.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para reconocer recursos argumentativos en un texto.",
    justification:
      "La respuesta correcta es la opción A, ya que los autores utilizan evidencia científica para probar que la filosofía de la dilución no tiene mayor sentido. Esto es claro sobre todo en el segundo párrafo del texto, donde se explica en detalle el efecto que pueden tener los contaminantes más comunes en el océano.",
    invalidOptions:
      "Las opciones B, C y D no son correctas porque presentan recursos que no se utilizan en el texto. La opción B afirma que el texto usa un estudio de caso, pero este no se centra un único ejemplo para luego llegar a conclusiones generales. La opción C afirma que se usan datos gubernamentales, pero en el texto no se utilizan estudios de Gobiernos. La opción D, por último, señala que utilizan investigaciones propias, pero en el texto nunca se habla de que National Geographic o los autores llevaran a cabo estudios propios.",
  },
  {
    id: 5,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: 'Cuando el autor afirma "es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada", pretende',
    options: [
      "probar que no hay certeza sobre la existencia de la mente.",
      "señalar que no hay certeza de la existencia de la tierra.",
      "mostrar que es posible equivocarse en un juicio.",
      "demostrar la existencia de quien juzga.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Relaciono el significado de los textos que leo con los contextos sociales, culturales y políticos en los cuales se han producido.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir la intención comunicativa de un enunciado de un texto a partir de una lectura global.",
    justification:
      "La respuesta correcta es la opción D. Por medio del enunciado, Descartes busca probar que, aunque la mente se equivoque a la hora de hacer un juicio, necesariamente existe pues está haciendo un juicio. Es decir, incluso si la mente emite un juicio sobre algo que no está ahí, la mente tiene que estar ahí para poder hacer ese juicio.",
    invalidOptions:
      "Las opciones A, B y C no son correctas porque presentan intenciones que no se corresponden con la del enunciado de la pregunta. La opción A afirma que el enunciado busca probar que no hay certeza sobre la existencia de la mente, pero el enunciado pretende hacer justamente lo contrario. La opción B dice que el enunciado quiere señalar que no hay certeza sobre la existencia de la tierra, pero el enunciado no problematiza la existencia la tierra —de hecho, la da por sentado—. La opción C, finalmente, asegura que el enunciado busca mostrar que es posible equivocarse en un juicio, pero ese no es el punto del enunciado. Dado todo lo que se ha dicho en el texto antes del enunciado, es posible inferir que lo que Descartes pretende es probar la existencia de quien juzga.",
  },
  {
    id: 6,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: 'La afirmación "no hay afecciones o cualidades de la nada" permite',
    options: [
      "sostener que si observamos algunas cualidades, entonces existe algo a lo que pertenecen.",
      "afirmar que aunque existe una sustancia no podemos conocer sus cualidades.",
      "sostener que si existe una sustancia, entonces podemos observar sus cualidades.",
      "demostrar que si conocemos algo, entonces existen sus cualidades.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar la función que cumple un enunciado en un argumento en un texto.",
    justification:
      'La opción A es la respuesta correcta, ya que Descartes afirma que la nada no tiene cualidades para probar que, si hay cualidades, entonces debe haber algo a lo que pertenezcan esas cualidades: "y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan".',
    invalidOptions:
      "Las opciones B, C y D no son correctas porque no presentan la función del enunciado en el texto. La opción B afirma que el enunciado busca mostrar que, aunque exista una sustancia, no podemos conocer sus cualidades, pero el texto afirma que cuanto más observemos a una más la conoceremos. La opción C dice que el enunciado quiere probar que, si existe una sustancia, entonces podemos conocer sus cualidades, pero, como lo muestra el resto del texto, lo que le interesa al autor es mostrar que debe existir una sustancia cuando hay cualidades. La opción D, finalmente, asegura que el enunciado busca demostrar que, si conocemos algo, existen sus cualidades, pero el texto no dice que el conocimiento de una sustancia implique que sus cualidades existen. De hecho, podemos equivocarnos sobre la existencia de las cualidades de una sustancia, sin que esto implique que la sustancia no exista.",
  },
  {
    id: 7,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: "De acuerdo con los argumentos expuestos por Descartes, nuestra mente existe porque",
    options: [
      "cuanto más observemos una cosa, más claramente la conoceremos.",
      "no es posible que yo juzgue algo y que mi mente, que lo juzga, no sea nada.",
      "no existen los cuerpos, aunque los toque y los vea.",
      "conocemos nuestra mente más ciertamente que el cuerpo.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence:
      "Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).",
    component: "",
    standard:
      "Asumo una actitud crítica frente a los textos que leo y elaboro, y frente a otros tipos de texto: explicativos, descriptivos y narrativos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para explicar por qué una tesis se sostiene sobre los argumentos dados en el texto.",
    justification:
      'La respuesta correcta es la opción B porque, como afirma el texto, "hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan". Y si la mente emite juicios incluso sobre aquello que no está percibiendo, no es posible que la mente no sea nada, pues tiene la cualidad de emitir esos juicios.',
    invalidOptions:
      "Las opciones A, C y D no son correctas, ya que presentan explicaciones que no recogen la defensa de la tesis de Descartes. La opción A afirma que cuanto más observemos algo, más lo conoceremos, pero esto no contribuye a probar la existencia de la mente. La opción C dice que los cuerpos no existen, aunque los toquemos o los veamos, pero en el texto Descartes no se refiere a la existencia de los cuerpos. Finalmente, la opción D asegura que conocemos nuestra mente más ciertamente que nuestro cuerpo, pero del hecho de que creamos conocer algo no se sigue que ese algo existe (piénsese, por ejemplo, en los unicornios o los dragones).",
  },
  {
    id: 8,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p><em>Por qué nuestra mente es más conocida que el cuerpo.</em></p><p>Por otra parte, para saber que conocemos nuestra mente no sólo antes y más ciertamente, sino también más evidentemente que el cuerpo, hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada; y por tanto donde quiera que observemos algunas, debe hallarse necesariamente una cosa o una sustancia a la que pertenezcan. Y cuantas más observemos en esa cosa o sustancia, tanto más claramente la conoceremos. Y es evidente que observamos más en nuestra mente que en ninguna otra cosa, porque todo lo que nos permite conocer algo nos lleva también con mucha mayor certeza al conocimiento de nuestra mente. Como cuando juzgo que existe la tierra, porque la toco o la veo: con más razón debo juzgar, por eso mismo, que existe mi mente, pues es posible, quizá, que juzgue que toco la tierra aunque no haya tierra, pero no es posible que yo juzgue esto y que mi mente, que lo juzga, no sea nada; y así en lo demás.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Descartes, R. Sobre los principios de la filosofía.</em></p></div>`,
    text: 'Con la expresión "luz natural", el autor se refiere a una',
    options: [
      "facultad de la nada.",
      "cualidad del cuerpo.",
      "facultad de la mente.",
      "cualidad divina.",
    ],
    correct: 2,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Entiende el significado de los elementos locales que constituyen un texto.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar un sinónimo de una expresión a partir del contexto.",
    justification:
      'La respuesta correcta es la opción C. En el texto se afirma lo siguiente: "hay que observar que es evidente por luz natural que no hay afecciones o cualidades de la nada". La razón, o una facultad de la mente, es la que nos permite concluir que la nada no tiene cualidades.',
    invalidOptions:
      'Las opciones A, B y D no son correctas, ya que presentan expresiones que no tienen el mismo significado que "luz natural" en ese contexto. La opción A afirma que "luz natural" es lo mismo que una facultad de la nada, pero la nada no tiene facultades, como lo da a entender Descartes. La opción B dice que la "luz natural" es equivalente a una cualidad del cuerpo, pero en este contexto Descartes no se refiere a uno de los sentidos o a alguna característica del cuerpo humano, pues estas no nos permiten llegar al razonamiento del que se habla después. La opción D, finalmente, asegura que "luz natural" se refiere a una cualidad divina, pero no hay nada en el texto que afirme que la razón es una cualidad de Dios o ajena a los humanos.',
  },
  {
    id: 9,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: 'Cuando Mafalda pregunta de quién es el discurso que hay que masticar "pero no hay que tragárselo", quiere decir que el discurso debe',
    options: [
      "analizarse pero no hay que creerlo.",
      "aprobarse pero no hay que admitirlo.",
      "criticarse pero hay que creerlo.",
      "aprobarse pero hay que reformularlo.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Entiende el significado de los elementos locales que constituyen un texto.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar una paráfrasis de un enunciado.",
    justification:
      'La respuesta correcta es la opción A, ya que lo que quiere decir Mafalda es que los discursos deben analizarse ("masticarse"), pero que no deben creerse ("tragarse"). El enunciado y la caricatura juegan con una acepción común de las palabras "masticar" y "tragar".',
    invalidOptions:
      "Las opciones B, C y D no son correctas, dado que presentan paráfrasis erróneas del enunciado de la pregunta. Las opciones B y D afirman que los discursos deben aprobarse, pero precisamente lo que dice Mafalda es que no hay que creerlos sin más. La opción C dice que los discursos deben creerse, pero Mafalda asegura que no deben creerse sin antes haberlo analizado.",
  },
  {
    id: 10,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: "La expresión en la cara del padre al oír la pregunta de Mafalda se debe a que",
    options: [
      "no está de acuerdo con lo que dice Mafalda.",
      "no entendió lo que Mafalda quería decir.",
      "le disgustó que Mafalda lo interrumpiera tan súbitamente.",
      "no esperaba la interpretación que hizo Mafalda de sus palabras.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica el tipo de relación existente entre diferentes elementos de un texto (discontinuo).",
    component: "",
    standard:
      "Doy cuenta del uso del lenguaje verbal o no verbal en manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.",
    skill: "",
    evaluationCriteria:
      "La capacidad para establecer relaciones entre elementos lingüísticos y no lingüísticos en un texto discontinuo.",
    justification:
      "La respuesta correcta es la opción D. El papá de Mafalda le está explicando a su hijo que debe masticar el chicle, pero no tragárselo. Su expresión en el segundo recuadro se relaciona con la interpretación que hizo Mafalda de sus palabras.",
    invalidOptions:
      "Las opciones A, B y C no son correctas porque interpretan de manera errónea la expresión del padre de Mafalda. La opción A afirma que el padre no está de acuerdo con Mafalda, pero su expresión es de resignación, no de desacuerdo. La opción B dice que el padre no entendió lo que dijo Mafalda, pero la expresión en su rostro es de resignación, no de duda. Todavía más importante: si el padre no entendiera la interpretación de Mafalda la caricatura carecería de humor y no cumpliría con su propósito comunicativo. La opción C, finalmente, asegura que el al padre le disgustó que Mafalda lo interrumpiera, pero su expresión es de resignación, no de rabia o molestia.",
  },
  {
    id: 11,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: "¿Cuál de las siguientes afirmaciones describe un supuesto implícito en el cómic?",
    options: [
      "Los discursos de los políticos son engañosos.",
      "Los chicles son malos para la salud de los niños.",
      "Los padres no entienden a sus hijos.",
      "Los discursos de los políticos son difíciles.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence:
      "Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).",
    component: "",
    standard:
      "Analizo las implicaciones culturales, sociales e ideológicas de manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar supuestos implícitos en un texto.",
    justification:
      "La opción A es la respuesta correcta. La caricatura critica el discurso político, el discurso con el que usualmente lidian las caricaturas. Si es necesario analizar el discurso y no creerlo, es porque los discursos políticos suelen ser engañosos. Si no lo fueran, entonces la advertencia de Mafalda sería innecesaria y la caricatura perdería su gracia.",
    invalidOptions:
      "Las opciones B, C y D no son correctas porque identifican supuestos que no hacen parte de la caricatura. La opción B afirma que los chicles son malos para la salud de los niños, pero el papá de Mafalda en ningún momento regaña a su hijo por comer chicle. La opción C dice que los padres no entienden a los niños, pero el papá entiende lo que dice Mafalda y precisamente por eso es por lo que la caricatura es divertida. La opción D, finalmente, asegura que los discursos de los políticos son difíciles, pero el problema no es que sean difíciles, sino que no debemos creerlos por lo que son engañosos.",
  },
  {
    id: 12,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><div style="text-align:center;margin-bottom:10px"><p><img style="width:100%" src="../shared/img/questions/mafalda1.png" alt='[Caricatura de Mafalda: En el primer recuadro, el padre le dice a un niño pequeño: "ES PARA MASTICARLO, PERO NO HAY QUE TRAGÁRSELO". En el segundo recuadro, Mafalda aparece y pregunta: "¿EL DISCURSO DE QUIÉN?"]' loading="lazy"></p></div><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: http://www.edizzz.com/es-para-masticarlo-pero-no-hay-que-tragarselo/</em></p></div>`,
    text: "Con este cómic el autor pretende",
    options: [
      "criticar la manera como los políticos hacen sus discursos.",
      "llamar la atención sobre cómo debemos tomar los discursos políticos.",
      "mostrar la relación entre comer chicle y los discursos de los políticos.",
      "disuadir a las personas de escuchar los discursos de los políticos.",
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Analizo las implicaciones culturales, sociales e ideológicas de manifestaciones humanas como los grafiti, la publicidad, los símbolos patrios, las canciones, los caligramas, entre otros.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir el propósito comunicativo de un texto.",
    justification:
      "La respuesta correcta es la opción A. La caricatura critica los discursos engañosos de los políticos que, a pesar de que no deberían ser engañosos, lo son, de acuerdo con el autor. Debido a esto, los discursos de este tipo deben ser analizados, pero no creídos sin un previo análisis.",
    invalidOptions:
      "Las opciones B, C y D no son correctas, ya que presentan intenciones comunicativas que no se corresponden con la caricatura. La opción B afirma que la intención de la caricatura es llamar la atención sobre la manera como debemos tomar los discursos de los políticos, pero la caricatura va más allá, como se puede ver por la expresión de resignación del padre. La opción C dice que la caricatura muestra la relación del chicle y los políticos, pero el chicle es sólo una excusa ingeniosa para criticar el discurso de los políticos. Finalmente, la opción D asegura que la caricatura pretende disuadir a las personas de escuchar los discursos políticos, pero lo que afirma Mafalda es que los discursos no deben dejar de oírse, sino analizarse con un oído crítico.",
  },
  {
    id: 13,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "De las siguientes razones, ¿cuál NO explica el desasosiego del personaje?",
    options: [
      "La insatisfacción con su vida en general.",
      "El terreno agreste en el que se encuentra.",
      "Los negocios pendientes con Abdul Bashur.",
      "La creencia de haber tomado malas decisiones.",
    ],
    correct: 2,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Leo textos literarios de diversa índole, género, temática y origen.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar las razones que apoyan la tesis de un texto.",
    justification:
      "La respuesta correcta es la opción C. Los negocios con Abdul Bashur no son motivo de desasosiego para el personaje. Le inquieta saber que quizás su camarada piense que esté muerto, pero no los negocios que tiene con él.",
    invalidOptions:
      'Las opciones A, B y D no son correctas, ya que presentan razones por las que el personaje siente desasosiego. Las opciones A y D afirman, respectivamente, que el personaje siente desasosiego por la insatisfacción de su vida en general y por creer haber tomado malas decisiones, que es precisamente lo que se dice en el siguiente punto: "Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia". La opción B dice que al personaje siente desasosiego por el terreno en el que se encuentra, que es lo que dice el texto: "En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
  },
  {
    id: 14,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "La narración ocurre en",
    options: [
      "una cueva de iguanas.",
      "un navío en el río Bósforo.",
      "un lugar desértico lejos del mar.",
      "una embarcación, en algún río.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).",
    component: "",
    standard:
      "Leo textos literarios de diversa índole, género, temática y origen.",
    skill: "",
    evaluationCriteria:
      "La capacidad para ubicar información sobre un lugar que se encuentra de manera explícita en un texto.",
    justification:
      'La respuesta correcta es la opción D, dado que en el texto se afirma lo siguiente: "Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
    invalidOptions:
      "Aunque presentan lugares mencionados en el texto, las opciones A, B y C no son correctas ya que ninguna señala el lugar específico donde ocurre la narración.",
  },
  {
    id: 15,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "El autor utiliza",
    options: [
      "eufemismos, para expresar el disgusto del narrador sin ofender al lector.",
      "reflexiones, para presentar la experiencia y el estado de ánimo del narrador.",
      "juegos de palabras, para asociar conceptos y recalcar el hastío del narrador.",
      "redundancias, para generar un tono triste y sombrío en el discurso del narrador.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence: "Reconoce las estrategias discursivas en un texto.",
    component: "",
    standard:
      "Identifico en obras de la literatura universal el lenguaje, las características formales, las épocas y escuelas, estilos, tendencias, temáticas, géneros y autores, entre otros aspectos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para reconocer recursos retóricos en un texto.",
    justification:
      "La respuesta correcta es la opción B, ya que, en el texto, el personaje reflexiona sobre su pasado. Mientras lo hace, cuenta algunas de sus experiencias y detalla su melancolía y su tristeza.",
    invalidOptions:
      'Las opciones A, C y D no son correctas, ya que presentan recursos retóricos que no están presentes en el texto. La opción A afirma que la historia incluye eufemismos, pero en el texto no se usan palabras más "decorosas" o menos "directas" para reemplazar a otras. La opción C dice que el texto incluye juegos de palabras, pero en el texto no hay parejas o grupos de palabras que produzcan un efecto lúdico o humorístico. La opción D, por último, asegura que en el texto se utilizan redundancias, pero en este no se repiten conceptos o se utilizan palabras innecesarias para transmitir las mismas ideas.',
  },
  {
    id: 16,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Siempre me ha sucedido lo mismo: las empresas en las que me lanzo tienen el estigma de lo indeterminado, la maldición de una artera mudanza. Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece.</p><br><p>Lejos del mar, sin hembras y hablando un idioma de tarados. Y, entretanto, mi querido Abdul Bashur, camarada de tantas noches a orillas del Bósforo, de tantos intentos inolvidables por hacer dinero fácil en Valencia y Toulon; esperándome y pensando que tal vez haya muerto. Me intriga sobremanera la forma como se repiten en mi vida estas caídas, estas decisiones erróneas desde su inicio, estos callejones sin salida cuya suma vendría a ser la historia de mi existencia.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Mutis, A. (1986). La nieve del almirante. Bogotá: Editorial Norma.</em></p></div>`,
    text: "La narración ocurre durante",
    options: [
      "una temporada de artera mudanza.",
      "un periodo de monotonía de la selva.",
      "un viaje hacia una zona selvática.",
      "una época lejana en Valencia y Toulon.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).",
    component: "",
    standard:
      "Leo textos literarios de diversa índole, género, temática y origen.",
    skill: "",
    evaluationCriteria:
      "La capacidad para ubicar información explícita sobre el tiempo en el que ocurren los hechos de un texto.",
    justification:
      'La respuesta correcta es la opción B, dado que el texto afirma lo siguiente: "Y aquí voy, río arriba, como un necio, sabiendo de antemano en lo que irá a parar todo. En la selva, en donde nada me espera, cuya monotonía y clima de cueva de iguanas, me hace mal y me entristece".',
    invalidOptions:
      'Las opciones A, C y D no son correctas, ya que no presentan el tiempo en el que ocurren los hechos de la historia. La opción A afirma que la historia ocurre durante una época de artera mudanza, pero el personaje habla de una "maldición de artera mudanza" que persigue sus empresas. La opción C dice que la historia ocurre durante un viaje hacia una zona selvática, pero el personaje ya se encuentra en la selva. La opción D, por último, asegura que la historia ocurre durante una época lejana en Valencia y Toulon, pero el personaje recuerda épocas pasadas en Valencia y Toulon durante su monótono viaje por un río en la selva.',
  },
  {
    id: 17,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: "¿Cuál de los siguientes fragmentos sería la continuación más coherente del texto en términos de estilo y contenido?",
    options: [
      '"Pero los indios no solo persistieron sino que se hicieron tan hábiles en la manipulación de los diferentes ingredientes que los chamanes desarrollaron individualmente docenas de recetas".',
      '"Ingeridos oralmente, sin embargo, estos potentes compuestos no producen ningún efecto, pues una enzima propia del intestino humano, la monoamina oxidaza (MAO), los neutraliza".',
      '"En el caso del curare, Schultes descubrió que la corteza raspada se coloca debajo de una hoja en forma de embudo, colgada entre dos lanzas".',
      '"Los indios tenían, como es natural, sus propias explicaciones, ricos relatos cosmológicos que desde su punto de vista eran perfectamente lógicos".',
    ],
    correct: 0,
    competency: "Comprensión lectora",
    level: "",
    assertion: "Reflexiona a partir de un texto y evalúa su contenido.",
    evidence:
      "Establece relaciones entre un texto y otros textos o enunciados.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir, a partir de las características del texto, cuál es su continuación más adecuada.",
    justification:
      'La respuesta correcta es la opción A, dado que el último párrafo del texto trata sobre el problema de utilizar el tanteo para explicar la producción del yagé. La línea final dice lo siguiente: "La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional". Dado que el resto del texto apunta a explicar el surgimiento de las recetas del yagé, es de esperar que la continuación del texto afirme que, a pesar de las características de la corteza del bejuco que se mencionan en la última línea, de alguna manera los indígenas lograron producir la mezcla que produce la droga.',
    invalidOptions:
      "Aunque las opciones B, C y D presentan enunciados cuyo contenido está relacionado con el tema del texto, ninguna es una continuación adecuada dado como termina el último párrafo. La opción B trata sobre los efectos de ciertos químicos, pero este tema se trata en el segundo párrafo. Por lo demás, la última oración del texto afirma que la infusión de la corteza tiene efectos poderosos y la opción habla de químicos que no tienen efectos. La opción C habla sobre el curare, un veneno sobre el que no se habla en ninguna parte del texto. La opción D, por último, sobre las explicaciones de los indios, pero no es claro a qué fenómenos se refieren estas explicaciones y los temas de los que se habla al precer tienen que ver más con efectos psicológicos que con los añadidos del yagé.",
  },
  {
    id: 18,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: "El autor concluye que",
    options: [
      "la ciencia tradicional es infalible, pero no es suficiente para explicar las prácticas indígenas que giran en torno al yagé.",
      "el tanteo no es una explicación adecuada para dar cuenta del origen de las complejas preparaciones del yagé.",
      "el vómito y la diarrea que produce el yagé prueban que el tanteo no explica el origen del uso de esta planta.",
      "las teorías de Schultes sobre el origen de las complejas preparaciones del yagé eran acertadas, pero insuficientes.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria: "La capacidad para inferir la conclusión de un texto.",
    justification:
      'La respuesta correcta es la opción B, dado que el texto afirma lo siguiente: "El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor" y "La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional". Si la corteza causa efectos que desalentarían la experimentación y a menudo los procedimientos son complejos o rinden resultados de escaso o ningún valor, entonces parece que el tanteo no es una explicación adecuada para las combinaciones a las que llegaron los indígenas.',
    invalidOptions:
      "Las opciones A, C y D no son correctas porque presentan conclusiones que no se siguen del texto. La opción A afirma que la ciencia es infalible, pero en el texto nunca se argumenta esta posición. La opción C dice que el vómito y la diarrea prueban que el tanteo no explica el origen del uso del yagé, pero el texto, además del vómito y la diarrea, señala otras razones para argumentar esa tesis. La opción D, por último, asegura que las teorías de Schultes sobre el origen de las preparaciones del yagé eran insuficientes, aunque acertadas, pero el texto no emite un juicio sobre las teorías de Schultes.",
  },
  {
    id: 19,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: 'Considere el siguiente enunciado:<br><br>"Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes."<br><br>La palabra "alguna" indica que del yagé resulta un potente efecto sinérgico cuando se le agregan',
    options: [
      "la Psychotria virids y la Dyplopterys cabrerana.",
      "la Psychotria virids o la Dyplopterys cabrerana.",
      "solo la Psychotria virids.",
      "solo la Dyplopterys cabrerana.",
    ],
    correct: 1,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Identifica y entiende los contenidos locales que conforman un texto.",
    evidence:
      "Entiende el significado de los elementos locales que constituyen un texto.",
    component: "",
    standard:
      "Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto que leo.",
    skill: "",
    evaluationCriteria:
      "La capacidad para comprender el significado de cuantificadores en un texto.",
    justification:
      'La respuesta correcta es la opción B, ya que la palabra "alguna", en el enunciado de la pregunta, se refiere tanto a la Psychotria virids como a la Dyplopterys cabrerana. Cuando la una o la otra se mezcla con el yagé, se produce "un potente efecto sinérgico".',
    invalidOptions:
      'Las opciones A, C y D no son correctas porque presentan un significado erróneo de la palabra "alguna" en el enunciado de la pregunta. La opción A afirma que el efecto sinérgico se produce cuando el yagé se mezcla con la Psychotria virids y la Dyplopterys cabrerana, pero la mezcla del yagé con la una o la otra produce ese efecto. La opción C dice que el efecto sinérgico se produce sólo cuando el yagé se mezcla con la Psychotria virids, pero la Dyplopterys cabrerana también produce ese efecto. Finalmente, la opción D asegura que el efecto se produce sólo cuando el yagé se mezcla con la Dyplopterys cabrerana, pero el efecto también se produce cuando el yagé se mezcla con la Psychotria virids.',
  },
  {
    id: 20,
    simulators: [1],
    subject: "lc",
    context: `<p>RESPONDA LA PREGUNTA DE ACUERDO CON LA SIGUIENTE INFORMACIÓN:</p><p>Dio la casualidad de que Schultes había tropezado con un hecho de alquimia chamánica sin paralelo en el Amazonas. Los ingredientes psicoactivos de la corteza del yagé son los beta-carbolíneos harmine y harmaline. Hace mucho tiempo, sin embargo, los chamanes del noroeste amazónico descubrieron que se podían ampliar dramáticamente sus efectos añadiendo unas cuantas plantas secundarias. Este es un importante rasgo de muchos preparados tradicionales, y se debe en parte al hecho de que diferentes compuestos químicos en cantidades relativamente pequeñas pueden hacerse mutuamente más potentes.</p><br><p>En el caso del yagé, se han identificado hasta la fecha cerca de veintiún añadidos. Dos de estos son de particular interés. La <em>Psychotria virids</em> es un arbusto de la familia del café. La Chagropanga es la <em>Dyplopterys cabrerana</em>, un bejuco selvático con relación cercana al yagé. […] Cuando el yagé se combina con alguna de las dos plantas agregadas, el resultado es un potente efecto sinérgico, una versión bioquímica de una totalidad mayor que la suma de sus partes. Las visiones, tal como los indios le prometieron a Schultes, se hicieron más brillantes, y los tonos azules y púrpuras se expandieron hasta cubrir todo el espectro del arco iris.</p><br><p>Lo que asombró más a Schultes fue menos el efecto puro de las drogas –para ese entonces, después de todo, se estaba acostumbrando a la inmersión de su consciencia en el color– que el implícito problema intelectual planteado por esos complejos preparados. La flora amazónica contiene, literalmente, decenas de miles de especies. ¿Cómo aprendieron los indios a identificar y combinar en forma tan refinada estas plantas morfológicamente distintas, que poseían propiedades químicas tan peculiares y complementarias? La explicación científica tradicional es el tanteo –término razonable que puede bien dar razón de ciertas innovaciones–, pero en otro nivel, como comprobó Schultes después de pasar más tiempo en la selva, es un eufemismo que esconde el hecho de que los etnobotánicos tienen una idea muy vaga de cómo los indios hicieron sus descubrimientos en primer lugar.</p><br><p>El problema del tanteo, de la prueba por eliminación, es que la elaboración de los preparados a menudo implica procedimientos muy complejos o rinde resultados de escaso o ningún valor. El yagé es un bejuco incomible y sin características definidas que rara vez florece. Es cierto que su corteza es amarga, lo cual a menudo es indicio de sus propiedades medicinales, pero no lo es más que cientos de otras lianas de la selva. La infusión de la corteza causa severos vómitos y diarrea, condiciones que desalentarían cualquier experimentación adicional.</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Davis, W. (2009). El río. Bogotá: Fondo de Cultura Económica, El Áncora Editores.</em></p></div>`,
    text: "De lo expresado en los dos primeros párrafos, es acertado afirmar que",
    options: [
      "el primero presenta la tesis del autor y el segundo la complementa con ejemplos.",
      "el primero introduce el tema y el segundo presenta la tesis con ejemplos.",
      "el primero presenta la estructura del texto y el segundo la desarrolla con ejemplos.",
      "el primero introduce el tema y el segundo lo desarrolla con ejemplos.",
    ],
    correct: 3,
    competency: "Comprensión lectora",
    level: "",
    assertion:
      "Comprende cómo se articulan las partes de un texto para darle un sentido global.",
    evidence:
      "Comprende la estructura formal de un texto y la función de sus partes.",
    component: "",
    standard:
      "Diseño un esquema de interpretación, teniendo en cuenta al tipo de texto, tema, interlocutor e intención comunicativa.",
    skill: "",
    evaluationCriteria:
      "La capacidad para inferir las funciones de las partes de un texto a partir de una lectura global.",
    justification:
      "La respuesta correcta es la opción D, dado que en el primer párrafo del texto se introduce el tema del texto, el yagé y sus añadidos, y en el segundo párrafo se exponen ejemplos concretos sobre añadidos al yagé como la Psychotria virids y la Dyplopterys cabrerana.",
    invalidOptions:
      "Las opciones A, B y C no son correctas porque identifican de manera errónea las funciones de algunas partes del texto. La opción A afirma que en el primer párrafo se presenta la tesis del texto, pero la tesis (la idea del tanteo no es adecuada para explicar el surgimiento de las combinaciones de plantas que los indígenas hallaron para potenciar el yagé) se halla hacia el final del texto. La opción B dice que el segundo párrafo presenta la tesis del texto, pero esta se encuentra en los párrafos finales. Finalmente, la opción C asegura que el primer párrafo presenta la estructura del texto, pero en este no se menciona cómo el autor va a organizar el resto del texto o cuál orden va a seguir en los párrafos siguientes.",
  },

  // SC - Sociales y Ciudadanas (20 preguntas)
  {
    id: 21,
    simulators: [1],
    subject: "soc",
    context: `<p>La siguiente es una estrofa de la Canción de los dinosaurios, compuesta e interpretada por el músico argentino Charlie García en 1983:</p><br><p style="text-align:center">"Los amigos del barrio pueden desaparecer<br>Los cantores de radio pueden desaparecer<br>Los que están en los diarios pueden desaparecer<br>La persona que amas puede desaparecer.<br>Los que están en el aire pueden desaparecer, en el aire.<br>Los que están en la calle pueden desaparecer, en la calle.<br>Los amigos del barrio pueden desaparecer,<br>Pero los dinosaurios van a desaparecer".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: García, C. (1983). Los dinosaurios. En: Clics modernos [LP]. Buenos Aires, Argentina: SG Discos.</em></p></div>`,
    text: "Puede afirmarse que la letra de esta canción",
    options: [
      "tiene relación con la época de la dictadura argentina, porque Charlie García tiene esa nacionalidad.",
      "no tiene relación con la dictadura, en tanto en este tipo de gobierno se respetan los derechos civiles y políticos.",
      "tiene relación con la dictadura argentina, en tanto describe la persecución social y política característica de los regímenes dictatoriales.",
      "no tiene relación con la dictadura argentina, dado que el arte y la política son ámbitos independientes de la vida social.",
    ],
    correct: 2,
    competency:
      "Interpretación y Análisis de Perspectivas (Ciencias Sociales).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Inscribe una fuente primaria dada en un contexto económico, político o cultural.",
    component: "",
    standard:
      "Identifico algunas características culturales y sociales de los procesos de transformación que se generaron a partir del desarrollo político y económico de Colombia y el mundo a lo largo del siglo XX.",
    skill: "",
    evaluationCriteria:
      "La habilidad para contrastar información relacionada con una fuente y un hecho específico.",
    justification:
      "La opción C es la correcta porque hace una correspondencia entre la fecha a la que se hace referencia en la fuente, la nacionalidad de quien escribe la canción citada y la descripción hecha, relacionada con lo sucedido durante la dictadura argentina entre 1976 y 1983.",
    invalidOptions:
      "La opción A no es correcta porque lo indicado no es suficiente para indicar por qué la información dada hace referencia a la dictadura argentina. La opción B no es correcta porque se desconocen las características asociadas a una dictadura. La opción D no es correcta porque no es cierto que el arte y la política sean dimensiones separadas y que a través del arte no se pueda manifestar políticamente.",
  },
  {
    id: 22,
    simulators: [1],
    subject: "soc",
    context: `<p>Un niño presenta una entrevista para ingresar en un colegio público. Durante la entrevista, le preguntan a qué religión pertenece. Al finalizar la entrevista, le dicen al niño que pueden admitirlo si accede a participar en las ceremonias religiosas del colegio, aunque él profese una religión distinta.</p>`,
    text: "El derecho fundamental que se le violaría al niño en este caso sería",
    options: [
      "a la libertad de culto.",
      "a la libre personalidad.",
      "a la libertad de conciencia.",
      "a la libre expresión.",
    ],
    correct: 2,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer cuándo se respeta o vulneran los derechos fundamentales.",
    justification:
      'La opción C es la respuesta correcta porque este derecho hace referencia a que "nadie será molestado por razón de sus opiniones religiosas, ni compelido a profesar creencia ni a observar prácticas contrarias a su conciencia". Esto es lo que se pretende en la situación al indicar que será aceptado si accede a participar en ceremonias religiosas, aunque el estudiante profese una religión distinta.',
    invalidOptions:
      "La opción A es incorrecta porque, aunque hace referencia al derecho consignado en el Artículo 19 sobre garantizar la libertad de cultos, en este caso la situación no apunta a que el estudiante no pueda profesar su religión, sino a que acepte participar en ceremonias religiosas diferentes a la religión a la que pertenece, para que lo acepten en la institución educativa. La opción B no es correcta porque, aunque la decisión o no de profesar una religión puede relacionarse con características de la personalidad, este implica más elementos; directamente el derecho que está en juego en la situación es el de libertad de cultos. La opción D no es correcta porque este derecho hace referencia a poder manifestar sus puntos de vista y opiniones, lo cual no se relaciona directamente con el derecho que se trata en el enunciado.",
  },
  {
    id: 23,
    simulators: [1],
    subject: "soc",
    context: `<p>Uno de los principales problemas de las grandes ciudades es la dificultad para movilizarse debido a la gran cantidad de automóviles. Tradicionalmente, se ha propuesto que la mejor solución para este problema es construir más vías que permitan el flujo de más automóviles. Esta solución puede ser efectiva, pero puede generar efectos no deseados.</p>`,
    text: "¿Cuál es uno de estos efectos?",
    options: [
      "Construir más vías genera más empleos en la construcción.",
      "Construir más vías incentiva el uso del automóvil.",
      "Construir más vías disminuye la velocidad de circulación de los automóviles.",
      "Construir más vías, y su posterior utilización, genera más contaminación.",
    ],
    correct: 1,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Analiza los efectos en distintas dimensiones que tendría una posible intervención.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer en una situación que las soluciones a las problemáticas tienen efectos que pueden ser no esperados o no deseados.",
    justification:
      "La opción B es correcta porque la solución propuesta puede llevar a que se incremente el uso del automóvil, lo cual en principio fue la causa del problema. A largo plazo puede generar que la solución deje de ser efectiva e incluso afectar otras dimensiones como lo ambiental, que es un efecto no deseado.",
    invalidOptions:
      "La opción A no es correcta porque la generación de empleos es algo que se espera con la construcción de nuevas vías y no tendría un efecto negativo. La opción C no es correcta porque la construcción de nuevas vías no se asocia directamente con la disminución de velocidad, y de ser así, podría ser un efecto positivo si se relaciona por ejemplo con baja accidentalidad. La opción D no es correcta porque la construcción de vías y la utilización de éstas no se relaciona con más contaminación, faltaría que se aumente el uso o la compra de más automóviles.",
  },
  {
    id: 24,
    simulators: [1],
    subject: "soc",
    context: `<p>El presidente de la República de Colombia quiere reformar las leyes que regulan el sistema de pensiones.</p>`,
    text: "Para lograr esta reforma, su propuesta debe ser aprobada por",
    options: [
      "el voto unánime de la Corte Constitucional.",
      "la totalidad de miembros de la Cámara de Representantes.",
      "la mayoría de la rama judicial del poder público.",
      "la mayoría de miembros del Congreso de la República.",
    ],
    correct: 3,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "Los conocimiento sobre las funciones básicas de las ramas del poder sus alcances y limitaciones.",
    justification:
      "La opción D es correcta porque, según el Artículo 150, corresponde al Congreso hacer las leyes. Por medio de ellas ejerce las funciones de interpretar, reformar y derogar las leyes.",
    invalidOptions:
      "La opción A no es la respuesta correcta porque no está dentro de las funciones de la Corte Constitucional las reformas planteadas en la situación. La opción B no es correcta porque, aunque la Cámara de Representante tiene funciones legislativas y no le corresponde la reforma de leyes como la indicada en el enunciado. La opción C no es correcta porque la Rama Judicial se ocupa de administrar la justicia en Colombia, la componen organismos como la Corte Suprema de Justicia, la Corte Constitucional, el Consejo de Estado, el Consejo Superior de la Judicatura, las Jurisdicciones Especiales y la Fiscalía General de la Nación, las cuales son entidades que no se ocupan de reformar leyes como la descrita en la situación.",
  },
  {
    id: 25,
    simulators: [1],
    subject: "soc",
    context: `<p>Hay en Colombia un gran debate sobre la posible adopción de niños por parte de parejas homosexuales. Quienes están a favor cuestionan la tesis de que es necesario que la familia empiece con un hombre y una mujer. Un vocero de este grupo dijo que nada garantiza que la orientación sexual de los cónyuges determine la preferencia sexual del menor. Además, sostiene que hay muchos niños abandonados que se beneficiarían de crecer en una familia, independientemente de la composición de esta. Por otro lado, un opositor argumenta que, desde el punto de vista psicológico, los niños adoptados por parejas homosexuales muy probablemente van a aprender "conductas equivocadas". Además, sostiene que "Dios concibió al hombre y la mujer para ser pareja y procrear".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Adaptado de: http://www.eltiempo.com/colombia/llano/ARTICULO-WEB-NEW_NOTA_INTERIOR-8928421.html</em></p></div>`,
    text: "Entre las siguientes opciones, ¿cuál presenta lo que cada una de las partes probablemente quiere lograr?",
    options: [
      "El opositor busca defender la familia tradicional y cuidar de los niños; el vocero busca cambiar la forma de la familia nuclear sin importarle el bienestar de los niños.",
      "El vocero quiere que se permita adoptar a las parejas homosexuales; el opositor quiere mantener la familia tradicional, y ambos buscan bienestar para los niños.",
      "El opositor está preocupado por la manera en que debe estar formada la familia, sin importarle el bienestar de los niños; el vocero defiende el bienestar de estos.",
      "El vocero busca cambiar la constitución de la familia tradicional; el opositor está de acuerdo, y ambos quieren facilitar la adopción de niños abandonados.",
    ],
    correct: 1,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar en una situación conflictiva las perspectivas de las partes involucradas y qué es lo que cada una quiere lograr.",
    justification:
      "La opción B es correcta porque se identifica que, respecto a la adopción de niños por parte de parejas homosexuales, una de las partes está a favor, la otra en contra, pero que las dos partes, a su manera, piensan en el bienestar de los niños.",
    invalidOptions:
      "Las opciones que no son correctas en este caso corresponden a interpretaciones parciales o erróneas de la información de la situación. La opción A es incorrecta porque el opositor sí busca defender la familia tradicional y cuidar a los niños, pero la intención del vocero no es cambiar la forma de la familia nuclear y tampoco es válido afirmar que no le importe el bienestar de los niños. La opción C es incorrecta porque al opositor, según su argumento, sí le importa el bienestar de los niños. La opción D no es correcta porque el vocero no busca cambiar la constitución de la familia tradicional.",
  },
  {
    id: 26,
    simulators: [1],
    subject: "soc",
    context: `<p>Un profesor de una prestigiosa universidad invierte dinero y tiempo en diseñar un examen novedoso que determina con mayor exactitud y más rapidez si una mujer está embarazada. El profesor y sus estudiantes realizan muchos experimentos para demostrar la efectividad de su prueba antes de publicar sus resultados. La universidad patenta el examen antes de sacarlo al mercado. Una vez la prueba sale al mercado, se crea un conflicto.</p>`,
    text: "¿Cuál de las siguientes afirmaciones NO plantea un posible escenario de conflicto entre las partes involucradas?",
    options: [
      "Un laboratorio privado desarrolla y comercializa el mismo examen de detección temprana de embarazos.",
      "Las mujeres partícipes del estudio demandan a la universidad porque los resultados no son tan acertados como el profesor sugiere.",
      "El profesor quiere quedarse con la patente de la prueba y comercializarla por su cuenta.",
      "Los estudiantes participantes en la investigación divulgan los resultados de la investigación en diversos escenarios internacionales.",
    ],
    correct: 0,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar, a partir de los intereses descritos en una situación, si es probable o no que se dé un conflicto, y entre quiénes se daría.",
    justification:
      "La opción A es correcta por ser la única opción donde no aparecen las partes involucradas y no representa un escenario de conflicto evidente al ser el laboratorio un agente externo sin ningún vínculo entre las partes.",
    invalidOptions:
      "Las opciones que no son correctas están involucrando a dos o más partes de los actores que se podrían encontrar en un escenario de conflicto. En la opción B, las mujeres demandan a la universidad porque los resultados no son tan acertados, lo cual podría dejar en entredicho al profesor y a la investigación. La opción C no es correcta porque presenta un conflicto entre el profesor y la universidad, pues el primero quiere quedarse con la patente y comercializarla. El conflicto es que la universidad ya la había patentado. La opción D no es correcta porque los estudiantes, al divulgar los resultados de la investigación, estarían violando la ley de derechos de autor, que para este caso la tendría la universidad a través de la patente.",
  },
  {
    id: 27,
    simulators: [1],
    subject: "soc",
    context: `<p>En marzo de 2014, Estados Unidos pidió a varios países recibir como refugiados a varias personas detenidas en la prisión de Guantánamo desde hace más de una década. Esta prisión ha sido objeto de varias controversias y debates por violaciones a los derechos humanos de los presos. El presidente de Uruguay fue uno de los primeros en responder positivamente la petición. "Hay 120 tipos que están presos hace 13 años. No han visto un juez, un fiscal, no tuvieron ningún proceso. La decisión contribuirá a garantizar los derechos humanos de estas personas, que están hace más de 10 años tras las rejas sin juicio", afirmó el mandatario. Aunque varias organizaciones humanitarias han celebrado esta decisión, sectores políticos uruguayos la critican.</p>`,
    text: "¿Cuál de los siguientes podría ser un argumento afín a quienes se oponen a la decisión del presidente uruguayo?",
    options: [
      "La decisión favorecería el derecho de los defendidos a tener un juicio.",
      "La decisión estaría dándole la posibilidad a los refugiados de vivir como hombres libres e integrarse de nuevo a la sociedad.",
      "La decisión pondría en peligro la seguridad del país, pues no se sabe qué personas llegarán al país.",
      "La decisión causaría un mayor hacinamiento en las cárceles de Uruguay, al recibir presos de la cárcel de Guantánamo.",
    ],
    correct: 2,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Evalúa posibilidades y limitaciones del uso de una fuente para apoyar argumentos o explicaciones.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para analizar información y comparar puntos de vista que pueden ser afines o no.",
    justification:
      "La opción C es la correcta porque coincide con lo que podría ser una oposición a la decisión del presidente, fundamentada en que se afectaría la seguridad de la comunidad uruguaya por la llegada de los refugiados que vienen de la prisión de Guantánamo.",
    invalidOptions:
      "La opción A no es correcta porque estaría apoyando a la decisión del presidente. La opción B no es correcta porque estaría en coincidencia con lo que propone el presidente. La opción D no es correcta pues las personas llegarían en calidad de refugiados y no de presos, por lo cual no estarían causando hacinamiento en las prisiones.",
  },
  {
    id: 28,
    simulators: [1],
    subject: "soc",
    context: `<p>En el 2011, el movimiento estudiantil colombiano se organizó a través de la Mesa Amplia Nacional Estudiantil (MANE), con el fin de protestar en contra del proyecto de ley de Reforma a la Educación Superior propuesto por el Gobierno nacional.</p><br><p>Los estudiantes exigían una discusión amplia y democrática del contenido de la reforma, la cual ya estaba siendo discutida en el Congreso de la República. Ante las protestas, algunos sectores sociales insistieron en que tales manifestaciones generaban inestabilidad y que las reclamaciones debían tramitarse por las vías institucionales de representación democrática, tales como el legislativo.</p><br><p>Finalmente, y después de dos meses de movilizaciones, el Gobierno decidió retirar el proyecto de ley y generar un proceso de socialización con la sociedad civil, incluidos estudiantes, profesores y directivos universitarios, entre otros.</p>`,
    text: "De acuerdo con la situación descrita, ¿cuál de las siguientes opciones describe adecuadamente la relación entre los movimientos sociales y la democracia?",
    options: [
      "Los movimientos sociales derivan en protestas que generan un ambiente de inestabilidad y debilitan la democracia.",
      "Los movimientos sociales solo son democráticos cuando hacen uso de las vías institucionales de representación.",
      "Los movimientos sociales permiten canalizar y expresar demandas sociales y, por tanto, fortalecen la democracia.",
      "Los movimientos sociales son los únicos mecanismos de representación y participación en una democracia como la colombiana.",
    ],
    correct: 2,
    competency: "Pensamiento Social (Ciencias Sociales).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Identifica y usa conceptos sociales básicos (económicos, políticos, culturales y geográficos).",
    component: "",
    standard:
      "Identifico y tomo posición frente a las principales causas y consecuencias políticas, económicas, sociales y ambientales de la aplicación de las diferentes teorías y modelos económicos en el siglo XX y formulo hipótesis que me permitan explicar la situación de Colombia en este contexto.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar el papel que pueden tener los movimientos u organizaciones sociales en un Estado social de derecho.",
    justification:
      "La opción C es correcta porque describe las características principales de los movimientos sociales en la democracia de un país.",
    invalidOptions:
      "La opción A no es correcta porque parte de una generalización de lo que son los movimientos sociales. La opción B no es correcta porque existen otras formas de representación enmarcadas también dentro de la democracia. La opción D no es correcta porque los movimientos sociales no son la única forma de representación y participación en una democracia, no es necesario pertenecer a un movimiento social para poder acceder a los mecanismos de participación y representación.",
  },
  {
    id: 29,
    simulators: [1],
    subject: "soc",
    context: `<p>Un informe de la UNICEF sobre los pueblos indígenas en Colombia señala lo siguiente:</p><br><p>"La tierra para los indígenas tiene un significado amplio, que comprende no solo la superficie sino los recursos naturales –flora, fauna, ríos, lagos, etc.– que hay en ella. En contraste con el concepto de propiedad individual, propio de la cultura occidental, la tierra y los recursos son, generalmente, poseídos y utilizados en forma comunitaria por los indígenas".</p>`,
    text: "Analizando el contenido de este fragmento, se puede afirmar que hay diferencias culturales entre los pueblos indígenas y otros grupos sociales que habitan en Colombia, porque los indígenas",
    options: [
      "tienen prácticas más avanzadas de protección del medio ambiente que otros grupos sociales.",
      "consideran que la propiedad colectiva es más rentable que la propiedad privada.",
      "no recibieron ninguna influencia de las culturas occidentales que llegaron al continente.",
      "tienen concepciones distintas sobre el uso y aprovechamiento de los recursos naturales.",
    ],
    correct: 3,
    competency: "Pensamiento Social.",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Identifica y usa conceptos sociales básicos (económicos, políticos, culturales y geográficos).",
    component: "",
    standard:
      "Comprendo que el ejercicio político es el resultado de esfuerzos por resolver conflictos y tensiones que surgen en las relaciones de poder entre los Estados y en el interior de ellos mismos.",
    skill: "",
    evaluationCriteria:
      "La habilidad para comprender formas de ver la vida por parte de diferentes comunidades.",
    justification:
      "La opción D es correcta porque corresponde a la concepción que tienen los indígenas sobre la tierra y el uso de esta como aprovechamiento de los recursos naturales.",
    invalidOptions:
      "La opción A no es correcta porque la pregunta está enfocada en establecer las diferencias entre dos perspectivas y no sólo en juzgar cuál de las dos es mejor. La opción B es incorrecta pues no se está preguntando sobre la rentabilidad de la tierra como un recurso natural, por otro lado, dentro de las comunidades indígenas la rentabilidad es asociada a la cosmogonía. La opción C es incorrecta porque desconoce las influencias entre las culturas indígenas y las culturas occidentales.",
  },
  {
    id: 30,
    simulators: [1],
    subject: "soc",
    context: `<p>"… con el surgimiento del narcotráfico de una manera organizada y alrededor del tema de la producción, distribución, circulación y protección de los narcotraficantes, llegaron propuestas de organización de grupos delincuenciales a los barrios populares con distintas funciones: cuidar el negocio, ajustar cuentas y cobrar venganza. Se fortaleció entonces un aparato militar, al lado de una cultura de enriquecimiento fácil y de solución violenta de los conflictos…".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado de: Yarse, E. (2007). En series el Colombiano.</em></p></div>`,
    text: "De acuerdo con los elementos incluidos en el artículo anterior, se podría deducir que en este se hace referencia a la violencia urbana de la década de",
    options: [
      "1980, porque se describe la influencia de los carteles en la configuración de prácticas delictivas.",
      "1990, porque se ubica como protagonistas a bandas criminales financiadas por paramilitares.",
      "1980, porque se hace referencia a una práctica violenta como forma de solucionar los problemas.",
      "1960, porque se instala como escenario del conflicto a la ciudad, en particular los barrios populares.",
    ],
    correct: 0,
    competency:
      "Interpretación y Análisis de Perspectivas (Ciencias Sociales).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Inscribe una fuente primaria dada en un contexto económico, político o cultural.",
    component: "",
    standard:
      "Identifico algunas características culturales y sociales de los procesos de transformación que se generaron a partir del desarrollo político y económico de Colombia y el mundo a lo largo del siglo XX.",
    skill: "",
    evaluationCriteria:
      "La habilidad para contrastar información relacionada con una fuente y un hecho específico.",
    justification:
      "La opción A es la opción correcta ya que en la década de 1980 el narcotráfico configuró las prácticas delictivas en las ciudades, como se muestra en la fuente citada.",
    invalidOptions:
      "No es la opción B pues en 1990 las prácticas delictivas ya estaban configuradas en los barrios urbanos y los carteles de las drogas se reconfiguraron en otras organizaciones. No es la opción C, pues solo menciona una parte de las prácticas delictivas dejando invisibilizado características principales de los carteles. No es la D porque en 1960 se estaba viviendo una violencia bipartidista y una violencia guerrillera en el campo; además, los carteles de la droga tienen el auge en la década de 1980.",
  },
  {
    id: 31,
    simulators: [1],
    subject: "soc",
    context: `<p>La integración económica se da cuando países cercanos acuerdan unificar aspectos de su política económica y social. Esto se traduce en el uso de una misma moneda y en la libre circulación de mercancías y personas dentro de sus territorios.</p>`,
    text: "En la actualidad, el ejemplo más visible y claro de integración económica lo constituye",
    options: [
      "el Mercado Común del Sur (Mercosur).",
      "los Estados Unidos de Norteamérica.",
      "el Tratado de Libre Comercio (TLC).",
      "la Unión Europea (EU).",
    ],
    correct: 3,
    competency: "Pensamiento Reflexivo y Sistémico (Ciencias Sociales).",
    level: "",
    assertion: "Evalúa usos sociales de las ciencias sociales.",
    evidence: "Analiza modelos conceptuales y sus usos en decisiones sociales.",
    component: "",
    standard:
      "Identifico y tomo posición frente a las principales causas y consecuencias políticas, económicas, sociales y ambientales de la aplicación de las diferentes teorías y modelos económicos en el siglo XX y formulo hipótesis que me permitan explicar la situación de Colombia en este contexto.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar hechos relacionados con fenómenos económicos.",
    justification:
      "La opción D es la correcta ya que es la región donde se da la unificación de la moneda de diferentes países, en el euro, y se permite la libre circulación de las personas por una parte del territorio europeo.",
    invalidOptions:
      "No es la opción A pues el MERCOSUR, si bien es un bloque económico conformado por varios países, no contempla la unificación de monedas en una sola. Puede existir la posibilidad de un libre tránsito, pero este es restringido a pocos países. No es la opción B porque Estados Unidos no es una región conformada por varios países. No es la opción C ya que el TLC solo implica el libre tránsito de mercancías con excepciones arancelarias y no hace mención del libre tránsito de personas o una moneda unificada.",
  },
  {
    id: 32,
    simulators: [1],
    subject: "soc",
    context: `<p>En Colombia, si el presidente quisiera declarar el estado de excepción para controlar a los medios de comunicación de la oposición, ¿cuál debería ser la posición de la Corte Constitucional?</p>`,
    text: "¿cuál debería ser la posición de la Corte Constitucional?",
    options: [
      "Rechazar la propuesta del presidente, porque solo la Corte puede declarar el estado de excepción.",
      "Apoyar la petición, pues a veces los medios transmiten información que puede generar caos.",
      "Rechazar este uso del estado de excepción, porque esta figura no puede usarse para vulnerar las libertades fundamentales.",
      "Apoyar al presidente, pues la Corte Constitucional debe trabajar junto al poder ejecutivo para favorecer la unidad del Estado.",
    ],
    correct: 2,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce la organización del Estado: Conoce las funciones y alcances de las ramas del poder y de los organismos de control.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer situaciones en las que se están respetando o vulnerando los derechos fundamentales.",
    justification:
      "La opción C es la correcta ya que la Corte Constitucional vela para que toda ley promovida por la Rama Ejecutiva se encuentre dentro del marco constitucional protegiendo los derechos y los deberes de los ciudadanos. Por eso rechazará el uso de estado de excepción para violar un derecho fundamental.",
    invalidOptions:
      "No es la opción A porque la función de la Corte Constitucional es velar porque las leyes no estén por encima de la Constitución; además el presidente de la República es el que debe declarar el estado de excepción. No es la B porque la Corte Constitucional no puede pasar por encima de los derechos que defiende y, además, no es la encargada de juzgar el accionar de los medios de comunicación. No es la D, pues esta opción viola el equilibrio de poderes públicos, además, desconoce la función de la Corte Constitucional.",
  },
  {
    id: 33,
    simulators: [1],
    subject: "soc",
    context: `<p>Un informe sobre las causas de los conflictos armados entre etnias en África plantea que los ejércitos insurgentes financian sus operaciones mediante el saqueo de recursos naturales. Por tanto, se propone en este informe que una de las posibles soluciones a los conflictos armados sea evitar que los grupos armados tengan acceso a estos recursos.</p>`,
    text: "¿Es posible adaptar esta solución a los conflictos latinoamericanos?",
    options: [
      "No, porque los conflictos armados en América Latina no se relacionan con conflictos entre etnias.",
      "No, porque los conflictos armados en África tienen raíces históricas distintas a los de América Latina.",
      "Sí, si los conflictos armados en América Latina, como los africanos, tienen causas étnicas.",
      "Sí, si se comprueba que los ejércitos insurgentes en América Latina financian sus actividades con la explotación de recursos naturales.",
    ],
    correct: 3,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Analiza los efectos en distintas dimensiones que tendría una posible intervención.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "La comprensión sobre en qué condiciones se puede aplicar a una misma solución en diferentes contextos.",
    justification:
      "La opción D es la opción correcta pues establece que para adoptar la medida en Latinoamérica debe revisarse si existe relación entre la explotación de los recursos naturales como fuente de financiamiento de los grupos armados ilegales.",
    invalidOptions:
      "No es la opción A pues omite toda referencia a la dimensión ambiental o la explotación de recursos naturales de forma ilegal, ya que se concentran en la problemática étnica, y esta tiene un bajo porcentaje en los conflictos latinoamericanos. No es la opción B, si bien la afirmación es correcta teniendo en cuenta la dimensión histórica esta no tiene en cuenta la dimensión ambiental o la explotación de recursos naturales. No es la C pues omite la dimensión ambiental y solo hace referencia a las causas étnicas.",
  },
  {
    id: 34,
    simulators: [1],
    subject: "soc",
    context: `<p>"La Unión Patriótica no puede asumir el compromiso de la combinación de todas las formas de lucha, porque ni es una organización marxista-leninista, ni representa los intereses de una sola clase social, y su política es eminentemente civilista. Nosotros, las víctimas propiciatorias de la guerra sucia, mal haríamos en reivindicar la lucha armada como una opción política". Este testimonio pertenece a Bernardo Jaramillo Ossa, político y militante de izquierda, asesinado en Bogotá, D. C. en 1990.</p>`,
    text: "De esta alocución, se puede concluir que la intención del autor es",
    options: [
      "buscar alternativas de paz para la desmovilización de una organización guerrillera.",
      "denunciar la persecución política a los militantes de los partidos de izquierda.",
      "defender el derecho a la participación política de la Unión Patriótica.",
      "desmarcar la Unión Patriótica de la ideología de los grupos subversivos.",
    ],
    correct: 3,
    competency:
      "Interpretación y Análisis de Perspectivas (Ciencias Sociales).",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Comprendo que el ejercicio político es el resultado de esfuerzos por resolver conflictos y tensiones que surgen en las relaciones de poder entre los Estados y en el interior de ellos mismos.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar cuál es la intención de una afirmación teniendo en cuenta un contexto.",
    justification:
      "La opción D es correcta, pues hace referencia a la condición civilista y no una relación con grupos armados. Al mismo tiempo, toman distancia de los prejuicios de ser marxista-leninistas, ideología que se asocia a grupos armados ilegales de Colombia.",
    invalidOptions:
      "No es la A porque la Unión Patriótica es un partido político y no es catalogado como una organización guerrillera, además, en la evidencia no hace alusión a alternativas de paz. No es la opción B porque si bien hace referencia a la persecución que vivía los partidos de izquierda, el punto central de la evidencia se basa en posicionar a la Unión Patriótica como un partido político dentro de la legalidad. No es la C, pues en ninguna parte de la evidencia se hace referencia a los procesos de participación política.",
  },
  {
    id: 35,
    simulators: [1],
    subject: "soc",
    context: `<p>El Gobierno nacional ha decidido romper relaciones con un Gobierno vecino después de recibir información de algunos campesinos que habitan en la frontera, en el sentido de que ha habido movimientos del ejército del país vecino y que, según ellos, ese país vecino se prepara para invadir a Colombia.</p>`,
    text: "La decisión de romper relaciones con el país vecino es",
    options: [
      "adecuada siempre que los campesinos no hayan sido manipulados por los políticos locales.",
      "apresurada porque se sustenta en información insuficiente y posiblemente parcializada.",
      "adecuada y acorde con la protección de nuestro interés general.",
      "apresurada porque la declaración de unos campesinos no puede ser confiable.",
    ],
    correct: 1,
    competency:
      "Interpretación y Análisis de Perspectivas (Competencias Ciudadanas).",
    level: "",
    assertion: "Contextualiza y evalúa usos de fuentes y argumentos.",
    evidence:
      "Evalúa posibilidades y limitaciones del uso de una fuente para apoyar argumentos o explicaciones.",
    component: "",
    standard:
      "Expreso rechazo ante toda forma de discriminación o exclusión social y hago uso de los mecanismos democráticos para la superación de la discriminación y el respeto a la diversidad.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar si una información proveniente de una fuente es suficiente o no para hacer una conclusión.",
    justification:
      "La opción B es la correcta ya que, para romper relaciones con un país se debe surtir un proceso diplomático en el que se corrobore la información con diferentes organismos del Estado.",
    invalidOptions:
      "No es la opción A ya que no se puede romper relaciones con un país vecino basados únicamente en un testimonio y menos si hay indicios de interés políticos de por medio. No es la C pues no hace referencia a los procedimientos gubernamentales para romper relaciones con países vecinos. No es la D porque las acciones del Estado deben sustentarse en diferentes organismos del Gobierno, como en la cancillería o en los diferentes ministerios.",
  },
  {
    id: 36,
    simulators: [1],
    subject: "soc",
    context: `<p>En una empresa, uno de los miembros de la junta directiva le dice al gerente general: "Hay un grupo de empleados que está inconforme con las políticas laborales que implementamos recientemente. Esto preocupa, porque es un grupo muy activo que, al parecer, está movilizando a varios empleados con el objetivo de conformar un sindicato". Ante esto, el gerente afirmó: "Propongo hablar con ese grupo para comunicarle que aquí están prohibidas las protestas y las movilizaciones, y que, si tienen alguna inquietud, será atendida de manera individual con cada empleado".</p>`,
    text: "¿Qué derecho constitucional podría ponerse en riesgo con la propuesta del gerente?",
    options: [
      "El derecho al libre acceso a la información.",
      "El derecho a la participación política.",
      "El derecho a la libertad de creencias.",
      "El derecho a la libre asociación.",
    ],
    correct: 3,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer situaciones en las que se están respetando o vulnerando los derechos fundamentales.",
    justification:
      "La opción D es la correcta pues hace referencia al derecho de libre asociación, contenido en la Constitución, que consiste en la facultad de unirse y formar grupos con objetivos lícitos, en este caso, reclamar mejoras en las condiciones laborales.",
    invalidOptions:
      "No es la opción A ya que el derecho al acceso a la información está relacionado con el derecho fundamental de la libre expresión, haciendo referencia a aspectos individuales y no a la conformación de grupos. No es la B, puesto que el derecho a la libre participación política hace referencia a la libertad al acceso a la función pública de elegir y ser elegido. No es la C porque el derecho a la libertad de creencias está asociado a la libertad de los individuos de profesar el culto de su preferencia.",
  },
  {
    id: 37,
    simulators: [1],
    subject: "soc",
    context: ``,
    text: "¿Cuál de las siguientes situaciones requiere una acción solidaria, derivada de lo contemplado en la Constitución Política de Colombia?",
    options: [
      "Hubo un deslizamiento de tierras que dejó varios heridos graves. Las familias no han sido evacuadas de la zona, la cual podría presentar más deslizamiento.",
      "Los estudiantes de un colegio reclaman poder ir al colegio con el pelo largo o tinturado, ante lo cual las directivas han respondido con un no rotundo.",
      "Un grupo numeroso de ciudadanos y ciudadanas homosexuales reclaman su derecho a casarse, pero los organismos pertinentes no han respondido.",
      "El 46 % de la población rural trabaja en condiciones que hacen que su capacidad adquisitiva haya disminuido en los últimos años.",
    ],
    correct: 0,
    competency: "Pensamiento Social (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende modelos conceptuales, sus características y contextos de aplicación.",
    evidence:
      "Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La capacidad para acciones asociadas a los derechos y deberes contemplados en la Constitución.",
    justification:
      'La opción A muestra una situación fortuita en la que el Gobierno debe canalizar las ayudas para resolver el problema de la comunidad de forma inmediata. Esto lo debe hacer por medio de una acción solidaria que le permita a los ciudadanos participar voluntariamente, lo cual corresponde con lo planteado en la Constitución, capítulo 5 sobre deberes y obligaciones de la persona y del ciudadano: "Obrar conforme al principio de solidaridad social, respondiendo con acciones humanitarias ante situaciones que pongan en peligro la vida o la salud de las personas".',
    invalidOptions:
      "No es la opción B porque es una situación particular, en donde los acudientes de los menores han aceptado las reglas del colegio una vez hayan firmado el contrato escolar y el manual de convivencia. No es la opción C, pues si bien los individuos con diferente orientación de género deben velar porque se le respeten los derechos, la acción que piden no tiene cabida dentro de la acción solidaria, pues no implica un alto riesgo de vida o muerte para que el Estado o los ciudadanos intervengan de inmediato y canalice ayudas. No es la opción D, pues el análisis de la dimensión económica debe ser resuelto por otros organismos del Gobierno para brindar soluciones que tengan mayor efecto y no necesariamente a través de la acción solidaria.",
  },
  {
    id: 38,
    simulators: [1],
    subject: "soc",
    context: `<p>Los vecinos de un conjunto de viviendas se reúnen para redactar conjuntamente el reglamento de habitantes. Un grupo de vecinos considera que no se deben permitir mascotas en el conjunto, por el ruido y suciedad que estas pueden producir. Otro grupo considera que se pueden permitir las mascotas, pero que no se deben permitir las fiestas en las noches.</p>`,
    text: "De acuerdo con lo anterior, los puntos de vista de los dos grupos son semejantes, porque creen que",
    options: [
      "es más importante la limpieza del conjunto que las preferencias de los residentes.",
      "es responsabilidad de todos los residentes cuidar los espacios comunes del conjunto.",
      "es importante que los residentes eviten hacer ruido que moleste a los demás vecinos.",
      "se debe respetar el derecho de todos de disponer de sus predios como les parezca.",
    ],
    correct: 2,
    competency: "Interpretación y Análisis de Perspectivas.",
    level: "",
    assertion: "Comprende perspectivas de distintos actores y grupos sociales.",
    evidence: "Reconoce y compara perspectivas de actores y grupos sociales.",
    component: "",
    standard:
      "Participo constructivamente en iniciativas o proyectos a favor de la no-violencia en el nivel local o global.",
    skill: "",
    evaluationCriteria:
      "La habilidad para reconocer el papel que tienen las normas en una sociedad.",
    justification:
      "La opción C es correcta porque demuestra la preocupación en común de los dos grupos de vecinos frente a la tranquilidad de la comunidad.",
    invalidOptions:
      "No es la opción A porque solo un grupo de vecinos consideran que la limpieza es un aspecto fundamental para tener en cuenta en la redacción del reglamento. No es la opción B pues no evidencia una problemática que estén experimentando los vecinos y los obligue a tomar una posición. No es la D pues no tiene en cuenta que los vecinos viven en una comunidad que debe hacer acuerdos para el bienestar de todos.",
  },
  {
    id: 39,
    simulators: [1],
    subject: "soc",
    context: `<p>Un político propuso que, para asegurar la calidad en la educación escolar y que todos los estudiantes tengan acceso a los mismos libros de texto, estos deberían publicarse en un portal de internet.</p>`,
    text: "¿Cuál de las siguientes opciones expresa condiciones que dificultan la implementación de esta propuesta?",
    options: [
      "La propuesta no tiene en cuenta las condiciones tecnológicas de las instituciones de todo el país.",
      "Los políticos no son expertos en pedagogía y por eso sus propuestas no son adecuadas.",
      "La propuesta no tiene en cuenta que los libros en internet suelen tener información errada.",
      "Los estudiantes no deberían tener libros iguales porque sus condiciones socioeconómicas son distintas.",
    ],
    correct: 0,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Analiza los efectos en distintas dimensiones que tendría una posible intervención.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar elementos en una situación que favorecen o no la implementación o efectividad de una solución.",
    justification:
      "La opción A es correcta porque expresa las condiciones desiguales del acceso a la tecnología de las instituciones educativas del país. Esto sería la condición que dificulta la implementación de la propuesta del político.",
    invalidOptions:
      "No es la opción B porque si bien el político puede no ser experto en pedagogía, esto no es una condición que dificulte la implementación de su propuesta. No es la opción C pues la calidad del contenido de internet no hace referencia a las dificultades que puedan tener los estudiantes al acceso a la tecnología. La opción D hace referencia a una discriminación socioeconómica entre las regiones del país estableciendo un prejuicio, lo cual sería contradictorio para la propuesta política que se expresa.",
  },
  {
    id: 40,
    simulators: [1, 3],
    subject: "soc",
    context: `<p>Un periódico colombiano publicó la siguiente noticia: "Luego de que la autoridad nacional a cargo de las licencias ambientales autorizara la construcción de un hotel ecoturístico dentro del parque Tayrona, territorio ancestral indígena, el ministro de Ambiente y Desarrollo Sostenible puso en duda la viabilidad de esa obra. De acuerdo con el ministro, la licencia que tiene este hotel no es viable porque permite talar una porción de bosque seco, ecosistema que está casi extinto en Colombia".</p><div style="margin-top:10px;font-size:11px;color:#888;font-style:italic;text-align:center"><p><em>Tomado y adaptado de: Redacción Vida de Hoy (2013, 10 de enero). Gobierno considera inviable hotel en el Tayrona. El Tiempo. Recuperado de http://www.eltiempo.com/archivo/dcumento/CMS-12505333</em></p></div>`,
    text: "En esta noticia, el narrador está dándole un mayor énfasis a",
    options: [
      "el efecto político del proyecto porque registra la reacción del Gobierno nacional.",
      "el riesgo que corren los recursos de un parque nacional, debido a la licencia ambiental.",
      "la restricción económica del proyecto hotelero, pues habla de su viabilidad.",
      "la construcción de un hotel ecoturístico en un territorio ancestral indígena.",
    ],
    correct: 1,
    competency: "Pensamiento Reflexivo y Sistémico (Competencias Ciudadanas).",
    level: "",
    assertion:
      "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.",
    evidence:
      "Establece relaciones que hay entre dimensiones presentes en una situación problemática.",
    component: "",
    standard:
      "Conozco y sé usar los mecanismos constitucionales de participación que permiten expresar mis opiniones y participar en la toma de decisiones políticas tanto a nivel local como a nivel nacional.",
    skill: "",
    evaluationCriteria:
      "La habilidad para identificar en una situación problemática cuáles dimensiones son más importantes.",
    justification:
      "La opción B es la correcta, porque menciona los riesgos a los que se expondrían los recursos naturales del parque debido a la licencia ambiental.",
    invalidOptions:
      "No es correcta la opción A porque solo hace mención al efecto político del proyecto, desconociendo la perspectiva ambiental. No es la opción C porque la dimensión central es la viabilidad económica y no habla del énfasis de la noticia que se refiere a lo ambiental. No es la opción D ya que en esta opción se hace referencia a la dimensión cultural, el énfasis central de la noticia es la dimensión ambiental.",
  },

  // mat - Matemáticas (20 preguntas)
  {
    id: 41,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>En una bolsa hay 3 bolas rojas, 3 negras y 12 blancas. Una persona afirma que al sacar una bola al azar, los tres colores tienen la misma probabilidad de salir.</p>`,
    text: "Esta afirmación es",
    options: [
      "verdadera, pues el número de bolas de cada color no importa.",
      "falsa, pues no se sabe el número total de bolas en la bolsa.",
      "falsa, pues hay más bolas de un color que de los otros dos.",
      "verdadera, pues las bolas están repartidas de igual manera.",
    ],
    correct: 2,
    competency: "Argumentación.",
    level: "",
    assertion:
      "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.",
    evidence:
      "Plantea afirmaciones que sustentan o refutan una interpretación dada a la información disponible en el marco de la solución de un problema.",
    component: "",
    standard:
      "Justifico o refuto inferencias basadas en razonamientos estadísticos a partir de resultados de estudios publicados en los medios o diseñados en el ámbito escolar.",
    skill: "",
    evaluationCriteria:
      "La capacidad para justificar la validez de una afirmación sobre una probabilidad a partir de la descripción de los elementos de un conjunto.",
    justification:
      "En la bolsa hay en total 18 bolas y, por tanto, la probabilidad de seleccionar al azar una roja es de 3/18; una negra, de 3/18; una blanca, de 12/18. Luego, como 3 < 12 entonces el color blanco tiene una mayor probabilidad de ser elegido al azar.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que, al haber bolas de 3 colores en la bolsa, la probabilidad de sacar una bola de cualquier color es de 1/3. <br> Es posible que los estudiantes que elijan la opción B consideren que las 3 bolas rojas, las 3 negras y las 12 blancas son solo una muestra del total de bolas que hay en la bolsa, por lo que se desconoce el número total de bolas. <br> Es posible que los estudiantes que elijan la opción D consideren que, como las bolas están mezcladas dentro de la bolsa, y no se puede ver el color, entonces están repartidas de igual manera.",
  },
  {
    id: 42,
    simulators: [1, 3],
    subject: "mat",
    context: `
  <p>
  <img style="width:100%" src="../shared/img/questions/mat1.png" alt='' loading="lazy">  
 </p>
<p>
  <img style="width:50%" src="../shared/img/questions/mat2.png" alt='' loading="lazy">  
 </p>
<p>Con respecto a la vertical, la torre se ha inclinado 4° como se muestra en la gráfica.</p>`,
    text: "¿Cuánto mide el otro ángulo?",
    options: ["4º", "14º", "86º", "90º"],
    correct: 2,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Da cuenta de las características básicas de la información presentada en diferentes formatos como series, gráficas, tablas y esquemas.",
    component: "",
    standard:
      "Identifico características de localización de objetos geométricos en sistemas de representación cartesiana y otros (polares, cilíndricos y esféricos) y en particular de las curvas y figuras cónicas.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar el ángulo complementario a un ángulo dado.",
    justification:
      "La suma de los dos ángulos debe ser igual a 90°. Como el ángulo de inclinación de la torre es de 4°, entonces el otro ángulo mide 90° – 4° = 86°.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A solamente identifique el ángulo de inclinación (4°). <br> Es posible que los estudiantes que elijan la opción B consideren que la suma de los dos ángulos debe ser igual a 18°. Por tanto, el otro ángulo mide 18° – 4° = 14°. <br> Es posible que los estudiantes que elijan la opción D solamente consideren que la suma de los dos ángulos debe ser igual a 90°.",
  },
  {
    id: 43,
    simulators: [1, 3],
    subject: "mat",
    context: `  <p>
                <img style="width:100%" src="../shared/img/questions/mat1.png" alt='' loading="lazy">  
              </p>`,
    text: "Aproximadamente, ¿qué porcentaje del total de personas que visitaron la torre esa semana entraron sin hacer reserva?",
    options: ["56 %.", "50 %.", "44 %.", "40 %."],
    correct: 2,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Da cuenta de las características básicas de la información presentada en diferentes formatos como series, gráficas, tablas y esquemas.",
    component: "",
    standard:
      "Comparo y contrasto las propiedades de los números (naturales, enteros, racionales y reales) y las de sus relaciones y operaciones para construir, manejar y utilizar apropiadamente los distintos sistemas numéricos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar el porcentaje asociado a la suma de un conjunto de números dados en una tabla.",
    justification:
      "El total de personas que entraron sin reserva fue de: 300 + 300 + 500 + 700 + 300 + 300 + 700 = 3.100, y el total de personas que entran con reserva fue de: 700 + 800 + 200 + 600 + 500 + 500 + 600 = 3.900, para un total de 3.100 + 3.900 = 7.000 visitantes a la torre. Por tanto, el porcentaje del total de personas que visitaron la torre esa semana sin hacer reserva fue de 3.100/7.000 × 100 = 31/70 × 100, que es aproximadamente igual a 44 %.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren el porcentaje de personas que entraron con reserva, es decir, 3.900/7.000 × 100 = 39/70 × 100, que es aproximadamente igual a 56 %. <br> Es posible que los estudiantes que elijan la opción B consideren que en cada grupo (los que entraron con reserva, y los que no hicieron reserva), hay la misma cantidad de personas y, por tanto, el porcentaje de personas que entró sin reserva es del 50 %. <br> Es posible que los estudiantes que elijan la opción D únicamente consideren la cantidad de personas que entraron con o sin reserva entre semana: 300 + 300 + 500 + 700 + 300 = 2.100 sin reserva y, 700 + 800 + 200 + 600 + 500 = 2.800 con reserva, para un total de 2.100 + 2.800 = 4.900 visitantes. Por tanto, el porcentaje del total de personas que visitaron la torre entre semana sin hacer reserva fue de 2.100/4.900 × 100 = 21/49 × 100, que es aproximadamente igual a 40 %.",
  },
  {
    id: 44,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>
                <img style="width:100%" src="../shared/img/questions/mat1.png" alt='' loading="lazy">  
              </p>
<p>El proceso que muestra cómo se obtiene el dinero recaudado en la semana, de cada forma de venta, es:</p>
<p>
                <img style="width:100%" src="../shared/img/questions/mat3.png" alt='' loading="lazy">  
              </p>`,
    text: "¿Cuál de las siguientes preguntas <strong>NO</strong> se puede resolver empleando una parte del proceso anterior?",
    options: [
      "¿Con cuál tipo de entrada se recaudó más dinero?",
      "¿Cuántas personas ingresaron en la semana?",
      "¿Cuál es la ganancia total del sitio turístico?",
      "¿Cuánto dinero se recaudó por tipo de entrada?",
    ],
    correct: 2,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Da cuenta de las características básicas de la información presentada en diferentes formatos como series, gráficas, tablas y esquemas.",
    component: "",
    standard:
      "Comparo y contrasto las propiedades de los números (naturales, enteros, racionales y reales) y las de sus relaciones y operaciones para construir, manejar y utilizar apropiadamente los distintos sistemas numéricos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar el problema que no puede ser resuelto con la información presentada en un esquema.",
    justification:
      "Con el proceso solo se puede calcular y comparar el dinero recaudado en la semana por concepto de entradas (con o sin reserva). Sin embargo, otros valores del sitio turístico, como los gastos, son desconocidos, por lo que no es posible calcular la ganancia total del sitio.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que en el paso se están sumando la cantidad de personas y no la cantidad de entradas. <br> Es posible que los estudiantes que elijan la opción B consideren que al no haber un paso en el procedimiento en donde se sumen la cantidad de personas que ingresaron con reserva y sin ella, entonces, no se puede determinar cuántas personas en total ingresaron en la semana. <br> Es posible que los estudiantes que elijan la opción D consideren que la cantidad de personas que entraron con reserva durante la semana se debe multiplicar por 5,5, por lo que, con el proceso, no se podría determinar cuánto dinero se recaudó por este tipo de entrada.",
  },
  {
    id: 45,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>
                <img style="width:100%" src="../shared/img/questions/mat1.png" alt='' loading="lazy">  
              </p>`,
    text: "El recaudo total de la semana, registrada en la tabla, fue aproximadamente de",
    options: [
      "14 mil euros.",
      "140 mil euros.",
      "120 euros.",
      "120.000 euros.",
    ],
    correct: 1,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Resuelve un problema que involucra información cuantitativa o esquemática.",
    component: "",
    standard:
      "Comparo y contrasto las propiedades de los números (naturales, enteros, racionales y reales) y las de sus relaciones y operaciones para construir, manejar y utilizar apropiadamente los distintos sistemas numéricos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para calcular un valor aproximado a partir de los valores presentados en una tabla.",
    justification:
      "Como cada entrada sin reserva vale 17 euros, entonces el total recaudado por personas que ingresaron sin reserva fue de 3.100 × 17 euros = 52.700 euros, y el total recaudado por personas que ingresaron con reserva fue de 3.900 × 22,5 euros = 87.750 y, por tanto, el recaudo total de la semana registrada en la tabla fue de aproximadamente 140 mil euros.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A aproximen las unidades y decenas de mil de los dos totales por tipo de entrada al entero más cercano (52 → 5, 87 → 9) y sumen estos dos valores (5 + 9 = 14), asociándolos con 14 mil euros. <br> Es posible que los estudiantes que elijan la opción C consideren que el total recaudado por personas que ingresaron sin reserva fue de 3.100 × 22,5 euros = 69.750 euros, y el total recaudado por personas que ingresaron con reserva fue de 3.900 × 17 euros = 66.300 y redondeen las unidades y decenas de mil de los dos totales por tipo de entrada como 69 → 60 y 66 → 60, sumando estos dos valores, y asociándolos con 120 euros. <br> Es posible que los estudiantes que elijan la opción D aproximen el valor de las entradas (con reserva: 20 euros; sin reserva, 15 euros) y consideren que el total recaudado por personas que ingresaron sin reserva fue de 3.100 × 15 euros = 46.500 euros, y el total recaudado por personas que ingresaron con reserva fue de 3.900 × 20 euros = 78.000 obteniendo que la suma es aproximadamente igual a 120.000 euros.",
  },
  {
    id: 46,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>
                <img style="width:100%" src="../shared/img/questions/mat1.png" alt='' loading="lazy">  
              </p>`,
    text: "La mediana de la cantidad de turistas sin reserva que ingresan a la torre es 300; la de los que ingresan con reserva es 600. Solamente teniendo esto en cuenta, ¿es correcto afirmar que entran el doble de turistas con reserva que sin ella?",
    options: [
      "No, la mediana es una medida de localización central.",
      "No, la mediana muestra la dispersión de los datos.",
      "Sí, la mediana me da el promedio de los datos.",
      "Sí, la mediana me da la mitad de los datos.",
    ],
    correct: 0,
    competency: "Argumentación.",
    level: "",
    assertion:
      "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.",
    evidence:
      "Plantea afirmaciones que sustentan o refutan una interpretación dada a la información disponible en el marco de la solución de un problema.",
    component: "",
    standard:
      "Uso comprensivamente algunas medidas de centralización, localización, dispersión y correlación (percentiles, cuartiles, centralidad, distancia, rango, varianza, covarianza y normalidad).",
    skill: "",
    evaluationCriteria:
      "La capacidad para justificar la validez de una afirmación sobre la comparación de dos conjuntos de datos a partir de la interpretación de la mediana de cada conjunto.",
    justification:
      "La mediana es el valor que está en la posición central cuando los datos están ordenados y, por tanto, no caracteriza necesariamente los totales en la suma de los valores de cada conjunto de datos.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción B consideren que la mediana muestra la dispersión de los datos a través de la diferencia entre el menor y el mayor valor (600 – 300), por lo que no representa los totales en la suma de los valores de cada conjunto de datos. <br> Es posible que los estudiantes que elijan la opción C consideren que para calcular la mediana es necesario conocer el total de turistas por tipo de entrada, por lo que, si una mediana es el doble de la otra, el total de turistas por un tipo de entrada es el doble del total de turistas por el otro tipo de entrada. <br> Es posible que los estudiantes que elijan la opción D consideren que los datos de cada conjunto se distribuyen de la misma manera, por lo que, si la mitad de uno de los conjuntos es el doble de la mitad del otro, el total de los datos del primer conjunto es el doble del total de datos del segundo conjunto.",
  },
  {
    id: 47,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>El dueño de un parque recreativo planea construir tres piscinas y decorar sus bordes con baldosas blancas y azules, tal como se muestra en las figuras 1, 2 y 3.</p>
<p>
                <img style="width:100%" src="../shared/img/questions/mat4.png" alt='' loading="lazy">  
              </p>`,
    text: "Según la observación de las figuras 1, 2 y 3, puede afirmarse correctamente que el número de baldosas",
    options: [
      "azules se incrementa en seis de una piscina a la del siguiente tamaño.",
      "blancas aumenta en ocho a medida que crece el tamaño de las piscinas.",
      "azules es el doble de la cantidad de baldosas blancas en cada piscina.",
      "blancas es la tercera parte de la cantidad de las baldosas azules.",
    ],
    correct: 0,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Da cuenta de las características básicas de la información presentada en diferentes formatos como series, gráficas, tablas y esquemas.",
    component: "",
    standard:
      "Comparo y contrasto las propiedades de los números (naturales, enteros, racionales y reales) y las de sus relaciones y operaciones para construir, manejar y utilizar apropiadamente los distintos sistemas numéricos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar un patrón a partir de un conjunto de figuras dadas.",
    justification:
      `A partir de las figuras mostradas, se observa que: 
      <table border="1" cellpadding="4" cellspacing="0" >
  <thead>
    <tr>
      <th style="padding: 2px;">Figura</th>
      <th style="padding: 2px;">Baldosas azules</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align='center'>1</td>
     <td>12</td>
    </tr>
    <tr>
     <td align='center'>2</td>
      <td>18 = 12 + 6</td>   
    </tr>
    <tr>
     <td align='center'>3</td>
      <td>24 = 18 + 6</td>
    </tr>
  </tbody>
</table>
       De lo anterior, se puede concluir que el número de baldosas azules aumenta en 6 de una piscina a la del siguiente tamaño.`,
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción B cuenten las baldosas blancas en la figura 1 (8) y consideren que en las siguientes figuras el número de baldosas blancas aumentará en esta cantidad. <br> Es posible que los estudiantes que elijan la opción C comparen únicamente la cantidad de baldosas azules y blancas en la última figura (24 y 12), concluyendo que la cantidad de baldosas azules es el doble de la cantidad de baldosas blancas en cada piscina. <br> Es posible que los estudiantes que elijan la opción D únicamente comparen la cantidad de baldosas azules de la última figura con la cantidad de baldosas blancas de la primera figura (24 y 8), concluyendo que la cantidad de baldosas blancas es la tercera parte de la cantidad de baldosas azules.",
  },
  {
    id: 48,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>Se lanzan cuatro fichas que tienen dos caras cada una. Una de las fichas es azul por sus dos caras, otra es blanca por sus dos caras y las otras fichas tienen una cara azul y una cara blanca.</p>`,
    text: "¿Cuál de los siguientes eventos es imposible que ocurra?",
    options: [
      "Obtener una cara azul y tres caras blancas.",
      "Obtener dos caras azules y dos caras blancas.",
      "Obtener tres caras azules y una cara blanca.",
      "Obtener cuatro caras azules y cero blancas.",
    ],
    correct: 3,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Resuelve un problema que involucra información cuantitativa o esquemática.",
    component: "",
    standard:
      "Resuelvo y planteo problemas usando conceptos básicos de conteo y probabilidad (combinaciones, permutaciones, espacio muestral, muestreo aleatorio, muestreo con remplazo).",
    skill: "",
    evaluationCriteria:
      "La capacidad para determinar un evento imposible a partir de la descripción del experimento aleatorio.",
    justification:
      "Dado que hay una ficha con sus dos caras blancas, y son cuatro fichas en total, en cualquier lanzamiento de las cuatro fichas siempre se obtendrá al menos una cara blanca. Por tanto, es imposible obtener cuatro caras azules y cero blancas.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que solo se puede asegurar que siempre se obtendrá una cara blanca y no tres caras blancas. <br> Es posible que los estudiantes que elijan la opción B consideren que, como solo hay una ficha que tienen sus dos caras azules y solo hay una ficha que tiene sus dos caras blancas, es imposible obtener dos caras azules y dos caras blancas en un solo lanzamiento. <br> Es posible que los estudiantes que elijan la opción C consideren que, como hay la misma cantidad de caras azules y blancas en las cuatro fichas, en el resultado de cada lanzamiento siempre se debe obtener la misma cantidad de caras azules y blancas.",
  },
  {
    id: 49,
    simulators: [1, 2, 3],
    subject: "mat",
    context: `<p>El costo de la boleta en un cinema depende de la edad de la persona, como lo muestra la tabla.</p>
<table style="text-align='center'" border="1" cellpadding="4" cellspacing="0">
<thead>
  <tr>
    <th>Edad en años (X)</th>
    <th style="padding:5px">Costo en pesos (Y)</th>
  </tr>
</thead>
<tbody>
  <tr align='center'><td >Desde 0 y hasta 8</td><td>5.000</td></tr>
  <tr align='center'><td>Más de 8 y hasta 16</td><td>7.000</td></tr>
  <tr align='center'><td style="padding:5px">Más de 16 y hasta 56</td><td>10.000</td></tr>
  <tr align='center'><td>Más de 56</td><td>6.000</td></tr>
</tbody>
</table>`,
    text: "La gráfica que representa esta función es",
    options: ["A.", "B.", "C.", "D."],
    optionsImg: [
           "mat4-A",
           "mat4-B",
          "mat4-C",
           "mat4-D",
         ],
    correct: 0,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Transforma la representación de una o más piezas de información.",
    component: "",
    standard:
      "Analizo las relaciones y propiedades entre las expresiones algebraicas y las gráficas de funciones polinómicas y racionales y de sus derivadas.",
    skill: "",
    evaluationCriteria:
      "La capacidad para construir la gráfica asociada a una función a trozos descrita en una tabla.",
    justification:
      `Con la información de la tabla se puede construir la gráfica de la función a trozos así: 
      <p>
  <img style="width:50%" src="../shared/img/questions/mat4-j1.png" alt='' loading="lazy">  
 </p>
   <p>
  <img style="width:50%" src="../shared/img/questions/mat4-j2.png" alt='' loading="lazy">  
 </p>
      desde 0 y hasta 8 el costo es 5.000; más de 8 y hasta 16 es 7.000; más de 16 y hasta 56 es 10.000; más de 56 es 6.000. 
      La gráfica correcta es la que representa cada intervalo con un segmento horizontal a la altura correspondiente, con los extremos abiertos y cerrados correctamente.`,
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción B identifiquen correctamente los costos de las boletas para los extremos inferiores de cada intervalo de edad (0, 8, 16, 56), obteniendo los puntos (0, 5.000), (8, 7.000), (16, 10.000), (56, 6.000), y ubiquen estos puntos en el plano y los unan con segmentos. <br> Es posible que los estudiantes que elijan la opción C identifiquen y grafiquen los intervalos en la gráfica, pero consideren que la función debe ser continua y, por tanto, la curva no puede tener saltos. <br> Es posible que los estudiantes que elijan la opción D identifiquen correctamente los costos de las boletas para los extremos inferior y superior de cada intervalo de edad, obteniendo los puntos (0, 5.000), (8, 5.000), (8, 7.000), (8, 16.000), (16, 10.000), (56, 10.000), (56, 6.000), y ubiquen estos puntos en el plano.",
  },
  {
    id: 50,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>En la figura se muestra la construcción de una cometa triangular, en la que se conoce únicamente la medida del ángulo M = 150º. El ángulo O debe ser menor que 150º para que la cometa vuele.</p>
<p>Se realiza el siguiente análisis para saber si la cometa volará o no volará:</p>
<p>I. Tomando en cuenta que M = 150º, N = 180º - 150º.<br>
II. N = 30º.<br>
III. La suma de los ángulos de un triángulo debe ser 160º.<br>
IV. Si N = 30º, O + P = 160º - 30º.<br>
V. O + P = 130º.<br>
VI. Así que O debe ser menor que 130º.<br>
VII. Finalmente, si O &lt; 130º entonces O &lt; 150º.<br>
VIII. La cometa volará.</p>`,
    text: "Del anterior análisis, el paso en el que se comete un error es el",
    options: [
      "I, porque si M = 150º, N debe ser la resta entre 160º y 150º, es decir, N = 10º.",
      "III, porque la suma de los ángulos internos de un triángulo debe ser 180º.",
      "VII, porque O < 130º no quiere decir O < 150º.",
      "VIII, porque si O < 150º la cometa no volará.",
    ],
    correct: 1,
    competency: "Argumentación.",
    level: "",
    assertion:
      "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.",
    evidence:
      "Argumenta a favor o en contra de un procedimiento para resolver un problema a la luz de criterios presentados o establecidos.",
    component: "",
    standard:
      "Uso argumentos geométricos para resolver y formular problemas en contextos matemáticos y en otras ciencias.",
    skill: "",
    evaluationCriteria:
      "La capacidad para justificar un error en un procedimiento para determinar si una figura dada cumple con una condición establecida.",
    justification:
      "La suma de los ángulos internos de un triángulo debe ser igual a 180°. Por tanto: O + P = 180° – 30° = 150°, de donde O < 150°. La conclusión sigue siendo verdadera, pero en la argumentación había una premisa falsa.",
    invalidOptions:
      'Es posible que los estudiantes que elijan la opción A consideren que la suma de dos ángulos suplementarios es igual a 160°. <br> Es posible que los estudiantes que elijan la opción C consideren que si O < 130°, a lo sumo se puede asegurar que O + 20° < 130° + 20° = 150°, pero no se puede establecer una relación únicamente entre O y 150°. <br> Es posible que los estudiantes que elijan la opción D asocien la expresión "O < 150°" con que el ángulo O es mayor que 150°, por lo que la cometa no volaría.',
  },
  {
    id: 51,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>Se realizó una encuesta a 200 clientes de una empresa de telecomunicaciones para saber cómo califican la calidad del servicio que reciben. La siguiente gráfica muestra los porcentajes de las calificaciones dadas por los clientes:</p>
<p>Porcentajes: Malo 40 % (clientes insatisfechos), Regular 15 % (clientes insatisfechos), Bueno 35 % (clientes satisfechos), Excelente 10 % (clientes satisfechos).</p>`,
    text: "La afirmación verdadera acerca de los resultados de la encuesta es:",
    options: [
      "Más de 30 clientes consideran que la calidad del servicio que ofrece la empresa es excelente.",
      "Menos de 50 clientes consideran que la calidad del servicio que ofrece la empresa es regular.",
      "Menos de 55 clientes están satisfechos con el servicio que ofrece la empresa.",
      "Más de 60 clientes consideran que la calidad del servicio que ofrece la empresa es bueno.",
    ],
    correct: 3,
    competency: "Argumentación.",
    level: "",
    assertion:
      "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.",
    evidence:
      "Plantea afirmaciones que sustentan o refutan una interpretación dada a la información disponible en el marco de la solución de un problema.",
    component: "",
    standard:
      "Propongo inferencias a partir del estudio de muestras probabilísticas.",
    skill: "",
    evaluationCriteria:
      "La capacidad para establecer una afirmación verdadera a partir de la información presentada en una gráfica.",
    justification:
      'Dado que la encuesta se realizó a 200 clientes, y el 35 % de los encuestados calificó como "bueno" el servicio, entonces 35/100 × 200 clientes = 70 clientes calificaron como "bueno" el servicio. Por tanto, es verdadero que más de 60 clientes consideran que la calidad del servicio que ofrece la empresa es buena.',
    invalidOptions:
      'Es posible que los estudiantes que elijan la opción A determinen correctamente que el 15 % de 200 clientes son 30 clientes y, por tanto, consideran que es verdadero que más de 30 clientes consideran "excelente" la calidad del servicio. <br> Es posible que los estudiantes que elijan la opción B asocien el valor 40 de la calidad regular del servicio con cantidad de clientes, concluyendo que es verdadero que menos de 50 clientes consideran que la calidad del servicio es regular. <br> Es posible que los estudiantes que elijan la opción C asocien los valores 35 y 10 de las calidades "bueno" y "excelente" del servicio con cantidades de clientes. Como la cantidad de clientes "satisfechos" es igual a la suma de la cantidad de clientes que consideraron el servicio "bueno" o "excelente", consideran que esta cantidad de clientes "satisfechos" es igual a 35 + 10 = 45 clientes, concluyendo que es verdadero que menos de 55 clientes están satisfechos con el servicio que ofrece la empresa.',
  },
  {
    id: 52,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>En una clase de Matemáticas se plantea la siguiente actividad:</p>
<p><em>"Quisiéramos dividir el segmento MN en dos partes congruentes".</em></p>
<p>Para su construcción, un estudiante efectuó de manera correcta el siguiente procedimiento:</p>
<p>Se construyen dos triángulos equiláteros MNP y MNQ. Luego se traza el segmento PQ, intersecando a MN en R, los ángulos MPR y RPN son congruentes entre sí. Como los triángulos MRP y PRN que se forman son congruentes, entonces MR es congruente con RN. Por tanto, MN se ha dividido en dos partes congruentes en el punto R.</p>`,
    text: "De acuerdo con la información anterior, la construcción geométrica que debió hacer el estudiante para realizar la actividad fue",
    options: ["A.", "B.", "C.", "D."],
    correct: 3,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Ejecuta un plan de solución para un problema que involucra información cuantitativa o esquemática.",
    component: "",
    standard:
      "Uso argumentos geométricos para resolver y formular problemas en contextos matemáticos y en otras ciencias.",
    skill: "",
    evaluationCriteria:
      "La capacidad para determinar la figura que representa correctamente un procedimiento geométrico.",
    justification:
      "Siguiendo los pasos de la construcción, se tiene que: Se construyen dos triángulos equiláteros MNP y MNQ. Luego se traza el segmento PQ, intersecando a MN en R. La anterior, es la construcción geométrica que debió hacer el estudiante.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que los segmentos MN y PQ se intersectan en el centro R de la circunferencia y, por tanto, se cortan mutuamente en dos partes congruentes, concluyendo la representación resultante cumple con la construcción descrita. <br> Es posible que los estudiantes que elijan la opción B observen que se han construido dos triángulos congruentes y, por tanto, la representación resultante cumple con la construcción descrita. Sin embargo, no tiene en cuenta que los puntos M y N deben ser vértices de los triángulos. <br> Es posible que los estudiantes que elijan la opción C consideren que M y N deben ser los centros de las circunferencias concluyendo que los triángulos formados son equiláteros y, por tanto, la representación resultante cumple con la construcción descrita. Sin embargo, no tiene en cuenta que el segmento PQ debe intersectar a MN en R.",
  },
  {
    id: 53,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>La gráfica y la tabla muestran parte de la información que recibe la familia Ramírez en su factura telefónica del mes de enero.</p>
<p><strong>Diagrama de barras de los últimos consumos de voz</strong><br>
Su plan local actual es de 220 minutos<br>
Jul: 148 | Ago: 171 | Sep: 321 | Oct: 205 | Nov: 214 | Dic: 389 | Ene: 331 minutos consumidos</p>
<table border="1" cellpadding="4" cellspacing="0">
<thead><tr><th colspan="2">Estado de cuenta mes de enero</th></tr></thead>
<tbody>
  <tr><td>Saldo anterior</td><td>$49.610,00</td></tr>
  <tr><td>Gracias por su pago</td><td>$-49.610,00</td></tr>
  <tr><td><strong>Saldo</strong></td><td><strong>$0</strong></td></tr>
  <tr><td>Cargos del mes</td><td>$35.416,83</td></tr>
  <tr><td>IVA</td><td>$6.378,70</td></tr>
  <tr><td><strong>Subtotal</strong></td><td><strong>$41.795,53</strong></td></tr>
  <tr><td>Crédito por ajuste a la decena</td><td>$-5,53</td></tr>
  <tr><td><strong>Total a pagar</strong></td><td><strong>$41.790,00</strong></td></tr>
  <tr><td colspan="2"><strong>Cargos del mes</strong></td></tr>
  <tr><td>Plan local</td><td>$20.086,21</td></tr>
  <tr><td>Consumo adicional</td><td>$14.065,92</td></tr>
  <tr><td>Llamada en espera</td><td>$1.264,70</td></tr>
  <tr><td><strong>Total cargos del mes</strong></td><td><strong>$35.416,83</strong></td></tr>
</tbody>
</table>`,
    text: "El tiempo adicional consumido por la familia Ramírez en enero fue:",
    options: [
      "1 hora y 11 minutos.",
      "1 hora y 51 minutos.",
      "3 horas y 40 minutos.",
      "5 horas y 31 minutos.",
    ],
    correct: 1,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Resuelve un problema que involucra información cuantitativa o esquemática.",
    component: "",
    standard:
      "Interpreto y comparo resultados de estudios con información estadística provenientes de medios de comunicación.",
    skill: "",
    evaluationCriteria:
      "La capacidad para obtener un dato implícito a partir de la información presentada en una gráfica de barras.",
    justification:
      "Dado que el plan local actual de la familia Ramírez es de 220 minutos, y en el mes de enero el consumo fue de 331 minutos, entonces, se registró un consumo adicional de 111 minutos, que son equivalentes a 1 hora y 51 minutos.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A asocien el consumo adicional de 111 minutos con 1: 11 horas. <br> Es posible que los estudiantes que elijan la opción C consideren el equivalente en horas del plan local actual de 220 minutos, que son equivalentes a 3 horas y 40 minutos. <br> Es posible que los estudiantes que elijan la opción D consideren el equivalente en horas del consumo de enero de 331 minutos, que son equivalentes a 5 horas y 31 minutos.",
  },
  {
    id: 54,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>La gráfica y la tabla muestran parte de la información que recibe la familia Ramírez en su factura telefónica del mes de enero.</p>
<p><strong>Diagrama de barras de los últimos consumos de voz</strong><br>
Su plan local actual es de 220 minutos<br>
Jul: 148 | Ago: 171 | Sep: 321 | Oct: 205 | Nov: 214 | Dic: 389 | Ene: 331 minutos consumidos</p>
<table border="1" cellpadding="4" cellspacing="0">
<thead><tr><th colspan="2">Estado de cuenta mes de enero</th></tr></thead>
<tbody>
  <tr><td>Saldo anterior</td><td>$49.610,00</td></tr>
  <tr><td>Gracias por su pago</td><td>$-49.610,00</td></tr>
  <tr><td><strong>Saldo</strong></td><td><strong>$0</strong></td></tr>
  <tr><td>Cargos del mes</td><td>$35.416,83</td></tr>
  <tr><td>IVA</td><td>$6.378,70</td></tr>
  <tr><td><strong>Subtotal</strong></td><td><strong>$41.795,53</strong></td></tr>
  <tr><td>Crédito por ajuste a la decena</td><td>$-5,53</td></tr>
  <tr><td><strong>Total a pagar</strong></td><td><strong>$41.790,00</strong></td></tr>
  <tr><td colspan="2"><strong>Cargos del mes</strong></td></tr>
  <tr><td>Plan local</td><td>$20.086,21</td></tr>
  <tr><td>Consumo adicional</td><td>$14.065,92</td></tr>
  <tr><td>Llamada en espera</td><td>$1.264,70</td></tr>
  <tr><td><strong>Total cargos del mes</strong></td><td><strong>$35.416,83</strong></td></tr>
</tbody>
</table>`,
    text: "El señor Ramírez considera que el valor del minuto adicional del mes de enero fue excesivo. Su hija asegura que la diferencia entre el valor del minuto del plan y el valor del minuto adicional es de $35,42. ¿Cuál de los siguientes datos NO se necesita para hallar esta diferencia?",
    options: [
      "La cantidad de minutos del plan.",
      "El valor del consumo adicional.",
      "El total de cargos del mes.",
      "El valor del plan local.",
    ],
    correct: 2,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Diseña planes para la solución de problemas que involucran información cuantitativa o esquemática.",
    component: "",
    standard:
      "Comparo y contrasto las propiedades de los números (naturales, enteros, racionales y reales) y las de sus relaciones y operaciones para construir, manejar y utilizar apropiadamente los distintos sistemas numéricos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para determinar datos innecesarios para solucionar un problema.",
    justification:
      "Para determinar el valor por minuto del plan local se debe dividir el costo del plan local entre la cantidad de minutos del plan local; para determinar el valor por minuto adicional se debe dividir el costo del consumo adicional entre la cantidad de minutos adicionales consumidos en el mes de enero. Por tanto, para determinar la diferencia entre el valor por minuto del plan local y el del minuto adicional, solo se requieren estos cuatro datos, y no es necesario utilizar el total de cargos del mes para hallar dicha diferencia.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que solo es necesario determinar el costo por minuto del consumo adicional, concluyendo que es innecesario utilizar la cantidad de minutos del plan. <br> Es posible que los estudiantes que elijan la opción B consideren que solo es necesario determinar el costo por minuto del plan local, concluyendo que es innecesario utilizar el valor del consumo adicional. <br> Es posible que los estudiantes que elijan la opción D consideren que solo es necesario determinar la diferencia entre los minutos del plan local y los del consumo adicional, concluyendo que es innecesario utilizar el valor del plan local.",
  },
  {
    id: 55,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>En el servicio de urgencias de un hospital se sigue este procedimiento para clasificar a un paciente: en el momento de su llegada recibe un número de turno con la hora de llegada; cuando el tablero digital muestra ese número, el paciente pasa a valoración y se clasifica; luego regresa a la sala a esperar el llamado para ser atendido.</p>
<p>La tabla muestra los niveles de clasificación, el tiempo de espera en sala desde que el paciente recibe el turno y el porcentaje de personas clasificadas diariamente en cada nivel.</p>
<table border="1" cellpadding="4" cellspacing="0">
<thead>
  <tr>
    <th>Nivel</th>
    <th>Tiempo en sala de espera</th>
    <th>Distribución diaria de los pacientes por niveles (%)</th>
  </tr>
</thead>
<tbody>
  <tr><td>I</td><td>Atención inmediata</td><td>1 %</td></tr>
  <tr><td>II</td><td>Entre 5 minutos y 2 horas</td><td>5 %</td></tr>
  <tr><td>III</td><td>Entre 4 y 6 horas</td><td>74 %</td></tr>
  <tr><td>IV</td><td>Debe solicitar atención por consulta externa</td><td>20 %</td></tr>
</tbody>
</table>`,
    text: "Isabel llegó a este hospital y recibió el turno 180. Fue clasificada en Nivel III y al cabo del máximo tiempo indicado para ese nivel es llamada para ser atendida; en ese momento observa que el tablero digital va en el número 240. ¿Aproximadamente cuántas personas por hora llegaron a la sala de espera mientras Isabel estuvo allí?",
    options: [
      "60 personas por hora.",
      "40 personas por hora.",
      "15 personas por hora.",
      "10 personas por hora.",
    ],
    correct: 3,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Resuelve un problema que involucra información cuantitativa o esquemática.",
    component: "",
    standard:
      "Interpreto la noción de derivada como razón de cambio y como valor de la pendiente de la tangente a una curva y desarrollo métodos para hallar las derivadas de algunas funciones básicas en contextos matemáticos y no matemáticos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para determina la razón de cambio que satisface las condiciones dadas.",
    justification:
      "Como Isabel fue clasificada en el Nivel III, recibió el turno 180 cuando llegó, y fue atendida en el tiempo máximo de espera que es de 6 horas, entonces, cuando observa el número 240 al momento de ser atendida han llegado 240 personas – 180 personas = 60 personas adicionales y, por tanto, han llegado 60 personas/6 horas = 10 personas.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A solamente consideren la cantidad adicional de personas que llegó al hospital después de que Isabel llegó, es decir 240 – 180 = 60. <br> Es posible que los estudiantes que elijan la opción B consideren que en las 6 horas en que estuvo Isabel en sala de espera llegaron 240 personas y, por tanto, han llegado 240 personas/6 horas = 40 personas por hora. <br> Es posible que los estudiantes que elijan la opción C consideren que Isabel estuvo solo 4 horas en la sala de espera (tiempo mínimo de espera) y, por tanto, han llegado 60 personas/4 horas = 15 personas por hora.",
  },
  {
    id: 56,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>Cada uno de los lados del cuadrilátero de la figura se traslada una unidad hacia la izquierda; luego se amplía esta al doble de su tamaño, manteniéndose fijo el vértice inferior. Dos de los vértices del cuadrilátero ampliado son (-5,7) y (-1,1).</p>
<p>El cuadrilátero original tiene vértices en (-2,4) y (2,4) [entre otros].</p>`,
    text: "¿Cuáles son las coordenadas de los otros dos vértices?",
    options: [
      "(-1,5) y (3,7).",
      "(5,-1) y (7,3).",
      "(5,7) y (1,1).",
      "(1,5) y (-5,-7).",
    ],
    correct: 0,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Ejecuta un plan de solución para un problema que involucra información cuantitativa o esquemática.",
    component: "",
    standard:
      "Identifico características de localización de objetos geométricos en sistemas de representación cartesiana y otros (polares, cilíndricos y esféricos) y en particular de las curvas y figuras cónicas.",
    skill: "",
    evaluationCriteria:
      "La capacidad para determinar las coordenadas de los vértices de una figura a la que se le realiza una transformación.",
    justification:
      "Si el cuadrilátero de la figura se traslada una unidad hacia la izquierda y luego se amplía hasta el doble de su tamaño, manteniendo fijo el vértice inferior, se obtiene: Por tanto, conocidos los vértices (–5, 7) y (–1, 1) del cuadrilátero ampliado, los otros dos vértices tienen coordenadas (–1, 5) y (3, 7).",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción B consideren que en las coordenadas de un punto primero se indica la posición respecto al eje vertical y después respecto al eje horizontal, obteniendo como coordenadas de los otros dos vértices los puntos (5, –1) y (7, 3). <br> Es posible que los estudiantes que elijan la opción C consideren que al ser el cuadrilátero una figura simétrica respecto a la recta vertical que pasa por el punto (–1, 1), entonces, si se conocen los vértices (–5, 7) y (–1, 1), los otros dos vértices deben tener coordenadas (5, 7) y (1, 1). <br> Es posible que los estudiantes que elijan la opción D consideren que el cuadrilátero se trasladó una unidad a la derecha, y se amplía hasta el doble de su tamaño: Identificando que uno de los vértices está en el punto (1, 5) y el otro en el punto (5, 7). Sin embargo, este último punto lo asocia con el (–5, –7).",
  },
  {
    id: 57,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>Un empresario compra un apartamento de $80.000.000 (incluidos los intereses), y acuerda pagarlo en cuotas mensuales de igual valor. Para ello, le ofrecen las siguientes opciones de pago que se muestran en la tabla.</p>
<table border="1" cellpadding="4" cellspacing="0">
<thead>
  <tr>
    <th>N.° de cuotas</th>
    <th>Valor cuota ($)</th>
  </tr>
</thead>
<tbody>
  <tr><td>50</td><td>1.600.000</td></tr>
  <tr><td>40</td><td>2.000.000</td></tr>
  <tr><td>32</td><td>2.500.000</td></tr>
  <tr><td>25</td><td>3.200.000</td></tr>
  <tr><td>20</td><td>4.000.000</td></tr>
  <tr><td>16</td><td>5.000.000</td></tr>
  <tr><td>10</td><td>8.000.000</td></tr>
  <tr><td>8</td><td>10.000.000</td></tr>
</tbody>
</table>`,
    text: "Respecto a la información de la tabla, es verdadero afirmar que",
    options: [
      "el empresario paga más por el apartamento dependiendo de la cantidad de cuotas que decida pagar.",
      "de manera proporcional, a mayor cantidad de cuotas menor valor se pagará en cada una de ellas.",
      "el empresario paga solo el valor del apartamento únicamente cuando elige el menor número de cuotas.",
      "de manera proporcional, a mayor valor pagado por cuota, más tiempo se tardará en pagar la deuda.",
    ],
    correct: 1,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Da cuenta de las características básicas de la información presentada en diferentes formatos como series, gráficas, tablas y esquemas.",
    component: "",
    standard:
      "Comparo y contrasto las propiedades de los números (naturales, enteros, racionales y reales) y las de sus relaciones y operaciones para construir, manejar y utilizar apropiadamente los distintos sistemas numéricos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para identificar una afirmación verdadera sobre la relación entre dos variables representadas en una tabla.",
    justification:
      "A partir de la información en la tabla se puede concluir que el número de cuotas y el valor de la cuota son inversamente proporcionales, y que entre mayor sea el número de cuotas, menor valor se pagará en cada una de ellas.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que entre menor sea el número de cuotas, mayor será el valor de la cuota y, por tanto, mayor será el valor total por pagar por el apartamento. <br> Es posible que los estudiantes que elijan la opción C comprueben que, para 8 cuotas, el valor de cada cuota es de $10.000.000 y, por tanto, pagarán los $80.000.000 que vale el apartamento, concluyendo que esto solo es posible para estos dos valores particulares de número de cuotas y valor de la cuota. <br> Es posible que los estudiantes que elijan la opción D identifiquen la constante de proporcionalidad (80.000.000) entre el número de cuotas y el valor de la cuota. Sin embargo, asumen que los dos valores crecen por igual, concluyendo que, a mayor valor por cuota, más tiempo se tardará en pagar la deuda.",
  },
  {
    id: 58,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>Para ambientar musicalmente una reunión, se cuenta con tres CD, cada uno de ellos tiene canciones de salsa (S) y merengue (M).</p>`,
    text: "¿Cuál de los siguientes diagramas representa la situación de seleccionar al azar una canción del CD1, luego una del CD2 y finalmente una del CD3?",
    options: ["A.", "B.", "C.", "D."],
    correct: 0,
    competency: "Interpretación.",
    level: "",
    assertion:
      "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.",
    evidence:
      "Transforma la representación de una o más piezas de información.",
    component: "",
    standard:
      "Interpreto nociones básicas relacionadas con el manejo de información como población, muestra, variable aleatoria, distribución de frecuencias, parámetros y estadígrafos).",
    skill: "",
    evaluationCriteria:
      "La capacidad para representar un experimento aleatorio mediante un diagrama de árbol.",
    justification:
      "Como el CD1 tiene canciones de salsa y de merengue, el resultado de seleccionar al azar una canción de este CD se puede diagramar con dos ramas (S y M). Como después se debe seleccionar al azar una canción del CD2, que también tiene canciones de salsa y merengue solamente, el resultado de seleccionar al azar una canción del CD2, después de haber seleccionado una del CD1, se puede diagramar de la siguiente manera. Finalmente, y de manera análoga, el resultado de seleccionar al azar una canción del CD3, después de haber seleccionado una del CD2, y después de haber seleccionado una del CD1, se puede diagramar de la misma manera.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción B consideren que, si selecciona una canción de salsa en el CD 1, las canciones seleccionadas en los CD 2 y 3 también serán de salsa. Análogamente, consideran que, si selecciona una canción de merengue en el CD 1, las canciones seleccionadas en los CD 2 y 3 también serán de merengue. <br> Es posible que los estudiantes que elijan la opción C consideren que la selección de los CD también se realiza al azar, y que en el CD1 solo hay canciones de salsa, en el CD2 solo de merengue, y en el CD3 de salsa y merengue. <br> Es posible que los estudiantes que elijan la opción D consideren que la selección de los CD también se realiza al azar, y que en cada CD hay canciones tanto de salsa como de merengue.",
  },
  {
    id: 59,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>Para observar los efectos de un medicamento, este se inyecta en un animal y se registra el comportamiento de la temperatura (ºC) en función del tiempo (horas), como lo muestra la gráfica.</p>
<p>La gráfica muestra una curva sinusoidal con temperatura entre 34 y 38 ºC y periodo de 3 horas, que inicia en 36 ºC cuando t = 0.</p>`,
    text: "¿Cuál de las siguientes expresiones corresponde a la curva que describe la temperatura del animal en función del tiempo?",
    options: [
      "F(t) = 2cos(2π/3 · t) + 36",
      "F(t) = 3cos(2π/3 · t) + 38",
      "F(t) = 2sen(2π/3 · t) + 36",
      "F(t) = 3sen(2π/3 · t) + 38",
    ],
    correct: 2,
    competency: "Formulación y ejecución.",
    level: "",
    assertion:
      "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.",
    evidence:
      "Diseña planes para la solución de problemas que involucran información cuantitativa o esquemática.",
    component: "",
    standard:
      "Modelo situaciones de variación periódica con funciones trigonométricas e interpreto y utilizo sus derivadas.",
    skill: "",
    evaluationCriteria:
      "La capacidad para construir la función trigonométrica que representa una curva en una gráfica dada.",
    justification:
      "A partir de la información de la gráfica se puede determinar que la amplitud de la curva es 2, la curva está trasladada 36 unidades hacia arriba respecto al eje horizontal, y tiene periodo 3. Por tanto, la expresión que corresponde a la curva es: F(t) = 2 sen(2π/3(t + b)) + 36. Como en t=0, F(t)= 36, entonces 0 = 2 sen(2π/3 · b) y, por tanto, b=0, de donde F(t) = 2 sen(2π/3 · t) + 36.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción A consideren que como la amplitud de la curva es 2, la curva está trasladada 36 unidades hacia arriba respecto al eje horizontal, tiene periodo 3, e inicia en un valor mayor que 0, entonces debe estar asociada a la función coseno y, por tanto, la expresión que corresponde a la curva es F(t) = 2 cos(2π/3 · t) + 36. <br> Es posible que los estudiantes que elijan la opción B consideren la ordenada del punto más alto de la gráfica (38) como la cantidad de unidades en que se trasladó hacia arriba la curva. Además, consideran que la amplitud es el número de unidades que hay en el eje horizontal (3), y como la curva inicia en un valor mayor que 0, debe estar asociada a la función coseno; por tanto, la expresión que corresponde a la curva es F(t) = 3 cos(2π/3 · t) + 36. <br> Es posible que los estudiantes que elijan la opción D consideren que la amplitud es el número de unidades que hay en el eje horizontal (3). Además, consideran la ordenada del punto más alto de la gráfica (38) como la cantidad de unidades en que se trasladó hacia arriba la curva, asociándola, por tanto, con la expresión F(t) = 3 sen(2π/3 · t) + 38.",
  },
  {
    id: 60,
    simulators: [1, 3],
    subject: "mat",
    context: `<p>La velocidad máxima de un auto es 100 km/h. Pilar afirma que, a su velocidad máxima, en 100 horas el auto avanzará 1 km.</p>`,
    text: "La afirmación de Pilar es",
    options: [
      "falsa, porque a la velocidad máxima en una hora recorrerá 100 km.",
      "verdadera, porque al dividir la velocidad máxima entre 100 horas se obtiene 1 km.",
      "falsa, porque en 100 horas el auto recorrerá 100 km.",
      "verdadera, porque al dividir 100 entre 1, se obtiene el valor 100.",
    ],
    correct: 0,
    competency: "Argumentación.",
    level: "",
    assertion:
      "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.",
    evidence:
      "Plantea afirmaciones que sustentan o refutan una interpretación dada a la información disponible en el marco de la solución de un problema.",
    component: "",
    standard:
      "Interpreto la noción de derivada como razón de cambio y como valor de la pendiente de la tangente a una curva y desarrollo métodos para hallar las derivadas de algunas funciones básicas en contextos matemáticos y no matemáticos.",
    skill: "",
    evaluationCriteria:
      "La capacidad para analizar la validez de una afirmación sobre la interpretación de una razón de cambio.",
    justification:
      "Si la velocidad máxima del auto es de 100 km/h, entonces, cada hora el auto recorre 100 km manteniendo dicha velocidad. Por tanto, en 100 horas el auto recorrerá, a su velocidad máxima, 100 horas × 100 km/1 hora = 100.000 km, de donde la afirmación de Pilar es falsa.",
    invalidOptions:
      "Es posible que los estudiantes que elijan la opción B consideren que para calcular la distancia recorrida en 100 horas se debe dividir la velocidad máxima entre 100: 100 km/h / 100 h = 1 km, omitiendo la unidad de medida de tiempo. <br> Es posible que los estudiantes que elijan la opción C consideren que en la expresión el 100 está asociado tanto a los kilómetros como a las horas y, por tanto, el auto recorrerá 100 km en 100 horas. <br> Es posible que los estudiantes que elijan la opción D consideren que 100 km/h es igual a 100 h/km, es decir, el orden de las unidades no es relevante y, por tanto, en 100 horas el auto recorre 1 km.",
  },

  // {
  //   id: 41,
  //   simulators: [1,3],
  //   subject: "mat",
  //   context: `<p>En una bolsa hay 3 bolas rojas, 3 negras y 12 blancas. Una persona afirma que al sacar una bola al azar, los tres colores tienen la misma probabilidad de salir. </p>`,
  //   text: "Esta afirmación es",
  //   options: [
  //     "verdadera, pues el número de bolas de cada color no importa.",
  //     "falsa, pues no se sabe el número total de bolas en la bolsa.",
  //     "falsa, pues hay más bolas de un color que de los otros dos.",
  //     "verdadera, pues las bolas están repartidas de igual manera.",
  //   ],
  //   correct: 2,
  //   competency: "Argumentación.",
  //   level: "",
  //   assertion:
  //     "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.",
  //   evidence:
  //     "Plantea afirmaciones que sustentan o refutan una interpretación dada a la información disponible en el marco de la solución de un problema.",
  //   component: "",
  //   standard:
  //     "Justifico o refuto inferencias basadas en razonamientos estadísticos a partir de resultados de estudios publicados en los medios o diseñados en el ámbito escolar.",
  //   skill: "",
  //   evaluationCriteria:
  //     "La capacidad para justificar la validez de una afirmación sobre una probabilidad a partir de la descripción de los elementos de un conjunto.",
  //   justification:
  //     "En la bolsa hay en total 18 bolas y, por tanto, la probabilidad de seleccionar al azar una roja es de 3/18; una negra, de 3/18; una blanca, de 12/18. Luego, como 3 < 12 entonces el color blanco tiene una mayor probabilidad de ser elegido al azar.",
  //   invalidOptions:
  //     "Es posible que los estudiantes que elijan la opción A consideren que, al haber bolas de 3 colores en la bolsa, la probabilidad de sacar una bola de cualquier color es de 1/3. <br> Es posible que los estudiantes que elijan la opción B consideren que las 3 bolas rojas, las 3 negras y las 12 blancas son solo una muestra del total de bolas que hay en la bolsa, por lo que se desconoce el número total de bolas. <br> Es posible que los estudiantes que elijan la opción D consideren que, como las bolas están mezcladas dentro de la bolsa, y no se puede ver el color, entonces están repartidas de igual manera.",
  // },

  // Pregunta de prueba con optsImg
  // {
  //   id: 150,
  //   simulators: [1],
  //   subject: "mat",
  //   context: "Observe las siguientes figuras geométricas:",
  //   text: "¿Cuál de las opciones corresponde a un triángulo rectángulo?",
  //   options: [
  //     "A. Figura con 3 lados iguales",
  //     "B. Figura con 1 ángulo recto",
  //     "C. Figura con todos los ángulos menores a 90°",
  //     "D. Figura con 4 lados",
  //   ],
  //   optionsImg: [
  //     "test_triangulo_eq",
  //     "test_triangulo_recto",
  //     "test_triangulo_acut",
  //     "test_cuadrilatero",
  //   ],
  //   correct: 1,
  //   competency: "Interpretación y representación",
  //   level: 2,
  //   justification:
  //     "La figura B tiene un ángulo de 90°, característica del triángulo rectángulo.",
  // },
];

// Función para obtener preguntas de un simulacro específico
function getQuestionsForSimulacro(simulacroId) {
  return QUESTIONS.filter((q) => q.simulators.includes(simulacroId));
}

// Función para obtener preguntas por materia
function getQuestionsBySubject(subject) {
  return QUESTIONS.filter((q) => q.subject === subject);
}
